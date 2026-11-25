import { r as ref, z as computed, c as createBlock, w as withCtx, g as getStorageSync, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, n as navigateTo, h as createElementBlock, j as renderList, F as Fragment, l as createCommentVNode, v as normalizeClass, s as showToast, f as index$i, I as Input, i as index$q } from "./index-CXXgV9dp.js";
import { a as onShow } from "./uni-app.es.qPiJ1LRW.js";
import { J as JourneyHeader } from "./JourneyHeader.DGrvi3Wb.js";
import { r as readStoredLines, j as CHECKOUT_STORAGE_KEY, e as cartTotal } from "./cart.BN6woblX.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "orderConfirm",
  setup(__props) {
    const lines = ref([]);
    const note = ref("");
    const agreement = ref(true);
    const subtotal = computed(() => cartTotal(lines.value.map((item) => ({ ...item, checked: true }))));
    const address = computed(() => null);
    const coupon = computed(() => null);
    const payable = computed(() => subtotal.value);
    const money = (value) => Number(value || 0).toLocaleString("zh-CN");
    onShow(() => {
      lines.value = readStoredLines(getStorageSync, CHECKOUT_STORAGE_KEY);
    });
    function imageSource(source) {
      let resolved = source;
      if (resolved.startsWith("/"))
        resolved = `.${resolved}`;
      return resolved;
    }
    function login() {
      navigateTo({ url: `/pages/login/login?redirect=${encodeURIComponent("/pages/order/orderConfirm/orderConfirm")}` });
    }
    function useFallback(line) {
      if (line.fallbackImage && line.image !== line.fallbackImage)
        line.image = line.fallbackImage;
    }
    function submit() {
      if (!agreement.value)
        return showToast({ title: "请先阅读并同意购买须知", icon: "none" });
      showToast({ title: "原下单接口未接入，未创建订单", icon: "none" });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_v_uni_input = Input;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-page": "checkout"
      }, {
        default: withCtx(() => [
          createVNode(JourneyHeader, { title: "确认订单" }),
          createVNode(_component_v_uni_view, {
            class: "login-card",
            "data-action-id": "checkout:login",
            onClick: login
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, null, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("登录会员后继续结算")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, { "data-source-status": "backend-required" }, {
                    default: withCtx(() => [
                      createTextVNode("需要原登录与订单接口")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("去登录 ›")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, {
            class: "address-card",
            "data-action-id": "checkout:address",
            onClick: _cache[0] || (_cache[0] = ($event) => navigateTo({ url: "/pages/address/list/list?mode=select" }))
          }, {
            default: withCtx(() => [
              address.value ? (openBlock(), createBlock(_component_v_uni_view, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(address.value.name) + "　" + toDisplayString(address.value.mobile), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(address.value.region) + " " + toDisplayString(address.value.detail), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_v_uni_view, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("收货地址")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("请选择收货地址")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("›")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "order-card" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, { class: "title" }, {
                default: withCtx(() => [
                  createTextVNode("商品清单")
                ]),
                _: 1
              }),
              (openBlock(true), createElementBlock(Fragment, null, renderList(lines.value, (line) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: line.key,
                  class: "line"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      src: imageSource(line.image),
                      mode: "aspectFit",
                      onError: ($event) => useFallback(line)
                    }, null, 8, ["src", "onError"]),
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
                            createTextVNode(toDisplayString(line.specifications.map((item) => item.name).join("　")), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_view, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_text, null, {
                              default: withCtx(() => [
                                createTextVNode("￥" + toDisplayString(money(line.unitPriceYuan)), 1)
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
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              !lines.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "empty"
              }, {
                default: withCtx(() => [
                  createTextVNode("没有待确认的商品")
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, {
            class: "row",
            "data-action-id": "checkout:coupon",
            onClick: _cache[1] || (_cache[1] = ($event) => navigateTo({ url: `/pages/mine/coupon/coupon?mode=select&subtotal=${subtotal.value}` }))
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("优惠券")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(coupon.value ? `-${money(coupon.value.discountYuan)} 元` : "选择卡券") + " ›", 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "row note" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("订单备注")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_input, {
                modelValue: note.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => note.value = $event),
                maxlength: "200",
                placeholder: "选填，与产品顾问沟通的要求"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, {
            class: "agreement",
            "data-action-id": "checkout:agreement",
            onClick: _cache[3] || (_cache[3] = ($event) => agreement.value = !agreement.value)
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(agreement.value ? "●" : "○"), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("我已阅读并同意《御虎云店铺在售产品购买须知》")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "summary" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, null, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("商品金额")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("￥" + toDisplayString(money(subtotal.value)), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, null, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("卡券优惠")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode("-￥" + toDisplayString(money(((_a = coupon.value) == null ? void 0 : _a.discountYuan) || 0)), 1)
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "bottom" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, null, {
                default: withCtx(() => [
                  createTextVNode("合计："),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("￥" + toDisplayString(money(payable.value)), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: normalizeClass(["submit", { disabled: !lines.value.length || !agreement.value }]),
                "data-action-id": "checkout:submit",
                onClick: submit
              }, {
                default: withCtx(() => [
                  createTextVNode("提交订单")
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const orderConfirm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-569394ac"]]);
export {
  orderConfirm as default
};
