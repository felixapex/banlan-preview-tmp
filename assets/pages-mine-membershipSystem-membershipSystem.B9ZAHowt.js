import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, h as createElementBlock, j as renderList, u as unref, F as Fragment, t as toDisplayString, A as navigateBack, m as reLaunch, f as index$i, q as ScrollView, v as normalizeClass, i as index$q } from "./index-CXXgV9dp.js";
import { r as resolveRuntimeAsset } from "./runtime-assets.gPzi_MQE.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const levelData = [
  {
    name: "普兰会员",
    min: 0,
    max: 1e5,
    bg: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%B3%BB%E7%BB%9F%E5%9B%BE%E5%BA%93/1605953716224_$$_hytx_01.jpg"
  },
  {
    name: "木兰会员",
    min: 1e5,
    max: 199999.99,
    bg: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%B3%BB%E7%BB%9F%E5%9B%BE%E5%BA%93/1605953716284_$$_hytx_02.jpg"
  },
  {
    name: "玉兰会员",
    min: 2e5,
    max: 299999.99,
    bg: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%B3%BB%E7%BB%9F%E5%9B%BE%E5%BA%93/1605953716325_$$_hytx_03.jpg"
  },
  {
    name: "金兰会员",
    min: 3e5,
    max: 1e7,
    bg: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%B3%BB%E7%BB%9F%E5%9B%BE%E5%BA%93/1605953716361_$$_hytx_04.jpg"
  },
  {
    name: "超级会员",
    min: 0,
    max: 1e7,
    bg: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%B3%BB%E7%BB%9F%E5%9B%BE%E5%BA%93/1605953716391_$$_hytx_05.jpg"
  }
];
const _sfc_main = {
  __name: "membershipSystem",
  setup(__props) {
    const active = ref(0);
    const levels = levelData.map((level) => ({ ...level, bg: resolveRuntimeAsset(level.bg) }));
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/mine/mine/mine" }) });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_image = index$q;
      const _component_v_uni_scroll_view = ScrollView;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/mine/membershipSystem/membershipSystem"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "membership:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("会员体系")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_scroll_view, {
            class: "cards",
            "scroll-x": "",
            "show-scrollbar": false
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "card-row" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(levels), (level, index) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: level.name,
                      class: normalizeClass(["card", { active: active.value === index }]),
                      "data-action-id": `membership:level:${index}`,
                      onClick: ($event) => active.value = index
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_image, {
                          src: level.bg,
                          mode: "aspectFill"
                        }, null, 8, ["src"]),
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(level.name), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["class", "data-action-id", "onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "facts" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, { class: "name" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(levels)[active.value].name), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("消费区间：￥" + toDisplayString(unref(levels)[active.value].min) + " – ￥" + toDisplayString(unref(levels)[active.value].max), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, {
                class: "status",
                "data-source-status": "backend-required"
              }, {
                default: withCtx(() => [
                  createTextVNode("个人积分与等级需要原会员接口返回")
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
const membershipSystem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b5661842"]]);
export {
  membershipSystem as default
};
