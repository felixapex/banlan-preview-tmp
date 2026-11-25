import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, k as createBaseVNode, u as unref, h as createElementBlock, j as renderList, F as Fragment, m as reLaunch, n as navigateTo } from "./index-CXXgV9dp.js";
import { J as JourneyHeader } from "./JourneyHeader.DGrvi3Wb.js";
import { B as BottomTabs } from "./BottomTabs.DNDs0y1b.js";
import { h as home } from "./home.D-6m3wa_.js";
import { s as storeLanding, b as fiveStarServices } from "./service-flow.N09GJZ3T.js";
import { r as resolveRuntimeAsset } from "./runtime-assets.gPzi_MQE.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    function openService(item) {
      navigateTo({ url: `/pages/customPage/customPage?id=${encodeURIComponent(item.id)}` });
    }
    function landingImageSource(localSource, source) {
      return resolveRuntimeAsset(source) || localSource;
    }
    function selectTab(item) {
      if (item.id === "stores")
        return;
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
          createBaseVNode("img", {
            class: "main-image",
            src: landingImageSource(unref(storeLanding).localMainImage, unref(storeLanding).mainImage),
            alt: ""
          }, null, 8, ["src"]),
          createBaseVNode("img", {
            class: "text-image",
            src: landingImageSource(unref(storeLanding).localTextImage, unref(storeLanding).textImage),
            alt: ""
          }, null, 8, ["src"]),
          createVNode(_component_v_uni_view, { class: "five-star-grid" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(fiveStarServices), (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "five-star-card",
                  "data-service-id": item.id,
                  "data-action-id": `five-star-card:${item.id}`,
                  onClick: ($event) => openService(item)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("img", {
                      src: landingImageSource(item.localImage, item.image),
                      alt: item.title
                    }, null, 8, ["src", "alt"])
                  ]),
                  _: 2
                }, 1032, ["data-service-id", "data-action-id", "onClick"]);
              }), 128))
            ]),
            _: 1
          }),
          createVNode(BottomTabs, {
            tabs: unref(home).tabs,
            active: "stores",
            onSelect: selectTab
          }, null, 8, ["tabs"])
        ]),
        _: 1
      });
    };
  }
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c43b937"]]);
export {
  list as default
};
