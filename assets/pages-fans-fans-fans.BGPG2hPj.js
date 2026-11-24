import { r as ref, z as computed, c as createBlock, w as withCtx, n as navigateTo, m as reLaunch, s as showToast, d as index$g, o as openBlock, a as createVNode, u as unref, h as createElementBlock, j as renderList, F as Fragment, k as createBaseVNode, p as pageScrollTo, v as normalizeClass, e as createTextVNode, t as toDisplayString, x as normalizeStyle, f as index$i } from "./index-CXXgV9dp.js";
import { o as onLoad } from "./uni-app.es.qPiJ1LRW.js";
import { B as BottomTabs } from "./BottomTabs.DNDs0y1b.js";
import { T as TopNav } from "./TopNav.rA2NxOJp.js";
import { b as banlan } from "./banlan.CMKa_9dG.js";
import { h as home } from "./home.D-6m3wa_.js";
import { c as createActionRouter } from "./action-router.DmGvHpfL.js";
import { r as resolveRuntimeAsset } from "./runtime-assets.gPzi_MQE.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "fans",
  setup(__props) {
    const activeTab = ref("show");
    const currentItems = computed(() => banlan.content[activeTab.value] ?? []);
    const leftShow = computed(() => currentItems.value.filter((_, index) => index % 2 === 0));
    const rightShow = computed(() => currentItems.value.filter((_, index) => index % 2 === 1));
    const screenContract = computed(() => banlan.layout.minimumScreenHeights[activeTab.value]);
    onLoad((options) => {
      if (banlan.tabs.some((tab) => tab.id === (options == null ? void 0 : options.tab)))
        activeTab.value = options.tab;
    });
    const router = createActionRouter({
      navigateTo: (target) => navigateTo({ url: target }),
      switchTab: (target) => reLaunch({ url: target }),
      notify: (message) => showToast({ title: message || "无法执行该操作", icon: "none" })
    }, home.interactionMessages);
    function imageSource(item) {
      let source = resolveRuntimeAsset(item.remoteImage) || item.image;
      if (source.startsWith("/"))
        source = `.${source}`;
      return source;
    }
    function navIconSource(source) {
      let resolved = source;
      if (resolved.startsWith("/"))
        resolved = `.${resolved}`;
      return resolved;
    }
    function hotspotStyle(hotspot) {
      const style = {
        top: `${hotspot.topRpx}rpx`,
        width: `${banlan.aboutPage.hotspotWidthRpx}rpx`,
        height: `${banlan.aboutPage.hotspotHeightRpx}rpx`
      };
      if (Number.isFinite(hotspot.leftRpx))
        style.left = `${hotspot.leftRpx}rpx`;
      if (Number.isFinite(hotspot.rightRpx))
        style.right = `${hotspot.rightRpx}rpx`;
      return style;
    }
    function switchSection(id) {
      activeTab.value = id;
      pageScrollTo({ scrollTop: 0, duration: 0 });
    }
    function open(item) {
      return router.dispatch(item.action, { source: `banlan:${activeTab.value}`, id: item.id });
    }
    function goHome() {
      reLaunch({ url: "/pages/index/index" });
    }
    function openBottom(tab) {
      if (tab.id === "banlan") {
        pageScrollTo({ scrollTop: 0, duration: 200 });
        return;
      }
      return router.dispatch(tab.action, { source: "banlan-bottom-tab", id: tab.id });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "banlan-page",
        "data-active-tab": activeTab.value,
        "data-minimum-screens": screenContract.value
      }, {
        default: withCtx(() => [
          createVNode(TopNav, {
            title: unref(banlan).title,
            "home-icon": navIconSource(unref(home).navigation.homeIcon),
            "home-label": unref(home).navigation.homeLabel,
            onHome: goHome
          }, null, 8, ["title", "home-icon", "home-label"]),
          createVNode(_component_v_uni_view, {
            class: "section-tabs",
            role: "tablist"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(banlan).tabs, (tab) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: tab.id,
                  class: normalizeClass(["section-tab", { active: activeTab.value === tab.id }]),
                  "data-action-id": `banlan:tab:${tab.id}`,
                  "data-banlan-tab": tab.id,
                  onClick: ($event) => switchSection(tab.id)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tab.label), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "data-action-id", "data-banlan-tab", "onClick"]);
              }), 128))
            ]),
            _: 1
          }),
          activeTab.value === "show" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "panel show-panel",
            "data-banlan-panel": "show"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "masonry-column" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(leftShow.value, (item) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: item.id,
                      class: "show-card",
                      "data-action-id": `banlan:${activeTab.value}:item:${item.id}`,
                      "data-banlan-card": item.id,
                      onClick: ($event) => open(item)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("img", {
                          class: "show-image",
                          src: imageSource(item),
                          loading: "eager",
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode(_component_v_uni_view, { class: "show-copy" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_text, { class: "show-title" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_text, { class: "show-meta" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.meta), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["data-action-id", "data-banlan-card", "onClick"]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "masonry-column offset" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(rightShow.value, (item) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: item.id,
                      class: "show-card",
                      "data-action-id": `banlan:${activeTab.value}:item:${item.id}`,
                      "data-banlan-card": item.id,
                      onClick: ($event) => open(item)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("img", {
                          class: "show-image",
                          src: imageSource(item),
                          loading: "eager",
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode(_component_v_uni_view, { class: "show-copy" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_text, { class: "show-title" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_text, { class: "show-meta" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.meta), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["data-action-id", "data-banlan-card", "onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : activeTab.value === "designers" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "panel editorial-panel",
            "data-banlan-panel": "designers"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(currentItems.value, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "editorial-card designer-card",
                  "data-action-id": `banlan:${activeTab.value}:item:${item.id}`,
                  "data-banlan-card": item.id,
                  onClick: ($event) => open(item)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("img", {
                      class: "editorial-image designer-image",
                      src: imageSource(item),
                      loading: "eager",
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode(_component_v_uni_view, { class: "editorial-overlay" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, { class: "eyebrow" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.meta), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "editorial-title" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "editorial-summary" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.summary), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["data-action-id", "data-banlan-card", "onClick"]);
              }), 128))
            ]),
            _: 1
          })) : activeTab.value === "diary" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 2,
            class: "panel editorial-panel",
            "data-banlan-panel": "diary"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(currentItems.value, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "editorial-card diary-card",
                  "data-action-id": `banlan:${activeTab.value}:item:${item.id}`,
                  "data-banlan-card": item.id,
                  onClick: ($event) => open(item)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("img", {
                      class: "editorial-image diary-image",
                      src: imageSource(item),
                      loading: "eager",
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode(_component_v_uni_view, { class: "diary-copy" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, { class: "eyebrow" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.meta), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "editorial-title" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "editorial-summary" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.summary), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "read-more" }, {
                          default: withCtx(() => [
                            createTextVNode("阅读全文 →")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["data-action-id", "data-banlan-card", "onClick"]);
              }), 128))
            ]),
            _: 1
          })) : activeTab.value === "news" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 3,
            class: "panel news-panel",
            "data-banlan-panel": "news"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(currentItems.value, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "news-card",
                  "data-action-id": `banlan:${activeTab.value}:item:${item.id}`,
                  "data-banlan-card": item.id,
                  onClick: ($event) => open(item)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("img", {
                      class: "news-image",
                      src: imageSource(item),
                      loading: "eager",
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode(_component_v_uni_view, { class: "news-copy" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, { class: "eyebrow" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.meta), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "news-title" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "news-summary" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.summary), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["data-action-id", "data-banlan-card", "onClick"]);
              }), 128))
            ]),
            _: 1
          })) : (openBlock(), createBlock(_component_v_uni_view, {
            key: 4,
            class: "panel about-source-panel",
            "data-banlan-panel": "about",
            "data-render-mode": unref(banlan).aboutPage.renderMode
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "about-composite" }, {
                default: withCtx(() => [
                  createBaseVNode("img", {
                    class: "about-source-image",
                    src: imageSource(unref(banlan).aboutPage),
                    loading: "eager",
                    alt: "关于班兰"
                  }, null, 8, ["src"]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(currentItems.value, (item) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: item.id,
                      class: "about-hotspot",
                      style: normalizeStyle(hotspotStyle(item.hotspot)),
                      "aria-label": item.title,
                      "data-action-id": `banlan:about:${item.id}`,
                      "data-banlan-card": item.id,
                      onClick: ($event) => open(item)
                    }, null, 8, ["style", "aria-label", "data-action-id", "data-banlan-card", "onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data-render-mode"])),
          createVNode(BottomTabs, {
            tabs: unref(home).tabs,
            active: "banlan",
            onSelect: openBottom
          }, null, 8, ["tabs"])
        ]),
        _: 1
      }, 8, ["data-active-tab", "data-minimum-screens"]);
    };
  }
};
const fans = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-af03ed67"]]);
export {
  fans as default
};
