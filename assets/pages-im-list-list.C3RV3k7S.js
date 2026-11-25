import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode } from "./index-B4mhl56q.js";
import { S as SourceStatusPage } from "./SourceStatusPage.WjcZ7-PM.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { "data-source-route": "pages/im/list/list" }, {
        default: withCtx(() => [
          createVNode(SourceStatusPage, {
            title: "消息列表",
            status: "原源码没有页面列表逻辑，消息内容需要原即时通信服务"
          })
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
