import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, l as createCommentVNode, f as index$i, i as index$q, C as index$x, I as Input } from "./index-B4mhl56q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const avatarUrl = ref("");
    const nickName = ref("");
    const status = ref("");
    function chooseAvatar(event) {
      var _a;
      avatarUrl.value = ((_a = event == null ? void 0 : event.detail) == null ? void 0 : _a.avatarUrl) || "";
    }
    function requestProfile() {
      status.value = "微信授权登录只能在微信小程序环境中使用";
    }
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_image = index$q;
      const _component_v_uni_button = index$x;
      const _component_v_uni_input = Input;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/login/login"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_text, { class: "title" }, {
            default: withCtx(() => [
              createTextVNode("授权")
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_button, {
            class: "avatar",
            "open-type": "chooseAvatar",
            "data-action-id": "login:avatar",
            onChooseavatar: chooseAvatar
          }, {
            default: withCtx(() => [
              avatarUrl.value ? (openBlock(), createBlock(_component_v_uni_image, {
                key: 0,
                src: avatarUrl.value,
                mode: "aspectFill"
              }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_uni_text, { key: 1 }, {
                default: withCtx(() => [
                  createTextVNode("选择头像")
                ]),
                _: 1
              }))
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_input, {
            modelValue: nickName.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => nickName.value = $event),
            type: "nickname",
            maxlength: "32",
            placeholder: "请输入昵称"
          }, null, 8, ["modelValue"]),
          createVNode(_component_v_uni_button, {
            class: "submit",
            "data-action-id": "login:submit",
            onClick: requestProfile
          }, {
            default: withCtx(() => [
              createTextVNode("微信授权登录")
            ]),
            _: 1
          }),
          status.value ? (openBlock(), createBlock(_component_v_uni_text, {
            key: 0,
            class: "status",
            "data-source-status": "incomplete"
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
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb6d3e66"]]);
export {
  login as default
};
