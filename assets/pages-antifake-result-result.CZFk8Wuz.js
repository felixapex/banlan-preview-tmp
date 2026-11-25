import { r as ref, z as computed, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, l as createCommentVNode, A as navigateBack, m as reLaunch, f as index$i } from "./index-B4mhl56q.js";
import { o as onLoad } from "./uni-app.es.oAhR1D-z.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "result",
  setup(__props) {
    const status = ref("");
    const message = ref("");
    const token = ref("");
    const resultCode = ref("");
    const payload = ref(null);
    onLoad((q) => {
      status.value = String((q == null ? void 0 : q.status) || "");
      message.value = decodeURIComponent(String((q == null ? void 0 : q.message) || ""));
      token.value = String((q == null ? void 0 : q.token) || "");
      resultCode.value = String((q == null ? void 0 : q.resultCode) || "");
      if (q == null ? void 0 : q.data) {
        try {
          payload.value = JSON.parse(decodeURIComponent(q.data));
        } catch {
          payload.value = null;
        }
      }
    });
    const title = computed(() => status.value === "success" ? "验证成功" : status.value ? "验证未通过" : "暂无验证结果");
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/antifake/index/index" }) });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/antifake/result/result"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "antifake-result:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("验证结果")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "result" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, { class: "title" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(title.value), 1)
                ]),
                _: 1
              }),
              message.value ? (openBlock(), createBlock(_component_v_uni_text, { key: 0 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(message.value), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              resultCode.value ? (openBlock(), createBlock(_component_v_uni_text, { key: 1 }, {
                default: withCtx(() => [
                  createTextVNode("结果代码：" + toDisplayString(resultCode.value), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              token.value ? (openBlock(), createBlock(_component_v_uni_text, { key: 2 }, {
                default: withCtx(() => [
                  createTextVNode("标签：" + toDisplayString(token.value), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              payload.value ? (openBlock(), createBlock(_component_v_uni_text, { key: 3 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(JSON.stringify(payload.value)), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              !status.value ? (openBlock(), createBlock(_component_v_uni_text, {
                key: 4,
                "data-source-status": "backend-required"
              }, {
                default: withCtx(() => [
                  createTextVNode("需要原 AntifakeQuery 接口返回验证结果")
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
const result = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d0743e3"]]);
export {
  result as default
};
