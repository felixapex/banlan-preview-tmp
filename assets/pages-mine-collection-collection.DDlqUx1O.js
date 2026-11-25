import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, h as createElementBlock, j as renderList, F as Fragment, A as navigateBack, m as reLaunch, f as index$i, v as normalizeClass, t as toDisplayString } from "./index-B4mhl56q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "collection",
  setup(__props) {
    const active = ref(0);
    const tabs = ["产品", "新居日记", "晒单"];
    const results = ref([[], [], []]);
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/mine/mine/mine" }) });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/mine/collection/collection"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "collection:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("我的收藏")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "tabs" }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab, index) => {
                return createVNode(_component_v_uni_view, {
                  key: tab,
                  class: normalizeClass({ active: active.value === index }),
                  "data-action-id": `collection:tab:${index}`,
                  onClick: ($event) => active.value = index
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tab), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "data-action-id", "onClick"]);
              }), 64))
            ]),
            _: 1
          }),
          results.value[active.value].length ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "list"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(results.value[active.value], (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })) : (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "empty",
            "data-source-status": "backend-required"
          }, {
            default: withCtx(() => [
              createTextVNode("暂无收藏")
            ]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
};
const collection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c0f58bd8"]]);
export {
  collection as default
};
