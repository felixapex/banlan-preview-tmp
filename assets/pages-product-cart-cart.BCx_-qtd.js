import { r as ref, z as computed, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, A as navigateBack, e as createTextVNode, u as unref, m as reLaunch, v as normalizeClass, t as toDisplayString, h as createElementBlock, j as renderList, F as Fragment, g as getStorageSync, s as showToast, n as navigateTo, f as index$i, i as index$q, G as setStorageSync } from "./index-CXXgV9dp.js";
import { a as onShow } from "./uni-app.es.qPiJ1LRW.js";
import { h as home } from "./home.D-6m3wa_.js";
import { r as readStoredLines, C as CART_STORAGE_KEY, e as cartTotal, s as selectedCartLines, t as toggleAllCartLines, w as writeStoredLines, g as toggleCartLine, h as setCartQuantity, i as removeCartLine, j as CHECKOUT_STORAGE_KEY } from "./cart.BN6woblX.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "cart",
  setup(__props) {
    const lines = ref([]);
    const clearArmed = ref(false);
    const homeIcon = home.navigation.homeIcon;
    const getStorage = (key) => getStorageSync(key);
    const setStorage = (key, value) => setStorageSync(key, value);
    const checkedAll = computed(() => lines.value.length > 0 && lines.value.every((item) => item.checked));
    const total = computed(() => cartTotal(lines.value));
    const selectedCount = computed(() => selectedCartLines(lines.value).length);
    onShow(() => {
      lines.value = readStoredLines(getStorage, CART_STORAGE_KEY);
    });
    function imageSource(source) {
      let resolved = source;
      if (resolved.startsWith("/"))
        resolved = `.${resolved}`;
      return resolved;
    }
    function persist(next) {
      lines.value = writeStoredLines(setStorage, next, CART_STORAGE_KEY);
    }
    function toggleOne(line) {
      persist(toggleCartLine(lines.value, line.key, !line.checked));
    }
    function toggleAll() {
      persist(toggleAllCartLines(lines.value, !checkedAll.value));
    }
    function decrement(line) {
      persist(setCartQuantity(lines.value, line.key, line.quantity - 1));
    }
    function increment(line) {
      persist(setCartQuantity(lines.value, line.key, line.quantity + 1));
    }
    function remove(line) {
      persist(removeCartLine(lines.value, line.key));
    }
    function clearCart() {
      if (!clearArmed.value) {
        clearArmed.value = true;
        showToast({ title: "再次点击确认清空", icon: "none" });
        return;
      }
      persist([]);
      clearArmed.value = false;
    }
    function orderNow() {
      const chosen = selectedCartLines(lines.value);
      if (!chosen.length) {
        showToast({ title: "请选择要下单的商品", icon: "none" });
        return;
      }
      writeStoredLines(setStorage, chosen, CHECKOUT_STORAGE_KEY);
      navigateTo({ url: "/pages/order/orderConfirm/orderConfirm" });
    }
    function specText(line) {
      return line.specifications.map((item) => `${item.name}${item.description ? ` ${item.description}` : ""}`).join("  ");
    }
    function money(value) {
      return Number(value).toLocaleString("zh-CN");
    }
    function useFallback(line) {
      if (line.fallbackImage && line.image !== line.fallbackImage)
        line.image = line.fallbackImage;
    }
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "cart-page",
        "data-page": "cart"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "cart-nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "nav-left" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, {
                    "data-action-id": "cart:back",
                    onClick: _cache[0] || (_cache[0] = ($event) => navigateBack())
                  }, {
                    default: withCtx(() => [
                      createTextVNode("‹")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view),
                  createVNode(_component_v_uni_image, {
                    src: imageSource(unref(homeIcon)),
                    mode: "aspectFit",
                    "data-action-id": "cart:home",
                    onClick: _cache[1] || (_cache[1] = ($event) => reLaunch({ url: "/pages/index/index" }))
                  }, null, 8, ["src"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, { class: "nav-title" }, {
                default: withCtx(() => [
                  createTextVNode("购物车")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "wechat-capsule" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("•••")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("—")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("◉")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "clear-row" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, {
                class: normalizeClass({ armed: clearArmed.value }),
                "data-action-id": "cart:clear",
                onClick: clearCart
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(clearArmed.value ? "确认清空" : "清空购物车"), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          }),
          lines.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "cart-lines"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(lines.value, (line) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: line.key,
                  class: "cart-line",
                  "data-cart-key": line.key
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, {
                      class: normalizeClass(["check", { checked: line.checked }]),
                      "data-action-id": "cart:toggle-line",
                      onClick: ($event) => toggleOne(line)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(line.checked ? "✓" : ""), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"]),
                    createVNode(_component_v_uni_image, {
                      class: "line-image",
                      src: imageSource(line.image),
                      mode: "aspectFit",
                      "data-action-id": "cart:open-product",
                      onError: ($event) => useFallback(line),
                      onClick: ($event) => navigateTo({ url: `/pages/product/detail/detail?id=${line.productId}` })
                    }, null, 8, ["src", "onError", "onClick"]),
                    createVNode(_component_v_uni_view, { class: "line-info" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, { class: "title-price" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_text, { class: "line-title" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(line.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_text, { class: "line-price" }, {
                              default: withCtx(() => [
                                createTextVNode("￥ " + toDisplayString(money(line.unitPriceYuan)), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "line-specs" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(specText(line)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_view, { class: "line-actions" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_view, { class: "quantity" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_uni_text, {
                                  "data-action-id": "cart:decrement",
                                  onClick: ($event) => decrement(line)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("−")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_v_uni_text, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(line.quantity), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_uni_text, {
                                  "data-action-id": "cart:increment",
                                  onClick: ($event) => increment(line)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("＋")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_text, {
                              class: "delete",
                              "data-action-id": "cart:remove",
                              onClick: ($event) => remove(line)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("♲")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["data-cart-key"]);
              }), 128))
            ]),
            _: 1
          })) : (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "empty-cart"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("购物车还是空的")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                "data-action-id": "cart:browse",
                onClick: _cache[2] || (_cache[2] = ($event) => reLaunch({ url: "/pages/category/category" }))
              }, {
                default: withCtx(() => [
                  createTextVNode("去逛逛产品")
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          createVNode(_component_v_uni_view, { class: "cart-bottom" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "total-select",
                "data-action-id": "cart:toggle-all",
                onClick: toggleAll
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    class: normalizeClass(["check", { checked: checkedAll.value }])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(checkedAll.value ? "✓" : ""), 1)
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("合计￥")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, { class: "total-price" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(money(total.value)), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: normalizeClass(["order-button", { disabled: selectedCount.value === 0 }]),
                "data-action-id": "cart:order-now",
                onClick: orderNow
              }, {
                default: withCtx(() => [
                  createTextVNode("立即下单")
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
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0613550d"]]);
export {
  cart as default
};
