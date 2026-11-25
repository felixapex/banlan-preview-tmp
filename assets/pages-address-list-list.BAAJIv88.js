import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, l as createCommentVNode, h as createElementBlock, j as renderList, F as Fragment, t as toDisplayString, n as navigateTo, f as index$i } from "./index-B4mhl56q.js";
import { o as onLoad } from "./uni-app.es.oAhR1D-z.js";
import { J as JourneyHeader } from "./JourneyHeader.wutFjvaf.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    const addresses = ref([]);
    const mode = ref("manage");
    const status = ref("地址列表需要原地址接口返回");
    onLoad((q) => {
      mode.value = q.mode || "manage";
    });
    function choose() {
      status.value = "原地址接口未接入，未选择地址";
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/address/list/list",
        "data-page": "addresses"
      }, {
        default: withCtx(() => [
          createVNode(JourneyHeader, { title: "收货地址" }),
          mode.value === "select" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "hint"
          }, {
            default: withCtx(() => [
              createTextVNode("请选择本次订单的收货地址")
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_v_uni_view, { class: "list" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(addresses.value, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "address",
                  "data-action-id": "address:select",
                  onClick: ($event) => choose(item)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, { class: "name" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name) + "　" + toDisplayString(item.mobile), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.region) + " " + toDisplayString(item.detail), 1)
                          ]),
                          _: 2
                        }, 1024),
                        item.isDefault ? (openBlock(), createBlock(_component_v_uni_text, {
                          key: 0,
                          class: "default"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("默认地址")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode("›")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128)),
              !addresses.value.length ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "empty",
                "data-source-status": "backend-required"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(status.value), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, {
            class: "button",
            "data-action-id": "address:add",
            onClick: _cache[0] || (_cache[0] = ($event) => navigateTo({ url: "/pages/address/add/add" }))
          }, {
            default: withCtx(() => [
              createTextVNode("新增收货地址")
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3990dda4"]]);
export {
  list as default
};
