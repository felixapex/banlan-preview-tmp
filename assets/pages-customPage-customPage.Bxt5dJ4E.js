import { r as ref, p as pageScrollTo, c as createBlock, w as withCtx, x as normalizeStyle, d as index$g, o as openBlock, a as createVNode, h as createElementBlock, j as renderList, F as Fragment, e as createTextVNode, l as createCommentVNode, E as index$d } from "./index-CXXgV9dp.js";
import { o as onLoad } from "./uni-app.es.qPiJ1LRW.js";
import { J as JourneyHeader } from "./JourneyHeader.DGrvi3Wb.js";
import { f as findCustomPage } from "./service-flow.N09GJZ3T.js";
import { r as resolveRuntimeAsset } from "./runtime-assets.gPzi_MQE.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "customPage",
  setup(__props) {
    const page = ref(null);
    const selectedTag = ref("");
    onLoad((options) => {
      page.value = findCustomPage(options == null ? void 0 : options.id);
      selectedTag.value = String((options == null ? void 0 : options.tag) || "");
      if (selectedTag.value) {
        setTimeout(() => pageScrollTo({ selector: `#${selectedTag.value}`, duration: 0 }), 120);
      }
    });
    function componentSource(component) {
      var _a;
      let source = component.localSource || resolveRuntimeAsset(component.source);
      if ((_a = component.localSource) == null ? void 0 : _a.startsWith("/"))
        source = `.${component.localSource}`;
      return source;
    }
    return (_ctx, _cache) => {
      var _a, _b;
      const _component_v_uni_video = index$d;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "custom-page",
        "data-page": "custom-page",
        "data-source-route": "pages/customPage/customPage",
        "data-source-id": ((_a = page.value) == null ? void 0 : _a.id) || "",
        style: normalizeStyle({ backgroundColor: ((_b = page.value) == null ? void 0 : _b.backgroundColor) || "#f6f6f6" })
      }, {
        default: withCtx(() => {
          var _a2;
          return [
            createVNode(JourneyHeader, {
              title: ((_a2 = page.value) == null ? void 0 : _a2.title) || "自定义页"
            }, null, 8, ["title"]),
            page.value ? (openBlock(), createBlock(_component_v_uni_view, {
              key: 0,
              class: "custom-components"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(page.value.components, (component, index) => {
                  return openBlock(), createBlock(_component_v_uni_view, {
                    key: `${component.type}-${index}`,
                    id: component.tag || `component_${index}`,
                    class: "custom-component",
                    "data-component-type": component.type,
                    "data-source-tag": component.tag || "",
                    "data-action-id": `custom-component:${page.value.id}:${index}`
                  }, {
                    default: withCtx(() => [
                      component.type === "video" ? (openBlock(), createBlock(_component_v_uni_video, {
                        key: 0,
                        class: "source-video",
                        src: componentSource(component),
                        controls: "",
                        autoplay: false,
                        "object-fit": "contain"
                      }, null, 8, ["src"])) : component.type === "image" ? (openBlock(), createElementBlock("img", {
                        key: 1,
                        class: "source-image",
                        src: componentSource(component),
                        loading: "eager",
                        alt: ""
                      }, null, 8, ["src"])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["id", "data-component-type", "data-source-tag", "data-action-id"]);
                }), 128))
              ]),
              _: 1
            })) : (openBlock(), createBlock(_component_v_uni_view, {
              key: 1,
              class: "missing"
            }, {
              default: withCtx(() => [
                createTextVNode("原始页面数据不存在")
              ]),
              _: 1
            }))
          ];
        }),
        _: 1
      }, 8, ["data-source-id", "style"]);
    };
  }
};
const customPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9b370e88"]]);
export {
  customPage as default
};
