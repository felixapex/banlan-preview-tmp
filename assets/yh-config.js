const GOLD = "#9D7435";
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
.yc-lb{padding:.25rem .5rem;color:#8a6d47;background:#f6f3ef;font-size:.65625rem;max-width:11rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.yc-lb.miss{color:#999;background:#f2f2f2}
.yc-cv{color:#aaa}
.yc-body{padding:0 .9375rem .875rem}
.yc-std{display:grid;grid-template-columns:1fr 1fr;gap:.25rem .5rem;padding:.5rem .625rem;margin-bottom:.25rem;background:#f8f6f3;font-size:.75rem;color:#6b5a43;line-height:1.5}
.yc-row{display:flex;align-items:center;justify-content:space-between;gap:.5rem;padding:.625rem 0;border-bottom:.03125rem solid #eee}
.yc-sub{font-size:.75rem;color:#888;margin-top:.125rem}
.yc-st{display:flex;align-items:center;gap:.5rem}
.yc-st b{width:1.625rem;height:1.625rem;border:.03125rem solid #ccc;border-radius:.25rem;display:flex;align-items:center;justify-content:center;font-weight:400}
.yc-st i{min-width:1rem;text-align:center;font-style:normal}
.yc-grid{display:grid;gap:.375rem}
.yc-chip{border:.03125rem solid #ccc;border-radius:.25rem;padding:.5rem .125rem;text-align:center;font-size:.8125rem}
.yc-chip.on{border:.0625rem solid ${GOLD};color:${GOLD}}
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
  const s = { q: cfg.seats.map(() => 0), mat: "", grade: 0, color: "", o: cfg.options.map(() => 0), optSet: false };
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
function optQty(cfg, s, k) {
  return cfg.options[k].unit === "位" ? Math.min(s.o[k], elecSeats(cfg, s)) : s.o[k];
}
export function total(cfg, s) {
  let t = 0;
  s.q.forEach((n, i) => n && (t += seatPrice(cfg, i, s) * n));
  cfg.options.forEach((o, k) => (t += o.price * optQty(cfg, s, k)));
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
  if (!s.optSet) return "请选择功能配件";
  return "";
}
export function cartLine(product, s) {
  const cfg = product.config;
  const seats = cfg.seats.map((x, i) => ({ desc: x.desc, qty: s.q[i], unit: seatPrice(cfg, i, s), L: x.L, W: x.W, H: x.H, func: x.func, img: x.img })).filter((x) => x.qty);
  const setIdx = cfg.sets.findIndex((st) => { const w = cfg.seats.map(() => 0); st.seats.forEach(([i, n]) => (w[i] = n)); return w.join() === s.q.join(); });
  const set = setIdx < 0 ? null : { name: cfg.sets[setIdx].name.split(" ")[0], size: cfg.sets[setIdx].size, img: cfg.sets[setIdx].img };
  const opts = cfg.options.map((o, k) => ({ name: o.name, qty: optQty(cfg, s, k), unit: o.price, per: o.unit, img: o.image || "" })).filter((x) => x.qty);
  const specifications = [
    { groupId: "seats", groupName: "座位", choiceId: "", name: seats.map((x) => `${x.desc}×${x.qty}`).join("、"), description: "" },
    { groupId: "material", groupName: "材质", choiceId: "", name: gradeName(s) + (s.color ? ` · ${s.color}` : ""), description: "" }
  ];
  if (opts.length) specifications.push({ groupId: "options", groupName: "选配", choiceId: "", name: opts.map((x) => `${x.name}×${x.qty}`).join("、"), description: "" });
  const sig = JSON.stringify([s.q, s.mat, s.grade, s.color, s.o]);
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
    config: { model: cfg.model, en: product.richTitle || "", cn: product.title.replace(cfg.model, "").trim(), standard: cfg.standard, cover: product.coverImage, material: gradeName(s), color: s.color, set, seats, options: opts }
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
    cfg.options.forEach((o, k) => { const n = optQty(cfg, s, k); n && lines.push(`${o.name} ×${n}　${yuan(o.price * n)}`); });
    const sec = (id, name, label, body) => `<div class="yc-sec"><div class="yc-sum2" data-open="${id}"><img class="yc-ic" src="./static/yuhu/spec-sofa.png"><span class="yc-nm">${name}</span><span class="yc-lb ${label ? "" : "miss"}">${label || "未选择"}</span><span class="yc-cv">${open === id ? "⌃" : "⌄"}</span></div>${open === id ? `<div class="yc-body">${body}</div>` : ""}</div>`;
    const setHit = cfg.sets.find((st) => { const w = cfg.seats.map(() => 0); st.seats.forEach(([i, n]) => (w[i] = n)); return w.join() === s.q.join(); });
    const nSeat = s.q.reduce((a, b) => a + b, 0);
    const priced = s.mat === "imit" || (s.mat && s.grade);
    const seatLabel = setHit ? setHit.name.split(" ")[0] : nSeat ? `定制 ${nSeat}位` : "";
    const nOpt = cfg.options.filter((o, k) => optQty(cfg, s, k)).length;
    const seatsBody = `<div class="yc-grid" style="grid-template-columns:repeat(${cfg.sets.length},1fr);margin-bottom:.25rem">${cfg.sets.map((x, k) => `<div class="yc-chip" data-set="${k}">${x.name}</div>`).join("")}</div>
${cfg.seats.map((x, i) => `<div class="yc-row"><div class="yc-seat">${x.img ? `<img src="${x.img}">` : `<img style="visibility:hidden">`}<div>${x.desc}<div class="yc-sub">${x.L ? `${x.L}×${x.W}×${x.H} · ` : ""}${x.func}${seatPrice(cfg, i, s) ? " · " + yuan(seatPrice(cfg, i, s)) : ""}</div></div></div><div class="yc-st"><b data-q="${i}" data-d="-1">−</b><i>${s.q[i]}</i><b data-q="${i}" data-d="1">+</b></div></div>`).join("")}`;
    const matBody = `<div class="yc-grid" style="grid-template-columns:repeat(3,1fr);margin-top:.25rem">${MATS.map(([k, n]) => `<div class="yc-chip ${s.mat === k ? "on" : ""}" data-mat="${k}">${n}</div>`).join("")}</div>
${!s.mat || s.mat === "imit" ? "" : `<div class="yc-h">皮料等级</div>
<div class="yc-grid" style="grid-template-columns:repeat(5,1fr)">${GRADES.map(([g, r]) => `<div class="yc-chip ${s.grade === r ? "on" : ""}" data-grade="${r}">${g}<div class="yc-sub">${r}元/尺</div></div>`).join("")}</div>
${s.grade ? `<div class="yc-sub" style="margin-top:.5rem">${cfg.gradeNotes[s.grade] || ""}</div>
<div class="yc-h">颜色选择</div>
${colors.length ? `<div class="yc-col">${colors.map((c) => `<div class="${s.color === c.name ? "on" : ""}" data-color="${c.name}"><img src="${c.image}">${c.name}</div>`).join("")}</div>` : `<div class="yc-sub">颜色请与产品顾问确认</div>`}` : ""}`}`;
    const optBody = `<div class="yc-chip ${s.optSet ? "on" : ""}" style="margin:.25rem 0 .375rem" data-noopt="1">基础配置</div><div class="yc-std">${cfg.standard.map((x) => `<div>✓ ${x}</div>`).join("")}</div>${cfg.options.map((o, k) => `<div class="yc-row"><div class="yc-seat">${o.image ? `<img src="${o.image}">` : `<img style="visibility:hidden">`}<div>${o.name}<div class="yc-sub">${o.price}元/${o.unit}${o.unit === "位" ? " · 按电动座位计" : ""}</div></div></div><div class="yc-st"><b data-o="${k}" data-d="-1">−</b><i>${optQty(cfg, s, k)}</i><b data-o="${k}" data-d="1">+</b></div></div>`).join("")}`;
    el.innerHTML = `<div class="yc">
${sec("seats", "款型选择", seatLabel, seatsBody)}
${sec("mat", "面料选择", s.mat === "imit" ? "半仿真" : (s.grade && (s.color || !colors.length) ? gradeName(s).split(" ").slice(0, 2).join("") + (s.color ? " · " + s.color : "") : ""), matBody)}
${sec("opt", "功能配件", nOpt ? `基础配置 + ${nOpt}项` : s.optSet ? "基础配置" : "", optBody)}
<div class="yc-tot">${!nSeat ? "请选择款型" : !priced ? "请选择面料后显示价格" : lines.join("<br>")}<div class="yc-sum"><span>合计</span><span>${nSeat && priced ? yuan(total(cfg, s)) : "—"}</span></div></div>
</div>`;
  };
  el.addEventListener("click", (e) => {
    const t = e.target.closest("[data-noopt],[data-open],[data-set],[data-q],[data-mat],[data-grade],[data-color],[data-opt],[data-o]");
    if (!t) return;
    const d = t.dataset;
    if (d.noopt) { s.o = cfg.options.map(() => 0); s.optSet = true; }
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
      s.o[k] = per ? (+d.d > 0 ? (cur ? Math.min(cur + 1, es) : es) : Math.max(0, cur - 1)) : Math.max(0, cur + +d.d);
    }
    draw();
  });
  draw();
}
