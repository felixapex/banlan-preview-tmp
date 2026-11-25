import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, h as createElementBlock, j as renderList, F as Fragment, t as toDisplayString, A as navigateBack, m as reLaunch, f as index$i } from "./index-B4mhl56q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "message",
  setup(__props) {
    const messageList = ref([]);
    const status = ref("消息列表需要原 GetNoticePage 接口返回");
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/mine/mine/mine" }) });
    }
    function readAll() {
      status.value = "原 ChangeNoticeState 接口未接入，未修改消息状态";
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/mine/message/message"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "message:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("消息通知")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                "data-action-id": "message:read-all",
                onClick: readAll
              }, {
                default: withCtx(() => [
                  createTextVNode("全部已读")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          messageList.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "list"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(messageList.value, (item) => {
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
              createTextVNode(toDisplayString(status.value), 1)
            ]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
};
const message = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21b7fc35"]]);
export {
  message as default
};
