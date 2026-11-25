import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode } from "./index-B4mhl56q.js";
import { S as SourceStatusPage } from "./SourceStatusPage.WjcZ7-PM.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "review",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { "data-source-route": "invite/review/review" }, {
        default: withCtx(() => [
          createVNode(SourceStatusPage, {
            title: "往期回顾",
            status: "往期活动列表需要原活动接口返回"
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
