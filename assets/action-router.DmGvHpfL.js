const implementedTargets = /* @__PURE__ */ new Set([
  "/pages/index/index",
  "/pages/mine/mine/mine",
  "/pages/mine/message/message",
  "/pages/mine/profile/profile",
  "/pages/mine/collection/collection",
  "/pages/mine/intergral/intergral",
  "/pages/mine/coupon/coupon",
  "/invite/invite",
  "/pages/order/myOrder/myOrder",
  "/pages/order/myShow/myShow",
  "/pages/antifake/index/index",
  "/pages/customPage/customPage",
  "/pages/store/detail/detail",
  "/pages/mine/koc/koc",
  "/pages/address/list/list",
  "/pages/address/add/add",
  "/pages/category/category",
  "/pages/product/list/list",
  "/pages/product/detail/detail",
  "/pages/product/cart/cart",
  "/pages/order/orderConfirm/orderConfirm",
  "/pages/fans/fans/fans",
  "/pages/fans/showDetail/showDetail",
  "/pages/fans/fansDetail/fansDetail",
  "/pages/fans/diaryDetail/diaryDetail",
  "/pages/fans/newsDetail/newsDetail",
  "/pages/login/login",
  "/pages/mine/membershipSystem/membershipSystem",
  "/pages/order/detail/detail",
  "/pages/store/list/list",
  "/pages/store/initList/initList",
  "/pages/im/chat/chat"
]);
function createActionRouter(adapter, messages = {}) {
  const history = [];
  async function dispatch(action, context = {}) {
    var _a;
    const safeAction = action ?? { type: "none" };
    history.push({ action: safeAction, context, at: (/* @__PURE__ */ new Date()).toISOString() });
    if (safeAction.type === "none")
      return { status: "no-action" };
    if (safeAction.type === "external" && safeAction.target) {
      const w = 420, h = Math.min(900, screen.availHeight || 900);
      let win = null;
      try { win = window.open(safeAction.target, "yuhuSite", `popup=yes,width=${w},height=${h},left=${(screen.availWidth || w) - w},top=0`); } catch (e) {}
      if (!win) {
        const a = document.createElement("a");
        a.href = safeAction.target; a.target = "_blank"; a.rel = "noopener";
        document.body.appendChild(a); a.click(); a.remove();
      }
      return { status: "handled" };
    }
    if (safeAction.type === "member-offer") {
      adapter.notify(messages.memberOffer ?? "");
      return { status: "previewed" };
    }
    if (safeAction.type === "yh-orders") {
      (await import("./yh-order.js")).openOrderList();
      return { status: "handled" };
    }
    if (safeAction.type === "service") {
      await adapter.navigateTo("/pages/im/chat/chat");
      return { status: "handled" };
    }
    if (safeAction.type === "content" && safeAction.target) {
      await adapter.navigateTo(`/pages/customPage/customPage?id=${encodeURIComponent(safeAction.target)}`);
      return { status: "handled" };
    }
    if (safeAction.type === "product" && safeAction.target) {
      await adapter.navigateTo(`/pages/product/detail/detail?id=${encodeURIComponent(safeAction.target)}`);
      return { status: "handled" };
    }
    if (safeAction.type === "category" && safeAction.target) {
      await adapter.navigateTo(`/pages/category/category?category=${encodeURIComponent(safeAction.target)}`);
      return { status: "handled" };
    }
    const targetPath = (_a = safeAction.target) == null ? void 0 : _a.split("?")[0];
    if ((safeAction.type === "tab" || safeAction.type === "route") && implementedTargets.has(targetPath)) {
      await (safeAction.type === "tab" ? adapter.switchTab(safeAction.target) : adapter.navigateTo(safeAction.target));
      return { status: "handled" };
    }
    adapter.notify(messages.pendingPage ?? "");
    return { status: "pending-page", target: safeAction.target ?? null };
  }
  return { dispatch, history };
}
export {
  createActionRouter as c
};
