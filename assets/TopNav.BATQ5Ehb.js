import { o as openBlock, c as createBlock, w as withCtx, a as createVNode, e as createTextVNode, t as toDisplayString, i as index$q, d as index$g, f as index$i } from "./index-B4mhl56q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "TopNav",
  props: {
    title: { type: String, required: true },
    homeIcon: { type: String, required: true },
    homeLabel: { type: String, required: true }
  },
  emits: ["home"],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, { class: "top-nav" }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            class: "home-pill",
            "aria-label": __props.homeLabel,
            "data-action-id": "nav:home",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("home"))
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_image, {
                class: "home-icon",
                src: __props.homeIcon,
                mode: "aspectFit"
              }, null, 8, ["src"])
            ]),
            _: 1
          }, 8, ["aria-label"]),
          createVNode(_component_v_uni_text, { class: "nav-title" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.title), 1)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, {
            class: "wechat-capsule",
            "aria-hidden": "true"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "more" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view),
                  createVNode(_component_v_uni_view),
                  createVNode(_component_v_uni_view)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "divider" }),
              createVNode(_component_v_uni_view, { class: "minimize" }),
              createVNode(_component_v_uni_view, { class: "divider" }),
              createVNode(_component_v_uni_view, { class: "capsule-circle" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view)
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
const TopNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ade62c4"]]);
export {
  TopNav as T
};
