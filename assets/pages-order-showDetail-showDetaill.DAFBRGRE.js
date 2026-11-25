import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode } from "./index-B4mhl56q.js";
import { S as SourceStatusPage } from "./SourceStatusPage.WjcZ7-PM.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "showDetaill",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { "data-source-route": "pages/order/showDetail/showDetaill" }, {
        default: withCtx(() => [
          createVNode(SourceStatusPage, {
            title: "评价详情",
            status: "评价详情、回复和点赞状态需要原晒单接口返回"
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
