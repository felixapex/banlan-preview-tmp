import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, l as createCommentVNode, A as navigateBack, m as reLaunch, f as index$i, I as Input, C as index$x } from "./index-B4mhl56q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "chat",
  setup(__props) {
    const text = ref("");
    const status = ref("");
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/index/index" }) });
    }
    function send() {
      status.value = text.value.trim() ? "原即时通信接口未接入，消息未发送" : "请输入消息";
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_input = Input;
      const _component_v_uni_button = index$x;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/im/chat/chat"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "chat:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("消息")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, {
            class: "empty",
            "data-source-status": "backend-required"
          }, {
            default: withCtx(() => [
              createTextVNode("历史消息需要原即时通信接口返回")
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "composer" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_input, {
                modelValue: text.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => text.value = $event),
                maxlength: "500",
                placeholder: "输入消息"
              }, null, 8, ["modelValue"]),
              createVNode(_component_v_uni_button, {
                "data-action-id": "chat:send",
                onClick: send
              }, {
                default: withCtx(() => [
                  createTextVNode("发送")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          status.value ? (openBlock(), createBlock(_component_v_uni_text, {
            key: 0,
            class: "status"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(status.value), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e644c1d0"]]);
export {
  chat as default
};
