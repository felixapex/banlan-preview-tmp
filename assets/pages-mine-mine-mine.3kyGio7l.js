import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, u as unref, k as createBaseVNode, e as createTextVNode, t as toDisplayString, h as createElementBlock, j as renderList, F as Fragment, x as normalizeStyle, n as navigateTo, p as pageScrollTo, m as reLaunch, s as showToast, i as index$q, f as index$i, l as createCommentVNode } from "./index-CXXgV9dp.js";
import { B as BottomTabs } from "./BottomTabs.DNDs0y1b.js";
import { c as createActionRouter } from "./action-router.DmGvHpfL.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const schemaVersion$1 = 1;
const header = {
  backgroundImage: "/static/banlan/mine/member-background.png",
  messageIcon: "/static/banlan/mine/message.png",
  messageLabel: "消息",
  capsuleMoreLabel: "更多",
  capsuleMinimizeLabel: "最小化",
  capsuleCloseLabel: "关闭",
  messageAction: {
    type: "route",
    target: "/pages/mine/message/message"
  }
};
const profile = {
  displayName: "小样盒子（钟）",
  levelLabel: "御虎会员",
  avatar: "/static/banlan/mine/profile-avatar.png",
  levelIcon: "/static/banlan/mine/level-v1.png",
  action: {
    type: "route",
    target: "/pages/mine/membershipSystem/membershipSystem"
  }
};
const benefit = {
  prompt: "完善资料得满减券",
  buttonLabel: "领取权益",
  action: {
    type: "route",
    target: "/pages/mine/membershipSystem/membershipSystem"
  }
};
const stats = [
  {
    id: "favorites",
    value: "0",
    label: "我的收藏",
    action: {
      type: "route",
      target: "/pages/mine/collection/collection"
    }
  },
  {
    id: "points",
    value: "0",
    label: "我的兰通宝",
    action: {
      type: "route",
      target: "/pages/mine/intergral/intergral?total=0"
    }
  },
  {
    id: "coupons",
    value: "0",
    label: "我的卡券",
    action: {
      type: "route",
      target: "/pages/mine/coupon/coupon"
    }
  },
  {
    id: "invites",
    value: "0",
    label: "我的邀请",
    action: {
      type: "route",
      target: "/invite/invite"
    }
  }
];
const orders = [
  {
    id: "all",
    label: "全部订单",
    icon: "/static/banlan/mine/order-all.png",
    action: {
      type: "route",
      target: "/pages/order/myOrder/myOrder?type=0"
    }
  },
  {
    id: "payment",
    label: "待付款",
    icon: "/static/banlan/mine/order-pay.png",
    action: {
      type: "route",
      target: "/pages/order/myOrder/myOrder?type=1"
    }
  },
  {
    id: "delivery",
    label: "待发货",
    icon: "/static/banlan/mine/order-send.png",
    action: {
      type: "route",
      target: "/pages/order/myOrder/myOrder?type=2"
    }
  },
  {
    id: "review",
    label: "我的评价",
    icon: "/static/banlan/mine/order-review.png",
    badgeImage: "/static/banlan/mine/review-gift.png",
    action: {
      type: "route",
      target: "/pages/order/myShow/myShow"
    }
  },
  {
    id: "authenticity",
    label: "正品验证",
    icon: "/static/banlan/mine/order-authenticity.png",
    action: {
      type: "route",
      target: "/pages/antifake/index/index"
    }
  }
];
const promo = {
  image: "/static/banlan/mine/member-task.jpg",
  cropMode: "aspectFill",
  label: "会员任务",
  action: {
    type: "route",
    target: "/pages/customPage/customPage?id=a6d567968ad24b2d9912c673004058a0"
  }
};
const tools = [
  {
    id: "consultant",
    label: "产品顾问",
    icon: "/static/banlan/mine/tool-consultant.png",
    action: {
      type: "route",
      target: "/pages/store/detail/detail"
    }
  },
  {
    id: "appointment",
    label: "活动预约",
    icon: "/static/banlan/mine/tool-appointment.png",
    action: {
      type: "route",
      target: "/invite/invite"
    }
  },
  {
    id: "koc",
    label: "成为KOC",
    icon: "/static/banlan/mine/tool-koc.png",
    action: {
      type: "route",
      target: "/pages/mine/koc/koc"
    }
  },
  {
    id: "address",
    label: "收货地址",
    icon: "/static/banlan/mine/tool-address.png",
    action: {
      type: "route",
      target: "/pages/address/list/list"
    }
  }
];
const tabs = [
  {
    id: "home",
    label: "首页",
    iconNormal: "/static/banlan/icons/tab-1-normal.png",
    iconActive: "/static/banlan/icons/tab-1-active.png",
    action: {
      type: "tab",
      target: "/pages/index/index"
    }
  },
  {
    id: "banlan",
    label: "Banlan",
    iconNormal: "/static/banlan/icons/tab-2-normal.png",
    iconActive: "/static/banlan/icons/tab-2-active.png",
    action: {
      type: "tab",
      target: "/pages/fans/fans/fans"
    }
  },
  {
    id: "products",
    label: "产品",
    iconNormal: "/static/banlan/icons/tab-3-normal.png",
    iconActive: "/static/banlan/icons/tab-3-active.png",
    action: {
      type: "tab",
      target: "/pages/category/category"
    }
  },
  {
    id: "stores",
    label: "店铺",
    iconNormal: "/static/banlan/icons/tab-4-normal.png",
    iconActive: "/static/banlan/icons/tab-4-active.png",
    action: {
      type: "tab",
      target: "/pages/store/list/list"
    }
  },
  {
    id: "mine",
    label: "我的",
    iconNormal: "/static/banlan/icons/tab-5-normal.png",
    iconActive: "/static/banlan/icons/tab-5-active.png",
    action: {
      type: "tab",
      target: "/pages/mine/mine/mine"
    }
  }
];
const interactionMessages = {
  memberOffer: "会员权益入口已响应。",
  service: "客服入口已响应。",
  pendingPage: "“我的”页面已还原；这个按钮的下一页面将在后续阶段接入。"
};
const mine$1 = {
  schemaVersion: schemaVersion$1,
  header,
  profile,
  benefit,
  stats,
  orders,
  promo,
  tools,
  tabs,
  interactionMessages
};
const schemaVersion = 1;
const fonts = {
  body: "-apple-system, BlinkMacSystemFont, Segoe UI, Microsoft YaHei, sans-serif"
};
const colors = {
  pageBackground: "#f6f6f6",
  headerFallback: "#86acd1",
  white: "#ffffff",
  bodyText: "#000000",
  secondaryText: "#6f6f6f",
  benefitBackground: "#d3d3d3",
  benefitButton: "#262626",
  benefitText: "#787878",
  border: "#eeeeee",
  tabInactive: "#aaaaaa",
  strongInk: "#111111",
  softShadow: "rgba(0,0,0,.12)",
  capsuleBackground: "rgba(255,255,255,.7)"
};
const layout = {
  headerHeightRpx: 646,
  tabBarHeightRpx: 104,
  orderRowMinHeightRpx: 174,
  toolRowMinHeightRpx: 152,
  promoPaddingRpx: 32
};
const design = {
  schemaVersion,
  fonts,
  colors,
  layout
};
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const designStyle = {
      "--font-body": design.fonts.body,
      "--color-page": design.colors.pageBackground,
      "--color-header-fallback": design.colors.headerFallback,
      "--color-white": design.colors.white,
      "--color-body": design.colors.bodyText,
      "--color-secondary": design.colors.secondaryText,
      "--color-benefit": design.colors.benefitBackground,
      "--color-benefit-button": design.colors.benefitButton,
      "--color-benefit-text": design.colors.benefitText,
      "--color-border": design.colors.border,
      "--color-tab-inactive": design.colors.tabInactive,
      "--color-strong-ink": design.colors.strongInk,
      "--color-soft-shadow": design.colors.softShadow,
      "--color-capsule": design.colors.capsuleBackground,
      "--header-height": `${design.layout.headerHeightRpx}rpx`,
      "--tabbar-height": `${design.layout.tabBarHeightRpx}rpx`,
      "--order-row-height": `${design.layout.orderRowMinHeightRpx}rpx`,
      "--tool-row-height": `${design.layout.toolRowMinHeightRpx}rpx`,
      "--promo-padding": `${design.layout.promoPaddingRpx}rpx`
    };
    function imageSource(source) {
      let resolved = source;
      resolved = `.${source}`;
      return resolved;
    }
    const router = createActionRouter({
      navigateTo: (target) => navigateTo({ url: target }),
      switchTab: async (target) => {
        if (target === "/pages/mine/mine/mine") {
          pageScrollTo({ scrollTop: 0, duration: 250 });
          return;
        }
        if (target === "/pages/index/index")
          await reLaunch({ url: target });
        if (target === "/pages/category/category")
          await reLaunch({ url: target });
        if (target === "/pages/fans/fans/fans")
          await reLaunch({ url: target });
        if (target === "/pages/store/list/list")
          await reLaunch({ url: target });
      },
      notify: (message) => showToast({ title: message, icon: "none", duration: 2200 })
    }, mine$1.interactionMessages);
    function dispatch(action, source, id = null) {
      return router.dispatch(action, { source, id });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "mine-page",
        style: designStyle
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, {
            class: "member-header",
            style: normalizeStyle({ backgroundImage: `url(${imageSource(unref(mine$1).header.backgroundImage)})` })
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "wechat-capsule",
                "aria-hidden": "true"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, {
                    class: "capsule-more",
                    "aria-label": unref(mine$1).header.capsuleMoreLabel
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("i"),
                      createBaseVNode("i"),
                      createBaseVNode("i")
                    ]),
                    _: 1
                  }, 8, ["aria-label"]),
                  createVNode(_component_v_uni_view, { class: "capsule-divider" }),
                  createVNode(_component_v_uni_view, {
                    class: "capsule-minimize",
                    "aria-label": unref(mine$1).header.capsuleMinimizeLabel
                  }, null, 8, ["aria-label"]),
                  createVNode(_component_v_uni_view, { class: "capsule-divider" }),
                  createVNode(_component_v_uni_view, {
                    class: "capsule-close",
                    "aria-label": unref(mine$1).header.capsuleCloseLabel
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("i")
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "message-button",
                "aria-label": unref(mine$1).header.messageLabel,
                "data-action-id": "mine:message",
                onClick: _cache[0] || (_cache[0] = ($event) => dispatch(unref(mine$1).header.messageAction, "header-message"))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_image, {
                    src: imageSource(unref(mine$1).header.messageIcon),
                    mode: "aspectFit"
                  }, null, 8, ["src"])
                ]),
                _: 1
              }, 8, ["aria-label"]),
              createVNode(_component_v_uni_view, {
                class: "profile",
                "data-action-id": "mine:profile",
                onClick: _cache[1] || (_cache[1] = ($event) => dispatch(unref(mine$1).profile.action, "profile"))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_image, {
                    class: "avatar",
                    src: imageSource(unref(mine$1).profile.avatar),
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  createVNode(_component_v_uni_view, { class: "profile-copy" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, { class: "profile-name" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(mine$1).profile.displayName), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, { class: "profile-level" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_image, {
                            src: imageSource(unref(mine$1).profile.levelIcon),
                            mode: "aspectFit"
                          }, null, 8, ["src"]),
                          createVNode(_component_v_uni_text, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(mine$1).profile.levelLabel), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "benefit-card" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "benefit-top" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(mine$1).benefit.prompt), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, {
                        class: "benefit-button",
                        "data-action-id": "mine:benefit",
                        onClick: _cache[2] || (_cache[2] = ($event) => dispatch(unref(mine$1).benefit.action, "benefit"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(mine$1).benefit.buttonLabel), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "stats" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(mine$1).stats, (item) => {
                        return openBlock(), createBlock(_component_v_uni_view, {
                          key: item.id,
                          class: "stat",
                          "data-action-id": `mine:stat:${item.id}`,
                          onClick: ($event) => dispatch(item.action, "stat", item.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_text, { class: "stat-value" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.value), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_uni_text, { class: "stat-label" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.label), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["data-action-id", "onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["style"]),
          createVNode(_component_v_uni_view, { class: "order-grid" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(mine$1).orders, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "order-item",
                  "data-action-id": `mine:order:${item.id}`,
                  onClick: ($event) => dispatch(item.action, "order", item.id)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, { class: "order-icon-wrap" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_image, {
                          class: "order-icon",
                          src: imageSource(item.icon),
                          mode: "aspectFit"
                        }, null, 8, ["src"]),
                        item.badgeImage ? (openBlock(), createBlock(_component_v_uni_image, {
                          key: 0,
                          class: "gift-badge",
                          src: imageSource(item.badgeImage),
                          mode: "aspectFit"
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["data-action-id", "onClick"]);
              }), 128))
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, {
            class: "promo",
            "data-action-id": "mine:promo",
            onClick: _cache[3] || (_cache[3] = ($event) => dispatch(unref(mine$1).promo.action, "promo"))
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_image, {
                src: imageSource(unref(mine$1).promo.image),
                mode: unref(mine$1).promo.cropMode,
                "aria-label": unref(mine$1).promo.label
              }, null, 8, ["src", "mode", "aria-label"])
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "tool-grid" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(mine$1).tools, (item) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: item.id,
                  class: "tool-item",
                  "data-action-id": `mine:tool:${item.id}`,
                  onClick: ($event) => dispatch(item.action, "tool", item.id)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_image, {
                      src: imageSource(item.icon),
                      mode: "aspectFit"
                    }, null, 8, ["src"]),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["data-action-id", "onClick"]);
              }), 128))
            ]),
            _: 1
          }),
          createVNode(BottomTabs, {
            tabs: unref(mine$1).tabs,
            active: "mine",
            onSelect: _cache[4] || (_cache[4] = ($event) => dispatch($event.action, "bottom-tab", $event.id))
          }, null, 8, ["tabs"])
        ]),
        _: 1
      });
    };
  }
};
const mine = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-918e9f5e"]]);
export {
  mine as default
};
