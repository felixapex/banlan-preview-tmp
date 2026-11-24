import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, f as index$i } from "./index-CXXgV9dp.js";
import { o as onLoad } from "./uni-app.es.qPiJ1LRW.js";
import { J as JourneyHeader } from "./JourneyHeader.DGrvi3Wb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const orderId = ref("");
    const order = ref(null);
    onLoad((q) => {
      orderId.value = q.id || q.orderId || "";
    });
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/order/detail/detail",
        "data-page": "order-detail"
      }, {
        default: withCtx(() => [
          createVNode(JourneyHeader, { title: "订单详情" }),
          order.value ? (openBlock(), createBlock(_component_v_uni_view, { key: 0 }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "status" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(order.value.statusLabel), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "empty",
            "data-source-status": "backend-required"
          }, {
            default: withCtx(() => [
              createTextVNode("订单 " + toDisplayString(orderId.value || "未指定") + " 需要原订单详情接口返回", 1)
            ]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a991d4c"]]);
export {
  detail as default
};
