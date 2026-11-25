import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, h as createElementBlock, j as renderList, F as Fragment, t as toDisplayString, A as navigateBack, m as reLaunch, f as index$i, q as ScrollView, v as normalizeClass, i as index$q } from "./index-B4mhl56q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "membershipSystem",
  setup(__props) {
    const active = ref(0);
    const levels = [
      { name: "白银会员", min: 0, max: 1e5, bg: "./static/yuhu/member/silver.jpg" },
      { name: "黄金会员", min: 1e5, max: 199999.99, bg: "./static/yuhu/member/gold.jpg" },
      { name: "铂金会员", min: 2e5, max: 299999.99, bg: "./static/yuhu/member/platinum.jpg" },
      { name: "钻石会员", min: 3e5, max: 1e7, bg: "./static/yuhu/member/diamond.jpg" },
      { name: "黑金会员", min: 0, max: 1e7, bg: "./static/yuhu/member/blackgold.jpg" }
    ];
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
                  (openBlock(), createElementBlock(Fragment, null, renderList(levels, (level, index) => {
                    return createVNode(_component_v_uni_view, {
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
                  }), 64))
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
                  createTextVNode(toDisplayString(levels[active.value].name), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("消费区间：￥" + toDisplayString(levels[active.value].min) + " – ￥" + toDisplayString(levels[active.value].max), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, {
                class: "status",
                "data-source-status": "backend-required"
              }, {
                default: withCtx(() => [
                  createTextVNode("当前等级：白银会员 · 当前积分 0")
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
const membershipSystem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16e3a6e7"]]);
export {
  membershipSystem as default
};
