import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, A as navigateBack, m as reLaunch, f as index$i, i as index$q } from "./index-B4mhl56q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const sourceImage = "/static/banlan/secondary/invite-background.png";
const _sfc_main = {
  __name: "invite",
  setup(__props) {
    function imageSource(source) {
      let value = source;
      if (value.startsWith("/"))
        value = `.${value}`;
      return value;
    }
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/mine/mine/mine" }) });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_image = index$q;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "invite/invite"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "invite:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("我的邀请")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_image, {
            src: imageSource(sourceImage),
            mode: "widthFix"
          }, null, 8, ["src"]),
          createVNode(_component_v_uni_view, {
            class: "status",
            "data-source-status": "backend-required"
          }, {
            default: withCtx(() => [
              createTextVNode("邀请活动、权益和分享参数需要原邀请接口返回")
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const invite = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5f09418a"]]);
export {
  invite as default
};
