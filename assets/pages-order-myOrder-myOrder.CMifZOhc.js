import { r as ref, z as computed, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, h as createElementBlock, j as renderList, F as Fragment, e as createTextVNode, l as createCommentVNode, v as normalizeClass, t as toDisplayString, n as navigateTo, f as index$i, i as index$q } from "./index-CXXgV9dp.js";
import { o as onLoad } from "./uni-app.es.qPiJ1LRW.js";
import { J as JourneyHeader } from "./JourneyHeader.DGrvi3Wb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "myOrder",
  setup(__props) {
    const sourceOrders = ref([]);
    const active = ref("all");
    onLoad((q) => {
      active.value = { 1: "pending_payment", 2: "paid" }[q.type] || "all";
    });
    const orders = computed(() => active.value === "all" ? sourceOrders.value : sourceOrders.value.filter((item) => item.status === active.value));
    const money = (value) => Number(value || 0).toLocaleString("zh-CN");
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_image = index$q;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/order/myOrder/myOrder",
        "data-page": "orders"
      }, {
        default: withCtx(() => [
          createVNode(JourneyHeader, { title: "我的订单" }),
          createVNode(_component_v_uni_view, { class: "tabs" }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList([{ id: "all", label: "全部" }, { id: "pending_payment", label: "待付款" }, { id: "paid", label: "待发货" }], (item) => {
                return createVNode(_component_v_uni_view, {
                  key: item.id,
                  class: normalizeClass({ active: active.value === item.id }),
                  "data-action-id": `orders:tab:${item.id}`,
                  onClick: ($event) => active.value = item.id
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "data-action-id", "onClick"]);
              }), 64))
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "list" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(orders.value, (order) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: order.id,
                  class: "order",
                  "data-action-id": `orders:open:${order.id}`,
                  onClick: ($event) => navigateTo({ url: `/pages/order/detail/detail?id=${encodeURIComponent(order.id)}` })
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, { class: "head" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.id), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.statusLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(order.items, (line) => {
                      return openBlock(), createBlock(_component_v_uni_view, {
                        key: line.key,
                        class: "line"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_image, {
                            src: line.image,
                            mode: "aspectFit"
                          }, null, 8, ["src"]),
                          createVNode(_component_v_uni_view, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_text, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(line.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_uni_text, null, {
                                default: withCtx(() => [
                                  createTextVNode("×" + toDisplayString(line.quantity), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_v_uni_view, { class: "total" }, {
                      default: withCtx(() => [
                        createTextVNode("实付/应付 ￥" + toDisplayString(money(order.payableYuan)) + "　›", 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["data-action-id", "onClick"]);
              }), 128)),
              !orders.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "empty",
                "data-source-status": "backend-required"
              }, {
                default: withCtx(() => [
                  createTextVNode("订单列表需要原订单接口返回")
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const myOrder = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db4ca4d6"]]);
export {
  myOrder as default
};
