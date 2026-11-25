import { o as openBlock, c as createBlock, w as withCtx, h as createElementBlock, F as Fragment, j as renderList, v as normalizeClass, a as createVNode, e as createTextVNode, t as toDisplayString, i as index$q, f as index$i, d as index$g } from "./index-B4mhl56q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "BottomTabs",
  props: { tabs: Array, active: String },
  emits: ["select"],
  setup(__props) {
    function resolveIcon(tab, active) {
      let source = tab.id === active ? tab.iconActive : tab.iconNormal;
      source = `.${source}`;
      return source;
    }
    return (_ctx, _cache) => {
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, { class: "tabbar" }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab) => {
            return openBlock(), createBlock(_component_v_uni_view, {
              key: tab.id,
              class: normalizeClass(["tab", { active: tab.id === __props.active }]),
              "data-action-id": `tab:${tab.id}`,
              onClick: ($event) => _ctx.$emit("select", tab)
            }, {
              default: withCtx(() => [
                createVNode(_component_v_uni_image, {
                  class: "icon",
                  src: resolveIcon(tab, __props.active),
                  mode: "aspectFit"
                }, null, 8, ["src"]),
                createVNode(_component_v_uni_text, { class: "label" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tab.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["class", "data-action-id", "onClick"]);
          }), 128))
        ]),
        _: 1
      });
    };
  }
};
const BottomTabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04879505"]]);
export {
  BottomTabs as B
};
