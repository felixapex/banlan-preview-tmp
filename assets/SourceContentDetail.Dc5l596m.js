import { r as ref, z as computed, o as openBlock, c as createBlock, w as withCtx, a as createVNode, e as createTextVNode, t as toDisplayString, h as createElementBlock, F as Fragment, j as renderList, A as navigateBack, m as reLaunch, d as index$g, f as index$i } from "./index-CXXgV9dp.js";
import { o as onLoad } from "./uni-app.es.qPiJ1LRW.js";
import { b as banlan } from "./banlan.CMKa_9dG.js";
import { r as resolveRuntimeAsset } from "./runtime-assets.gPzi_MQE.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "SourceContentDetail",
  props: {
    kind: { type: String, required: true },
    sourceRoute: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const itemId = ref("");
    const item = computed(() => (banlan.content[props.kind] ?? []).find((entry) => String(entry.id) === itemId.value));
    const images = computed(() => {
      var _a;
      if (!item.value)
        return [];
      const values = ((_a = item.value.images) == null ? void 0 : _a.length) ? item.value.images : [item.value.image];
      return values.filter(Boolean);
    });
    onLoad((options) => {
      itemId.value = String((options == null ? void 0 : options.id) ?? "");
    });
    function imageSource(source, index) {
      let resolved = source || "";
      resolved = resolveRuntimeAsset(resolved);
      if (resolved.startsWith("/"))
        resolved = `.${resolved}`;
      return resolved;
    }
    function back() {
      navigateBack({ fail: () => reLaunch({ url: `/pages/fans/fans/fans?tab=${props.kind}` }) });
    }
    function home() {
      reLaunch({ url: "/pages/index/index" });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "detail-page",
        "data-source-route": __props.sourceRoute,
        "data-detail-id": itemId.value
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "detail-nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "back",
                "data-action-id": "source-detail:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode(toDisplayString(((_a = item.value) == null ? void 0 : _a.title) || "Banlan"), 1)
                  ];
                }),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "home",
                "data-action-id": "source-detail:home",
                onClick: home
              }, {
                default: withCtx(() => [
                  createTextVNode("⌂")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          item.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(images.value, (source, index) => {
              return openBlock(), createElementBlock("img", {
                key: `${item.value.id}-${index}`,
                class: "hero",
                src: imageSource(source, index),
                loading: "eager",
                alt: ""
              }, null, 8, ["src"]);
            }), 128)),
            createVNode(_component_v_uni_view, { class: "copy" }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_text, { class: "eyebrow" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.value.meta), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_text, { class: "title" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.value.title), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_text, { class: "summary" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.value.summary), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 64)) : (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "missing",
            "data-source-status": "missing"
          }, {
            default: withCtx(() => [
              createTextVNode("未找到原始条目")
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 8, ["data-source-route", "data-detail-id"]);
    };
  }
};
const SourceContentDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a5c7f577"]]);
export {
  SourceContentDetail as S
};
