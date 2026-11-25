const GOLD = "#9E815D";
const GRADES = [["D", 10], ["C", 13], ["B", 16], ["A", 19], ["A+", 22]];
const MATS = [["full", "全皮"], ["half", "半皮"], ["imit", "半仿真"]];
const yuan = (n) => "¥" + Math.round(n).toLocaleString("zh-CN");
const css = `
.yc{padding:0 0 1rem;font-size:.875rem;color:#111}
.yc-h{margin:.875rem 0 .5rem;font-size:.8125rem;font-weight:600}
.yc-sec{border-bottom:.03125rem solid #eee}
.yc-sum2{min-height:3rem;padding:0 .9375rem;display:grid;grid-template-columns:1.375rem 1fr auto .9375rem;gap:.5rem;align-items:center}
.yc-ic{width:1.375rem;height:1.375rem;display:block}
.yc-nm{font-size:.9375rem;font-weight:500}
.yc-lb{padding:.25rem .5rem;color:#9E815D;background:#F5F0E8;font-size:.65625rem;max-width:11rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.yc-lb.miss{color:#999;background:#f2f2f2}
.yc-cv{display:block;width:.375rem;height:.375rem;margin:0 auto;border-right:.09375rem solid #aaa;border-bottom:.09375rem solid #aaa;transform:translateY(-.125rem) rotate(45deg)}
.yc-cv.up{transform:translateY(.125rem) rotate(-135deg)}
.yc-body{padding:0 .9375rem .875rem}
.yc-seat>div{font-size:.9375rem}
.yc-seat .yc-sub{font-size:.75rem}
.yc-ta{width:100%;box-sizing:border-box;min-height:4.5rem;padding:.5rem .625rem;border:.03125rem solid #ccc;border-radius:.25rem;font-size:.8125rem;line-height:1.6;resize:vertical;font-family:inherit;outline:none}
.yc-ta:focus{border-color:#C9AE85}
.yc-row.sel .yc-st i{color:${GOLD};font-weight:600}
.yc-std{display:grid;grid-template-columns:1fr 1fr;gap:.25rem .5rem;padding:.5rem .625rem;margin-bottom:.25rem;background:#F5F0E8;font-size:.75rem;color:#6b5a43;line-height:1.5}
.yc-row{display:flex;align-items:center;justify-content:space-between;gap:.5rem;padding:.625rem 0;border-bottom:.03125rem solid #eee}
.yc-sub{font-size:.75rem;color:#888;margin-top:.125rem}
.yc-st{display:flex;align-items:center;gap:.5rem}
.yc-st b{width:1.625rem;height:1.625rem;border:.03125rem solid #ccc;border-radius:.25rem;display:flex;align-items:center;justify-content:center;font-weight:400}
.yc-st i{min-width:1rem;text-align:center;font-style:normal}
.yc-grid{display:grid;gap:.375rem}
.yc-chip{border:.03125rem solid #ccc;border-radius:.25rem;padding:.5rem .125rem;text-align:center;font-size:.8125rem}
.yc-chip.on{border:.0625rem solid #C9AE85;color:${GOLD}}
.yc-seat{display:flex;align-items:center;gap:.625rem}
.yc-seat img{width:2.5rem;height:2.5rem;object-fit:contain;background:#fafafa}
.yc-col{display:grid;grid-template-columns:repeat(4,1fr);gap:.5rem;margin-top:.5rem}
.yc-col div{text-align:center;font-size:.6875rem;color:#555}
.yc-col img{width:100%;aspect-ratio:1;object-fit:cover;border:.0625rem solid transparent;border-radius:.25rem}
.yc-col .on img{border-color:${GOLD}}
.yc-tot{margin:1rem .9375rem 0;padding:.75rem;background:#f6f6f6;border-radius:.25rem;font-size:.75rem;color:#666;line-height:1.7}
.yc-sum{display:flex;justify-content:space-between;align-items:baseline;margin-top:.375rem;color:#111;font-size:.875rem}
.yc-sum span:last-child{font-size:1.25rem;font-weight:600;color:${GOLD}}
`;

export function defaultState(cfg) {
  const s = { q: cfg.seats.map(() => 0), mat: "", grade: 0, color: "", o: cfg.options.map(() => 0), optSet: false, mod: "", outlet: "", pw: null, pwNote: "" };
  return s;
}
function seatPrice(cfg, i, s) {
  const seat = cfg.seats[i];
  if (s.mat === "imit") return seat.imit;
  return s.mat && s.grade ? seat[s.mat][s.grade] : 0;
}
function elecSeats(cfg, s) {
  return s.q.reduce((a, n, i) => a + (cfg.seats[i].electric ? n : 0), 0);
}
function powerTier(es) {
  if (es === 1) return { name: "1拖1电源", price: 0 };
  if (es === 2) return { name: "1拖2电源", price: 0 };
  if (es === 3) return { name: "1拖3电源", price: 100 };
  if (es >= 4 && es <= 7) return { name: "1拖4～7电源", price: 250 };
  return null;
}
function optName(cfg, s, k) {
  const o = cfg.options[k];
  if (o.kind !== "power") return o.name;
  const t = powerTier(elecSeats(cfg, s));
  return t ? (elecSeats(cfg, s) > 1 ? `${t.name}（只有一个出线口）` : t.name) : "电源（一拖多）";
}
function optPrice(cfg, s, k) {
  const o = cfg.options[k];
  if (o.kind !== "power") return o.price;
  const t = powerTier(elecSeats(cfg, s));
  return t ? t.price : 0;
}
function optQty(cfg, s, k) {
  if (cfg.options[k].kind === "power") return s.o[k] && powerTier(elecSeats(cfg, s)) ? elecSeats(cfg, s) : 0;
  return cfg.options[k].unit === "位" ? Math.min(s.o[k], elecSeats(cfg, s)) : s.o[k];
}
function pwCounts(cfg, s) {
  if (!cfg.power) return [];
  if (s.pw) return s.pw;
  return cfg.power.map((p) => (p.n === 1 ? elecSeats(cfg, s) : 0));
}
const pwCap = (cfg, s) => pwCounts(cfg, s).reduce((t, c, i) => t + c * cfg.power[i].n, 0);
const pwCost = (cfg, s) => pwCounts(cfg, s).reduce((t, c, i) => t + c * cfg.power[i].price, 0);
const pwBig = (cfg, s) => pwCounts(cfg, s).some((c, i) => c && cfg.power[i].n > 1);
export function stdItems(cfg, s) {
  const has = { always: s.q.some(Boolean), electric: elecSeats(cfg, s) > 0, armrest: s.q.some((n, i) => n && cfg.seats[i].armrest) };
  return cfg.standard.filter((x) => has[x.when || "always"]).map((x) => x.name);
}
export function total(cfg, s) {
  let t = 0;
  s.q.forEach((n, i) => n && (t += seatPrice(cfg, i, s) * n));
  cfg.options.forEach((o, k) => (t += optPrice(cfg, s, k) * optQty(cfg, s, k)));
  t += pwCost(cfg, s);
  return t;
}
function gradeName(s) {
  const g = GRADES.find((x) => x[1] === s.grade);
  return s.mat === "imit" ? "半仿真" : `${s.mat === "full" ? "全皮" : "半皮"} ${g[0]}级 ${g[1]}元/尺`;
}
export function validate(cfg, s) {
  if (!s.q.some(Boolean)) return "请选择款型";
  if (!s.mat || (s.mat !== "imit" && !s.grade)) return "请选择面料";
  if (s.mat !== "imit" && cfg.colors.some((c) => c.grade === s.grade) && !s.color) return "请选择颜色";
  if (cfg.power && elecSeats(cfg, s) && pwCap(cfg, s) !== elecSeats(cfg, s)) return `电源合计${pwCap(cfg, s)}位，电动座位${elecSeats(cfg, s)}位，请调整`;
  if (cfg.power && pwBig(cfg, s) && !s.pwNote.trim()) return "请填写出线口位置";
  const pk = cfg.options.findIndex((o) => o.kind === "power");
  if (pk >= 0 && optQty(cfg, s, pk) && elecSeats(cfg, s) > 1 && !s.q.some((n, i) => n && cfg.seats[i].electric && cfg.seats[i].desc === s.outlet)) return "请选择出线口位置";
  return "";
}
export function cartLine(product, s) {
  const cfg = product.config;
  const seats = cfg.seats.map((x, i) => ({ desc: x.desc, qty: s.q[i], unit: seatPrice(cfg, i, s), L: x.L, W: x.W, H: x.H, func: x.func, img: x.img })).filter((x) => x.qty);
  const setIdx = cfg.sets.findIndex((st) => { const w = cfg.seats.map(() => 0); st.seats.forEach(([i, n]) => (w[i] = n)); return w.join() === s.q.join(); });
  const set = setIdx < 0 ? null : { name: cfg.sets[setIdx].name.split(" ")[0], size: cfg.sets[setIdx].size, img: cfg.sets[setIdx].img };
  const opts = cfg.options.map((o, k) => ({ name: optName(cfg, s, k), qty: optQty(cfg, s, k), unit: optPrice(cfg, s, k), per: o.unit, img: o.image || "", remark: o.kind === "power" && s.outlet ? `出线口：${s.outlet}` : "" })).filter((x) => x.qty);
  const specifications = [
    { groupId: "seats", groupName: "座位", choiceId: "", name: seats.map((x) => `${x.desc}×${x.qty}`).join("、"), description: "" },
    { groupId: "material", groupName: "材质", choiceId: "", name: gradeName(s) + (s.color ? ` · ${s.color}` : ""), description: "" }
  ];
  const power = cfg.power ? pwCounts(cfg, s).map((c, i) => ({ name: cfg.power[i].name, qty: c, unit: cfg.power[i].price, per: "个", remark: cfg.power[i].n > 1 && s.pwNote.trim() ? `出线口：${s.pwNote.trim()}` : "" })).filter((x) => x.qty) : [];
  if (power.length) specifications.push({ groupId: "power", groupName: "电源", choiceId: "", name: power.map((x) => `${x.name}×${x.qty}`).join("、"), description: "" });
  if (s.mod.trim()) specifications.push({ groupId: "mod", groupName: "改版", choiceId: "", name: s.mod.trim(), description: "" });
  if (opts.length) specifications.push({ groupId: "options", groupName: "选配", choiceId: "", name: opts.map((x) => `${x.name}×${x.qty}`).join("、"), description: "" });
  const sig = JSON.stringify([s.q, s.mat, s.grade, s.color, s.o, s.mod.trim(), pwCounts(cfg, s), s.pwNote.trim()]);
  let h = 0;
  for (const ch of sig) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return {
    key: `${product.id}:cfg:${(h >>> 0).toString(36)}`,
    productId: String(product.id),
    title: product.title,
    image: product.coverImage,
    unitPriceYuan: total(cfg, s),
    quantity: 1,
    checked: true,
    selectedIds: [],
    specifications,
    config: { power, mod: s.mod.trim(), model: cfg.model, en: product.richTitle || "", cn: product.title.replace(cfg.model, "").trim(), standard: stdItems(cfg, s), cover: product.coverImage, material: gradeName(s), color: s.color, set, seats, options: opts }
  };
}

export function mountConfig(el, product, s) {
  if (!el || el.dataset.mounted) return;
  el.dataset.mounted = "1";
  const cfg = product.config;
  if (!document.getElementById("yc-style")) {
    const st = document.createElement("style");
    st.id = "yc-style";
    st.textContent = css;
    document.head.appendChild(st);
  }
  let open = "";
  const draw = () => {
    const es = elecSeats(cfg, s);
    const colors = !s.mat || s.mat === "imit" ? [] : cfg.colors.filter((c) => c.grade === s.grade);
    let lines = [];
    s.q.forEach((n, i) => n && lines.push(`${cfg.seats[i].desc} ×${n}　${yuan(seatPrice(cfg, i, s) * n)}`));
    cfg.options.forEach((o, k) => { const n = optQty(cfg, s, k); n && lines.push(`${optName(cfg, s, k)} ×${n}　${yuan(optPrice(cfg, s, k) * n)}`); });
    if (cfg.power) pwCounts(cfg, s).forEach((c, i) => c && lines.push(`${cfg.power[i].name} ×${c}　${yuan(cfg.power[i].price * c)}`));
    const sec = (id, name, label, body) => `<div class="yc-sec"><div class="yc-sum2" data-open="${id}"><img class="yc-ic" src="./static/yuhu/spec-${{ seats: "sofa", mat: "fabric", opt: "gear", mod: "edit" }[id]}.png"><span class="yc-nm">${name}</span><span class="yc-lb ${label ? "" : "miss"}">${label || "未选择"}</span><span class="yc-cv ${open === id ? "up" : ""}"></span></div>${open === id ? `<div class="yc-body">${body}</div>` : ""}</div>`;
    const setHit = cfg.sets.find((st) => { const w = cfg.seats.map(() => 0); st.seats.forEach(([i, n]) => (w[i] = n)); return w.join() === s.q.join(); });
    const nSeat = s.q.reduce((a, b) => a + b, 0);
    const priced = s.mat === "imit" || (s.mat && s.grade);
    const seatLabel = setHit ? setHit.name.split(" ")[0] : nSeat ? `定制 ${nSeat}位` : "";
    const nOpt = cfg.options.filter((o, k) => optQty(cfg, s, k)).length;
    const seatsBody = `<div class="yc-grid" style="grid-template-columns:repeat(${cfg.sets.length},1fr);margin-bottom:.25rem">${cfg.sets.map((x, k) => `<div class="yc-chip ${setHit === x ? "on" : ""}" data-set="${k}">${x.name}</div>`).join("")}</div>
${cfg.seats.map((x, i) => `<div class="yc-row ${s.q[i] ? "sel" : ""}"><div class="yc-seat">${x.img ? `<img src="${x.img}">` : `<img style="visibility:hidden">`}<div>${x.desc}<div class="yc-sub">${x.L ? `${x.L}×${x.W}×${x.H} · ` : ""}${x.func}${seatPrice(cfg, i, s) ? " · " + yuan(seatPrice(cfg, i, s)) : ""}</div></div></div><div class="yc-st"><b data-q="${i}" data-d="-1">−</b><i>${s.q[i]}</i><b data-q="${i}" data-d="1">+</b></div></div>`).join("")}`;
    const matBody = `<div class="yc-grid" style="grid-template-columns:repeat(3,1fr);margin-top:.25rem">${MATS.map(([k, n]) => `<div class="yc-chip ${s.mat === k ? "on" : ""}" data-mat="${k}">${n}</div>`).join("")}</div>
${!s.mat || s.mat === "imit" ? "" : `<div class="yc-h">皮料等级</div>
<div class="yc-grid" style="grid-template-columns:repeat(5,1fr)">${GRADES.map(([g, r]) => `<div class="yc-chip ${s.grade === r ? "on" : ""}" data-grade="${r}">${g}<div class="yc-sub">${r}元/尺</div></div>`).join("")}</div>
${s.grade ? `<div class="yc-sub" style="margin-top:.5rem">${cfg.gradeNotes[s.grade] || ""}</div>
<div class="yc-h">颜色选择</div>
${colors.length ? `<div class="yc-col">${colors.map((c) => `<div class="${s.color === c.name ? "on" : ""}" data-color="${c.name}"><img src="${c.image}">${c.name}</div>`).join("")}</div>` : `<div class="yc-sub">颜色请与产品顾问确认</div>`}` : ""}`}`;
    const std = stdItems(cfg, s);
    const optBody = `<div class="yc-h" style="margin-top:.25rem">基础配置（已包含）</div>${std.length ? `<div class="yc-std">${std.map((x) => `<div>✓ ${x}</div>`).join("")}</div>` : `<div class="yc-sub" style="margin-bottom:.5rem">选择款型后显示基础配置</div>`}${cfg.power && es ? `<div class="yc-h">电源配置 <span style="font-weight:400;font-size:.75rem;color:${pwCap(cfg, s) === es ? "#999" : "#c0392b"}">电源合计${pwCap(cfg, s)}位 / 电动座位${es}位</span>${s.pw ? '<span data-pwreset style="float:right;font-weight:400;font-size:.75rem;color:#999;text-decoration:underline">恢复默认</span>' : ""}</div>${cfg.power.map((p, i) => `<div class="yc-row ${pwCounts(cfg, s)[i] ? "sel" : ""}"><div class="yc-seat"><div>${p.name}<div class="yc-sub">${p.price}元/个 · 带${p.n}位</div></div></div><div class="yc-st"><b data-pw="${i}" data-d="-1">−</b><i>${pwCounts(cfg, s)[i]}</i><b data-pw="${i}" data-d="1">+</b></div></div>`).join("")}${pwBig(cfg, s) ? `<div style="padding:.5rem 0 .75rem"><div class="yc-sub" style="margin-bottom:.375rem">出线口位置（必填）</div><input class="yc-ta" style="min-height:0;height:2.25rem" data-pwnote value="${s.pwNote.replace(/"/g, "&quot;")}" placeholder="例如：左扶手一位"></div>` : ""}` : ""}<div class="yc-h">选配</div>${cfg.options.map((o, k) => { const pw = o.kind === "power", tier = pw ? powerTier(es) : null, off = pw && !tier; const sub = off ? (es ? "超过7位电动，请咨询产品顾问" : "选择电动座位后可选") : `${optPrice(cfg, s, k)}元/${o.unit}${o.unit === "位" ? " · 按电动座位计" : ""}`; return `<div class="yc-row ${optQty(cfg, s, k) ? "sel" : ""}" ${off ? 'style="opacity:.45"' : ""}><div class="yc-seat">${o.image ? `<img src="${o.image}">` : `<img style="visibility:hidden">`}<div>${optName(cfg, s, k)}<div class="yc-sub">${sub}</div></div></div><div class="yc-st"><b data-o="${k}" data-d="-1">−</b><i>${optQty(cfg, s, k)}</i><b data-o="${k}" data-d="1">+</b></div></div>${pw && optQty(cfg, s, k) && es > 1 ? `<div style="padding:.5rem 0 .75rem"><div class="yc-sub" style="margin-bottom:.375rem">出线口位置（必选）</div><div class="yc-grid" style="grid-template-columns:repeat(3,1fr)">${cfg.seats.map((x, i) => s.q[i] && x.electric ? `<div class="yc-chip ${s.outlet === x.desc ? "on" : ""}" data-outlet="${x.desc}">${x.desc}</div>` : "").join("")}</div></div>` : ""}`; }).join("")}`;
    el.innerHTML = `<div class="yc">
${sec("seats", "款型选择", seatLabel, seatsBody)}
${sec("mat", "面料选择", s.mat === "imit" ? "半仿真" : (s.grade && (s.color || !colors.length) ? gradeName(s).split(" ").slice(0, 2).join("") + (s.color ? " · " + s.color : "") : ""), matBody)}
${sec("opt", "功能配件", !nSeat ? "" : nOpt ? `基础配置 + ${nOpt}项` : "基础配置", optBody)}
${sec("mod", "改版需求", s.mod.trim() ? "已填写" : "无", `<textarea class="yc-ta" data-mod placeholder="如需改版请写明，例如：中几尺寸减少5公分；扶手外侧改为牛皮">${s.mod.replace(/</g, "&lt;")}</textarea><div class="yc-sub" style="margin-top:.375rem">改版价格由产品顾问确认，不计入合计</div>`)}
<div class="yc-tot">${!nSeat ? "请选择款型" : !priced ? "请选择面料后显示价格" : lines.join("<br>")}<div class="yc-sum"><span>合计</span><span>${nSeat && priced ? yuan(total(cfg, s)) : "—"}</span></div></div>
</div>`;
  };
  el.addEventListener("input", (e) => {
    if (e.target.dataset.pwnote !== undefined) { s.pwNote = e.target.value; return; }
    if (e.target.dataset.mod === undefined) return;
    s.mod = e.target.value;
    const lb = e.target.closest(".yc-sec").querySelector(".yc-lb");
    lb.textContent = s.mod.trim() ? "已填写" : "无";
  });
  el.addEventListener("click", (e) => {
    const t = e.target.closest("[data-pwreset],[data-pw],[data-outlet],[data-noopt],[data-open],[data-set],[data-q],[data-mat],[data-grade],[data-color],[data-opt],[data-o]");
    if (!t) return;
    const d = t.dataset;
    if (d.pwreset !== undefined) s.pw = null;
    else if (d.pw !== undefined && d.d) { const c = [...pwCounts(cfg, s)]; c[+d.pw] = Math.max(0, c[+d.pw] + +d.d); s.pw = c; }
    else if (d.outlet) s.outlet = d.outlet;
    else if (d.noopt) { s.o = cfg.options.map(() => 0); s.optSet = true; }
    else if (d.open) open = open === d.open ? "" : d.open;
    else if (d.set) { s.q = cfg.seats.map(() => 0); cfg.sets[+d.set].seats.forEach(([i, n]) => (s.q[i] = n)); }
    else if (d.q) s.q[+d.q] = Math.max(0, s.q[+d.q] + +d.d);
    else if (d.mat) { if (s.mat !== d.mat) { s.mat = d.mat; s.grade = 0; s.color = ""; } }
    else if (d.grade) { s.grade = +d.grade; s.color = ""; }
    else if (d.color) s.color = d.color;
    else if (d.opt) s.o[+d.opt] = s.o[+d.opt] ? 0 : 1;
    else if (d.o) {
      s.optSet = true;
      const k = +d.o, per = cfg.options[k].unit === "位", es = elecSeats(cfg, s), cur = per ? Math.min(s.o[k], es) : s.o[k];
      if (cfg.options[k].kind === "power") { s.o[k] = +d.d > 0 && powerTier(es) ? es : 0; if (!s.o[k]) s.outlet = ""; draw(); return; }
      s.o[k] = per ? (+d.d > 0 ? (cur ? Math.min(cur + 1, es) : es) : Math.max(0, cur - 1)) : Math.max(0, cur + +d.d);
    }
    draw();
  });
  draw();
}
