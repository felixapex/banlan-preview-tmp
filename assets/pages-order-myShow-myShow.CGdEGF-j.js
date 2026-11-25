import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, v as normalizeClass, h as createElementBlock, j as renderList, F as Fragment, t as toDisplayString, A as navigateBack, m as reLaunch, f as index$i } from "./index-B4mhl56q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "myShow",
  setup(__props) {
    const active = ref(1);
    const pending = ref([]);
    const shared = ref([]);
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/mine/mine/mine" }) });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/order/myShow/myShow"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "reviews:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("我的评价")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "tabs" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: normalizeClass({ active: active.value === 1 }),
                "data-action-id": "reviews:pending",
                onClick: _cache[0] || (_cache[0] = ($event) => active.value = 1)
              }, {
                default: withCtx(() => [
                  createTextVNode("待评价")
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(_component_v_uni_view, {
                class: normalizeClass({ active: active.value === 2 }),
                "data-action-id": "reviews:shared",
                onClick: _cache[1] || (_cache[1] = ($event) => active.value = 2)
              }, {
                default: withCtx(() => [
                  createTextVNode("已晒单")
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          }),
          (active.value === 1 ? pending.value : shared.value).length ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "list"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(active.value === 1 ? pending.value : shared.value, (item) => {
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
              createTextVNode(toDisplayString(active.value === 1 ? "待评价订单需要原 BeEvaluate 接口返回" : "晒单记录需要原 SheetPage 接口返回"), 1)
            ]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
};
const myShow = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0cf07b08"]]);
export {
  myShow as default
};
