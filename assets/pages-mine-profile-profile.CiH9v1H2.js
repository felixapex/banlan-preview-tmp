import { r as ref, B as reactive, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, h as createElementBlock, j as renderList, F as Fragment, t as toDisplayString, l as createCommentVNode, A as navigateBack, m as reLaunch, f as index$i, C as index$x, I as Input } from "./index-B4mhl56q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "profile",
  setup(__props) {
    const status = ref("");
    const fields = reactive([
      { key: "name", label: "姓名", value: "" },
      { key: "gender", label: "性别", value: "" },
      { key: "birthday", label: "生日", value: "" },
      { key: "constellation", label: "星座", value: "" },
      { key: "education", label: "学历", value: "" },
      { key: "occupation", label: "职业", value: "" },
      { key: "company_name", label: "公司", value: "" },
      { key: "mail_url", label: "邮箱", value: "" },
      { key: "card_num", label: "证件号码", value: "" },
      { key: "region", label: "所在地区", value: "" }
    ]);
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/mine/mine/mine" }) });
    }
    function save() {
      status.value = "原 GetMyInfo/SaveMyInfo 接口未接入，资料未保存";
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_input = Input;
      const _component_v_uni_button = index$x;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/mine/profile/profile"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "profile:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("完善资料")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "form" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(fields, (field) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: field.key,
                  class: "row"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(field.label), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_uni_input, {
                      modelValue: field.value,
                      "onUpdate:modelValue": ($event) => field.value = $event,
                      placeholder: `请输入${field.label}`
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_button, {
            "data-action-id": "profile:save",
            onClick: save
          }, {
            default: withCtx(() => [
              createTextVNode("保存资料")
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
      });
    };
  }
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-192a193c"]]);
export {
  profile as default
};
