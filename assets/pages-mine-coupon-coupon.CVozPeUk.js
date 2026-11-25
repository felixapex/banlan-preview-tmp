import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, h as createElementBlock, j as renderList, F as Fragment, e as createTextVNode, t as toDisplayString, l as createCommentVNode, v as normalizeClass, f as index$i } from "./index-B4mhl56q.js";
import { o as onLoad } from "./uni-app.es.oAhR1D-z.js";
import { J as JourneyHeader } from "./JourneyHeader.wutFjvaf.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "coupon",
  setup(__props) {
    const active = ref("available");
    const mode = ref("manage");
    const subtotal = ref(0);
    const items = ref([]);
    const status = ref("卡券列表需要原卡券接口返回");
    const money = (value) => Number(value || 0).toLocaleString("zh-CN");
    onLoad((q) => {
      mode.value = q.mode || "manage";
      subtotal.value = Number(q.subtotal || 0);
    });
    function unavailable() {
      status.value = "原卡券接口未接入，未领取或使用卡券";
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/mine/coupon/coupon",
        "data-page": "coupons"
      }, {
        default: withCtx(() => [
          createVNode(JourneyHeader, { title: "我的卡券" }),
          createVNode(_component_v_uni_view, { class: "tabs" }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList([{ id: "available", label: "可使用" }, { id: "claimable", label: "待领取" }, { id: "used", label: "已使用" }], (tab) => {
                return createVNode(_component_v_uni_view, {
                  key: tab.id,
                  class: normalizeClass({ active: active.value === tab.id }),
                  "data-action-id": `coupon:tab:${tab.id}`,
                  onClick: ($event) => active.value = tab.id
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tab.label), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "data-action-id", "onClick"]);
              }), 64))
            ]),
            _: 1
          }),
          mode.value === "select" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "hint"
          }, {
            default: withCtx(() => [
              createTextVNode("订单金额 ￥" + toDisplayString(money(subtotal.value)), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_v_uni_view, { class: "list" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "coupon"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, { class: "amount" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode("￥" + toDisplayString(money(item.discountYuan)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode("满￥" + toDisplayString(money(item.thresholdYuan)) + "可用", 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_uni_view, { class: "copy" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode("有效期至 " + toDisplayString(item.expiresAt), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_uni_view, {
                      class: "action",
                      "data-action-id": `coupon:action:${item.id}`,
                      onClick: unavailable
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(mode.value === "select" ? "使用" : "领取"), 1)
                      ]),
                      _: 2
                    }, 1032, ["data-action-id"])
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              !items.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "empty",
                "data-source-status": "backend-required"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(status.value), 1)
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
const coupon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-079d11c0"]]);
export {
  coupon as default
};
