const FORM_KEY = "yuhu:order-form";
const esc = (v) => String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const money = (n) => "¥" + Math.round(n).toLocaleString("zh-CN");
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
const dim = (x) => (x.L ? `${x.L}*${x.W}*${x.H}` : "");
const titleCase = (t) => t ? t.charAt(0) + t.slice(1).toLowerCase() : "";

// Order rows: a standard set = 1 main row; a custom choice = 1 main row per seat; each option = 1 "选配" sub row.
export function orderRows(lines) {
  const rows = [];
  for (const ln of lines) {
    const n = Math.max(1, Number(ln.quantity) || 1);
    const c = ln.config;
    if (!c) {
      rows.push({ main: true, model: "", pic: ln.image, combo: "", name: ln.title, size: "", material: ln.specifications.map((s) => s.name).join(" / "), qty: n, unit: "件", price: ln.unitPriceYuan });
      continue;
    }
    const cn = `${titleCase(c.en)} ${c.cn}`.trim();
    const mat = c.material + (c.color ? ` ${c.color}` : "");
    const matStd = mat;
    const std = () => (c.standard || []).forEach((name) => rows.push({ main: false, std: true, model: "标配", pic: "", name, qty: 0, unit: "/", price: 0 }));
    if (c.set) {
      const sum = c.seats.reduce((t, x) => t + x.unit * x.qty, 0);
      rows.push({ main: true, model: c.model, pic: c.cover, combo: c.set.img, name: `${cn}\n${c.set.name}`, size: c.set.size.replace(/×/g, "*"), material: matStd, qty: n, unit: "套", price: sum, remark: c.seats.map((x) => `${x.desc}×${x.qty}`).join("、") });
      std();
    } else {
      c.seats.forEach((x, k) => rows.push({ main: true, model: c.model, pic: c.cover, combo: x.img, name: `${cn}\n${x.desc}`, size: dim(x), material: k === 0 ? matStd : mat, qty: x.qty * n, unit: "位", price: x.unit, remark: x.func }));
      std();
    }
    c.options.forEach((o) => rows.push({ main: false, model: "选配", pic: o.img, name: o.name, qty: o.qty * n, unit: o.per, price: o.unit }));
  }
  return rows;
}

function loadZip() {
  if (window.JSZip) return Promise.resolve(window.JSZip);
  return new Promise((ok, fail) => { const sc = document.createElement("script"); sc.src = "./static/yuhu/jszip.min.js"; sc.onload = () => ok(window.JSZip); sc.onerror = fail; document.head.appendChild(sc); });
}
async function imageBytes(src) {
  if (!src) return null;
  try {
    const blob = await (await fetch(src)).blob();
    const url = URL.createObjectURL(blob);
    const size = await new Promise((ok) => { const im = new Image(); im.onload = () => ok([im.naturalWidth, im.naturalHeight]); im.onerror = () => ok(null); im.src = url; });
    URL.revokeObjectURL(url);
    if (!size) return null;
    const ext = /png/.test(blob.type) ? "png" : "jpeg";
    return { data: await blob.arrayBuffer(), ext, w: size[0], h: size[1] };
  } catch { return null; }
}
const noType = (a) => a.replace(/ t="\w+"/, "");
function cellXml(ref, attrs, v) {
  if (v && typeof v === "object") return `<c r="${ref}" ${noType(attrs)}><f>${v.f}</f><v>${v.v}</v></c>`;
  if (v === "" || v == null) return `<c r="${ref}" ${noType(attrs)}/>`;
  if (typeof v === "number") return `<c r="${ref}" ${noType(attrs)}><v>${v}</v></c>`;
  return `<c r="${ref}" ${noType(attrs)} t="inlineStr"><is><t xml:space="preserve">${esc(v)}</t></is></c>`;
}
function setCell(xml, ref, v) {
  return xml.replace(new RegExp(`<c r="${ref}"( [^>]*?)?(/>|>[\\s\\S]*?</c>)`), (m, attrs = "") => cellXml(ref, (attrs || "").trim(), v));
}
const shiftRef = (ref, d, from) => ref.replace(/([A-Z]+)(\d+)/g, (m, c, r) => c + (+r >= from ? +r + d : +r));

export async function buildXlsx(lines, form) {
  const JSZip = await loadZip();
  const zip = await JSZip.loadAsync((await import("./yh-order-tpl.js")).default, { base64: true });
  const path = "xl/worksheets/sheet1.xml";
  let sheet = await zip.file(path).async("string");
  const rows = orderRows(lines);
  const n = Math.max(2, rows.length), d = n - 2, FIRST = 10;
  const tplMain = sheet.match(/<row r="10"[\s\S]*?<\/row>/)[0];
  const tplSub = sheet.match(/<row r="11"[\s\S]*?<\/row>/)[0];
  // template has item rows 10-11; everything from row 12 moves down by d
  sheet = sheet.replace(/<mergeCell ref="D11:G11"\/>/, "");
  if (d) {
    sheet = sheet.replace(/<row r="(\d+)"/g, (m, r) => (+r >= 12 ? `<row r="${+r + d}"` : m))
      .replace(/<c r="([A-Z]+)(\d+)"/g, (m, c, r) => (+r >= 12 ? `<c r="${c}${+r + d}"` : m))
      .replace(/<mergeCell ref="([^"]+)"/g, (m, ref) => `<mergeCell ref="${shiftRef(ref, d, 12)}"`)
      .replace(/<dimension ref="([^"]+)"/, (m, ref) => `<dimension ref="${shiftRef(ref, d, 12)}"`);
  }
  const items = [], merges = [];
  for (let i = 0; i < n; i++) {
    const r = FIRST + i, x = rows[i] || { main: true };
    const tpl = x.main ? tplMain : tplSub, from = x.main ? 10 : 11;
    let row = tpl.replace(new RegExp(`<row r="${from}"`), `<row r="${r}"`).replace(new RegExp(`<c r="([A-Z]+)${from}"`, "g"), `<c r="$1${r}"`);
    const has = x.price != null;
    const vals = x.main
      ? { A: i + 1, B: x.model, E: x.name, F: x.size, G: x.material, H: x.qty, I: x.unit, J: x.price, K: has ? { f: `H${r}*J${r}`, v: x.price * x.qty } : "", L: x.remark }
      : x.std ? { A: i + 1, B: x.model, D: x.name, H: "/", I: "/", J: "/", K: "/" }
      : { A: i + 1, B: x.model, D: x.name, H: x.qty, I: x.unit, J: x.price, K: { f: `H${r}*J${r}`, v: x.price * x.qty } };
    for (const [col, v] of Object.entries(vals)) row = setCell(row, `${col}${r}`, v === undefined ? "" : v);
    if (x.std) row = row.replace(/ ht="[\d.]+"/, ' ht="30"');
    if (!x.main) merges.push(`D${r}:G${r}`);
    items.push(row);
  }
  sheet = sheet.replace(/<row r="10"[\s\S]*?<row r="11"[\s\S]*?<\/row>/, items.join(""));
  if (merges.length) sheet = sheet.replace(/<mergeCells count="\d+">/, "<mergeCells>").replace("<mergeCells>", "<mergeCells>" + merges.map((m) => `<mergeCell ref="${m}"/>`).join(""));
  const cnt = (sheet.match(/<mergeCell ref=/g) || []).length;
  sheet = sheet.replace(/<mergeCells( count="\d+")?>/, `<mergeCells count="${cnt}">`);
  // header, totals, deposit, date
  const last = FIRST + n - 1, T = 12 + d;
  const total = rows.reduce((t, x) => t + x.price * x.qty, 0);
  const dep = Math.round(total * 0.5);
  const dt = new Date();
  const set = { C5: form.customer, H5: form.orderDate || today(), C6: form.tel, H6: form.deliveryDate, C7: form.receiver, H7: form.address,
    [`H${T}`]: rows.reduce((t, x) => t + x.qty, 0), [`K${T}`]: { f: `SUM(K${FIRST}:K${last})`, v: total }, [`K${T + 1}`]: dep, [`K${T + 2}`]: total - dep,
    [`G${30 + d}`]: `${dt.getFullYear()}年${dt.getMonth() + 1}月${dt.getDate()}日` };
  for (const [ref, v] of Object.entries(set)) sheet = setCell(sheet, ref, v ?? "");
  zip.file(path, sheet);
  const wb = await zip.file("xl/workbook.xml").async("string");
  zip.file("xl/workbook.xml", wb.replace(/订货清单!\$A\$1:\$L\$(\d+)/, (m, r) => `订货清单!$A$1:$L$${+r + d}`));
  // pictures: C = product picture, D = sketch (main rows only)
  let drawing = await zip.file("xl/drawings/drawing1.xml").async("string");
  let rels = await zip.file("xl/drawings/_rels/drawing1.xml.rels").async("string");
  const colPx = { 2: 175, 3: 180 }, EMU = 9525;
  const colW = {}; for (const m of sheet.matchAll(/<col min="(\d+)" max="(\d+)"[^>]*?width="([\d.]+)"/g)) for (let c = +m[1]; c <= +m[2]; c++) colW[c] = +m[3];
  const colLeft = (c) => { let x = 0; for (let k = 1; k <= c; k++) x += Math.round((colW[k] || 8.75) * 8 * EMU); return x; };
  const rowH = {}; for (const m of sheet.matchAll(/<row r="(\d+)"[^>]*?ht="([\d.]+)"/g)) rowH[+m[1]] = +m[2];
  const rowTop = (r0) => { let y = 0; for (let k = 1; k <= r0; k++) y += Math.round((rowH[k] || 15) * 12700); return y; };
  let id = 100, anchors = "";
  for (let i = 0; i < rows.length; i++) {
    const rowPx = rows[i].main ? 164 : 133;
    for (const [col, src] of [[2, rows[i].pic], [3, rows[i].main ? rows[i].combo : ""]]) {
      const im = await imageBytes(src);
      if (!im) continue;
      id++;
      const name = `yh${id}.${im.ext}`;
      zip.file(`xl/media/${name}`, im.data);
      rels = rels.replace("</Relationships>", `<Relationship Id="rId${id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/${name}"/></Relationships>`);
      const sc = col === 2 && rows[i].main ? 1 : 0.7, k = Math.min(colPx[col] * 0.8 * sc / im.w, rowPx * 0.72 * sc / im.h), w = Math.round(im.w * k), h = Math.round(im.h * k);
      const ox = Math.round((colPx[col] - w) / 2), oy = Math.round((rowPx - h) / 2);
      const pic = `<xdr:pic><xdr:nvPicPr><xdr:cNvPr id="${id}" name="Picture ${id}"/><xdr:cNvPicPr><a:picLocks noChangeAspect="1"/></xdr:cNvPicPr></xdr:nvPicPr><xdr:blipFill><a:blip r:embed="rId${id}"/><a:stretch><a:fillRect/></a:stretch></xdr:blipFill><xdr:spPr><a:xfrm><a:off x="${colLeft(col) + ox * EMU}" y="${rowTop(FIRST - 1 + i) + oy * EMU}"/><a:ext cx="${w * EMU}" cy="${h * EMU}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln w="9525"><a:noFill/></a:ln></xdr:spPr></xdr:pic>`;
      const r0 = FIRST - 1 + i;
      anchors += `<xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>${col}</xdr:col><xdr:colOff>${ox * EMU}</xdr:colOff><xdr:row>${r0}</xdr:row><xdr:rowOff>${oy * EMU}</xdr:rowOff></xdr:from><xdr:to><xdr:col>${col}</xdr:col><xdr:colOff>${(ox + w) * EMU}</xdr:colOff><xdr:row>${r0}</xdr:row><xdr:rowOff>${(oy + h) * EMU}</xdr:rowOff></xdr:to>${pic}<xdr:clientData/></xdr:twoCellAnchor>`;
    }
  }
  zip.file("xl/drawings/drawing1.xml", drawing.replace("</xdr:wsDr>", anchors + "</xdr:wsDr>"));
  zip.file("xl/drawings/_rels/drawing1.xml.rels", rels);
  let ct = await zip.file("[Content_Types].xml").async("string");
  if (!/Extension="jpeg"/.test(ct)) ct = ct.replace("<Default ", '<Default Extension="jpeg" ContentType="image/jpeg"/><Default ');
  zip.file("[Content_Types].xml", ct);
  return zip.generateAsync({ type: "blob", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

const ORDERS_KEY = "yuhu:orders";
const TERMS = ["1、客户在购货时须先付定金50%，特殊定制的非常规产品全款下单，确认订货并且支付定金或者全款后，不得以任何理由退货或退款；", "2、我司完成产品生产后，会及时通知客户，客户补齐余款，方可发货，客户如需安排发货，请提前2个工作日通知我司，并提供完整出货信息；", "3、此订单上价格为产品单价，并不包含运输费、搬运费、发票等；", "4、此订单上产品图片与实物颜色有所差别，请以产品展厅展示颜色为实，或者与销售人员提前确认面料样板色；", "5、客户在我司所订产品超过交货期60天内不提货的，本公司有权收取仓储费，超过半年，我司有权取消订单，进行货物的调配处置；", "6、此订单经购货方签收或委托代理人签字后生效，具有法律效力，如购货方对所定货物有所改动，须在下单后24小时内提出，否则无效；", "7、如果客户不能现场签字确认，请假保留此订单电子版作为确认凭证，并且经过微信、QQ、邮件、等文字沟通的纪录，也具有法律效力；", "8、我司产品免费保修一年，因为产品质量原因造成的售后，我司免费维修，无法维修的可退换货处理，越过保修期的产品，我司终身提供维护服务，只收取成本费；", "9、沙发等软体家具，交货期为25-30天，木制品有库存如有库存可直接发货，无库存，交货周期为25-30天；", "10、因篇幅有限，未尽事宜，请参考本电子订单第二页的客户合作说明书。"];
const readOrders = () => { try { return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]"); } catch { return []; } };
function saveOrder(order) {
  const list = readOrders().filter((o) => o.id !== order.id);
  list.unshift(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(list.slice(0, 50)));
}
function loadScript(src, name) {
  if (window[name]) return Promise.resolve(window[name]);
  return new Promise((ok, fail) => { const sc = document.createElement("script"); sc.src = src; sc.onload = () => ok(window[name]); sc.onerror = fail; document.head.appendChild(sc); });
}
const css = `
.yo{position:fixed;inset:0;z-index:999;background:#f6f6f6;overflow:auto;font-size:.8125rem;color:#111;-webkit-overflow-scrolling:touch}
.yo-top{position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;height:3rem;padding:0 1rem;background:#fff;border-bottom:.03125rem solid #eee;font-size:1rem;font-weight:600}
.yo-top span:last-child{font-size:1.5rem;font-weight:300;color:#666;padding:0 .25rem}
.yo-card{margin:.5625rem 0;padding:.75rem 1rem;background:#fff}
.yo-h{font-size:.84375rem;font-weight:600;margin-bottom:.5rem}
.yo-f{display:grid;grid-template-columns:4.5rem 1fr;align-items:center;gap:.5rem;padding:.375rem 0;border-bottom:.03125rem solid #f0f0f0}
.yo-f label{color:#666}
.yo-f input{border:none;outline:none;font-size:.8125rem;padding:.25rem 0;background:transparent;width:100%}
.yo-sc{overflow-x:auto}
.yo-t{border-collapse:collapse;min-width:42rem;font-size:.6875rem}
.yo-t th,.yo-t td{border:.03125rem solid #333;padding:.25rem;text-align:center;vertical-align:middle;white-space:pre-line}
.yo-t th{background:#fff2cc;font-weight:500}
.yo-t img{max-width:5rem;max-height:3.5rem;display:block;margin:0 auto}
.yo-sum{display:flex;justify-content:space-between;padding:.25rem 0;color:#555}
.yo-sum b{color:#9D7435;font-weight:600}
.yo-btns{display:flex;gap:.625rem;margin:1rem}
.yo-btn{flex:1;height:2.75rem;line-height:2.75rem;text-align:center;background:#111;color:#fff;font-size:.875rem}
.yo-btn.ghost{background:#fff;color:#111;border:.03125rem solid #111;box-sizing:border-box;line-height:2.6875rem}
.yo-row{display:flex;align-items:center;gap:.75rem;padding:.875rem 1rem;background:#fff;border-bottom:.03125rem solid #eee}
.yo-row .d{color:#888;font-size:.75rem;white-space:nowrap}
.yo-row .n{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.yo-row .m{color:#9D7435;font-weight:600;white-space:nowrap}
.yo-row .a{color:#bbb}
.yo-empty{padding:5rem 0;text-align:center;color:#999}
.yo-pic{position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,.85);overflow:auto;-webkit-overflow-scrolling:touch}
.yo-pic img{display:block;width:100%}
.yo-pic div{position:sticky;top:0;padding:.75rem 1rem;color:#fff;text-align:center;font-size:.8125rem;background:rgba(0,0,0,.6)}
.ys{position:absolute;left:-9999px;top:0;width:900px;background:#fff;color:#000;font-family:"PingFang SC","Microsoft YaHei",sans-serif;font-size:13px;padding:24px;box-sizing:border-box}
.ys table{border-collapse:collapse;width:100%}
.ys td{border:1px solid #000;padding:4px 6px;text-align:center;vertical-align:middle;white-space:pre-line;line-height:1.5}
.ys .y{background:#fff2cc;text-align:left}
.ys img.p{max-width:92%;max-height:100px}
.ys img.s{max-width:62%;max-height:72px}
`;
function ensureStyle() { if (!document.getElementById("yo-style")) { const st = document.createElement("style"); st.id = "yo-style"; st.textContent = css; document.head.appendChild(st); } }

function sheetHtml(rows, form) {
  const total = rows.reduce((t, x) => t + x.price * x.qty, 0), dep = Math.round(total * 0.5);
  const d = new Date();
  return `<div style="display:flex;align-items:center;border-bottom:2px solid #000;padding-bottom:6px"><img src="./static/yuhu/order-logo.png" style="height:70px"><div style="flex:1;text-align:center"><div style="font-size:30px;font-weight:700">佛山市御虎智能家居科技有限公司</div><div style="font-size:15px;margin-top:4px">影院椅 / 功能沙发 / 高定家居</div><div style="font-size:11px;margin-top:4px">广东省佛山市南海区九江镇大谷村康佳莱斯工业园 TEL：400-876-3338 http:// www.royaltiger-casa.com</div></div></div>
<div style="text-align:center;font-size:24px;font-weight:700;margin:14px 0">订货清单(代合同） CONTRACT</div>
<table><tr><td class="y" style="width:14%">客户名称 Customer</td><td class="y" style="width:30%">${esc(form.customer)}</td><td class="y" style="width:18%">开单日期 Order date</td><td class="y">${esc(form.orderDate)}</td></tr>
<tr><td class="y">联系方式 Tel</td><td class="y">${esc(form.tel)}</td><td class="y">交货日期 Delivery date</td><td class="y">${esc(form.deliveryDate)}</td></tr>
<tr><td class="y">收货人 Receiver</td><td class="y">${esc(form.receiver)}</td><td class="y">送货地址 Address</td><td class="y">${esc(form.address)}</td></tr></table>
<table style="margin-top:-1px;table-layout:fixed"><colgroup><col style="width:3.4%"><col style="width:5.6%"><col style="width:14.6%"><col style="width:15%"><col style="width:8.4%"><col style="width:11.6%"><col style="width:13.6%"><col style="width:3.8%"><col style="width:3.9%"><col style="width:6.6%"><col style="width:7.7%"><col style="width:5.8%"></colgroup><tr style="font-size:12px"><td>序号<br>No.</td><td>产品型号<br>Product Code</td><td>产品图片<br>Product Picture</td><td>示意图<br>Sketch Map</td><td>名称<br>Description</td><td>产品尺寸 Size<br>长/L 宽/W 高/H</td><td>材质<br>Material</td><td>数量<br>Qty</td><td>单位<br>Unit</td><td>供货单价<br>Unit Pr</td><td>金额小计<br>Sum</td><td>备注<br>Remark</td></tr>
${rows.map((x, i) => `<tr style="height:${x.main ? 130 : x.std ? 44 : 100}px"><td>${i + 1}</td><td>${esc(x.model)}</td><td>${x.pic ? `<img class="${x.main ? "p" : "s"}" src="${x.pic}">` : ""}</td>${x.main ? `<td>${x.combo ? `<img class="s" src="${x.combo}">` : ""}</td><td>${esc(x.name)}</td><td>${esc(x.size)}</td><td style="font-size:11px">${esc(x.material)}</td>` : `<td colspan="4">${esc(x.name)}</td>`}${x.std ? "<td>/</td><td>/</td><td>/</td><td>/</td><td></td>" : `<td>${x.qty}</td><td>${esc(x.unit)}</td><td>${x.price}</td><td>${x.price * x.qty}</td><td style="font-size:11px">${esc(x.remark || "")}</td>`}</tr>`).join("")}
<tr><td colspan="7" style="text-align:right">合计数量：</td><td>${rows.reduce((t, x) => t + x.qty, 0)}</td><td></td><td>金额合计<br>Total：</td><td colspan="2" style="font-size:16px;font-weight:700">${total}</td></tr>
<tr><td colspan="9" rowspan="2" style="text-align:left;vertical-align:top">备注Memo：图片仅限参考，组合以示意图为准。模块组合产品，测量误差士3CM属于正常范围。</td><td>定金</td><td colspan="2" style="font-size:16px">${dep}</td></tr>
<tr><td>余款</td><td colspan="2" style="font-size:16px">${total - dep}</td></tr></table>
<div style="font-size:12px;line-height:1.8;margin-top:8px"><b>销售条款</b><br>${TERMS.join("<br>")}<br><b>请核对以上内容无误 Please check the accuracy and sign</b></div>
<div style="display:flex;gap:60px;margin-top:16px;font-size:14px"><span><b>业务负责人：</b>熊攀 18566301998</span><span><b>跟单员：</b></span></div>
<div style="text-align:right;margin-top:12px;font-size:13px">${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日</div>`;
}

async function showPicture(rows, form) {
  const h2i = await loadScript("./static/yuhu/html-to-image.js", "htmlToImage");
  const box = document.createElement("div");
  box.className = "ys";
  box.innerHTML = sheetHtml(rows, form);
  document.body.appendChild(box);
  await Promise.all([...box.querySelectorAll("img")].map((im) => im.complete ? 0 : new Promise((r) => { im.onload = im.onerror = r; })));
  box.style.left = "0"; box.style.zIndex = "-1";
  const url = await h2i.toJpeg(box, { pixelRatio: 2, quality: 0.92, backgroundColor: "#fff" });
  box.remove();
  const v = document.createElement("div");
  v.className = "yo-pic";
  v.innerHTML = `<div>长按图片保存，或发送给微信好友 · 点此关闭</div><img src="${url}">`;
  v.firstChild.addEventListener("click", () => v.remove());
  document.body.appendChild(v);
}

export function openOrder(lines, saved) {
  ensureStyle();
  let form = {};
  try { form = saved ? { ...saved.form } : JSON.parse(localStorage.getItem(FORM_KEY) || "{}"); } catch {}
  if (!saved) form.orderDate = today();
  const id = saved ? saved.id : "o" + Date.now();
  const rows = orderRows(lines);
  const total = rows.reduce((t, x) => t + x.price * x.qty, 0);
  const keep = () => saveOrder({ id, created: saved ? saved.created : Date.now(), form, lines, total });
  const el = document.createElement("div");
  el.className = "yo";
  const f = (k, label, ph, type = "text") => `<div class="yo-f"><label>${label}</label><input data-k="${k}" type="${type}" value="${esc(form[k] || "")}" placeholder="${ph}"></div>`;
  el.innerHTML = `<div class="yo-top"><span>订货清单</span><span data-close>×</span></div>
<div class="yo-card"><div class="yo-h">客户信息</div>
${f("customer", "客户名称", "请输入客户名称")}${f("tel", "联系方式", "请输入电话", "tel")}${f("receiver", "收货人", "请输入收货人")}${f("address", "送货地址", "请输入送货地址")}${f("deliveryDate", "交货日期", "", "date")}
<div class="yo-f"><label>开单日期</label><span>${form.orderDate}</span></div></div>
<div class="yo-card"><div class="yo-h">订货明细</div><div class="yo-sc"><table class="yo-t"><tr><th>序号</th><th>产品型号</th><th>产品图片</th><th>示意图</th><th>名称</th><th>产品尺寸</th><th>材质</th><th>数量</th><th>单位</th><th>供货单价</th><th>金额小计</th><th>备注</th></tr>
${rows.map((x, i) => `<tr><td>${i + 1}</td><td>${esc(x.model)}</td><td>${x.pic ? `<img src="${x.pic}">` : ""}</td>${x.main ? `<td>${x.combo ? `<img src="${x.combo}">` : ""}</td><td>${esc(x.name)}</td><td>${esc(x.size)}</td><td>${esc(x.material)}</td>` : `<td colspan="4">${esc(x.name)}</td>`}${x.std ? "<td>/</td><td>/</td><td>/</td><td>/</td><td></td>" : `<td>${x.qty}</td><td>${esc(x.unit)}</td><td>${x.price}</td><td>${x.price * x.qty}</td><td>${esc(x.remark || "")}</td>`}</tr>`).join("")}</table></div>
<div style="margin-top:.75rem"><div class="yo-sum"><span>合计数量</span><span>${rows.reduce((t, x) => t + x.qty, 0)}</span></div><div class="yo-sum"><span>金额合计</span><b>${money(total)}</b></div><div class="yo-sum"><span>定金（50%）</span><span>${money(Math.round(total * 0.5))}</span></div><div class="yo-sum"><span>余款</span><span>${money(total - Math.round(total * 0.5))}</span></div></div></div>
<div class="yo-btns"><div class="yo-btn" data-pic>保存订货单（图片）</div><div class="yo-btn ghost" data-dl>下载 Excel</div></div>`;
  document.body.appendChild(el);
  el.addEventListener("input", (e) => { const k = e.target.dataset.k; if (k) { form[k] = e.target.value; localStorage.setItem(FORM_KEY, JSON.stringify(form)); } });
  el.addEventListener("click", async (e) => {
    if (e.target.closest("[data-close]")) return el.remove();
    const b = e.target.closest("[data-pic],[data-dl]");
    if (!b || b.dataset.busy) return;
    const label = b.textContent;
    b.dataset.busy = "1"; b.textContent = "正在生成…";
    keep();
    try {
      if (b.dataset.pic !== undefined) await showPicture(rows, form);
      else {
        const blob = await buildXlsx(lines, form);
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `御虎订货清单_${(form.customer || "客户").replace(/[\\/:*?"<>|]/g, "")}_${form.orderDate}.xlsx`;
        document.body.appendChild(a); a.click(); a.remove();
      }
      b.textContent = label;
    } catch (err) { b.textContent = "生成失败，请重试"; }
    delete b.dataset.busy;
  });
}

export function openOrderList() {
  ensureStyle();
  const el = document.createElement("div");
  el.className = "yo";
  const draw = () => {
    const list = readOrders();
    el.innerHTML = `<div class="yo-top"><span>我的订货单</span><span data-close>×</span></div>` + (list.length ? list.map((o, i) => `<div class="yo-row" data-i="${i}"><span class="d">${esc(o.form.orderDate || "")}</span><span class="n">${esc(o.form.customer || "未填客户名称")}</span><span class="m">${money(o.total)}</span><span class="a">›</span></div>`).join("") : `<div class="yo-empty">暂无订货单</div>`);
  };
  draw();
  document.body.appendChild(el);
  el.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return el.remove();
    const r = e.target.closest("[data-i]");
    if (r) { const o = readOrders()[+r.dataset.i]; if (o) openOrder(o.lines, o); }
  });
}
