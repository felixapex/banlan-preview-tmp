import { r as ref, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, l as createCommentVNode, A as navigateBack, m as reLaunch, Q as chooseImage, f as index$i, i as index$q, C as index$x } from "./index-CXXgV9dp.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "koc",
  setup(__props) {
    const store = ref(null);
    const cardImage = ref("");
    const licenseImage = ref("");
    const status = ref("");
    function back() {
      navigateBack({ fail: () => reLaunch({ url: "/pages/mine/mine/mine" }) });
    }
    function choose(target) {
      chooseImage({ count: 1, success: (result) => {
        var _a;
        const path = ((_a = result.tempFilePaths) == null ? void 0 : _a[0]) || "";
        if (target === "card")
          cardImage.value = path;
        else
          licenseImage.value = path;
      } });
    }
    function chooseStore() {
      status.value = "门店列表需要原 GetStoreList 接口返回";
    }
    function submit() {
      if (!store.value)
        return status.value = "请选择门店";
      if (!cardImage.value)
        return status.value = "请添加您的名片";
      if (!licenseImage.value)
        return status.value = "请添加身份证或营业执照";
      status.value = "原 KocSave 与图片上传接口未接入，申请未提交";
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_text = index$i;
      const _component_v_uni_image = index$q;
      const _component_v_uni_button = index$x;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-source-route": "pages/mine/koc/koc"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                "data-action-id": "koc:back",
                onClick: back
              }, {
                default: withCtx(() => [
                  createTextVNode("‹")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, null, {
                default: withCtx(() => [
                  createTextVNode("成为KOC")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "body" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "row",
                "data-action-id": "koc:store",
                onClick: chooseStore
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(toDisplayString(((_a = store.value) == null ? void 0 : _a.name) || "选择所属门店"), 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("›")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "uploads" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    "data-action-id": "koc:card",
                    onClick: _cache[0] || (_cache[0] = ($event) => choose("card"))
                  }, {
                    default: withCtx(() => [
                      cardImage.value ? (openBlock(), createBlock(_component_v_uni_image, {
                        key: 0,
                        src: cardImage.value,
                        mode: "aspectFill"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode(_component_v_uni_text, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(cardImage.value ? "已选择名片" : "添加您的名片"), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, {
                    "data-action-id": "koc:license",
                    onClick: _cache[1] || (_cache[1] = ($event) => choose("license"))
                  }, {
                    default: withCtx(() => [
                      licenseImage.value ? (openBlock(), createBlock(_component_v_uni_image, {
                        key: 0,
                        src: licenseImage.value,
                        mode: "aspectFill"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode(_component_v_uni_text, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(licenseImage.value ? "已选择证件" : "添加身份证或营业执照"), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_button, {
                "data-action-id": "koc:submit",
                onClick: submit
              }, {
                default: withCtx(() => [
                  createTextVNode("提交申请")
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
const koc = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0949469f"]]);
export {
  koc as default
};
