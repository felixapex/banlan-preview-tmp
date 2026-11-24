import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode } from "./index-CXXgV9dp.js";
import { S as SourceStatusPage } from "./SourceStatusPage.CDDoNH6b.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "logs",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { "data-source-route": "pages/logs/logs" }, {
        default: withCtx(() => [
          createVNode(SourceStatusPage, {
            title: "查看启动日志",
            status: "原页面只显示小程序启动日志；当前未读取用户设备日志"
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
