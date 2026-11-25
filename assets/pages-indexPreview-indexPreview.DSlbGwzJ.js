import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode } from "./index-B4mhl56q.js";
import { S as SourceStatusPage } from "./SourceStatusPage.WjcZ7-PM.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "indexPreview",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { "data-source-route": "pages/indexPreview/indexPreview" }, {
        default: withCtx(() => [
          createVNode(SourceStatusPage, {
            title: "页面预览",
            status: "该路由依赖原装修预览数据；当前保存资料中没有对应预览响应"
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
