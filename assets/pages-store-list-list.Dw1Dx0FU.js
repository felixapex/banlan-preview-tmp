import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, k as createBaseVNode, u as unref, h as createElementBlock, j as renderList, F as Fragment, m as reLaunch, n as navigateTo } from "./index-B4mhl56q.js";
import { J as JourneyHeader } from "./JourneyHeader.wutFjvaf.js";
import { B as BottomTabs } from "./BottomTabs.B9Xq1Uo2.js";
import { h as home } from "./home.D-6m3wa_.js";
import { s as storeLanding, b as fiveStarServices } from "./service-flow.N09GJZ3T.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    const cards = [{"id": "advisor", "title": "产品顾问", "en": "Consultant", "icon": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19.5l1.2-3.6A8 8 0 1 1 8.5 19z\"/><path d=\"M8.5 12.5c1.9 2 5.1 2 7 0\"/></svg>"}, {"id": "yuhu-store-showroom", "title": "展厅实景", "en": "Showroom", "icon": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21h18\"/><path d=\"M4 21V9l8-5 8 5v12\"/><path d=\"M9 21v-6h6v6\"/></svg>"}, {"id": "yuhu-store-custom", "title": "一户一定制", "en": "Custom made", "icon": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"7\" width=\"18\" height=\"10\" rx=\"1\"/><path d=\"M7 7v4M11 7v3M15 7v4M19 7v3\"/></svg>"}, {"id": "yuhu-store-factory", "title": "自有工厂", "en": "Factory", "icon": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21V11l5 3v-3l5 3v-3l5 3V5h3v16z\"/><path d=\"M3 21h18\"/></svg>"}, {"id": "yuhu-store-honors", "title": "资质荣誉", "en": "Honors", "icon": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"9\" r=\"5\"/><path d=\"M9 13.5L7.5 21l4.5-2.5 4.5 2.5-1.5-7.5\"/></svg>"}, {"id": "yuhu-store-cases", "title": "业务案例", "en": "Projects", "icon": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"1\"/><path d=\"M8 21h8M12 17v4\"/><path d=\"M10.5 9v4l3.5-2z\"/></svg>"}];
    function openCard(c) {
      if (c.id === "advisor") return navigateTo({ url: "/pages/store/detail/detail" });
      navigateTo({ url: `/pages/customPage/customPage?id=${encodeURIComponent(c.id)}` });
    }
    function openService(item) {
      navigateTo({ url: `/pages/customPage/customPage?id=${encodeURIComponent(item.id)}` });
    }
    function landingImageSource(localSource, source) {
      let resolved = (localSource == null ? void 0 : localSource.startsWith("/")) ? `.${localSource}` : localSource;
      return resolved;
    }
    function selectTab(item) {
      if (item.action.type === "external") {
        window.open(item.action.target, "_blank");
        return;
      }
      reLaunch({ url: item.action.target });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "five-star-page",
        "data-page": "five-star-page",
        "data-source-route": "pages/store/list/list"
      }, {
        default: withCtx(() => [
          createVNode(JourneyHeader, { title: "御虎店铺" }),
          createBaseVNode("div", { class: "yhs-hero" }, [
            createBaseVNode("img", { src: "./static/yuhu/store/hero.jpg", alt: "" }),
            createBaseVNode("div", { class: "yhs-hero-t" }, [
              createBaseVNode("div", { class: "yhs-en" }, "ROYAL TIGER STORE"),
              createBaseVNode("div", { class: "yhs-cn" }, "御虎总部展厅"),
              createBaseVNode("div", { class: "yhs-sub" }, "佛山 · 南海 · 九江　近3000平方米")
            ])
          ]),
          createBaseVNode("div", { class: "yhs-intro" }, [
            createBaseVNode("div", { class: "yhs-h" }, "私享级服务 · 让科技与艺术共生"),
            createBaseVNode("div", { class: "yhs-p" }, "御虎自持专属工厂与产品展厅，服务网络遍及全国"),
            createBaseVNode("div", { class: "yhs-p" }, "秉持私享级服务准则，一户一定制"),
            createBaseVNode("div", { class: "yhs-p" }, "从方案设计到最终安装，全程专属服务")
          ]),
          createBaseVNode("div", { class: "yhs-grid" }, cards.map((c) => createBaseVNode("div", {
            key: c.id,
            class: "yhs-card",
            "data-action-id": `store-card:${c.id}`,
            onClick: () => openCard(c)
          }, [
            createBaseVNode("div", { class: "yhs-t" }, c.title),
            createBaseVNode("div", { class: "yhs-ic", innerHTML: c.icon }),
            createBaseVNode("div", { class: "yhs-en2" }, c.en)
          ]))),
          createVNode(BottomTabs, {
            tabs: unref(home).tabs,
            active: "",
            onSelect: selectTab
          }, null, 8, ["tabs"])
        ]),
        _: 1
      });
    };
  }
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9eee4a12"]]);
export {
  list as default
};
