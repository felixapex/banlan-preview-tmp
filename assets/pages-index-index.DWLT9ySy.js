import { o as openBlock, c as createBlock, w as withCtx, a as createVNode, b as withModifiers, i as index$q, d as index$g, e as createTextVNode, t as toDisplayString, f as index$i, r as ref, g as getStorageSync, u as unref, p as pageScrollTo, h as createElementBlock, j as renderList, F as Fragment, k as createBaseVNode, l as createCommentVNode, n as navigateTo, m as reLaunch, s as showToast, S as Swiper, q as ScrollView, v as normalizeClass, x as normalizeStyle, y as SwiperItem } from "./index-CXXgV9dp.js";
import { o as onLoad, a as onShow } from "./uni-app.es.qPiJ1LRW.js";
import { B as BottomTabs } from "./BottomTabs.DNDs0y1b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import { T as TopNav } from "./TopNav.rA2NxOJp.js";
import { h as home } from "./home.D-6m3wa_.js";
import { c as createActionRouter } from "./action-router.DmGvHpfL.js";
import { r as resolveRuntimeAsset } from "./runtime-assets.gPzi_MQE.js";
const _sfc_main$2 = {
  __name: "MemberOffer",
  props: { image: { type: String, required: true }, closeLabel: { type: String, required: true } },
  emits: ["close", "claim"],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { class: "overlay" }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            class: "offer-card",
            "data-action-id": "member-offer:claim",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("claim"))
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_image, {
                class: "offer-poster",
                src: __props.image,
                mode: "widthFix"
              }, null, 8, ["src"]),
              createVNode(_component_v_uni_view, {
                class: "close",
                "data-action-id": "member-offer:close",
                "aria-label": __props.closeLabel,
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("close"), ["stop"]))
              }, null, 8, ["aria-label"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const MemberOffer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-10015a69"]]);
const _sfc_main$1 = {
  __name: "SectionHeader",
  props: { title: String, subtitle: String },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { class: "section-header" }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, null, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, { class: "title" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.title), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, { class: "subtitle" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.subtitle), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const SectionHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ef4cb932"]]);
const schemaVersion = 1;
const fonts = {
  body: "-apple-system, BlinkMacSystemFont, Segoe UI, Microsoft YaHei, sans-serif",
  heading: "-apple-system, BlinkMacSystemFont, Segoe UI, Microsoft YaHei, sans-serif"
};
const colors = {
  pageBackground: "#f6f6f6",
  white: "#ffffff",
  accent: "#8f7449",
  diaryPanel: "#cac8c6",
  bodyText: "#000000",
  secondaryText: "#565658",
  border: "#dddddd",
  strongInk: "#111111",
  mutedText: "#888888",
  softInk: "#222222",
  placeholder: "#f5f5f5",
  placeholderLight: "#f7f7f7",
  tabInactive: "#aaaaaa",
  badge: "#d90000",
  overlay: "rgba(0,0,0,.65)",
  softShadow: "rgba(0,0,0,.12)",
  heroDot: "rgba(255,255,255,.55)"
};
const cropModes = {
  banner: "widthFix",
  activity: "aspectFill",
  diary: "aspectFill",
  show: "aspectFill",
  about: "widthFix",
  yours: "aspectFill",
  news: "widthFix",
  footer: "widthFix"
};
const layout = {
  tabBarHeightRpx: 104
};
const design = {
  schemaVersion,
  fonts,
  colors,
  cropModes,
  layout
};
const runtimeAssets = {
  "/static/banlan/home/about.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5%E7%94%A8%E5%9B%BE/1605617663452_$$_%E9%A6%96%E9%A1%B5%E5%85%B3%E4%BA%8E%E7%8F%AD%E5%85%B0%E6%89%8B%E7%BB%98%E5%9B%BE.jpg",
  "/static/banlan/home/best-seller-01.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%9C%80%E5%8F%97%E6%AC%A2%E8%BF%8E%E7%9A%84%E7%8F%AD%E5%85%B0%E4%BD%9C%E5%93%81/1789718251830_$$_1-%E7%AE%80%E7%89%8D%E6%B2%99%E5%8F%91-660x382.jpg",
  "/static/banlan/home/best-seller-02.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%9C%80%E5%8F%97%E6%AC%A2%E8%BF%8E%E7%9A%84%E7%8F%AD%E5%85%B0%E4%BD%9C%E5%93%81/1789718251832_$$_2-%E5%9B%9B%E5%96%9C%E9%A4%90%E6%A1%8C.jpg",
  "/static/banlan/home/best-seller-03.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%9C%80%E5%8F%97%E6%AC%A2%E8%BF%8E%E7%9A%84%E7%8F%AD%E5%85%B0%E4%BD%9C%E5%93%81/1789718251834_$$_3-%E9%95%BF%E5%AE%81%E5%BA%8A-660x382.jpg",
  "/static/banlan/home/best-seller-04.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%9C%80%E5%8F%97%E6%AC%A2%E8%BF%8E%E7%9A%84%E7%8F%AD%E5%85%B0%E4%BD%9C%E5%93%81/1789722371399_$$_4-%E7%BA%A6%E7%BF%B0%E6%B3%A2%E6%A3%AE%E7%B3%BB%E5%88%97%E9%95%BF%E5%87%B3.jpg",
  "/static/banlan/home/best-seller-05.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%9C%80%E5%8F%97%E6%AC%A2%E8%BF%8E%E7%9A%84%E7%8F%AD%E5%85%B0%E4%BD%9C%E5%93%81/1789718251847_$$_5-%E8%AF%BA%E5%A1%94%E5%BA%8A%E8%BE%B9%E6%9F%9C-660x382.jpg",
  "/static/banlan/home/category-01.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5%E7%94%A8%E5%9B%BE/1605615678384_$$_%E7%8F%AD%E5%85%B0%E4%BA%A7%E5%93%81-%E6%B2%99%E5%8F%91-01-%E5%B0%8F%E7%A8%8B%E5%BA%8F.jpg",
  "/static/banlan/home/category-02.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5%E7%94%A8%E5%9B%BE/1605615678365_$$_%E7%8F%AD%E5%85%B0%E4%BA%A7%E5%93%81-%E5%BA%8A-02-%E5%B0%8F%E7%A8%8B%E5%BA%8F.jpg",
  "/static/banlan/home/category-03.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5%E6%B5%B7%E6%8A%A5/1708393812748_$$_%E7%8F%AD%E5%85%B0%E4%BA%A7%E5%93%81-%E6%A4%85%E6%A6%BB-03-%E5%B0%8F%E7%A8%8B%E5%BA%8F.jpg",
  "/static/banlan/home/category-04.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%B3%BB%E7%BB%9F%E5%9B%BE%E5%BA%93/1787386890335_$$_1605615678428_$$_%E7%8F%AD%E5%85%B0%E4%BA%A7%E5%93%81-%E6%A1%8C%E5%87%A0-04-%E5%B0%8F%E7%A8%8B%E5%BA%8F%20(2).jpg",
  "/static/banlan/home/category-05.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5%E7%94%A8%E5%9B%BE/1605615678374_$$_%E7%8F%AD%E5%85%B0%E4%BA%A7%E5%93%81-%E6%9F%9C%E6%9E%B6-05-%E5%B0%8F%E7%A8%8B%E5%BA%8F.jpg",
  "/static/banlan/home/category-06.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%B3%BB%E7%BB%9F%E5%9B%BE%E5%BA%93/1787390233569_$$_%E4%BA%91%E5%BA%97%E9%93%BA-%E6%88%B7%E5%A4%96-%E9%A6%96%E9%A1%B5%E5%9B%BE%E6%A0%87.jpg",
  "/static/banlan/home/diary-01.png": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%96%B0%E5%B1%85%E6%97%A5%E8%AE%B0/1761287690871_$$_%E5%B0%81%E9%9D%A2-%E5%BA%AD%E9%99%A2%E9%9B%85%E5%A2%8320251024.png",
  "/static/banlan/home/diary-02.png": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%96%B0%E5%B1%85%E6%97%A5%E8%AE%B0/1747984243537_$$_20250523%E5%B0%81%E9%9D%A2_%E6%8A%8A%E5%AE%B6%E5%8F%98%E6%88%90%E6%B5%81%E5%8A%A8%E7%9A%84%E8%89%BA%E6%9C%AF%E5%8D%9A%E7%89%A9%E9%A6%86.png",
  "/static/banlan/home/diary-03.png": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%96%B0%E5%B1%85%E6%97%A5%E8%AE%B0/1758265034058_$$_%E5%B0%81%E9%9D%A2-%E8%87%AA%E7%84%B6%E4%B9%8B%E6%81%AF.png",
  "/static/banlan/home/diary-avatar.png": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%B3%BB%E7%BB%9F%E5%9B%BE%E5%BA%93/1605605623013_$$_diary.png",
  "/static/banlan/home/diary-logo.png": "https://servicewechat.com/wx0420724502f5f662/42/image/NEW_HOMELOG.png",
  "/static/banlan/home/diary-next.png": "https://servicewechat.com/wx0420724502f5f662/42/image/c_right.png",
  "/static/banlan/home/diary-previous.png": "https://servicewechat.com/wx0420724502f5f662/42/image/c_left.png",
  "/static/banlan/home/footer.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%91%E5%BA%97%E9%93%BA%E9%A6%96%E9%A1%B5%E6%9C%80%E5%BA%95%E9%83%A8/1792124103577_$$_261016-%E4%BA%91%E5%BA%97%E9%93%BA%E9%A6%96%E9%A1%B5%E6%9C%80%E5%BA%95%E9%83%A8.jpg",
  "/static/banlan/home/hero-01.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5BANNER/1787304157466_$$_%E4%BA%91%E5%BA%97%E9%93%BA-%E7%AE%80%E7%89%8D%E7%B3%BB%E5%88%97banner-%E6%96%B0%E5%B0%BA%E5%AF%B8.jpg",
  "/static/banlan/home/hero-02.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5BANNER/1787304219063_$$_%E4%BA%91%E5%BA%97%E9%93%BA-%E7%BA%A6%E7%BF%B0%E6%B3%A2%E6%A3%AE%E7%B3%BB%E5%88%97banner-%E6%96%B0%E5%B0%BA%E5%AF%B8.jpg",
  "/static/banlan/home/hero-03.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5BANNER/1702289395193_$$_%E5%A2%83%E8%87%AA%E4%B8%9C%E6%96%B9%E4%B8%AD%E5%9B%BD%E7%8F%AD%E5%85%B0_20231212.jpg",
  "/static/banlan/home/hero-04.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5BANNER/1721291090665_$$_02%E5%8D%81%E5%B9%B4%E8%B4%A8%E4%BF%9D2024.jpg",
  "/static/banlan/home/hero-05.png": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5BANNER/1793986415010_$$_%E4%BA%91%E5%BA%97%E9%93%BA-%20banner-%E7%94%84%E9%80%89%E6%9D%90%E6%96%99%E5%93%81%E7%89%8C-20261106-.png",
  "/static/banlan/home/hero-06.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5BANNER/1792486181746_$$_%E5%93%81%E7%89%8C%E5%AE%9A%E4%BD%8D%E4%BF%AE%E6%94%B9-20261020.jpg",
  "/static/banlan/home/hero-07.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5BANNER/1704809085532_$$_02.5%E8%AE%BE%E8%AE%A1%E5%B8%88.jpg",
  "/static/banlan/home/member-offer.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5%E6%B5%B7%E6%8A%A5/1745281805641_$$_%E4%BA%91%E5%BA%97%E9%93%BA%E6%BB%A1%E5%87%8F%E4%BC%9A%E5%91%98%E6%B5%B7%E6%8A%A52.22(1)%20%E6%8B%B7%E8%B4%9D(1).jpg",
  "/static/banlan/home/news-01.png": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%96%B0%E9%B2%9C%E4%BA%8B/1789036048483_$$_%E5%B0%81%E9%9D%A2-%E7%AE%80%E7%89%8D%E2%80%9D%EF%BC%9A%E8%BF%99%E4%B8%AA%E4%B8%96%E7%95%8C%E8%BF%98%E5%B0%91%E4%B8%80%E6%8A%8A%E6%A4%85%E5%AD%90%E4%B9%88%EF%BC%9F.png",
  "/static/banlan/home/news-02.png": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%96%B0%E9%B2%9C%E4%BA%8B/1788517879817_$$_%E5%B0%81%E9%9D%A2-John-Pawson-%E4%B8%93%E8%AE%BF-%E6%97%B6%E9%97%B4%E4%BC%9A%E6%81%B0%E5%BD%93%E5%9C%B0%E6%94%B9%E5%8F%98%E4%B8%87%E7%89%A9.png",
  "/static/banlan/home/news-03.png": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%96%B0%E9%B2%9C%E4%BA%8B/1787537254803_$$_%E5%B0%81%E9%9D%A2-Wallpaper%E9%A6%96%E5%8F%91%EF%BD%9C%E4%BB%8E%E4%B8%80%E7%89%87%E7%AB%B9%EF%BC%8C%E5%88%B0%E4%B8%80%E6%95%B4%E5%A5%97%E7%A7%A9%E5%BA%8F.png",
  "/static/banlan/home/news-04.png": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%96%B0%E9%B2%9C%E4%BA%8B/1752336260500_$$_%E8%A7%A3%E5%86%B3%E9%97%AE%E9%A2%98%E7%9A%84%E4%BA%BA%E5%B0%81%E9%9D%A2.png",
  "/static/banlan/home/service-01.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5icon/1605446956386_$$_%E9%A6%96%E9%A1%B5icon-%E9%95%BF%E6%9C%9F%E4%BB%B7%E5%80%BC.jpg",
  "/static/banlan/home/service-02.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5icon/1605446956397_$$_%E9%A6%96%E9%A1%B5icon-%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0.jpg",
  "/static/banlan/home/service-03.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5icon/1605446956376_$$_%E9%A6%96%E9%A1%B5icon-%E5%8D%81%E5%B9%B4%E8%B4%A8%E4%BF%9D%EF%BC%88%E6%96%B0%EF%BC%89.jpg",
  "/static/banlan/home/service-04.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5icon/1605446956366_$$_%E9%A6%96%E9%A1%B5icon-5%E6%98%9F%E6%9C%8D%E5%8A%A1.jpg",
  "/static/banlan/home/show-01-avatar.jpg": "https://thirdwx.qlogo.cn/mmopen/vi_32/gZwKYWMJZo7gwiabekFjuRicuzZCHbN25ORYo1JKgprkC6vRXLpOF18GFsbGFwOv3wPXk6nicuk6IFRpLGujSNPnA/132",
  "/static/banlan/home/show-01.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/44e636bc-a2d6-4ab4-8c22-e7938c61cba4",
  "/static/banlan/home/show-02-avatar.jpg": "https://thirdwx.qlogo.cn/mmopen/vi_32/O9RbkTAVZAkIXxLSwjR5ZBkMsjiaPEDwpLa77xuubL7olr9362BBNW0oIiaVFKA5R8tIfojcwdia6u9fUxhfFrOMA/132",
  "/static/banlan/home/show-02.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/96db7c05-5ead-4368-b3f4-9cec2f1615ea",
  "/static/banlan/home/show-03-avatar.jpg": "https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIHgy8WWicf58rRMc9wrYib3Po03JUUadYeWrFw3n2wib3dEdMJhBtBr9paXJiaH96Y0XxhNTSdXJW2GicYsGPhoaicXdwEypBqueoPpTP0ZWrOVu8g/132",
  "/static/banlan/home/show-03.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/e503f542-7173-48d5-89fc-2b219f4e1791",
  "/static/banlan/home/show-04-avatar.jpg": "https://thirdwx.qlogo.cn/mmopen/vi_32/O9RbkTAVZAkIXxLSwjR5ZBkMsjiaPEDwpLa77xuubL7olr9362BBNW0oIiaVFKA5R8tIfojcwdia6u9fUxhfFrOMA/132",
  "/static/banlan/home/show-04.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/97c71acc-9f96-48eb-9bbf-31fe81a8aad2",
  "/static/banlan/home/show-05-avatar.jpg": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJP4bHETqzh0ibhIm5hzAd7oKtJfzBlQvtwmdeI1icljIvicfL7NYQDlo7tFhibbA3ZDwdq3LS5PRKZzg/132",
  "/static/banlan/home/show-05.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/%E8%BE%BE%E6%91%A9%E5%BA%8A/18658255189%E8%BE%BE%E6%91%A9%E5%BA%8A106.jpg",
  "/static/banlan/home/your-store.jpg": "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%B3%BB%E7%BB%9F%E5%9B%BE%E5%BA%93/1605896138193_$$_%E6%82%A8%E7%9A%84%E5%BA%97%E9%93%BA.jpeg"
};
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const previewQuery = typeof location === "undefined" ? new URLSearchParams() : new URLSearchParams(location.hash.split("?")[1] || location.search.slice(1));
    const offerVisible = ref(previewQuery.get("offer") === "1");
    const auditMode = previewQuery.get("audit") === "1";
    const activeHero = ref(0);
    const activeDiary = ref(0);
    const currentStoreName = ref(home.store.city);
    const designStyle = {
      "--font-body": design.fonts.body,
      "--font-heading": design.fonts.heading,
      "--color-page": design.colors.pageBackground,
      "--color-white": design.colors.white,
      "--color-accent": design.colors.accent,
      "--color-diary-panel": design.colors.diaryPanel,
      "--color-body": design.colors.bodyText,
      "--color-secondary": design.colors.secondaryText,
      "--color-border": design.colors.border,
      "--color-strong-ink": design.colors.strongInk,
      "--color-muted": design.colors.mutedText,
      "--color-soft-ink": design.colors.softInk,
      "--color-placeholder": design.colors.placeholder,
      "--color-placeholder-light": design.colors.placeholderLight,
      "--color-tab-inactive": design.colors.tabInactive,
      "--color-badge": design.colors.badge,
      "--color-overlay": design.colors.overlay,
      "--color-soft-shadow": design.colors.softShadow,
      "--color-hero-dot": design.colors.heroDot,
      "--tabbar-height": `${design.layout.tabBarHeightRpx}rpx`
    };
    onLoad((options) => {
      offerVisible.value = (options == null ? void 0 : options.offer) === "1";
    });
    onShow(() => {
      const selected = getStorageSync("currentStore");
      currentStoreName.value = (selected == null ? void 0 : selected.name) || home.store.city;
    });
    const router = createActionRouter({
      navigateTo: (target) => navigateTo({ url: target }),
      switchTab: async (target) => {
        if (target === "/pages/index/index") {
          pageScrollTo({ scrollTop: 0, duration: 250 });
          return;
        }
        if (target === "/pages/mine/mine/mine")
          await reLaunch({ url: target });
        if (target === "/pages/category/category")
          await reLaunch({ url: target });
        if (target === "/pages/fans/fans/fans")
          await reLaunch({ url: target });
        if (target === "/pages/store/list/list")
          await reLaunch({ url: target });
      },
      notify: (message) => showToast({ title: message, icon: "none", duration: 2200 })
    }, home.interactionMessages);
    async function dispatch(item, source) {
      return router.dispatch(item.action, { source, id: item.id ?? null });
    }
    async function claimOffer() {
      await router.dispatch(home.memberOffer.claimAction, { source: "member-offer" });
      offerVisible.value = false;
    }
    function changeDiary(offset) {
      const length = home.diaries.items.length;
      activeDiary.value = (activeDiary.value + offset + length) % length;
    }
    function price(priceCents) {
      return `¥${Number(priceCents / 100).toLocaleString("zh-CN")}`;
    }
    function imageSource(source) {
      let resolved = resolveRuntimeAsset(runtimeAssets[source] ?? source);
      if (resolved.startsWith("/"))
        resolved = `.${resolved}`;
      return resolved;
    }
    function floatingStyle(item) {
      return {
        right: `${item.position.rightRpx}rpx`,
        bottom: `calc(${item.position.bottomRpx}rpx + env(safe-area-inset-bottom))`
      };
    }
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_swiper_item = SwiperItem;
      const _component_v_uni_swiper = Swiper;
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_scroll_view = ScrollView;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page-shell",
        style: designStyle
      }, {
        default: withCtx(() => [
          createVNode(TopNav, {
            title: unref(home).title,
            "home-icon": imageSource(unref(home).navigation.homeIcon),
            "home-label": unref(home).navigation.homeLabel,
            onHome: _cache[0] || (_cache[0] = ($event) => pageScrollTo({ scrollTop: 0, duration: 250 }))
          }, null, 8, ["title", "home-icon", "home-label"]),
          createVNode(_component_v_uni_swiper, {
            class: "hero",
            circular: "",
            autoplay: !auditMode,
            interval: unref(home).hero.durationMs,
            duration: 600,
            onChange: _cache[1] || (_cache[1] = ($event) => activeHero.value = $event.detail.current)
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).hero.items, (item) => {
                return openBlock(), createBlock(_component_v_uni_swiper_item, {
                  key: item.id,
                  "data-action-id": `hero:${item.id}`,
                  onClick: ($event) => dispatch(item, "hero")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      class: "hero-image",
                      src: imageSource(item.image),
                      mode: unref(design).cropModes.banner,
                      "data-crop-mode": unref(design).cropModes.banner
                    }, null, 8, ["src", "mode", "data-crop-mode"])
                  ]),
                  _: 2
                }, 1032, ["data-action-id", "onClick"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["autoplay", "interval"]),
          createVNode(_component_v_uni_view, { class: "hero-dots" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).hero.items, (_, index2) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: index2,
                  class: normalizeClass(["hero-dot", { current: index2 === activeHero.value }])
                }, null, 8, ["class"]);
              }), 128))
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "services" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).services, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "service",
                  "data-action-id": `service:${item.id}`,
                  onClick: ($event) => dispatch(item, "service-grid")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      src: imageSource(item.image),
                      mode: "aspectFit"
                    }, null, 8, ["src"]),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["data-action-id", "onClick"]);
              }), 128))
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "store-row" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "store-name",
                "data-action-id": "store:detail",
                onClick: _cache[2] || (_cache[2] = ($event) => unref(router).dispatch(unref(home).store.detailAction, { source: "current-store" }))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_image, {
                    class: "location-icon",
                    src: imageSource(unref(home).store.icon),
                    mode: "aspectFit"
                  }, null, 8, ["src"]),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(currentStoreName.value), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "store-switch",
                "data-action-id": "store:switch",
                onClick: _cache[3] || (_cache[3] = ($event) => dispatch(unref(home).store, "store-switch"))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(home).store.label), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, { class: "arrow" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(home).store.arrowLabel), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("section", { class: "content-section white best-sellers-section" }, [
            createVNode(SectionHeader, {
              title: unref(home).bestSellers.title,
              subtitle: unref(home).bestSellers.subtitle
            }, null, 8, ["title", "subtitle"]),
            createVNode(_component_v_uni_scroll_view, {
              class: "horizontal",
              "scroll-x": "",
              enhanced: "",
              "show-scrollbar": "false"
            }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_view, { class: "horizontal-inner sellers" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).bestSellers.items, (item) => {
                      return openBlock(), createBlock(_component_v_uni_view, {
                        key: item.id,
                        class: "seller-card",
                        "data-action-id": `product:${item.id}`,
                        onClick: ($event) => dispatch(item, "best-seller")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_image, {
                            src: imageSource(item.image),
                            mode: unref(design).cropModes.activity,
                            "data-crop-mode": unref(design).cropModes.activity
                          }, null, 8, ["src", "mode", "data-crop-mode"]),
                          createVNode(_component_v_uni_text, { class: "seller-cn" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_uni_text, { class: "seller-en" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.englishTitle), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_uni_text, { class: "seller-price" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(price(item.priceCents)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["data-action-id", "onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("section", { class: "content-section category-section" }, [
            createVNode(_component_v_uni_view, { class: "category-title" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(home).categoryTitle), 1)
              ]),
              _: 1
            }),
            createVNode(_component_v_uni_view, { class: "category-grid" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).categories, (item) => {
                  return openBlock(), createBlock(_component_v_uni_view, {
                    key: item.id,
                    class: "category-card",
                    "data-action-id": `category:${item.id}`,
                    onClick: ($event) => dispatch(item, "category")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_image, {
                        class: "category-original",
                        src: imageSource(item.image),
                        mode: "widthFix",
                        "aria-label": `${item.label} ${item.englishLabel}`
                      }, null, 8, ["src", "aria-label"])
                    ]),
                    _: 2
                  }, 1032, ["data-action-id", "onClick"]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          createBaseVNode("section", { class: "diary-section" }, [
            createVNode(_component_v_uni_view, { class: "diary-logo-wrap" }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_image, {
                  class: "diary-logo",
                  src: imageSource(unref(home).diaries.logoImage),
                  mode: "widthFix"
                }, null, 8, ["src"])
              ]),
              _: 1
            }),
            createVNode(_component_v_uni_view, { class: "diary-heading" }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_text, { class: "diary-heading-title" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(home).diaries.title), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_text, { class: "diary-heading-description" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(home).diaries.subtitle), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_v_uni_view, { class: "diary-bottom" }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_view, { class: "diary-controls" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      class: "diary-control",
                      src: imageSource(unref(home).diaries.nextIcon),
                      mode: "widthFix",
                      "data-action-id": "diary:next",
                      onClick: _cache[4] || (_cache[4] = ($event) => changeDiary(1))
                    }, null, 8, ["src"]),
                    createVNode(_component_v_uni_image, {
                      class: "diary-control",
                      src: imageSource(unref(home).diaries.previousIcon),
                      mode: "widthFix",
                      "data-action-id": "diary:previous",
                      onClick: _cache[5] || (_cache[5] = ($event) => changeDiary(-1))
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_view, { class: "diary-dots" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).diaries.items, (_, index2) => {
                      return openBlock(), createBlock(_component_v_uni_view, {
                        key: index2,
                        class: normalizeClass({ active: index2 === activeDiary.value })
                      }, null, 8, ["class"]);
                    }), 128))
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_view, {
                  class: "diary-view-all",
                  "data-action-id": "diary:more",
                  onClick: _cache[6] || (_cache[6] = ($event) => unref(router).dispatch(unref(home).diaries.moreAction, { source: "diary-more" }))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(home).diaries.viewAllLabel), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_swiper, {
                  class: "diary-swiper",
                  circular: "",
                  current: activeDiary.value,
                  onChange: _cache[7] || (_cache[7] = ($event) => activeDiary.value = $event.detail.current)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).diaries.items, (item) => {
                      return openBlock(), createBlock(_component_v_uni_swiper_item, {
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, {
                            class: "diary-slide",
                            "data-action-id": `diary:${item.id}`,
                            onClick: ($event) => dispatch(item, "diary")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_image, {
                                class: "diary-image",
                                src: imageSource(item.image),
                                mode: unref(design).cropModes.diary,
                                "data-crop-mode": unref(design).cropModes.diary
                              }, null, 8, ["src", "mode", "data-crop-mode"]),
                              createVNode(_component_v_uni_view, { class: "diary-info" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_text, { class: "diary-content" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_uni_view, { class: "diary-user" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_uni_image, {
                                        class: "diary-avatar",
                                        src: imageSource(unref(home).diaries.avatarImage),
                                        mode: "widthFix"
                                      }, null, 8, ["src"]),
                                      createVNode(_component_v_uni_text, { class: "diary-byline" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.byline), 1)
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
                          }, 1032, ["data-action-id", "onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["current"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("section", { class: "show-section" }, [
            createVNode(_component_v_uni_view, { class: "show-heading" }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_text, { class: "show-title" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(home).show.title), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_text, { class: "show-subtitle" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(home).show.subtitle), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_v_uni_swiper, {
              class: "show-swiper",
              circular: ""
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).show.items, (item) => {
                  return openBlock(), createBlock(_component_v_uni_swiper_item, {
                    key: item.id,
                    class: "show-slide"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_image, {
                        class: "show-image",
                        src: imageSource(item.image),
                        mode: unref(design).cropModes.show,
                        "data-crop-mode": unref(design).cropModes.show
                      }, null, 8, ["src", "mode", "data-crop-mode"]),
                      createVNode(_component_v_uni_view, { class: "show-info" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "show-person" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_image, {
                                class: "show-avatar",
                                src: imageSource(item.avatar),
                                mode: "aspectFill"
                              }, null, 8, ["src"]),
                              createVNode(_component_v_uni_text, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.nickname), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_uni_view, { class: "show-position" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_image, {
                                src: imageSource(unref(home).store.icon),
                                mode: "aspectFit"
                              }, null, 8, ["src"]),
                              createVNode(_component_v_uni_text, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.address), 1)
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
                }), 128))
              ]),
              _: 1
            }),
            createVNode(_component_v_uni_view, {
              class: "show-all",
              "data-action-id": "section:show",
              onClick: _cache[8] || (_cache[8] = ($event) => dispatch(unref(home).show, "show"))
            }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_text, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(home).show.viewAllLabel), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("section", { class: "about" }, [
            createVNode(_component_v_uni_text, { class: "about-title" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(home).about.displayTitle), 1)
              ]),
              _: 1
            }),
            createVNode(_component_v_uni_view, { class: "about-content" }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_text, { class: "about-copy" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(home).about.text), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_uni_image, {
                  class: "about-image",
                  src: imageSource(unref(home).about.image),
                  mode: unref(design).cropModes.about,
                  "data-crop-mode": unref(design).cropModes.about
                }, null, 8, ["src", "mode", "data-crop-mode"])
              ]),
              _: 1
            }),
            createVNode(_component_v_uni_view, {
              class: "about-view-all",
              "data-action-id": "section:about",
              onClick: _cache[9] || (_cache[9] = ($event) => dispatch(unref(home).about, "about"))
            }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_text, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(home).about.viewAllLabel), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("section", {
            class: "yours-section",
            "data-action-id": "section:yours",
            onClick: _cache[10] || (_cache[10] = ($event) => dispatch(unref(home).yours, "store-panel"))
          }, [
            createVNode(_component_v_uni_text, { class: "yours-title" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(home).yours.title), 1)
              ]),
              _: 1
            }),
            createVNode(_component_v_uni_image, {
              class: "yours-image",
              src: imageSource(unref(home).yours.image),
              mode: unref(design).cropModes.yours,
              "data-crop-mode": unref(design).cropModes.yours
            }, null, 8, ["src", "mode", "data-crop-mode"])
          ]),
          createBaseVNode("section", { class: "news-section" }, [
            createVNode(_component_v_uni_text, { class: "news-title" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(home).news.title), 1)
              ]),
              _: 1
            }),
            createVNode(_component_v_uni_text, { class: "news-description" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(home).news.subtitle), 1)
              ]),
              _: 1
            }),
            createVNode(_component_v_uni_scroll_view, {
              class: "news-scroll",
              "scroll-x": "",
              enhanced: "",
              "show-scrollbar": "false"
            }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_view, { class: "news-list" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).news.items, (item) => {
                      return openBlock(), createBlock(_component_v_uni_view, {
                        key: item.id,
                        class: "news-card",
                        "data-action-id": `news:${item.id}`,
                        onClick: ($event) => dispatch(item, "news")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_image, {
                            class: "news-image",
                            src: imageSource(item.image),
                            mode: unref(design).cropModes.news,
                            "data-crop-mode": unref(design).cropModes.news
                          }, null, 8, ["src", "mode", "data-crop-mode"]),
                          createVNode(_component_v_uni_view, { class: "news-info" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_text, { class: "news-item-title" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_uni_text, { class: "news-item-description" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.summary), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_uni_text, { class: "news-view-all" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.buttonLabel), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["data-action-id", "onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createVNode(_component_v_uni_image, {
            class: "footer-image",
            src: imageSource(unref(home).footerImage.image),
            mode: unref(design).cropModes.footer,
            "data-crop-mode": unref(design).cropModes.footer,
            "data-action-id": "section:footer",
            onClick: _cache[11] || (_cache[11] = ($event) => dispatch(unref(home).footerImage, "footer-image"))
          }, null, 8, ["src", "mode", "data-crop-mode"]),
          createVNode(_component_v_uni_view, { class: "floating-actions" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(home).floatingActions, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "floating-button",
                  style: normalizeStyle(floatingStyle(item)),
                  "data-action-id": `floating:${item.id}`,
                  onClick: ($event) => dispatch(item, "floating")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      class: "floating-icon",
                      src: imageSource(item.image),
                      mode: "aspectFit"
                    }, null, 8, ["src"]),
                    item.badge ? (openBlock(), createBlock(_component_v_uni_text, {
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
            active: "home",
            onSelect: _cache[12] || (_cache[12] = ($event) => dispatch($event, "bottom-tab"))
          }, null, 8, ["tabs"]),
          offerVisible.value ? (openBlock(), createBlock(MemberOffer, {
            key: 0,
            image: imageSource(unref(home).memberOffer.image),
            "close-label": unref(home).memberOffer.closeLabel,
            onClose: _cache[13] || (_cache[13] = ($event) => offerVisible.value = false),
            onClaim: claimOffer
          }, null, 8, ["image", "close-label"])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4ab2cf4"]]);
export {
  index as default
};
