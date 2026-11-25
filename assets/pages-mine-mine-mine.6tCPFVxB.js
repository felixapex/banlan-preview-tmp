import { c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, u as unref, k as createBaseVNode, e as createTextVNode, t as toDisplayString, h as createElementBlock, j as renderList, F as Fragment, x as normalizeStyle, n as navigateTo, p as pageScrollTo, m as reLaunch, s as showToast, i as index$q, f as index$i, l as createCommentVNode } from "./index-B4mhl56q.js";
import { B as BottomTabs } from "./BottomTabs.B9Xq1Uo2.js";
import { c as createActionRouter } from "./action-router.DmGvHpfL.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import { openOrderList } from "./yh-order.js";
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
  levelLabel: "白银会员",
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
    label: "我的足迹",
    action: {
      type: "route",
      target: "/pages/mine/intergral/intergral?total=0"
    }
  },
  {
    id: "coupons",
    value: "0",
    label: "我的清单",
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
    id: "banlan",
    label: "案例",
    iconNormal: "/static/banlan/icons/tab-2-normal.png",
    iconActive: "/static/banlan/icons/tab-2-active.png",
    action: {
      type: "tab",
      target: "/pages/fans/fans/fans"
    }
  },
  {
    id: "stores",
    label: "官网",
    iconNormal: "/static/banlan/icons/tab-4-normal.png",
    iconActive: "/static/banlan/icons/tab-4-active.png",
    action: {
      type: "external",
      target: "https://royaltiger-casa.com"
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
    const YH = {
      grid: [
        { id: "orders", label: "我的订货单", icon: "/static/yuhu/mine/order.png", action: { type: "yh-orders" } },
        { id: "footprint", label: "我的足迹", icon: "/static/yuhu/mine/footprint.png", action: { type: "route", target: "/pages/mine/koc/koc" } },
        { id: "favorites", label: "我的收藏", icon: "/static/yuhu/mine/favorite.png", action: { type: "route", target: "/pages/mine/collection/collection" } },
        { id: "showroom", label: "展厅地址", icon: "/static/yuhu/mine/showroom.png", action: { type: "route", target: "/pages/store/initList/initList" } },
        { id: "advisor", label: "产品顾问", icon: "/static/yuhu/mine/advisor.png", action: { type: "route", target: "/pages/store/detail/detail" } },
        { id: "care", label: "养护知识", icon: "/static/yuhu/mine/care.png", action: { type: "route", target: "/pages/customPage/customPage?id=yuhu-care" } }
      ],
      member: { type: "route", target: "/pages/mine/membershipSystem/membershipSystem" },
      points: { type: "route", target: "/pages/mine/intergral/intergral?total=0" },
      cards: { type: "route", target: "/pages/mine/membershipSystem/membershipSystem" },
      profile: { type: "route", target: "/pages/mine/profile/profile" }
    };
    return (_ctx, _cache) => {
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_v_uni_text = index$i;
      const V = (cls, kids, extra) => createVNode(_component_v_uni_view, Object.assign({ class: cls }, extra || {}), { default: withCtx(() => kids), _: 2 }, 1024);
      const T = (cls, str) => createVNode(_component_v_uni_text, { class: cls }, { default: withCtx(() => [createTextVNode(str, 1)]), _: 2 }, 1024);
      const I = (cls, src) => createVNode(_component_v_uni_image, { class: cls, src: imageSource(src), mode: "aspectFit" }, null, 8, ["src"]);
      const go = (action, src) => ({ onClick: () => action && action.type === "yh-orders" ? openOrderList() : dispatch(action, src) });
      return openBlock(), createBlock(_component_v_uni_view, {
        class: "mine-page yh-mine",
        style: designStyle
      }, {
        default: withCtx(() => [
          V("yh-head", [
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
            V("yh-brand", [T("yh-brand-en", "ROYAL TIGER"), T("yh-brand-cn", "御虎家居")]),
            V("yh-hello", [
              V("yh-hello-left", [
                V("yh-hello-name", [T("", "您好，微信用户"), T("yh-edit", "✎")], go(YH.profile, "profile")),
                T("yh-hello-sub", "欢迎成为 御虎家居 的会员")
              ]),
              V("yh-stat", [T("yh-stat-num", "0"), T("yh-stat-label", "当前成长值")], go(YH.member, "growth")),
              V("yh-stat", [T("yh-stat-num", "0"), T("yh-stat-label", "权益卡")], go(YH.cards, "cards"))
            ]),
            V("yh-card", [
              I("yh-card-wm", "/static/yuhu/mine/card-watermark.png"),
              V("yh-card-top", [
                V("yh-card-level", [I("yh-card-badge", "/static/yuhu/mine/card-badge.png"), T("yh-card-name", "白银会员")]),
                V("yh-card-points", [T("yh-card-pl", "当前积分"), T("yh-card-pv", "0")])
              ]),
              V("yh-card-bottom", [
                V("yh-card-link", [T("", "会员权益 ›")], go(YH.member, "benefit")),
                V("yh-card-div", []),
                V("yh-card-link", [T("", "积分兑礼 ›")], go(YH.points, "points"))
              ])
            ])
          ]),
          V("yh-grid", YH.grid.map((item) => V("yh-grid-item", [I("yh-grid-icon", item.icon), T("yh-grid-label", item.label)], Object.assign({ key: item.id, "data-action-id": `mine:grid:${item.id}` }, go(item.action, "grid"))))),
          V("yh-banner", [createVNode(_component_v_uni_image, { class: "yh-banner-img", src: imageSource("/static/yuhu/mine/banner.jpg"), mode: "aspectFill" }, null, 8, ["src"])]),
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
