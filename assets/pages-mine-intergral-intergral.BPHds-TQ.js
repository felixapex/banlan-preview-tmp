import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, h as createElementBlock, j as renderList, F as Fragment, A as navigateBack, m as reLaunch, f as index$i, q as ScrollView, v as normalizeClass } from "./index-CXXgV9dp.js";
import { o as onLoad } from "./uni-app.es.qPiJ1LRW.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "intergral",
  setup(__props) {
    const active = ref(0);
    const total = ref(0);
    const rows = ref([]);
    const tabs = ["明细", "获取方式", "可用", "已使用", "已过期", "待领取"];
    onLoad((q) => {
      total.value = Number((q == null ? void 0 : q.total) || 0);
    });
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/mine/mine/mine" }) });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_scroll_view = ScrollView;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/mine/intergral/intergral"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "points:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("我的兰通宝")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "hero" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("当前兰通宝")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(total.value), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_scroll_view, {
            class: "tabs",
            "scroll-x": ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "tab-row" }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab, index) => {
                    return createVNode(_component_v_uni_view, {
                      key: tab,
                      class: normalizeClass({ active: active.value === index }),
                      "data-action-id": `points:tab:${index}`,
                      onClick: ($event) => active.value = index
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tab), 1)
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
          rows.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "list"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })) : (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            class: "empty",
            "data-source-status": "backend-required"
          }, {
            default: withCtx(() => [
              createTextVNode("本栏目需要对应的原兰通宝接口返回")
            ]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
};
const intergral = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c105f44"]]);
export {
  intergral as default
};
