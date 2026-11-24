import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode } from "./index-CXXgV9dp.js";
import { S as SourceStatusPage } from "./SourceStatusPage.CDDoNH6b.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "myShow",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { "data-source-route": "pages/mine/myShow/myShow" }, {
        default: withCtx(() => [
          createVNode(SourceStatusPage, {
            title: "我的晒单",
            status: "晒单列表需要原用户晒单接口返回"
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
