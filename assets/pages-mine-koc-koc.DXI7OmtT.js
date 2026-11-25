import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, h as createElementBlock, j as renderList, F as Fragment, t as toDisplayString, A as navigateBack, m as reLaunch, n as navigateTo, f as index$i, i as index$q } from "./index-B4mhl56q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "footprint",
  setup(__props) {
    const items = ref([]);
    try { items.value = JSON.parse(localStorage.getItem("yuhu:footprint") || "[]"); } catch (e) {}
    const back = () => navigateBack({ fail: () => reLaunch({ url: "/pages/mine/mine/mine" }) });
    const src = (s) => (s && s.startsWith("/") ? "." + s : s || "");
    const clear = () => { try { localStorage.removeItem("yuhu:footprint"); } catch (e) {} items.value = []; };
    const open = (it) => navigateTo({ url: "/pages/product/detail/detail?id=" + encodeURIComponent(it.id) });
    return (_ctx, _cache) => {
      const V = index$g, T = index$i, I = index$q;
      const v = (cls, kids, extra) => createVNode(V, Object.assign({ class: cls }, extra || {}), { default: withCtx(() => kids), _: 2 }, 1024);
      const t = (cls, s) => createVNode(T, { class: cls }, { default: withCtx(() => [createTextVNode(s, 1)]), _: 2 }, 1024);
      return openBlock(), createBlock(V, { class: "fp-page", "data-source-route": "pages/mine/koc/koc" }, {
        default: withCtx(() => [
          v("fp-nav", [v("fp-back", [createTextVNode("‹")], { onClick: back }), t("fp-title", "我的足迹"), v("fp-clear", [createTextVNode(items.value.length ? "清空" : "")], { onClick: clear })]),
          items.value.length ? v("fp-list", items.value.map((it) => v("fp-item", [
            createVNode(I, { class: "fp-img", src: src(it.image), mode: "aspectFill" }, null, 8, ["src"]),
            v("fp-copy", [t("fp-name", it.title), t("fp-en", it.en || ""), t("fp-price", it.price ? "¥" + Number(it.price).toLocaleString() + "起" : "价格咨询")])
          ], { key: it.id, onClick: () => open(it) }))) : v("fp-empty", [t("", "暂无浏览记录"), t("fp-empty-sub", "看过的商品会显示在这里")])
        ]),
        _: 1
      });
    };
  }
};
const footprint = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6f7a2b10"]]);
export {
  footprint as default
};
