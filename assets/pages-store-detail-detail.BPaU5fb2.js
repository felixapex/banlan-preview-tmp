import { r as ref, z as computed, g as getStorageSync, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, h as createElementBlock, j as renderList, F as Fragment, e as createTextVNode, t as toDisplayString, l as createCommentVNode, H as makePhoneCall, i as index$q, S as Swiper, f as index$i, y as SwiperItem } from "./index-B4mhl56q.js";
import { o as onLoad } from "./uni-app.es.oAhR1D-z.js";
import { J as JourneyHeader } from "./JourneyHeader.wutFjvaf.js";
import { a as findStore } from "./service-flow.N09GJZ3T.js";
import OV from "./storeimg.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "./static/banlan/stores/call-icon.png";
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const storeId = ref("");
    const advisorAssets = {
      avatar: "/static/banlan/stores/advisor-default.png",
      cardBackground: "/static/banlan/stores/advisor-card-bg.png",
      chat: "/static/banlan/stores/chat-guide.png"
    };
    const qr = ref("");
    const qrName = ref("");
    const nav = ref(0);
    function openMap(kind) {
      const a = encodeURIComponent(store.value.address);
      const u = { amap: "https://uri.amap.com/search?keyword=" + a + "&callnative=1", baidu: "https://api.map.baidu.com/geocoder?address=" + a + "&output=html&src=yuhu", qq: "https://apis.map.qq.com/uri/v1/search?keyword=" + a + "&referer=yuhu" }[kind];
      nav.value = 0;
      window.open(u, "_blank") || (location.href = u);
    }
    function copyAddr() {
      const t = store.value.address;
      const x = document.createElement("textarea");
      x.value = t; x.setAttribute("readonly", ""); x.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(x); x.select(); x.setSelectionRange(0, t.length);
      let ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
      x.remove();
      if (!ok && navigator.clipboard) navigator.clipboard.writeText(t).catch(() => {});
      nav.value = 2; setTimeout(() => { nav.value = 0; }, 1200);
    }
    const store = computed(() => findStore(storeId.value));
    function storeImageSources(item) {
      let sources = item.images;
      return (sources || []).map((s) => OV[s] || s);
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
          createVNode(JourneyHeader, { title: "御虎店铺" }),
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
              createVNode("span", {
                class: "store-distance",
                style: "color:#9E815D;cursor:pointer",
                onClick: () => { nav.value = 1; }
              }, "⌖ 导航到店 ›"),
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
                            createTextVNode(advisor.constellation ? "星座:" + toDisplayString(advisor.constellation) + " | 属相:" + toDisplayString(advisor.zodiac) : advisor.tag || "影院沙发 · 功能沙发", 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("img", {
                          class: "chat-icon",
                          src: "./static/banlan/stores/chat-guide.png",
                          style: "object-fit:contain;cursor:pointer",
                          onClick: () => { qrName.value = advisor.name; qr.value = advisor.wx || ""; }
                        }, null, 8, ["src", "onClick"])
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
                      src: advisor.avatar || advisorAssets.avatar,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1032, ["data-action-id"]);
              }), 128))
            ]),
            _: 1
          }),
          nav.value ? (openBlock(), createElementBlock("div", {
            key: "nav" + nav.value,
            style: "position:fixed;inset:0;z-index:999;background:rgba(0,0,0,.45);display:flex;align-items:flex-end",
            onClick: () => { nav.value = 0; }
          }, [
            createVNode("div", {
              style: "background:#fff;border-radius:14px 14px 0 0;width:100%;text-align:center",
              onClick: (e) => e.stopPropagation()
            }, nav.value === 2 ? [
              createVNode("div", { style: "padding:28px 0;font-size:15px;color:#9E815D" }, "地址已复制")
            ] : [
              createVNode("div", { style: "padding:16px 20px 12px;font-size:13px;color:#888;line-height:1.5" }, store.value.address, 1),
              createVNode("div", { style: "padding:15px 0;font-size:16px;color:#222;border-top:1px solid #f0f0f0;cursor:pointer", onClick: () => openMap("amap") }, "高德地图"),
              createVNode("div", { style: "padding:15px 0;font-size:16px;color:#222;border-top:1px solid #f0f0f0;cursor:pointer", onClick: () => openMap("baidu") }, "百度地图"),
              createVNode("div", { style: "padding:15px 0;font-size:16px;color:#222;border-top:1px solid #f0f0f0;cursor:pointer", onClick: () => openMap("qq") }, "腾讯地图"),
              createVNode("div", { style: "padding:15px 0;font-size:16px;color:#222;border-top:1px solid #f0f0f0;cursor:pointer", onClick: copyAddr }, "复制地址"),
              createVNode("div", { style: "padding:15px 0;font-size:16px;color:#9E815D;border-top:8px solid #f5f5f5;cursor:pointer", onClick: () => { nav.value = 0; } }, "取消")
            ])
          ])) : createCommentVNode("", true),
          qr.value ? (openBlock(), createElementBlock("div", {
            key: "qr",
            style: "position:fixed;inset:0;z-index:999;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center",
            onClick: () => { qr.value = ""; }
          }, [
            createVNode("div", {
              style: "background:#fff;border-radius:12px;padding:24px 24px 18px;width:240px;text-align:center",
              onClick: (e) => e.stopPropagation()
            }, [
              createVNode("div", { style: "font-size:16px;font-weight:600;color:#222;margin-bottom:14px" }, "添加" + qrName.value + "的微信", 1),
              createVNode("img", { src: qr.value, style: "width:200px;height:200px;display:block;margin:0 auto" }, null, 8, ["src"]),
              createVNode("div", { style: "font-size:13px;color:#888;margin:12px 0 14px" }, "长按识别二维码，添加好友"),
              createVNode("div", { style: "font-size:14px;color:#9E815D;border-top:1px solid #eee;padding-top:12px;cursor:pointer", onClick: () => { qr.value = ""; } }, "关闭")
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22cb042a"]]);
export {
  detail as default
};
