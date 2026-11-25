import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, l as createCommentVNode, A as navigateBack, m as reLaunch, f as index$i, C as index$x } from "./index-B4mhl56q.js";
import { b as onUnload } from "./uni-app.es.oAhR1D-z.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    ref(false);
    const status = ref("");
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/mine/mine/mine" }) });
    }
    function stop() {
    }
    function start() {
      status.value = "NFC 验证只能在支持 NFC 的微信小程序设备中使用";
    }
    onUnload(stop);
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_button = index$x;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/antifake/index/index"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "antifake:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("正品验证")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "hero" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("御虎正品验证")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("请将手机靠近产品 NFC 标签")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_button, {
                "data-action-id": "antifake:start",
                onClick: start
              }, {
                default: withCtx(() => [
                  createTextVNode("开始验证")
                ]),
                _: 1
              }),
              status.value ? (openBlock(), createBlock(_component_v_uni_text, {
                key: 0,
                class: "status",
                "data-source-status": "backend-required"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(status.value), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-529fdbd8"]]);
export {
  index as default
};
