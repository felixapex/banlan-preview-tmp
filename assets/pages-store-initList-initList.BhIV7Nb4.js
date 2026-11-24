import { r as ref, z as computed, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, v as normalizeClass, e as createTextVNode, h as createElementBlock, j as renderList, F as Fragment, l as createCommentVNode, t as toDisplayString, G as setStorageSync, m as reLaunch, i as index$q, f as index$i } from "./index-CXXgV9dp.js";
import { J as JourneyHeader } from "./JourneyHeader.DGrvi3Wb.js";
import { c as stores } from "./service-flow.N09GJZ3T.js";
import { r as resolveRuntimeAsset } from "./runtime-assets.gPzi_MQE.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "initList",
  setup(__props) {
    const featuredCities = ["武汉市", "上海市", "北京市", "杭州市"];
    const allCities = [...new Set(stores.map((item) => item.city))];
    const activeCity = ref("");
    const expanded = ref(false);
    const visible = computed(() => activeCity.value ? stores.filter((item) => item.city === activeCity.value) : stores);
    function storeImageSource(item) {
      return resolveRuntimeAsset(item.sourceImages[0]);
    }
    function enterStore(item) {
      setStorageSync("currentStore", item);
      setStorageSync("currentStoreId", item.id);
      reLaunch({ url: "/pages/index/index" });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "page",
        "data-page": "store-list",
        "data-source-route": "pages/store/initList/initList"
      }, {
        default: withCtx(() => [
          createVNode(JourneyHeader, { title: "选择店铺" }),
          createVNode(_component_v_uni_view, { class: "city-picker" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "primary-cities" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    class: normalizeClass({ active: activeCity.value === "" }),
                    "data-action-id": "store:city:all",
                    onClick: _cache[0] || (_cache[0] = ($event) => activeCity.value = "")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("全部")
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  (openBlock(), createElementBlock(Fragment, null, renderList(featuredCities, (city) => {
                    return createVNode(_component_v_uni_view, {
                      key: city,
                      class: normalizeClass({ active: activeCity.value === city }),
                      "data-action-id": `store:city:${city}`,
                      onClick: ($event) => activeCity.value = city
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(city), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "data-action-id", "onClick"]);
                  }), 64)),
                  createVNode(_component_v_uni_view, {
                    class: normalizeClass(["expand", { open: expanded.value }]),
                    "data-action-id": "store:city:expand",
                    onClick: _cache[1] || (_cache[1] = ($event) => expanded.value = !expanded.value)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("⌄")
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              }),
              expanded.value ? (openBlock(), createBlock(_component_v_uni_view, {
                key: 0,
                class: "all-cities"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(allCities.filter((item) => !featuredCities.includes(item)), (city) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: city,
                      class: normalizeClass({ active: activeCity.value === city }),
                      "data-action-id": `store:city:${city}`,
                      onClick: ($event) => {
                        activeCity.value = city;
                        expanded.value = false;
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(city), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "data-action-id", "onClick"]);
                  }), 128))
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "store-list" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(visible.value, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "store-card",
                  "data-store-id": item.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      class: "store-image",
                      src: storeImageSource(item),
                      mode: "aspectFill"
                    }, null, 8, ["src"]),
                    createVNode(_component_v_uni_view, { class: "store-info" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, { class: "store-name" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "store-hours" }, {
                          default: withCtx(() => [
                            createTextVNode("营业时间：" + toDisplayString(item.serviceHours), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "store-address" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.address), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_view, {
                          class: "enter",
                          "data-action-id": `store:enter:${item.id}`,
                          onClick: ($event) => enterStore(item)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("进入该店铺")
                          ]),
                          _: 2
                        }, 1032, ["data-action-id", "onClick"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["data-store-id"]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const initList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30f0791e"]]);
export {
  initList as default
};
