import { r as ref, z as computed, c as createBlock, w as withCtx, n as navigateTo, m as reLaunch, s as showToast, d as index$g, o as openBlock, a as createVNode, u as unref, h as createElementBlock, j as renderList, F as Fragment, q as ScrollView, v as normalizeClass, e as createTextVNode, t as toDisplayString, l as createCommentVNode, x as normalizeStyle, f as index$i, i as index$q } from "./index-CXXgV9dp.js";
import { o as onLoad } from "./uni-app.es.qPiJ1LRW.js";
import { B as BottomTabs } from "./BottomTabs.DNDs0y1b.js";
import { T as TopNav } from "./TopNav.rA2NxOJp.js";
import { h as home } from "./home.D-6m3wa_.js";
import { n as navigation } from "./product-navigation.i0LEhZiE.js";
import { c as createActionRouter } from "./action-router.DmGvHpfL.js";
import { r as resolveRuntimeAsset } from "./runtime-assets.gPzi_MQE.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "category",
  setup(__props) {
    const requestedCategoryId = ref("53");
    const activeCategory = computed(() => navigation.categories.find((category2) => category2.id === requestedCategoryId.value) ?? navigation.categories[0]);
    const router = createActionRouter({
      navigateTo: (target) => navigateTo({ url: target }),
      switchTab: async (target) => {
        if (target === "/pages/category/category")
          return;
        await reLaunch({ url: target });
      },
      notify: (message) => showToast({ title: message, icon: "none" })
    }, home.interactionMessages);
    onLoad((options) => {
      const candidate = String((options == null ? void 0 : options.category) ?? "53");
      if (navigation.categories.some((category2) => category2.id === candidate))
        requestedCategoryId.value = candidate;
    });
    function imageSource(source) {
      let resolved = source;
      if (resolved.startsWith("/"))
        resolved = `.${resolved}`;
      return resolved;
    }
    function categoryImageSource(image) {
      let resolved = resolveRuntimeAsset(image.sourceUrl) || image.localPath;
      if (resolved.startsWith("/"))
        resolved = `.${resolved}`;
      return resolved;
    }
    function selectCategory(category2) {
      requestedCategoryId.value = category2.id;
    }
    function openChild(child) {
      const query = [
        `cid=${encodeURIComponent(child.id)}`,
        `name=${encodeURIComponent(child.name)}`,
        `parent=${encodeURIComponent(activeCategory.value.name)}`
      ].join("&");
      navigateTo({ url: `/pages/product/list/list?${query}` });
    }
    function floatingStyle(item) {
      return {
        right: `${item.position.rightRpx}rpx`,
        bottom: `calc(${item.position.bottomRpx}rpx + env(safe-area-inset-bottom))`
      };
    }
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      const _component_v_uni_scroll_view = ScrollView;
      const _component_v_uni_image = index$q;
      return openBlock(), createBlock(_component_v_uni_view, { class: "category-page" }, {
        default: withCtx(() => [
          createVNode(TopNav, {
            title: "产品分类",
            "home-icon": imageSource(unref(home).navigation.homeIcon),
            "home-label": unref(home).navigation.homeLabel,
            onHome: _cache[0] || (_cache[0] = ($event) => reLaunch({ url: "/pages/index/index" }))
          }, null, 8, ["home-icon", "home-label"]),
          createVNode(_component_v_uni_view, { class: "category-layout" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_scroll_view, {
                class: "category-sidebar",
                "scroll-y": "",
                "show-scrollbar": false
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navigation).categories, (category2) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: category2.id,
                      class: normalizeClass(["category-item", { active: activeCategory.value.id === category2.id }]),
                      "data-category-id": category2.id,
                      "data-action-id": `category:select:${category2.id}`,
                      onClick: ($event) => selectCategory(category2)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(category2.name), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["class", "data-category-id", "data-action-id", "onClick"]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_scroll_view, {
                class: "subcategory-panel",
                "scroll-y": "",
                "show-scrollbar": false
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(activeCategory.value.children, (child) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: child.id,
                      class: "subcategory-card",
                      "data-child-category-id": child.id,
                      "data-action-id": `category:child:${child.id}`,
                      onClick: ($event) => openChild(child)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_image, {
                          class: "subcategory-image",
                          src: categoryImageSource(child.image),
                          mode: "aspectFill"
                        }, null, 8, ["src"]),
                        child.name ? (openBlock(), createBlock(_component_v_uni_text, {
                          key: 0,
                          class: "subcategory-name"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(child.name), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["data-child-category-id", "data-action-id", "onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "floating-actions" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).floatingActions, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "floating-button",
                  style: normalizeStyle(floatingStyle(item)),
                  "data-action-id": `floating:${item.id}`,
                  onClick: ($event) => unref(router).dispatch(item.action, { source: "category-floating", id: item.id })
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
            onSelect: _cache[1] || (_cache[1] = ($event) => unref(router).dispatch($event.action, { source: "bottom-tab", id: $event.id }))
          }, null, 8, ["tabs"])
        ]),
        _: 1
      });
    };
  }
};
const category = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-163b14a5"]]);
export {
  category as default
};
