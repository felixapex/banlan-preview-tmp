import { r as ref, z as computed, c as createBlock, w as withCtx, n as navigateTo, m as reLaunch, s as showToast, d as index$g, o as openBlock, a as createVNode, A as navigateBack, e as createTextVNode, u as unref, t as toDisplayString, l as createCommentVNode, v as normalizeClass, k as createBaseVNode, h as createElementBlock, j as renderList, F as Fragment, i as index$q, f as index$i, x as normalizeStyle } from "./index-B4mhl56q.js";
import { o as onLoad } from "./uni-app.es.oAhR1D-z.js";
import { B as BottomTabs } from "./BottomTabs.B9Xq1Uo2.js";
import { h as home } from "./home.D-6m3wa_.js";
import { n as navigation } from "./product-navigation.i0LEhZiE.js";
import { c as createRuntimeProducts, s as sofaShowcase, p as productsData } from "./runtime-products.C3fIHjhg.js";
import { c as createActionRouter } from "./action-router.DmGvHpfL.js";
import { r as resolveRuntimeAsset } from "./runtime-assets.CAI08V4T.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    const cid = ref("");
    const requestedName = ref("");
    const compact = ref(true);
    const runtimeProducts = createRuntimeProducts(productsData.products, sofaShowcase);
    const childCategory = computed(() => {
      for (const parent of navigation.categories) {
        const child = parent.children.find((item) => item.id === cid.value);
        if (child)
          return { ...child, parentName: parent.name };
      }
      return null;
    });
    const visibleProducts = computed(() => runtimeProducts.filter((product) => String(product.category.id) === ({"yh1c": "77", "yh2c": "77", "yh3c": "77", "yh4c": "48", "yh5c": "76", "yh6c": "48", "yh7c": "77", "yh8c": "56", "yh9c": "121", "yh10c": "121"}[cid.value] || cid.value)));
    const categoryName = computed(() => {
      var _a;
      return ((_a = childCategory.value) == null ? void 0 : _a.name) || requestedName.value || "产品";
    });
    const router = createActionRouter({
      navigateTo: (target) => navigateTo({ url: target }),
      switchTab: async (target) => reLaunch({ url: target }),
      notify: (message) => showToast({ title: message, icon: "none" })
    }, home.interactionMessages);
    onLoad((options) => {
      cid.value = String((options == null ? void 0 : options.cid) ?? "");
      requestedName.value = String((options == null ? void 0 : options.name) ?? "");
    });
    function imageSource(source) {
      let resolved = source;
      if (resolved == null ? void 0 : resolved.startsWith("/"))
        resolved = `.${resolved}`;
      return resolved;
    }
    function categoryImageSource(image) {
      return resolveRuntimeAsset(image.sourceUrl) || imageSource(image.localPath);
    }
    function price(yuan) {
      return yuan > 0 ? `¥ ${Number(yuan).toLocaleString("zh-CN")}起` : "价格咨询";
    }
    function floatingStyle(item) {
      return {
        right: `${item.position.rightRpx}rpx`,
        bottom: `calc(${item.position.bottomRpx}rpx + env(safe-area-inset-bottom))`
      };
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "product-list-page",
        "data-list-cid": cid.value
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "list-nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "nav-left" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    class: "back",
                    "data-action-id": "list:back",
                    onClick: _cache[0] || (_cache[0] = ($event) => navigateBack())
                  }, {
                    default: withCtx(() => [
                      createTextVNode("‹")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "nav-divider" }),
                  createVNode(_component_v_uni_image, {
                    class: "nav-home",
                    src: imageSource(unref(home).navigation.homeIcon),
                    mode: "aspectFit",
                    "data-action-id": "list:home",
                    onClick: _cache[1] || (_cache[1] = ($event) => reLaunch({ url: "/pages/index/index" }))
                  }, null, 8, ["src"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, { class: "nav-title" }, {
                default: withCtx(() => [
                  createTextVNode("产品列表")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "wechat-capsule",
                "aria-hidden": "true"
              }, {
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
          childCategory.value ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "main-image-view"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_image, {
                class: "main-image",
                src: categoryImageSource(childCategory.value.heroImage),
                mode: "widthFix"
              }, null, 8, ["src"]),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(categoryName.value), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_v_uni_view, { class: "list-count-container" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, { class: "item" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(visibleProducts.value.length) + "件商品", 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "view-switches" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    class: normalizeClass(["grid-icon", { active: compact.value }]),
                    "data-action-id": "list:view:grid",
                    onClick: _cache[2] || (_cache[2] = ($event) => compact.value = true)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("i"),
                      createBaseVNode("i"),
                      createBaseVNode("i"),
                      createBaseVNode("i")
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(_component_v_uni_view, {
                    class: normalizeClass(["large-icon", { active: !compact.value }]),
                    "data-action-id": "list:view:large",
                    onClick: _cache[3] || (_cache[3] = ($event) => compact.value = false)
                  }, null, 8, ["class"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, {
            class: normalizeClass(["product-container", { large: !compact.value }])
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(visibleProducts.value, (product) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: product.id,
                  class: "product-item",
                  "data-product-id": product.id,
                  "data-action-id": `list:product:${product.id}`,
                  onClick: ($event) => unref(router).dispatch(product.action, { source: "product-list", id: product.id, cid: cid.value })
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      class: "product-image",
                      src: imageSource(product.coverImage),
                      mode: "aspectFit",
                      "lazy-load": ""
                    }, null, 8, ["src"]),
                    createVNode(_component_v_uni_text, { class: "item-product-title" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(product.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_uni_text, { class: "item-product-price" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(price(product.priceYuan)), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["data-product-id", "data-action-id", "onClick"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["class"]),
          !visibleProducts.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "empty-state"
          }, {
            default: withCtx(() => [
              createTextVNode("这 50 件已采集商品中暂无“" + toDisplayString(categoryName.value) + "”商品", 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_v_uni_view, { class: "floating-actions" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).floatingActions, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "floating-button",
                  style: normalizeStyle(floatingStyle(item)),
                  "data-action-id": `floating:${item.id}`,
                  onClick: ($event) => unref(router).dispatch(item.action, { source: "product-list-floating", id: item.id })
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      class: "floating-icon",
                      src: imageSource(item.image),
                      mode: "aspectFit"
                    }, null, 8, ["src"]),
                    item.badge !== void 0 ? (openBlock(), createBlock(_component_v_uni_text, {
                      key: 0,
                      class: "badge"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.badge), 1)
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["style", "data-action-id", "onClick"]);
              }), 128))
            ]),
            _: 1
          }),
          createVNode(BottomTabs, {
            tabs: unref(home).tabs,
            active: "products",
            onSelect: _cache[4] || (_cache[4] = ($event) => unref(router).dispatch($event.action, { source: "bottom-tab", id: $event.id }))
          }, null, 8, ["tabs"])
        ]),
        _: 1
      }, 8, ["data-list-cid"]);
    };
  }
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b97860a"]]);
export {
  list as default
};
