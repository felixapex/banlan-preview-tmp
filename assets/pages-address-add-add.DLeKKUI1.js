import { B as reactive, r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, l as createCommentVNode, f as index$i, I as Input } from "./index-CXXgV9dp.js";
import { J as JourneyHeader } from "./JourneyHeader.DGrvi3Wb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "add",
  setup(__props) {
    const form = reactive({ name: "", mobile: "", region: "", detail: "", isDefault: true });
    const status = ref("");
    function save() {
      if (!form.name || !/^1\d{10}$/.test(form.mobile) || !form.region || !form.detail) {
        status.value = "请填写完整地址资料";
        return;
      }
      status.value = "原地址保存接口未接入，地址未保存";
    }
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_input = Input;
      const _component_v_uni_view = index$g;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/address/add/add",
        "data-page": "address-form"
      }, {
        default: withCtx(() => [
          createVNode(JourneyHeader, { title: "新增收货地址" }),
          createVNode(_component_v_uni_view, { class: "form" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, null, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("收货人")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_input, {
                    modelValue: form.name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.name = $event),
                    placeholder: "请输入收货人姓名"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, null, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("手机号码")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_input, {
                    modelValue: form.mobile,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.mobile = $event),
                    type: "number",
                    maxlength: "11",
                    placeholder: "请输入手机号"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, null, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("所在地区")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_input, {
                    modelValue: form.region,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.region = $event),
                    placeholder: "省 市 区"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, null, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("详细地址")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_input, {
                    modelValue: form.detail,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.detail = $event),
                    placeholder: "街道、楼牌号等"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "default",
                "data-action-id": "address:default-toggle",
                onClick: _cache[4] || (_cache[4] = ($event) => form.isDefault = !form.isDefault)
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("设为默认地址")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(form.isDefault ? "✓" : "○"), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "button",
                "data-action-id": "address:save",
                onClick: save
              }, {
                default: withCtx(() => [
                  createTextVNode("保存地址")
                ]),
                _: 1
              }),
              status.value ? (openBlock(), createBlock(_component_v_uni_text, {
                key: 0,
                class: "status",
                "data-source-status": "backend-required"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(status.value), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const add = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f24f90e4"]]);
export {
  add as default
};
