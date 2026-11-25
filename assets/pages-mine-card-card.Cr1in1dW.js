import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode } from "./index-B4mhl56q.js";
import { S as SourceStatusPage } from "./SourceStatusPage.WjcZ7-PM.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "card",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { "data-source-route": "pages/mine/card/card" }, {
        default: withCtx(() => [
          createVNode(SourceStatusPage, {
            title: "品牌会员卡",
            status: "会员资料、绑定手机和会员二维码需要原 GetMyInfo、BdMobile 与 GetInfo 接口"
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
