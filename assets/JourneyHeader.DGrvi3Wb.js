import { o as openBlock, c as createBlock, w as withCtx, a as createVNode, e as createTextVNode, t as toDisplayString, m as reLaunch, P as getCurrentPages$1, A as navigateBack, d as index$g, f as index$i } from "./index-CXXgV9dp.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "JourneyHeader",
  props: { title: { type: String, required: true }, home: { type: Boolean, default: false } },
  setup(__props) {
    function back() {
      const pages = getCurrentPages$1();
      if (pages.length > 1)
        navigateBack();
      else
        reLaunch({ url: "/pages/mine/mine/mine" });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, { class: "head" }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            class: "back",
            "data-action-id": "journey:back",
            onClick: back
          }, {
            default: withCtx(() => [
              createTextVNode("‹")
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_text, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.title), 1)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, {
            class: "home",
            "data-action-id": "journey:home",
            onClick: _cache[0] || (_cache[0] = ($event) => reLaunch({ url: "/pages/index/index" }))
          }, {
            default: withCtx(() => [
              createTextVNode("⌂")
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const JourneyHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da832233"]]);
export {
  JourneyHeader as J
};
