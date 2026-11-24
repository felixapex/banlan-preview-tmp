import { o as openBlock, c as createBlock, w as withCtx, a as createVNode, e as createTextVNode, t as toDisplayString, A as navigateBack, m as reLaunch, d as index$g, f as index$i } from "./index-CXXgV9dp.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "SourceStatusPage",
  props: { title: { type: String, required: true }, status: { type: String, required: true } },
  setup(__props) {
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/index/index" }) });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, { class: "source-status" }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "source-status:back",
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
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, {
            class: "body",
            "data-source-status": "incomplete"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.status), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const SourceStatusPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ecb9a79"]]);
export {
  SourceStatusPage as S
};
