import { J as isInSSRComponentSetup, K as injectHook, L as getCurrentInstance, O as ON_SHOW, M as ON_LOAD, N as ON_UNLOAD } from "./index-B4mhl56q.js";
const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = getCurrentInstance()) => {
  if (isInSSRComponentSetup)
    return;
  injectHook(lifecycle, hook, target);
};
const onShow = /* @__PURE__ */ createLifeCycleHook(
  ON_SHOW,
  2
  /* HookFlags.PAGE */
);
const onLoad = /* @__PURE__ */ createLifeCycleHook(
  ON_LOAD,
  2
  /* HookFlags.PAGE */
);
const onUnload = /* @__PURE__ */ createLifeCycleHook(
  ON_UNLOAD,
  2
  /* HookFlags.PAGE */
);
export {
  onShow as a,
  onUnload as b,
  onLoad as o
};
