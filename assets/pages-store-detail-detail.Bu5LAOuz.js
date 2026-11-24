import { r as ref, z as computed, g as getStorageSync, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, h as createElementBlock, j as renderList, F as Fragment, e as createTextVNode, t as toDisplayString, l as createCommentVNode, H as makePhoneCall, i as index$q, S as Swiper, f as index$i, y as SwiperItem } from "./index-CXXgV9dp.js";
import { o as onLoad } from "./uni-app.es.qPiJ1LRW.js";
import { J as JourneyHeader } from "./JourneyHeader.DGrvi3Wb.js";
import { a as findStore } from "./service-flow.N09GJZ3T.js";
import { a as runtimeAssetPath, r as resolveRuntimeAsset } from "./runtime-assets.gPzi_MQE.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "./static/banlan/stores/call-icon.png";
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const storeId = ref("");
    const advisorAssets = {
      avatar: runtimeAssetPath("_local-ui/stores/advisor-default.png"),
      cardBackground: runtimeAssetPath("_local-ui/stores/advisor-card-bg.png"),
      chat: runtimeAssetPath("_local-ui/stores/chat-guide.png")
    };
    const store = computed(() => findStore(storeId.value));
    function storeImageSources(item) {
      return item.sourceImages.map(resolveRuntimeAsset);
    }
    const displayImages = computed(() => storeImageSources(store.value));
    onLoad((query) => {
      const selected = getStorageSync("currentStore");
      storeId.value = (query == null ? void 0 : query.storeId) || (selected == null ? void 0 : selected.id) || "48b1bcdb75b649fe9e22f26c8be062cd";
    });
    function callPhone() {
      if (!store.value.telephone || store.value.telephone === "无")
        return;
      makePhoneCall({ phoneNumber: store.value.telephone });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_swiper_item = SwiperItem;
      const _component_v_uni_swiper = Swiper;
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-page": "store-detail"
      }, {
        default: withCtx(() => [
          createVNode(JourneyHeader, { title: "班兰店铺" }),
          createVNode(_component_v_uni_swiper, {
            class: "store-gallery",
            circular: "",
            "indicator-dots": displayImages.value.length > 1
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(displayImages.value, (image) => {
                return openBlock(), createBlock(_component_v_uni_swiper_item, { key: image }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      src: image,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["indicator-dots"]),
          createVNode(_component_v_uni_view, { class: "store-info" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, { class: "store-name" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(store.value.name), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, { class: "store-distance" }, {
                default: withCtx(() => [
                  createTextVNode("⌖距离--")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, { class: "store-hours" }, {
                default: withCtx(() => [
                  createTextVNode("营业时间：" + toDisplayString(store.value.serviceHours), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, { class: "store-address" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(store.value.address), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "phone",
                "data-action-id": "store:call",
                onClick: callPhone
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_image, {
                    src: _imports_0,
                    mode: "aspectFit"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "advisor-section" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, { class: "advisor-title" }, {
                default: withCtx(() => [
                  createTextVNode("您的产品顾问")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, { class: "advisor-description" }, {
                default: withCtx(() => [
                  createTextVNode("请选择一位产品顾问为您提供一对一专属服务")
                ]),
                _: 1
              }),
              !store.value.advisors.length ? (openBlock(), createBlock(_component_v_uni_text, {
                key: 0,
                class: "advisor-empty"
              }, {
                default: withCtx(() => [
                  createTextVNode("暂无产品顾问信息")
                ]),
                _: 1
              })) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(store.value.advisors, (advisor) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: advisor.id,
                  class: "advisor-card",
                  "data-action-id": `store:advisor:${advisor.id}`
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      class: "advisor-card-bg",
                      src: advisorAssets.cardBackground,
                      mode: "aspectFill"
                    }, null, 8, ["src"]),
                    createVNode(_component_v_uni_view, { class: "advisor-top" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, { class: "advisor-name" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(advisor.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "advisor-meta" }, {
                          default: withCtx(() => [
                            createTextVNode("星座:" + toDisplayString(advisor.constellation) + " | 属相:" + toDisplayString(advisor.zodiac), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_image, {
                          class: "chat-icon",
                          src: advisorAssets.chat,
                          mode: "aspectFit"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_uni_view, { class: "advisor-bottom" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode("工作格言：")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(advisor.motto), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_uni_image, {
                      class: "advisor-avatar",
                      src: advisorAssets.avatar,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1032, ["data-action-id"]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15900c90"]]);
export {
  detail as default
};
