import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode } from "./index-B4mhl56q.js";
import { S as SourceStatusPage } from "./SourceStatusPage.WjcZ7-PM.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "qr",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { "data-source-route": "pages/im/qr/qr" }, {
        default: withCtx(() => [
          createVNode(SourceStatusPage, {
            title: "联系二维码",
            status: "顾问身份与二维码需要原即时通信服务返回"
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
