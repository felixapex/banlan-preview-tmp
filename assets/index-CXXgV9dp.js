function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./pages-index-index.DWLT9ySy.js","./uni-app.es.qPiJ1LRW.js","./BottomTabs.DNDs0y1b.js","./_plugin-vue_export-helper.1tPrXgE0.js","./BottomTabs-BivKF4PR.css","./TopNav.rA2NxOJp.js","./TopNav-D9_P65R7.css","./home.D-6m3wa_.js","./action-router.DmGvHpfL.js","./runtime-assets.gPzi_MQE.js","./index-BVwStxFI.css","./pages-logs-logs.UrAKNc4F.js","./SourceStatusPage.CDDoNH6b.js","./SourceStatusPage-D457iSiZ.css","./pages-mine-mine-mine.3kyGio7l.js","./mine-D5OMQFfl.css","./pages-mine-card-card.DCcgIfSh.js","./pages-fans-fans-fans.BGPG2hPj.js","./banlan.CMKa_9dG.js","./fans-CLkbbuyN.css","./pages-fans-showDetail-showDetail.BqMopME3.js","./SourceContentDetail.Dc5l596m.js","./SourceContentDetail-bnDEWT6X.css","./pages-fans-fansDetail-fansDetail.BymcUGWe.js","./pages-fans-diaryDetail-diaryDetail.DON0s1Ur.js","./pages-fans-newsDetail-newsDetail.AFUZ31S4.js","./pages-indexPreview-indexPreview.Bhakii4S.js","./pages-category-category.BrZi2Maz.js","./product-navigation.i0LEhZiE.js","./category-Cul7EaqB.css","./pages-product-list-list.zSO1PBQI.js","./runtime-products.BuT0miiN.js","./list-DCD4Vn0f.css","./pages-product-detail-detail.CegNaizJ.js","./cart.BN6woblX.js","./detail-DYTUGd3p.css","./pages-product-cart-cart.BCx_-qtd.js","./cart-BoOVSq_h.css","./pages-order-orderConfirm-orderConfirm.DqcQ7PlN.js","./JourneyHeader.DGrvi3Wb.js","./JourneyHeader-DXcv7p1U.css","./orderConfirm-Cq0bqSKB.css","./pages-login-login.CAn4kFVy.js","./login-BHF3-RlB.css","./pages-mine-membershipSystem-membershipSystem.B9ZAHowt.js","./membershipSystem-BWn513qz.css","./pages-order-detail-detail.-rw8tRY8.js","./detail-BQSkeqPW.css","./pages-order-showOrder-showOrder.DNny1m-r.js","./pages-order-showDetail-showDetaill.DD6Ra3st.js","./pages-mine-message-message.DeO0Y2-_.js","./message-DJYrrLek.css","./pages-mine-profile-profile.C3kshSYE.js","./profile-CaGCOAbg.css","./pages-mine-collection-collection.D950mFvS.js","./collection-Caybo0V5.css","./pages-mine-intergral-intergral.BPHds-TQ.js","./intergral-BPHqcr_u.css","./pages-mine-coupon-coupon.EhZPOgOj.js","./coupon-CQ9NcMQq.css","./invite-invite.CeC4uKru.js","./invite-CelW0Rw7.css","./pages-order-myOrder-myOrder.CMifZOhc.js","./myOrder-B9ZkQVpD.css","./pages-order-myShow-myShow.CU26D1oa.js","./myShow-BBTOJNKI.css","./pages-antifake-index-index.CES7dTF5.js","./index-D0oBM4o1.css","./pages-customPage-customPage.Bxt5dJ4E.js","./service-flow.N09GJZ3T.js","./customPage-D2W3SyIM.css","./pages-store-detail-detail.Bu5LAOuz.js","./detail-CjYc89rw.css","./pages-store-list-list.nQM2mTy2.js","./list-DhRbw8U-.css","./pages-store-initList-initList.BhIV7Nb4.js","./initList-BQCMWlba.css","./pages-im-chat-chat.C7de84op.js","./chat-DSu3cXaA.css","./pages-im-list-list.DCotLTAM.js","./pages-im-qr-qr.CJbBB44C.js","./pages-mine-myShow-myShow.CNshR2Zm.js","./pages-avatar-avatar.D3cA9XC-.js","./pages-antifake-result-result.C_t87qXY.js","./result-CvE07Ddg.css","./pages-mine-koc-koc.CPv7T6bP.js","./koc-D0mNbJqL.css","./pages-address-list-list.aByg--JA.js","./list-BrVY5w0C.css","./pages-address-add-add.DLeKKUI1.js","./add-hS06Ese-.css","./invite-detail-detail.CpOoGb-I.js","./invite-voucher-voucher.BM9JmiQa.js","./invite-review-review.ghP4usVL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep, importerUrl);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      const isBaseRelative = !!importerUrl;
      if (isBaseRelative) {
        for (let i = links.length - 1; i >= 0; i--) {
          const link2 = links[i];
          if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      if (cspNonce) {
        link.setAttribute("nonce", cspNonce);
      }
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e2 = new Event("vite:preloadError", { cancelable: true });
    e2.payload = err;
    window.dispatchEvent(e2);
    if (!e2.defaultPrevented) {
      throw err;
    }
  });
};
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function makeMap(str, expectsLowerCase) {
  const set2 = new Set(str.split(","));
  return expectsLowerCase ? (val) => set2.has(val.toLowerCase()) : (val) => set2.has(val);
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend$1 = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$2 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$2.call(val, key);
const isArray$1 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject$1(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str) => {
  const s = str ? `on${capitalize(str)}` : ``;
  return s;
});
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns$1 = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle$1(value) {
  if (isArray$1(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle$1(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number") {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass$1(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray$1(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass$1(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray$1(val) || isObject$1(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries2, [key, val2], i) => {
          entries2[stringifySymbol(key, i) + " =>"] = val2;
          return entries2;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v2) => stringifySymbol(v2))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject$1(val) && !isArray$1(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v2, i = "") => {
  var _a;
  return isSymbol(v2) ? `Symbol(${(_a = v2.description) != null ? _a : i})` : v2;
};
var define_process_env_default = {};
const BUILT_IN_TAG_NAMES = [
  "ad",
  "ad-content-page",
  "ad-draw",
  "audio",
  "button",
  "camera",
  "canvas",
  "checkbox",
  "checkbox-group",
  "cover-image",
  "cover-view",
  "editor",
  "form",
  "functional-page-navigator",
  "icon",
  "image",
  "input",
  "label",
  "live-player",
  "live-pusher",
  "map",
  "movable-area",
  "movable-view",
  "navigator",
  "official-account",
  "open-data",
  "picker",
  "picker-view",
  "picker-view-column",
  "progress",
  "radio",
  "radio-group",
  "rich-text",
  "scroll-view",
  "slider",
  "swiper",
  "swiper-item",
  "switch",
  "text",
  "textarea",
  "video",
  "view",
  "web-view",
  "location-picker",
  "location-view"
];
const BUILT_IN_TAGS = BUILT_IN_TAG_NAMES.map((tag) => "uni-" + tag);
const UVUE_WEB_BUILT_IN_TAGS = [
  "page-container",
  "list-view",
  "list-item",
  "sticky-section",
  "sticky-header",
  "cloud-db-element",
  "loading-element",
  "loading"
].map((tag) => "uni-" + tag);
const UNI_UI_CONFLICT_TAGS = ["list-item"].map((tag) => "uni-" + tag);
function isBuiltInComponent(tag) {
  if (UNI_UI_CONFLICT_TAGS.indexOf(tag) !== -1) {
    return false;
  }
  const realTag = "uni-" + tag.replace("v-uni-", "");
  if (define_process_env_default.UNI_APP_X !== "true") {
    return BUILT_IN_TAGS.indexOf(realTag) !== -1;
  }
  return BUILT_IN_TAGS.indexOf(realTag) !== -1 || UVUE_WEB_BUILT_IN_TAGS.indexOf(realTag) !== -1;
}
const LINEFEED = "\n";
const NAVBAR_HEIGHT = 44;
const ON_REACH_BOTTOM_DISTANCE = 50;
const UNI_STORAGE_LOCALE = "UNI_LOCALE";
const SCHEME_RE = /^([a-z-]+:)?\/\//i;
const DATA_RE = /^data:.*,.*/;
const WEB_INVOKE_APPSERVICE = "WEB_INVOKE_APPSERVICE";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_LAUNCH = "onLaunch";
const ON_ERROR = "onError";
const ON_THEME_CHANGE = "onThemeChange";
const ON_PAGE_NOT_FOUND = "onPageNotFound";
const ON_UNHANDLE_REJECTION = "onUnhandledRejection";
const ON_LAST_PAGE_BACK_PRESS = "onLastPageBackPress";
const ON_EXIT = "onExit";
const ON_LOAD = "onLoad";
const ON_READY = "onReady";
const ON_UNLOAD = "onUnload";
const ON_INIT = "onInit";
const ON_SAVE_EXIT_STATE = "onSaveExitState";
const ON_UPLOAD_DOUYIN_VIDEO = "onUploadDouyinVideo";
const ON_LIVE_MOUNT = "onLiveMount";
const ON_TITLE_CLICK = "onTitleClick";
const ON_RESIZE = "onResize";
const ON_BACK_PRESS = "onBackPress";
const ON_PAGE_SCROLL = "onPageScroll";
const ON_TAB_ITEM_TAP = "onTabItemTap";
const ON_REACH_BOTTOM = "onReachBottom";
const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
const ON_SHARE_TIMELINE = "onShareTimeline";
const ON_SHARE_CHAT = "onShareChat";
const ON_COPY_URL = "onCopyUrl";
const ON_ADD_TO_FAVORITES = "onAddToFavorites";
const ON_SHARE_APP_MESSAGE = "onShareAppMessage";
const ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";
const ON_NAVIGATION_BAR_CHANGE = "onNavigationBarChange";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";
const ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED = "onNavigationBarSearchInputFocusChanged";
const ON_APP_ENTER_FOREGROUND = "onAppEnterForeground";
const ON_APP_ENTER_BACKGROUND = "onAppEnterBackground";
const ON_WEB_INVOKE_APP_SERVICE = "onWebInvokeAppService";
const ON_WXS_INVOKE_CALL_METHOD = "onWxsInvokeCallMethod";
function initUTSJSONObjectProperties(obj) {
  const propertyList = [
    "_resolveKeyPath",
    "_getValue",
    "toJSON",
    "get",
    "set",
    "getAny",
    "getString",
    "getNumber",
    "getBoolean",
    "getJSON",
    "getArray",
    "toMap",
    "forEach"
  ];
  const propertyDescriptorMap = {};
  for (let i = 0; i < propertyList.length; i++) {
    const property = propertyList[i];
    propertyDescriptorMap[property] = {
      enumerable: false,
      value: obj[property]
    };
  }
  Object.defineProperties(obj, propertyDescriptorMap);
}
function getRealDefaultValue(defaultValue) {
  return defaultValue === void 0 ? null : defaultValue;
}
class UTSJSONObject {
  static keys(obj) {
    return Object.keys(obj);
  }
  static assign(target, ...sources) {
    for (let i = 0; i < sources.length; i++) {
      const source = sources[i];
      for (let key in source) {
        target[key] = source[key];
      }
    }
    return target;
  }
  constructor(content = {}) {
    if (content instanceof Map) {
      content.forEach((value, key) => {
        this[key] = value;
      });
    } else {
      for (const key in content) {
        if (Object.prototype.hasOwnProperty.call(content, key)) {
          this[key] = content[key];
        }
      }
    }
    initUTSJSONObjectProperties(this);
  }
  _resolveKeyPath(keyPath) {
    let token = "";
    const keyPathArr = [];
    let inOpenParentheses = false;
    for (let i = 0; i < keyPath.length; i++) {
      const word = keyPath[i];
      switch (word) {
        case ".":
          if (token.length > 0) {
            keyPathArr.push(token);
            token = "";
          }
          break;
        case "[": {
          inOpenParentheses = true;
          if (token.length > 0) {
            keyPathArr.push(token);
            token = "";
          }
          break;
        }
        case "]":
          if (inOpenParentheses) {
            if (token.length > 0) {
              const tokenFirstChar = token[0];
              const tokenLastChar = token[token.length - 1];
              if (tokenFirstChar === '"' && tokenLastChar === '"' || tokenFirstChar === "'" && tokenLastChar === "'" || tokenFirstChar === "`" && tokenLastChar === "`") {
                if (token.length > 2) {
                  token = token.slice(1, -1);
                } else {
                  return [];
                }
              } else if (!/^\d+$/.test(token)) {
                return [];
              }
              keyPathArr.push(token);
              token = "";
            } else {
              return [];
            }
            inOpenParentheses = false;
          } else {
            return [];
          }
          break;
        default:
          token += word;
          break;
      }
      if (i === keyPath.length - 1) {
        if (token.length > 0) {
          keyPathArr.push(token);
          token = "";
        }
      }
    }
    return keyPathArr;
  }
  _getValue(keyPath, defaultValue) {
    const keyPathArr = this._resolveKeyPath(keyPath);
    const realDefaultValue = getRealDefaultValue(defaultValue);
    if (keyPathArr.length === 0) {
      return realDefaultValue;
    }
    let value = this;
    for (let i = 0; i < keyPathArr.length; i++) {
      const key = keyPathArr[i];
      if (value instanceof Object) {
        if (key in value) {
          value = value[key];
        } else {
          return realDefaultValue;
        }
      } else {
        return realDefaultValue;
      }
    }
    return value;
  }
  get(key) {
    return this._getValue(key);
  }
  set(key, value) {
    this[key] = value;
  }
  getAny(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    return this._getValue(key, realDefaultValue);
  }
  getString(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    const value = this._getValue(key, realDefaultValue);
    if (typeof value === "string") {
      return value;
    } else {
      return realDefaultValue;
    }
  }
  getNumber(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    const value = this._getValue(key, realDefaultValue);
    if (typeof value === "number") {
      return value;
    } else {
      return realDefaultValue;
    }
  }
  getBoolean(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    const boolean = this._getValue(key, realDefaultValue);
    if (typeof boolean === "boolean") {
      return boolean;
    } else {
      return realDefaultValue;
    }
  }
  getJSON(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    let value = this._getValue(key, realDefaultValue);
    if (value instanceof Object) {
      return value;
    } else {
      return realDefaultValue;
    }
  }
  getArray(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    let value = this._getValue(key, realDefaultValue);
    if (value instanceof Array) {
      return value;
    } else {
      return realDefaultValue;
    }
  }
  toMap() {
    let map = /* @__PURE__ */ new Map();
    for (let key in this) {
      map.set(key, this[key]);
    }
    return map;
  }
  forEach(callback) {
    for (let key in this) {
      callback(this[key], key);
    }
  }
}
function resolveOwnerVm(vm) {
  if (!vm) {
    return;
  }
  let componentName = vm.type.name;
  while (componentName && isBuiltInComponent(hyphenate(componentName))) {
    vm = vm.parent;
    componentName = vm.type.name;
  }
  return vm.proxy;
}
function isElement(el) {
  return el.nodeType === 1;
}
function resolveOwnerEl(instance2, multi = false) {
  const { vnode } = instance2;
  if (isElement(vnode.el)) {
    return multi ? vnode.el ? [vnode.el] : [] : vnode.el;
  }
  const { subTree } = instance2;
  if (subTree.shapeFlag & 16) {
    const elemVNodes = subTree.children.filter((vnode2) => vnode2.el && isElement(vnode2.el));
    if (elemVNodes.length > 0) {
      if (multi) {
        return elemVNodes.map((node) => node.el);
      }
      return elemVNodes[0].el;
    }
  }
  return multi ? vnode.el ? [vnode.el] : [] : vnode.el;
}
function normalizeStyle(value) {
  if (value instanceof UTSJSONObject) {
    const styleObject = {};
    UTSJSONObject.keys(value).forEach((key) => {
      styleObject[key] = value[key];
    });
    return normalizeStyle$1(styleObject);
  } else if (value instanceof Map) {
    const styleObject = {};
    value.forEach((value2, key) => {
      styleObject[key] = value2;
    });
    return normalizeStyle$1(styleObject);
  } else if (isString(value)) {
    return parseStringStyle(value);
  } else if (isArray$1(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else {
    return normalizeStyle$1(value);
  }
}
function normalizeClass(value) {
  let res = "";
  if (value instanceof UTSJSONObject) {
    UTSJSONObject.keys(value).forEach((key) => {
      if (value[key]) {
        res += key + " ";
      }
    });
  } else if (value instanceof Map) {
    value.forEach((value2, key) => {
      if (value2) {
        res += key + " ";
      }
    });
  } else if (isArray$1(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else {
    res = normalizeClass$1(value);
  }
  return res.trim();
}
function getLen(str = "") {
  return ("" + str).replace(/[^\x00-\xff]/g, "**").length;
}
function hasLeadingSlash(str) {
  return str.indexOf("/") === 0;
}
function addLeadingSlash(str) {
  return hasLeadingSlash(str) ? str : "/" + str;
}
function removeLeadingSlash(str) {
  return hasLeadingSlash(str) ? str.slice(1) : str;
}
const invokeArrayFns = (fns, arg) => {
  let ret;
  for (let i = 0; i < fns.length; i++) {
    ret = fns[i](arg);
  }
  return ret;
};
const invokeArrayFnsWithResults = (fns, arg) => {
  return fns.map((fn) => fn(arg));
};
function updateElementStyle(element, styles) {
  for (const attrName in styles) {
    element.style[attrName] = styles[attrName];
  }
}
function once(fn, ctx = null) {
  let res;
  return (...args) => {
    if (fn) {
      res = fn.apply(ctx, args);
      fn = null;
    }
    return res;
  };
}
function formatKey(key) {
  return camelize(key.substring(5));
}
const initCustomDatasetOnce = /* @__PURE__ */ once((isBuiltInElement2) => {
  isBuiltInElement2 = isBuiltInElement2 || ((el) => el.tagName.startsWith("UNI-"));
  const prototype = HTMLElement.prototype;
  const setAttribute = prototype.setAttribute;
  prototype.setAttribute = function(key, value) {
    if (key.startsWith("data-") && isBuiltInElement2(this)) {
      const dataset = this.__uniDataset || (this.__uniDataset = {});
      dataset[formatKey(key)] = value;
    }
    if (!/^\d/.test(key)) {
      setAttribute.call(this, key, value);
    }
  };
  const removeAttribute = prototype.removeAttribute;
  prototype.removeAttribute = function(key) {
    if (this.__uniDataset && key.startsWith("data-") && isBuiltInElement2(this)) {
      delete this.__uniDataset[formatKey(key)];
    }
    removeAttribute.call(this, key);
  };
});
function getCustomDataset(el) {
  return extend$1({}, el.dataset, el.__uniDataset);
}
const unitRE = new RegExp(`"[^"]+"|'[^']+'|url\\([^)]+\\)|(\\d*\\.?\\d+)[r|u]px`, "g");
function toFixed(number, precision) {
  const multiplier = Math.pow(10, precision + 1);
  const wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
}
const defaultRpx2Unit = {
  unit: "rem",
  unitRatio: 10 / 320,
  unitPrecision: 5
};
function createRpx2Unit(unit2, unitRatio2, unitPrecision2) {
  return (val) => val.replace(unitRE, (m, $1) => {
    if (!$1) {
      return m;
    }
    if (unitRatio2 === 1) {
      return `${$1}${unit2}`;
    }
    const value = toFixed(parseFloat($1) * unitRatio2, unitPrecision2);
    return value === 0 ? "0" : `${value}${unit2}`;
  });
}
function passive(passive2) {
  return { passive: passive2 };
}
function normalizeTarget(el) {
  const { id: id2, offsetTop, offsetLeft } = el;
  return {
    id: id2,
    dataset: getCustomDataset(el),
    offsetTop,
    offsetLeft
  };
}
function scrollTo(scrollTop, duration, isH5) {
  if (isString(scrollTop)) {
    const el = document.querySelector(scrollTop);
    if (el) {
      const { top } = el.getBoundingClientRect();
      scrollTop = top + window.pageYOffset;
      const pageHeader = document.querySelector("uni-page-head");
      if (pageHeader) {
        scrollTop -= pageHeader.offsetHeight;
      }
    }
  }
  if (scrollTop < 0) {
    scrollTop = 0;
  }
  const documentElement = document.documentElement;
  const { clientHeight, scrollHeight } = documentElement;
  scrollTop = Math.min(scrollTop, scrollHeight - clientHeight);
  if (duration === 0) {
    documentElement.scrollTop = document.body.scrollTop = scrollTop;
    return;
  }
  if (window.scrollY === scrollTop) {
    return;
  }
  const scrollTo2 = (duration2) => {
    if (duration2 <= 0) {
      window.scrollTo(0, scrollTop);
      return;
    }
    const distaince = scrollTop - window.scrollY;
    requestAnimationFrame(function() {
      window.scrollTo(0, window.scrollY + distaince / duration2 * 10);
      scrollTo2(duration2 - 10);
    });
  };
  scrollTo2(duration);
}
function decode$1(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function decodedQuery(query = {}) {
  const decodedQuery2 = {};
  Object.keys(query).forEach((name) => {
    try {
      decodedQuery2[name] = decode$1(query[name]);
    } catch (e2) {
      decodedQuery2[name] = query[name];
    }
  });
  return decodedQuery2;
}
const PLUS_RE$1 = /\+/g;
function parseQuery$1(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE$1, " ");
    let eqPos = searchParam.indexOf("=");
    let key = decode$1(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    let value = eqPos < 0 ? null : decode$1(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray$1(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function parseUrl(url) {
  const [path, querystring] = url.split("?", 2);
  return {
    path,
    query: parseQuery$1(querystring || "")
  };
}
function debounce(fn, delay, { clearTimeout: clearTimeout2, setTimeout: setTimeout2 }) {
  let timeout;
  const newFn = function() {
    clearTimeout2(timeout);
    const timerFn = () => fn.apply(this, arguments);
    timeout = setTimeout2(timerFn, delay);
  };
  newFn.cancel = function() {
    clearTimeout2(timeout);
  };
  return newFn;
}
class EventChannel {
  constructor(id2, events) {
    this.id = id2;
    this.listener = {};
    this.emitCache = [];
    if (events) {
      Object.keys(events).forEach((name) => {
        this.on(name, events[name]);
      });
    }
  }
  emit(eventName, ...args) {
    const fns = this.listener[eventName];
    if (!fns) {
      return this.emitCache.push({
        eventName,
        args
      });
    }
    fns.forEach((opt) => {
      opt.fn.apply(opt.fn, args);
    });
    this.listener[eventName] = fns.filter((opt) => opt.type !== "once");
  }
  on(eventName, fn) {
    this._addListener(eventName, "on", fn);
    this._clearCache(eventName);
  }
  once(eventName, fn) {
    this._addListener(eventName, "once", fn);
    this._clearCache(eventName);
  }
  off(eventName, fn) {
    const fns = this.listener[eventName];
    if (!fns) {
      return;
    }
    if (fn) {
      for (let i = 0; i < fns.length; ) {
        if (fns[i].fn === fn) {
          fns.splice(i, 1);
          i--;
        }
        i++;
      }
    } else {
      delete this.listener[eventName];
    }
  }
  _clearCache(eventName) {
    for (let index2 = 0; index2 < this.emitCache.length; index2++) {
      const cache2 = this.emitCache[index2];
      const _name = eventName ? cache2.eventName === eventName ? eventName : null : cache2.eventName;
      if (!_name)
        continue;
      const location2 = this.emit.apply(this, [_name, ...cache2.args]);
      if (typeof location2 === "number") {
        this.emitCache.pop();
        continue;
      }
      this.emitCache.splice(index2, 1);
      index2--;
    }
  }
  _addListener(eventName, type, fn) {
    (this.listener[eventName] || (this.listener[eventName] = [])).push({
      fn,
      type
    });
  }
}
const PAGE_HOOKS = [
  ON_INIT,
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_RESIZE,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_SHARE_APP_MESSAGE,
  ON_SHARE_CHAT,
  ON_COPY_URL,
  ON_UPLOAD_DOUYIN_VIDEO,
  ON_LIVE_MOUNT,
  ON_TITLE_CLICK,
  ON_ADD_TO_FAVORITES,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
function isRootImmediateHook(name) {
  const PAGE_SYNC_HOOKS = [ON_LOAD, ON_SHOW];
  return PAGE_SYNC_HOOKS.indexOf(name) > -1;
}
function isRootHook(name) {
  return PAGE_HOOKS.indexOf(name) > -1;
}
const UniLifecycleHooks = [
  ON_SHOW,
  ON_HIDE,
  ON_LAUNCH,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION,
  ON_EXIT,
  ON_INIT,
  ON_LOAD,
  ON_READY,
  ON_UNLOAD,
  ON_RESIZE,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_ADD_TO_FAVORITES,
  ON_SHARE_APP_MESSAGE,
  ON_SHARE_CHAT,
  ON_COPY_URL,
  ON_UPLOAD_DOUYIN_VIDEO,
  ON_LIVE_MOUNT,
  ON_TITLE_CLICK,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED,
  ON_LAST_PAGE_BACK_PRESS
];
function isUniLifecycleHook(name, value, checkType = true) {
  if (checkType && !isFunction(value)) {
    return false;
  }
  if (UniLifecycleHooks.indexOf(name) > -1) {
    return true;
  } else if (name.indexOf("on") === 0) {
    return true;
  }
  return false;
}
const createVueAppHooks = [];
function invokeCreateVueAppHook(app) {
  createVueAppHooks.forEach((hook) => hook(app));
}
const invokeCreateErrorHandler = once((app, createErrorHandler2) => {
  return createErrorHandler2(app);
});
const E = function() {
};
E.prototype = {
  _id: 1,
  on: function(name, callback, ctx) {
    var e2 = this.e || (this.e = {});
    (e2[name] || (e2[name] = [])).push({
      fn: callback,
      ctx,
      _id: this._id
    });
    return this._id++;
  },
  once: function(name, callback, ctx) {
    var self2 = this;
    function listener() {
      self2.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function(name, event) {
    var e2 = this.e || (this.e = {});
    var evts = e2[name];
    var liveEvents = [];
    if (evts && event) {
      for (var i = evts.length - 1; i >= 0; i--) {
        if (evts[i].fn === event || evts[i].fn._ === event || evts[i]._id === event) {
          evts.splice(i, 1);
          break;
        }
      }
      liveEvents = evts;
    }
    liveEvents.length ? e2[name] = liveEvents : delete e2[name];
    return this;
  }
};
var E$1 = E;
const borderStyles = {
  black: "rgba(0,0,0,0.4)",
  white: "rgba(255,255,255,0.4)"
};
function normalizeTabBarStyles(borderStyle) {
  if (borderStyle && borderStyle in borderStyles) {
    return borderStyles[borderStyle];
  }
  return borderStyle;
}
function normalizeTitleColor(titleColor) {
  return titleColor === "black" ? "#000000" : "#ffffff";
}
function resolveStringStyleItem(modeStyle, styleItem, key) {
  if (isString(styleItem) && styleItem.startsWith("@")) {
    const _key = styleItem.replace("@", "");
    let _styleItem = modeStyle[_key] || styleItem;
    switch (key) {
      case "titleColor":
        _styleItem = normalizeTitleColor(_styleItem);
        break;
      case "borderStyle":
        _styleItem = normalizeTabBarStyles(_styleItem);
        break;
    }
    return _styleItem;
  }
  return styleItem;
}
function normalizeStyles(pageStyle, themeConfig2 = {}, mode = "light") {
  const modeStyle = themeConfig2[mode];
  const styles = {};
  if (typeof modeStyle === "undefined" || !pageStyle)
    return pageStyle;
  Object.keys(pageStyle).forEach((key) => {
    const styleItem = pageStyle[key];
    const parseStyleItem = () => {
      if (isPlainObject(styleItem))
        return normalizeStyles(styleItem, themeConfig2, mode);
      if (isArray$1(styleItem))
        return styleItem.map((item) => {
          if (isPlainObject(item))
            return normalizeStyles(item, themeConfig2, mode);
          return resolveStringStyleItem(modeStyle, item);
        });
      return resolveStringStyleItem(modeStyle, styleItem, key);
    };
    styles[key] = parseStyleItem();
  });
  return styles;
}
/**
* @dcloudio/uni-h5-vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect2, scope2 = activeEffectScope) {
  if (scope2 && scope2.active) {
    scope2.effects.push(effect2);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
let activeEffect;
class ReactiveEffect {
  constructor(fn, trigger2, scheduler, scope2) {
    this.fn = fn;
    this.trigger = trigger2;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this._dirtyLevel = 4;
    this._trackId = 0;
    this._runnings = 0;
    this._shouldSchedule = false;
    this._depsLength = 0;
    recordEffectScope(this, scope2);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1;
      pauseTracking();
      for (let i = 0; i < this._depsLength; i++) {
        const dep = this.deps[i];
        if (dep.computed) {
          triggerComputed(dep.computed);
          if (this._dirtyLevel >= 4) {
            break;
          }
        }
      }
      if (this._dirtyLevel === 1) {
        this._dirtyLevel = 0;
      }
      resetTracking();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(v2) {
    this._dirtyLevel = v2 ? 4 : 0;
  }
  run() {
    this._dirtyLevel = 0;
    if (!this.active) {
      return this.fn();
    }
    let lastShouldTrack = shouldTrack;
    let lastEffect = activeEffect;
    try {
      shouldTrack = true;
      activeEffect = this;
      this._runnings++;
      preCleanupEffect(this);
      return this.fn();
    } finally {
      postCleanupEffect(this);
      this._runnings--;
      activeEffect = lastEffect;
      shouldTrack = lastShouldTrack;
    }
  }
  stop() {
    var _a;
    if (this.active) {
      preCleanupEffect(this);
      postCleanupEffect(this);
      (_a = this.onStop) == null ? void 0 : _a.call(this);
      this.active = false;
    }
  }
}
function triggerComputed(computed2) {
  return computed2.value;
}
function preCleanupEffect(effect2) {
  effect2._trackId++;
  effect2._depsLength = 0;
}
function postCleanupEffect(effect2) {
  if (effect2.deps.length > effect2._depsLength) {
    for (let i = effect2._depsLength; i < effect2.deps.length; i++) {
      cleanupDepEffect(effect2.deps[i], effect2);
    }
    effect2.deps.length = effect2._depsLength;
  }
}
function cleanupDepEffect(dep, effect2) {
  const trackId = dep.get(effect2);
  if (trackId !== void 0 && effect2._trackId !== trackId) {
    dep.delete(effect2);
    if (dep.size === 0) {
      dep.cleanup();
    }
  }
}
let shouldTrack = true;
let pauseScheduleStack = 0;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function pauseScheduling() {
  pauseScheduleStack++;
}
function resetScheduling() {
  pauseScheduleStack--;
  while (!pauseScheduleStack && queueEffectSchedulers.length) {
    queueEffectSchedulers.shift()();
  }
}
function trackEffect(effect2, dep, debuggerEventExtraInfo) {
  if (dep.get(effect2) !== effect2._trackId) {
    dep.set(effect2, effect2._trackId);
    const oldDep = effect2.deps[effect2._depsLength];
    if (oldDep !== dep) {
      if (oldDep) {
        cleanupDepEffect(oldDep, effect2);
      }
      effect2.deps[effect2._depsLength++] = dep;
    } else {
      effect2._depsLength++;
    }
  }
}
const queueEffectSchedulers = [];
function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
  pauseScheduling();
  for (const effect2 of dep.keys()) {
    let tracking;
    if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
      effect2._dirtyLevel = dirtyLevel;
    }
    if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      effect2.trigger();
      if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
        effect2._shouldSchedule = false;
        if (effect2.scheduler) {
          queueEffectSchedulers.push(effect2.scheduler);
        }
      }
    }
  }
  resetScheduling();
}
const createDep = (cleanup, computed2) => {
  const dep = /* @__PURE__ */ new Map();
  dep.cleanup = cleanup;
  dep.computed = computed2;
  return dep;
};
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
    }
    trackEffect(
      activeEffect,
      dep
    );
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray$1(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  pauseScheduling();
  for (const dep of deps) {
    if (dep) {
      triggerEffects(
        dep,
        4
      );
    }
  }
  resetScheduling();
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      pauseScheduling();
      const res = toRaw(this)[key].apply(this, args);
      resetScheduling();
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty$1(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray$1(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn$1(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty$1;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject$1(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray$1(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn$1(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn$1(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray$1(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    return true;
  }
  deleteProperty(target, key) {
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(
  true
);
const toShallow = (value) => value;
const getProto = (v2) => Reflect.getPrototypeOf(v2);
function get(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn$1(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$1(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject$1(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$1(value) ? readonly(value) : value;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this.getter = getter;
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this.effect = new ReactiveEffect(
      () => getter(this._value),
      () => triggerRefValue(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    );
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    if ((!self2._cacheable || self2.effect.dirty) && hasChanged(self2._value, self2._value = self2.effect.run())) {
      triggerRefValue(self2, 4);
    }
    trackRefValue(self2);
    if (self2.effect._dirtyLevel >= 2) {
      triggerRefValue(self2, 2);
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(v2) {
    this.effect.dirty = v2;
  }
  // #endregion
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
function trackRefValue(ref2) {
  var _a;
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    trackEffect(
      activeEffect,
      (_a = ref2.dep) != null ? _a : ref2.dep = createDep(
        () => ref2.dep = void 0,
        ref2 instanceof ComputedRefImpl ? ref2 : void 0
      )
    );
  }
}
function triggerRefValue(ref2, dirtyLevel = 4, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    triggerEffects(
      dep,
      dirtyLevel
    );
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, 4);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
const stack = [];
function warn$1(msg, ...args) {
  pauseTracking();
  const instance2 = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance2 && instance2.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    if (args.length) {
      args[0] = String(args[0]);
    }
    callWithErrorHandling(
      appWarnHandler,
      instance2,
      11,
      [
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance2 && instance2.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance2, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function callWithErrorHandling(fn, instance2, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance2, type);
  }
}
function callWithAsyncErrorHandling(fn, instance2, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance2, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance2, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance2, type, args));
  }
  return values;
}
function handleError(err, instance2, type, throwInDev = true) {
  const contextVNode = instance2 ? instance2.vnode : null;
  if (instance2) {
    let cur = instance2.parent;
    const exposedInstance = instance2.proxy;
    const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance2.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue$1 = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex$1(id2) {
  let start = flushIndex + 1;
  let end = queue$1.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue$1[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id2 || middleJobId === id2 && middleJob.pre) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!queue$1.length || !queue$1.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue$1.push(job);
    } else {
      queue$1.splice(findInsertionIndex$1(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue$1.indexOf(job);
  if (i > flushIndex) {
    queue$1.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$1(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance2, seen2, i = isFlushing ? flushIndex + 1 : 0) {
  for (; i < queue$1.length; i++) {
    const cb = queue$1[i];
    if (cb && cb.pre) {
      if (instance2 && cb.id !== instance2.uid) {
        continue;
      }
      queue$1.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen2) {
  isFlushPending = false;
  isFlushing = true;
  queue$1.sort(comparator);
  try {
    for (flushIndex = 0; flushIndex < queue$1.length; flushIndex++) {
      const job = queue$1[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue$1.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue$1.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
function emit$2(instance2, event, ...rawArgs) {
  if (instance2.isUnmounted)
    return;
  const props = instance2.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance2,
      6,
      // fixed by xxxxxx
      normalizeWxsEventArgs(instance2, handler, args)
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance2.emitted) {
      instance2.emitted = {};
    } else if (instance2.emitted[handlerName]) {
      return;
    }
    instance2.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance2,
      6,
      // fixed by xxxxxx
      normalizeWxsEventArgs(instance2, onceHandler, args)
    );
  }
}
function normalizeWxsEventArgs(instance2, handler, args) {
  if (args.length !== 1) {
    return args;
  }
  if (isFunction(handler)) {
    if (handler.length < 2) {
      return args;
    }
  } else {
    if (!handler.find((item) => item.length >= 2)) {
      return args;
    }
  }
  const $sysEvent = args[0];
  if ($sysEvent && hasOwn$1($sysEvent, "type") && hasOwn$1($sysEvent, "timeStamp") && hasOwn$1($sysEvent, "target") && hasOwn$1($sysEvent, "currentTarget") && hasOwn$1($sysEvent, "detail")) {
    const proxy = instance2.proxy;
    const $ownerInstance = proxy.$gcd(proxy, true);
    if ($ownerInstance) {
      args.push($ownerInstance);
    }
  }
  return args;
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend$1(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$1(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$1(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend$1(normalized, raw);
  }
  if (isObject$1(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn$1(options, key[0].toLowerCase() + key.slice(1)) || hasOwn$1(options, hyphenate(key)) || hasOwn$1(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance2) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance2;
  currentScopeId = instance2 && instance2.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance2) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    props,
    propsOptions: [propsOptions],
    slots,
    attrs: attrs2,
    emit: emit2,
    render: render2,
    renderCache,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance2;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance2);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = false ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render2.call(
          thisProxy,
          proxyToUse,
          renderCache,
          props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs2;
    } else {
      const render22 = Component;
      if (false)
        ;
      result = normalizeVNode(
        render22.length > 1 ? render22(
          props,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return attrs2;
            },
            slots,
            emit: emit2
          } : { attrs: attrs2, slots, emit: emit2 }
        ) : render22(
          props,
          null
          /* we know it doesn't need it */
        )
      );
      fallthroughAttrs = Component.props ? attrs2 : getFunctionalFallthrough(attrs2);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance2, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root.transition = vnode.transition;
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs2) => {
  let res;
  for (const key in attrs2) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs2[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs2, props) => {
  const res = {};
  for (const key in attrs2) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs2[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance2 = currentRenderingInstance || currentInstance;
  if (instance2) {
    const Component = instance2.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance2[type] || Component[type], name) || // global registration
      resolve(instance2.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$1(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
function watchEffect(effect2, options) {
  return doWatch(effect2, null, options);
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, {
  immediate,
  deep,
  flush,
  once: once2,
  onTrack,
  onTrigger
} = EMPTY_OBJ) {
  if (cb && once2) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      unwatch();
    };
  }
  const instance2 = currentInstance;
  const reactiveGetter = (source2) => deep === true ? source2 : (
    // for deep: false, only traverse root-level properties
    traverse(source2, deep === false ? 1 : void 0)
  );
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray$1(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance2, 2);
      } else
        ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance2, 2);
    } else {
      getter = () => {
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(
          source,
          instance2,
          3,
          [onCleanup]
        );
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect2.onStop = () => {
      callWithErrorHandling(fn, instance2, 4);
      cleanup = effect2.onStop = void 0;
    };
  };
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance2, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return NOOP;
    }
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect2.active || !effect2.dirty) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v2, i) => hasChanged(v2, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance2, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect2.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance2 && instance2.suspense);
  } else {
    job.pre = true;
    if (instance2)
      job.id = instance2.uid;
    scheduler = () => queueJob(job);
  }
  const effect2 = new ReactiveEffect(getter, NOOP, scheduler);
  const scope2 = getCurrentScope();
  const unwatch = () => {
    effect2.stop();
    if (scope2) {
      remove(scope2.effects, effect2);
    }
  };
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect2.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(
      effect2.run.bind(effect2),
      instance2 && instance2.suspense
    );
  } else {
    effect2.run();
  }
  if (ssrCleanup)
    ssrCleanup.push(unwatch);
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, depth, currentDepth = 0, seen2) {
  if (!isObject$1(value) || value["__v_skip"]) {
    return value;
  }
  if (depth && depth > 0) {
    if (currentDepth >= depth) {
      return value;
    }
    currentDepth++;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  if (isRef(value)) {
    traverse(value.value, depth, currentDepth, seen2);
  } else if (isArray$1(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, currentDepth, seen2);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v2) => {
      traverse(v2, depth, currentDepth, seen2);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], depth, currentDepth, seen2);
    }
  }
  return value;
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
    return vnode;
  }
  const instance2 = getExposeProxy(currentRenderingInstance) || currentRenderingInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance: instance2,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance2, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance2, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey$1 = Symbol("_enterCb");
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance2 = getCurrentInstance();
    const state = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        for (const c of children) {
          if (c.type !== Comment) {
            child = c;
            break;
          }
        }
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance2
      );
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance2.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild)) {
        const leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance2
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (instance2.update.active !== false) {
              instance2.effect.dirty = true;
              instance2.update();
            }
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance2) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance2,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray$1(hook)) {
      if (hook.every((hook2) => hook2.length <= 1))
        done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el[enterCbKey$1] = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey$1] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el[enterCbKey$1]) {
        el[enterCbKey$1](
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el[leaveCbKey] = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance2);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    vnode.children ? vnode.children[0] : void 0
  ) : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction(options) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend$1({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return /* @__PURE__ */ defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance2 = currentInstance;
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance2);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(
          err,
          instance2,
          13,
          !errorComponent
        );
      };
      if (suspensible && instance2.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance2);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(
              `Async component timed out after ${timeout}ms.`
            );
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance2.parent && isKeepAlive(instance2.parent.vnode)) {
          instance2.parent.effect.dirty = true;
          queueJob(instance2.parent.update);
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance2);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  const { ref: ref2, props, children, ce } = parent.vnode;
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
class Cache {
  constructor(max) {
    this.max = max;
    this._cache = /* @__PURE__ */ new Map();
    this._keys = /* @__PURE__ */ new Set();
    this._max = parseInt(max, 10);
  }
  get(key) {
    const { _cache, _keys, _max } = this;
    const cached = _cache.get(key);
    if (cached) {
      _keys.delete(key);
      _keys.add(key);
    } else {
      _keys.add(key);
      if (_max && _keys.size > _max) {
        const staleKey = _keys.values().next().value;
        this.pruneCacheEntry(_cache.get(staleKey));
        this.delete(staleKey);
      }
    }
    return cached;
  }
  set(key, value) {
    this._cache.set(key, value);
  }
  delete(key) {
    this._cache.delete(key);
    this._keys.delete(key);
  }
  forEach(fn, thisArg) {
    this._cache.forEach(fn.bind(thisArg));
  }
}
const KeepAliveImpl = {
  name: `KeepAlive`,
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number],
    matchBy: {
      type: String,
      default: "name"
    },
    cache: Object
  },
  setup(props, { slots }) {
    const instance2 = getCurrentInstance();
    const sharedContext = instance2.ctx;
    if (!sharedContext.renderer) {
      return () => {
        const children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }
    const cache = props.cache || new Cache(props.max);
    cache.pruneCacheEntry = pruneCacheEntry;
    let current = null;
    function pruneCacheEntry(cached) {
      if (!current || !isSameVNodeType(cached, current) || props.matchBy === "key" && cached.key !== current.key) {
        unmount(cached);
      } else if (current) {
        resetShapeFlag(current);
      }
    }
    const parentSuspense = instance2.suspense;
    const {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: { createElement }
      }
    } = sharedContext;
    const storageContainer = createElement("div");
    sharedContext.activate = (vnode, container, anchor, namespace, optimized) => {
      const instance22 = vnode.component;
      if (instance22.ba) {
        const currentState = instance22.isDeactivated;
        instance22.isDeactivated = false;
        invokeArrayFns$1(instance22.ba);
        instance22.isDeactivated = currentState;
      }
      move(vnode, container, anchor, 0, parentSuspense);
      patch(
        instance22.vnode,
        vnode,
        container,
        anchor,
        instance22,
        parentSuspense,
        namespace,
        vnode.slotScopeIds,
        optimized
      );
      queuePostRenderEffect(() => {
        instance22.isDeactivated = false;
        if (instance22.a) {
          invokeArrayFns$1(instance22.a);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance22.parent, vnode);
        }
      }, parentSuspense);
    };
    sharedContext.deactivate = (vnode) => {
      const instance22 = vnode.component;
      if (instance22.bda) {
        invokeKeepAliveHooks(instance22.bda);
      }
      move(vnode, storageContainer, null, 1, parentSuspense);
      queuePostRenderEffect(() => {
        if (instance22.bda) {
          resetHookState(instance22.bda);
        }
        if (instance22.da) {
          invokeArrayFns$1(instance22.da);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance22.parent, vnode);
        }
        instance22.isDeactivated = true;
      }, parentSuspense);
    };
    function unmount(vnode) {
      resetShapeFlag(vnode);
      _unmount(vnode, instance2, parentSuspense, true);
    }
    function pruneCache(filter) {
      cache.forEach((vnode, key) => {
        const name = getMatchingName(vnode, props.matchBy);
        if (name && (!filter || !filter(name))) {
          cache.delete(key);
          pruneCacheEntry(vnode);
        }
      });
    }
    watch(
      () => [props.include, props.exclude, props.matchBy],
      ([include2, exclude]) => {
        include2 && pruneCache((name) => matches(include2, name));
        exclude && pruneCache((name) => !matches(exclude, name));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: true }
    );
    let pendingCacheKey = null;
    const cacheSubtree = () => {
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance2.subTree));
      }
    };
    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(() => {
      cache.forEach((cached, key) => {
        cache.delete(key);
        pruneCacheEntry(cached);
        const { subTree, suspense } = instance2;
        const vnode = getInnerChild(subTree);
        if (cached.type === vnode.type && (props.matchBy !== "key" || cached.key === vnode.key)) {
          if (vnode.component.bda) {
            invokeArrayFns$1(vnode.component.bda);
          }
          resetShapeFlag(vnode);
          const da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }
      });
    });
    return () => {
      pendingCacheKey = null;
      if (!slots.default) {
        return null;
      }
      const children = slots.default();
      const rawVNode = children[0];
      if (children.length > 1) {
        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !isSuspense(rawVNode.type)) {
        current = null;
        return rawVNode;
      }
      let vnode = getInnerChild(rawVNode);
      const comp = vnode.type;
      const name = getMatchingName(vnode, props.matchBy);
      const { include: include2, exclude } = props;
      if (include2 && (!name || !matches(include2, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }
      const key = vnode.key == null ? comp : vnode.key;
      const cachedVNode = cache.get(key);
      if (vnode.el) {
        vnode = cloneVNode(vnode);
        if (isSuspense(rawVNode.type)) {
          rawVNode.ssContent = vnode;
        }
      }
      pendingCacheKey = key;
      if (cachedVNode) {
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;
        if (vnode.transition) {
          setTransitionHooks(vnode, vnode.transition);
        }
        vnode.shapeFlag |= 512;
      }
      vnode.shapeFlag |= 256;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
};
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
  if (isArray$1(pattern)) {
    return pattern.some((p2) => matches(p2, name));
  } else if (isString(pattern)) {
    return pattern.split(",").includes(name);
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  return false;
}
function onBeforeActivate(hook, target) {
  registerKeepAliveHook(hook, "ba", target);
}
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onBeforeDeactivate(hook, target) {
  registerKeepAliveHook(hook, "bda", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  wrappedHook.__called = false;
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function resetShapeFlag(vnode) {
  vnode.shapeFlag &= ~256;
  vnode.shapeFlag &= ~512;
}
function getInnerChild(vnode) {
  return isSuspense(vnode.type) ? vnode.ssContent : vnode;
}
function getMatchingName(vnode, matchBy) {
  if (matchBy === "name") {
    const comp = vnode.type;
    return getComponentName(
      isAsyncWrapper(vnode) ? comp.__asyncResolved || {} : comp
    );
  }
  return String(vnode.key);
}
function invokeKeepAliveHooks(hooks) {
  for (let i = 0; i < hooks.length; i++) {
    const hook = hooks[i];
    if (!hook.__called) {
      hook();
      hook.__called = true;
    }
  }
}
function resetHookState(hooks) {
  hooks.forEach((hook) => hook.__called = false);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    if (isRootHook(type) && target.$pageInstance) {
      if (target.type.__reserved) {
        return;
      }
      if (target !== target.$pageInstance) {
        target = target.$pageInstance;
        if (isRootImmediateHook(type)) {
          const proxy = target.proxy;
          callWithAsyncErrorHandling(
            hook.bind(proxy),
            target,
            type,
            ON_LOAD === type ? [proxy.$page.options] : []
          );
        }
      }
    }
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook(
  "rtg"
);
const onRenderTracked = createHook(
  "rtc"
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function renderList(source, renderItem, cache, index2) {
  let ret;
  const cached = cache && cache[index2];
  if (isArray$1(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject$1(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index2] = ret;
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    if (name !== "default")
      props.name = name;
    return createVNode("slot", props, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(
    Fragment,
    {
      key: props.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      validSlotContent && validSlotContent.key || `_${name}`
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i)) {
    const p2 = getExposeProxy(i) || i.proxy;
    return p2;
  }
  return getPublicInstance(i.parent);
};
const createForceUpdate = (i) => {
  return function() {
    i.effect.dirty = true;
    queueJob(i.update);
    {
      return;
    }
  };
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend$1(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => i.props,
    $attrs: (i) => i.attrs,
    $slots: (i) => i.slots,
    $refs: (i) => i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    // fixed by xxxxxx
    $forceUpdate: (i) => i.f || (i.f = createForceUpdate(i)),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i)
  })
);
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn$1(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance2 }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance2;
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance2.propsOptions[0]) && hasOwn$1(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance2, "get", key);
      }
      return publicGetter(instance2);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn$1(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance2 }, key, value) {
    const { data, setupState, ctx } = instance2;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn$1(instance2.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance2) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn$1(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn$1(normalizedProps, key) || hasOwn$1(ctx, key) || hasOwn$1(publicPropertiesMap, key) || hasOwn$1(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn$1(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
function normalizePropsOrEmits(props) {
  return isArray$1(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
let shouldCacheAccess = true;
function applyOptions$1(instance2) {
  const options = resolveMergedOptions(instance2);
  const publicThis = instance2.proxy;
  const ctx = instance2.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance2, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject$1(data))
      ;
    else {
      instance2.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v2) => c.value = v2
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance2, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$1(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$1(expose)) {
    if (expose.length) {
      const exposed = instance2.exposed || (instance2.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance2.exposed) {
      instance2.exposed = {};
    }
  }
  if (render2 && instance2.render === NOOP) {
    instance2.render = render2;
  }
  if (inheritAttrs != null) {
    instance2.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance2.components = components;
  if (directives)
    instance2.directives = directives;
  const customApplyOptions = instance2.appContext.config.globalProperties.$applyOptions;
  if (customApplyOptions) {
    customApplyOptions(options, instance2, publicThis);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray$1(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$1(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v2) => injected.value = v2
      });
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance2, type) {
  callWithAsyncErrorHandling(
    isArray$1(hook) ? hook.map((h2) => h2.bind(instance2.proxy)) : hook.bind(instance2.proxy),
    instance2,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$1(raw)) {
    if (isArray$1(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance2) {
  const base = instance2.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance2.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions$1(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions$1(resolved, base, optionMergeStrategies);
  }
  if (isObject$1(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions$1(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray$1,
  created: mergeAsArray$1,
  beforeMount: mergeAsArray$1,
  mounted: mergeAsArray$1,
  beforeUpdate: mergeAsArray$1,
  updated: mergeAsArray$1,
  beforeDestroy: mergeAsArray$1,
  beforeUnmount: mergeAsArray$1,
  destroyed: mergeAsArray$1,
  unmounted: mergeAsArray$1,
  activated: mergeAsArray$1,
  deactivated: mergeAsArray$1,
  errorCaptured: mergeAsArray$1,
  serverPrefetch: mergeAsArray$1,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend$1(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$1(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray$1(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend$1(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$1(to) && isArray$1(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend$1(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend$1(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray$1(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render2, hydrate2) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend$1({}, rootComponent);
    }
    if (rootProps != null && !isObject$1(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v2) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else
          ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (isHydrate && hydrate2) {
            hydrate2(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          app._instance = vnode.component;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render2(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
    if (currentInstance.type.mpType === "app") {
      currentInstance.appContext.app.provide(key, value);
    }
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance2 = currentInstance || currentRenderingInstance;
  if (instance2 || currentApp) {
    const provides = instance2 ? instance2.parent == null ? instance2.vnode.appContext && instance2.vnode.appContext.provides : instance2.parent.provides : currentApp._context.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance2 && instance2.proxy) : defaultValue;
    } else
      ;
  }
}
function initProps(instance2, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs2 = {};
  def(attrs2, InternalObjectKey, 1);
  instance2.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance2, rawProps, props, attrs2);
  for (const key in instance2.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance2.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance2.type.props) {
      instance2.props = attrs2;
    } else {
      instance2.props = props;
    }
  }
  instance2.attrs = attrs2;
}
function updateProps(instance2, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs: attrs2,
    vnode: { patchFlag }
  } = instance2;
  const rawCurrentProps = toRaw(props);
  const [options] = instance2.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance2.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance2.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn$1(attrs2, key)) {
            if (value !== attrs2[key]) {
              attrs2[key] = normalizeInheritAttrsValue(instance2, key, value);
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance2,
              false
            );
          }
        } else {
          if (value !== attrs2[key]) {
            attrs2[key] = normalizeInheritAttrsValue(instance2, key, value);
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance2, rawProps, props, attrs2)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn$1(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn$1(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance2,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs2 !== rawCurrentProps) {
      for (const key in attrs2) {
        if (!rawProps || !hasOwn$1(rawProps, key) && true) {
          delete attrs2[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance2, "set", "$attrs");
  }
}
function setFullProps(instance2, rawProps, props, attrs2) {
  const [options, needCastKeys] = instance2.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn$1(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          {
            props[camelKey] = value;
          }
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance2.emitsOptions, key)) {
        if (!(key in attrs2) || value !== attrs2[key]) {
          attrs2[key] = normalizeInheritAttrsValue(instance2, key, value);
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance2,
        !hasOwn$1(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function normalizeInheritAttrsValue(instance2, key, value) {
  return value;
}
function resolvePropValue(options, props, key, value, instance2, isAbsent) {
  const result = _resolvePropValue(
    options,
    props,
    key,
    value,
    instance2,
    isAbsent
  );
  return result;
}
function _resolvePropValue(options, props, key, value, instance2, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn$1(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance2;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance2);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend$1(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$1(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$1(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$1(opt) || isFunction(opt) ? { type: opt } : extend$1({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* shouldCast */
          ] = booleanIndex > -1;
          prop[
            1
            /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn$1(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$1(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  }
  return false;
}
function getType(ctor) {
  if (ctor === null) {
    return "null";
  }
  if (typeof ctor === "function") {
    return ctor.name || "";
  } else if (typeof ctor === "object") {
    const name = ctor.constructor && ctor.constructor.name;
    return name || "";
  }
  return "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray$1(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray$1(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false)
      ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance2) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance2, children) => {
  const normalized = normalizeSlotValue(children);
  instance2.slots.default = () => normalized;
};
const initSlots = (instance2, children) => {
  if (instance2.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance2.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(
        children,
        instance2.slots = {}
      );
    }
  } else {
    instance2.slots = {};
    if (children) {
      normalizeVNodeSlots(instance2, children);
    }
  }
  def(instance2.slots, InternalObjectKey, 1);
};
const updateSlots = (instance2, children, optimized) => {
  const { vnode, slots } = instance2;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend$1(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance2, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$1(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 && true ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn$1(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? hasOwn$1(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray$1(existing) && remove(existing, refValue);
          } else {
            if (!isArray$1(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn$1(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn$1(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    forcePatchProp: hostForcePatchProp,
    // fixed by xxxxxx
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(
            el,
            key,
            null,
            props[key],
            namespace,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    Object.defineProperty(el, "__vueParentComponent", {
      value: parentComponent,
      enumerable: false
    });
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(
          el,
          n2,
          oldProps,
          newProps,
          parentComponent,
          parentSuspense,
          namespace
        );
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value" || hostForcePatchProp && hostForcePatchProp(el, key)) {
              hostPatchProp(
                el,
                key,
                prev,
                next,
                namespace,
                n1.children,
                parentComponent,
                parentSuspense,
                unmountChildren
              );
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(
        el,
        n2,
        oldProps,
        newProps,
        parentComponent,
        parentSuspense,
        namespace
      );
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              vnode.children,
              parentComponent,
              parentSuspense,
              unmountChildren
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value" || hostForcePatchProp && hostForcePatchProp(el, key)) {
          hostPatchProp(
            el,
            key,
            prev,
            next,
            namespace,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance2 = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode)) {
      instance2.ctx.renderer = internals;
    }
    {
      setupComponent$1(instance2);
    }
    if (instance2.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance2, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance2.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
    } else {
      setupRenderEffect(
        instance2,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance2 = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance2.asyncDep && !instance2.asyncResolved) {
        updateComponentPreRender(instance2, n2, optimized);
        return;
      } else {
        instance2.next = n2;
        invalidateJob(instance2.update);
        instance2.effect.dirty = true;
        instance2.update();
      }
    } else {
      n2.el = n1.el;
      instance2.vnode = n2;
    }
  };
  const setupRenderEffect = (instance2, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance2.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance2;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance2, false);
        if (bm) {
          invokeArrayFns$1(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance2, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance2.subTree = renderComponentRoot(instance2);
            hydrateNode(
              el,
              instance2.subTree,
              instance2,
              parentSuspense,
              null
            );
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              // note: we are moving the render call into an async callback,
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !instance2.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance2.subTree = renderComponentRoot(instance2);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance2,
            parentSuspense,
            namespace
          );
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance2.ba && invokeKeepAliveHooks(instance2.ba);
          instance2.a && queuePostRenderEffect(instance2.a, parentSuspense);
        }
        instance2.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance2;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance2);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance2, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance2.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance2, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance2, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns$1(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance2, true);
        const nextTree = renderComponentRoot(instance2);
        const prevTree = instance2.subTree;
        instance2.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance2,
          parentSuspense,
          namespace
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance2, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
      }
    };
    const effect2 = instance2.effect = new ReactiveEffect(
      componentUpdateFn,
      NOOP,
      () => queueJob(update),
      instance2.scope
      // track it in component's effect scope
    );
    const update = instance2.update = () => {
      if (effect2.dirty) {
        effect2.run();
      }
    };
    update.id = instance2.uid;
    toggleRecurse(instance2, true);
    update();
  };
  const updateComponentPreRender = (instance2, nextVNode, optimized) => {
    nextVNode.component = instance2;
    const prevProps = instance2.vnode.props;
    instance2.vnode = nextVNode;
    instance2.next = null;
    updateProps(instance2, nextVNode.props, prevProps, optimized);
    updateSlots(instance2, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance2);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref2,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs
    } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          optimized,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance2, parentSuspense, doRemove) => {
    const { bum, scope: scope2, update, subTree, um } = instance2;
    if (bum) {
      invokeArrayFns$1(bum);
    }
    scope2.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance2, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance2.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance2.asyncDep && !instance2.asyncResolved && instance2.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  let isFlushing2 = false;
  const render2 = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    if (!isFlushing2) {
      isFlushing2 = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing2 = false;
    }
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate2;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate2, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render: render2,
    hydrate: hydrate2,
    createApp: createAppAPI(render2, hydrate2)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect2, update }, allowed) {
  effect2.allowRecurse = update.allowRecurse = allowed;
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$1(ch1) && isArray$1(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v2, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v2 = result.length - 1;
      while (u < v2) {
        c = u + v2 >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v2 = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v2 = result[u - 1];
  while (u-- > 0) {
    result[u] = v2;
    v2 = p2[v2];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance2) {
  const subComponent = instance2.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
const isTeleport = (type) => type.__isTeleport;
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref2,
  ref_key,
  ref_for
}) => {
  if (typeof ref2 === "number") {
    ref2 = "" + ref2;
  }
  return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$1(style)) {
      if (isProxy(style) && !isArray$1(style)) {
        style = extend$1({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$1(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend$1({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref2 ? isArray$1(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$1(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$1(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$1(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance2, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance2, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance2 = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    // fixed by xxxxxx
    // @ts-expect-error
    get renderer() {
      if (type.mpType === "app") {
        return "app";
      }
      if (this.$pageInstance) {
        return this.$pageInstance == instance2 ? "page" : "component";
      }
      return "component";
    },
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    bda: null,
    da: null,
    ba: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance2.ctx = { _: instance2 };
  }
  instance2.root = parent ? parent.root : instance2;
  instance2.emit = emit$2.bind(null, instance2);
  instance2.$pageInstance = parent && parent.$pageInstance;
  if (vnode.ce) {
    vnode.ce(instance2);
  }
  return instance2;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g2 = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g2[key]))
      setters = g2[key] = [];
    setters.push(setter);
    return (v2) => {
      if (setters.length > 1)
        setters.forEach((set2) => set2(v2));
      else
        setters[0](v2);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v2) => currentInstance = v2
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v2) => isInSSRComponentSetup = v2
  );
}
const setCurrentInstance = (instance2) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance2);
  instance2.scope.on();
  return () => {
    instance2.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance2) {
  return instance2.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent$1(instance2, isSSR = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance2.vnode;
  const isStateful = isStatefulComponent(instance2);
  initProps(instance2, props, isStateful, isSSR);
  initSlots(instance2, children);
  const setupResult = isStateful ? setupStatefulComponent(instance2, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance2, isSSR) {
  const Component = instance2.type;
  instance2.accessCache = /* @__PURE__ */ Object.create(null);
  instance2.proxy = markRaw(new Proxy(instance2.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance2.setupContext = setup.length > 1 ? createSetupContext(instance2) : null;
    const reset = setCurrentInstance(instance2);
    pauseTracking();
    const setupResult = callWithErrorHandling(
      setup,
      instance2,
      0,
      [
        instance2.props,
        setupContext
      ]
    );
    resetTracking();
    reset();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance2, resolvedResult, isSSR);
        }).catch((e2) => {
          handleError(e2, instance2, 0);
        });
      } else {
        instance2.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance2, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance2, isSSR);
  }
}
function handleSetupResult(instance2, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance2.type.__ssrInlineRender) {
      instance2.ssrRender = setupResult;
    } else {
      instance2.render = setupResult;
    }
  } else if (isObject$1(setupResult)) {
    instance2.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance2, isSSR);
}
let compile$1;
function finishComponentSetup(instance2, isSSR, skipOptions) {
  const Component = instance2.type;
  if (!instance2.render) {
    if (!isSSR && compile$1 && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance2).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance2.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend$1(
          extend$1(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile$1(template, finalCompilerOptions);
      }
    }
    instance2.render = Component.render || NOOP;
  }
  {
    const reset = setCurrentInstance(instance2);
    pauseTracking();
    try {
      applyOptions$1(instance2);
    } finally {
      resetTracking();
      reset();
    }
  }
}
function getAttrsProxy(instance2) {
  return instance2.attrsProxy || (instance2.attrsProxy = new Proxy(
    instance2.attrs,
    {
      get(target, key) {
        track(instance2, "get", "$attrs");
        return target[key];
      }
    }
  ));
}
function createSetupContext(instance2) {
  const expose = (exposed) => {
    instance2.exposed = exposed || {};
  };
  {
    return {
      get attrs() {
        return getAttrsProxy(instance2);
      },
      slots: instance2.slots,
      emit: instance2.emit,
      expose
    };
  }
}
function getExposeProxy(instance2) {
  if (instance2.exposed) {
    return instance2.exposeProxy || (instance2.exposeProxy = new Proxy(proxyRefs(markRaw(instance2.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance2);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance2, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance2 && instance2.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance2.components || instance2.parent.type.components
    ) || inferFromRegistry(instance2.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  return c;
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$1(propsOrChildren) && !isArray$1(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const version = "3.4.21";
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : (
      // fixed by xxxxxx
      is ? doc.createElement(tag, { is }) : doc.createElement(tag)
    );
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id2) {
    el.setAttribute(id2, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content;
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Transition.props = /* @__PURE__ */ extend$1(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const callHook = (hook, args = []) => {
  if (isArray$1(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$1(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend$1(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$1(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id2 = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id2 === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e2) => {
    if (e2.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  if (s === "auto")
    return 0;
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
  const { __wxsAddClass, __wxsRemoveClass } = el;
  if (__wxsRemoveClass && __wxsRemoveClass.length) {
    value = (value || "").split(/\s+/).filter((v2) => __wxsRemoveClass.indexOf(v2) === -1).join(" ");
    __wxsRemoveClass.length = 0;
  }
  if (__wxsAddClass && __wxsAddClass.length) {
    value = (value || "") + " " + __wxsAddClass.join(" ");
  }
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    {
      el.className = value;
    }
  }
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el[vShowOriginalDisplay] : "none";
  el[vShowHidden] = !value;
}
const CSS_VAR_TEXT = Symbol("");
const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
  const { __wxsStyle } = el;
  if (__wxsStyle) {
    for (const key in __wxsStyle) {
      setStyle(style, key, __wxsStyle[key]);
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray$1(val)) {
    val.forEach((v2) => setStyle(style, name, v2));
  } else {
    if (val == null)
      val = "";
    val = normalizeRpx(val);
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const { unit, unitRatio, unitPrecision } = defaultRpx2Unit;
const rpx2Unit = createRpx2Unit(unit, unitRatio, unitPrecision);
const normalizeRpx = (val) => {
  if (isString(val)) {
    return rpx2Unit(val);
  }
  return val;
};
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance2) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean2 = isSpecialBooleanAttr(key);
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean2 ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? "" : value;
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e2) {
  }
  needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance2 = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance2);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p$1 = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p$1.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance2) {
  const invoker = (e2) => {
    if (!e2._vts) {
      e2._vts = Date.now();
    } else if (e2._vts <= invoker.attached) {
      return;
    }
    const proxy = instance2 && instance2.proxy;
    const normalizeNativeEvent = proxy && proxy.$nne;
    const { value } = invoker;
    if (normalizeNativeEvent && isArray$1(value)) {
      const fns = patchStopImmediatePropagation(e2, value);
      for (let i = 0; i < fns.length; i++) {
        const fn = fns[i];
        callWithAsyncErrorHandling(
          fn,
          instance2,
          5,
          !fn.__wwe ? normalizeNativeEvent(e2) : [e2]
        );
      }
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e2, invoker.value),
      instance2,
      5,
      // fixed by xxxxxx
      normalizeNativeEvent && !value.__wwe ? normalizeNativeEvent(e2, value, instance2) : [e2]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e2, value) {
  if (isArray$1(value)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop.call(e2);
      e2._stopped = true;
    };
    return value.map((fn) => {
      const patchedFn = (e22) => !e22._stopped && fn && fn(e22);
      patchedFn.__wwe = fn.__wwe;
      return patchedFn;
    });
  } else {
    return value;
  }
}
function patchWxs(el, rawName, nextValue, instance2 = null) {
  if (!nextValue || !instance2) {
    return;
  }
  const propName = rawName.replace("change:", "");
  const { attrs: attrs2 } = instance2;
  const nextPropValue = attrs2[propName];
  const prevPropValue = (el.__wxsProps || (el.__wxsProps = {}))[propName];
  if (prevPropValue === nextPropValue) {
    return;
  }
  el.__wxsProps[propName] = nextPropValue;
  const proxy = instance2.proxy;
  nextTick(() => {
    nextValue(
      nextPropValue,
      prevPropValue,
      proxy.$gcd(proxy, true),
      proxy.$gcd(proxy, false)
    );
  });
}
const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const forcePatchProp = (el, key) => {
  if (key.indexOf("change:") === 0) {
    return true;
  }
  if (key === "class" && el.__wxsClassChanged) {
    el.__wxsClassChanged = false;
    return true;
  }
  if (key === "style" && el.__wxsStyleChanged) {
    el.__wxsStyleChanged = false;
    return true;
  }
  return false;
};
const patchProp = (el, key, prevValue, nextValue, namespace, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key.indexOf("change:") === 0) {
    return patchWxs(el, key, nextValue, parentComponent);
  }
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(
      el,
      key,
      nextValue,
      prevChildren,
      parentComponent,
      parentSuspense,
      unmountChildren
    );
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString(value)) {
    return false;
  }
  return key in el;
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e2) => e2.stopPropagation(),
  prevent: (e2) => e2.preventDefault(),
  self: (e2) => e2.target !== e2.currentTarget,
  ctrl: (e2) => !e2.ctrlKey,
  shift: (e2) => !e2.shiftKey,
  alt: (e2) => !e2.altKey,
  meta: (e2) => !e2.metaKey,
  left: (e2) => "button" in e2 && e2.button !== 0,
  middle: (e2) => "button" in e2 && e2.button !== 1,
  right: (e2) => "button" in e2 && e2.button !== 2,
  exact: (e2, modifiers) => systemModifiers.some((m) => e2[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers))
        return;
    }
    return fn(event, ...args);
  });
};
const rendererOptions = /* @__PURE__ */ extend$1(
  { patchProp, forcePatchProp },
  nodeOps
);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp$1 = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
/*!
  * vue-router v4.4.4
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof document !== "undefined";
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  obj.default && isRouteComponent(obj.default);
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop = () => {
};
const isArray = Array.isArray;
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash: decode(hash)
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
    return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".") {
    toSegments.push("");
  }
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base);
  return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index2 = listeners.indexOf(callback);
      if (index2 > -1)
        listeners.splice(index2, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener, {
    passive: true
  });
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history2.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor, and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(
      historyState.value.back,
      // keep back and forward entries but override current position
      to,
      historyState.value.forward,
      true
    ), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      historyState.value,
      history2.state,
      {
        forward: to,
        scroll: computeScrollPosition()
      }
    );
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    // it's overridden right after
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function createWebHashHistory(base) {
  base = location.host ? base || location.pathname + location.search : "";
  if (!base.includes("#"))
    base += "#";
  return createWebHistory(base);
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const NavigationFailureSymbol = Symbol("");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [
      90
      /* PathScore.Root */
    ];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse2(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || "";
      const key = keys[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re,
    score,
    keys,
    parse: parse2,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser, {
    record,
    parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          // we might be the child of an alias
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if (isMatchable(matcher)) {
        insertMatcher(matcher);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index2 = matchers.indexOf(matcherRef);
      if (index2 > -1) {
        matchers.splice(index2, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    const index2 = findInsertionIndex(matcher, matchers);
    matchers.splice(index2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(
        // paramsFromLocation is a new object
        paramsFromLocation(
          currentLocation.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        location2.params && paramsFromLocation(location2.params, matcher.keys.map((k) => k.name))
      );
      path = matcher.stringify(params);
    } else if (location2.path != null) {
      path = location2.path;
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  function clearRoutes() {
    matchers.length = 0;
    matcherMap.clear();
  }
  return {
    addRoute,
    resolve: resolve2,
    removeRoute,
    clearRoutes,
    getRoutes,
    getRecordMatcher
  };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    mods: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "object" ? props[name] : props;
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function findInsertionIndex(matcher, matchers) {
  let lower = 0;
  let upper = matchers.length;
  while (lower !== upper) {
    const mid = lower + upper >> 1;
    const sortOrder = comparePathParserScore(matcher, matchers[mid]);
    if (sortOrder < 0) {
      upper = mid;
    } else {
      lower = mid + 1;
    }
  }
  const insertionAncestor = getInsertionAncestor(matcher);
  if (insertionAncestor) {
    upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
  }
  return upper;
}
function getInsertionAncestor(matcher) {
  let ancestor = matcher;
  while (ancestor = ancestor.parent) {
    if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) {
      return ancestor;
    }
  }
  return;
}
function isMatchable({ record }) {
  return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery$1(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol("");
const viewDepthKey = Symbol("");
const routerKey = Symbol("");
const routeLocationKey = Symbol("");
const routerViewLocationKey = Symbol("");
function useCallbacks() {
  let handlers = [];
  function add2(handler) {
    handlers.push(handler);
    return () => {
      const i = handlers.indexOf(handler);
      if (i > -1)
        handlers.splice(i, 1);
    };
  }
  function reset() {
    handlers = [];
  }
  return {
    add: add2,
    list: () => handlers.slice(),
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
  const enterCallbackArray = record && // name is defined if record is because of the function overload
  (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve2();
      }
    };
    const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.mods[name] = resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
        }));
      }
    }
  }
  return guards;
}
function useLink(props) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => {
    const to = unref(props.to);
    return router2.resolve(to);
  });
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate2(e2 = {}) {
    if (guardEvent(e2)) {
      return router2[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate: navigate2
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(props, { attrs: attrs2, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance2, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance2;
        if (from && from !== to && instance2 && instance2 === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance2 && to && // if there is no instance but to and from are the same this might be
      // the first visit
      (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance2));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs2, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, { Component: component, route }) || component
      );
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$12 = options.parseQuery || parseQuery;
  const stringifyQuery$1$1 = options.stringifyQuery || stringifyQuery$1;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = (
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode)
  );
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$12, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if (rawLocation.path != null) {
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$12, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(targetParams)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        stringifyQuery$1$1 === stringifyQuery$1 ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      )
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$12, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
          // force empty params
          { path: newTargetLocation }
        );
        newTargetLocation.params = {};
      }
      return assign({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: newTargetLocation.path != null ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
          force,
          replace: replace2
        }),
        // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate2(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
      // navigation redirects still mark the router as ready
      isNavigationFailure(
        error,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? error : markAsReady(error)
    ) : (
      // reject any unknown error
      triggerError(error, toLocation, from)
    )).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(
          failure2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          return pushWithRedirect(
            // keep options
            assign({
              // preserve an existing replacement but allow the redirect to override it
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
              force
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn) {
    const app = installedApps.values().next().value;
    return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
  }
  function navigate2(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of enteringRecords) {
        if (record.beforeEnter) {
          if (isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(
      err,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router2.listening)
        return;
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate2(toLocation, from).catch((error) => {
        if (isNavigationFailure(
          error,
          4 | 8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        )) {
          return error;
        }
        if (isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          pushWithRedirect(
            error.to,
            toLocation
            // avoid an uncaught rejection, let push call triggerError
          ).then((failure) => {
            if (isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(
            failure,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(
            failure,
            4 | 16
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          )) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  }
  let readyHandlers = useCallbacks();
  let errorListeners = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorListeners.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve22, reject) => {
      readyHandlers.add([resolve22, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve22, reject]) => err ? reject(err) : resolve22());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior: scrollBehavior2 } = options;
    if (!isBrowser || !scrollBehavior2)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior2(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router2 = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    clearRoutes: matcher.clearRoutes,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorListeners.add,
    isReady,
    install(app) {
      const router22 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router22;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        Object.defineProperty(reactiveRoute, key, {
          get: () => currentRoute.value[key],
          enumerable: true
        });
      }
      app.provide(routerKey, router22);
      app.provide(routeLocationKey, shallowReactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router2;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute(_name) {
  return inject(routeLocationKey);
}
const isObject = (val) => val !== null && typeof val === "object";
const defaultDelimiters = ["{", "}"];
class BaseFormatter {
  constructor() {
    this._caches = /* @__PURE__ */ Object.create(null);
  }
  interpolate(message, values, delimiters = defaultDelimiters) {
    if (!values) {
      return [message];
    }
    let tokens = this._caches[message];
    if (!tokens) {
      tokens = parse(message, delimiters);
      this._caches[message] = tokens;
    }
    return compile(tokens, values);
  }
}
const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, [startDelimiter, endDelimiter]) {
  const tokens = [];
  let position = 0;
  let text = "";
  while (position < format.length) {
    let char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: "text", value: text });
      }
      text = "";
      let sub = "";
      char = format[position++];
      while (char !== void 0 && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      const isClosed = char === endDelimiter;
      const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
      tokens.push({ value: sub, type });
    } else {
      text += char;
    }
  }
  text && tokens.push({ type: "text", value: text });
  return tokens;
}
function compile(tokens, values) {
  const compiled = [];
  let index2 = 0;
  const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
  if (mode === "unknown") {
    return compiled;
  }
  while (index2 < tokens.length) {
    const token = tokens[index2];
    switch (token.type) {
      case "text":
        compiled.push(token.value);
        break;
      case "list":
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case "named":
        if (mode === "named") {
          compiled.push(values[token.value]);
        }
        break;
    }
    index2++;
  }
  return compiled;
}
const LOCALE_ZH_HANS = "zh-Hans";
const LOCALE_ZH_HANT = "zh-Hant";
const LOCALE_EN = "en";
const LOCALE_FR = "fr";
const LOCALE_ES = "es";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
  return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale(locale2, messages) {
  if (!locale2) {
    return;
  }
  locale2 = locale2.trim().replace(/_/g, "-");
  if (messages && messages[locale2]) {
    return locale2;
  }
  locale2 = locale2.toLowerCase();
  if (locale2 === "chinese") {
    return LOCALE_ZH_HANS;
  }
  if (locale2.indexOf("zh") === 0) {
    if (locale2.indexOf("-hans") > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale2.indexOf("-hant") > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale2, ["-tw", "-hk", "-mo", "-cht"])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  let locales2 = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales2 = Object.keys(messages);
  }
  const lang = startsWith(locale2, locales2);
  if (lang) {
    return lang;
  }
}
class I18n {
  constructor({ locale: locale2, fallbackLocale: fallbackLocale2, messages, watcher, formater: formater2 }) {
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale2) {
      this.fallbackLocale = fallbackLocale2;
    }
    this.formater = formater2 || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale2 || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  setLocale(locale2) {
    const oldLocale = this.locale;
    this.locale = normalizeLocale(locale2, this.messages) || this.fallbackLocale;
    if (!this.messages[this.locale]) {
      this.messages[this.locale] = {};
    }
    this.message = this.messages[this.locale];
    if (oldLocale !== this.locale) {
      this.watchers.forEach((watcher) => {
        watcher(this.locale, oldLocale);
      });
    }
  }
  getLocale() {
    return this.locale;
  }
  watchLocale(fn) {
    const index2 = this.watchers.push(fn) - 1;
    return () => {
      this.watchers.splice(index2, 1);
    };
  }
  add(locale2, message, override = true) {
    const curMessages = this.messages[locale2];
    if (curMessages) {
      if (override) {
        Object.assign(curMessages, message);
      } else {
        Object.keys(message).forEach((key) => {
          if (!hasOwn(curMessages, key)) {
            curMessages[key] = message[key];
          }
        });
      }
    } else {
      this.messages[locale2] = message;
    }
  }
  f(message, values, delimiters) {
    return this.formater.interpolate(message, values, delimiters).join("");
  }
  t(key, locale2, values) {
    let message = this.message;
    if (typeof locale2 === "string") {
      locale2 = normalizeLocale(locale2, this.messages);
      locale2 && (message = this.messages[locale2]);
    } else {
      values = locale2;
    }
    if (!hasOwn(message, key)) {
      console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
      return key;
    }
    return this.formater.interpolate(message[key], values).join("");
  }
}
function watchAppLocale(appVm2, i18n2) {
  if (appVm2.$watchLocale) {
    appVm2.$watchLocale((newLocale) => {
      i18n2.setLocale(newLocale);
    });
  } else {
    appVm2.$watch(() => appVm2.$locale, (newLocale) => {
      i18n2.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== "undefined" && getLocale) {
    return getLocale();
  }
  if (typeof global !== "undefined" && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale2, messages = {}, fallbackLocale2, watcher) {
  if (typeof locale2 !== "string") {
    const options = [
      messages,
      locale2
    ];
    locale2 = options[0];
    messages = options[1];
  }
  if (typeof locale2 !== "string") {
    locale2 = getDefaultLocale();
  }
  if (typeof fallbackLocale2 !== "string") {
    fallbackLocale2 = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  const i18n2 = new I18n({
    locale: locale2,
    fallbackLocale: fallbackLocale2,
    messages,
    watcher
  });
  let t2 = (key, values) => {
    if (typeof getApp$1 !== "function") {
      t2 = function(key2, values2) {
        return i18n2.t(key2, values2);
      };
    } else {
      let isWatchedAppLocale = false;
      t2 = function(key2, values2) {
        const appVm2 = getApp$1().$vm;
        if (appVm2) {
          appVm2.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm2, i18n2);
          }
        }
        return i18n2.t(key2, values2);
      };
    }
    return t2(key, values);
  };
  return {
    i18n: i18n2,
    f(message, values, delimiters) {
      return i18n2.f(message, values, delimiters);
    },
    t(key, values) {
      return t2(key, values);
    },
    add(locale22, message, override = true) {
      return i18n2.add(locale22, message, override);
    },
    watch(fn) {
      return i18n2.watchLocale(fn);
    },
    getLocale() {
      return i18n2.getLocale();
    },
    setLocale(newLocale) {
      return i18n2.setLocale(newLocale);
    }
  };
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const isEnableLocale = /* @__PURE__ */ once(
  () => typeof __uniConfig !== "undefined" && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length
);
let i18n;
function useI18n() {
  if (!i18n) {
    let locale2;
    {
      {
        locale2 = navigator.cookieEnabled && window.localStorage && localStorage[UNI_STORAGE_LOCALE] || __uniConfig.locale || navigator.language;
      }
    }
    i18n = initVueI18n(locale2);
    if (isEnableLocale()) {
      const localeKeys = Object.keys(__uniConfig.locales || {});
      if (localeKeys.length) {
        localeKeys.forEach(
          (locale22) => i18n.add(locale22, __uniConfig.locales[locale22])
        );
      }
      i18n.setLocale(locale2);
    }
  }
  return i18n;
}
function normalizeMessages(module, keys, values) {
  return keys.reduce((res, name, index2) => {
    res[module + name] = values[index2];
    return res;
  }, {});
}
const initI18nAsyncMsgsOnce = /* @__PURE__ */ once(() => {
  const name = "uni.async.";
  const keys = ["error"];
  {
    useI18n().add(
      LOCALE_EN,
      normalizeMessages(name, keys, [
        "The connection timed out, click the screen to try again."
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ES,
      normalizeMessages(name, keys, [
        "Se agotó el tiempo de conexión, haga clic en la pantalla para volver a intentarlo."
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_FR,
      normalizeMessages(name, keys, [
        "La connexion a expiré, cliquez sur l'écran pour réessayer."
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANS,
      normalizeMessages(name, keys, ["连接服务器超时，点击屏幕重试"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANT,
      normalizeMessages(name, keys, ["連接服務器超時，點擊屏幕重試"]),
      false
    );
  }
});
const initI18nShowToastMsgsOnce = /* @__PURE__ */ once(() => {
  const name = "uni.showToast.";
  const keys = ["unpaired"];
  {
    useI18n().add(
      LOCALE_EN,
      normalizeMessages(name, keys, [
        "Please note showToast must be paired with hideToast"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ES,
      normalizeMessages(name, keys, [
        "Tenga en cuenta que showToast debe estar emparejado con hideToast"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_FR,
      normalizeMessages(name, keys, [
        "Veuillez noter que showToast doit être associé à hideToast"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANS,
      normalizeMessages(name, keys, [
        "请注意 showToast 与 hideToast 必须配对使用"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANT,
      normalizeMessages(name, keys, [
        "請注意 showToast 與 hideToast 必須配對使用"
      ]),
      false
    );
  }
});
const initI18nShowLoadingMsgsOnce = /* @__PURE__ */ once(() => {
  const name = "uni.showLoading.";
  const keys = ["unpaired"];
  {
    useI18n().add(
      LOCALE_EN,
      normalizeMessages(name, keys, [
        "Please note showLoading must be paired with hideLoading"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ES,
      normalizeMessages(name, keys, [
        "Tenga en cuenta que showLoading debe estar emparejado con hideLoading"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_FR,
      normalizeMessages(name, keys, [
        "Veuillez noter que showLoading doit être associé à hideLoading"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANS,
      normalizeMessages(name, keys, [
        "请注意 showLoading 与 hideLoading 必须配对使用"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANT,
      normalizeMessages(name, keys, [
        "請注意 showLoading 與 hideLoading 必須配對使用"
      ]),
      false
    );
  }
});
const initI18nChooseFileMsgsOnce = /* @__PURE__ */ once(() => {
  const name = "uni.chooseFile.";
  const keys = ["notUserActivation"];
  {
    useI18n().add(
      LOCALE_EN,
      normalizeMessages(name, keys, [
        "File chooser dialog can only be shown with a user activation"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ES,
      normalizeMessages(name, keys, [
        "El cuadro de diálogo del selector de archivos solo se puede mostrar con la activación del usuario"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_FR,
      normalizeMessages(name, keys, [
        "La boîte de dialogue du sélecteur de fichier ne peut être affichée qu'avec une activation par l'utilisateur"
      ]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANS,
      normalizeMessages(name, keys, ["文件选择器对话框只能在由用户激活时显示"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANT,
      normalizeMessages(name, keys, ["文件選擇器對話框只能在由用戶激活時顯示"]),
      false
    );
  }
});
const initI18nVideoMsgsOnce = /* @__PURE__ */ once(() => {
  const name = "uni.video.";
  const keys = ["danmu", "volume"];
  {
    useI18n().add(
      LOCALE_EN,
      normalizeMessages(name, keys, ["Danmu", "Volume"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ES,
      normalizeMessages(name, keys, ["Danmu", "Volumen"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_FR,
      normalizeMessages(name, keys, ["Danmu", "Le Volume"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANS,
      normalizeMessages(name, keys, ["弹幕", "音量"]),
      false
    );
  }
  {
    useI18n().add(
      LOCALE_ZH_HANT,
      normalizeMessages(name, keys, ["彈幕", "音量"]),
      false
    );
  }
});
function initBridge(subscribeNamespace) {
  const emitter = new E$1();
  return {
    on(event, callback) {
      return emitter.on(event, callback);
    },
    once(event, callback) {
      return emitter.once(event, callback);
    },
    off(event, callback) {
      return emitter.off(event, callback);
    },
    emit(event, ...args) {
      return emitter.emit(event, ...args);
    },
    subscribe(event, callback, once2 = false) {
      emitter[once2 ? "once" : "on"](`${subscribeNamespace}.${event}`, callback);
    },
    unsubscribe(event, callback) {
      emitter.off(`${subscribeNamespace}.${event}`, callback);
    },
    subscribeHandler(event, args, pageId) {
      emitter.emit(`${subscribeNamespace}.${event}`, args, pageId);
    }
  };
}
const INVOKE_VIEW_API = "invokeViewApi";
const INVOKE_SERVICE_API = "invokeServiceApi";
let invokeServiceMethodId = 1;
const invokeServiceMethod = (name, args, callback) => {
  const { subscribe, publishHandler } = UniViewJSBridge$1;
  const id2 = callback ? invokeServiceMethodId++ : 0;
  callback && subscribe(INVOKE_SERVICE_API + "." + id2, callback, true);
  publishHandler(INVOKE_SERVICE_API, { id: id2, name, args });
};
const viewMethods = /* @__PURE__ */ Object.create(null);
function normalizeViewMethodName(pageId, name) {
  return pageId + "." + name;
}
function subscribeViewMethod(pageId, wrapper2) {
  UniViewJSBridge$1.subscribe(
    normalizeViewMethodName(pageId, INVOKE_VIEW_API),
    onInvokeViewMethod
  );
}
function unsubscribeViewMethod(pageId) {
  UniViewJSBridge$1.unsubscribe(normalizeViewMethodName(pageId, INVOKE_VIEW_API));
  Object.keys(viewMethods).forEach((name) => {
    if (name.indexOf(pageId + ".") === 0) {
      delete viewMethods[name];
    }
  });
}
function registerViewMethod(pageId, name, fn) {
  name = normalizeViewMethodName(pageId, name);
  if (!viewMethods[name]) {
    viewMethods[name] = fn;
  }
}
function unregisterViewMethod(pageId, name) {
  name = normalizeViewMethodName(pageId, name);
  delete viewMethods[name];
}
function onInvokeViewMethod({
  id: id2,
  name,
  args
}, pageId) {
  name = normalizeViewMethodName(pageId, name);
  const publish = (res) => {
    id2 && UniViewJSBridge$1.publishHandler(INVOKE_VIEW_API + "." + id2, res);
  };
  const handler = viewMethods[name];
  if (handler) {
    handler(args, publish);
  } else {
    publish({});
  }
}
const ViewJSBridge = /* @__PURE__ */ extend$1(
  /* @__PURE__ */ initBridge("service"),
  {
    invokeServiceMethod
  }
);
const LONGPRESS_TIMEOUT = 350;
const LONGPRESS_THRESHOLD = 10;
const passiveOptions$3 = /* @__PURE__ */ passive(true);
let longPressTimer;
function clearLongPressTimer() {
  if (longPressTimer) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }
}
let startPageX = 0;
let startPageY = 0;
function touchstart(evt) {
  clearLongPressTimer();
  if (evt.touches.length !== 1) {
    return;
  }
  const { pageX, pageY } = evt.touches[0];
  startPageX = pageX;
  startPageY = pageY;
  longPressTimer = setTimeout(function() {
    const customEvent = new CustomEvent("longpress", {
      bubbles: true,
      cancelable: true,
      // @ts-expect-error
      target: evt.target,
      currentTarget: evt.currentTarget
    });
    customEvent.touches = evt.touches;
    customEvent.changedTouches = evt.changedTouches;
    evt.target.dispatchEvent(customEvent);
  }, LONGPRESS_TIMEOUT);
}
function touchmove(evt) {
  if (!longPressTimer) {
    return;
  }
  if (evt.touches.length !== 1) {
    return clearLongPressTimer();
  }
  const { pageX, pageY } = evt.touches[0];
  if (Math.abs(pageX - startPageX) > LONGPRESS_THRESHOLD || Math.abs(pageY - startPageY) > LONGPRESS_THRESHOLD) {
    return clearLongPressTimer();
  }
}
function initLongPress() {
  window.addEventListener("touchstart", touchstart, passiveOptions$3);
  window.addEventListener("touchmove", touchmove, passiveOptions$3);
  window.addEventListener("touchend", clearLongPressTimer, passiveOptions$3);
  window.addEventListener("touchcancel", clearLongPressTimer, passiveOptions$3);
}
function checkValue$1(value, defaultValue) {
  const newValue = Number(value);
  return isNaN(newValue) ? defaultValue : newValue;
}
const isApple$1 = () => /^Apple/.test(navigator.vendor);
function getWindowWidth$1() {
  const isApple2 = /^Apple/.test(navigator.vendor);
  const screenFix = isApple2 && window.matchMedia("(orientation:landscape)").matches;
  var screenWidth = screenFix ? Math.max(screen.width, screen.height) : screen.width;
  var windowWidth = isApple2 ? Math.min(
    window.innerWidth,
    document.documentElement.clientWidth,
    screenWidth
  ) || screenWidth : Math.min(window.innerWidth, document.documentElement.clientWidth);
  return windowWidth;
}
function useRem() {
  const config = __uniConfig.globalStyle || {};
  const maxWidth2 = checkValue$1(config.rpxCalcMaxDeviceWidth, 960);
  const baseWidth2 = checkValue$1(config.rpxCalcBaseDeviceWidth, 375);
  function updateRem() {
    let width = getWindowWidth$1();
    width = width <= maxWidth2 ? width : baseWidth2;
    document.documentElement.style.fontSize = width / 23.4375 + "px";
  }
  updateRem();
  document.addEventListener("DOMContentLoaded", updateRem);
  window.addEventListener("load", updateRem);
  window.addEventListener("resize", updateRem);
  if (isApple$1()) {
    window.addEventListener("orientationchange", () => {
      updateRem();
      setTimeout(updateRem, 50);
    });
  }
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var attrs = ["top", "left", "right", "bottom"];
var inited$1;
var elementComputedStyle = {};
var support;
function getSupport() {
  if (!("CSS" in window) || typeof CSS.supports != "function") {
    support = "";
  } else if (CSS.supports("top: env(safe-area-inset-top)")) {
    support = "env";
  } else if (CSS.supports("top: constant(safe-area-inset-top)")) {
    support = "constant";
  } else {
    support = "";
  }
  return support;
}
function init() {
  support = typeof support === "string" ? support : getSupport();
  if (!support) {
    attrs.forEach(function(attr2) {
      elementComputedStyle[attr2] = 0;
    });
    return;
  }
  function setStyle2(el, style) {
    var elStyle = el.style;
    Object.keys(style).forEach(function(key) {
      var val = style[key];
      elStyle[key] = val;
    });
  }
  var cbs = [];
  function parentReady(callback) {
    if (callback) {
      cbs.push(callback);
    } else {
      cbs.forEach(function(cb) {
        cb();
      });
    }
  }
  var passiveEvents = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function() {
        passiveEvents = { passive: true };
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e2) {
  }
  function addChild(parent, attr2) {
    var a1 = document.createElement("div");
    var a2 = document.createElement("div");
    var a1Children = document.createElement("div");
    var a2Children = document.createElement("div");
    var W = 100;
    var MAX = 1e4;
    var aStyle = {
      position: "absolute",
      width: W + "px",
      height: "200px",
      boxSizing: "border-box",
      overflow: "hidden",
      paddingBottom: support + "(safe-area-inset-" + attr2 + ")"
    };
    setStyle2(a1, aStyle);
    setStyle2(a2, aStyle);
    setStyle2(a1Children, {
      transition: "0s",
      animation: "none",
      width: "400px",
      height: "400px"
    });
    setStyle2(a2Children, {
      transition: "0s",
      animation: "none",
      width: "250%",
      height: "250%"
    });
    a1.appendChild(a1Children);
    a2.appendChild(a2Children);
    parent.appendChild(a1);
    parent.appendChild(a2);
    parentReady(function() {
      a1.scrollTop = a2.scrollTop = MAX;
      var a1LastScrollTop = a1.scrollTop;
      var a2LastScrollTop = a2.scrollTop;
      function onScroll() {
        if (this.scrollTop === (this === a1 ? a1LastScrollTop : a2LastScrollTop)) {
          return;
        }
        a1.scrollTop = a2.scrollTop = MAX;
        a1LastScrollTop = a1.scrollTop;
        a2LastScrollTop = a2.scrollTop;
        attrChange(attr2);
      }
      a1.addEventListener("scroll", onScroll, passiveEvents);
      a2.addEventListener("scroll", onScroll, passiveEvents);
    });
    var computedStyle = getComputedStyle(a1);
    Object.defineProperty(elementComputedStyle, attr2, {
      configurable: true,
      get: function() {
        return parseFloat(computedStyle.paddingBottom);
      }
    });
  }
  var parentDiv = document.createElement("div");
  setStyle2(parentDiv, {
    position: "absolute",
    left: "0",
    top: "0",
    width: "0",
    height: "0",
    zIndex: "-1",
    overflow: "hidden",
    visibility: "hidden"
  });
  attrs.forEach(function(key) {
    addChild(parentDiv, key);
  });
  document.body.appendChild(parentDiv);
  parentReady();
  inited$1 = true;
}
function getAttr(attr2) {
  if (!inited$1) {
    init();
  }
  return elementComputedStyle[attr2];
}
var changeAttrs = [];
function attrChange(attr2) {
  if (!changeAttrs.length) {
    setTimeout(function() {
      var style = {};
      changeAttrs.forEach(function(attr3) {
        style[attr3] = elementComputedStyle[attr3];
      });
      changeAttrs.length = 0;
      callbacks.forEach(function(callback) {
        callback(style);
      });
    }, 0);
  }
  changeAttrs.push(attr2);
}
var callbacks = [];
function onChange(callback) {
  if (!getSupport()) {
    return;
  }
  if (!inited$1) {
    init();
  }
  if (typeof callback === "function") {
    callbacks.push(callback);
  }
}
function offChange(callback) {
  var index2 = callbacks.indexOf(callback);
  if (index2 >= 0) {
    callbacks.splice(index2, 1);
  }
}
var safeAreaInsets = {
  get support() {
    return (typeof support === "string" ? support : getSupport()).length != 0;
  },
  get top() {
    return getAttr("top");
  },
  get left() {
    return getAttr("left");
  },
  get right() {
    return getAttr("right");
  },
  get bottom() {
    return getAttr("bottom");
  },
  onChange,
  offChange
};
var out = safeAreaInsets;
const safeAreaInsets$1 = /* @__PURE__ */ getDefaultExportFromCjs(out);
const onEventPrevent = /* @__PURE__ */ withModifiers(() => {
}, ["prevent"]);
function getWindowOffsetCssVar(style, name) {
  return parseInt((style.getPropertyValue(name).match(/\d+/) || ["0"])[0]);
}
function getWindowTop() {
  const style = document.documentElement.style;
  const top = getWindowOffsetCssVar(style, "--window-top");
  return top ? top + safeAreaInsets$1.top : 0;
}
function getWindowOffset() {
  const style = document.documentElement.style;
  const top = getWindowTop();
  const bottom = getWindowOffsetCssVar(style, "--window-bottom");
  const left = getWindowOffsetCssVar(style, "--window-left");
  const right = getWindowOffsetCssVar(style, "--window-right");
  const topWindowHeight = getWindowOffsetCssVar(style, "--top-window-height");
  return {
    top,
    bottom: bottom ? bottom + safeAreaInsets$1.bottom : 0,
    left: left ? left + safeAreaInsets$1.left : 0,
    right: right ? right + safeAreaInsets$1.right : 0,
    topWindowHeight: topWindowHeight || 0
  };
}
function updateCssVar(cssVars) {
  const style = document.documentElement.style;
  Object.keys(cssVars).forEach((name) => {
    style.setProperty(name, cssVars[name]);
  });
}
function updatePageCssVar(cssVars) {
  return updateCssVar(cssVars);
}
function PolySymbol(name) {
  return Symbol(name);
}
function hasRpx(str) {
  str = str + "";
  return str.indexOf("rpx") !== -1 || str.indexOf("upx") !== -1;
}
function rpx2px(str, replace = false) {
  if (replace) {
    return rpx2pxWithReplace(str);
  }
  if (isString(str)) {
    const res = parseInt(str) || 0;
    if (hasRpx(str)) {
      return upx2px(res);
    }
    return res;
  }
  return str;
}
function rpx2pxWithReplace(str) {
  if (!hasRpx(str)) {
    return str;
  }
  return str.replace(/(\d+(\.\d+)?)[ru]px/g, (_a, b) => {
    return upx2px(parseFloat(b)) + "px";
  });
}
function get$pageByPage(page) {
  return page.$page;
}
function isBuiltInElement(target) {
  return target.tagName.indexOf("UNI-") === 0;
}
const ICON_PATH_SEARCH = "M20.928 22.688q-1.696 1.376-3.744 2.112-2.112 0.768-4.384 0.768-3.488 0-6.464-1.728-2.88-1.696-4.576-4.608-1.76-2.976-1.76-6.464t1.76-6.464q1.696-2.88 4.576-4.576 2.976-1.76 6.464-1.76t6.464 1.76q2.912 1.696 4.608 4.576 1.728 2.976 1.728 6.464 0 2.272-0.768 4.384-0.736 2.048-2.112 3.744l9.312 9.28-1.824 1.824-9.28-9.312zM12.8 23.008q2.784 0 5.184-1.376 2.304-1.376 3.68-3.68 1.376-2.4 1.376-5.184t-1.376-5.152q-1.376-2.336-3.68-3.68-2.4-1.408-5.184-1.408t-5.152 1.408q-2.336 1.344-3.68 3.68-1.408 2.368-1.408 5.152t1.408 5.184q1.344 2.304 3.68 3.68 2.368 1.376 5.152 1.376zM12.8 23.008v0z";
const ICON_PATH_SUCCESS_NO_CIRCLE = "M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z";
const ICON_PATH_WARN = "M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM15.136 8.672h1.728q0.128 0 0.224 0.096t0.096 0.256l-0.384 10.24q0 0.064-0.048 0.112t-0.112 0.048h-1.248q-0.096 0-0.144-0.048t-0.048-0.112l-0.384-10.24q0-0.16 0.096-0.256t0.224-0.096zM16 23.328q-0.48 0-0.832-0.352t-0.352-0.848 0.352-0.848 0.832-0.352 0.832 0.352 0.352 0.848-0.352 0.848-0.832 0.352z";
const ICON_PATH_BACK = "M21.781 7.844l-9.063 8.594 9.063 8.594q0.25 0.25 0.25 0.609t-0.25 0.578q-0.25 0.25-0.578 0.25t-0.578-0.25l-9.625-9.125q-0.156-0.125-0.203-0.297t-0.047-0.359q0-0.156 0.047-0.328t0.203-0.297l9.625-9.125q0.25-0.25 0.578-0.25t0.578 0.25q0.25 0.219 0.25 0.578t-0.25 0.578z";
const ICON_PATH_CLOSE = "M17.25 16.156l7.375-7.313q0.281-0.281 0.281-0.641t-0.281-0.641q-0.25-0.25-0.625-0.25t-0.625 0.25l-7.375 7.344-7.313-7.344q-0.25-0.25-0.625-0.25t-0.625 0.25q-0.281 0.25-0.281 0.625t0.281 0.625l7.313 7.344-7.375 7.344q-0.281 0.25-0.281 0.625t0.281 0.625q0.125 0.125 0.281 0.188t0.344 0.063q0.156 0 0.328-0.063t0.297-0.188l7.375-7.344 7.375 7.406q0.125 0.156 0.297 0.219t0.328 0.063q0.188 0 0.344-0.078t0.281-0.203q0.281-0.25 0.281-0.609t-0.281-0.641l-7.375-7.406z";
function createSvgIconVNode(path, color = "#000", size2 = 27) {
  return createVNode(
    "svg",
    {
      width: size2,
      height: size2,
      viewBox: "0 0 32 32"
    },
    [
      createVNode(
        "path",
        {
          d: path,
          fill: color
        },
        null,
        8,
        ["d", "fill"]
      )
    ],
    8,
    ["width", "height"]
  );
}
function useCurrentPageId() {
  {
    const { $pageInstance } = getCurrentInstance();
    return $pageInstance && getPageProxyId($pageInstance.proxy);
  }
}
function getCurrentPage() {
  const pages = getCurrentPages$1();
  const len = pages.length;
  if (len) {
    return pages[len - 1];
  }
}
function getCurrentPageMeta() {
  var _a;
  const $page = (_a = getCurrentPage()) == null ? void 0 : _a.$page;
  if ($page) {
    return $page.meta;
  }
}
function getCurrentPageId() {
  const meta = getCurrentPageMeta();
  if (meta) {
    return meta.id;
  }
  return -1;
}
function getCurrentPageVm() {
  const page = getCurrentPage();
  if (page) {
    return page.$vm;
  }
}
const PAGE_META_KEYS = ["navigationBar", "pullToRefresh"];
function initGlobalStyle() {
  return JSON.parse(JSON.stringify(__uniConfig.globalStyle || {}));
}
function initRouteMeta(pageMeta, id2) {
  const globalStyle = initGlobalStyle();
  const res = extend$1({ id: id2 }, globalStyle, pageMeta);
  PAGE_META_KEYS.forEach((name) => {
    res[name] = extend$1({}, globalStyle[name], pageMeta[name]);
  });
  const { navigationBar } = res;
  navigationBar.titleText && navigationBar.titleImage && (navigationBar.titleText = "");
  return res;
}
function initPageInternalInstance(openType, url, pageQuery, meta, eventChannel, themeMode) {
  const { id: id2, route } = meta;
  const titleColor = normalizeStyles(
    meta.navigationBar,
    __uniConfig.themeConfig,
    themeMode
  ).titleColor;
  return {
    id: id2,
    path: addLeadingSlash(route),
    route,
    fullPath: url,
    options: pageQuery,
    meta,
    openType,
    eventChannel,
    statusBarStyle: titleColor === "#ffffff" ? "light" : "dark"
  };
}
function getPageProxyId(proxy) {
  var _a, _b;
  return ((_a = proxy.$page) == null ? void 0 : _a.id) || ((_b = proxy.$basePage) == null ? void 0 : _b.id);
}
function invokeHook(vm, name, args) {
  if (isString(vm)) {
    args = name;
    name = vm;
    vm = getCurrentPageVm();
  } else if (typeof vm === "number") {
    const page = getCurrentPages$1().find(
      (page2) => get$pageByPage(page2).id === vm
    );
    if (page) {
      vm = page.$vm;
    } else {
      vm = getCurrentPageVm();
    }
  }
  if (!vm) {
    return;
  }
  const hooks = vm.$[name];
  if (name === ON_BACK_PRESS) {
    return hooks && invokeArrayFnsWithResults(hooks, args).some((ret) => ret === true);
  }
  return hooks && invokeArrayFns(hooks, args);
}
function disableScrollListener(evt) {
  evt.preventDefault();
}
let testReachBottomTimer;
let lastScrollHeight = 0;
function createScrollListener({
  onPageScroll,
  onReachBottom,
  onReachBottomDistance
}) {
  let ticking = false;
  let hasReachBottom = false;
  let reachBottomLocking = true;
  const isReachBottom = () => {
    const { scrollHeight } = document.documentElement;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const isBottom = scrollY > 0 && scrollHeight > windowHeight && scrollY + windowHeight + onReachBottomDistance >= scrollHeight;
    const heightChanged = Math.abs(scrollHeight - lastScrollHeight) > onReachBottomDistance;
    if (isBottom && (!hasReachBottom || heightChanged)) {
      lastScrollHeight = scrollHeight;
      hasReachBottom = true;
      return true;
    }
    if (!isBottom && hasReachBottom) {
      hasReachBottom = false;
    }
    return false;
  };
  const trigger2 = () => {
    onPageScroll && onPageScroll(window.pageYOffset);
    function testReachBottom() {
      if (isReachBottom()) {
        onReachBottom && onReachBottom();
        reachBottomLocking = false;
        setTimeout(function() {
          reachBottomLocking = true;
        }, 350);
        return true;
      }
    }
    if (onReachBottom && reachBottomLocking) {
      if (testReachBottom())
        ;
      else {
        testReachBottomTimer = setTimeout(testReachBottom, 300);
      }
    }
    ticking = false;
  };
  return function onScroll() {
    clearTimeout(testReachBottomTimer);
    if (!ticking) {
      requestAnimationFrame(trigger2);
    }
    ticking = true;
  };
}
function normalizeRoute(toRoute) {
  if (toRoute.indexOf("/") === 0 || toRoute.indexOf("uni:") === 0) {
    return toRoute;
  }
  let fromRoute = "";
  const pages = getCurrentPages$1();
  if (pages.length) {
    fromRoute = get$pageByPage(pages[pages.length - 1]).route;
  }
  return getRealRoute(fromRoute, toRoute);
}
function getRealRoute(fromRoute, toRoute) {
  if (toRoute.indexOf("/") === 0) {
    return toRoute;
  }
  if (toRoute.indexOf("./") === 0) {
    return getRealRoute(fromRoute, toRoute.slice(2));
  }
  const toRouteArray = toRoute.split("/");
  const toRouteLength = toRouteArray.length;
  let i = 0;
  for (; i < toRouteLength && toRouteArray[i] === ".."; i++) {
  }
  toRouteArray.splice(0, i);
  toRoute = toRouteArray.join("/");
  const fromRouteArray = fromRoute.length > 0 ? fromRoute.split("/") : [];
  fromRouteArray.splice(fromRouteArray.length - i - 1, i + 1);
  return addLeadingSlash(fromRouteArray.concat(toRouteArray).join("/"));
}
function getRouteOptions(path, alias = false) {
  if (alias) {
    return __uniRoutes.find(
      (route) => route.path === path || route.alias === path
    );
  }
  return __uniRoutes.find((route) => route.path === path);
}
function getPageInstanceByChild(child) {
  var _a;
  let pageInstance = child;
  while (pageInstance && ((_a = pageInstance.type) == null ? void 0 : _a.name) !== "Page") {
    pageInstance = pageInstance.parent;
  }
  return pageInstance;
}
function initView() {
  useRem();
  initCustomDatasetOnce(isBuiltInElement);
  {
    initLongPress();
  }
}
class ComponentDescriptor {
  constructor(vm) {
    this.$bindClass = false;
    this.$bindStyle = false;
    this.$vm = vm;
    {
      this.$el = resolveOwnerEl(vm.$);
    }
    if (this.$el.getAttribute) {
      this.$bindClass = !!this.$el.getAttribute("class");
      this.$bindStyle = !!this.$el.getAttribute("style");
    }
  }
  selectComponent(selector) {
    if (!this.$el || !selector) {
      return;
    }
    const wxsVm = getWxsVm(this.$el.querySelector(selector));
    if (!wxsVm) {
      return;
    }
    return createComponentDescriptor(wxsVm, false);
  }
  selectAllComponents(selector) {
    if (!this.$el || !selector) {
      return [];
    }
    const descriptors = [];
    const els = this.$el.querySelectorAll(selector);
    for (let i = 0; i < els.length; i++) {
      const wxsVm = getWxsVm(els[i]);
      if (wxsVm) {
        descriptors.push(createComponentDescriptor(wxsVm, false));
      }
    }
    return descriptors;
  }
  forceUpdate(type) {
    if (type === "class") {
      if (this.$bindClass) {
        this.$el.__wxsClassChanged = true;
        this.$vm.$forceUpdate();
      } else {
        this.updateWxsClass();
      }
    } else if (type === "style") {
      if (this.$bindStyle) {
        this.$el.__wxsStyleChanged = true;
        this.$vm.$forceUpdate();
      } else {
        this.updateWxsStyle();
      }
    }
  }
  updateWxsClass() {
    const { __wxsAddClass } = this.$el;
    if (__wxsAddClass.length) {
      this.$el.className = __wxsAddClass.join(" ");
    }
  }
  updateWxsStyle() {
    const { __wxsStyle } = this.$el;
    if (__wxsStyle) {
      this.$el.setAttribute("style", stringifyStyle(__wxsStyle));
    }
  }
  setStyle(style) {
    if (!this.$el || !style) {
      return this;
    }
    if (isString(style)) {
      style = parseStringStyle(style);
    }
    if (isPlainObject(style)) {
      this.$el.__wxsStyle = style;
      this.forceUpdate("style");
    }
    return this;
  }
  addClass(clazz) {
    if (!this.$el || !clazz) {
      return this;
    }
    const __wxsAddClass = this.$el.__wxsAddClass || (this.$el.__wxsAddClass = []);
    if (__wxsAddClass.indexOf(clazz) === -1) {
      __wxsAddClass.push(clazz);
      this.forceUpdate("class");
    }
    return this;
  }
  removeClass(clazz) {
    if (!this.$el || !clazz) {
      return this;
    }
    const { __wxsAddClass } = this.$el;
    if (__wxsAddClass) {
      const index2 = __wxsAddClass.indexOf(clazz);
      if (index2 > -1) {
        __wxsAddClass.splice(index2, 1);
      }
    }
    const __wxsRemoveClass = this.$el.__wxsRemoveClass || (this.$el.__wxsRemoveClass = []);
    if (__wxsRemoveClass.indexOf(clazz) === -1) {
      __wxsRemoveClass.push(clazz);
      this.forceUpdate("class");
    }
    return this;
  }
  hasClass(cls) {
    return this.$el && this.$el.classList.contains(cls);
  }
  getDataset() {
    return this.$el && this.$el.dataset;
  }
  callMethod(funcName, args = {}) {
    const func = this.$vm[funcName];
    if (isFunction(func)) {
      func(JSON.parse(JSON.stringify(args)));
    } else if (this.$vm.ownerId) {
      UniViewJSBridge$1.publishHandler(ON_WXS_INVOKE_CALL_METHOD, {
        nodeId: this.$el.__id,
        ownerId: this.$vm.ownerId,
        method: funcName,
        args
      });
    }
  }
  requestAnimationFrame(callback) {
    return window.requestAnimationFrame(callback);
  }
  getState() {
    return this.$el && (this.$el.__wxsState || (this.$el.__wxsState = {}));
  }
  triggerEvent(eventName, detail = {}) {
    return this.$vm.$emit(eventName, detail), this;
  }
  getComputedStyle(names) {
    if (this.$el) {
      const styles = window.getComputedStyle(this.$el);
      if (names && names.length) {
        return names.reduce((res, n) => {
          res[n] = styles[n];
          return res;
        }, {});
      }
      return styles;
    }
    return {};
  }
  setTimeout(handler, timeout) {
    return window.setTimeout(handler, timeout);
  }
  clearTimeout(handle) {
    return window.clearTimeout(handle);
  }
  getBoundingClientRect() {
    return this.$el.getBoundingClientRect();
  }
}
function createComponentDescriptor(vm, isOwnerInstance = true) {
  {
    if (isOwnerInstance && vm) {
      vm = resolveOwnerVm(vm.$);
    }
  }
  if (vm && vm.$el) {
    if (!vm.$el.__wxsComponentDescriptor) {
      vm.$el.__wxsComponentDescriptor = new ComponentDescriptor(vm);
    }
    return vm.$el.__wxsComponentDescriptor;
  }
}
function getComponentDescriptor(instance2, isOwnerInstance) {
  return createComponentDescriptor(instance2, isOwnerInstance);
}
function resolveOwnerComponentPublicInstance(eventValue, instance2, checkArgsLength = true) {
  if (!instance2) {
    return false;
  }
  if (checkArgsLength && eventValue.length < 2) {
    return false;
  }
  const ownerVm = resolveOwnerVm(instance2);
  if (!ownerVm) {
    return false;
  }
  const type = ownerVm.$.type;
  if (!type.$wxs && !type.$renderjs) {
    return false;
  }
  return ownerVm;
}
function wrapperH5WxsEvent(event, eventValue, instance2, checkArgsLength = true) {
  if (eventValue) {
    if (!event.__instance) {
      event.__instance = true;
      Object.defineProperty(event, "instance", {
        get() {
          return getComponentDescriptor(instance2.proxy, false);
        }
      });
    }
    const ownerVm = resolveOwnerComponentPublicInstance(
      eventValue,
      instance2,
      checkArgsLength
    );
    if (ownerVm) {
      return [event, getComponentDescriptor(ownerVm, false)];
    }
  }
}
function getWxsVm(el) {
  if (!el) {
    return;
  }
  {
    return el.__vueParentComponent && el.__vueParentComponent.proxy;
  }
}
const isKeyboardEvent = (val) => !val.type.indexOf("key") && val instanceof KeyboardEvent;
const isClickEvent = (val) => val.type === "click";
const isMouseEvent = (val) => val.type.indexOf("mouse") === 0 || ["contextmenu"].includes(val.type);
const isTouchEvent = (val) => typeof TouchEvent !== "undefined" && val instanceof TouchEvent || val.type.indexOf("touch") === 0 || ["longpress"].indexOf(val.type) >= 0;
function $nne(evt, eventValue, instance2) {
  const { currentTarget } = evt;
  if (!(evt instanceof Event) || !(currentTarget instanceof HTMLElement)) {
    return [evt];
  }
  const isHTMLTarget = !isBuiltInElement(currentTarget);
  {
    if (isHTMLTarget) {
      return wrapperH5WxsEvent(
        evt,
        eventValue,
        instance2,
        false
        // 原生标签事件可能被cache，参数长度不准确，故默认不校验
      ) || [evt];
    }
  }
  const res = createNativeEvent(evt, isHTMLTarget);
  {
    if (isClickEvent(evt)) {
      normalizeClickEvent(res, evt);
    } else if (isMouseEvent(evt)) {
      normalizeMouseEvent(res, evt);
    } else if (isTouchEvent(evt)) {
      const top = getWindowTop();
      res.touches = normalizeTouchEvent(evt.touches, top);
      res.changedTouches = normalizeTouchEvent(
        evt.changedTouches,
        top
      );
    } else if (isKeyboardEvent(evt)) {
      const proxyKeys = ["key", "code"];
      proxyKeys.forEach((key) => {
        Object.defineProperty(res, key, {
          get() {
            return evt[key];
          }
        });
      });
    }
  }
  {
    return wrapperH5WxsEvent(
      res,
      eventValue,
      instance2
    ) || [res];
  }
}
function findUniTarget(target) {
  while (!isBuiltInElement(target)) {
    target = target.parentElement;
  }
  return target;
}
function createNativeEvent(evt, htmlElement = false) {
  const { type, timeStamp, target, currentTarget } = evt;
  let realTarget, realCurrentTarget;
  {
    realTarget = normalizeTarget(
      htmlElement ? target : findUniTarget(target)
    );
    realCurrentTarget = normalizeTarget(currentTarget);
  }
  const event = {
    type,
    timeStamp,
    target: realTarget,
    detail: {},
    currentTarget: realCurrentTarget
  };
  if (typeof CustomEvent !== "undefined" && evt instanceof CustomEvent && isPlainObject(evt.detail)) {
    event.detail = evt.detail;
  }
  if (evt._stopped) {
    event._stopped = true;
  }
  if (evt.type.startsWith("touch")) {
    event.touches = evt.touches;
    event.changedTouches = evt.changedTouches;
  }
  {
    {
      wrapperEvent(event, evt);
    }
  }
  return event;
}
function wrapperEvent(event, evt) {
  extend$1(event, {
    preventDefault() {
      return evt.preventDefault();
    },
    stopPropagation() {
      return evt.stopPropagation();
    }
  });
}
function normalizeClickEvent(evt, mouseEvt) {
  const { x, y } = mouseEvt;
  const top = getWindowTop();
  evt.detail = { x, y: y - top };
  evt.touches = evt.changedTouches = [createTouchEvent(mouseEvt, top)];
}
function normalizeMouseEvent(evt, mouseEvt) {
  const top = getWindowTop();
  evt.pageX = mouseEvt.pageX;
  evt.pageY = mouseEvt.pageY - top;
  evt.clientX = mouseEvt.clientX;
  evt.clientY = mouseEvt.clientY - top;
  evt.touches = evt.changedTouches = [createTouchEvent(mouseEvt, top)];
}
function createTouchEvent(evt, top) {
  return {
    force: 1,
    identifier: 0,
    clientX: evt.clientX,
    clientY: evt.clientY - top,
    pageX: evt.pageX,
    pageY: evt.pageY - top
  };
}
function normalizeTouchEvent(touches, top) {
  const res = [];
  for (let i = 0; i < touches.length; i++) {
    const { identifier, pageX, pageY, clientX, clientY, force } = touches[i];
    res.push({
      identifier,
      pageX,
      pageY: pageY - top,
      clientX,
      clientY: clientY - top,
      force: force || 0
    });
  }
  return res;
}
const instance = /* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $nne,
  createNativeEvent
}, Symbol.toStringTag, { value: "Module" });
function initAppConfig$1(appConfig) {
  const globalProperties = appConfig.globalProperties;
  extend$1(globalProperties, instance);
  {
    globalProperties.$gcd = getComponentDescriptor;
  }
}
function initViewPlugin(app) {
  initAppConfig$1(app._context.config);
}
const invokeOnCallback = (name, res) => UniServiceJSBridge$1.emit("api." + name, res);
let invokeViewMethodId = 1;
function publishViewMethodName(pageId) {
  return (pageId || getCurrentPageId()) + "." + INVOKE_VIEW_API;
}
const invokeViewMethod = (name, args, pageId, callback) => {
  const { subscribe, publishHandler } = UniServiceJSBridge$1;
  const id2 = callback ? invokeViewMethodId++ : 0;
  callback && subscribe(INVOKE_VIEW_API + "." + id2, callback, true);
  publishHandler(publishViewMethodName(pageId), { id: id2, name, args }, pageId);
};
const invokeViewMethodKeepAlive = (name, args, callback, pageId) => {
  const { subscribe, unsubscribe, publishHandler } = UniServiceJSBridge$1;
  const id2 = invokeViewMethodId++;
  const subscribeName = INVOKE_VIEW_API + "." + id2;
  subscribe(subscribeName, callback);
  publishHandler(publishViewMethodName(pageId), { id: id2, name, args }, pageId);
  return () => {
    unsubscribe(subscribeName);
  };
};
const ServiceJSBridge = /* @__PURE__ */ extend$1(
  /* @__PURE__ */ initBridge(
    "view"
    /* view 指的是 service 层订阅的是 view 层事件 */
  ),
  {
    invokeOnCallback,
    invokeViewMethod,
    invokeViewMethodKeepAlive
  }
);
function initOn() {
  const { on: on2 } = UniServiceJSBridge$1;
  on2(ON_RESIZE, onResize$1);
  on2(ON_APP_ENTER_FOREGROUND, onAppEnterForeground);
  on2(ON_APP_ENTER_BACKGROUND, onAppEnterBackground);
}
function onResize$1(res) {
  const page = getCurrentPage();
  invokeHook(page, ON_RESIZE, res);
  UniServiceJSBridge$1.invokeOnCallback("onWindowResize", res);
}
function onAppEnterForeground(enterOptions2) {
  const page = getCurrentPage();
  invokeHook(
    getApp$1(),
    ON_SHOW,
    enterOptions2
  );
  invokeHook(page, ON_SHOW);
}
function onAppEnterBackground() {
  invokeHook(
    getApp$1(),
    ON_HIDE
  );
  invokeHook(
    getCurrentPage(),
    ON_HIDE
  );
}
const SUBSCRIBE_LIFECYCLE_HOOKS = [ON_PAGE_SCROLL, ON_REACH_BOTTOM];
function initSubscribe() {
  SUBSCRIBE_LIFECYCLE_HOOKS.forEach(
    (name) => UniServiceJSBridge$1.subscribe(name, createPageEvent(name))
  );
}
function createPageEvent(name) {
  return (args, pageId) => {
    invokeHook(parseInt(pageId), name, args);
  };
}
function initService() {
  {
    initOn();
    initSubscribe();
  }
}
function initAppVm(appVm2) {
  appVm2.$vm = appVm2;
  appVm2.$mpType = "app";
  const locale2 = ref(useI18n().getLocale());
  Object.defineProperty(appVm2, "$locale", {
    get() {
      return locale2.value;
    },
    set(v2) {
      locale2.value = v2;
    }
  });
}
function initPageVm(pageVm, page) {
  pageVm.route = page.route;
  pageVm.$vm = pageVm;
  {
    pageVm.$page = page;
  }
  pageVm.$mpType = "page";
  pageVm.$fontFamilySet = /* @__PURE__ */ new Set();
  if (page.meta.isTabBar) {
    pageVm.$.__isTabBar = true;
    pageVm.$.__isActive = true;
  }
}
function getOpenerEventChannel() {
  {
    if (this.$route) {
      const meta = this.$route.meta;
      if (!meta.eventChannel) {
        meta.eventChannel = new EventChannel(
          this.$page.id
        );
      }
      return meta.eventChannel;
    }
  }
}
function initAppConfig(appConfig) {
  const globalProperties = appConfig.globalProperties;
  globalProperties.getOpenerEventChannel = getOpenerEventChannel;
}
function initServicePlugin(app) {
  initAppConfig(app._context.config);
}
function createLaunchOptions() {
  return {
    path: "",
    query: {},
    scene: 1001,
    referrerInfo: {
      appId: "",
      extraData: {}
    }
  };
}
function defineGlobalData(app, defaultGlobalData) {
  const options = app.$options || {};
  options.globalData = extend$1(options.globalData || {}, defaultGlobalData);
  Object.defineProperty(app, "globalData", {
    get() {
      return options.globalData;
    },
    set(newGlobalData) {
      options.globalData = newGlobalData;
    }
  });
}
function converPx(value) {
  if (/^-?\d+[ur]px$/i.test(value)) {
    return value.replace(/(^-?\d+)[ur]px$/i, (text2, num) => {
      return `${upx2px(parseFloat(num))}px`;
    });
  } else if (/^-?[\d\.]+$/.test(value)) {
    return `${value}px`;
  }
  return value || "";
}
function converType(type) {
  return type.replace(/[A-Z]/g, (text2) => {
    return `-${text2.toLowerCase()}`;
  }).replace("webkit", "-webkit");
}
function getStyle(action) {
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "scale",
    "scale3d",
    "rotate3d",
    "skew",
    "translate",
    "translate3d"
  ];
  const animateTypes2 = [
    "scaleX",
    "scaleY",
    "scaleZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skewX",
    "skewY",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes3 = ["opacity", "background-color"];
  const animateTypes4 = ["width", "height", "left", "right", "top", "bottom"];
  const animates = action.animates;
  const option = action.option;
  const transition = option.transition;
  const style = {};
  const transform = [];
  animates.forEach((animate) => {
    let type = animate.type;
    let args = [...animate.args];
    if (animateTypes1.concat(animateTypes2).includes(type)) {
      if (type.startsWith("rotate") || type.startsWith("skew")) {
        args = args.map((value) => parseFloat(value) + "deg");
      } else if (type.startsWith("translate")) {
        args = args.map(converPx);
      }
      if (animateTypes2.indexOf(type) >= 0) {
        args.length = 1;
      }
      transform.push(`${type}(${args.join(",")})`);
    } else if (animateTypes3.concat(animateTypes4).includes(args[0])) {
      type = args[0];
      const value = args[1];
      style[type] = animateTypes4.includes(type) ? converPx(value) : value;
    }
  });
  style.transform = style.webkitTransform = transform.join(" ");
  style.transition = style.webkitTransition = Object.keys(style).map(
    (type) => `${converType(type)} ${transition.duration}ms ${transition.timingFunction} ${transition.delay}ms`
  ).join(",");
  style.transformOrigin = style.webkitTransformOrigin = option.transformOrigin;
  return style;
}
function startAnimation(context) {
  const animation2 = context.animation;
  if (!animation2 || !animation2.actions || !animation2.actions.length) {
    return;
  }
  let index2 = 0;
  const actions = animation2.actions;
  const length = animation2.actions.length;
  function animate() {
    const action = actions[index2];
    const transition = action.option.transition;
    const style = getStyle(action);
    Object.keys(style).forEach((key) => {
      context.$el.style[key] = style[key];
    });
    index2 += 1;
    if (index2 < length) {
      setTimeout(animate, transition.duration + transition.delay);
    }
  }
  setTimeout(() => {
    animate();
  }, 0);
}
const animation = {
  props: ["animation"],
  watch: {
    animation: {
      deep: true,
      handler() {
        startAnimation(this);
      }
    }
  },
  mounted() {
    startAnimation(this);
  }
};
const defineBuiltInComponent = (options) => {
  options.__reserved = true;
  const { props: props2, mixins } = options;
  if (!props2 || !props2.animation) {
    (mixins || (options.mixins = [])).push(animation);
  }
  return defineSystemComponent(options);
};
const defineSystemComponent = (options) => {
  options.__reserved = true;
  options.compatConfig = {
    MODE: 3
    // 标记为vue3
  };
  return /* @__PURE__ */ defineComponent(options);
};
function withWebEvent(fn) {
  return fn.__wwe = true, fn;
}
function useCustomEvent(ref2, emit2) {
  return (name, evt, detail) => {
    if (ref2.value) {
      emit2(name, normalizeCustomEvent(name, evt, ref2.value, detail || {}));
    }
  };
}
function normalizeCustomEvent(name, domEvt, el, detail) {
  const target = normalizeTarget(el);
  return {
    type: domEvt.__evName || detail.type || name,
    timeStamp: domEvt.timeStamp || 0,
    target,
    currentTarget: target,
    detail
  };
}
const hoverProps = {
  hoverClass: {
    type: String,
    default: "none"
  },
  hoverStopPropagation: {
    type: Boolean,
    default: false
  },
  hoverStartTime: {
    type: [Number, String],
    default: 50
  },
  hoverStayTime: {
    type: [Number, String],
    default: 400
  }
};
function useHover(props2) {
  const hovering = ref(false);
  let hoverTouch = false;
  let hoverStartTimer;
  let hoverStayTimer;
  function hoverReset() {
    requestAnimationFrame(() => {
      clearTimeout(hoverStayTimer);
      hoverStayTimer = setTimeout(() => {
        hovering.value = false;
      }, parseInt(props2.hoverStayTime));
    });
  }
  function onTouchstartPassive(evt) {
    if (evt.touches.length > 1) {
      return;
    }
    handleHoverStart(evt);
  }
  function onMousedown(evt) {
    if (hoverTouch) {
      return;
    }
    handleHoverStart(evt);
    window.addEventListener("mouseup", handlePCHoverEnd);
  }
  function handleHoverStart(evt) {
    if (evt._hoverPropagationStopped) {
      return;
    }
    if (!props2.hoverClass || props2.hoverClass === "none" || props2.disabled) {
      return;
    }
    if (props2.hoverStopPropagation) {
      evt._hoverPropagationStopped = true;
    }
    hoverTouch = true;
    hoverStartTimer = setTimeout(() => {
      hovering.value = true;
      if (!hoverTouch) {
        hoverReset();
      }
    }, parseInt(props2.hoverStartTime));
  }
  function onTouchend() {
    handleHoverEnd();
  }
  function onMouseup() {
    if (!hoverTouch) {
      return;
    }
    handlePCHoverEnd();
  }
  function handleHoverEnd() {
    hoverTouch = false;
    if (hovering.value) {
      hoverReset();
    }
  }
  function handlePCHoverEnd() {
    handleHoverEnd();
    window.removeEventListener("mouseup", handlePCHoverEnd);
  }
  function onTouchcancel() {
    hoverTouch = false;
    hovering.value = false;
    clearTimeout(hoverStartTimer);
  }
  return {
    hovering,
    binding: {
      onTouchstartPassive: withWebEvent(onTouchstartPassive),
      onMousedown: withWebEvent(onMousedown),
      onTouchend: withWebEvent(onTouchend),
      onMouseup: withWebEvent(onMouseup),
      onTouchcancel: withWebEvent(onTouchcancel)
    }
  };
}
function useBooleanAttr(props2, keys) {
  if (isString(keys)) {
    keys = [keys];
  }
  return keys.reduce((res, key) => {
    if (props2[key]) {
      res[key] = true;
    }
    return res;
  }, /* @__PURE__ */ Object.create(null));
}
const uniFormKey = PolySymbol("uf");
const uniLabelKey = PolySymbol("ul");
function useListeners$1(props2, listeners2) {
  _addListeners(props2.id, listeners2);
  watch(
    () => props2.id,
    (newId, oldId) => {
      _removeListeners(oldId, listeners2, true);
      _addListeners(newId, listeners2, true);
    }
  );
  onUnmounted(() => {
    _removeListeners(props2.id, listeners2);
  });
}
function _addListeners(id2, listeners2, watch2) {
  const pageId = useCurrentPageId();
  if (watch2 && !id2) {
    return;
  }
  if (!isPlainObject(listeners2)) {
    return;
  }
  Object.keys(listeners2).forEach((name) => {
    if (watch2) {
      if (name.indexOf("@") !== 0 && name.indexOf("uni-") !== 0) {
        UniViewJSBridge$1.on(`uni-${name}-${pageId}-${id2}`, listeners2[name]);
      }
    } else {
      if (name.indexOf("uni-") === 0) {
        UniViewJSBridge$1.on(name, listeners2[name]);
      } else if (id2) {
        UniViewJSBridge$1.on(`uni-${name}-${pageId}-${id2}`, listeners2[name]);
      }
    }
  });
}
function _removeListeners(id2, listeners2, watch2) {
  const pageId = useCurrentPageId();
  if (watch2 && !id2) {
    return;
  }
  if (!isPlainObject(listeners2)) {
    return;
  }
  Object.keys(listeners2).forEach((name) => {
    if (watch2) {
      if (name.indexOf("@") !== 0 && name.indexOf("uni-") !== 0) {
        UniViewJSBridge$1.off(`uni-${name}-${pageId}-${id2}`, listeners2[name]);
      }
    } else {
      if (name.indexOf("uni-") === 0) {
        UniViewJSBridge$1.off(name, listeners2[name]);
      } else if (id2) {
        UniViewJSBridge$1.off(`uni-${name}-${pageId}-${id2}`, listeners2[name]);
      }
    }
  });
}
const buttonProps = {
  id: {
    type: String,
    default: ""
  },
  hoverClass: {
    type: String,
    default: "button-hover"
  },
  hoverStartTime: {
    type: [Number, String],
    default: 20
  },
  hoverStayTime: {
    type: [Number, String],
    default: 70
  },
  hoverStopPropagation: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: [Boolean, String],
    default: false
  },
  formType: {
    type: String,
    default: ""
  },
  openType: {
    type: String,
    default: ""
  },
  loading: {
    type: [Boolean, String],
    default: false
  },
  plain: {
    type: [Boolean, String],
    default: false
  }
};
const index$x = /* @__PURE__ */ defineBuiltInComponent({
  name: "Button",
  props: buttonProps,
  setup(props2, {
    slots
  }) {
    const rootRef = ref(null);
    const uniForm = inject(uniFormKey, false);
    const {
      hovering,
      binding
    } = useHover(props2);
    const onClick = withWebEvent((e2, isLabelClick) => {
      if (props2.disabled) {
        return e2.stopImmediatePropagation();
      }
      if (isLabelClick) {
        rootRef.value.click();
      }
      const formType = props2.formType;
      if (formType) {
        if (!uniForm) {
          return;
        }
        if (formType === "submit") {
          uniForm.submit(e2);
        } else if (formType === "reset") {
          uniForm.reset(e2);
        }
        return;
      }
    });
    const uniLabel = inject(uniLabelKey, false);
    if (uniLabel) {
      uniLabel.addHandler(onClick);
      onBeforeUnmount(() => {
        uniLabel.removeHandler(onClick);
      });
    }
    useListeners$1(props2, {
      "label-click": onClick
    });
    return () => {
      const hoverClass = props2.hoverClass;
      const booleanAttrs = useBooleanAttr(props2, "disabled");
      const loadingAttrs = useBooleanAttr(props2, "loading");
      const plainAttrs = useBooleanAttr(props2, "plain");
      const hasHoverClass = hoverClass && hoverClass !== "none";
      return createVNode("uni-button", mergeProps({
        "ref": rootRef,
        "onClick": onClick,
        "id": props2.id,
        "class": hasHoverClass && hovering.value ? hoverClass : ""
      }, hasHoverClass && binding, booleanAttrs, loadingAttrs, plainAttrs), [slots.default && slots.default()], 16, ["onClick", "id"]);
    };
  }
});
const pageMetaKey = PolySymbol("upm");
function usePageMeta() {
  return inject(pageMetaKey);
}
function providePageMeta(id2) {
  const pageMeta = initPageMeta(id2);
  provide(pageMetaKey, pageMeta);
  return pageMeta;
}
function usePageRoute() {
  {
    return useRoute();
  }
}
function initPageMeta(id2) {
  {
    return reactive(
      normalizePageMeta(
        JSON.parse(
          JSON.stringify(
            initRouteMeta(
              useRoute().meta,
              id2
            )
          )
        )
      )
    );
  }
}
function normalizePageMeta(pageMeta) {
  {
    const { navigationBar } = pageMeta;
    const { titleSize, titleColor, backgroundColor } = navigationBar;
    navigationBar.titleText = navigationBar.titleText || "";
    navigationBar.type = navigationBar.type || "default";
    navigationBar.titleSize = titleSize || "16px";
    navigationBar.titleColor = titleColor || "#000000";
    navigationBar.backgroundColor = backgroundColor || "#F8F8F8";
  }
  if (history.state) {
    const type = history.state.__type__;
    if ((type === "redirectTo" || type === "reLaunch") && getCurrentPages$1().length === 0) {
      pageMeta.isEntry = true;
      pageMeta.isQuit = true;
    }
  }
  return pageMeta;
}
function getStateId() {
  return history.state && history.state.__id__ || 1;
}
const CHOOSE_SIZE_TYPES = ["original", "compressed"];
const CHOOSE_SOURCE_TYPES = ["album", "camera"];
const HTTP_METHODS = [
  "GET",
  "OPTIONS",
  "HEAD",
  "POST",
  "PUT",
  "DELETE",
  "TRACE",
  "CONNECT",
  "PATCH"
];
function elemInArray(str, arr) {
  if (!str || arr.indexOf(str) === -1) {
    return arr[0];
  }
  return str;
}
function elemsInArray(strArr, optionalVal) {
  if (!isArray$1(strArr) || strArr.length === 0 || strArr.find((val) => optionalVal.indexOf(val) === -1)) {
    return optionalVal;
  }
  return strArr;
}
function tryCatch(fn) {
  return function() {
    try {
      return fn.apply(fn, arguments);
    } catch (e2) {
      console.error(e2);
    }
  };
}
let invokeCallbackId = 1;
const invokeCallbacks = {};
function addInvokeCallback(id2, name, callback, keepAlive = false) {
  invokeCallbacks[id2] = {
    name,
    keepAlive,
    callback
  };
  return id2;
}
function invokeCallback(id2, res, extras) {
  if (typeof id2 === "number") {
    const opts = invokeCallbacks[id2];
    if (opts) {
      if (!opts.keepAlive) {
        delete invokeCallbacks[id2];
      }
      return opts.callback(res, extras);
    }
  }
  return res;
}
const API_SUCCESS = "success";
const API_FAIL = "fail";
const API_COMPLETE = "complete";
function getApiCallbacks(args) {
  const apiCallbacks = {};
  for (const name in args) {
    const fn = args[name];
    if (isFunction(fn)) {
      apiCallbacks[name] = tryCatch(fn);
      delete args[name];
    }
  }
  return apiCallbacks;
}
function normalizeErrMsg(errMsg, name) {
  if (!errMsg || errMsg.indexOf(":fail") === -1) {
    return name + ":ok";
  }
  return name + errMsg.substring(errMsg.indexOf(":fail"));
}
function createAsyncApiCallback(name, args = {}, { beforeAll, beforeSuccess } = {}) {
  if (!isPlainObject(args)) {
    args = {};
  }
  const { success, fail, complete } = getApiCallbacks(args);
  const hasSuccess = isFunction(success);
  const hasFail = isFunction(fail);
  const hasComplete = isFunction(complete);
  const callbackId = invokeCallbackId++;
  addInvokeCallback(callbackId, name, (res) => {
    res = res || {};
    res.errMsg = normalizeErrMsg(res.errMsg, name);
    isFunction(beforeAll) && beforeAll(res);
    if (res.errMsg === name + ":ok") {
      isFunction(beforeSuccess) && beforeSuccess(res, args);
      hasSuccess && success(res);
    } else {
      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  return callbackId;
}
const HOOK_SUCCESS = "success";
const HOOK_FAIL = "fail";
const HOOK_COMPLETE = "complete";
const globalInterceptors = {};
const scopedInterceptors = {};
function wrapperHook(hook, params) {
  return function(data) {
    return hook(data, params) || data;
  };
}
function queue(hooks, data, params) {
  let promise = false;
  for (let i = 0; i < hooks.length; i++) {
    const hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      const res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then() {
          },
          catch() {
          }
        };
      }
    }
  }
  return promise || {
    then(callback) {
      return callback(data);
    },
    catch() {
    }
  };
}
function wrapperOptions(interceptors2, options = {}) {
  [HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE].forEach((name) => {
    const hooks = interceptors2[name];
    if (!isArray$1(hooks)) {
      return;
    }
    const oldCallback = options[name];
    options[name] = function callbackInterceptor(res) {
      queue(hooks, res, options).then((res2) => {
        return isFunction(oldCallback) && oldCallback(res2) || res2;
      });
    };
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  const returnValueHooks = [];
  if (isArray$1(globalInterceptors.returnValue)) {
    returnValueHooks.push(...globalInterceptors.returnValue);
  }
  const interceptor = scopedInterceptors[method];
  if (interceptor && isArray$1(interceptor.returnValue)) {
    returnValueHooks.push(...interceptor.returnValue);
  }
  returnValueHooks.forEach((hook) => {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  const interceptor = /* @__PURE__ */ Object.create(null);
  Object.keys(globalInterceptors).forEach((hook) => {
    if (hook !== "returnValue") {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  const scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach((hook) => {
      if (hook !== "returnValue") {
        interceptor[hook] = (interceptor[hook] || []).concat(
          scopedInterceptor[hook]
        );
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api2, options, params) {
  const interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (isArray$1(interceptor.invoke)) {
      const res = queue(interceptor.invoke, options);
      return res.then((options2) => {
        return api2(
          wrapperOptions(getApiInterceptorHooks(method), options2),
          ...params
        );
      });
    } else {
      return api2(wrapperOptions(interceptor, options), ...params);
    }
  }
  return api2(options, ...params);
}
function hasCallback(args) {
  if (isPlainObject(args) && [API_SUCCESS, API_FAIL, API_COMPLETE].find(
    (cb) => isFunction(args[cb])
  )) {
    return true;
  }
  return false;
}
function handlePromise(promise) {
  return promise;
}
function promisify(name, fn) {
  return (args = {}, ...rest) => {
    if (hasCallback(args)) {
      return wrapperReturnValue(
        name,
        invokeApi(name, fn, extend$1({}, args), rest)
      );
    }
    return wrapperReturnValue(
      name,
      handlePromise(
        new Promise((resolve2, reject) => {
          invokeApi(
            name,
            fn,
            extend$1({}, args, { success: resolve2, fail: reject }),
            rest
          );
        })
      )
    );
  };
}
function normalizeFormatApiParams(args) {
  const params = args[0];
  if (isPlainObject(params)) {
    return params;
  }
  const normalizedParams = {};
  args[0] = normalizedParams;
  return normalizedParams;
}
function formatApiArgs(args, options) {
  const rawParams = args[0];
  if (!options || !options.formatArgs || !isPlainObject(options.formatArgs) && isPlainObject(rawParams)) {
    return;
  }
  const params = normalizeFormatApiParams(args);
  const formatArgs = options.formatArgs;
  const keys = Object.keys(formatArgs);
  for (let i = 0; i < keys.length; i++) {
    const name = keys[i];
    const formatterOrDefaultValue = formatArgs[name];
    if (isFunction(formatterOrDefaultValue)) {
      const errMsg = formatterOrDefaultValue(params[name], params);
      if (isString(errMsg)) {
        return errMsg;
      }
    } else {
      if (!hasOwn$1(params, name)) {
        params[name] = formatterOrDefaultValue;
      }
    }
  }
}
function invokeSuccess(id2, name, res) {
  const result = {
    errMsg: name + ":ok"
  };
  return invokeCallback(id2, extend$1(res || {}, result));
}
function invokeFail(id2, name, errMsg, errRes = {}) {
  const errMsgPrefix = name + ":fail";
  let apiErrMsg = "";
  if (!errMsg) {
    apiErrMsg = errMsgPrefix;
  } else if (errMsg.indexOf(errMsgPrefix) === 0) {
    apiErrMsg = errMsg;
  } else {
    apiErrMsg = errMsgPrefix + " " + errMsg;
  }
  {
    delete errRes.errCode;
  }
  let res = extend$1({ errMsg: apiErrMsg }, errRes);
  return invokeCallback(id2, res);
}
function beforeInvokeApi(name, args, protocol, options) {
  if (options && options.beforeInvoke) {
    const errMsg2 = options.beforeInvoke(args);
    if (isString(errMsg2)) {
      return errMsg2;
    }
  }
  const errMsg = formatApiArgs(args, options);
  if (errMsg) {
    return errMsg;
  }
}
function parseErrMsg(errMsg) {
  if (!errMsg || isString(errMsg)) {
    return errMsg;
  }
  if (errMsg.stack) {
    if (typeof globalThis === "undefined" || !globalThis.harmonyChannel) {
      console.error(errMsg.message + "\n" + errMsg.stack);
    }
    return errMsg.message;
  }
  return errMsg;
}
function wrapperTaskApi(name, fn, protocol, options) {
  return (args) => {
    const id2 = createAsyncApiCallback(name, args, options);
    const errMsg = beforeInvokeApi(name, [args], protocol, options);
    if (errMsg) {
      return invokeFail(id2, name, errMsg);
    }
    return fn(args, {
      resolve: (res) => invokeSuccess(id2, name, res),
      reject: (errMsg2, errRes) => invokeFail(id2, name, parseErrMsg(errMsg2), errRes)
    });
  };
}
function wrapperSyncApi(name, fn, protocol, options) {
  return (...args) => {
    const errMsg = beforeInvokeApi(name, args, protocol, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    return fn.apply(null, args);
  };
}
function wrapperAsyncApi(name, fn, protocol, options) {
  return wrapperTaskApi(name, fn, protocol, options);
}
function defineTaskApi(name, fn, protocol, options) {
  return promisify(
    name,
    wrapperTaskApi(name, fn, void 0, options)
  );
}
function defineSyncApi(name, fn, protocol, options) {
  return wrapperSyncApi(
    name,
    fn,
    void 0,
    options
  );
}
function defineAsyncApi(name, fn, protocol, options) {
  return promisify(
    name,
    wrapperAsyncApi(name, fn, void 0, options)
  );
}
const API_UPX2PX = "upx2px";
const EPS = 1e-4;
const BASE_DEVICE_WIDTH = 750;
let isIOS$1 = false;
let deviceWidth = 0;
let deviceDPR = 0;
let maxWidth = 960;
let baseWidth = 375;
let includeWidth = 750;
function checkDeviceWidth() {
  let windowWidth, pixelRatio2, platform;
  {
    const { windowWidth: w, pixelRatio: p2, platform: pf } = getBaseSystemInfo();
    windowWidth = w;
    pixelRatio2 = p2;
    platform = pf;
  }
  deviceWidth = windowWidth;
  deviceDPR = pixelRatio2;
  isIOS$1 = platform === "ios";
}
function checkValue(value, defaultValue) {
  const newValue = Number(value);
  return isNaN(newValue) ? defaultValue : newValue;
}
function checkMaxWidth() {
  const config = __uniConfig.globalStyle || {};
  maxWidth = checkValue(config.rpxCalcMaxDeviceWidth, 960);
  baseWidth = checkValue(config.rpxCalcBaseDeviceWidth, 375);
  includeWidth = checkValue(config.rpxCalcBaseDeviceWidth, 750);
}
const upx2px = /* @__PURE__ */ defineSyncApi(
  API_UPX2PX,
  (number, newDeviceWidth) => {
    if (deviceWidth === 0) {
      checkDeviceWidth();
      {
        checkMaxWidth();
      }
    }
    number = Number(number);
    if (number === 0) {
      return 0;
    }
    let width = newDeviceWidth || deviceWidth;
    {
      width = number === includeWidth || width <= maxWidth ? width : baseWidth;
    }
    let result = number / BASE_DEVICE_WIDTH * width;
    if (result < 0) {
      result = -result;
    }
    result = Math.floor(result + EPS);
    if (result === 0) {
      if (deviceDPR === 1 || !isIOS$1) {
        result = 1;
      } else {
        result = 0.5;
      }
    }
    return number < 0 ? -result : result;
  }
);
const API_GET_LOCALE = "getLocale";
const getLocale = /* @__PURE__ */ defineSyncApi(
  API_GET_LOCALE,
  () => {
    const app = getApp$1();
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
    return useI18n().getLocale();
  }
);
const appHooks = {
  [ON_UNHANDLE_REJECTION]: [],
  [ON_PAGE_NOT_FOUND]: [],
  [ON_ERROR]: [],
  [ON_SHOW]: [],
  [ON_HIDE]: []
};
function injectAppHooks(appInstance) {
  Object.keys(appHooks).forEach((type) => {
    appHooks[type].forEach((hook) => {
      injectHook(type, hook, appInstance);
    });
  });
}
const API_MAKE_PHONE_CALL = "makePhoneCall";
const API_GET_STORAGE_SYNC = "getStorageSync";
const API_SET_STORAGE_SYNC = "setStorageSync";
const API_CHOOSE_IMAGE = "chooseImage";
const ChooseImageOptions = {
  formatArgs: {
    count(value, params) {
      if (!value || value <= 0) {
        params.count = 9;
      }
    },
    sizeType(sizeType, params) {
      params.sizeType = elemsInArray(sizeType, CHOOSE_SIZE_TYPES);
    },
    sourceType(sourceType, params) {
      params.sourceType = elemsInArray(sourceType, CHOOSE_SOURCE_TYPES);
    },
    extension(extension, params) {
      if (extension instanceof Array && extension.length === 0) {
        return "param extension should not be empty.";
      }
      if (!extension)
        params.extension = ["*"];
    }
  }
};
const ChooseImageProtocol = {
  count: Number,
  sizeType: [Array, String],
  sourceType: Array,
  extension: Array
};
const API_PREVIEW_IMAGE = "previewImage";
const PreviewImageOptions = {
  formatArgs: {
    urls(urls, params) {
      params.urls = urls.map(
        (url) => isString(url) && url ? getRealPath(url) : ""
      );
    },
    current(current, params) {
      if (typeof current === "number") {
        params.current = current > 0 && current < params.urls.length ? current : 0;
      } else if (isString(current) && current) {
        params.current = getRealPath(current);
      }
    }
  }
};
const PreviewImageProtocol = {
  urls: {
    type: Array,
    required: true
  },
  current: {
    type: [Number, String]
  }
};
const API_REQUEST = "request";
const dataType = {
  JSON: "json"
};
const RESPONSE_TYPE = ["text", "arraybuffer"];
const DEFAULT_RESPONSE_TYPE = "text";
const encode = encodeURIComponent;
function stringifyQuery(url, data) {
  let str = url.split("#");
  const hash = str[1] || "";
  str = str[0].split("?");
  let query = str[1] || "";
  url = str[0];
  const search = query.split("&").filter((item) => item);
  const params = {};
  search.forEach((item) => {
    const part = item.split("=");
    params[part[0]] = part[1];
  });
  for (const key in data) {
    if (hasOwn$1(data, key)) {
      let v2 = data[key];
      if (typeof v2 === "undefined" || v2 === null) {
        v2 = "";
      } else if (isPlainObject(v2)) {
        v2 = JSON.stringify(v2);
      }
      params[encode(key)] = encode(v2);
    }
  }
  query = Object.keys(params).map((item) => `${item}=${params[item]}`).join("&");
  return url + (query ? "?" + query : "") + (hash ? "#" + hash : "");
}
const RequestProtocol = {
  method: String,
  data: [Object, String, Array, ArrayBuffer],
  url: {
    type: String,
    required: true
  },
  header: Object,
  dataType: String,
  responseType: String,
  withCredentials: Boolean
};
const RequestOptions = {
  formatArgs: {
    method(value, params) {
      params.method = elemInArray(
        (value || "").toUpperCase(),
        HTTP_METHODS
      );
    },
    data(value, params) {
      params.data = value || "";
    },
    url(value, params) {
      if (params.method === HTTP_METHODS[0] && isPlainObject(params.data) && Object.keys(params.data).length) {
        params.url = stringifyQuery(value, params.data);
      }
    },
    header(value, params) {
      const header = params.header = value || {};
      if (params.method !== HTTP_METHODS[0]) {
        if (!Object.keys(header).find(
          (key) => key.toLowerCase() === "content-type"
        )) {
          header["Content-Type"] = "application/json";
        }
      }
    },
    dataType(value, params) {
      params.dataType = (value || dataType.JSON).toLowerCase();
    },
    responseType(value, params) {
      params.responseType = (value || "").toLowerCase();
      if (RESPONSE_TYPE.indexOf(params.responseType) === -1) {
        params.responseType = DEFAULT_RESPONSE_TYPE;
      }
    }
  }
};
function encodeQueryString(url) {
  if (!isString(url)) {
    return url;
  }
  const index2 = url.indexOf("?");
  if (index2 === -1) {
    return url;
  }
  const query = url.slice(index2 + 1).trim().replace(/^(\?|#|&)/, "");
  if (!query) {
    return url;
  }
  url = url.slice(0, index2);
  const params = [];
  query.split("&").forEach((param) => {
    const parts = param.replace(/\+/g, " ").split("=");
    const key = parts.shift();
    const val = parts.length > 0 ? parts.join("=") : "";
    params.push(key + "=" + encodeURIComponent(val));
  });
  return params.length ? url + "?" + params.join("&") : url;
}
const ANIMATION_IN$1 = [
  "slide-in-right",
  "slide-in-left",
  "slide-in-top",
  "slide-in-bottom",
  "fade-in",
  "zoom-out",
  "zoom-fade-out",
  "pop-in",
  "none"
];
const ANIMATION_OUT$1 = [
  "slide-out-right",
  "slide-out-left",
  "slide-out-top",
  "slide-out-bottom",
  "fade-out",
  "zoom-in",
  "zoom-fade-in",
  "pop-out",
  "none"
];
const BaseRouteProtocol = {
  url: {
    type: String,
    required: true
  }
};
const API_NAVIGATE_TO = "navigateTo";
const API_REDIRECT_TO = "redirectTo";
const API_RE_LAUNCH = "reLaunch";
const API_SWITCH_TAB = "switchTab";
const API_NAVIGATE_BACK = "navigateBack";
const API_PRELOAD_PAGE = "preloadPage";
const API_UN_PRELOAD_PAGE = "unPreloadPage";
const NavigateToProtocol = /* @__PURE__ */ extend$1(
  {},
  BaseRouteProtocol,
  createAnimationProtocol(ANIMATION_IN$1)
);
const NavigateBackProtocol = /* @__PURE__ */ extend$1(
  {
    delta: {
      type: Number
    }
  },
  createAnimationProtocol(ANIMATION_OUT$1)
);
const ReLaunchProtocol = BaseRouteProtocol;
const NavigateToOptions = /* @__PURE__ */ createRouteOptions(API_NAVIGATE_TO);
const ReLaunchOptions = /* @__PURE__ */ createRouteOptions(API_RE_LAUNCH);
const NavigateBackOptions = {
  formatArgs: {
    delta(value, params) {
      value = parseInt(value + "") || 1;
      params.delta = Math.min(getCurrentPages$1().length - 1, value);
    }
  }
};
function createAnimationProtocol(animationTypes) {
  return {
    animationType: {
      type: String,
      validator(type) {
        if (type && animationTypes.indexOf(type) === -1) {
          return "`" + type + "` is not supported for `animationType` (supported values are: `" + animationTypes.join("`|`") + "`)";
        }
      }
    },
    animationDuration: {
      type: Number
    }
  };
}
let navigatorLock;
function beforeRoute() {
  navigatorLock = "";
}
function createRouteOptions(type) {
  return {
    formatArgs: {
      url: createNormalizeUrl(type)
    },
    beforeAll: beforeRoute
  };
}
function createNormalizeUrl(type, options = {}) {
  return function normalizeUrl(url, params) {
    if (!url) {
      return `Missing required args: "url"`;
    }
    url = normalizeRoute(url);
    const pagePath = url.split("?")[0];
    const routeOptions = getRouteOptions(pagePath, true);
    if (!routeOptions) {
      return "page `" + url + "` is not found";
    }
    if (type === API_NAVIGATE_TO || type === API_REDIRECT_TO) {
      if (routeOptions.meta.isTabBar) {
        return `can not ${type} a tabbar page`;
      }
    } else if (type === API_SWITCH_TAB) {
      if (!routeOptions.meta.isTabBar) {
        return "can not switch to no-tabBar page";
      }
    }
    if ((type === API_SWITCH_TAB || type === API_PRELOAD_PAGE) && routeOptions.meta.isTabBar && params.openType !== "appLaunch") {
      url = pagePath;
    }
    if (routeOptions.meta.isEntry) {
      url = url.replace(routeOptions.alias, "/");
    }
    params.url = encodeQueryString(url);
    if (type === API_UN_PRELOAD_PAGE) {
      return;
    } else if (type === API_PRELOAD_PAGE) {
      if (routeOptions.meta.isTabBar) {
        const pages = getCurrentPages$1();
        const tabBarPagePath = routeOptions.path.slice(1);
        if (pages.find((page) => page.route === tabBarPagePath)) {
          return "tabBar page `" + tabBarPagePath + "` already exists";
        }
      }
      return;
    }
    if (!options.skipNavigatorLock && navigatorLock === url && params.openType !== "appLaunch") {
      return `${navigatorLock} locked`;
    }
    if (!options.skipNavigatorLock && __uniConfig.ready) {
      navigatorLock = url;
    }
  };
}
const API_PAGE_SCROLL_TO = "pageScrollTo";
const PageScrollToProtocol = {
  scrollTop: Number,
  selector: String,
  duration: Number
};
const PageScrollToOptions = {
  formatArgs: {
    duration: 300
  }
};
const API_SHOW_TOAST = "showToast";
const SHOW_TOAST_ICON = [
  "success",
  "loading",
  "none",
  "error"
];
const ShowToastProtocol = {
  title: String,
  icon: String,
  image: String,
  duration: Number,
  position: String,
  mask: Boolean
};
const ShowToastOptions = {
  formatArgs: {
    title: "",
    icon(type, params) {
      params.icon = elemInArray(type, SHOW_TOAST_ICON);
    },
    image(value, params) {
      if (value) {
        params.image = getRealPath(value);
      } else {
        params.image = "";
      }
    },
    duration: 1500,
    mask: false
  }
};
const IndexOptions = {
  beforeInvoke() {
    const pageMeta = getCurrentPageMeta();
    if (pageMeta && !pageMeta.isTabBar) {
      return "not TabBar page";
    }
  },
  formatArgs: {
    index(value) {
      if (!__uniConfig.tabBar.list[value]) {
        return "tabbar item not found";
      }
    }
  }
};
({
  beforeInvoke: IndexOptions.beforeInvoke,
  formatArgs: /* @__PURE__ */ extend$1(
    {
      pagePath(value, params) {
        if (value) {
          params.pagePath = removeLeadingSlash(value);
        }
      }
    },
    IndexOptions.formatArgs
  )
});
const GRADIENT_RE = /^(linear|radial)-gradient\(.+?\);?$/;
({
  beforeInvoke: IndexOptions.beforeInvoke,
  formatArgs: {
    backgroundImage(value, params) {
      if (value && !GRADIENT_RE.test(value)) {
        params.backgroundImage = getRealPath(value);
      }
    },
    borderStyle(value, params) {
      if (value) {
        params.borderStyle = value === "white" ? "white" : "black";
      }
    }
  }
});
({
  beforeInvoke: IndexOptions.beforeInvoke,
  formatArgs: /* @__PURE__ */ extend$1(
    {
      text(value, params) {
        if (getLen(value) >= 4) {
          params.text = "...";
        }
      }
    },
    IndexOptions.formatArgs
  )
});
function removeNonTabBarPages(targetPageId) {
  const curTabBarPageVm = getCurrentPageVm();
  if (!curTabBarPageVm) {
    return;
  }
  const pagesMap = getCurrentPagesMap();
  const keys = pagesMap.keys();
  for (const routeKey of keys) {
    const page = pagesMap.get(routeKey);
    if (!page.$.__isTabBar) {
      removePage(routeKey);
    } else {
      page.$.__isActive = targetPageId !== void 0 && getPage$BasePage(page).id === targetPageId;
    }
  }
  if (curTabBarPageVm.$.__isTabBar && (targetPageId === void 0 || getPage$BasePage(curTabBarPageVm).id !== targetPageId)) {
    curTabBarPageVm.$.__isVisible = false;
    invokeHook(curTabBarPageVm, ON_HIDE);
  }
}
function isSamePage(url, $page) {
  return url === $page.fullPath || url === "/" && $page.meta.isEntry;
}
function getTabBarPageId(url) {
  const pages = getCurrentPagesMap().values();
  for (const page of pages) {
    const $page = getPage$BasePage(page);
    if (isSamePage(url, $page)) {
      page.$.__isActive = true;
      return $page.id;
    }
  }
}
function removeLastPage() {
  const page = getCurrentPage();
  if (!page) {
    return;
  }
  const $page = getPage$BasePage(page);
  removePage(normalizeRouteKey($page.path, $page.id));
}
function removeAllPages() {
  const keys = getCurrentPagesMap().keys();
  for (const routeKey of keys) {
    removePage(routeKey);
  }
}
const reLaunch = /* @__PURE__ */ defineAsyncApi(
  API_RE_LAUNCH,
  // @ts-expect-error
  ({ url, isAutomatedTesting }, { resolve: resolve2, reject }) => {
    if (!entryPageState.handledBeforeEntryPageRoutes) {
      reLaunchPagesBeforeEntryPages.push({
        args: { type: API_RE_LAUNCH, url, isAutomatedTesting },
        resolve: resolve2,
        reject
      });
      return;
    }
    {
      removeAllPages();
    }
    return navigate({ type: API_RE_LAUNCH, url, isAutomatedTesting }).then(resolve2).catch(reject);
  },
  ReLaunchProtocol,
  ReLaunchOptions
);
function navigate({ type, url, tabBarText, events, isAutomatedTesting }, __id__) {
  let router2;
  router2 = getApp$1().$router;
  return new Promise((resolve2, reject) => {
    let routeUrl = url;
    const { path, query } = parseUrl(routeUrl);
    const tabBarPageId = __id__;
    const state2 = createPageState(type, tabBarPageId);
    router2[type === "navigateTo" ? "push" : "replace"]({
      path,
      query,
      state: state2,
      force: true
    }).then((failure) => {
      if (isNavigationFailure(failure)) {
        return reject(failure.message);
      }
      if (type === "switchTab") {
        const finalTabBarText = routeUrl === url ? tabBarText : router2.resolve({ path, query }).meta.tabBarText;
        router2.currentRoute.value.meta.tabBarText = finalTabBarText;
      }
      if (type === "navigateTo") {
        const meta = router2.currentRoute.value.meta;
        if (!meta.eventChannel) {
          meta.eventChannel = new EventChannel(state2.__id__, events);
        } else if (events) {
          Object.keys(events).forEach((eventName) => {
            meta.eventChannel._addListener(
              eventName,
              "on",
              events[eventName]
            );
          });
          meta.eventChannel._clearCache();
        }
        return isAutomatedTesting ? resolve2({
          __id__: state2.__id__
        }) : resolve2({
          eventChannel: meta.eventChannel
        });
      }
      return isAutomatedTesting ? resolve2({ __id__: state2.__id__ }) : resolve2();
    });
  });
}
function handleBeforeEntryPageRoutes() {
  if (entryPageState.handledBeforeEntryPageRoutes) {
    return;
  }
  entryPageState.handledBeforeEntryPageRoutes = true;
  const navigateToPages = [...navigateToPagesBeforeEntryPages];
  navigateToPagesBeforeEntryPages.length = 0;
  navigateToPages.forEach(
    ({ args, resolve: resolve2, reject }) => (
      // @ts-expect-error
      navigate(args).then(resolve2).catch(reject)
    )
  );
  const switchTabPages = [...switchTabPagesBeforeEntryPages];
  switchTabPagesBeforeEntryPages.length = 0;
  switchTabPages.forEach(({ args, resolve: resolve2, reject }) => {
    {
      removeNonTabBarPages();
    }
    navigate(args, getTabBarPageId(args.url)).then(resolve2).catch(reject);
  });
  const redirectToPages = [...redirectToPagesBeforeEntryPages];
  redirectToPagesBeforeEntryPages.length = 0;
  redirectToPages.forEach(({ args, resolve: resolve2, reject }) => {
    {
      removeLastPage();
    }
    navigate(args).then(resolve2).catch(reject);
  });
  const reLaunchPages = [...reLaunchPagesBeforeEntryPages];
  reLaunchPagesBeforeEntryPages.length = 0;
  reLaunchPages.forEach(({ args, resolve: resolve2, reject }) => {
    {
      removeAllPages();
    }
    navigate(args).then(resolve2).catch(reject);
  });
}
const ua = navigator.userAgent;
const isAndroid = /* @__PURE__ */ /android/i.test(ua);
const isIOS = /* @__PURE__ */ /iphone|ipad|ipod/i.test(ua);
const isWindows = /* @__PURE__ */ ua.match(/Windows NT ([\d|\d.\d]*)/i);
const isMac = /* @__PURE__ */ /Macintosh|Mac/i.test(ua);
const isLinux = /* @__PURE__ */ /Linux|X11/i.test(ua);
const isIPadOS = isMac && navigator.maxTouchPoints > 0;
const isHarmony = /OpenHarmony/i.test(ua);
const isHarmony2in1 = isHarmony && /PC/i.test(ua);
const isHarmonyTablet = isHarmony && /Tablet/i.test(ua);
function getScreenFix() {
  return /^Apple/.test(navigator.vendor) && typeof window.orientation === "number";
}
function isLandscape(screenFix) {
  return screenFix && Math.abs(window.orientation) === 90;
}
function getScreenWidth(screenFix, landscape) {
  return screenFix ? Math[landscape ? "max" : "min"](screen.width, screen.height) : screen.width;
}
function getScreenHeight(screenFix, landscape) {
  return screenFix ? Math[landscape ? "min" : "max"](screen.height, screen.width) : screen.height;
}
function getWindowWidth() {
  const screenFix = getScreenFix();
  if (screenFix) {
    const screenWidth = getScreenWidth(screenFix, isLandscape(screenFix));
    return Math.min(
      window.innerWidth,
      document.documentElement.clientWidth,
      screenWidth
    ) || screenWidth;
  } else {
    return Math.min(window.innerWidth, document.documentElement.clientWidth);
  }
}
function getBaseSystemInfo() {
  const windowWidth = getWindowWidth();
  return {
    platform: isIOS ? "ios" : "other",
    pixelRatio: window.devicePixelRatio,
    windowWidth
  };
}
function IEVersion() {
  const userAgent = navigator.userAgent;
  const isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
  const isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
  const isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    const reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp.$1);
    if (fIEVersion > 6) {
      return fIEVersion;
    } else {
      return 6;
    }
  } else if (isEdge) {
    return -1;
  } else if (isIE11) {
    return 11;
  } else {
    return -1;
  }
}
function getTheme() {
  if (__uniConfig.darkmode == null || __uniConfig.darkmode === false)
    return void 0;
  if (__uniConfig.darkmode !== true)
    return isString(__uniConfig.darkmode) ? __uniConfig.darkmode : "light";
  try {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  } catch (error) {
    return "light";
  }
}
function getBrowserInfo() {
  let osname;
  let osversion = "0";
  let model;
  let deviceType = "phone";
  let platform = "";
  let deviceBrand;
  const language = navigator.language;
  if (isIOS) {
    deviceBrand = "iPhone";
    osname = "iOS";
    const osversionFind = ua.match(/OS\s([\w_]+)\slike/);
    if (osversionFind) {
      osversion = osversionFind[1].replace(/_/g, ".");
    }
    const iosVersion = osversion.split(".")[0];
    if (Number(iosVersion) >= 18) {
      const versionMatch = ua.match(/Version\/([\d\.]+)/);
      if (versionMatch) {
        osversion = versionMatch[1];
      }
    }
    const modelFind = ua.match(/\(([a-zA-Z]+);/);
    if (modelFind) {
      model = modelFind[1];
    }
  } else if (isAndroid) {
    osname = "Android";
    const osversionFind = ua.match(/Android[\s/]([\w\.]+)[;\s]/);
    if (osversionFind) {
      osversion = osversionFind[1];
    }
    const infoFind = ua.match(/\((.+?)\)/);
    const infos = infoFind ? infoFind[1].split(";") : ua.split(" ");
    const otherInfo = [
      /\bAndroid\b/i,
      /\bLinux\b/i,
      /\bU\b/i,
      /^\s?[a-z][a-z]$/i,
      /^\s?[a-z][a-z]-[a-z][a-z]$/i,
      /\bwv\b/i,
      /\/[\d\.,]+$/,
      /^\s?[\d\.,]+$/,
      /\bBrowser\b/i,
      /\bMobile\b/i
    ];
    for (let i = 0; i < infos.length; i++) {
      const info = infos[i];
      if (info.indexOf("Build") > 0) {
        model = info.split("Build")[0].trim();
        break;
      }
      let other;
      for (let o2 = 0; o2 < otherInfo.length; o2++) {
        if (otherInfo[o2].test(info)) {
          other = true;
          break;
        }
      }
      if (!other) {
        model = info.trim();
        break;
      }
    }
  } else if (isIPadOS) {
    deviceBrand = "iPad";
    model = "iPad";
    osname = "iOS";
    deviceType = "pad";
    osversion = isFunction(window.BigInt) ? "14.0" : "13.0";
    if (parseInt(osversion) === 14) {
      const versionMatched = ua.match(/Version\/(\S*)\b/);
      if (versionMatched) {
        osversion = versionMatched[1];
      }
    }
  } else if (isWindows || isMac || isLinux) {
    model = "PC";
    osname = "PC";
    deviceType = "pc";
    osversion = "0";
    let osversionFind = ua.match(/\((.+?)\)/)[1];
    if (isWindows) {
      osname = "Windows";
      switch (isWindows[1]) {
        case "5.1":
          osversion = "XP";
          break;
        case "6.0":
          osversion = "Vista";
          break;
        case "6.1":
          osversion = "7";
          break;
        case "6.2":
          osversion = "8";
          break;
        case "6.3":
          osversion = "8.1";
          break;
        case "10.0":
          osversion = "10";
          break;
      }
      const framework = osversionFind && osversionFind.match(/[Win|WOW]([\d]+)/);
      if (framework) {
        osversion += ` x${framework[1]}`;
      }
    } else if (isMac) {
      osname = "macos";
      platform = "mac";
      const _osversion = osversionFind && osversionFind.match(/Mac OS X (.+)/) || "";
      if (osversion) {
        osversion = _osversion[1].replace(/_/g, ".");
        if (osversion.indexOf(";") !== -1) {
          osversion = osversion.split(";")[0];
        }
      }
    } else if (isLinux) {
      osname = "Linux";
      const _osversion = osversionFind && osversionFind.match(/Linux (.*)/) || "";
      if (_osversion) {
        osversion = _osversion[1];
        if (osversion.indexOf(";") !== -1) {
          osversion = osversion.split(";")[0];
        }
      }
    }
  } else if (isHarmony) {
    deviceBrand = "HUAWEI";
    osname = "harmonyos";
    deviceType = isHarmony2in1 ? "pc" : isHarmonyTablet ? "pad" : "phone";
    const osversionFind = ua.match(/OpenHarmony\s([\d\.]+)/);
    if (osversionFind) {
      osversion = osversionFind[1];
    }
    model = void 0;
  } else {
    osname = "Other";
    osversion = "0";
    deviceType = "unknown";
  }
  const system = `${osname} ${osversion}`;
  if (!platform)
    platform = osname.toLowerCase();
  let browserName = "";
  let browserVersion = String(IEVersion());
  if (browserVersion !== "-1") {
    browserName = "IE";
  } else {
    const browseVendors = ["Version", "Firefox", "Chrome", "Edge{0,1}"];
    const vendors = ["Safari", "Firefox", "Chrome", "Edge"];
    for (let index2 = 0; index2 < browseVendors.length; index2++) {
      const vendor = browseVendors[index2];
      const reg = new RegExp(`(${vendor})/(\\S*)\\b`);
      if (reg.test(ua)) {
        browserName = vendors[index2];
        browserVersion = ua.match(reg)[2];
      }
    }
  }
  let deviceOrientation = "portrait";
  if (window.matchMedia) {
    try {
      if (window.matchMedia("(orientation:landscape)").matches) {
        deviceOrientation = "landscape";
      }
    } catch {
    }
  }
  if (deviceOrientation === "portrait" && window.screen.orientation !== void 0) {
    deviceOrientation = [90, 270].includes(window.screen.orientation.angle) ? "landscape" : "portrait";
  }
  if (deviceOrientation === "portrait" && window.orientation != null) {
    deviceOrientation = Math.abs(window.orientation) === 90 ? "landscape" : "portrait";
  }
  return {
    deviceBrand,
    brand: deviceBrand,
    deviceModel: model,
    deviceOrientation,
    model,
    system,
    platform,
    browserName: browserName.toLocaleLowerCase(),
    browserVersion,
    language,
    deviceType,
    ua,
    osname,
    osversion,
    theme: getTheme()
  };
}
function onThemeChange$2(callback) {
  if (__uniConfig.darkmode) {
    UniServiceJSBridge$1.on(ON_THEME_CHANGE, callback);
  }
}
function parseTheme(pageStyle) {
  let parsedStyle = {};
  if (__uniConfig.darkmode) {
    parsedStyle = normalizeStyles(
      pageStyle,
      __uniConfig.themeConfig,
      getTheme()
    );
  }
  return __uniConfig.darkmode ? parsedStyle : pageStyle;
}
function useTheme(pageStyle, onThemeChangeCallback) {
  const isReactivity = isReactive(pageStyle);
  const reactivePageStyle = isReactivity ? reactive(parseTheme(pageStyle)) : parseTheme(pageStyle);
  if (__uniConfig.darkmode && isReactivity) {
    watch(pageStyle, (value) => {
      const _pageStyle = parseTheme(value);
      for (const key in _pageStyle) {
        reactivePageStyle[key] = _pageStyle[key];
      }
    });
  }
  onThemeChangeCallback && onThemeChange$2(onThemeChangeCallback);
  return reactivePageStyle;
}
function cssSupports(css) {
  const supports = window.CSS && window.CSS.supports;
  return supports && (supports(css) || supports.apply(window.CSS, css.split(":")));
}
const cssEnv = /* @__PURE__ */ cssSupports("top:env(a)");
const cssConstant = /* @__PURE__ */ cssSupports("top:constant(a)");
const envMethod = /* @__PURE__ */ (() => cssEnv ? "env" : cssConstant ? "constant" : "")();
function updateCurPageCssVar(pageMeta) {
  let windowTopValue = 0;
  let windowBottomValue = 0;
  if (pageMeta.navigationBar.style !== "custom" && ["default", "float"].indexOf(pageMeta.navigationBar.type) > -1) {
    windowTopValue = NAVBAR_HEIGHT;
  }
  updatePageCssVar({
    "--window-top": normalizeWindowTop(windowTopValue),
    "--window-bottom": normalizeWindowBottom(windowBottomValue)
  });
}
function normalizeWindowTop(windowTop) {
  return envMethod ? `calc(${windowTop}px + ${envMethod}(safe-area-inset-top))` : `${windowTop}px`;
}
function normalizeWindowBottom(windowBottom) {
  return envMethod ? `calc(${windowBottom}px + ${envMethod}(safe-area-inset-bottom))` : `${windowBottom}px`;
}
const launchOptions = /* @__PURE__ */ createLaunchOptions();
const enterOptions = /* @__PURE__ */ createLaunchOptions();
function getEnterOptions() {
  return extend$1({}, enterOptions);
}
function initLaunchOptions({
  path,
  query
}) {
  extend$1(launchOptions, {
    path,
    query
  });
  extend$1(enterOptions, launchOptions);
  return extend$1({}, launchOptions);
}
function getScopeId(instance2) {
  return instance2.type.__scopeId;
}
const SEP = "$$";
const currentPagesMap = /* @__PURE__ */ new Map();
function getPage$BasePage(page) {
  return page.$page;
}
const entryPageState = {
  handledBeforeEntryPageRoutes: false
};
const navigateToPagesBeforeEntryPages = [];
const switchTabPagesBeforeEntryPages = [];
const redirectToPagesBeforeEntryPages = [];
const reLaunchPagesBeforeEntryPages = [];
function pruneCurrentPages() {
  currentPagesMap.forEach((page, id2) => {
    if (page.$.isUnmounted) {
      currentPagesMap.delete(id2);
    }
  });
}
function getCurrentPagesMap() {
  return currentPagesMap;
}
const pageUnloadCallbacks = /* @__PURE__ */ new Set();
function onPageUnload(callback) {
  pageUnloadCallbacks.add(callback);
  return () => pageUnloadCallbacks.delete(callback);
}
function getCurrentPages$1() {
  const curPages = getCurrentBasePages();
  return curPages;
}
function getCurrentBasePages() {
  const curPages = [];
  const pages = currentPagesMap.values();
  for (const page of pages) {
    if (page.$.__isTabBar) {
      if (page.$.__isActive) {
        curPages.push(page);
      }
    } else {
      curPages.push(page);
    }
  }
  return curPages;
}
function removeRouteCache(routeKey) {
  const cacheEntry = pageCacheMap.get(routeKey);
  if (cacheEntry) {
    pageCacheMap.delete(routeKey);
    routeCache.pruneCacheEntry(cacheEntry);
  }
}
function removePage(routeKey, removeRouteCaches = true) {
  const pageVm = currentPagesMap.get(routeKey);
  if (!pageVm) {
    return;
  }
  const pageId = getPage$BasePage(pageVm).id;
  pageVm.$.__isUnload = true;
  invokeHook(pageVm, ON_UNLOAD);
  pageUnloadCallbacks.forEach((callback) => callback(pageId));
  currentPagesMap.delete(routeKey);
  removeRouteCaches && removeRouteCache(routeKey);
}
let id = /* @__PURE__ */ getStateId();
function createPageState(type, __id__) {
  return {
    __id__: __id__ || ++id,
    __type__: type
  };
}
function initPublicPage(route) {
  const meta = usePageMeta();
  let fullPath = route.fullPath;
  if (route.meta.isEntry && fullPath.indexOf(route.meta.route) === -1) {
    fullPath = "/" + route.meta.route + fullPath.replace("/", "");
  }
  return initPageInternalInstance("navigateTo", fullPath, {}, meta);
}
function initPage(vm) {
  let route;
  route = vm.$route;
  const page = initPublicPage(route);
  initPageVm(vm, page);
  {
    currentPagesMap.set(normalizeRouteKey(page.path, page.id), vm);
    if (currentPagesMap.size === 1) {
      setTimeout(() => {
        handleBeforeEntryPageRoutes();
      }, 0);
    }
  }
}
function normalizeRouteKey(path, id2) {
  return path + SEP + id2;
}
function useKeepAliveRoute() {
  const route = useRoute();
  const routeKey = computed(
    () => normalizeRouteKey("/" + route.meta.route, getStateId())
  );
  const isTabBar = computed(() => route.meta.isTabBar);
  return {
    routeKey,
    isTabBar,
    routeCache
  };
}
const pageCacheMap = /* @__PURE__ */ new Map();
const routeCache = {
  get(key) {
    return pageCacheMap.get(key);
  },
  set(key, value) {
    pruneRouteCache(key);
    pageCacheMap.set(key, value);
  },
  delete(key) {
    const vnode = pageCacheMap.get(key);
    if (!vnode) {
      return;
    }
    pageCacheMap.delete(key);
  },
  forEach(fn) {
    pageCacheMap.forEach(fn);
  }
};
function pruneRouteCache(key) {
  const pageId = parseInt(key.split(SEP)[1]);
  if (!pageId) {
    return;
  }
  routeCache.forEach((cacheEntry, key2) => {
    const cPageId = parseInt(key2.split(SEP)[1]);
    if (cPageId && cPageId > pageId) {
      routeCache.delete(key2);
      routeCache.pruneCacheEntry(cacheEntry);
      nextTick(() => pruneCurrentPages());
    }
  });
}
function updateCurPageAttrs(pageMeta) {
  {
    const nvueDirKey = "nvue-dir-" + __uniConfig.nvue["flex-direction"];
    if (pageMeta.isNVue) {
      document.body.setAttribute("nvue", "");
      document.body.setAttribute(nvueDirKey, "");
    } else {
      document.body.removeAttribute("nvue");
      document.body.removeAttribute(nvueDirKey);
    }
  }
}
function onPageShow(instance2, pageMeta) {
  updateCurPageBodyScopeId(instance2);
  updateBodyScopeId(instance2);
  updateCurPageCssVar(pageMeta);
  updateCurPageAttrs(pageMeta);
  initPageScrollListener(instance2, pageMeta);
}
function onPageReady(instance2) {
  if (!updateCurPageBodyScopeId(instance2) && false) {
    console.warn("uni-page-body not found");
  }
}
function updateCurPageBodyScopeId(instance2) {
  var _a, _b;
  const pageRoot = (_b = (_a = getPageInstanceByChild(instance2)) == null ? void 0 : _a.proxy) == null ? void 0 : _b.$el;
  const pageBodyEl = pageRoot == null ? void 0 : pageRoot.querySelector("uni-page-body");
  if (!pageBodyEl) {
    return false;
  }
  instance2.type;
  const pageScopeId = getScopeId(instance2);
  pageScopeId && pageBodyEl.setAttribute(pageScopeId, "");
  return true;
}
let curScopeId;
function updateBodyScopeId(instance2) {
  const scopeId = getScopeId(instance2);
  const { body } = document;
  curScopeId && body.removeAttribute(curScopeId);
  scopeId && body.setAttribute(scopeId, "");
  curScopeId = scopeId;
}
const supportsPassive = /* @__PURE__ */ (() => {
  let supportsPassive2 = false;
  try {
    const opts = {};
    Object.defineProperty(opts, "passive", {
      get() {
        supportsPassive2 = true;
      }
    });
    window.addEventListener("test-passive", () => {
    }, opts);
  } catch (e2) {
  }
  return supportsPassive2;
})();
const passiveOptions$2 = supportsPassive ? {
  passive: false
} : false;
let curScrollListener;
function initPageScrollListener(instance2, pageMeta) {
  document.removeEventListener("touchmove", disableScrollListener);
  if (curScrollListener) {
    document.removeEventListener("scroll", curScrollListener);
  }
  if (pageMeta.disableScroll) {
    return document.addEventListener(
      "touchmove",
      disableScrollListener,
      passiveOptions$2
    );
  }
  const { onPageScroll, onReachBottom } = instance2;
  const navigationBarTransparent = pageMeta.navigationBar.type === "transparent";
  if (!(onPageScroll == null ? void 0 : onPageScroll.length) && !(onReachBottom == null ? void 0 : onReachBottom.length) && !navigationBarTransparent) {
    return;
  }
  const opts = {};
  const pageId = getPage$BasePage(instance2.proxy).id;
  if (onPageScroll || navigationBarTransparent) {
    opts.onPageScroll = createOnPageScroll(
      pageId,
      onPageScroll,
      navigationBarTransparent
    );
  }
  if (onReachBottom == null ? void 0 : onReachBottom.length) {
    opts.onReachBottomDistance = pageMeta.onReachBottomDistance || ON_REACH_BOTTOM_DISTANCE;
    opts.onReachBottom = () => UniViewJSBridge$1.publishHandler(ON_REACH_BOTTOM, {}, pageId);
  }
  curScrollListener = createScrollListener(opts);
  requestAnimationFrame(
    () => document.addEventListener("scroll", curScrollListener)
  );
}
function createOnPageScroll(pageId, onPageScroll, navigationBarTransparent) {
  return (scrollTop) => {
    if (onPageScroll) {
      UniViewJSBridge$1.publishHandler(ON_PAGE_SCROLL, { scrollTop }, pageId);
    }
    if (navigationBarTransparent) {
      UniViewJSBridge$1.emit(pageId + "." + ON_PAGE_SCROLL, {
        scrollTop
      });
    }
  };
}
function addBase(filePath) {
  const { base: baseUrl } = __uniConfig.router;
  if (addLeadingSlash(filePath).indexOf(baseUrl) === 0) {
    return addLeadingSlash(filePath);
  }
  return baseUrl + filePath;
}
function getRealPath(filePath) {
  const { base, assets } = __uniConfig.router;
  if (base === "./") {
    if (filePath.indexOf("./") === 0 && (filePath.includes("/static/") || filePath.indexOf("./" + (assets || "assets") + "/") === 0)) {
      filePath = filePath.slice(1);
    }
  }
  if (filePath.indexOf("/") === 0) {
    if (filePath.indexOf("//") === 0) {
      filePath = "https:" + filePath;
    } else {
      return addBase(filePath.slice(1));
    }
  }
  if (SCHEME_RE.test(filePath) || DATA_RE.test(filePath) || filePath.indexOf("blob:") === 0) {
    return filePath;
  }
  const pages = getCurrentBasePages();
  if (pages.length) {
    return addBase(
      getRealRoute(
        getPage$BasePage(pages[pages.length - 1]).route,
        filePath
      ).slice(1)
    );
  }
  return filePath;
}
const files = {};
function fileToUrl(file) {
  for (const key in files) {
    if (hasOwn$1(files, key)) {
      const oldFile = files[key];
      if (oldFile === file) {
        return key;
      }
    }
  }
  var url = (window.URL || window.webkitURL).createObjectURL(file);
  files[url] = file;
  return url;
}
const ResizeSensor = /* @__PURE__ */ defineBuiltInComponent({
  name: "ResizeSensor",
  props: {
    initial: {
      type: Boolean,
      default: false
    }
  },
  emits: ["resize"],
  setup(props2, {
    emit: emit2
  }) {
    const rootRef = ref(null);
    const reset = useResizeSensorReset(rootRef);
    const update = useResizeSensorUpdate(rootRef, emit2, reset);
    useResizeSensorLifecycle(rootRef, props2, update, reset);
    return () => createVNode("uni-resize-sensor", {
      "ref": rootRef,
      "onAnimationstartOnce": update
    }, [createVNode("div", {
      "onScroll": update
    }, [createVNode("div", null, null)], 40, ["onScroll"]), createVNode("div", {
      "onScroll": update
    }, [createVNode("div", null, null)], 40, ["onScroll"])], 40, ["onAnimationstartOnce"]);
  }
});
function useResizeSensorUpdate(rootRef, emit2, reset) {
  const size2 = reactive({
    width: -1,
    height: -1
  });
  watch(() => extend$1({}, size2), (value) => emit2("resize", value));
  return () => {
    const rootEl = rootRef.value;
    if (!rootEl)
      return;
    const rect = rootEl.getBoundingClientRect();
    size2.width = rect.width;
    size2.height = rect.height;
    reset();
  };
}
function useResizeSensorReset(rootRef) {
  return () => {
    const {
      firstElementChild,
      lastElementChild
    } = rootRef.value;
    firstElementChild.scrollLeft = 1e5;
    firstElementChild.scrollTop = 1e5;
    lastElementChild.scrollLeft = 1e5;
    lastElementChild.scrollTop = 1e5;
  };
}
function useResizeSensorLifecycle(rootRef, props2, update, reset) {
  onActivated(reset);
  onMounted(() => {
    if (props2.initial) {
      nextTick(update);
    }
    const rootEl = rootRef.value;
    if (rootEl.offsetParent !== rootEl.parentElement) {
      rootEl.parentElement.style.position = "relative";
    }
    if (!("AnimationEvent" in window)) {
      reset();
    }
  });
}
let resetTimer;
function iosHideKeyboard() {
}
const props$u = {
  cursorSpacing: {
    type: [Number, String],
    default: 0
  },
  showConfirmBar: {
    type: [Boolean, String],
    default: "auto"
  },
  adjustPosition: {
    type: [Boolean, String],
    default: true
  },
  autoBlur: {
    type: [Boolean, String],
    default: false
  }
};
const emit$1 = ["keyboardheightchange"];
function useKeyboard$1(props2, elRef, trigger2) {
  function initKeyboard(el) {
    const isApple2 = computed(
      () => String(navigator.vendor).indexOf("Apple") === 0
    );
    el.addEventListener("focus", () => {
      clearTimeout(resetTimer);
      document.addEventListener("click", iosHideKeyboard, false);
    });
    const onKeyboardHide = () => {
      document.removeEventListener("click", iosHideKeyboard, false);
      if (isApple2.value) {
        document.documentElement.scrollTo(
          document.documentElement.scrollLeft,
          document.documentElement.scrollTop
        );
      }
    };
    el.addEventListener("blur", () => {
      if (isApple2.value) {
        el.blur();
      }
      onKeyboardHide();
    });
  }
  watch(
    () => elRef.value,
    (el) => el && initKeyboard(el)
  );
}
const props$s = {
  src: {
    type: String,
    default: ""
  },
  mode: {
    type: String,
    default: "scaleToFill"
  },
  lazyLoad: {
    type: [Boolean, String],
    default: false
  },
  draggable: {
    type: Boolean,
    default: false
  }
};
const FIX_MODES = {
  widthFix: ["offsetWidth", "height", (value, ratio) => value / ratio],
  heightFix: ["offsetHeight", "width", (value, ratio) => value * ratio]
};
const IMAGE_MODES = {
  aspectFit: ["center center", "contain"],
  aspectFill: ["center center", "cover"],
  widthFix: [, "100% 100%"],
  heightFix: [, "100% 100%"],
  top: ["center top"],
  bottom: ["center bottom"],
  center: ["center center"],
  left: ["left center"],
  right: ["right center"],
  "top left": ["left top"],
  "top right": ["right top"],
  "bottom left": ["left bottom"],
  "bottom right": ["right bottom"]
};
const index$q = /* @__PURE__ */ defineBuiltInComponent({
  name: "Image",
  props: props$s,
  setup(props2, {
    emit: emit2
  }) {
    const rootRef = ref(null);
    const state2 = useImageState(rootRef, props2);
    const trigger2 = useCustomEvent(rootRef, emit2);
    const {
      fixSize
    } = useImageSize(rootRef, props2, state2);
    useImageLoader(state2, props2, rootRef, fixSize, trigger2);
    return () => {
      return createVNode("uni-image", {
        "ref": rootRef
      }, [createVNode("div", {
        "style": state2.modeStyle
      }, null, 4), FIX_MODES[props2.mode] ? createVNode(ResizeSensor, {
        "onResize": fixSize
      }, null, 8, ["onResize"]) : createVNode("span", null, null)], 512);
    };
  }
});
function useImageState(rootRef, props2) {
  const imgSrc = ref("");
  const modeStyleRef = computed(() => {
    let size2 = "auto";
    let position = "";
    const opts = IMAGE_MODES[props2.mode];
    if (!opts) {
      position = "0% 0%";
      size2 = "100% 100%";
    } else {
      opts[0] && (position = opts[0]);
      opts[1] && (size2 = opts[1]);
    }
    return `background-image:${imgSrc.value ? 'url("' + imgSrc.value + '")' : "none"};background-position:${position};background-size:${size2};`;
  });
  const state2 = reactive({
    rootEl: rootRef,
    src: computed(() => props2.src ? getRealPath(props2.src) : ""),
    origWidth: 0,
    origHeight: 0,
    origStyle: {
      width: "",
      height: ""
    },
    modeStyle: modeStyleRef,
    imgSrc
  });
  onMounted(() => {
    const rootEl = rootRef.value;
    state2.origWidth = rootEl.clientWidth || 0;
    state2.origHeight = rootEl.clientHeight || 0;
  });
  return state2;
}
function useImageLoader(state2, props2, rootRef, fixSize, trigger2) {
  let img;
  let draggableImg;
  const setState = (width = 0, height = 0, imgSrc = "") => {
    state2.origWidth = width;
    state2.origHeight = height;
    state2.imgSrc = imgSrc;
  };
  const loadImage = (src) => {
    if (!src) {
      resetImage();
      setState();
      return;
    }
    img = img || new Image();
    img.onload = (evt) => {
      const {
        width,
        height
      } = img;
      setState(width, height, src);
      nextTick(() => {
        fixSize();
      });
      img.draggable = props2.draggable;
      if (draggableImg) {
        draggableImg.remove();
      }
      draggableImg = img;
      rootRef.value.appendChild(img);
      resetImage();
      trigger2("load", evt, {
        width,
        height
      });
    };
    img.onerror = (evt) => {
      setState();
      resetImage();
      trigger2("error", evt, {
        errMsg: `GET ${state2.src} 404 (Not Found)`
      });
    };
    img.src = src;
  };
  const resetImage = () => {
    if (img) {
      img.onload = null;
      img.onerror = null;
      img = null;
    }
  };
  watch(() => state2.src, (value) => loadImage(value));
  watch(() => state2.imgSrc, (value) => {
    if (!value && draggableImg) {
      draggableImg.remove();
      draggableImg = null;
    }
  });
  onMounted(() => loadImage(state2.src));
  onBeforeUnmount(() => resetImage());
}
const isChrome = navigator.vendor === "Google Inc.";
function fixNumber(num) {
  if (isChrome && num > 10) {
    num = Math.round(num / 2) * 2;
  }
  return num;
}
function useImageSize(rootRef, props2, state2) {
  const fixSize = () => {
    const {
      mode: mode2
    } = props2;
    const names = FIX_MODES[mode2];
    if (!names) {
      return;
    }
    const {
      origWidth,
      origHeight
    } = state2;
    const ratio = origWidth && origHeight ? origWidth / origHeight : 0;
    if (!ratio) {
      return;
    }
    const rootEl = rootRef.value;
    const value = rootEl[names[0]];
    if (value) {
      rootEl.style[names[1]] = fixNumber(names[2](value, ratio)) + "px";
    }
  };
  const resetSize = () => {
    const {
      style
    } = rootRef.value;
    const {
      origStyle: {
        width,
        height
      }
    } = state2;
    style.width = width;
    style.height = height;
  };
  watch(() => props2.mode, (value, oldValue) => {
    if (FIX_MODES[oldValue]) {
      resetSize();
    }
    if (FIX_MODES[value]) {
      fixSize();
    }
  });
  return {
    fixSize,
    resetSize
  };
}
function throttle(fn, wait) {
  let last = 0;
  let timeout;
  let waitCallback;
  const newFn = function(...arg) {
    const now = Date.now();
    clearTimeout(timeout);
    waitCallback = () => {
      waitCallback = null;
      last = now;
      fn.apply(this, arg);
    };
    if (now - last < wait) {
      timeout = setTimeout(waitCallback, wait - (now - last));
      return;
    }
    waitCallback();
  };
  newFn.cancel = function() {
    clearTimeout(timeout);
    waitCallback = null;
  };
  newFn.flush = function() {
    clearTimeout(timeout);
    waitCallback && waitCallback();
  };
  return newFn;
}
const passiveOptions$1 = /* @__PURE__ */ passive(true);
const states = [];
let userInteract = 0;
let inited = false;
const setUserAction = (userAction) => states.forEach((vm) => vm.userAction = userAction);
function addInteractListener(vm = { userAction: false }) {
  if (!inited) {
    const eventNames = [
      "touchstart",
      "touchmove",
      "touchend",
      "mousedown",
      "mouseup"
    ];
    eventNames.forEach((eventName) => {
      document.addEventListener(
        eventName,
        function() {
          !userInteract && setUserAction(true);
          userInteract++;
          setTimeout(() => {
            !--userInteract && setUserAction(false);
          }, 0);
        },
        passiveOptions$1
      );
    });
    inited = true;
  }
  states.push(vm);
}
function removeInteractListener(vm) {
  const index2 = states.indexOf(vm);
  if (index2 >= 0) {
    states.splice(index2, 1);
  }
}
const getInteractStatus = () => !!userInteract;
function useUserAction() {
  const state2 = reactive({
    /**
     * 是否用户激活
     */
    userAction: false
  });
  onMounted(() => {
    addInteractListener(state2);
  });
  onBeforeUnmount(() => {
    removeInteractListener(state2);
  });
  return {
    state: state2
  };
}
function useScopedAttrs() {
  const state2 = reactive({
    attrs: {}
  });
  onMounted(() => {
    let instance2 = getCurrentInstance();
    while (instance2) {
      const scopeId = instance2.type.__scopeId;
      if (scopeId) {
        state2.attrs[scopeId] = "";
      }
      instance2 = instance2.proxy && instance2.proxy.$mpType === "page" ? null : instance2.parent;
    }
  });
  return {
    state: state2
  };
}
function useFormField(nameKey, value) {
  const uniForm = inject(
    uniFormKey,
    false
    // remove warning
  );
  if (!uniForm) {
    return;
  }
  const instance2 = getCurrentInstance();
  const ctx = {
    submit() {
      const proxy = instance2.proxy;
      return [
        proxy[nameKey],
        isString(value) ? proxy[value] : value.value
      ];
    },
    reset() {
      if (isString(value)) {
        instance2.proxy[value] = "";
      } else {
        value.value = "";
      }
    }
  };
  uniForm.addField(ctx);
  onBeforeUnmount(() => {
    uniForm.removeField(ctx);
  });
}
function getSelectedTextRange(_, resolve2) {
  const activeElement = document.activeElement;
  if (!activeElement) {
    return resolve2({});
  }
  const data = {};
  if (["input", "textarea"].includes(activeElement.tagName.toLowerCase())) {
    data.start = activeElement.selectionStart;
    data.end = activeElement.selectionEnd;
  }
  resolve2(data);
}
const UniViewJSBridgeSubscribe = function() {
  registerViewMethod(
    getCurrentPageId(),
    "getSelectedTextRange",
    getSelectedTextRange
  );
};
function getValueString(value, type, maxlength) {
  if (type === "number" && isNaN(Number(value))) {
    value = "";
  }
  const valueStr = value === null || value === void 0 ? "" : String(value);
  {
    return valueStr;
  }
}
const INPUT_MODES = [
  "none",
  "text",
  "decimal",
  "numeric",
  "tel",
  "search",
  "email",
  "url"
];
const props$r = /* @__PURE__ */ extend$1(
  {},
  {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    /**
     * 已废弃属性，用于历史兼容
     */
    autoFocus: {
      type: [Boolean, String],
      default: false
    },
    focus: {
      type: [Boolean, String],
      default: false
    },
    cursor: {
      type: [Number, String],
      default: -1
    },
    selectionStart: {
      type: [Number, String],
      default: -1
    },
    selectionEnd: {
      type: [Number, String],
      default: -1
    },
    type: {
      type: String,
      default: "text"
    },
    password: {
      type: [Boolean, String],
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    placeholderStyle: {
      type: String,
      default: ""
    },
    placeholderClass: {
      type: String,
      default: ""
    },
    maxlength: {
      type: [Number, String],
      default: 140
    },
    confirmType: {
      type: String,
      default: "done"
    },
    confirmHold: {
      type: Boolean,
      default: false
    },
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    },
    step: {
      type: String,
      default: "0.000000000000000001"
    },
    inputmode: {
      type: String,
      default: void 0,
      validator: (value) => !!~INPUT_MODES.indexOf(value)
    },
    cursorColor: {
      type: String,
      default: ""
    }
  },
  props$u
);
const emit = [
  "input",
  "focus",
  "blur",
  "update:value",
  "update:modelValue",
  "update:focus",
  "compositionstart",
  "compositionupdate",
  "compositionend",
  ...emit$1
];
function useBase(props2, rootRef, emit2) {
  const fieldRef = ref(null);
  const trigger2 = useCustomEvent(rootRef, emit2);
  const selectionStart = computed(() => {
    const selectionStart2 = Number(props2.selectionStart);
    return isNaN(selectionStart2) ? -1 : selectionStart2;
  });
  const selectionEnd = computed(() => {
    const selectionEnd2 = Number(props2.selectionEnd);
    return isNaN(selectionEnd2) ? -1 : selectionEnd2;
  });
  const cursor = computed(() => {
    const cursor2 = Number(props2.cursor);
    return isNaN(cursor2) ? -1 : cursor2;
  });
  const maxlength = computed(() => {
    var maxlength2 = Number(props2.maxlength);
    {
      return isNaN(maxlength2) ? 140 : maxlength2;
    }
  });
  let value = "";
  {
    value = getValueString(props2.modelValue, props2.type) || getValueString(props2.value, props2.type);
  }
  const state2 = reactive({
    value,
    valueOrigin: value,
    maxlength,
    focus: props2.focus,
    composing: false,
    selectionStart,
    selectionEnd,
    cursor
  });
  watch(
    () => state2.focus,
    (val) => emit2("update:focus", val)
  );
  watch(
    () => state2.maxlength,
    (val) => state2.value = state2.value.slice(0, val),
    {
      immediate: false
    }
  );
  return {
    fieldRef,
    state: state2,
    trigger: trigger2
  };
}
function useValueSync(props2, state2, emit2, trigger2, fieldRef) {
  let lastUserInputValue = null;
  let valueChangeFn = null;
  {
    valueChangeFn = debounce(
      (val) => {
        const fieldElement = fieldRef.value;
        const newValue = getValueString(val, props2.type);
        if (fieldElement && document.activeElement === fieldElement && newValue === lastUserInputValue) {
          return;
        }
        state2.value = newValue;
      },
      100,
      { setTimeout, clearTimeout }
    );
  }
  watch(() => props2.modelValue, valueChangeFn);
  watch(() => props2.value, valueChangeFn);
  const triggerInputFn = throttle((event, detail) => {
    valueChangeFn.cancel();
    emit2("update:modelValue", detail.value);
    emit2("update:value", detail.value);
    trigger2("input", event, detail);
  }, 100);
  const triggerInput = (event, detail, force) => {
    valueChangeFn.cancel();
    lastUserInputValue = detail.value;
    triggerInputFn(event, detail);
    if (force) {
      triggerInputFn.flush();
    }
  };
  onBeforeMount(() => {
    valueChangeFn.cancel();
    triggerInputFn.cancel();
  });
  return {
    trigger: trigger2,
    triggerInput
  };
}
function useAutoFocus(props2, fieldRef) {
  useUserAction();
  const needFocus = computed(() => props2.autoFocus || props2.focus);
  function focus() {
    if (!needFocus.value) {
      return;
    }
    const field = fieldRef.value;
    if (!field || false) {
      setTimeout(focus, 100);
      return;
    }
    {
      field.focus();
    }
  }
  function blur() {
    const field = fieldRef.value;
    if (field) {
      field.blur();
    }
  }
  watch(
    () => props2.focus,
    (value) => {
      if (value) {
        focus();
      } else {
        blur();
      }
    }
  );
  onMounted(() => {
    if (needFocus.value) {
      nextTick(focus);
    }
  });
}
function useEvent(fieldRef, state2, props2, trigger2, triggerInput, beforeInput) {
  function checkSelection() {
    const field = fieldRef.value;
    if (field && state2.focus && state2.selectionStart > -1 && state2.selectionEnd > -1 && field.type !== "number") {
      field.selectionStart = state2.selectionStart;
      field.selectionEnd = state2.selectionEnd;
    }
  }
  function checkCursor() {
    const field = fieldRef.value;
    if (field && state2.focus && state2.selectionStart < 0 && state2.selectionEnd < 0 && state2.cursor > -1 && field.type !== "number") {
      field.selectionEnd = field.selectionStart = state2.cursor;
    }
  }
  function getFieldSelectionEnd(field) {
    if (field.type === "number") {
      return null;
    } else {
      return field.selectionEnd;
    }
  }
  function initField() {
    const field = fieldRef.value;
    if (!field)
      return;
    const onFocus = function(event) {
      state2.focus = true;
      trigger2("focus", event, {
        value: state2.value
      });
      checkSelection();
      checkCursor();
    };
    const onInput = function(event, force) {
      event.stopPropagation();
      if (isFunction(beforeInput) && beforeInput(event, state2) === false) {
        return;
      }
      state2.value = field.value;
      if (!state2.composing || !props2.ignoreCompositionEvent) {
        triggerInput(
          event,
          {
            value: field.value,
            cursor: getFieldSelectionEnd(field)
          },
          force
        );
      }
    };
    const onBlur = function(event) {
      if (state2.composing) {
        state2.composing = false;
        onInput(event, true);
      }
      state2.focus = false;
      trigger2("blur", event, {
        value: state2.value,
        cursor: getFieldSelectionEnd(event.target)
      });
    };
    field.addEventListener("change", (event) => event.stopPropagation());
    field.addEventListener("focus", onFocus);
    field.addEventListener("blur", onBlur);
    field.addEventListener("input", onInput);
    field.addEventListener("compositionstart", (event) => {
      event.stopPropagation();
      state2.composing = true;
      _onComposition(event);
    });
    field.addEventListener("compositionend", (event) => {
      event.stopPropagation();
      if (state2.composing) {
        state2.composing = false;
        onInput(event);
      }
      _onComposition(event);
    });
    field.addEventListener("compositionupdate", _onComposition);
    function _onComposition(event) {
      if (!props2.ignoreCompositionEvent) {
        trigger2(event.type, event, {
          value: event.data
        });
      }
    }
  }
  watch([() => state2.selectionStart, () => state2.selectionEnd], checkSelection);
  watch(() => state2.cursor, checkCursor);
  watch(() => fieldRef.value, initField);
}
function useField(props2, rootRef, emit2, beforeInput) {
  UniViewJSBridgeSubscribe();
  const { fieldRef, state: state2, trigger: trigger2 } = useBase(props2, rootRef, emit2);
  const { triggerInput } = useValueSync(props2, state2, emit2, trigger2, fieldRef);
  useAutoFocus(props2, fieldRef);
  useKeyboard$1(props2, fieldRef);
  const { state: scopedAttrsState } = useScopedAttrs();
  useFormField("name", state2);
  useEvent(fieldRef, state2, props2, trigger2, triggerInput, beforeInput);
  const fixDisabledColor = String(navigator.vendor).indexOf("Apple") === 0 && CSS.supports("image-orientation:from-image");
  return {
    fieldRef,
    state: state2,
    scopedAttrsState,
    fixDisabledColor,
    trigger: trigger2
  };
}
const resolveDigitDecimalPointDeleteContentBackward = once(() => {
  {
    const ua2 = navigator.userAgent;
    let osVersion = "";
    const osVersionFind = ua2.match(/OS\s([\w_]+)\slike/);
    if (osVersionFind) {
      osVersion = osVersionFind[1].replace(/_/g, ".");
    } else if (/Macintosh|Mac/i.test(ua2) && navigator.maxTouchPoints > 0) {
      const versionMatched = ua2.match(/Version\/(\S*)\b/);
      if (versionMatched) {
        osVersion = versionMatched[1];
      }
    }
    return !!osVersion && parseInt(osVersion) >= 16 && parseFloat(osVersion) < 17.2;
  }
});
function resolveDigitDecimalPoint(event, cache, state2, input, resetCache) {
  if (cache.value) {
    if (event.data === ".") {
      if (cache.value.slice(-1) === ".") {
        state2.value = input.value = cache.value = cache.value.slice(0, -1);
        return false;
      }
      if (cache.value && !cache.value.includes(".") && cache.value === input.value) {
        cache.value += ".";
        if (resetCache) {
          resetCache.fn = () => {
            state2.value = input.value = cache.value = cache.value.slice(0, -1);
            input.removeEventListener("blur", resetCache.fn);
          };
          input.addEventListener("blur", resetCache.fn);
        }
        return false;
      }
    } else if (event.inputType === "deleteContentBackward") {
      if (resolveDigitDecimalPointDeleteContentBackward()) {
        if (cache.value.slice(-2, -1) === ".") {
          cache.value = state2.value = input.value = cache.value.slice(0, -2);
          return true;
        }
      }
    }
  }
}
const props$q = /* @__PURE__ */ extend$1({}, props$r, {
  placeholderClass: {
    type: String,
    default: "input-placeholder"
  },
  textContentType: {
    type: String,
    default: ""
  }
});
function isPaste(event) {
  return event.inputType === "insertFromPaste";
}
function useCache(props2, type) {
  if (type.value === "number") {
    const value = typeof props2.modelValue === "undefined" ? props2.value : props2.modelValue;
    const cache = ref(typeof value !== "undefined" && value !== null ? value.toLocaleString() : "");
    watch(() => props2.modelValue, (value2) => {
      cache.value = typeof value2 !== "undefined" && value2 !== null ? value2.toLocaleString() : "";
    });
    watch(() => props2.value, (value2) => {
      cache.value = typeof value2 !== "undefined" && value2 !== null ? value2.toLocaleString() : "";
    });
    return cache;
  } else {
    return ref("");
  }
}
const Input = /* @__PURE__ */ defineBuiltInComponent({
  name: "Input",
  props: props$q,
  emits: ["confirm", ...emit],
  setup(props2, {
    emit: emit2,
    expose
  }) {
    const INPUT_TYPES = ["text", "number", "idcard", "digit", "password", "tel"];
    const AUTOCOMPLETES = ["off", "one-time-code"];
    const type = computed(() => {
      let type2 = "";
      switch (props2.type) {
        case "text":
          type2 = "text";
          if (props2.confirmType === "search") {
            type2 = "search";
          }
          break;
        case "idcard":
          type2 = "text";
          break;
        case "digit":
          type2 = "number";
          break;
        case "none":
          type2 = "text";
          break;
        default:
          type2 = INPUT_TYPES.includes(props2.type) ? props2.type : "text";
          break;
      }
      return props2.password ? "password" : type2;
    });
    const autocomplete = computed(() => {
      const camelizeIndex = AUTOCOMPLETES.indexOf(props2.textContentType);
      const kebabCaseIndex = AUTOCOMPLETES.indexOf(hyphenate(props2.textContentType));
      const index2 = camelizeIndex !== -1 ? camelizeIndex : kebabCaseIndex !== -1 ? kebabCaseIndex : 0;
      return AUTOCOMPLETES[index2];
    });
    const inputmode = computed(() => {
      if (props2.inputmode !== void 0) {
        return props2.inputmode;
      }
      if (INPUT_MODES.includes(props2.type)) {
        return props2.type;
      }
      let inputmodeMap = {};
      {
        inputmodeMap = {
          idcard: "text"
        };
      }
      return inputmodeMap[props2.type];
    });
    let cache = useCache(props2, type);
    let resetCache = {
      fn: null
    };
    const rootRef = ref(null);
    const {
      fieldRef,
      state: state2,
      scopedAttrsState,
      fixDisabledColor,
      trigger: trigger2
    } = useField(props2, rootRef, emit2, (event, state22) => {
      const input = event.target;
      if (type.value === "number") {
        if (resetCache.fn) {
          input.removeEventListener("blur", resetCache.fn);
          resetCache.fn = null;
        }
        if (input.validity && !input.validity.valid) {
          if ((!cache.value || !input.value) && event.data === "-" || cache.value[0] === "-" && event.inputType === "deleteContentBackward") {
            cache.value = "-";
            state22.value = "";
            resetCache.fn = () => {
              cache.value = input.value = "";
            };
            input.addEventListener("blur", resetCache.fn);
            return false;
          }
          const res = resolveDigitDecimalPoint(event, cache, state22, input, resetCache);
          if (typeof res === "boolean")
            return res;
          cache.value = state22.value = input.value = cache.value === "-" ? "" : cache.value;
          return false;
        } else {
          const res = resolveDigitDecimalPoint(event, cache, state22, input, resetCache);
          if (typeof res === "boolean")
            return res;
          cache.value = input.value;
        }
        if (state22.maxlength > 0 && input.value.length > state22.maxlength && !isPaste(event)) {
          input.value = cache.value = state22.value;
          return false;
        }
      }
    });
    watch(() => state2.value, (value) => {
      if (props2.type === "number" && !(cache.value === "-" && value === "")) {
        cache.value = value.toString();
      }
    });
    watch(() => props2.maxlength, (length) => {
      length = parseInt(length, 10);
      const realValue = state2.value.slice(0, length);
      realValue !== state2.value && (state2.value = realValue);
    });
    const NUMBER_TYPES = ["number", "digit"];
    const step = computed(() => NUMBER_TYPES.includes(props2.type) ? props2.step : "");
    function onKeyUpEnter(event) {
      if (event.key !== "Enter") {
        return;
      }
      const input = event.target;
      event.stopPropagation();
      trigger2("confirm", event, {
        value: input.value
      });
      !props2.confirmHold && input.blur();
    }
    expose({
      $triggerInput: (detail) => {
        emit2("update:modelValue", detail.value);
        emit2("update:value", detail.value);
        state2.value = detail.value;
      }
    });
    return () => {
      let inputNode = props2.disabled && fixDisabledColor ? createVNode("input", {
        "key": "disabled-input",
        "ref": fieldRef,
        "value": state2.value,
        "tabindex": "-1",
        "readonly": !!props2.disabled,
        "type": type.value,
        "maxlength": state2.maxlength,
        "step": step.value,
        "class": "uni-input-input",
        "style": props2.cursorColor ? {
          caretColor: props2.cursorColor
        } : {},
        "inputmode": inputmode.value,
        "onFocus": (event) => event.target.blur()
      }, null, 44, ["value", "readonly", "type", "maxlength", "step", "inputmode", "onFocus"]) : createVNode("input", {
        "key": "input",
        "ref": fieldRef,
        "value": state2.value,
        "onInput": withModifiers((event) => {
          const value = event.target.value.toString();
          if (type.value === "number" && state2.maxlength > 0 && value.length > state2.maxlength) {
            if (isPaste(event)) {
              state2.value = value.slice(0, state2.maxlength);
            }
            return;
          }
          if (value.length === 0 && event.inputType === "insertText" && event.data === ".") {
            return;
          }
          state2.value = value;
        }, ["stop"]),
        "disabled": !!props2.disabled,
        "type": type.value,
        "maxlength": state2.maxlength,
        "step": step.value,
        "enterkeyhint": props2.confirmType,
        "pattern": props2.type === "number" ? "[0-9]*" : void 0,
        "class": "uni-input-input",
        "style": props2.cursorColor ? {
          caretColor: props2.cursorColor
        } : {},
        "autocomplete": autocomplete.value,
        "onKeyup": onKeyUpEnter,
        "inputmode": inputmode.value
      }, null, 44, ["value", "onInput", "disabled", "type", "maxlength", "step", "enterkeyhint", "pattern", "autocomplete", "onKeyup", "inputmode"]);
      return createVNode("uni-input", {
        "ref": rootRef
      }, [createVNode("div", {
        "class": "uni-input-wrapper"
      }, [withDirectives(createVNode("div", mergeProps(scopedAttrsState.attrs, {
        "style": props2.placeholderStyle,
        "class": ["uni-input-placeholder", props2.placeholderClass]
      }), [props2.placeholder], 16), [[vShow, !(state2.value.length || cache.value === "-" || cache.value.includes("."))]]), props2.confirmType === "search" ? createVNode("form", {
        "action": "",
        "onSubmit": (event) => event.preventDefault(),
        "class": "uni-input-form"
      }, [inputNode], 40, ["onSubmit"]) : inputNode])], 512);
    };
  }
});
function entries(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]+/;
const useAttrs = (params = {}) => {
  const { excludeListeners = false, excludeKeys = [] } = params;
  const instance2 = getCurrentInstance();
  const attrs2 = shallowRef({});
  const listeners2 = shallowRef({});
  const excludeAttrs = shallowRef({});
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  instance2.attrs = reactive(instance2.attrs);
  watchEffect(() => {
    const res = entries(instance2.attrs).reduce(
      (acc, [key, val]) => {
        if (allExcludeKeys.includes(key)) {
          acc.exclude[key] = val;
        } else if (LISTENER_PREFIX.test(key)) {
          if (!excludeListeners) {
            acc.attrs[key] = val;
          }
          acc.listeners[key] = val;
        } else {
          acc.attrs[key] = val;
        }
        return acc;
      },
      {
        exclude: {},
        attrs: {},
        listeners: {}
      }
    );
    attrs2.value = res.attrs;
    listeners2.value = res.listeners;
    excludeAttrs.value = res.exclude;
  });
  return { $attrs: attrs2, $listeners: listeners2, $excludeAttrs: excludeAttrs };
};
function flatVNode(nodes) {
  const array = [];
  if (isArray$1(nodes)) {
    nodes.forEach((vnode) => {
      if (isVNode(vnode)) {
        if (vnode.type === Fragment) {
          array.push(...flatVNode(vnode.children));
        } else {
          array.push(vnode);
        }
      } else if (isArray$1(vnode)) {
        array.push(...flatVNode(vnode));
      }
    });
  }
  return array;
}
const movableAreaProps = {
  scaleArea: {
    type: Boolean,
    default: false
  }
};
const MovableArea = /* @__PURE__ */ defineBuiltInComponent({
  inheritAttrs: false,
  name: "MovableArea",
  props: movableAreaProps,
  setup(props2, {
    slots
  }) {
    const rootRef = ref(null);
    const _isMounted = ref(false);
    let {
      setContexts,
      events: movableAreaEvents
    } = useMovableAreaState(props2, rootRef);
    const {
      $listeners,
      $attrs,
      $excludeAttrs
    } = useAttrs();
    const _listeners = $listeners.value;
    let events = ["onTouchstart", "onTouchmove", "onTouchend"];
    events.forEach((event) => {
      let existing = _listeners[event];
      let ours = movableAreaEvents[`_${event}`];
      _listeners[event] = existing ? [].concat(existing, ours) : ours;
    });
    onMounted(() => {
      movableAreaEvents._resize();
      _isMounted.value = true;
    });
    let movableViewItems = [];
    const originMovableViewContexts = [];
    function updateMovableViewContexts() {
      const contexts = [];
      for (let index2 = 0; index2 < movableViewItems.length; index2++) {
        let movableViewItem = movableViewItems[index2];
        {
          movableViewItem = movableViewItem.el;
        }
        const movableViewContext = originMovableViewContexts.find((context) => movableViewItem === context.rootRef.value);
        if (movableViewContext) {
          contexts.push(markRaw(movableViewContext));
        }
      }
      setContexts(contexts);
    }
    const addMovableViewContext = (movableViewContext) => {
      originMovableViewContexts.push(movableViewContext);
      updateMovableViewContexts();
    };
    const removeMovableViewContext = (movableViewContext) => {
      const index2 = originMovableViewContexts.indexOf(movableViewContext);
      if (index2 >= 0) {
        originMovableViewContexts.splice(index2, 1);
        updateMovableViewContexts();
      }
    };
    provide("_isMounted", _isMounted);
    provide("movableAreaRootRef", rootRef);
    provide("addMovableViewContext", addMovableViewContext);
    provide("removeMovableViewContext", removeMovableViewContext);
    return () => {
      const defaultSlots = slots.default && slots.default();
      {
        movableViewItems = flatVNode(defaultSlots);
      }
      return createVNode("uni-movable-area", mergeProps({
        "ref": rootRef
      }, $attrs.value, $excludeAttrs.value, _listeners), [createVNode(ResizeSensor, {
        "onResize": movableAreaEvents._resize
      }, null, 8, ["onResize"]), movableViewItems], 16);
    };
  }
});
function calc(e2) {
  return Math.sqrt(e2.x * e2.x + e2.y * e2.y);
}
function useMovableAreaState(props2, rootRef) {
  const width = ref(0);
  const height = ref(0);
  const gapV = reactive({
    x: null,
    y: null
  });
  const pinchStartLen = ref(null);
  let _scaleMovableView = null;
  let movableViewContexts = [];
  function _updateScale(e2) {
    if (e2 && e2 !== 1) {
      if (props2.scaleArea) {
        movableViewContexts.forEach(function(item) {
          item._setScale(e2);
        });
      } else {
        if (_scaleMovableView) {
          _scaleMovableView._setScale(e2);
        }
      }
    }
  }
  function _find(target, items = movableViewContexts) {
    let root = rootRef.value;
    function get2(node) {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (node === item.rootRef.value) {
          return item;
        }
      }
      if (node === root || node === document.body || node === document) {
        return null;
      }
      return get2(node.parentNode);
    }
    return get2(target);
  }
  const _onTouchstart = withWebEvent((t2) => {
    let i = t2.touches;
    if (i) {
      if (i.length > 1) {
        let r = {
          x: i[1].pageX - i[0].pageX,
          y: i[1].pageY - i[0].pageY
        };
        pinchStartLen.value = calc(r);
        gapV.x = r.x;
        gapV.y = r.y;
        if (!props2.scaleArea) {
          let touch0 = _find(i[0].target);
          let touch1 = _find(i[1].target);
          _scaleMovableView = touch0 && touch0 === touch1 ? touch0 : null;
        }
      }
    }
  });
  const _onTouchmove = withWebEvent((t2) => {
    let n = t2.touches;
    if (n) {
      if (n.length > 1) {
        t2.preventDefault();
        let i = {
          x: n[1].pageX - n[0].pageX,
          y: n[1].pageY - n[0].pageY
        };
        if (gapV.x !== null && pinchStartLen.value && pinchStartLen.value > 0) {
          let r = calc(i) / pinchStartLen.value;
          _updateScale(r);
        }
        gapV.x = i.x;
        gapV.y = i.y;
      }
    }
  });
  const _onTouchend = withWebEvent((e2) => {
    let t2 = e2.touches;
    if (!(t2 && t2.length)) {
      if (e2.changedTouches) {
        gapV.x = 0;
        gapV.y = 0;
        pinchStartLen.value = null;
        if (props2.scaleArea) {
          movableViewContexts.forEach(function(item) {
            item._endScale();
          });
        } else {
          if (_scaleMovableView) {
            _scaleMovableView._endScale();
          }
        }
      }
    }
  });
  function _resize() {
    _getWH();
    movableViewContexts.forEach(function(item, index2) {
      item.setParent();
    });
  }
  function _getWH() {
    let style = window.getComputedStyle(rootRef.value);
    let rect = rootRef.value.getBoundingClientRect();
    width.value = rect.width - ["Left", "Right"].reduce(function(all, item) {
      const LEFT = "border" + item + "Width";
      const RIGHT = "padding" + item;
      return all + parseFloat(style[LEFT]) + parseFloat(style[RIGHT]);
    }, 0);
    height.value = rect.height - ["Top", "Bottom"].reduce(function(all, item) {
      const TOP = "border" + item + "Width";
      const BOTTOM = "padding" + item;
      return all + parseFloat(style[TOP]) + parseFloat(style[BOTTOM]);
    }, 0);
  }
  provide("movableAreaWidth", width);
  provide("movableAreaHeight", height);
  return {
    setContexts(contexts) {
      movableViewContexts = contexts;
    },
    events: {
      _onTouchstart,
      _onTouchmove,
      _onTouchend,
      _resize
    }
  };
}
const addListenerToElement = function(element, type, callback, capture) {
  element.addEventListener(
    type,
    ($event) => {
      if (isFunction(callback)) {
        if (callback($event) === false) {
          if (typeof $event.cancelable !== "undefined" ? $event.cancelable : true) {
            $event.preventDefault();
          }
          $event.stopPropagation();
        }
      }
    },
    {
      passive: false
    }
  );
};
let __mouseMoveEventListener;
let __mouseUpEventListener;
function useTouchtrack(element, method, useCancel) {
  onBeforeUnmount(() => {
    document.removeEventListener("mousemove", __mouseMoveEventListener);
    document.removeEventListener("mouseup", __mouseUpEventListener);
  });
  let x0 = 0;
  let y0 = 0;
  let x1 = 0;
  let y1 = 0;
  const fn = function($event, state2, x, y) {
    if (method({
      // @ts-expect-error
      cancelable: $event.cancelable,
      target: $event.target,
      currentTarget: $event.currentTarget,
      preventDefault: $event.preventDefault.bind($event),
      stopPropagation: $event.stopPropagation.bind($event),
      touches: $event.touches,
      changedTouches: $event.changedTouches,
      detail: {
        state: state2,
        x,
        y,
        dx: x - x0,
        dy: y - y0,
        ddx: x - x1,
        ddy: y - y1,
        timeStamp: $event.timeStamp
      }
    }) === false) {
      return false;
    }
  };
  let $eventOld = null;
  let hasTouchStart;
  let hasMouseDown;
  addListenerToElement(element, "touchstart", function($event) {
    hasTouchStart = true;
    if ($event.touches.length === 1 && !$eventOld) {
      $eventOld = $event;
      x0 = x1 = $event.touches[0].pageX;
      y0 = y1 = $event.touches[0].pageY;
      return fn($event, "start", x0, y0);
    }
  });
  addListenerToElement(element, "mousedown", function($event) {
    hasMouseDown = true;
    if (!hasTouchStart && !$eventOld) {
      $eventOld = $event;
      x0 = x1 = $event.pageX;
      y0 = y1 = $event.pageY;
      return fn($event, "start", x0, y0);
    }
  });
  addListenerToElement(element, "touchmove", function($event) {
    if ($event.touches.length === 1 && $eventOld) {
      const res = fn(
        $event,
        "move",
        $event.touches[0].pageX,
        $event.touches[0].pageY
      );
      x1 = $event.touches[0].pageX;
      y1 = $event.touches[0].pageY;
      return res;
    }
  });
  const mouseMoveEventListener = __mouseMoveEventListener = function($event) {
    if (!hasTouchStart && hasMouseDown && $eventOld) {
      const res = fn($event, "move", $event.pageX, $event.pageY);
      x1 = $event.pageX;
      y1 = $event.pageY;
      return res;
    }
  };
  document.addEventListener("mousemove", mouseMoveEventListener);
  addListenerToElement(element, "touchend", function($event) {
    if ($event.touches.length === 0 && $eventOld) {
      hasTouchStart = false;
      $eventOld = null;
      return fn(
        $event,
        "end",
        $event.changedTouches[0].pageX,
        $event.changedTouches[0].pageY
      );
    }
  });
  const mouseUpEventListener = __mouseUpEventListener = function($event) {
    hasMouseDown = false;
    if (!hasTouchStart && $eventOld) {
      $eventOld = null;
      return fn($event, "end", $event.pageX, $event.pageY);
    }
  };
  document.addEventListener("mouseup", mouseUpEventListener);
  addListenerToElement(element, "touchcancel", function($event) {
    if ($eventOld) {
      hasTouchStart = false;
      const $eventTemp = $eventOld;
      $eventOld = null;
      return fn(
        $event,
        useCancel ? "cancel" : "end",
        $eventTemp.touches[0].pageX,
        $eventTemp.touches[0].pageY
      );
    }
  });
}
function e(e2, t2, n) {
  return e2 > t2 - n && e2 < t2 + n;
}
function t(t2, n) {
  return e(t2, 0, n);
}
function Decline() {
}
Decline.prototype.x = function(e2) {
  return Math.sqrt(e2);
};
function Friction$1(e2, t2) {
  this._m = e2;
  this._f = 1e3 * t2;
  this._startTime = 0;
  this._v = 0;
}
Friction$1.prototype.setV = function(x, y) {
  const n = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);
  this._x_v = x;
  this._y_v = y;
  this._x_a = -this._f * this._x_v / n;
  this._y_a = -this._f * this._y_v / n;
  this._t = Math.abs(x / this._x_a) || Math.abs(y / this._y_a);
  this._lastDt = null;
  this._startTime = (/* @__PURE__ */ new Date()).getTime();
};
Friction$1.prototype.setS = function(x, y) {
  this._x_s = x;
  this._y_s = y;
};
Friction$1.prototype.s = function(t2) {
  if (void 0 === t2) {
    t2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
  }
  if (t2 > this._t) {
    t2 = this._t;
    this._lastDt = t2;
  }
  let x = this._x_v * t2 + 0.5 * this._x_a * Math.pow(t2, 2) + this._x_s;
  let y = this._y_v * t2 + 0.5 * this._y_a * Math.pow(t2, 2) + this._y_s;
  if (this._x_a > 0 && x < this._endPositionX || this._x_a < 0 && x > this._endPositionX) {
    x = this._endPositionX;
  }
  if (this._y_a > 0 && y < this._endPositionY || this._y_a < 0 && y > this._endPositionY) {
    y = this._endPositionY;
  }
  return {
    x,
    y
  };
};
Friction$1.prototype.ds = function(t2) {
  if (void 0 === t2) {
    t2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
  }
  if (t2 > this._t) {
    t2 = this._t;
  }
  return {
    dx: this._x_v + this._x_a * t2,
    dy: this._y_v + this._y_a * t2
  };
};
Friction$1.prototype.delta = function() {
  return {
    x: -1.5 * Math.pow(this._x_v, 2) / this._x_a || 0,
    y: -1.5 * Math.pow(this._y_v, 2) / this._y_a || 0
  };
};
Friction$1.prototype.dt = function() {
  return -this._x_v / this._x_a;
};
Friction$1.prototype.done = function() {
  const t2 = e(this.s().x, this._endPositionX) || e(this.s().y, this._endPositionY) || this._lastDt === this._t;
  this._lastDt = null;
  return t2;
};
Friction$1.prototype.setEnd = function(x, y) {
  this._endPositionX = x;
  this._endPositionY = y;
};
Friction$1.prototype.reconfigure = function(m, f2) {
  this._m = m;
  this._f = 1e3 * f2;
};
function Spring$1(m, k, c) {
  this._m = m;
  this._k = k;
  this._c = c;
  this._solution = null;
  this._endPosition = 0;
  this._startTime = 0;
}
Spring$1.prototype._solve = function(e2, t2) {
  const n = this._c;
  const i = this._m;
  const r = this._k;
  const o2 = n * n - 4 * i * r;
  if (o2 === 0) {
    const a2 = -n / (2 * i);
    const s = e2;
    const l = t2 / (a2 * e2);
    return {
      x: function(e3) {
        return (s + l * e3) * Math.pow(Math.E, a2 * e3);
      },
      dx: function(e3) {
        const t3 = Math.pow(Math.E, a2 * e3);
        return a2 * (s + l * e3) * t3 + l * t3;
      }
    };
  }
  if (o2 > 0) {
    const c = (-n - Math.sqrt(o2)) / (2 * i);
    const u = (-n + Math.sqrt(o2)) / (2 * i);
    const d = (t2 - c * e2) / (u - c);
    const h2 = e2 - d;
    return {
      x: function(e3) {
        let t3;
        let n2;
        if (e3 === this._t) {
          t3 = this._powER1T;
          n2 = this._powER2T;
        }
        this._t = e3;
        if (!t3) {
          t3 = this._powER1T = Math.pow(Math.E, c * e3);
        }
        if (!n2) {
          n2 = this._powER2T = Math.pow(Math.E, u * e3);
        }
        return h2 * t3 + d * n2;
      },
      dx: function(e3) {
        let t3;
        let n2;
        if (e3 === this._t) {
          t3 = this._powER1T;
          n2 = this._powER2T;
        }
        this._t = e3;
        if (!t3) {
          t3 = this._powER1T = Math.pow(Math.E, c * e3);
        }
        if (!n2) {
          n2 = this._powER2T = Math.pow(Math.E, u * e3);
        }
        return h2 * c * t3 + d * u * n2;
      }
    };
  }
  const p2 = Math.sqrt(4 * i * r - n * n) / (2 * i);
  const f2 = -n / 2 * i;
  const v2 = e2;
  const g2 = (t2 - f2 * e2) / p2;
  return {
    x: function(e3) {
      return Math.pow(Math.E, f2 * e3) * (v2 * Math.cos(p2 * e3) + g2 * Math.sin(p2 * e3));
    },
    dx: function(e3) {
      const t3 = Math.pow(Math.E, f2 * e3);
      const n2 = Math.cos(p2 * e3);
      const i2 = Math.sin(p2 * e3);
      return t3 * (g2 * p2 * n2 - v2 * p2 * i2) + f2 * t3 * (g2 * i2 + v2 * n2);
    }
  };
};
Spring$1.prototype.x = function(e2) {
  if (void 0 === e2) {
    e2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
  }
  return this._solution ? this._endPosition + this._solution.x(e2) : 0;
};
Spring$1.prototype.dx = function(e2) {
  if (void 0 === e2) {
    e2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
  }
  return this._solution ? this._solution.dx(e2) : 0;
};
Spring$1.prototype.setEnd = function(e2, n, i) {
  if (!i) {
    i = (/* @__PURE__ */ new Date()).getTime();
  }
  if (e2 !== this._endPosition || !t(n, 0.1)) {
    n = n || 0;
    let r = this._endPosition;
    if (this._solution) {
      if (t(n, 0.1)) {
        n = this._solution.dx((i - this._startTime) / 1e3);
      }
      r = this._solution.x((i - this._startTime) / 1e3);
      if (t(n, 0.1)) {
        n = 0;
      }
      if (t(r, 0.1)) {
        r = 0;
      }
      r += this._endPosition;
    }
    if (!(this._solution && t(r - e2, 0.1) && t(n, 0.1))) {
      this._endPosition = e2;
      this._solution = this._solve(r - this._endPosition, n);
      this._startTime = i;
    }
  }
};
Spring$1.prototype.snap = function(e2) {
  this._startTime = (/* @__PURE__ */ new Date()).getTime();
  this._endPosition = e2;
  this._solution = {
    x: function() {
      return 0;
    },
    dx: function() {
      return 0;
    }
  };
};
Spring$1.prototype.done = function(n) {
  if (!n) {
    n = (/* @__PURE__ */ new Date()).getTime();
  }
  return e(this.x(), this._endPosition, 0.1) && t(this.dx(), 0.1);
};
Spring$1.prototype.reconfigure = function(m, t2, c) {
  this._m = m;
  this._k = t2;
  this._c = c;
  if (!this.done()) {
    this._solution = this._solve(this.x() - this._endPosition, this.dx());
    this._startTime = (/* @__PURE__ */ new Date()).getTime();
  }
};
Spring$1.prototype.springConstant = function() {
  return this._k;
};
Spring$1.prototype.damping = function() {
  return this._c;
};
Spring$1.prototype.configuration = function() {
  function e2(e3, t3) {
    e3.reconfigure(1, t3, e3.damping());
  }
  function t2(e3, t3) {
    e3.reconfigure(1, e3.springConstant(), t3);
  }
  return [
    {
      label: "Spring Constant",
      read: this.springConstant.bind(this),
      write: e2.bind(this, this),
      min: 100,
      max: 1e3
    },
    {
      label: "Damping",
      read: this.damping.bind(this),
      write: t2.bind(this, this),
      min: 1,
      max: 500
    }
  ];
};
function STD(e2, t2, n) {
  this._springX = new Spring$1(e2, t2, n);
  this._springY = new Spring$1(e2, t2, n);
  this._springScale = new Spring$1(e2, t2, n);
  this._startTime = 0;
}
STD.prototype.setEnd = function(e2, t2, n, i) {
  const r = (/* @__PURE__ */ new Date()).getTime();
  this._springX.setEnd(e2, i, r);
  this._springY.setEnd(t2, i, r);
  this._springScale.setEnd(n, i, r);
  this._startTime = r;
};
STD.prototype.x = function() {
  const e2 = ((/* @__PURE__ */ new Date()).getTime() - this._startTime) / 1e3;
  return {
    x: this._springX.x(e2),
    y: this._springY.x(e2),
    scale: this._springScale.x(e2)
  };
};
STD.prototype.done = function() {
  const e2 = (/* @__PURE__ */ new Date()).getTime();
  return this._springX.done(e2) && this._springY.done(e2) && this._springScale.done(e2);
};
STD.prototype.reconfigure = function(e2, t2, n) {
  this._springX.reconfigure(e2, t2, n);
  this._springY.reconfigure(e2, t2, n);
  this._springScale.reconfigure(e2, t2, n);
};
const movableViewProps = {
  direction: {
    type: String,
    default: "none"
  },
  inertia: {
    type: [Boolean, String],
    default: false
  },
  outOfBounds: {
    type: [Boolean, String],
    default: false
  },
  x: {
    type: [Number, String],
    default: 0
  },
  y: {
    type: [Number, String],
    default: 0
  },
  damping: {
    type: [Number, String],
    default: 20
  },
  friction: {
    type: [Number, String],
    default: 2
  },
  disabled: {
    type: [Boolean, String],
    default: false
  },
  scale: {
    type: [Boolean, String],
    default: false
  },
  scaleMin: {
    type: [Number, String],
    default: 0.1
  },
  scaleMax: {
    type: [Number, String],
    default: 10
  },
  scaleValue: {
    type: [Number, String],
    default: 1
  },
  animation: {
    type: [Boolean, String],
    default: true
  }
};
function v(a2, b) {
  return +((1e3 * a2 - 1e3 * b) / 1e3).toFixed(1);
}
const MovableView = /* @__PURE__ */ defineBuiltInComponent({
  name: "MovableView",
  props: movableViewProps,
  emits: ["change", "scale"],
  setup(props2, {
    slots,
    emit: emit2
  }) {
    const rootRef = ref(null);
    const trigger2 = useCustomEvent(rootRef, emit2);
    const {
      setParent
    } = useMovableViewState(props2, trigger2, rootRef);
    return () => {
      return createVNode("uni-movable-view", {
        "ref": rootRef
      }, [createVNode(ResizeSensor, {
        "onResize": setParent
      }, null, 8, ["onResize"]), slots.default && slots.default()], 512);
    };
  }
});
let requesting = false;
function _requestAnimationFrame(e2) {
  if (!requesting) {
    requesting = true;
    requestAnimationFrame(function() {
      e2();
      requesting = false;
    });
  }
}
function p(t2, n) {
  if (t2 === n) {
    return 0;
  }
  let i = t2.offsetLeft;
  return t2.offsetParent ? i += p(t2.offsetParent, n) : 0;
}
function f(t2, n) {
  if (t2 === n) {
    return 0;
  }
  let i = t2.offsetTop;
  return t2.offsetParent ? i += f(t2.offsetParent, n) : 0;
}
function g(friction, execute, endCallback) {
  let record = {
    id: 0,
    cancelled: false
  };
  let cancel = function(record2) {
    if (record2 && record2.id) {
      cancelAnimationFrame(record2.id);
    }
    if (record2) {
      record2.cancelled = true;
    }
  };
  function fn(record2, friction2, execute2, endCallback2) {
    if (!record2 || !record2.cancelled) {
      execute2(friction2);
      let isDone = friction2.done();
      if (!isDone) {
        if (!record2.cancelled) {
          record2.id = requestAnimationFrame(fn.bind(null, record2, friction2, execute2, endCallback2));
        }
      }
      if (isDone && endCallback2) {
        endCallback2(friction2);
      }
    }
  }
  fn(record, friction, execute, endCallback);
  return {
    cancel: cancel.bind(null, record),
    model: friction
  };
}
function _getPx(val) {
  if (/\d+[ur]px$/i.test(val)) {
    return upx2px(parseFloat(val));
  }
  return Number(val) || 0;
}
function useMovableViewLayout(rootRef, _scale, _adjustScale) {
  const movableAreaWidth = inject("movableAreaWidth", ref(0));
  const movableAreaHeight = inject("movableAreaHeight", ref(0));
  const movableAreaRootRef = inject("movableAreaRootRef");
  const _offset = {
    x: 0,
    y: 0
  };
  const _scaleOffset = {
    x: 0,
    y: 0
  };
  const width = ref(0);
  const height = ref(0);
  const minX = ref(0);
  const minY = ref(0);
  const maxX = ref(0);
  const maxY = ref(0);
  function _updateBoundary() {
    let x = 0 - _offset.x + _scaleOffset.x;
    let _width = movableAreaWidth.value - width.value - _offset.x - _scaleOffset.x;
    minX.value = Math.min(x, _width);
    maxX.value = Math.max(x, _width);
    let y = 0 - _offset.y + _scaleOffset.y;
    let _height = movableAreaHeight.value - height.value - _offset.y - _scaleOffset.y;
    minY.value = Math.min(y, _height);
    maxY.value = Math.max(y, _height);
  }
  function _updateOffset() {
    _offset.x = p(rootRef.value, movableAreaRootRef.value);
    _offset.y = f(rootRef.value, movableAreaRootRef.value);
  }
  function _updateWH(scale) {
    scale = scale || _scale.value;
    scale = _adjustScale(scale);
    let rect = rootRef.value.getBoundingClientRect();
    height.value = rect.height / _scale.value;
    width.value = rect.width / _scale.value;
    let _height = height.value * scale;
    let _width = width.value * scale;
    _scaleOffset.x = (_width - width.value) / 2;
    _scaleOffset.y = (_height - height.value) / 2;
  }
  return {
    _updateBoundary,
    _updateOffset,
    _updateWH,
    _scaleOffset,
    minX,
    minY,
    maxX,
    maxY
  };
}
function useMovableViewTransform(rootRef, props2, _scaleOffset, _scale, maxX, maxY, minX, minY, _translateX, _translateY, _SFA, _FA, _adjustScale, trigger2) {
  const dampingNumber = computed(() => {
    let val = Number(props2.damping);
    return isNaN(val) ? 20 : val;
  });
  const xMove = computed(() => props2.direction === "all" || props2.direction === "horizontal");
  const yMove = computed(() => props2.direction === "all" || props2.direction === "vertical");
  const xSync = ref(_getPx(props2.x));
  const ySync = ref(_getPx(props2.y));
  watch(() => props2.x, (val) => {
    xSync.value = _getPx(val);
  });
  watch(() => props2.y, (val) => {
    ySync.value = _getPx(val);
  });
  watch(xSync, (val) => {
    _setX(val);
  });
  watch(ySync, (val) => {
    _setY(val);
  });
  const _STD = new STD(1, 9 * Math.pow(dampingNumber.value, 2) / 40, dampingNumber.value);
  function _getLimitXY(x, y) {
    let outOfBounds = false;
    if (x > maxX.value) {
      x = maxX.value;
      outOfBounds = true;
    } else {
      if (x < minX.value) {
        x = minX.value;
        outOfBounds = true;
      }
    }
    if (y > maxY.value) {
      y = maxY.value;
      outOfBounds = true;
    } else {
      if (y < minY.value) {
        y = minY.value;
        outOfBounds = true;
      }
    }
    return {
      x,
      y,
      outOfBounds
    };
  }
  function FAandSFACancel() {
    if (_FA) {
      _FA.cancel();
    }
    if (_SFA) {
      _SFA.cancel();
    }
  }
  function _animationTo(x, y, scale, source, r, o2) {
    FAandSFACancel();
    if (!xMove.value) {
      x = _translateX.value;
    }
    if (!yMove.value) {
      y = _translateY.value;
    }
    if (!props2.scale) {
      scale = _scale.value;
    }
    let limitXY = _getLimitXY(x, y);
    x = limitXY.x;
    y = limitXY.y;
    if (!props2.animation) {
      _setTransform(x, y, scale, source, r, o2);
      return;
    }
    _STD._springX._solution = null;
    _STD._springY._solution = null;
    _STD._springScale._solution = null;
    _STD._springX._endPosition = _translateX.value;
    _STD._springY._endPosition = _translateY.value;
    _STD._springScale._endPosition = _scale.value;
    _STD.setEnd(x, y, scale, 1);
    _SFA = g(_STD, function() {
      let data = _STD.x();
      let x2 = data.x;
      let y2 = data.y;
      let scale2 = data.scale;
      _setTransform(x2, y2, scale2, source, r, o2);
    }, function() {
      _SFA.cancel();
    });
  }
  function _setTransform(x, y, scale, source = "", r, o2) {
    if (!(x !== null && x.toString() !== "NaN" && typeof x === "number")) {
      x = _translateX.value || 0;
    }
    if (!(y !== null && y.toString() !== "NaN" && typeof y === "number")) {
      y = _translateY.value || 0;
    }
    x = Number(x.toFixed(1));
    y = Number(y.toFixed(1));
    scale = Number(scale.toFixed(1));
    if (!(_translateX.value === x && _translateY.value === y)) {
      if (!r) {
        trigger2("change", {}, {
          x: v(x, _scaleOffset.x),
          y: v(y, _scaleOffset.y),
          source
        });
      }
    }
    if (!props2.scale) {
      scale = _scale.value;
    }
    scale = _adjustScale(scale);
    scale = +scale.toFixed(3);
    if (o2 && scale !== _scale.value) {
      trigger2("scale", {}, {
        x,
        y,
        scale
      });
    }
    let transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(0px) scale(" + scale + ")";
    if (rootRef.value) {
      rootRef.value.style.transform = transform;
      rootRef.value.style.webkitTransform = transform;
      _translateX.value = x;
      _translateY.value = y;
      _scale.value = scale;
    }
  }
  function _revise(source) {
    let limitXY = _getLimitXY(_translateX.value, _translateY.value);
    let x = limitXY.x;
    let y = limitXY.y;
    let outOfBounds = limitXY.outOfBounds;
    if (outOfBounds) {
      _animationTo(x, y, _scale.value, source);
    }
    return outOfBounds;
  }
  function _setX(val) {
    if (xMove.value) {
      if (val + _scaleOffset.x === _translateX.value) {
        return _translateX;
      } else {
        if (_SFA) {
          _SFA.cancel();
        }
        _animationTo(val + _scaleOffset.x, ySync.value + _scaleOffset.y, _scale.value);
      }
    }
    return val;
  }
  function _setY(val) {
    if (yMove.value) {
      if (val + _scaleOffset.y === _translateY.value) {
        return _translateY;
      } else {
        if (_SFA) {
          _SFA.cancel();
        }
        _animationTo(xSync.value + _scaleOffset.x, val + _scaleOffset.y, _scale.value);
      }
    }
    return val;
  }
  return {
    FAandSFACancel,
    _getLimitXY,
    _animationTo,
    _setTransform,
    _revise,
    dampingNumber,
    xMove,
    yMove,
    xSync,
    ySync,
    _STD
  };
}
function useMovableViewInit(props2, rootRef, trigger2, _scale, _oldScale, _isScaling, _translateX, _translateY, _SFA, _FA) {
  const scaleMinNumber = computed(() => {
    let val = Number(props2.scaleMin);
    return isNaN(val) ? 0.1 : val;
  });
  const scaleMaxNumber = computed(() => {
    let val = Number(props2.scaleMax);
    return isNaN(val) ? 10 : val;
  });
  const scaleValueSync = ref(Number(props2.scaleValue) || 1);
  watch(scaleValueSync, (val) => {
    _setScaleValue(val);
  });
  watch(scaleMinNumber, () => {
    _setScaleMinOrMax();
  });
  watch(scaleMaxNumber, () => {
    _setScaleMinOrMax();
  });
  watch(() => props2.scaleValue, (val) => {
    scaleValueSync.value = Number(val) || 0;
  });
  const {
    _updateBoundary,
    _updateOffset,
    _updateWH,
    _scaleOffset,
    minX,
    minY,
    maxX,
    maxY
  } = useMovableViewLayout(rootRef, _scale, _adjustScale);
  const {
    FAandSFACancel,
    _getLimitXY,
    _animationTo,
    _setTransform,
    _revise,
    dampingNumber,
    xMove,
    yMove,
    xSync,
    ySync,
    _STD
  } = useMovableViewTransform(rootRef, props2, _scaleOffset, _scale, maxX, maxY, minX, minY, _translateX, _translateY, _SFA, _FA, _adjustScale, trigger2);
  function _updateScale(scale, animat) {
    if (props2.scale) {
      scale = _adjustScale(scale);
      _updateWH(scale);
      _updateBoundary();
      const limitXY = _getLimitXY(_translateX.value, _translateY.value);
      const x = limitXY.x;
      const y = limitXY.y;
      if (animat) {
        _animationTo(x, y, scale, "", true, true);
      } else {
        _requestAnimationFrame(function() {
          _setTransform(x, y, scale, "", true, true);
        });
      }
    }
  }
  function _beginScale() {
    _isScaling.value = true;
  }
  function _updateOldScale(scale) {
    _oldScale.value = scale;
  }
  function _adjustScale(scale) {
    scale = Math.max(0.1, scaleMinNumber.value, scale);
    scale = Math.min(10, scaleMaxNumber.value, scale);
    return scale;
  }
  function _setScaleMinOrMax() {
    if (!props2.scale) {
      return false;
    }
    _updateScale(_scale.value, true);
    _updateOldScale(_scale.value);
  }
  function _setScaleValue(scale) {
    if (!props2.scale) {
      return false;
    }
    scale = _adjustScale(scale);
    _updateScale(scale, true);
    _updateOldScale(scale);
    return scale;
  }
  function _endScale() {
    _isScaling.value = false;
    _updateOldScale(_scale.value);
  }
  function _setScale(scale) {
    if (scale) {
      scale = _oldScale.value * scale;
      _beginScale();
      _updateScale(scale);
    }
  }
  return {
    // scale
    _updateOldScale,
    _endScale,
    _setScale,
    scaleValueSync,
    // layout
    _updateBoundary,
    _updateOffset,
    _updateWH,
    _scaleOffset,
    minX,
    minY,
    maxX,
    maxY,
    // transform
    FAandSFACancel,
    _getLimitXY,
    _animationTo,
    _setTransform,
    _revise,
    dampingNumber,
    xMove,
    yMove,
    xSync,
    ySync,
    _STD
  };
}
function useMovableViewState(props2, trigger2, rootRef) {
  const _isMounted = inject("_isMounted", ref(false));
  const addMovableViewContext = inject("addMovableViewContext", () => {
  });
  const removeMovableViewContext = inject("removeMovableViewContext", () => {
  });
  let _scale = ref(1);
  let _oldScale = ref(1);
  let _isScaling = ref(false);
  let _translateX = ref(0);
  let _translateY = ref(0);
  let _SFA = null;
  let _FA = null;
  let _isTouching = false;
  let __baseX;
  let __baseY;
  let _checkCanMove = null;
  let _firstMoveDirection = null;
  const _declineX = new Decline();
  const _declineY = new Decline();
  const __touchInfo = {
    historyX: [0, 0],
    historyY: [0, 0],
    historyT: [0, 0]
  };
  const frictionNumber = computed(() => {
    let val = Number(props2.friction);
    return isNaN(val) || val <= 0 ? 2 : val;
  });
  const _friction = new Friction$1(1, frictionNumber.value);
  watch(() => props2.disabled, () => {
    __handleTouchStart();
  });
  const {
    // scale
    _updateOldScale,
    _endScale,
    _setScale,
    scaleValueSync,
    // layout
    _updateBoundary,
    _updateOffset,
    _updateWH,
    _scaleOffset,
    minX,
    minY,
    maxX,
    maxY,
    // transform
    FAandSFACancel,
    _getLimitXY,
    _setTransform,
    _revise,
    dampingNumber,
    xMove,
    yMove,
    xSync,
    ySync,
    _STD
  } = useMovableViewInit(props2, rootRef, trigger2, _scale, _oldScale, _isScaling, _translateX, _translateY, _SFA, _FA);
  function __handleTouchStart() {
    if (!_isScaling.value) {
      if (!props2.disabled) {
        FAandSFACancel();
        __touchInfo.historyX = [0, 0];
        __touchInfo.historyY = [0, 0];
        __touchInfo.historyT = [0, 0];
        if (xMove.value) {
          __baseX = _translateX.value;
        }
        if (yMove.value) {
          __baseY = _translateY.value;
        }
        rootRef.value.style.willChange = "transform";
        _checkCanMove = null;
        _firstMoveDirection = null;
        _isTouching = true;
      }
    }
  }
  function __handleTouchMove(event) {
    if (!_isScaling.value && !props2.disabled && _isTouching) {
      let x = _translateX.value;
      let y = _translateY.value;
      if (_firstMoveDirection === null) {
        _firstMoveDirection = Math.abs(event.detail.dx / event.detail.dy) > 1 ? "htouchmove" : "vtouchmove";
      }
      if (xMove.value) {
        x = event.detail.dx + __baseX;
        __touchInfo.historyX.shift();
        __touchInfo.historyX.push(x);
        if (!yMove.value && _checkCanMove === null) {
          _checkCanMove = Math.abs(event.detail.dx / event.detail.dy) < 1;
        }
      }
      if (yMove.value) {
        y = event.detail.dy + __baseY;
        __touchInfo.historyY.shift();
        __touchInfo.historyY.push(y);
        if (!xMove.value && _checkCanMove === null) {
          _checkCanMove = Math.abs(event.detail.dy / event.detail.dx) < 1;
        }
      }
      __touchInfo.historyT.shift();
      __touchInfo.historyT.push(event.detail.timeStamp);
      if (!_checkCanMove) {
        event.preventDefault();
        let source = "touch";
        if (x < minX.value) {
          if (props2.outOfBounds) {
            source = "touch-out-of-bounds";
            x = minX.value - _declineX.x(minX.value - x);
          } else {
            x = minX.value;
          }
        } else if (x > maxX.value) {
          if (props2.outOfBounds) {
            source = "touch-out-of-bounds";
            x = maxX.value + _declineX.x(x - maxX.value);
          } else {
            x = maxX.value;
          }
        }
        if (y < minY.value) {
          if (props2.outOfBounds) {
            source = "touch-out-of-bounds";
            y = minY.value - _declineY.x(minY.value - y);
          } else {
            y = minY.value;
          }
        } else {
          if (y > maxY.value) {
            if (props2.outOfBounds) {
              source = "touch-out-of-bounds";
              y = maxY.value + _declineY.x(y - maxY.value);
            } else {
              y = maxY.value;
            }
          }
        }
        _requestAnimationFrame(function() {
          _setTransform(x, y, _scale.value, source);
        });
      }
    }
  }
  function __handleTouchEnd() {
    if (!_isScaling.value && !props2.disabled && _isTouching) {
      rootRef.value.style.willChange = "auto";
      _isTouching = false;
      if (!_checkCanMove && !_revise("out-of-bounds") && props2.inertia) {
        const xv = 1e3 * (__touchInfo.historyX[1] - __touchInfo.historyX[0]) / (__touchInfo.historyT[1] - __touchInfo.historyT[0]);
        const yv = 1e3 * (__touchInfo.historyY[1] - __touchInfo.historyY[0]) / (__touchInfo.historyT[1] - __touchInfo.historyT[0]);
        const __translateX = _translateX.value;
        const __translateY = _translateY.value;
        _friction.setV(xv, yv);
        _friction.setS(__translateX, __translateY);
        const x0 = _friction.delta().x;
        const y0 = _friction.delta().y;
        let x = x0 + __translateX;
        let y = y0 + __translateY;
        if (x < minX.value) {
          x = minX.value;
          y = __translateY + (minX.value - __translateX) * y0 / x0;
        } else {
          if (x > maxX.value) {
            x = maxX.value;
            y = __translateY + (maxX.value - __translateX) * y0 / x0;
          }
        }
        if (y < minY.value) {
          y = minY.value;
          x = __translateX + (minY.value - __translateY) * x0 / y0;
        } else {
          if (y > maxY.value) {
            y = maxY.value;
            x = __translateX + (maxY.value - __translateY) * x0 / y0;
          }
        }
        _friction.setEnd(x, y);
        _FA = g(_friction, function() {
          let t2 = _friction.s();
          let x2 = t2.x;
          let y2 = t2.y;
          _setTransform(x2, y2, _scale.value, "friction");
        }, function() {
          _FA.cancel();
        });
      }
    }
    if (!props2.outOfBounds && !props2.inertia) {
      FAandSFACancel();
    }
  }
  function setParent() {
    if (!_isMounted.value) {
      return;
    }
    FAandSFACancel();
    let scale = props2.scale ? scaleValueSync.value : 1;
    _updateOffset();
    _updateWH(scale);
    _updateBoundary();
    let limitXY = _getLimitXY(xSync.value + _scaleOffset.x, ySync.value + _scaleOffset.y);
    let x = limitXY.x;
    let y = limitXY.y;
    _setTransform(x, y, scale, "", true);
    _updateOldScale(scale);
  }
  onMounted(() => {
    useTouchtrack(rootRef.value, (event) => {
      switch (event.detail.state) {
        case "start":
          __handleTouchStart();
          break;
        case "move":
          __handleTouchMove(event);
          break;
        case "end":
          __handleTouchEnd();
      }
    });
    setParent();
    _friction.reconfigure(1, frictionNumber.value);
    _STD.reconfigure(1, 9 * Math.pow(dampingNumber.value, 2) / 40, dampingNumber.value);
    rootRef.value.style.transformOrigin = "center";
    const context = {
      rootRef,
      setParent,
      _endScale,
      _setScale
    };
    addMovableViewContext(context);
    onUnmounted(() => {
      removeMovableViewContext(context);
    });
  });
  onUnmounted(() => {
    FAandSFACancel();
  });
  return {
    setParent
  };
}
const Refresher = /* @__PURE__ */ defineBuiltInComponent({
  name: "Refresher",
  props: {
    refreshState: {
      type: String,
      default: ""
    },
    refresherHeight: {
      type: Number,
      default: 0
    },
    refresherThreshold: {
      type: Number,
      default: 45
    },
    refresherDefaultStyle: {
      type: String,
      default: "black"
    },
    refresherBackground: {
      type: String,
      default: "#fff"
    }
  },
  setup(props2, {
    slots
  }) {
    const rootRef = ref(null);
    const rootStyle = computed(() => {
      const style = {
        backgroundColor: props2.refresherBackground
      };
      switch (props2.refreshState) {
        case "pulling":
          style.height = props2.refresherHeight + "px";
          break;
        case "refreshing":
          style.height = props2.refresherThreshold + "px";
          style.transition = "height 0.3s";
          break;
        case "":
        case "refresherabort":
        case "restore":
          style.height = "0px";
          style.transition = "height 0.3s";
          break;
      }
      return style;
    });
    const refreshRotate = computed(() => {
      const route = props2.refresherHeight / props2.refresherThreshold;
      return (route > 1 ? 1 : route) * 360;
    });
    return () => {
      const {
        refreshState,
        refresherDefaultStyle,
        refresherThreshold
      } = props2;
      return createVNode("div", {
        "ref": rootRef,
        "style": rootStyle.value,
        "class": "uni-scroll-view-refresher"
      }, [refresherDefaultStyle !== "none" ? createVNode("div", {
        "class": "uni-scroll-view-refresh"
      }, [createVNode("div", {
        "class": "uni-scroll-view-refresh-inner"
      }, [refreshState == "pulling" ? createVNode("svg", {
        "key": "refresh__icon",
        "style": {
          transform: "rotate(" + refreshRotate.value + "deg)"
        },
        "fill": "#2BD009",
        "class": "uni-scroll-view-refresh__icon",
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24"
      }, [createVNode("path", {
        "d": "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      }, null), createVNode("path", {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }, null)], 4) : null, refreshState == "refreshing" ? createVNode("svg", {
        "key": "refresh__spinner",
        "class": "uni-scroll-view-refresh__spinner",
        "width": "24",
        "height": "24",
        "viewBox": "25 25 50 50"
      }, [createVNode("circle", {
        "cx": "50",
        "cy": "50",
        "r": "20",
        "fill": "none",
        "style": "color: #2bd009",
        "stroke-width": "3"
      }, null)]) : null])]) : null, refresherDefaultStyle === "none" ? createVNode("div", {
        "class": "uni-scroll-view-refresher-container",
        "style": {
          height: `${refresherThreshold}px`
        }
      }, [slots.default && slots.default()]) : null], 4);
    };
  }
});
const passiveOptions = /* @__PURE__ */ passive(true);
const props$m = {
  direction: {
    type: [String],
    default: "vertical"
  },
  scrollX: {
    type: [Boolean, String],
    default: false
  },
  scrollY: {
    type: [Boolean, String],
    default: false
  },
  showScrollbar: {
    type: [Boolean, String],
    default: true
  },
  upperThreshold: {
    type: [Number, String],
    default: 50
  },
  lowerThreshold: {
    type: [Number, String],
    default: 50
  },
  scrollTop: {
    type: [Number, String],
    default: 0
  },
  scrollLeft: {
    type: [Number, String],
    default: 0
  },
  scrollIntoView: {
    type: String,
    default: ""
  },
  scrollWithAnimation: {
    type: [Boolean, String],
    default: false
  },
  enableBackToTop: {
    type: [Boolean, String],
    default: false
  },
  refresherEnabled: {
    type: [Boolean, String],
    default: false
  },
  refresherThreshold: {
    type: Number,
    default: 45
  },
  refresherDefaultStyle: {
    type: String,
    default: "black"
  },
  refresherBackground: {
    type: String,
    default: "#fff"
  },
  refresherTriggered: {
    type: [Boolean, String],
    default: false
  }
};
const ScrollView = /* @__PURE__ */ defineBuiltInComponent({
  name: "ScrollView",
  compatConfig: {
    MODE: 3
  },
  props: props$m,
  emits: ["scroll", "scrolltoupper", "scrolltolower", "refresherrefresh", "refresherrestore", "refresherpulling", "refresherabort", "update:refresherTriggered"],
  setup(props2, {
    emit: emit2,
    slots,
    expose
  }) {
    const rootRef = ref(null);
    const main = ref(null);
    const wrap = ref(null);
    const content = ref(null);
    const trigger2 = useCustomEvent(rootRef, emit2);
    const {
      state: state2,
      scrollTopNumber,
      scrollLeftNumber
    } = useScrollViewState(props2);
    const {
      realScrollX,
      realScrollY,
      _scrollLeftChanged,
      _scrollTopChanged
    } = useScrollViewLoader(props2, state2, scrollTopNumber, scrollLeftNumber, trigger2, rootRef, main, content, emit2);
    const mainStyle = computed(() => {
      let style = "";
      realScrollX.value ? style += "overflow-x:auto;" : style += "overflow-x:hidden;";
      realScrollY.value ? style += "overflow-y:auto;" : style += "overflow-y:hidden;";
      return style;
    });
    const scrollBarClassName = computed(() => {
      let className = "uni-scroll-view";
      if (props2.showScrollbar === false) {
        className += " uni-scroll-view-scrollbar-hidden";
      }
      return className;
    });
    expose({
      // 自动化测试需要暴露main从而获取scrollLeft
      $getMain() {
        return main.value;
      }
    });
    return () => {
      const {
        refresherEnabled,
        refresherBackground,
        refresherDefaultStyle,
        refresherThreshold
      } = props2;
      const {
        refresherHeight,
        refreshState
      } = state2;
      return createVNode("uni-scroll-view", {
        "ref": rootRef
      }, [createVNode("div", {
        "ref": wrap,
        "class": "uni-scroll-view"
      }, [createVNode("div", {
        "ref": main,
        "style": mainStyle.value,
        "class": scrollBarClassName.value
      }, [refresherEnabled ? createVNode(Refresher, {
        "refreshState": refreshState,
        "refresherHeight": refresherHeight,
        "refresherThreshold": refresherThreshold,
        "refresherDefaultStyle": refresherDefaultStyle,
        "refresherBackground": refresherBackground
      }, {
        default: () => [refresherDefaultStyle == "none" ? slots.refresher && slots.refresher() : null]
      }, 8, ["refreshState", "refresherHeight", "refresherThreshold", "refresherDefaultStyle", "refresherBackground"]) : null, createVNode("div", {
        "ref": content,
        "class": "uni-scroll-view-content"
      }, [slots.default && slots.default()], 512)], 6)], 512)], 512);
    };
  }
});
function useScrollViewState(props2) {
  const scrollTopNumber = computed(() => {
    return Number(props2.scrollTop) || 0;
  });
  const scrollLeftNumber = computed(() => {
    return Number(props2.scrollLeft) || 0;
  });
  const state2 = reactive({
    lastScrollTop: scrollTopNumber.value,
    lastScrollLeft: scrollLeftNumber.value,
    lastScrollToUpperTime: 0,
    lastScrollToLowerTime: 0,
    refresherHeight: 0,
    refreshState: ""
  });
  return {
    state: state2,
    scrollTopNumber,
    scrollLeftNumber
  };
}
function useScrollViewLoader(props2, state2, scrollTopNumber, scrollLeftNumber, trigger2, rootRef, main, content, emit2) {
  let beforeRefreshing = false;
  let toUpperNumber = 0;
  let triggerAbort = false;
  let __transitionEnd = () => {
  };
  const realScrollX = computed(() => {
    return props2.scrollX;
  });
  const realScrollY = computed(() => {
    return props2.scrollY;
  });
  const upperThresholdNumber = computed(() => {
    let val = Number(props2.upperThreshold);
    return isNaN(val) ? 50 : val;
  });
  const lowerThresholdNumber = computed(() => {
    let val = Number(props2.lowerThreshold);
    return isNaN(val) ? 50 : val;
  });
  function scrollTo2(scrollToValue, direction2) {
    const container = main.value;
    let transformValue = 0;
    let transform = "";
    scrollToValue < 0 ? scrollToValue = 0 : direction2 === "x" && scrollToValue > container.scrollWidth - container.offsetWidth ? scrollToValue = container.scrollWidth - container.offsetWidth : direction2 === "y" && scrollToValue > container.scrollHeight - container.offsetHeight && (scrollToValue = container.scrollHeight - container.offsetHeight);
    direction2 === "x" ? transformValue = container.scrollLeft - scrollToValue : direction2 === "y" && (transformValue = container.scrollTop - scrollToValue);
    if (transformValue === 0)
      return;
    let _content = content.value;
    _content.style.transition = "transform .3s ease-out";
    _content.style.webkitTransition = "-webkit-transform .3s ease-out";
    if (direction2 === "x") {
      transform = "translateX(" + transformValue + "px) translateZ(0)";
    } else {
      direction2 === "y" && (transform = "translateY(" + transformValue + "px) translateZ(0)");
    }
    _content.removeEventListener("transitionend", __transitionEnd);
    _content.removeEventListener("webkitTransitionEnd", __transitionEnd);
    __transitionEnd = () => _transitionEnd(scrollToValue, direction2);
    _content.addEventListener("transitionend", __transitionEnd);
    _content.addEventListener("webkitTransitionEnd", __transitionEnd);
    if (direction2 === "x") {
      container.style.overflowX = "hidden";
    } else if (direction2 === "y") {
      container.style.overflowY = "hidden";
    }
    _content.style.transform = transform;
    _content.style.webkitTransform = transform;
  }
  function _handleScroll($event) {
    const target = $event.target;
    trigger2("scroll", $event, {
      scrollLeft: target.scrollLeft,
      scrollTop: target.scrollTop,
      scrollHeight: target.scrollHeight,
      scrollWidth: target.scrollWidth,
      deltaX: state2.lastScrollLeft - target.scrollLeft,
      deltaY: state2.lastScrollTop - target.scrollTop
    });
    if (realScrollY.value) {
      if (target.scrollTop <= upperThresholdNumber.value && state2.lastScrollTop - target.scrollTop > 0 && $event.timeStamp - state2.lastScrollToUpperTime > 200) {
        trigger2("scrolltoupper", $event, {
          direction: "top"
        });
        state2.lastScrollToUpperTime = $event.timeStamp;
      }
      if (target.scrollTop + target.offsetHeight + lowerThresholdNumber.value >= target.scrollHeight && state2.lastScrollTop - target.scrollTop < 0 && $event.timeStamp - state2.lastScrollToLowerTime > 200) {
        trigger2("scrolltolower", $event, {
          direction: "bottom"
        });
        state2.lastScrollToLowerTime = $event.timeStamp;
      }
    }
    if (realScrollX.value) {
      if (target.scrollLeft <= upperThresholdNumber.value && state2.lastScrollLeft - target.scrollLeft > 0 && $event.timeStamp - state2.lastScrollToUpperTime > 200) {
        trigger2("scrolltoupper", $event, {
          direction: "left"
        });
        state2.lastScrollToUpperTime = $event.timeStamp;
      }
      if (target.scrollLeft + target.offsetWidth + lowerThresholdNumber.value >= target.scrollWidth && state2.lastScrollLeft - target.scrollLeft < 0 && $event.timeStamp - state2.lastScrollToLowerTime > 200) {
        trigger2("scrolltolower", $event, {
          direction: "right"
        });
        state2.lastScrollToLowerTime = $event.timeStamp;
      }
    }
    state2.lastScrollTop = target.scrollTop;
    state2.lastScrollLeft = target.scrollLeft;
  }
  function _scrollTopChanged(val) {
    if (realScrollY.value) {
      {
        if (props2.scrollWithAnimation) {
          scrollTo2(val, "y");
        } else {
          main.value.scrollTop = val;
        }
      }
    }
  }
  function _scrollLeftChanged(val) {
    if (realScrollX.value) {
      {
        if (props2.scrollWithAnimation) {
          scrollTo2(val, "x");
        } else {
          main.value.scrollLeft = val;
        }
      }
    }
  }
  function _scrollIntoViewChanged(val) {
    if (val) {
      if (!/^[_a-zA-Z][-_a-zA-Z0-9:]*$/.test(val)) {
        console.error(`id error: scroll-into-view=${val}`);
        return;
      }
      let element = rootRef.value.querySelector("#" + val);
      if (element) {
        let mainRect = main.value.getBoundingClientRect();
        let elRect = element.getBoundingClientRect();
        if (realScrollX.value) {
          let left = elRect.left - mainRect.left;
          let scrollLeft = main.value.scrollLeft;
          let x = scrollLeft + left;
          if (props2.scrollWithAnimation) {
            scrollTo2(x, "x");
          } else {
            main.value.scrollLeft = x;
          }
        }
        if (realScrollY.value) {
          let top = elRect.top - mainRect.top;
          let scrollTop = main.value.scrollTop;
          let y = scrollTop + top;
          if (props2.scrollWithAnimation) {
            scrollTo2(y, "y");
          } else {
            main.value.scrollTop = y;
          }
        }
      }
    }
  }
  function _transitionEnd(val, direction2) {
    content.value.style.transition = "";
    content.value.style.webkitTransition = "";
    content.value.style.transform = "";
    content.value.style.webkitTransform = "";
    let _main = main.value;
    if (direction2 === "x") {
      _main.style.overflowX = realScrollX.value ? "auto" : "hidden";
      _main.scrollLeft = val;
    } else if (direction2 === "y") {
      _main.style.overflowY = realScrollY.value ? "auto" : "hidden";
      _main.scrollTop = val;
    }
    content.value.removeEventListener("transitionend", __transitionEnd);
    content.value.removeEventListener("webkitTransitionEnd", __transitionEnd);
  }
  function _setRefreshState(_state) {
    if (!props2.refresherEnabled)
      return;
    switch (_state) {
      case "refreshing":
        state2.refresherHeight = props2.refresherThreshold;
        if (!beforeRefreshing) {
          beforeRefreshing = true;
          trigger2("refresherpulling", {}, {
            deltaY: state2.refresherHeight,
            dy: state2.refresherHeight
          });
          trigger2("refresherrefresh", {}, {
            dy: touchEnd.y - touchStart.y
          });
          emit2("update:refresherTriggered", true);
        }
        break;
      case "restore":
      case "refresherabort":
        beforeRefreshing = false;
        state2.refresherHeight = toUpperNumber = 0;
        if (_state === "restore") {
          triggerAbort = false;
          trigger2("refresherrestore", {}, {
            dy: touchEnd.y - touchStart.y
          });
        }
        if (_state === "refresherabort" && triggerAbort) {
          triggerAbort = false;
          trigger2("refresherabort", {}, {
            dy: touchEnd.y - touchStart.y
          });
        }
        break;
    }
    state2.refreshState = _state;
  }
  let touchStart = {
    x: 0,
    y: 0
  };
  let touchEnd = {
    x: 0,
    y: props2.refresherThreshold
  };
  onMounted(() => {
    nextTick(() => {
      _scrollTopChanged(scrollTopNumber.value);
      _scrollLeftChanged(scrollLeftNumber.value);
    });
    _scrollIntoViewChanged(props2.scrollIntoView);
    let __handleScroll = function(event) {
      event.preventDefault();
      event.stopPropagation();
      _handleScroll(event);
    };
    let needStop = null;
    let __handleTouchMove = function(event) {
      if (touchStart === null)
        return;
      let x = event.touches[0].pageX;
      let y = event.touches[0].pageY;
      let _main = main.value;
      if (Math.abs(x - touchStart.x) > Math.abs(y - touchStart.y)) {
        if (realScrollX.value) {
          if (_main.scrollLeft === 0 && x > touchStart.x) {
            needStop = false;
            return;
          } else if (_main.scrollWidth === _main.offsetWidth + _main.scrollLeft && x < touchStart.x) {
            needStop = false;
            return;
          }
          needStop = true;
        } else {
          needStop = false;
        }
      } else {
        if (realScrollY.value) {
          if (_main.scrollTop === 0 && y > touchStart.y) {
            needStop = false;
            if (props2.refresherEnabled && event.cancelable !== false)
              event.preventDefault();
          } else if (_main.scrollHeight === _main.offsetHeight + _main.scrollTop && y < touchStart.y) {
            needStop = false;
            return;
          } else {
            needStop = true;
          }
        } else {
          needStop = false;
        }
      }
      if (needStop) {
        event.stopPropagation();
      }
      if (_main.scrollTop === 0 && event.touches.length === 1) {
        _setRefreshState("pulling");
      }
      if (props2.refresherEnabled && state2.refreshState === "pulling") {
        const dy = y - touchStart.y;
        if (toUpperNumber === 0) {
          toUpperNumber = y;
        }
        if (!beforeRefreshing) {
          state2.refresherHeight = y - toUpperNumber;
          if (state2.refresherHeight > 0) {
            triggerAbort = true;
            trigger2("refresherpulling", event, {
              deltaY: dy,
              dy
            });
          }
        } else {
          state2.refresherHeight = dy + props2.refresherThreshold;
          triggerAbort = false;
        }
      }
    };
    let __handleTouchStart = function(event) {
      if (event.touches.length === 1) {
        touchStart = {
          x: event.touches[0].pageX,
          y: event.touches[0].pageY
        };
      }
    };
    let __handleTouchEnd = function(event) {
      touchEnd = {
        x: event.changedTouches[0].pageX,
        y: event.changedTouches[0].pageY
      };
      if (state2.refresherHeight >= props2.refresherThreshold) {
        _setRefreshState("refreshing");
      } else {
        _setRefreshState("refresherabort");
      }
      touchStart = {
        x: 0,
        y: 0
      };
      touchEnd = {
        x: 0,
        y: props2.refresherThreshold
      };
    };
    main.value.addEventListener("touchstart", __handleTouchStart, passiveOptions);
    main.value.addEventListener("touchmove", __handleTouchMove, passive(false));
    main.value.addEventListener("scroll", __handleScroll, passive(false));
    main.value.addEventListener("touchend", __handleTouchEnd, passiveOptions);
    onBeforeUnmount(() => {
      main.value.removeEventListener("touchstart", __handleTouchStart);
      main.value.removeEventListener("touchmove", __handleTouchMove);
      main.value.removeEventListener("scroll", __handleScroll);
      main.value.removeEventListener("touchend", __handleTouchEnd);
    });
  });
  onActivated(() => {
    realScrollY.value && (main.value.scrollTop = state2.lastScrollTop);
    realScrollX.value && (main.value.scrollLeft = state2.lastScrollLeft);
  });
  watch(scrollTopNumber, (val) => {
    _scrollTopChanged(val);
  });
  watch(scrollLeftNumber, (val) => {
    _scrollLeftChanged(val);
  });
  watch(() => props2.scrollIntoView, (val) => {
    _scrollIntoViewChanged(val);
  });
  watch(() => props2.refresherTriggered, (val) => {
    if (val === true) {
      _setRefreshState("refreshing");
    } else if (val === false) {
      _setRefreshState("restore");
    }
  });
  return {
    realScrollX,
    realScrollY,
    _scrollTopChanged,
    _scrollLeftChanged
  };
}
const props$k = {
  indicatorDots: {
    type: [Boolean, String],
    default: false
  },
  vertical: {
    type: [Boolean, String],
    default: false
  },
  autoplay: {
    type: [Boolean, String],
    default: false
  },
  circular: {
    type: [Boolean, String],
    default: false
  },
  interval: {
    type: [Number, String],
    default: 5e3
  },
  duration: {
    type: [Number, String],
    default: 500
  },
  current: {
    type: [Number, String],
    default: 0
  },
  indicatorColor: {
    type: String,
    default: ""
  },
  indicatorActiveColor: {
    type: String,
    default: ""
  },
  previousMargin: {
    type: String,
    default: ""
  },
  nextMargin: {
    type: String,
    default: ""
  },
  currentItemId: {
    type: String,
    default: ""
  },
  skipHiddenItemLayout: {
    type: [Boolean, String],
    default: false
  },
  displayMultipleItems: {
    type: [Number, String],
    default: 1
  },
  disableTouch: {
    type: [Boolean, String],
    default: false
  },
  navigation: {
    type: [Boolean, String],
    default: false
  },
  navigationColor: {
    type: String,
    default: "#fff"
  },
  navigationActiveColor: {
    type: String,
    default: "rgba(53, 53, 53, 0.6)"
  }
};
function useState$3(props2) {
  const interval = computed(() => {
    const interval2 = Number(props2.interval);
    return isNaN(interval2) ? 5e3 : interval2;
  });
  const duration = computed(() => {
    const duration2 = Number(props2.duration);
    return isNaN(duration2) ? 500 : duration2;
  });
  const displayMultipleItems = computed(() => {
    const displayMultipleItems2 = Math.round(props2.displayMultipleItems);
    return isNaN(displayMultipleItems2) ? 1 : displayMultipleItems2;
  });
  const state2 = reactive({
    interval,
    duration,
    displayMultipleItems,
    current: Math.round(props2.current) || 0,
    currentItemId: props2.currentItemId,
    userTracking: false
  });
  return state2;
}
function useLayout(props2, state2, swiperContexts, slideFrameRef, emit2, trigger2) {
  function cancelSchedule() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  let timer = null;
  let invalid = true;
  let viewportPosition = 0;
  let viewportMoveRatio = 1;
  let animating = null;
  let requestedAnimation = false;
  let contentTrackViewport = 0;
  let transitionStart;
  let currentChangeSource = "";
  let animationFrame;
  const swiperEnabled = computed(() => swiperContexts.value.length > state2.displayMultipleItems);
  const circularEnabled = computed(() => props2.circular && swiperEnabled.value);
  function checkCircularLayout(index2) {
    if (!invalid) {
      for (let items = swiperContexts.value, n = items.length, i = index2 + state2.displayMultipleItems, r = 0; r < n; r++) {
        const item = items[r];
        const s = Math.floor(index2 / n) * n + r;
        const l = s + n;
        const c = s - n;
        const u = Math.max(index2 - (s + 1), s - i, 0);
        const d = Math.max(index2 - (l + 1), l - i, 0);
        const h2 = Math.max(index2 - (c + 1), c - i, 0);
        const p2 = Math.min(u, d, h2);
        const position = [s, l, c][[u, d, h2].indexOf(p2)];
        item.updatePosition(position, props2.vertical);
      }
    }
  }
  function updateViewport(index2) {
    if (!(Math.floor(2 * viewportPosition) === Math.floor(2 * index2) && Math.ceil(2 * viewportPosition) === Math.ceil(2 * index2))) {
      if (circularEnabled.value) {
        checkCircularLayout(index2);
      }
    }
    const x = props2.vertical ? "0" : 100 * -index2 * viewportMoveRatio + "%";
    const y = props2.vertical ? 100 * -index2 * viewportMoveRatio + "%" : "0";
    const transform = "translate(" + x + ", " + y + ") translateZ(0)";
    const slideFrame = slideFrameRef.value;
    if (slideFrame) {
      slideFrame.style.webkitTransform = transform;
      slideFrame.style.transform = transform;
    }
    viewportPosition = index2;
    if (!transitionStart) {
      if (index2 % 1 === 0) {
        return;
      }
      transitionStart = index2;
    }
    index2 -= Math.floor(transitionStart);
    const items = swiperContexts.value;
    if (index2 <= -(items.length - 1)) {
      index2 += items.length;
    } else if (index2 >= items.length) {
      index2 -= items.length;
    }
    index2 = transitionStart % 1 > 0.5 || transitionStart < 0 ? index2 - 1 : index2;
    trigger2("transition", {}, {
      dx: props2.vertical ? 0 : index2 * slideFrame.offsetWidth,
      dy: props2.vertical ? index2 * slideFrame.offsetHeight : 0
    });
  }
  function endViewportAnimation() {
    if (animating) {
      updateViewport(animating.toPos);
      animating = null;
    }
  }
  function normalizeCurrentValue(current) {
    const length = swiperContexts.value.length;
    if (!length) {
      return -1;
    }
    const index2 = (Math.round(current) % length + length) % length;
    if (circularEnabled.value) {
      if (length <= state2.displayMultipleItems) {
        return 0;
      }
    } else if (index2 > length - state2.displayMultipleItems) {
      return length - state2.displayMultipleItems;
    }
    return index2;
  }
  function cancelViewportAnimation() {
    animating = null;
  }
  function animateFrameFuncProto() {
    if (!animating) {
      requestedAnimation = false;
      return;
    }
    const _animating = animating;
    const toPos = _animating.toPos;
    const acc = _animating.acc;
    const endTime = _animating.endTime;
    const source = _animating.source;
    const time = endTime - Date.now();
    if (time <= 0) {
      updateViewport(toPos);
      animating = null;
      requestedAnimation = false;
      transitionStart = null;
      const item = swiperContexts.value[state2.current];
      if (item) {
        const currentItemId = item.getItemId();
        trigger2("animationfinish", {}, {
          current: state2.current,
          currentItemId,
          source
        });
      }
      return;
    }
    const s = acc * time * time / 2;
    const l = toPos + s;
    updateViewport(l);
    animationFrame = requestAnimationFrame(animateFrameFuncProto);
  }
  function animateViewport(current, source, n) {
    cancelViewportAnimation();
    const duration = state2.duration;
    const length = swiperContexts.value.length;
    let position = viewportPosition;
    if (circularEnabled.value) {
      if (n < 0) {
        for (; position < current; ) {
          position += length;
        }
        for (; position - length > current; ) {
          position -= length;
        }
      } else if (n > 0) {
        for (; position > current; ) {
          position -= length;
        }
        for (; position + length < current; ) {
          position += length;
        }
        if (position + length - current < current - position) {
          position += length;
        }
      } else {
        for (; position + length < current; ) {
          position += length;
        }
        for (; position - length > current; ) {
          position -= length;
        }
        if (position + length - current < current - position) {
          position += length;
        }
      }
    } else if (source === "click") {
      current = current + state2.displayMultipleItems - 1 < length ? current : 0;
    }
    animating = {
      toPos: current,
      acc: 2 * (position - current) / (duration * duration),
      endTime: Date.now() + duration,
      source
    };
    if (!requestedAnimation) {
      requestedAnimation = true;
      animationFrame = requestAnimationFrame(animateFrameFuncProto);
    }
  }
  function scheduleAutoplay() {
    cancelSchedule();
    const items = swiperContexts.value;
    const callback = function() {
      timer = null;
      currentChangeSource = "autoplay";
      if (circularEnabled.value) {
        state2.current = normalizeCurrentValue(state2.current + 1);
      } else {
        state2.current = state2.current + state2.displayMultipleItems < items.length ? state2.current + 1 : 0;
      }
      animateViewport(state2.current, "autoplay", circularEnabled.value ? 1 : 0);
      timer = setTimeout(callback, state2.interval);
    };
    if (!(invalid || items.length <= state2.displayMultipleItems)) {
      timer = setTimeout(callback, state2.interval);
    }
  }
  function resetLayout() {
    cancelSchedule();
    endViewportAnimation();
    const items = swiperContexts.value;
    for (let i = 0; i < items.length; i++) {
      items[i].updatePosition(i, props2.vertical);
    }
    viewportMoveRatio = 1;
    const slideFrameEl = slideFrameRef.value;
    if (state2.displayMultipleItems === 1 && items.length) {
      const itemRect = items[0].getBoundingClientRect();
      const slideFrameRect = slideFrameEl.getBoundingClientRect();
      viewportMoveRatio = itemRect.width / slideFrameRect.width;
      if (!(viewportMoveRatio > 0 && viewportMoveRatio < 1)) {
        viewportMoveRatio = 1;
      }
    }
    const position = viewportPosition;
    viewportPosition = -2;
    const current = state2.current;
    if (current >= 0) {
      invalid = false;
      if (state2.userTracking) {
        updateViewport(position + current - contentTrackViewport);
        contentTrackViewport = current;
      } else {
        updateViewport(current);
        if (props2.autoplay) {
          scheduleAutoplay();
        }
      }
    } else {
      invalid = true;
      updateViewport(-state2.displayMultipleItems - 1);
    }
  }
  watch([() => props2.current, () => props2.currentItemId, () => [...swiperContexts.value]], () => {
    let current = -1;
    if (props2.currentItemId) {
      for (let i = 0, items = swiperContexts.value; i < items.length; i++) {
        const itemId = items[i].getItemId();
        if (itemId === props2.currentItemId) {
          current = i;
          break;
        }
      }
    }
    if (current < 0) {
      current = Math.round(props2.current) || 0;
    }
    current = current < 0 ? 0 : current;
    if (state2.current !== current) {
      currentChangeSource = "";
      state2.current = current;
    }
  });
  watch([() => props2.vertical, () => circularEnabled.value, () => state2.displayMultipleItems, () => [...swiperContexts.value]], resetLayout);
  watch(() => state2.interval, () => {
    if (timer) {
      cancelSchedule();
      scheduleAutoplay();
    }
  });
  function currentChanged(current, history2) {
    const source = currentChangeSource;
    currentChangeSource = "";
    const items = swiperContexts.value;
    if (!source) {
      const length = items.length;
      animateViewport(current, "", circularEnabled.value && history2 + (length - current) % length > length / 2 ? 1 : 0);
    }
    const item = items[current];
    if (item) {
      const currentItemId = state2.currentItemId = item.getItemId();
      trigger2("change", {}, {
        current: state2.current,
        currentItemId,
        source
      });
    }
  }
  watch(() => state2.current, (val, oldVal) => {
    currentChanged(val, oldVal);
    emit2("update:current", val);
  });
  watch(() => state2.currentItemId, (val) => {
    emit2("update:currentItemId", val);
  });
  function inintAutoplay(enable) {
    if (enable) {
      scheduleAutoplay();
    } else {
      cancelSchedule();
    }
  }
  watch(() => props2.autoplay && !state2.userTracking, inintAutoplay);
  inintAutoplay(props2.autoplay && !state2.userTracking);
  onMounted(() => {
    let userDirectionChecked = false;
    let contentTrackSpeed = 0;
    let contentTrackT = 0;
    function handleTrackStart() {
      cancelSchedule();
      contentTrackViewport = viewportPosition;
      contentTrackSpeed = 0;
      contentTrackT = Date.now();
      cancelViewportAnimation();
    }
    function handleTrackMove(data) {
      const oldContentTrackT = contentTrackT;
      contentTrackT = Date.now();
      const length = swiperContexts.value.length;
      const other = length - state2.displayMultipleItems;
      function calc2(val) {
        return 0.5 - 0.25 / (val + 0.5);
      }
      function move(oldVal, newVal) {
        let val = contentTrackViewport + oldVal;
        contentTrackSpeed = 0.6 * contentTrackSpeed + 0.4 * newVal;
        if (!circularEnabled.value) {
          if (val < 0 || val > other) {
            if (val < 0) {
              val = -calc2(-val);
            } else {
              if (val > other) {
                val = other + calc2(val - other);
              }
            }
            contentTrackSpeed = 0;
          }
        }
        updateViewport(val);
      }
      const time = contentTrackT - oldContentTrackT || 1;
      const slideFrameEl = slideFrameRef.value;
      if (props2.vertical) {
        move(-data.dy / slideFrameEl.offsetHeight, -data.ddy / time);
      } else {
        move(-data.dx / slideFrameEl.offsetWidth, -data.ddx / time);
      }
    }
    function handleTrackEnd(isCancel) {
      state2.userTracking = false;
      const t2 = contentTrackSpeed / Math.abs(contentTrackSpeed);
      let n = 0;
      if (!isCancel && Math.abs(contentTrackSpeed) > 0.2) {
        n = 0.5 * t2;
      }
      const current = normalizeCurrentValue(viewportPosition + n);
      if (isCancel) {
        animateViewport(state2.current, "", 0);
      } else {
        currentChangeSource = "touch";
        state2.current = current;
        animateViewport(current, "touch", n !== 0 ? n : current === 0 && circularEnabled.value && viewportPosition >= 1 ? 1 : 0);
      }
    }
    useTouchtrack(slideFrameRef.value, (event) => {
      if (props2.disableTouch) {
        return;
      }
      if (!invalid) {
        if (event.detail.state === "start") {
          state2.userTracking = true;
          userDirectionChecked = false;
          return handleTrackStart();
        }
        if (event.detail.state === "end") {
          return handleTrackEnd(false);
        }
        if (event.detail.state === "cancel") {
          return handleTrackEnd(true);
        }
        if (state2.userTracking) {
          if (!userDirectionChecked) {
            userDirectionChecked = true;
            const t2 = Math.abs(event.detail.dx);
            const n = Math.abs(event.detail.dy);
            if (t2 >= n && props2.vertical) {
              state2.userTracking = false;
            } else {
              if (t2 <= n && !props2.vertical) {
                state2.userTracking = false;
              }
            }
            if (!state2.userTracking) {
              if (props2.autoplay) {
                scheduleAutoplay();
              }
              return;
            }
          }
          handleTrackMove(event.detail);
          return false;
        }
      }
    }, true);
  });
  onUnmounted(() => {
    cancelSchedule();
    cancelAnimationFrame(animationFrame);
  });
  function onSwiperDotClick(index2) {
    animateViewport(state2.current = index2, currentChangeSource = "click", circularEnabled.value ? 1 : 0);
  }
  return {
    onSwiperDotClick,
    circularEnabled,
    swiperEnabled
  };
}
const Swiper = /* @__PURE__ */ defineBuiltInComponent({
  name: "Swiper",
  props: props$k,
  emits: ["change", "transition", "animationfinish", "update:current", "update:currentItemId"],
  setup(props2, {
    slots,
    emit: emit2
  }) {
    const rootRef = ref(null);
    const trigger2 = useCustomEvent(rootRef, emit2);
    const slidesWrapperRef = ref(null);
    const slideFrameRef = ref(null);
    const state2 = useState$3(props2);
    const slidesStyle = computed(() => {
      let style = {};
      if (props2.nextMargin || props2.previousMargin) {
        style = props2.vertical ? {
          left: 0,
          right: 0,
          top: rpx2px(props2.previousMargin, true),
          bottom: rpx2px(props2.nextMargin, true)
        } : {
          top: 0,
          bottom: 0,
          left: rpx2px(props2.previousMargin, true),
          right: rpx2px(props2.nextMargin, true)
        };
      }
      return style;
    });
    const slideFrameStyle = computed(() => {
      const value = Math.abs(100 / state2.displayMultipleItems) + "%";
      return {
        width: props2.vertical ? "100%" : value,
        height: !props2.vertical ? "100%" : value
      };
    });
    let swiperItems = [];
    const originSwiperContexts = [];
    const swiperContexts = ref([]);
    function updateSwiperContexts() {
      const contexts = [];
      for (let index2 = 0; index2 < swiperItems.length; index2++) {
        let swiperItem = swiperItems[index2];
        if (!(swiperItem instanceof Element)) {
          swiperItem = swiperItem.el;
        }
        const swiperContext = originSwiperContexts.find((context) => swiperItem === context.rootRef.value);
        if (swiperContext) {
          contexts.push(markRaw(swiperContext));
        }
      }
      swiperContexts.value = contexts;
    }
    const addSwiperContext = function(swiperContext) {
      originSwiperContexts.push(swiperContext);
      updateSwiperContexts();
    };
    provide("addSwiperContext", addSwiperContext);
    const removeSwiperContext = function(swiperContext) {
      const index2 = originSwiperContexts.indexOf(swiperContext);
      if (index2 >= 0) {
        originSwiperContexts.splice(index2, 1);
        updateSwiperContexts();
      }
    };
    provide("removeSwiperContext", removeSwiperContext);
    const {
      onSwiperDotClick,
      circularEnabled,
      swiperEnabled
    } = useLayout(props2, state2, swiperContexts, slideFrameRef, emit2, trigger2);
    let createNavigationTsx = () => null;
    {
      createNavigationTsx = useSwiperNavigation(rootRef, props2, state2, onSwiperDotClick, swiperContexts, circularEnabled, swiperEnabled);
    }
    return () => {
      const defaultSlots = slots.default && slots.default();
      {
        swiperItems = flatVNode(defaultSlots);
      }
      return createVNode("uni-swiper", {
        "ref": rootRef
      }, [createVNode("div", {
        "ref": slidesWrapperRef,
        "class": "uni-swiper-wrapper"
      }, [createVNode("div", {
        "class": "uni-swiper-slides",
        "style": slidesStyle.value
      }, [createVNode("div", {
        "ref": slideFrameRef,
        "class": "uni-swiper-slide-frame",
        "style": slideFrameStyle.value
      }, [defaultSlots], 4)], 4), props2.indicatorDots && createVNode("div", {
        "class": ["uni-swiper-dots", props2.vertical ? "uni-swiper-dots-vertical" : "uni-swiper-dots-horizontal"]
      }, [swiperContexts.value.map((_, index2, array) => createVNode("div", {
        "onClick": () => onSwiperDotClick(index2),
        "class": {
          "uni-swiper-dot": true,
          "uni-swiper-dot-active": index2 < state2.current + state2.displayMultipleItems && index2 >= state2.current || index2 < state2.current + state2.displayMultipleItems - array.length
        },
        "style": {
          background: index2 === state2.current ? props2.indicatorActiveColor : props2.indicatorColor
        }
      }, null, 14, ["onClick"]))], 2), createNavigationTsx()], 512)], 512);
    };
  }
});
const useSwiperNavigation = (rootRef, props2, state2, onSwiperDotClick, swiperContext, circularEnabled, swiperEnabled) => {
  let isNavigationAuto = false;
  let prevDisabled = false;
  let nextDisabled = false;
  let hideNavigation = ref(false);
  watchEffect(() => {
    isNavigationAuto = props2.navigation === "auto";
    hideNavigation.value = props2.navigation !== true || isNavigationAuto;
    swiperAddMouseEvent();
  });
  watchEffect(() => {
    const swiperItemLength = swiperContext.value.length;
    const notCircular = !circularEnabled.value;
    prevDisabled = state2.current === 0 && notCircular;
    nextDisabled = state2.current === swiperItemLength - 1 && notCircular || notCircular && state2.current + state2.displayMultipleItems >= swiperItemLength;
    if (!swiperEnabled.value) {
      prevDisabled = true;
      nextDisabled = true;
      isNavigationAuto && (hideNavigation.value = true);
    }
  });
  function navigationHover(event, type) {
    const target = event.currentTarget;
    if (!target)
      return;
    target.style.backgroundColor = type === "over" ? props2.navigationActiveColor : "";
  }
  const navigationAttr = {
    onMouseover: (event) => navigationHover(event, "over"),
    onMouseout: (event) => navigationHover(event, "out")
  };
  function navigationClick($event, type, disabled) {
    $event.stopPropagation();
    if (disabled)
      return;
    const swiperItemLength = swiperContext.value.length;
    let _current = state2.current;
    switch (type) {
      case "prev":
        _current--;
        if (_current < 0 && circularEnabled.value) {
          _current = swiperItemLength - 1;
        }
        break;
      case "next":
        _current++;
        if (_current >= swiperItemLength && circularEnabled.value) {
          _current = 0;
        }
        break;
    }
    onSwiperDotClick(_current);
  }
  const createNavigationSVG = () => createSvgIconVNode(ICON_PATH_BACK, props2.navigationColor, 26);
  let setHideNavigationTimer;
  const _mousemove = (e2) => {
    clearTimeout(setHideNavigationTimer);
    const {
      clientX,
      clientY
    } = e2;
    const {
      left,
      right,
      top,
      bottom,
      width,
      height
    } = rootRef.value.getBoundingClientRect();
    let hide = false;
    if (props2.vertical) {
      hide = !(clientY - top < height / 3 || bottom - clientY < height / 3);
    } else {
      hide = !(clientX - left < width / 3 || right - clientX < width / 3);
    }
    if (hide) {
      return setHideNavigationTimer = setTimeout(() => {
        hideNavigation.value = hide;
      }, 300);
    }
    hideNavigation.value = hide;
  };
  const _mouseleave = () => {
    hideNavigation.value = true;
  };
  function swiperAddMouseEvent() {
    if (rootRef.value) {
      rootRef.value.removeEventListener("mousemove", _mousemove);
      rootRef.value.removeEventListener("mouseleave", _mouseleave);
      if (isNavigationAuto) {
        rootRef.value.addEventListener("mousemove", _mousemove);
        rootRef.value.addEventListener("mouseleave", _mouseleave);
      }
    }
  }
  onMounted(swiperAddMouseEvent);
  function createNavigationTsx() {
    const navigationClass = {
      "uni-swiper-navigation-hide": hideNavigation.value,
      "uni-swiper-navigation-vertical": props2.vertical
    };
    if (props2.navigation) {
      return createVNode(Fragment, null, [createVNode("div", mergeProps({
        "class": ["uni-swiper-navigation uni-swiper-navigation-prev", extend$1({
          "uni-swiper-navigation-disabled": prevDisabled
        }, navigationClass)],
        "onClick": (e2) => navigationClick(e2, "prev", prevDisabled)
      }, navigationAttr), [createNavigationSVG()], 16, ["onClick"]), createVNode("div", mergeProps({
        "class": ["uni-swiper-navigation uni-swiper-navigation-next", extend$1({
          "uni-swiper-navigation-disabled": nextDisabled
        }, navigationClass)],
        "onClick": (e2) => navigationClick(e2, "next", nextDisabled)
      }, navigationAttr), [createNavigationSVG()], 16, ["onClick"])]);
    }
    return null;
  }
  return createNavigationTsx;
};
const props$j = {
  itemId: {
    type: String,
    default: ""
  }
};
const SwiperItem = /* @__PURE__ */ defineBuiltInComponent({
  name: "SwiperItem",
  props: props$j,
  setup(props2, {
    slots
  }) {
    const rootRef = ref(null);
    const context = {
      rootRef,
      getItemId() {
        return props2.itemId;
      },
      getBoundingClientRect() {
        const el = rootRef.value;
        return el.getBoundingClientRect();
      },
      updatePosition(position, vertical) {
        const x = vertical ? "0" : 100 * position + "%";
        const y = vertical ? 100 * position + "%" : "0";
        const rootEl = rootRef.value;
        const value = `translate(${x},${y}) translateZ(0)`;
        if (rootEl) {
          rootEl.style.webkitTransform = value;
          rootEl.style.transform = value;
        }
      }
    };
    onMounted(() => {
      const addSwiperContext = inject("addSwiperContext");
      if (addSwiperContext) {
        addSwiperContext(context);
      }
    });
    onUnmounted(() => {
      const removeSwiperContext = inject("removeSwiperContext");
      if (removeSwiperContext) {
        removeSwiperContext(context);
      }
    });
    return () => {
      return createVNode("uni-swiper-item", {
        "ref": rootRef,
        "style": {
          position: "absolute",
          width: "100%",
          height: "100%"
        }
      }, [slots.default && slots.default()], 512);
    };
  }
});
const SPACE_UNICODE = {
  ensp: " ",
  emsp: " ",
  nbsp: " "
};
function normalizeText(text2, { space, decode: decode2 }) {
  let result = "";
  let isEscape = false;
  for (let char of text2) {
    if (space && SPACE_UNICODE[space] && char === " ") {
      char = SPACE_UNICODE[space];
    }
    if (isEscape) {
      if (char === "n") {
        result += LINEFEED;
      } else if (char === "\\") {
        result += "\\";
      } else {
        result += "\\" + char;
      }
      isEscape = false;
    } else {
      if (char === "\\") {
        isEscape = true;
      } else {
        result += char;
      }
    }
  }
  if (!decode2) {
    return result;
  }
  return result.replace(/&nbsp;/g, SPACE_UNICODE.nbsp).replace(/&ensp;/g, SPACE_UNICODE.ensp).replace(/&emsp;/g, SPACE_UNICODE.emsp).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
}
function parseText(text2, options) {
  return normalizeText(text2, options).split(LINEFEED);
}
const index$i = /* @__PURE__ */ defineBuiltInComponent({
  name: "Text",
  props: {
    selectable: {
      type: [Boolean, String],
      default: false
    },
    space: {
      type: String,
      default: ""
    },
    decode: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props2, {
    slots
  }) {
    const rootRef = ref(null);
    return () => {
      const children = [];
      if (slots.default) {
        slots.default().forEach((vnode) => {
          if (vnode.shapeFlag & 8 && vnode.type !== Comment) {
            let lines = [];
            lines = parseText(vnode.children, {
              space: props2.space,
              decode: props2.decode
            });
            const len = lines.length - 1;
            lines.forEach((line, index2) => {
              if (index2 === 0 && !line)
                ;
              else {
                children.push(createTextVNode(line));
              }
              if (index2 !== len) {
                children.push(createVNode("br"));
              }
            });
          } else {
            children.push(vnode);
          }
        });
      }
      return createVNode("uni-text", {
        "ref": rootRef,
        "selectable": props2.selectable ? true : null
      }, [createVNode("span", null, children)], 8, ["selectable"]);
    };
  }
});
const index$g = /* @__PURE__ */ defineBuiltInComponent({
  name: "View",
  props: /* @__PURE__ */ extend$1({}, hoverProps),
  setup(props2, {
    slots
  }) {
    const rootRef = ref(null);
    const {
      hovering,
      binding
    } = useHover(props2);
    return () => {
      const hoverClass = props2.hoverClass;
      if (hoverClass && hoverClass !== "none") {
        return createVNode("uni-view", mergeProps({
          "class": hovering.value ? hoverClass : "",
          "ref": rootRef
        }, binding), [renderSlot(slots, "default")], 16);
      }
      return createVNode("uni-view", {
        "ref": rootRef
      }, [renderSlot(slots, "default")], 512);
    };
  }
});
function normalizeEvent(vm, id2) {
  if (!id2) {
    id2 = vm.id;
  }
  if (!id2) {
    return;
  }
  return vm.$options.name.toLowerCase() + "." + id2;
}
function addSubscribe(name, callback, pageId) {
  if (!name) {
    return;
  }
  registerViewMethod(
    pageId || getCurrentPageId(),
    name,
    ({ type, data }, resolve2) => {
      callback(type, data, resolve2);
    }
  );
}
function removeSubscribe(name, pageId) {
  if (!name) {
    return;
  }
  unregisterViewMethod(pageId || getCurrentPageId(), name);
}
function useSubscribe(callback, name, multiple, pageId) {
  const instance2 = getCurrentInstance();
  const vm = instance2.proxy;
  pageId = pageId == null ? useCurrentPageId() : pageId;
  onMounted(() => {
    addSubscribe(name || normalizeEvent(vm), callback, pageId);
    if (multiple || !name) {
      watch(
        () => vm.id,
        (value, oldValue) => {
          addSubscribe(normalizeEvent(vm, value), callback, pageId);
          removeSubscribe(oldValue && normalizeEvent(vm, oldValue));
        }
      );
    }
  });
  onBeforeUnmount(() => {
    removeSubscribe(name || normalizeEvent(vm), pageId);
  });
}
let index$f = 0;
function useContextInfo(_id) {
  const page = useCurrentPageId();
  const instance2 = getCurrentInstance();
  const vm = instance2.proxy;
  const type = vm.$options.name.toLowerCase();
  const id2 = _id || vm.id || `context${index$f++}`;
  onMounted(() => {
    const el = vm.$el;
    el.__uniContextInfo = {
      id: id2,
      type,
      page
    };
  });
  return `${type}.${id2}`;
}
function injectLifecycleHook(name, hook, publicThis, instance2) {
  if (isFunction(hook)) {
    injectHook(name, hook.bind(publicThis), instance2);
  }
}
function initHooks(options, instance2, publicThis) {
  const mpType = options.mpType || publicThis.$mpType;
  if (!mpType || mpType === "component" || // instance.renderer 标识页面是否作为组件渲染
  mpType === "page" && instance2.renderer === "component") {
    return;
  }
  Object.keys(options).forEach((name) => {
    if (isUniLifecycleHook(name, options[name], false)) {
      const hooks = options[name];
      if (isArray$1(hooks)) {
        hooks.forEach(
          (hook) => injectLifecycleHook(name, hook, publicThis, instance2)
        );
      } else {
        injectLifecycleHook(name, hooks, publicThis, instance2);
      }
    }
  });
  if (mpType === "page") {
    instance2.__isVisible = true;
    try {
      let query;
      query = instance2.attrs.__pageQuery;
      const scriptLang = instance2.type.__scriptLang;
      const isUTS = !scriptLang || scriptLang === "uts";
      if (false)
        ;
      if (false)
        ;
      invokeHook(publicThis, ON_LOAD, query);
      if (!instance2.vapor) {
        delete instance2.attrs.__pageQuery;
      }
      const $basePage = false ? publicThis.$basePage : publicThis.$page;
      if (true) {
        if (($basePage == null ? void 0 : $basePage.openType) !== "preloadPage") {
          invokeHook(publicThis, ON_SHOW);
        }
      }
    } catch (e2) {
      console.error(e2.message + LINEFEED + e2.stack);
    }
  }
}
function applyOptions(options, instance2, publicThis) {
  initHooks(options, instance2, publicThis);
}
function set(target, key, val) {
  return target[key] = val;
}
function $callMethod(method, ...args) {
  const fn = this[method];
  if (fn) {
    return fn(...args);
  }
  console.error(`method ${method} not found`);
  return null;
}
function createErrorHandler(app) {
  const userErrorHandler = app.config.errorHandler;
  return function errorHandler(err, instance2, info) {
    if (userErrorHandler) {
      userErrorHandler(err, instance2, info);
    }
    const appInstance = app._instance;
    if (!appInstance || !appInstance.proxy) {
      throw err;
    }
    if (appInstance[ON_ERROR]) {
      {
        invokeHook(appInstance.proxy, ON_ERROR, err);
      }
    } else {
      logError(err, info, instance2 ? instance2.$.vnode : null, false);
    }
  };
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function initOptionMergeStrategies(optionMergeStrategies) {
  UniLifecycleHooks.forEach((name) => {
    optionMergeStrategies[name] = mergeAsArray;
  });
}
function initApp$1(app) {
  const appConfig = app.config;
  appConfig.errorHandler = invokeCreateErrorHandler(app, createErrorHandler);
  initOptionMergeStrategies(appConfig.optionMergeStrategies);
  const globalProperties = appConfig.globalProperties;
  {
    globalProperties.$set = set;
    globalProperties.$applyOptions = applyOptions;
    globalProperties.$callMethod = $callMethod;
  }
  {
    invokeCreateVueAppHook(app);
  }
}
function initRouter(app) {
  const router2 = createRouter(createRouterOptions());
  router2.beforeEach((to, from) => {
    if (to && from && to.meta.isTabBar && from.meta.isTabBar) {
      saveTabBarScrollPosition(from.meta.tabBarIndex);
    }
  });
  app.router = router2;
  app.use(router2);
}
let positionStore = /* @__PURE__ */ Object.create(null);
function getTabBarScrollPosition(id2) {
  return positionStore[id2];
}
function saveTabBarScrollPosition(id2) {
  if (typeof window !== "undefined") {
    positionStore[id2] = {
      left: window.pageXOffset,
      top: window.pageYOffset
    };
  }
}
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    if (to && from && to.meta.isTabBar && from.meta.isTabBar) {
      const position = getTabBarScrollPosition(to.meta.tabBarIndex);
      if (position) {
        return position;
      }
    }
    return {
      left: 0,
      top: 0
    };
  }
};
function createRouterOptions() {
  return {
    history: initHistory(),
    strict: !!__uniConfig.router.strict,
    routes: __uniRoutes,
    scrollBehavior
  };
}
function removeCurrentPages(delta = 1) {
  const keys = getCurrentBasePages();
  const start = keys.length - 1;
  const end = start - delta;
  for (let i = start; i > end; i--) {
    const page = getPage$BasePage(keys[i]);
    removePage(normalizeRouteKey(page.path, page.id), false);
  }
}
function initHistory() {
  let { routerBase } = __uniConfig.router;
  if (routerBase === "/") {
    routerBase = "";
  }
  const history2 = createWebHashHistory(routerBase);
  history2.listen((to, _from, info) => {
    if (info.direction === "back") {
      removeCurrentPages(Math.abs(info.delta));
    }
  });
  return history2;
}
const index$e = {
  install(app) {
    initApp$1(app);
    initViewPlugin(app);
    initServicePlugin(app);
    if (!app.config.warnHandler) {
      app.config.warnHandler = warnHandler;
    }
    {
      initRouter(app);
    }
  }
};
function warnHandler(msg, instance2, trace) {
  if (instance2) {
    const name = instance2.$.type.name;
    if ("PageMetaHead" === name) {
      return;
    }
    const parent = instance2.$.parent;
    if (parent && parent.type.name === "PageMeta") {
      return;
    }
  }
  const warnArgs = [`[Vue warn]: ${msg}`];
  if (trace.length) {
    warnArgs.push(`
`, trace);
  }
  console.warn(...warnArgs);
}
const _hoisted_1$3 = { class: "uni-async-loading" };
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("i", { class: "uni-loading" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    name: "AsyncLoading",
    __reserved: true,
    compatConfig: { MODE: 3 }
  },
  __name: "asyncLoading",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, _hoisted_3$3);
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    name: "AsyncError",
    __reserved: true,
    compatConfig: { MODE: 3 }
  },
  __name: "asyncError",
  props: ["error"],
  setup(__props) {
    initI18nAsyncMsgsOnce();
    const { t: t2 } = useI18n();
    function reload() {
      window.location.reload();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "uni-async-error",
        onClick: reload
      }, toDisplayString(unref(t2)("uni.async.error")), 1);
    };
  }
});
let appVm;
function getApp$1() {
  {
    return appVm;
  }
}
function initApp(vm) {
  appVm = vm;
  Object.defineProperty(appVm.$.ctx, "$children", {
    get() {
      return getCurrentBasePages().map((page) => page.$vm);
    }
  });
  const app = appVm.$.appContext.app;
  if (!app.component(_sfc_main$5.name)) {
    app.component(_sfc_main$5.name, _sfc_main$5);
  }
  if (!app.component(_sfc_main$4.name)) {
    app.component(_sfc_main$4.name, _sfc_main$4);
  }
  initAppVm(appVm);
  defineGlobalData(appVm);
  initService();
  initView();
  {
    updateAppBodyScopeId(appVm);
  }
}
function updateAppBodyScopeId(vm) {
  const scopeId = getScopeId(vm.$);
  if (scopeId) {
    document.body.setAttribute(scopeId, "");
  }
}
function wrapperComponentSetup(comp, { type, clone, init: init2, setup, before, options }) {
  if (clone) {
    comp = extend$1({}, comp);
  }
  before && before(comp);
  const oldSetup = comp.setup;
  comp.setup = (props2, ctx) => {
    const instance2 = getCurrentInstance();
    init2(instance2.proxy);
    setup(instance2);
    if (oldSetup) {
      return oldSetup(props2, ctx);
    }
  };
  return comp;
}
function setupComponent(comp, options) {
  if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
    return wrapperComponentSetup(comp.default, options);
  }
  return wrapperComponentSetup(comp, options);
}
function setupPage(comp, path) {
  return setupComponent(comp, {
    type: "page",
    clone: true,
    // 页面组件可能会被其他地方手动引用，比如 windows 等，需要 clone 一份新的作为页面组件
    init: initPage,
    setup(instance2) {
      instance2.$pageInstance = instance2;
      const route = usePageRoute();
      const query = decodedQuery(route.query);
      instance2.attrs.__pageQuery = query;
      getPage$BasePage(instance2.proxy).options = query;
      instance2.proxy.options = query;
      const pageMeta = usePageMeta();
      updateCurPageCssVar(pageMeta);
      instance2.onReachBottom = reactive([]);
      instance2.onPageScroll = reactive([]);
      watch(
        [instance2.onReachBottom, instance2.onPageScroll],
        () => {
          const currentPage = getCurrentPage();
          if (instance2.proxy === currentPage) {
            initPageScrollListener(instance2, pageMeta);
          }
        },
        { once: true }
      );
      onBeforeMount(() => {
        onPageShow(instance2, pageMeta);
      });
      onMounted(() => {
        onPageReady(instance2);
        const { onReady } = instance2;
        onReady && invokeArrayFns$1(onReady);
        invokeOnTabItemTap(route);
      });
      onBeforeActivate(() => {
        if (!instance2.__isVisible) {
          onPageShow(instance2, pageMeta);
          instance2.__isVisible = true;
          {
            const { onShow } = instance2;
            onShow && invokeArrayFns$1(onShow);
          }
          nextTick(() => {
            invokeOnTabItemTap(route);
          });
        }
      });
      onBeforeDeactivate(() => {
        if (instance2.__isVisible && !instance2.__isUnload) {
          instance2.__isVisible = false;
          {
            const { onHide } = instance2;
            onHide && invokeArrayFns$1(onHide);
          }
        }
      });
      const pageId = getPageProxyId(instance2.proxy);
      subscribeViewMethod(pageId);
      onBeforeUnmount(() => {
        unsubscribeViewMethod(pageId);
      });
      return query;
    }
  });
}
function setupApp(comp) {
  return setupComponent(comp, {
    init: initApp,
    setup(instance2) {
      const route = usePageRoute();
      const onLaunch = (launchRoute = route) => {
        injectAppHooks(instance2);
        const { onLaunch: onLaunch2, onShow, onPageNotFound: onPageNotFound2 } = instance2;
        const path = launchRoute.path.slice(1);
        const launchOptions2 = initLaunchOptions({
          path: path || __uniRoutes[0].meta.route,
          query: decodedQuery(launchRoute.query)
        });
        onLaunch2 && invokeArrayFns$1(onLaunch2, launchOptions2);
        onShow && invokeArrayFns$1(onShow, launchOptions2);
        {
          if (!launchRoute.matched.length) {
            const pageNotFoundOptions = {
              notFound: true,
              openType: "appLaunch",
              path: launchRoute.path,
              query: decodedQuery(launchRoute.query),
              scene: 1001
            };
            handleBeforeEntryPageRoutes();
            onPageNotFound2 && invokeArrayFns$1(onPageNotFound2, pageNotFoundOptions);
          }
        }
      };
      {
        useRouter().isReady().then(onLaunch);
      }
      onMounted(() => {
        window.addEventListener(
          "resize",
          debounce(onResize, 50, { setTimeout, clearTimeout })
        );
        window.addEventListener("message", onMessage);
        document.addEventListener("visibilitychange", onVisibilityChange$1);
        onThemeChange$1();
      });
      return route.query;
    },
    before(comp2) {
      comp2.mpType = "app";
      const { setup } = comp2;
      const render = () => {
        return openBlock(), createBlock(LayoutComponent);
      };
      comp2.setup = (props2, ctx) => {
        const res = setup && setup(props2, ctx);
        return isFunction(res) ? render : res;
      };
      comp2.render = render;
    }
  });
}
function onResize() {
  const { windowWidth, windowHeight, screenWidth, screenHeight } = getSystemInfoSync();
  const landscape = Math.abs(Number(window.orientation)) === 90;
  const deviceOrientation = landscape ? "landscape" : "portrait";
  UniServiceJSBridge$1.emit(ON_RESIZE, {
    deviceOrientation,
    size: {
      windowWidth,
      windowHeight,
      screenWidth,
      screenHeight
    }
  });
}
function onMessage(evt) {
  if (isPlainObject(evt.data) && evt.data.type === WEB_INVOKE_APPSERVICE) {
    UniServiceJSBridge$1.emit(
      ON_WEB_INVOKE_APP_SERVICE,
      evt.data.data,
      evt.data.pageId
    );
  }
}
function onVisibilityChange$1() {
  const { emit: emit2 } = UniServiceJSBridge$1;
  if (document.visibilityState === "visible") {
    emit2(ON_APP_ENTER_FOREGROUND, getEnterOptions());
  } else {
    emit2(ON_APP_ENTER_BACKGROUND);
  }
}
function onThemeChange$1() {
  let mediaQueryList = null;
  try {
    mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
  } catch (error) {
  }
  if (mediaQueryList) {
    let callback = (e2) => {
      UniServiceJSBridge$1.emit(ON_THEME_CHANGE, {
        theme: e2.matches ? "dark" : "light"
      });
    };
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", callback);
    } else {
      mediaQueryList.addListener(callback);
    }
  }
}
function invokeOnTabItemTap(route) {
  const { tabBarText, tabBarIndex, route: pagePath } = route.meta;
  if (tabBarText) {
    invokeHook("onTabItemTap", {
      index: tabBarIndex,
      text: tabBarText,
      pagePath
    });
  }
}
function formatTime(val) {
  val = val > 0 && val < Infinity ? val : 0;
  const h2 = Math.floor(val / 3600);
  const m = Math.floor(val % 3600 / 60);
  const s = Math.floor(val % 3600 % 60);
  const hStr = (h2 < 10 ? "0" : "") + h2;
  const mStr = (m < 10 ? "0" : "") + m;
  const sStr = (s < 10 ? "0" : "") + s;
  let str = mStr + ":" + sStr;
  if (hStr !== "00") {
    str = hStr + ":" + str;
  }
  return str;
}
function useGesture(props2, videoState, videoRef, fullscreenState) {
  const state2 = reactive({
    seeking: false,
    gestureType: "none",
    volumeOld: 0,
    volumeNew: 0,
    currentTimeOld: 0,
    currentTimeNew: 0,
    toastThin: false
  });
  const touchStartOrigin = {
    x: 0,
    y: 0
  };
  let changeToastThinTimer = null;
  const changeToastThin = () => {
    if (state2.gestureType !== "none" && changeToastThinTimer != null)
      return;
    changeToastThinTimer = setTimeout(() => {
      state2.toastThin = true;
    }, 500);
  };
  let showToastTimer = void 0;
  function changeShowToast() {
    if (showToastTimer != void 0)
      return;
    showToastTimer = setTimeout(() => {
      state2.toastThin = false;
      showToastTimer = void 0;
    }, 1e3);
  }
  function clearChangeShowToast() {
    clearTimeout(showToastTimer);
    showToastTimer = void 0;
  }
  function onTouchstart(event) {
    const toucher = event.targetTouches[0];
    touchStartOrigin.x = toucher.pageX;
    touchStartOrigin.y = toucher.pageY;
    state2.gestureType = "none";
    state2.volumeOld = 0;
    if (fullscreenState.fullscreen) {
      event.stopPropagation();
    }
  }
  function onTouchmove(event) {
    function stop() {
      if (fullscreenState.fullscreen) {
        event.stopPropagation();
      }
      event.preventDefault();
    }
    if (fullscreenState.fullscreen) {
      stop();
    }
    const gestureType = state2.gestureType;
    if (gestureType === "stop") {
      return;
    }
    const toucher = event.targetTouches[0];
    const pageX = toucher.pageX;
    const pageY = toucher.pageY;
    const origin = touchStartOrigin;
    const video = videoRef.value;
    if (gestureType === "progress") {
      changeProgress(pageX - origin.x);
      state2.seeking = true;
    } else if (gestureType === "volume") {
      changeVolume(pageY - origin.y);
    }
    if (gestureType !== "none") {
      stop();
      return;
    }
    if (Math.abs(pageX - origin.x) > Math.abs(pageY - origin.y)) {
      if (!props2.enableProgressGesture) {
        state2.gestureType = "stop";
        return;
      }
      state2.gestureType = "progress";
      state2.currentTimeOld = state2.currentTimeNew = video.currentTime;
      if (!fullscreenState.fullscreen) {
        stop();
      }
    } else {
      if (!props2.pageGesture && !props2.vslideGesture) {
        state2.gestureType = "stop";
        return;
      }
      changeToastThin();
      state2.gestureType = "volume";
      state2.volumeOld = video.volume;
      if (!fullscreenState.fullscreen) {
        stop();
      }
    }
  }
  function onTouchend(event) {
    const video = videoRef.value;
    if (state2.gestureType !== "none" && state2.gestureType !== "stop") {
      if (fullscreenState.fullscreen) {
        event.stopPropagation();
      }
      event.preventDefault();
    }
    if (state2.gestureType === "progress" && state2.currentTimeOld !== state2.currentTimeNew) {
      video.currentTime = state2.currentTimeNew;
    }
    state2.gestureType = "none";
  }
  function changeProgress(x) {
    const duration = videoState.currentDuration;
    let currentTimeNew = x / 600 * duration + state2.currentTimeOld;
    if (currentTimeNew < 0) {
      currentTimeNew = 0;
    } else if (currentTimeNew > duration) {
      currentTimeNew = duration;
    }
    state2.currentTimeNew = currentTimeNew;
  }
  function changeVolume(y) {
    const video = videoRef.value;
    const valueOld = state2.volumeOld;
    let value;
    if (typeof valueOld === "number") {
      value = valueOld - y / 200;
      if (value < 0) {
        value = 0;
      } else if (value > 1) {
        value = 1;
      }
      clearChangeShowToast();
      changeShowToast();
      video.volume = value;
      state2.volumeNew = value;
    }
  }
  return {
    state: state2,
    onTouchstart,
    onTouchmove,
    onTouchend
  };
}
function useFullscreen(trigger2, containerRef, videoRef, userActionState, rootRef) {
  const state2 = reactive({
    fullscreen: false
  });
  const isSafari = /^Apple/.test(navigator.vendor);
  function onFullscreenChange($event, webkit) {
    if (webkit && document.fullscreenEnabled) {
      return;
    }
    emitFullscreenChange(!!(document.fullscreenElement || document.webkitFullscreenElement));
  }
  function emitFullscreenChange(val) {
    state2.fullscreen = val;
    trigger2("fullscreenchange", {}, {
      fullScreen: val,
      direction: "vertical"
    });
  }
  function toggleFullscreen(val) {
    const root = rootRef.value;
    const container = containerRef.value;
    const video = videoRef.value;
    let mockFullScreen;
    if (val) {
      if ((document.fullscreenEnabled || document.webkitFullscreenEnabled) && (!isSafari || userActionState.userAction)) {
        container[document.fullscreenEnabled ? "requestFullscreen" : "webkitRequestFullscreen"]();
      } else if (video.webkitEnterFullScreen) {
        video.webkitEnterFullScreen();
      } else {
        mockFullScreen = true;
        container.remove();
        container.classList.add("uni-video-type-fullscreen");
        document.body.appendChild(container);
      }
    } else {
      if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
          document.webkitExitFullscreen();
        }
      } else if (video.webkitExitFullScreen) {
        video.webkitExitFullScreen();
      } else {
        mockFullScreen = true;
        container.remove();
        container.classList.remove("uni-video-type-fullscreen");
        root.appendChild(container);
      }
    }
    if (mockFullScreen) {
      emitFullscreenChange(val);
    }
  }
  function requestFullScreen() {
    toggleFullscreen(true);
  }
  function exitFullScreen() {
    toggleFullscreen(false);
  }
  onBeforeUnmount(exitFullScreen);
  return {
    state: state2,
    onFullscreenChange,
    emitFullscreenChange,
    toggleFullscreen,
    requestFullScreen,
    exitFullScreen
  };
}
function useVideo(props2, attrs2, trigger2) {
  const videoRef = ref(null);
  const src = computed(() => getRealPath(props2.src));
  const muted = computed(() => props2.muted === "true" || props2.muted === true);
  const state2 = reactive({
    start: false,
    src,
    playing: false,
    currentTime: 0,
    duration: 0,
    currentDuration: 0,
    progress: 0,
    buffered: 0,
    muted,
    pauseUpdatingCurrentTime: false
  });
  watch(() => src.value, () => {
    state2.playing = false;
    state2.currentTime = 0;
  });
  watch(() => state2.buffered, (buffered) => {
    trigger2("progress", {}, {
      buffered
    });
  });
  watch(() => muted.value, (muted2) => {
    const video = videoRef.value;
    video.muted = muted2;
  });
  watch([() => state2.duration, () => props2.duration], () => {
    let _duration = Number(props2.duration);
    isNaN(_duration) && (_duration = 0);
    state2.currentDuration = _duration > 0 ? _duration : state2.duration;
  });
  function onDurationChange({
    target
  }) {
    state2.duration = target.duration;
  }
  function onLoadedMetadata($event) {
    const initialTime = Number(props2.initialTime) || 0;
    const video = $event.target;
    if (initialTime > 0) {
      video.currentTime = initialTime;
    }
    trigger2("loadedmetadata", $event, {
      width: video.videoWidth,
      height: video.videoHeight,
      duration: video.duration
    });
    onProgress($event);
  }
  function onProgress($event) {
    const video = $event.target;
    const buffered = video.buffered;
    if (buffered.length) {
      state2.buffered = buffered.end(buffered.length - 1) / video.duration * 100;
    }
  }
  function onWaiting($event) {
    trigger2("waiting", $event, {});
  }
  function onVideoError($event) {
    state2.playing = false;
    trigger2("error", $event, {});
  }
  function onPlay($event) {
    state2.start = true;
    state2.playing = true;
    trigger2("play", $event, {});
  }
  function onPause($event) {
    state2.playing = false;
    trigger2("pause", $event, {});
  }
  function onEnded($event) {
    state2.playing = false;
    trigger2("ended", $event, {});
  }
  function onTimeUpdate($event) {
    const video = $event.target;
    if (!state2.pauseUpdatingCurrentTime) {
      state2.currentTime = video.currentTime;
    }
    const currentTime = video.currentTime;
    trigger2("timeupdate", $event, {
      currentTime,
      duration: video.duration
    });
  }
  function toggle() {
    const video = videoRef.value;
    if (state2.playing) {
      video.pause();
    } else {
      video.play();
    }
  }
  function play() {
    const video = videoRef.value;
    state2.start = true;
    video.play();
  }
  function pause() {
    const video = videoRef.value;
    video.pause();
  }
  function seek(position) {
    const video = videoRef.value;
    position = Number(position);
    if (typeof position === "number" && !isNaN(position)) {
      video.currentTime = position;
    }
  }
  function stop() {
    seek(0);
    pause();
  }
  function playbackRate(rate) {
    const video = videoRef.value;
    video.playbackRate = rate;
  }
  return {
    videoRef,
    state: state2,
    play,
    pause,
    stop,
    seek,
    playbackRate,
    toggle,
    onDurationChange,
    onLoadedMetadata,
    onProgress,
    onWaiting,
    onVideoError,
    onPlay,
    onPause,
    onEnded,
    onTimeUpdate
  };
}
function useControls(props2, videoState, seek, seeking) {
  const progressRef = ref(null);
  const ballRef = ref(null);
  const centerPlayBtnShow = computed(() => props2.showCenterPlayBtn && !videoState.start);
  const controlsVisible = ref(true);
  const controlsShow = computed(() => !centerPlayBtnShow.value && props2.controls && controlsVisible.value);
  const state2 = reactive({
    seeking: false,
    touching: false,
    controlsTouching: false,
    centerPlayBtnShow,
    controlsShow,
    controlsVisible
  });
  function clickProgress(event) {
    const $progress = progressRef.value;
    let element = event.target;
    let x = event.offsetX;
    while (element && element !== $progress) {
      x += element.offsetLeft;
      element = element.parentNode;
    }
    const w = $progress.offsetWidth;
    let progress = 0;
    if (x >= 0 && x <= w) {
      progress = x / w;
      seek(videoState.currentDuration * progress);
    }
  }
  function toggleControls() {
    state2.controlsVisible = !state2.controlsVisible;
  }
  let hideTiming;
  function autoHideStart() {
    hideTiming = setTimeout(() => {
      state2.controlsVisible = false;
    }, 3e3);
  }
  function autoHideEnd() {
    if (hideTiming) {
      clearTimeout(hideTiming);
      hideTiming = null;
    }
  }
  onBeforeUnmount(() => {
    if (hideTiming) {
      clearTimeout(hideTiming);
    }
  });
  watch(() => state2.controlsShow && videoState.playing && !state2.controlsTouching, (val) => {
    if (val) {
      autoHideStart();
    } else {
      autoHideEnd();
    }
  });
  onMounted(() => {
    const passiveOptions2 = passive(false);
    let originX;
    let originY;
    let moveOnce = true;
    let originProgress;
    const ball = ballRef.value;
    function touchmove2(event) {
      const toucher = event.targetTouches[0];
      const pageX = toucher.pageX;
      const pageY = toucher.pageY;
      if (moveOnce && Math.abs(pageX - originX) < Math.abs(pageY - originY)) {
        touchend(event);
        return;
      }
      moveOnce = false;
      const progressEl = progressRef.value;
      const w = progressEl.offsetWidth;
      let progress = originProgress + (pageX - originX) / w * 100;
      if (progress < 0) {
        progress = 0;
      } else if (progress > 100) {
        progress = 100;
      }
      videoState.progress = progress;
      seeking == null ? void 0 : seeking(videoState.currentDuration * progress / 100);
      state2.seeking = true;
      event.preventDefault();
      event.stopPropagation();
    }
    function touchend(event) {
      state2.controlsTouching = false;
      if (state2.touching) {
        ball.removeEventListener("touchmove", touchmove2, passiveOptions2);
        if (!moveOnce) {
          event.preventDefault();
          event.stopPropagation();
          seek(videoState.currentDuration * videoState.progress / 100);
        }
        state2.touching = false;
      }
    }
    ball.addEventListener("touchstart", (event) => {
      state2.controlsTouching = true;
      const toucher = event.targetTouches[0];
      originX = toucher.pageX;
      originY = toucher.pageY;
      originProgress = videoState.progress;
      moveOnce = true;
      state2.touching = true;
      ball.addEventListener("touchmove", touchmove2, passiveOptions2);
    });
    ball.addEventListener("touchend", touchend);
    ball.addEventListener("touchcancel", touchend);
  });
  return {
    state: state2,
    progressRef,
    ballRef,
    clickProgress,
    toggleControls,
    autoHideStart,
    autoHideEnd
  };
}
function useDanmu(props2, videoState) {
  const danmuRef = ref(null);
  const state2 = reactive({
    enable: Boolean(props2.enableDanmu)
  });
  let danmuIndex = {
    time: 0,
    index: -1
  };
  const danmuList = isArray$1(props2.danmuList) ? JSON.parse(JSON.stringify(props2.danmuList)) : [];
  danmuList.sort(function(a2, b) {
    return (a2.time || 0) - (b.time || 0);
  });
  function toggleDanmu() {
    state2.enable = !state2.enable;
  }
  function updateDanmu(event) {
    const video = event.target;
    const currentTime = video.currentTime;
    const oldDanmuIndex = danmuIndex;
    const newDanmuIndex = {
      time: currentTime,
      index: oldDanmuIndex.index
    };
    if (currentTime > oldDanmuIndex.time) {
      for (let index2 = oldDanmuIndex.index + 1; index2 < danmuList.length; index2++) {
        const element = danmuList[index2];
        if (currentTime >= (element.time || 0)) {
          newDanmuIndex.index = index2;
          if (videoState.playing && state2.enable) {
            playDanmu(element);
          }
        } else {
          break;
        }
      }
    } else if (currentTime < oldDanmuIndex.time) {
      for (let index2 = oldDanmuIndex.index - 1; index2 > -1; index2--) {
        const element = danmuList[index2];
        if (currentTime <= (element.time || 0)) {
          newDanmuIndex.index = index2 - 1;
        } else {
          break;
        }
      }
    }
    danmuIndex = newDanmuIndex;
  }
  function playDanmu(danmu) {
    const p2 = document.createElement("p");
    p2.className = "uni-video-danmu-item";
    p2.innerText = danmu.text;
    let style = `bottom: ${Math.random() * 100}%;color: ${danmu.color};`;
    p2.setAttribute("style", style);
    const danmuEl = danmuRef.value;
    danmuEl.appendChild(p2);
    setTimeout(function() {
      style += "left: 0;-webkit-transform: translateX(-100%);transform: translateX(-100%);";
      p2.setAttribute("style", style);
      setTimeout(function() {
        p2.remove();
      }, 4e3);
    }, 17);
  }
  function sendDanmu(danmu) {
    danmuList.splice(danmuIndex.index + 1, 0, {
      text: String(danmu.text),
      color: danmu.color,
      time: videoState.currentTime || 0
    });
  }
  return {
    state: state2,
    danmuRef,
    updateDanmu,
    toggleDanmu,
    sendDanmu
  };
}
function useContext(play, pause, stop, seek, sendDanmu, playbackRate, requestFullScreen, exitFullScreen) {
  const methods = {
    play,
    stop,
    pause,
    seek,
    sendDanmu,
    playbackRate,
    requestFullScreen,
    exitFullScreen
  };
  const id2 = useContextInfo();
  useSubscribe((type, data) => {
    let options;
    switch (type) {
      case "seek":
        options = data.position;
        break;
      case "sendDanmu":
        options = data;
        break;
      case "playbackRate":
        options = data.rate;
        break;
    }
    if (type in methods) {
      methods[type](options);
    }
  }, id2, true);
}
function useProgressing(videoState, gestureState, controlsState, autoHideEnd, autoHideStart) {
  const progressing = computed(() => gestureState.gestureType === "progress" || controlsState.touching);
  watch(progressing, (val) => {
    videoState.pauseUpdatingCurrentTime = val;
    controlsState.controlsTouching = val;
    if (gestureState.gestureType === "progress" && val) {
      controlsState.controlsVisible = val;
    }
  });
  watch([() => videoState.currentTime, () => videoState.currentDuration], () => {
    if (videoState.currentDuration > 0) {
      videoState.progress = videoState.currentTime / videoState.currentDuration * 100;
    } else {
      videoState.progress = 0;
    }
    videoState.progress > 100 && (videoState.progress = 100);
  }, {
    immediate: true
  });
  watch(() => gestureState.currentTimeNew, (currentTimeNew) => {
    videoState.currentTime = currentTimeNew;
  });
  return progressing;
}
const props$g = {
  id: {
    type: String,
    default: ""
  },
  src: {
    type: String,
    default: ""
  },
  duration: {
    type: [Number, String],
    default: ""
  },
  controls: {
    type: [Boolean, String],
    default: true
  },
  danmuList: {
    type: Array,
    default() {
      return [];
    }
  },
  danmuBtn: {
    type: [Boolean, String],
    default: false
  },
  enableDanmu: {
    type: [Boolean, String],
    default: false
  },
  autoplay: {
    type: [Boolean, String],
    default: false
  },
  loop: {
    type: [Boolean, String],
    default: false
  },
  muted: {
    type: [Boolean, String],
    default: false
  },
  objectFit: {
    type: String,
    default: "contain"
  },
  poster: {
    type: String,
    default: ""
  },
  direction: {
    type: [String, Number],
    default: ""
  },
  showProgress: {
    type: Boolean,
    default: true
  },
  initialTime: {
    type: [String, Number],
    default: 0
  },
  showFullscreenBtn: {
    type: [Boolean, String],
    default: true
  },
  pageGesture: {
    type: [Boolean, String],
    default: false
  },
  vslideGesture: {
    type: [Boolean, String],
    default: false
  },
  enableProgressGesture: {
    type: [Boolean, String],
    default: true
  },
  showPlayBtn: {
    type: [Boolean, String],
    default: true
  },
  showCenterPlayBtn: {
    type: [Boolean, String],
    default: true
  }
};
const index$d = /* @__PURE__ */ defineBuiltInComponent({
  name: "Video",
  props: props$g,
  emits: ["fullscreenchange", "progress", "loadedmetadata", "waiting", "error", "play", "pause", "ended", "timeupdate"],
  setup(props2, {
    emit: emit2,
    attrs: attrs2,
    slots
  }) {
    const rootRef = ref(null);
    const containerRef = ref(null);
    const trigger2 = useCustomEvent(rootRef, emit2);
    const {
      state: userActionState
    } = useUserAction();
    const {
      $attrs: videoAttrs
    } = useAttrs({
      excludeListeners: true
    });
    initI18nVideoMsgsOnce();
    const {
      videoRef,
      state: videoState,
      play,
      pause,
      stop,
      seek,
      playbackRate,
      toggle,
      onDurationChange,
      onLoadedMetadata,
      onProgress,
      onWaiting,
      onVideoError,
      onPlay,
      onPause,
      onEnded,
      onTimeUpdate
    } = useVideo(props2, attrs2, trigger2);
    const {
      state: danmuState,
      danmuRef,
      updateDanmu,
      toggleDanmu,
      sendDanmu
    } = useDanmu(props2, videoState);
    const {
      state: fullscreenState,
      onFullscreenChange,
      emitFullscreenChange,
      toggleFullscreen,
      requestFullScreen,
      exitFullScreen
    } = useFullscreen(trigger2, containerRef, videoRef, userActionState, rootRef);
    const {
      state: gestureState,
      onTouchstart,
      onTouchend,
      onTouchmove
    } = useGesture(props2, videoState, videoRef, fullscreenState);
    const {
      state: controlsState,
      progressRef,
      ballRef,
      clickProgress,
      toggleControls,
      autoHideEnd,
      autoHideStart
    } = useControls(props2, videoState, seek, (currentTimeNew) => {
      gestureState.currentTimeNew = currentTimeNew;
    });
    useContext(play, pause, stop, seek, sendDanmu, playbackRate, requestFullScreen, exitFullScreen);
    const progressing = useProgressing(videoState, gestureState, controlsState);
    return () => {
      return createVNode("uni-video", {
        "ref": rootRef,
        "id": props2.id,
        "onClick": toggleControls
      }, [createVNode("div", {
        "ref": containerRef,
        "class": "uni-video-container",
        "onTouchstart": onTouchstart,
        "onTouchend": onTouchend,
        "onTouchmove": onTouchmove,
        "onFullscreenchange": withModifiers(onFullscreenChange, ["stop"]),
        "onWebkitfullscreenchange": withModifiers(($event) => onFullscreenChange($event, true), ["stop"])
      }, [createVNode("video", mergeProps({
        "ref": videoRef,
        "style": {
          "object-fit": props2.objectFit
        },
        "muted": !!props2.muted,
        "loop": !!props2.loop,
        "src": videoState.src,
        "poster": props2.poster,
        "autoplay": !!props2.autoplay
      }, videoAttrs.value, {
        "class": {
          "uni-video-video": true,
          "uni-video-video-fullscreen": fullscreenState.fullscreen
        },
        "webkit-playsinline": true,
        "playsinline": true,
        "onDurationchange": onDurationChange,
        "onLoadedmetadata": onLoadedMetadata,
        "onProgress": onProgress,
        "onWaiting": onWaiting,
        "onError": onVideoError,
        "onPlay": onPlay,
        "onPause": onPause,
        "onEnded": onEnded,
        "onTimeupdate": (event) => {
          onTimeUpdate(event);
          updateDanmu(event);
        },
        "onWebkitbeginfullscreen": () => emitFullscreenChange(true),
        "onX5videoenterfullscreen": () => emitFullscreenChange(true),
        "onWebkitendfullscreen": () => emitFullscreenChange(false),
        "onX5videoexitfullscreen": () => emitFullscreenChange(false)
      }), null, 16, ["muted", "loop", "src", "poster", "autoplay", "webkit-playsinline", "playsinline", "onDurationchange", "onLoadedmetadata", "onProgress", "onWaiting", "onError", "onPlay", "onPause", "onEnded", "onTimeupdate", "onWebkitbeginfullscreen", "onX5videoenterfullscreen", "onWebkitendfullscreen", "onX5videoexitfullscreen"]), withDirectives(createVNode("div", {
        "class": "uni-video-bar uni-video-bar-full",
        "onClick": withModifiers(() => {
        }, ["stop"])
      }, [createVNode("div", {
        "class": "uni-video-controls"
      }, [withDirectives(createVNode("div", {
        "class": {
          "uni-video-icon": true,
          "uni-video-control-button": true,
          "uni-video-control-button-play": !videoState.playing,
          "uni-video-control-button-pause": videoState.playing
        },
        "onClick": withModifiers(toggle, ["stop"])
      }, null, 10, ["onClick"]), [[vShow, props2.showPlayBtn]]), withDirectives(createVNode("div", {
        "class": "uni-video-current-time"
      }, [formatTime(videoState.currentTime)], 512), [[vShow, props2.showProgress]]), withDirectives(createVNode("div", {
        "ref": progressRef,
        "class": "uni-video-progress-container",
        "onClick": withModifiers(clickProgress, ["stop"])
      }, [createVNode("div", {
        "class": {
          "uni-video-progress": true,
          "uni-video-progress-progressing": progressing.value
        }
      }, [createVNode("div", {
        "style": {
          width: videoState.buffered - videoState.progress + "%",
          left: videoState.progress + "%"
        },
        "class": "uni-video-progress-buffered"
      }, null, 4), createVNode("div", {
        "style": {
          width: videoState.progress + "%"
        },
        "class": "uni-video-progress-played"
      }, null, 4), createVNode("div", {
        "ref": ballRef,
        "style": {
          left: videoState.progress + "%"
        },
        "class": {
          "uni-video-ball": true,
          "uni-video-ball-progressing": progressing.value
        }
      }, [createVNode("div", {
        "class": "uni-video-inner"
      }, null)], 6)], 2)], 8, ["onClick"]), [[vShow, props2.showProgress]]), withDirectives(createVNode("div", {
        "class": "uni-video-duration"
      }, [formatTime(videoState.currentDuration)], 512), [[vShow, props2.showProgress]])]), withDirectives(createVNode("div", {
        "class": {
          "uni-video-icon": true,
          "uni-video-danmu-button": true,
          "uni-video-danmu-button-active": danmuState.enable
        },
        "onClick": withModifiers(toggleDanmu, ["stop"])
      }, null, 10, ["onClick"]), [[vShow, props2.danmuBtn]]), withDirectives(createVNode("div", {
        "class": {
          "uni-video-icon": true,
          "uni-video-fullscreen": true,
          "uni-video-type-fullscreen": fullscreenState.fullscreen
        },
        "onClick": withModifiers(() => toggleFullscreen(!fullscreenState.fullscreen), ["stop"])
      }, null, 10, ["onClick"]), [[vShow, props2.showFullscreenBtn]])], 8, ["onClick"]), [[vShow, controlsState.controlsShow]]), withDirectives(createVNode("div", {
        "ref": danmuRef,
        "style": "z-index: 0;",
        "class": "uni-video-danmu"
      }, null, 512), [[vShow, videoState.start && danmuState.enable]]), controlsState.centerPlayBtnShow && createVNode("div", {
        "class": "uni-video-cover",
        "onClick": withModifiers(() => {
        }, ["stop"])
      }, [createVNode("div", {
        "class": "uni-video-cover-play-button uni-video-icon",
        "onClick": withModifiers(play, ["stop"])
      }, null, 8, ["onClick"])], 8, ["onClick"]), createVNode("div", {
        "class": "uni-video-loading"
      }, [gestureState.gestureType === "volume" ? createVNode("div", {
        "class": {
          "uni-video-toast-container": true,
          "uni-video-toast-container-thin": gestureState.toastThin
        },
        "style": {
          marginTop: `5px`
        }
      }, [!gestureState.toastThin && gestureState.volumeNew > 0 && gestureState.gestureType === "volume" ? createVNode("text", {
        "class": "uni-video-icon uni-video-toast-icon"
      }, [""]) : !gestureState.toastThin && createVNode("text", {
        "class": "uni-video-icon uni-video-toast-icon"
      }, [""]), createVNode("div", {
        "class": "uni-video-toast-draw",
        "style": {
          width: `${gestureState.volumeNew * 100}%`
        }
      }, null)], 2) : null]), createVNode("div", {
        "class": {
          "uni-video-toast": true,
          "uni-video-toast-progress": progressing.value
        }
      }, [createVNode("div", {
        "class": "uni-video-toast-title"
      }, [createVNode("span", {
        "class": "uni-video-toast-title-current-time"
      }, [formatTime(gestureState.currentTimeNew)]), " / ", formatTime(videoState.currentDuration)])], 2), createVNode("div", {
        "class": "uni-video-slots"
      }, [slots.default && slots.default()])], 40, ["onTouchstart", "onTouchend", "onTouchmove", "onFullscreenchange", "onWebkitfullscreenchange"])], 8, ["id", "onClick"]);
    };
  }
});
const makePhoneCall = /* @__PURE__ */ defineAsyncApi(
  API_MAKE_PHONE_CALL,
  ({ phoneNumber }, { resolve: resolve2 }) => {
    window.location.href = `tel:${phoneNumber}`;
    return resolve2();
  }
);
const UUID_KEY = "__DC_STAT_UUID";
const storage = navigator.cookieEnabled && (window.localStorage || window.sessionStorage) || {};
let deviceId;
function deviceId$1() {
  deviceId = deviceId || storage[UUID_KEY];
  if (!deviceId) {
    deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);
    try {
      storage[UUID_KEY] = deviceId;
    } catch (error) {
    }
  }
  return deviceId;
}
const getWindowInfo = /* @__PURE__ */ defineSyncApi(
  "getWindowInfo",
  () => {
    const pixelRatio2 = window.devicePixelRatio;
    const screenFix = getScreenFix();
    const landscape = isLandscape(screenFix);
    const screenWidth = getScreenWidth(screenFix, landscape);
    const screenHeight = getScreenHeight(screenFix, landscape);
    const windowWidth = getWindowWidth();
    let windowHeight = window.innerHeight;
    const statusBarHeight = safeAreaInsets$1.top;
    const safeArea = {
      left: safeAreaInsets$1.left,
      right: windowWidth - safeAreaInsets$1.right,
      top: safeAreaInsets$1.top,
      bottom: windowHeight - safeAreaInsets$1.bottom,
      width: windowWidth - safeAreaInsets$1.left - safeAreaInsets$1.right,
      height: windowHeight - safeAreaInsets$1.top - safeAreaInsets$1.bottom
    };
    const { top: windowTop, bottom: windowBottom } = getWindowOffset();
    windowHeight -= windowTop;
    windowHeight -= windowBottom;
    return {
      windowTop,
      windowBottom,
      windowWidth,
      windowHeight,
      pixelRatio: pixelRatio2,
      screenWidth,
      screenHeight,
      statusBarHeight,
      safeArea,
      safeAreaInsets: {
        top: safeAreaInsets$1.top,
        right: safeAreaInsets$1.right,
        bottom: safeAreaInsets$1.bottom,
        left: safeAreaInsets$1.left
      },
      screenTop: screenHeight - windowHeight
    };
  }
);
let browserInfo;
let _initBrowserInfo = true;
function initBrowserInfo() {
  if (!_initBrowserInfo)
    return;
  browserInfo = getBrowserInfo();
}
const getDeviceInfo = /* @__PURE__ */ defineSyncApi(
  "getDeviceInfo",
  () => {
    initBrowserInfo();
    const {
      deviceBrand,
      deviceModel,
      brand,
      model,
      platform,
      system,
      deviceOrientation,
      deviceType,
      osname,
      osversion
    } = browserInfo;
    return extend$1({
      brand,
      deviceBrand,
      deviceModel,
      devicePixelRatio: window.devicePixelRatio,
      deviceId: deviceId$1(),
      deviceOrientation,
      deviceType,
      model,
      osName: osname ? osname.toLowerCase() : void 0,
      osVersion: osversion,
      platform,
      system
    });
  }
);
const getAppBaseInfo = /* @__PURE__ */ defineSyncApi(
  "getAppBaseInfo",
  () => {
    initBrowserInfo();
    const { theme, language, browserName, browserVersion } = browserInfo;
    return extend$1(
      {
        appId: __uniConfig.appId,
        appName: __uniConfig.appName,
        appVersion: __uniConfig.appVersion,
        appVersionCode: __uniConfig.appVersionCode,
        appLanguage: getLocale ? getLocale() : language,
        enableDebug: false,
        hostSDKVersion: void 0,
        hostPackageName: void 0,
        hostFontSizeSetting: void 0,
        hostName: browserName,
        hostVersion: browserVersion,
        hostTheme: theme,
        hostLanguage: language,
        isUniAppX: false,
        language,
        SDKVersion: "",
        theme,
        uniPlatform: "web",
        uniCompileVersion: __uniConfig.compilerVersion,
        uniCompilerVersion: __uniConfig.compilerVersion,
        uniRuntimeVersion: __uniConfig.compilerVersion,
        version: ""
      },
      {}
    );
  }
);
const getSystemInfoSync = /* @__PURE__ */ defineSyncApi(
  "getSystemInfoSync",
  () => {
    _initBrowserInfo = true;
    initBrowserInfo();
    _initBrowserInfo = false;
    const windowInfo = getWindowInfo();
    const deviceInfo = getDeviceInfo();
    const appBaseInfo = getAppBaseInfo();
    _initBrowserInfo = true;
    const { ua: ua2, browserName, browserVersion, osname, osversion } = browserInfo;
    const systemInfo = extend$1(
      windowInfo,
      deviceInfo,
      appBaseInfo,
      {
        browserName,
        browserVersion,
        fontSizeSetting: void 0,
        osName: osname.toLowerCase(),
        osVersion: osversion,
        osLanguage: void 0,
        osTheme: void 0,
        ua: ua2,
        uniPlatform: "web",
        uniCompileVersion: __uniConfig.compilerVersion,
        uniRuntimeVersion: __uniConfig.compilerVersion
      }
    );
    delete systemInfo.screenTop;
    delete systemInfo.enableDebug;
    return systemInfo;
  }
);
function parseValue(value, isUTS) {
  const types = ["object", "string", "number", "boolean", "undefined"];
  try {
    const object = isString(value) ? JSON.parse(value) : value;
    const type = object.type;
    if (types.indexOf(type) >= 0) {
      const keys = Object.keys(object);
      if (keys.length === 2 && "data" in object) {
        if (typeof object.data === type) {
          return object.data;
        }
        if (type === "object" && /^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z$/.test(object.data)) {
          return new Date(object.data);
        }
      } else if (keys.length === 1) {
        return "";
      }
    }
  } catch (error) {
  }
}
const setStorageSync = /* @__PURE__ */ defineSyncApi(
  API_SET_STORAGE_SYNC,
  (key, data) => {
    const type = typeof data;
    const value = type === "string" ? data : JSON.stringify({
      type,
      data
    });
    localStorage.setItem(key, value);
  }
);
function getStorageOrigin(key, isUTS) {
  const value = localStorage && localStorage.getItem(key);
  if (!isString(value)) {
    throw new Error("data not found");
  }
  let data = value;
  try {
    const object = JSON.parse(value);
    const result = parseValue(object, isUTS);
    if (result !== void 0) {
      data = result;
    }
  } catch (error) {
  }
  return data;
}
const getStorageSync = /* @__PURE__ */ defineSyncApi(
  API_GET_STORAGE_SYNC,
  // @ts-expect-error 内部isUTS参数
  (key, isUTS) => {
    try {
      return getStorageOrigin(key, isUTS);
    } catch (error) {
      return "";
    }
  }
);
const MIMEType = {
  /**
   * 关于图片常见的MIME类型
   */
  image: {
    jpg: "jpeg",
    jpe: "jpeg",
    pbm: "x-portable-bitmap",
    pgm: "x-portable-graymap",
    pnm: "x-portable-anymap",
    ppm: "x-portable-pixmap",
    psd: "vnd.adobe.photoshop",
    pic: "x-pict",
    rgb: "x-rgb",
    svg: "svg+xml",
    svgz: "svg+xml",
    tif: "tiff",
    xif: "vnd.xiff",
    wbmp: "vnd.wap.wbmp",
    wdp: "vnd.ms-photo",
    xbm: "x-xbitmap",
    ico: "x-icon"
  },
  /**
   * 关于视频常见的MIME类型
   */
  video: {
    "3g2": "3gpp2",
    "3gp": "3gpp",
    avi: "x-msvideo",
    f4v: "x-f4v",
    flv: "x-flv",
    jpgm: "jpm",
    jpgv: "jpeg",
    m1v: "mpeg",
    m2v: "mpeg",
    mpe: "mpeg",
    mpg: "mpeg",
    mpg4: "mpeg",
    m4v: "x-m4v",
    mkv: "x-matroska",
    mov: "quicktime",
    qt: "quicktime",
    movie: "x-sgi-movie",
    mp4v: "mp4",
    ogv: "ogg",
    smv: "x-smv",
    wm: "x-ms-wm",
    wmv: "x-ms-wmv",
    wmx: "x-ms-wmx",
    wvx: "x-ms-wvx"
  }
};
const ALL = "all";
function isWXEnv() {
  const ua2 = window.navigator.userAgent.toLowerCase();
  const matchUA = ua2.match(/MicroMessenger/i);
  return !!(matchUA && matchUA[0] === "micromessenger");
}
function _createInput({
  count,
  sourceType,
  type,
  extension
}) {
  addInteractListener();
  const inputEl = document.createElement("input");
  inputEl.type = "file";
  updateElementStyle(inputEl, {
    position: "absolute",
    visibility: "hidden",
    zIndex: "-999",
    width: "0",
    height: "0",
    top: "0",
    left: "0"
  });
  inputEl.accept = extension.map((item) => {
    if (type !== ALL) {
      const MIMEKey = item.replace(".", "");
      return `${type}/${MIMEType[type][MIMEKey] || MIMEKey}`;
    } else {
      if (isWXEnv()) {
        return ".";
      }
      return item.indexOf(".") === 0 ? item : `.${item}`;
    }
  }).join(",");
  if (count && count > 1) {
    inputEl.multiple = true;
  }
  if (type !== ALL && sourceType instanceof Array && sourceType.length === 1 && sourceType[0] === "camera") {
    inputEl.setAttribute("capture", "camera");
  }
  return inputEl;
}
let imageInput = null;
const chooseImage = /* @__PURE__ */ defineAsyncApi(
  API_CHOOSE_IMAGE,
  ({
    count,
    // sizeType,
    sourceType,
    extension
  }, { resolve: resolve2, reject }) => {
    initI18nChooseFileMsgsOnce();
    const { t: t2 } = useI18n();
    if (imageInput) {
      document.body.removeChild(imageInput);
      imageInput = null;
    }
    imageInput = _createInput({
      count,
      sourceType,
      extension,
      type: "image"
    });
    document.body.appendChild(imageInput);
    imageInput.addEventListener("cancel", () => {
      reject("chooseImage:fail cancel");
    });
    imageInput.addEventListener("change", function(event) {
      const eventTarget = event.target;
      const tempFiles = [];
      if (eventTarget && eventTarget.files) {
        const fileCount = eventTarget.files.length;
        for (let i = 0; i < fileCount; i++) {
          const file = eventTarget.files[i];
          let filePath;
          Object.defineProperty(file, "path", {
            get() {
              filePath = filePath || fileToUrl(file);
              return filePath;
            }
          });
          if (i < count)
            tempFiles.push(file);
        }
      }
      const res = {
        get tempFilePaths() {
          return tempFiles.map(({ path }) => path);
        },
        tempFiles
      };
      resolve2(res);
    });
    imageInput.click();
    if (!getInteractStatus()) {
      console.warn(t2("uni.chooseFile.notUserActivation"));
    }
  },
  ChooseImageProtocol,
  ChooseImageOptions
);
const KEY_MAPS = {
  esc: ["Esc", "Escape"],
  // tab: ['Tab'],
  enter: ["Enter"]
  // space: [' ', 'Spacebar'],
  // up: ['Up', 'ArrowUp'],
  // left: ['Left', 'ArrowLeft'],
  // right: ['Right', 'ArrowRight'],
  // down: ['Down', 'ArrowDown'],
  // delete: ['Backspace', 'Delete', 'Del'],
};
const KEYS = Object.keys(KEY_MAPS);
function useKeyboard() {
  const key = ref("");
  const disable = ref(false);
  const onKeyup = (evt) => {
    if (disable.value) {
      return;
    }
    const res = KEYS.find(
      (key2) => KEY_MAPS[key2].indexOf(evt.key) !== -1
    );
    if (res) {
      key.value = res;
    }
    nextTick(() => key.value = "");
  };
  onMounted(() => {
    document.addEventListener("keyup", onKeyup);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("keyup", onKeyup);
  });
  return {
    key,
    disable
  };
}
function createRootApp(component, rootState, callback) {
  rootState.onClose = (...args) => (rootState.visible = false, callback.apply(null, args));
  return createApp$1(
    /* @__PURE__ */ defineComponent({
      setup() {
        return () => (openBlock(), createBlock(
          component,
          rootState,
          null,
          16
          /* FULL_PROPS */
        ));
      }
    })
  );
}
function ensureRoot(id2) {
  let rootEl = document.getElementById(id2);
  if (!rootEl) {
    rootEl = document.createElement("div");
    rootEl.id = id2;
    document.body.append(rootEl);
  }
  return rootEl;
}
function usePopup(props2, {
  onEsc,
  onEnter
}) {
  const visible = ref(props2.visible);
  const { key, disable } = useKeyboard();
  watch(
    () => props2.visible,
    (value) => visible.value = value
  );
  watch(
    () => visible.value,
    (value) => disable.value = !value
  );
  watchEffect(() => {
    const { value } = key;
    if (value === "esc") {
      onEsc && onEsc();
    } else if (value === "enter") {
      onEnter && onEnter();
    }
  });
  return visible;
}
let index$a = 0;
let overflow = "";
function preventScroll(prevent) {
  let before = index$a;
  index$a += prevent ? 1 : -1;
  index$a = Math.max(0, index$a);
  if (index$a > 0) {
    if (before === 0) {
      overflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
  } else {
    document.body.style.overflow = overflow;
    overflow = "";
  }
}
function usePreventScroll() {
  onMounted(() => preventScroll(true));
  onUnmounted(() => preventScroll(false));
}
const props$a = {
  src: {
    type: String,
    default: ""
  }
};
const ImageView = /* @__PURE__ */ defineSystemComponent({
  name: "ImageView",
  props: props$a,
  setup(props2) {
    const state2 = reactive({
      direction: "none"
    });
    let scale = 1;
    let imgWidth = 0;
    let imgHeight = 0;
    let width = 0;
    let height = 0;
    function onScale({
      detail
    }) {
      scale = detail.scale;
    }
    function onImgLoad(event) {
      const target = event.target;
      const rect = target.getBoundingClientRect();
      imgWidth = rect.width;
      imgHeight = rect.height;
    }
    function onTouchStart(event) {
      const target = event.target;
      const rect = target.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      checkDirection(event);
    }
    function onTouchEnd(event) {
      const horizontal = scale * imgWidth > width;
      const vertical = scale * imgHeight > height;
      if (horizontal && vertical) {
        state2.direction = "all";
      } else if (horizontal) {
        state2.direction = "horizontal";
      } else if (vertical) {
        state2.direction = "vertical";
      } else {
        state2.direction = "none";
      }
      checkDirection(event);
    }
    function checkDirection(event) {
      if (state2.direction === "all" || state2.direction === "horizontal") {
        event.stopPropagation();
      }
    }
    return () => {
      const viewStyle = {
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%"
      };
      return createVNode(MovableArea, {
        "style": viewStyle,
        "onTouchstart": withWebEvent(onTouchStart),
        "onTouchmove": withWebEvent(checkDirection),
        "onTouchend": withWebEvent(onTouchEnd)
      }, {
        default: () => [createVNode(MovableView, {
          "style": viewStyle,
          "direction": state2.direction,
          "inertia": true,
          "scale": true,
          "scale-min": "1",
          "scale-max": "4",
          "onScale": onScale
        }, {
          default: () => [createVNode("img", {
            "src": props2.src,
            "style": {
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              maxHeight: "100%",
              maxWidth: "100%"
            },
            "onLoad": onImgLoad
          }, null, 40, ["src", "onLoad"])]
        }, 8, ["style", "direction", "inertia", "scale", "onScale"])]
      }, 8, ["style", "onTouchstart", "onTouchmove", "onTouchend"]);
    };
  }
});
function _isSlot$2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const props$9 = {
  urls: {
    type: Array,
    default() {
      return [];
    }
  },
  current: {
    type: [Number, String],
    default: 0
  }
};
function getIndex(props2) {
  let index2 = typeof props2.current === "number" ? props2.current : props2.urls.indexOf(props2.current);
  index2 = index2 < 0 ? 0 : index2;
  return index2;
}
const ImagePreview = /* @__PURE__ */ defineSystemComponent({
  name: "ImagePreview",
  props: props$9,
  emits: ["close"],
  setup(props2, {
    emit: emit2
  }) {
    usePreventScroll();
    const {
      key
    } = useKeyboard();
    const rootRef = ref(null);
    const indexRef = ref(getIndex(props2));
    watch(() => props2.current, () => indexRef.value = getIndex(props2));
    watch(() => key.value, (value) => {
      if (value === "esc") {
        onClick();
      }
    });
    let preventDefault;
    onMounted(() => {
      const el = rootRef.value;
      const MAX_MOVE = 20;
      let x = 0;
      let y = 0;
      el.addEventListener("mousedown", (event) => {
        preventDefault = false;
        x = event.clientX;
        y = event.clientY;
      });
      el.addEventListener("mouseup", (event) => {
        if (Math.abs(event.clientX - x) > MAX_MOVE || Math.abs(event.clientY - y) > MAX_MOVE) {
          preventDefault = true;
        }
      });
    });
    function onClick() {
      if (!preventDefault) {
        nextTick(() => {
          emit2("close");
        });
      }
    }
    function onChange2(event) {
      indexRef.value = event.detail.current;
    }
    const closeBtnStyle = {
      position: "absolute",
      "box-sizing": "border-box",
      top: "0",
      right: "0",
      width: "60px",
      height: "44px",
      padding: "6px",
      "line-height": "32px",
      "font-size": "26px",
      color: "white",
      "text-align": "center",
      cursor: "pointer"
    };
    return () => {
      let _slot;
      return createVNode("div", {
        "ref": rootRef,
        "style": {
          display: "block",
          position: "fixed",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          zIndex: 999,
          background: "rgba(0,0,0,0.8)"
        },
        "onClick": onClick
      }, [createVNode(Swiper, {
        "navigation": "auto",
        "current": indexRef.value,
        "onChange": onChange2,
        "indicator-dots": false,
        "autoplay": false,
        "style": {
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%"
        }
      }, _isSlot$2(_slot = props2.urls.map((src) => createVNode(SwiperItem, null, {
        default: () => [createVNode(ImageView, {
          "src": src
        }, null, 8, ["src"])]
      }))) ? _slot : {
        default: () => [_slot],
        _: 1
      }, 8, ["current", "onChange"]), createVNode("div", {
        "style": closeBtnStyle
      }, [createSvgIconVNode(ICON_PATH_CLOSE, "#ffffff", 26)], 4)], 8, ["onClick"]);
    };
  }
});
let state$2 = null;
let imagePreviewInstance;
const closePreviewImageView = () => {
  state$2 = null;
  nextTick(() => {
    imagePreviewInstance == null ? void 0 : imagePreviewInstance.unmount();
    imagePreviewInstance = null;
  });
};
const previewImage = /* @__PURE__ */ defineAsyncApi(
  API_PREVIEW_IMAGE,
  (args, { resolve: resolve2 }) => {
    if (!state$2) {
      state$2 = reactive(args);
      nextTick(() => {
        imagePreviewInstance = createRootApp(
          ImagePreview,
          state$2,
          closePreviewImageView
        );
        imagePreviewInstance.mount(ensureRoot("u-a-p"));
      });
    } else {
      extend$1(state$2, args);
    }
    resolve2();
  },
  PreviewImageProtocol,
  PreviewImageOptions
);
const request = /* @__PURE__ */ defineTaskApi(
  API_REQUEST,
  ({
    url,
    data,
    header = {},
    method,
    dataType: dataType2,
    responseType,
    enableChunked,
    withCredentials,
    timeout = __uniConfig.networkTimeout.request,
    // @ts-expect-error 内部isUTS参数
    isUTS
  }, { resolve: resolve2, reject }) => {
    let body = null;
    const contentType = normalizeContentType(header);
    if (method !== "GET") {
      if (isString(data) || data instanceof ArrayBuffer) {
        body = data;
      } else {
        if (contentType === "json") {
          try {
            body = JSON.stringify(data);
          } catch (error) {
            body = data.toString();
          }
        } else if (contentType === "urlencoded") {
          const bodyArray = [];
          for (const key in data) {
            if (hasOwn$1(data, key)) {
              bodyArray.push(
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
              );
            }
          }
          body = bodyArray.join("&");
        } else {
          body = data.toString();
        }
      }
    }
    let requestTask;
    if (!enableChunked) {
      const xhr = new XMLHttpRequest();
      requestTask = new RequestTask(xhr);
      xhr.open(method, url);
      for (const key in header) {
        if (hasOwn$1(header, key)) {
          xhr.setRequestHeader(key, header[key]);
        }
      }
      const timer = setTimeout(function() {
        xhr.onload = xhr.onabort = xhr.onerror = null;
        requestTask.abort();
        reject("timeout", { errCode: 5 });
      }, timeout);
      xhr.responseType = responseType;
      xhr.onload = function() {
        clearTimeout(timer);
        const statusCode = xhr.status;
        let res = responseType === "text" ? xhr.responseText : xhr.response;
        if (responseType === "text") {
          res = parseResponseText(res, responseType, dataType2);
        }
        resolve2({
          data: res,
          statusCode,
          header: parseHeaders(xhr.getAllResponseHeaders()),
          cookies: []
        });
      };
      xhr.onabort = function() {
        clearTimeout(timer);
        reject("abort", { errCode: 600003 });
      };
      xhr.onerror = function() {
        clearTimeout(timer);
        reject(void 0, { errCode: 5 });
      };
      xhr.withCredentials = withCredentials;
      xhr.send(body);
    } else {
      if (typeof window.fetch === void 0 || typeof window.AbortController === void 0) {
        throw new Error(
          "fetch or AbortController is not supported in this environment"
        );
      }
      const controller = new AbortController();
      const signal = controller.signal;
      requestTask = new RequestTask(controller);
      const fetchOptions = {
        method,
        headers: header,
        body,
        signal,
        credentials: withCredentials ? "include" : "same-origin"
      };
      const timer = setTimeout(function() {
        requestTask.abort();
        reject("timeout", { errCode: 5 });
      }, timeout);
      fetchOptions.signal.addEventListener("abort", function() {
        clearTimeout(timer);
        reject("abort", { errCode: 600003 });
      });
      window.fetch(url, fetchOptions).then(
        (response) => {
          const statusCode = response.status;
          const header2 = response.headers;
          const body2 = response.body;
          const headerObj = {};
          header2.forEach((value, key) => {
            headerObj[key] = value;
          });
          const cookies = cookiesParse(headerObj);
          requestTask._emitter.emit("headersReceived", {
            header: headerObj,
            statusCode,
            cookies
          });
          if (!body2) {
            resolve2({
              data: "",
              statusCode,
              header: headerObj,
              cookies
            });
            return;
          }
          const reader = body2.getReader();
          const bodyBuffers = [];
          const streamReaderRead = () => {
            reader.read().then(({ done, value }) => {
              if (done) {
                const result = concatArrayBuffers(bodyBuffers);
                let res = responseType === "text" ? new TextDecoder().decode(result) : result;
                if (responseType === "text") {
                  res = parseResponseText(res, responseType, dataType2);
                }
                resolve2({
                  data: res,
                  statusCode,
                  header: headerObj,
                  cookies
                });
                return;
              }
              const chunk = value;
              bodyBuffers.push(chunk);
              requestTask._emitter.emit("chunkReceived", {
                data: chunk
              });
              streamReaderRead();
            });
          };
          streamReaderRead();
        },
        (error) => {
          reject(error, { errCode: 5 });
        }
      );
    }
    return requestTask;
  },
  RequestProtocol,
  RequestOptions
);
const cookiesParse = (header) => {
  let cookiesStr = header["Set-Cookie"] || header["set-cookie"];
  let cookiesArr = [];
  if (!cookiesStr) {
    return [];
  }
  if (cookiesStr[0] === "[" && cookiesStr[cookiesStr.length - 1] === "]") {
    cookiesStr = cookiesStr.slice(1, -1);
  }
  const handleCookiesArr = cookiesStr.split(";");
  for (let i = 0; i < handleCookiesArr.length; i++) {
    if (handleCookiesArr[i].indexOf("Expires=") !== -1 || handleCookiesArr[i].indexOf("expires=") !== -1) {
      cookiesArr.push(handleCookiesArr[i].replace(",", ""));
    } else {
      cookiesArr.push(handleCookiesArr[i]);
    }
  }
  cookiesArr = cookiesArr.join(";").split(",");
  return cookiesArr;
};
function concatArrayBuffers(buffers) {
  const totalLength = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const buffer of buffers) {
    result.set(new Uint8Array(buffer), offset);
    offset += buffer.byteLength;
  }
  return result.buffer;
}
function normalizeContentType(header) {
  const name = Object.keys(header).find(
    (name2) => name2.toLowerCase() === "content-type"
  );
  if (!name) {
    return;
  }
  const contentType = header[name];
  if (!contentType) {
    return "string";
  }
  if (contentType.indexOf("application/json") === 0) {
    return "json";
  } else if (contentType.indexOf("application/x-www-form-urlencoded") === 0) {
    return "urlencoded";
  }
  return "string";
}
class RequestTask {
  constructor(controller) {
    this._requestOnChunkReceiveCallbackId = 0;
    this._requestOnChunkReceiveCallbacks = /* @__PURE__ */ new Map();
    this._requestOnHeadersReceiveCallbackId = 0;
    this._requestOnHeadersReceiveCallbacks = /* @__PURE__ */ new Map();
    this._emitter = new E$1();
    this._controller = controller;
  }
  abort() {
    if (this._controller) {
      this._controller.abort();
      delete this._controller;
    }
  }
  onHeadersReceived(callback) {
    this._emitter.on("headersReceived", callback);
    this._requestOnHeadersReceiveCallbackId++;
    this._requestOnHeadersReceiveCallbacks.set(
      this._requestOnHeadersReceiveCallbackId,
      callback
    );
    return this._requestOnHeadersReceiveCallbackId;
  }
  offHeadersReceived(callback) {
    if (callback == null) {
      this._emitter.off("headersReceived");
      return;
    }
    if (typeof callback === "function") {
      this._requestOnHeadersReceiveCallbacks.forEach((cb, id2) => {
        if (cb === callback) {
          this._requestOnHeadersReceiveCallbacks.delete(id2);
          this._emitter.off("headersReceived", callback);
        }
      });
      return;
    }
    const callbackFn = this._requestOnHeadersReceiveCallbacks.get(callback);
    if (!callbackFn) {
      return;
    }
    this._requestOnHeadersReceiveCallbacks.delete(callback);
    this._emitter.off("headersReceived", callbackFn);
  }
  onChunkReceived(callback) {
    this._emitter.on("chunkReceived", callback);
    this._requestOnChunkReceiveCallbackId++;
    this._requestOnChunkReceiveCallbacks.set(
      this._requestOnChunkReceiveCallbackId,
      callback
    );
    return this._requestOnChunkReceiveCallbackId;
  }
  offChunkReceived(callback) {
    if (callback == null) {
      this._emitter.off("chunkReceived");
      return;
    }
    if (typeof callback === "function") {
      this._requestOnChunkReceiveCallbacks.forEach((cb, id2) => {
        if (cb === callback) {
          this._requestOnChunkReceiveCallbacks.delete(id2);
          this._emitter.off("chunkReceived", callback);
        }
      });
      return;
    }
    const callbackFn = this._requestOnChunkReceiveCallbacks.get(callback);
    if (!callbackFn) {
      return;
    }
    this._requestOnChunkReceiveCallbacks.delete(callback);
    this._emitter.off("chunkReceived", callbackFn);
  }
}
function parseHeaders(headers) {
  const headersObject = {};
  headers.split(LINEFEED).forEach((header) => {
    const find = header.match(/(\S+\s*):\s*(.*)/);
    if (!find || find.length !== 3) {
      return;
    }
    headersObject[find[1]] = find[2];
  });
  return headersObject;
}
function parseResponseText(responseText, responseType, dataType2, isUTS) {
  let res = responseText;
  if (responseType === "text" && dataType2 === "json") {
    try {
      res = JSON.parse(res);
    } catch (error) {
    }
  }
  return res;
}
const navigateBack = /* @__PURE__ */ defineAsyncApi(
  API_NAVIGATE_BACK,
  (args, { resolve: resolve2, reject }) => {
    let canBack = true;
    if (invokeHook(ON_BACK_PRESS, {
      from: args.from || "navigateBack"
    }) === true) {
      canBack = false;
    }
    if (!canBack) {
      return reject(ON_BACK_PRESS);
    }
    let router2;
    router2 = getApp$1().$router;
    router2.go(-args.delta);
    return resolve2();
  },
  NavigateBackProtocol,
  NavigateBackOptions
);
const navigateTo = /* @__PURE__ */ defineAsyncApi(
  API_NAVIGATE_TO,
  // @ts-expect-error
  ({ url, events, isAutomatedTesting }, { resolve: resolve2, reject }) => {
    if (!entryPageState.handledBeforeEntryPageRoutes) {
      navigateToPagesBeforeEntryPages.push({
        args: { type: API_NAVIGATE_TO, url, events, isAutomatedTesting },
        resolve: resolve2,
        reject
      });
      return;
    }
    return navigate({ type: API_NAVIGATE_TO, url, events, isAutomatedTesting }).then(resolve2).catch(reject);
  },
  NavigateToProtocol,
  NavigateToOptions
);
const props$5 = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    default: "success",
    validator(value) {
      return SHOW_TOAST_ICON.indexOf(value) !== -1;
    }
  },
  image: {
    type: String,
    default: ""
  },
  duration: {
    type: Number,
    default: 1500
  },
  position: {
    type: String
  },
  mask: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean
  }
};
const ToastIconClassName = "uni-toast__icon";
const Toast = /* @__PURE__ */ defineComponent({
  name: "Toast",
  props: props$5,
  setup(props2) {
    initI18nShowToastMsgsOnce();
    initI18nShowLoadingMsgsOnce();
    const {
      Icon
    } = useToastIcon(props2);
    const visible = usePopup(props2, {});
    return () => {
      const {
        mask,
        duration,
        title,
        image: image2,
        position
      } = props2;
      const positionClass = position ? `uni-toast--${position}` : "";
      const simpleToast = !!position || !image2 && !Icon.value;
      return createVNode(Transition, {
        "name": "uni-fade"
      }, {
        default: () => [withDirectives(createVNode("uni-toast", {
          "data-duration": duration
        }, [mask && !position ? createVNode("div", {
          "class": "uni-mask",
          "style": "background: transparent;",
          "onTouchmove": onEventPrevent
        }, null, 40, ["onTouchmove"]) : "", simpleToast ? createVNode("div", {
          "class": ["uni-sample-toast", positionClass]
        }, [createVNode("p", {
          "class": "uni-simple-toast__text"
        }, [title])], 2) : createVNode("div", {
          "class": "uni-toast"
        }, [image2 ? createVNode("img", {
          "src": image2,
          "class": ToastIconClassName
        }, null, 10, ["src"]) : Icon.value, title ? createVNode("p", {
          "class": "uni-toast__content"
        }, [title]) : ""])], 8, ["data-duration"]), [[vShow, visible.value]])]
      });
    };
  }
});
function useToastIcon(props2) {
  const Icon = computed(() => {
    switch (props2.icon) {
      case "success":
        return createVNode(createSvgIconVNode(ICON_PATH_SUCCESS_NO_CIRCLE, "#fff", 36), {
          class: ToastIconClassName
        });
      case "error":
        return createVNode(createSvgIconVNode(ICON_PATH_WARN, "#fff", 36), {
          class: ToastIconClassName
        });
      case "loading":
        return createVNode("i", {
          "class": [ToastIconClassName, "uni-loading"]
        }, null, 2);
      default:
        return null;
    }
  });
  return {
    Icon
  };
}
const pageToast = { type: "", token: 0 };
const appToast = { type: "", token: 0 };
const scope = /* @__PURE__ */ effectScope();
function resetToastTimeout(controller) {
  clearTimeout(controller.timeoutId);
  if (controller.type !== "onShowToast") {
    return;
  }
  controller.timeoutId = setTimeout(
    () => hidePopup("onHideToast", controller),
    controller.state.duration
  );
}
function watchVisible(controller) {
  scope.run(() => {
    watch(
      () => controller.state.visible,
      (visible) => {
        if (visible) {
          resetToastTimeout(controller);
        } else {
          clearTimeout(controller.timeoutId);
        }
      }
    );
  });
}
function createToast(controller, args, type, pageId) {
  var _a;
  clearTimeout(controller.timeoutId);
  clearTimeout(controller.showTimerId);
  controller.type = type;
  controller.pageId = pageId;
  controller.token++;
  if (!controller.state) {
    controller.state = reactive(extend$1({}, args, { visible: false }));
    nextTick(() => {
      watchVisible(controller);
      if (controller === pageToast) {
        UniServiceJSBridge$1.on(
          "onHidePopup",
          () => hidePopup("onHidePopup", pageToast)
        );
      }
      createRootApp(Toast, controller.state, () => {
      }).mount(
        ensureRoot(controller === pageToast ? "u-a-t" : "u-a-at")
      );
    });
  } else {
    extend$1(controller.state, args);
  }
  const token = controller.token;
  controller.showTimerId = setTimeout(() => {
    if (token === controller.token) {
      controller.state.visible = true;
    }
  }, 10);
  if ((_a = controller.state) == null ? void 0 : _a.visible) {
    resetToastTimeout(controller);
  }
}
const showToast = /* @__PURE__ */ defineAsyncApi(
  API_SHOW_TOAST,
  (args, { resolve: resolve2, reject }) => {
    if (args.position !== void 0 && !["top", "center", "bottom"].includes(args.position)) {
      args.position = "center";
    }
    const controller = args.position === void 0 ? pageToast : appToast;
    createToast(
      controller,
      args,
      "onShowToast",
      controller === pageToast ? getCurrentPageId() : void 0
    );
    resolve2();
  },
  ShowToastProtocol,
  ShowToastOptions
);
function hidePopup(type, controller) {
  const { t: t2 } = useI18n();
  if (!controller.type) {
    return;
  }
  let warnMsg = "";
  if (type === "onHideToast" && controller.type !== "onShowToast") {
    warnMsg = t2("uni.showToast.unpaired");
  } else if (type === "onHideLoading" && controller.type !== "onShowLoading") {
    warnMsg = t2("uni.showLoading.unpaired");
  }
  if (warnMsg) {
    return console.warn(warnMsg);
  }
  controller.type = "";
  controller.pageId = void 0;
  clearTimeout(controller.timeoutId);
  clearTimeout(controller.showTimerId);
  const token = ++controller.token;
  setTimeout(() => {
    if (token === controller.token) {
      controller.state.visible = false;
    }
  }, 10);
}
onPageUnload((pageId) => {
  if (pageToast.pageId === pageId && pageToast.type === "onShowToast") {
    hidePopup("onHideToast", pageToast);
  }
});
function updateDocumentTitle(title) {
  if (title && title !== document.title) {
    document.title = title;
  }
  UniServiceJSBridge$1.emit(ON_NAVIGATION_BAR_CHANGE, { titleText: title });
}
function useDocumentTitle(pageMeta) {
  function update() {
    updateDocumentTitle(pageMeta.navigationBar.titleText);
  }
  watchEffect(update);
  onActivated(update);
}
const pageScrollTo = /* @__PURE__ */ defineAsyncApi(
  API_PAGE_SCROLL_TO,
  ({ scrollTop, selector, duration }, { resolve: resolve2 }) => {
    scrollTo(selector || scrollTop || 0, duration);
    resolve2();
  },
  PageScrollToProtocol,
  PageScrollToOptions
);
const _AdConfig = class _AdConfig2 {
  constructor() {
    __publicField(this, "_adConfig", null);
    __publicField(this, "_isLoading", false);
    __publicField(this, "_callbacks", []);
    __publicField(this, "_configLast", 0);
  }
  static get instance() {
    if (!_AdConfig2._instance) {
      _AdConfig2._instance = new _AdConfig2();
      _AdConfig2._instance._init();
    }
    return _AdConfig2._instance;
  }
  get adConfig() {
    return this._adConfig;
  }
  get isExpired() {
    if (this._adConfig == null) {
      return true;
    }
    if (!this._configLast) {
      return true;
    }
    return Math.abs(Date.now() - this._configLast) > _AdConfig2.CACHE_TIME;
  }
  _init() {
    var config = this._getConfig();
    if (config === null || !config.last) {
      return;
    }
    if (Math.abs(Date.now() - config.last) <= _AdConfig2.CACHE_TIME) {
      this._adConfig = config.data;
      this._configLast = config.last;
    }
  }
  get(adpid, success, fail) {
    _AdConfig2.IC++;
    if (this._adConfig != null) {
      this._doCallback(adpid, success, fail);
      if (this.isExpired) {
        this._loadAdConfig(adpid);
      }
      return;
    }
    this._callbacks.push({
      adpid,
      success,
      fail
    });
    this._loadAdConfig(adpid);
  }
  _doCallback(adpid, success, fail) {
    _AdConfig2.IS++;
    var {
      a: a2,
      b
    } = this._adConfig;
    const adData = a2[adpid];
    if (adData) {
      success(b, Array.isArray(adData) ? adData : [adData]);
    } else {
      fail(_AdConfig2.ERROR_INVALID_ADPID);
    }
  }
  _loadAdConfig(adpid) {
    if (this._isLoading === true) {
      return;
    }
    this._isLoading = true;
    const appid = typeof __uniConfig !== "undefined" ? __uniConfig.appId ?? "" : "";
    request({
      url: _AdConfig2.URL,
      method: "GET",
      timeout: 8e3,
      data: {
        d: location.hostname,
        a: adpid,
        appid
      },
      dataType: "json",
      success: (res) => {
        const rd = res.data;
        if (rd.ret === 0) {
          const data = rd.data;
          this._adConfig = data;
          this._configLast = Date.now();
          this._setConfig(data);
          this._callbacks.forEach(({
            adpid: adpid2,
            success,
            fail
          }) => {
            this._doCallback(adpid2, success, fail);
          });
        } else {
          this._callbacks.forEach((i) => {
            i.fail({
              errCode: rd.ret,
              errMsg: rd.msg
            });
          });
        }
        this._callbacks = [];
      },
      fail: (err) => {
        this._callbacks.forEach((i) => {
          i.fail(err);
        });
        this._callbacks = [];
      },
      complete: (c) => {
        this._isLoading = false;
      }
    });
  }
  _getConfig() {
    if (!navigator.cookieEnabled || !window.localStorage) {
      return null;
    }
    var data = localStorage.getItem(_AdConfig2.KEY);
    return data ? JSON.parse(data) : null;
  }
  _setConfig(data) {
    if (!navigator.cookieEnabled || !window.localStorage) {
      return null;
    }
    localStorage.setItem(_AdConfig2.KEY, JSON.stringify({
      last: Date.now(),
      data
    }));
  }
};
__publicField(_AdConfig, "IC", 0);
__publicField(_AdConfig, "IS", 0);
__publicField(_AdConfig, "URL", "https://hac1.dcloud.net.cn/ah5v2");
__publicField(_AdConfig, "KEY", "uni_app_ad_config");
__publicField(_AdConfig, "CACHE_TIME", 1e3 * 60 * 10);
__publicField(_AdConfig, "ERROR_INVALID_ADPID", {
  "-5002": "invalid adpid"
});
const _AdReport = class _AdReport2 {
  static get instance() {
    if (!_AdReport2._instance) {
      _AdReport2._instance = new _AdReport2();
    }
    return _AdReport2._instance;
  }
  constructor() {
    var config = this._getConfig();
    if (config && config.guid) {
      this._guid = config.guid;
      return;
    }
    this._guid = this._newGUID();
    this._setConfig(this._guid);
  }
  get(data) {
    this._process(Object.assign(data, {
      d: location.hostname,
      i: this._guid
    }));
  }
  _process(data) {
    request({
      url: _AdReport2.URL,
      method: "GET",
      data,
      dataType: "json",
      success: () => {
      }
    });
  }
  _newGUID() {
    let guid = "";
    const format = "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx";
    for (let i = 0; i < format.length; i++) {
      if (format[i] === "x") {
        guid += (Math.random() * 16 | 0).toString(16);
      } else {
        guid += format[i];
      }
    }
    return guid.toUpperCase();
  }
  _getConfig() {
    if (!navigator.cookieEnabled || !window.localStorage) {
      return null;
    }
    var data = localStorage.getItem(_AdReport2.KEY);
    return data ? JSON.parse(data) : null;
  }
  _setConfig(guid) {
    if (!navigator.cookieEnabled || !window.localStorage) {
      return null;
    }
    localStorage.setItem(_AdReport2.KEY, JSON.stringify({
      last: Date.now(),
      guid
    }));
  }
};
__publicField(_AdReport, "URL", "https://has1.dcloud.net.cn/ahl");
__publicField(_AdReport, "KEY", "uni_app_ad_guid");
const UniViewJSBridge$1 = /* @__PURE__ */ extend$1(ViewJSBridge, {
  publishHandler(event, args, pageId) {
    UniServiceJSBridge$1.subscribeHandler(event, args, pageId);
  }
});
const UniServiceJSBridge$1 = /* @__PURE__ */ extend$1(ServiceJSBridge, {
  publishHandler(event, args, pageId) {
    UniViewJSBridge$1.subscribeHandler(event, args, pageId);
  }
});
const DEFAULT_CSS_VAR_VALUE = "0px";
const LayoutComponent = /* @__PURE__ */ defineSystemComponent({
  name: "Layout",
  setup(_props, {
    emit: emit2
  }) {
    const rootRef = ref(null);
    initCssVar();
    const keepAliveRoute = useKeepAliveRoute();
    const {
      layoutState,
      windowState
    } = useState();
    useMaxWidth(layoutState, rootRef);
    const showTabBar2 = false;
    const clazz = useAppClass(showTabBar2);
    return () => {
      const layoutTsx = createLayoutTsx(keepAliveRoute);
      const tabBarTsx = false;
      return createVNode("uni-app", {
        "ref": rootRef,
        "class": clazz.value
      }, [layoutTsx, tabBarTsx], 2);
    };
  }
});
function useAppClass(showTabBar2) {
  const showMaxWidth = ref(false);
  return computed(() => {
    return {
      "uni-app--showtabbar": showTabBar2 && showTabBar2.value,
      "uni-app--maxwidth": showMaxWidth.value
    };
  });
}
function initCssVar() {
  updateCssVar({
    "--status-bar-height": DEFAULT_CSS_VAR_VALUE,
    "--top-window-height": DEFAULT_CSS_VAR_VALUE,
    "--window-left": DEFAULT_CSS_VAR_VALUE,
    "--window-right": DEFAULT_CSS_VAR_VALUE,
    "--window-margin": DEFAULT_CSS_VAR_VALUE,
    "--tab-bar-height": DEFAULT_CSS_VAR_VALUE
  });
}
function useMaxWidth(layoutState, rootRef) {
  const route = usePageRoute();
  function checkMaxWidth2() {
    const windowWidth = document.body.clientWidth;
    const pages = getCurrentBasePages();
    let meta = {};
    if (pages.length > 0) {
      const curPage = pages[pages.length - 1];
      meta = getPage$BasePage(curPage).meta;
    } else {
      const routeOptions = getRouteOptions(route.path, true);
      if (routeOptions) {
        meta = routeOptions.meta;
      }
    }
    const maxWidth2 = parseInt(String((hasOwn$1(meta, "maxWidth") ? meta.maxWidth : __uniConfig.globalStyle.maxWidth) || Number.MAX_SAFE_INTEGER));
    let showMaxWidth = false;
    if (windowWidth > maxWidth2) {
      showMaxWidth = true;
    } else {
      showMaxWidth = false;
    }
    if (showMaxWidth && maxWidth2) {
      layoutState.marginWidth = (windowWidth - maxWidth2) / 2;
      nextTick(() => {
        const rootEl = rootRef.value;
        if (rootEl) {
          rootEl.setAttribute("style", "max-width:" + maxWidth2 + "px;margin:0 auto;");
        }
      });
    } else {
      layoutState.marginWidth = 0;
      nextTick(() => {
        const rootEl = rootRef.value;
        if (rootEl) {
          rootEl.removeAttribute("style");
        }
      });
    }
  }
  watch([() => route.path], checkMaxWidth2);
  onMounted(() => {
    checkMaxWidth2();
    window.addEventListener("resize", checkMaxWidth2);
  });
}
function useState() {
  usePageRoute();
  {
    const layoutState2 = reactive({
      marginWidth: 0,
      leftWindowWidth: 0,
      rightWindowWidth: 0
    });
    watch(() => layoutState2.marginWidth, (value) => updateCssVar({
      "--window-margin": value + "px"
    }));
    watch(() => layoutState2.leftWindowWidth + layoutState2.marginWidth, (value) => {
      updateCssVar({
        "--window-left": value + "px"
      });
    });
    watch(() => layoutState2.rightWindowWidth + layoutState2.marginWidth, (value) => {
      updateCssVar({
        "--window-right": value + "px"
      });
    });
    return {
      layoutState: layoutState2,
      windowState: computed(() => ({}))
    };
  }
}
function createLayoutTsx(keepAliveRoute, layoutState, windowState, topWindow, leftWindow, rightWindow) {
  const routerVNode = createRouterViewVNode(keepAliveRoute);
  {
    return routerVNode;
  }
}
function createRouterViewVNode({
  routeKey,
  isTabBar,
  routeCache: routeCache2
}) {
  return createVNode(RouterView, null, {
    default: withCtx(({
      Component
    }) => [(openBlock(), createBlock(KeepAlive, {
      matchBy: "key",
      cache: routeCache2
    }, [(openBlock(), createBlock(resolveDynamicComponent(Component), {
      type: isTabBar.value ? "tabBar" : "",
      key: routeKey.value
    }))], 1032, ["cache"]))]),
    _: 1
    /* STABLE */
  });
}
const _hoisted_1$1 = ["uni-page-head-type"];
const _hoisted_2$1 = { class: "uni-page-head-hd" };
const _hoisted_3$1 = {
  width: "26",
  height: "26",
  viewBox: "0 0 32 32"
};
const _hoisted_4$1 = ["d", "fill"];
const _hoisted_5$1 = ["badge-text", "onClick"];
const _hoisted_6$1 = ["width", "height"];
const _hoisted_7$1 = ["d", "fill"];
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = {
  width: "14",
  height: "14",
  viewBox: "0 0 32 32"
};
const _hoisted_10 = ["d"];
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = {
  key: 0,
  class: "uni-page-head-bd"
};
const _hoisted_13 = {
  key: 0,
  class: "uni-loading"
};
const _hoisted_14 = ["src"];
const _hoisted_15 = { class: "uni-page-head-search-icon" };
const _hoisted_16 = {
  width: "20",
  height: "20",
  viewBox: "0 0 32 32"
};
const _hoisted_17 = ["d", "fill"];
const _hoisted_18 = { class: "uni-page-head-ft" };
const _hoisted_19 = ["badge-text", "onClick"];
const _hoisted_20 = ["width", "height"];
const _hoisted_21 = ["d", "fill"];
const _hoisted_22 = ["innerHTML"];
const _hoisted_23 = {
  width: "14",
  height: "14",
  viewBox: "0 0 32 32"
};
const _hoisted_24 = ["d"];
const _hoisted_25 = ["innerHTML"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    name: "PageHead",
    __reserved: true,
    compatConfig: { MODE: 3 }
  },
  __name: "pageHead",
  setup(__props) {
    const hasPages = true;
    const hasButtons = false;
    const hasSearchInput = false;
    const ICON_PATHS = {
      none: "",
      forward: "M11 7.844q-0.25-0.219-0.25-0.578t0.25-0.578q0.219-0.25 0.563-0.25t0.563 0.25l9.656 9.125q0.125 0.125 0.188 0.297t0.063 0.328q0 0.188-0.063 0.359t-0.188 0.297l-9.656 9.125q-0.219 0.25-0.563 0.25t-0.563-0.25q-0.25-0.219-0.25-0.578t0.25-0.609l9.063-8.594-9.063-8.594z",
      back: ICON_PATH_BACK,
      select: ICON_PATH_BACK,
      share: "M26.563 24.844q0 0.125-0.109 0.234t-0.234 0.109h-17.938q-0.125 0-0.219-0.109t-0.094-0.234v-13.25q0-0.156 0.094-0.25t0.219-0.094h5.5v-1.531h-6q-0.531 0-0.906 0.391t-0.375 0.922v14.375q0 0.531 0.375 0.922t0.906 0.391h18.969q0.531 0 0.891-0.391t0.359-0.953v-5.156h-1.438v4.625zM29.813 10.969l-5.125-5.375-1.031 1.094 3.438 3.594-3.719 0.031q-2.313 0.188-4.344 1.125t-3.578 2.422-2.5 3.453-1.109 4.188l-0.031 0.25h1.469v-0.219q0.156-1.875 1-3.594t2.25-3.063 3.234-2.125 3.828-0.906l0.188-0.031 3.313-0.031-3.438 3.625 1.031 1.063 5.125-5.375-0.031-0.063 0.031-0.063z",
      favorite: "M27.594 13.375q-0.063-0.188-0.219-0.313t-0.344-0.156l-7.094-0.969-3.219-6.406q-0.094-0.188-0.25-0.281t-0.375-0.094q-0.188 0-0.344 0.094t-0.25 0.281l-3.125 6.438-7.094 1.094q-0.188 0.031-0.344 0.156t-0.219 0.313q-0.031 0.188 0.016 0.375t0.172 0.313l5.156 4.969-1.156 7.063q-0.031 0.188 0.047 0.375t0.234 0.313q0.094 0.063 0.188 0.094t0.219 0.031q0.063 0 0.141-0.031t0.172-0.063l6.313-3.375 6.375 3.313q0.063 0.031 0.141 0.047t0.172 0.016q0.188 0 0.344-0.094t0.25-0.281q0.063-0.094 0.078-0.234t-0.016-0.234q0-0.031 0-0.063l-1.25-6.938 5.094-5.031q0.156-0.156 0.203-0.344t-0.016-0.375zM11.469 19.063q0.031-0.188-0.016-0.344t-0.172-0.281l-4.406-4.25 6.063-0.906q0.156-0.031 0.297-0.125t0.203-0.25l2.688-5.531 2.75 5.5q0.063 0.156 0.203 0.25t0.297 0.125l6.094 0.844-4.375 4.281q-0.125 0.125-0.172 0.297t-0.016 0.328l1.063 6.031-5.438-2.813q-0.156-0.094-0.328-0.078t-0.297 0.078l-5.438 2.875 1-6.031z",
      home: "M23.719 16.5q-0.313 0-0.531 0.219t-0.219 0.5v7.063q0 0.219-0.172 0.391t-0.391 0.172h-12.344q-0.25 0-0.422-0.172t-0.172-0.391v-7.063q0-0.281-0.219-0.5t-0.531-0.219q-0.281 0-0.516 0.219t-0.234 0.5v7.063q0.031 0.844 0.625 1.453t1.438 0.609h12.375q0.844 0 1.453-0.609t0.609-1.453v-7.063q0-0.125-0.063-0.266t-0.156-0.234q-0.094-0.125-0.234-0.172t-0.297-0.047zM26.5 14.875l-8.813-8.813q-0.313-0.313-0.688-0.453t-0.781-0.141-0.781 0.141-0.656 0.422l-8.813 8.844q-0.188 0.219-0.188 0.516t0.219 0.484q0.094 0.125 0.234 0.172t0.297 0.047q0.125 0 0.25-0.047t0.25-0.141l8.781-8.781q0.156-0.156 0.406-0.156t0.406 0.156l8.813 8.781q0.219 0.188 0.516 0.188t0.516-0.219q0.188-0.188 0.203-0.484t-0.172-0.516z",
      menu: "M8.938 18.313q0.875 0 1.484-0.609t0.609-1.453-0.609-1.453-1.484-0.609q-0.844 0-1.453 0.609t-0.609 1.453 0.609 1.453 1.453 0.609zM16.188 18.313q0.875 0 1.484-0.609t0.609-1.453-0.609-1.453-1.484-0.609q-0.844 0-1.453 0.609t-0.609 1.453 0.609 1.453 1.453 0.609zM23.469 18.313q0.844 0 1.453-0.609t0.609-1.453-0.609-1.453-1.453-0.609q-0.875 0-1.484 0.609t-0.609 1.453 0.609 1.453 1.484 0.609z",
      close: ICON_PATH_CLOSE
    };
    const headRef = ref(null);
    const pageMeta = usePageMeta();
    const navigationBar = useTheme(pageMeta.navigationBar, () => {
      const _navigationBar = parseTheme(pageMeta.navigationBar);
      navigationBar.backgroundColor = _navigationBar.backgroundColor;
      navigationBar.titleColor = _navigationBar.titleColor;
    });
    const { clazz, style } = usePageHead(navigationBar);
    const buttons = hasButtons;
    const searchInput = hasSearchInput;
    const searchFocus = searchInput;
    const searchText = searchInput;
    const searchComposing = searchInput;
    const searchOnClick = searchInput;
    const searchOnFocus = searchInput;
    const searchOnBlur = searchInput;
    const searchOnInput = searchInput;
    const searchOnConfirm = searchInput;
    function getSvgSize(size2) {
      return size2 == null ? 27 : size2;
    }
    function getSvgColor(color) {
      return color == null ? "#000" : color;
    }
    function onPageHeadBackButton() {
      if (getCurrentPages$1().length === 1) {
        reLaunch({
          url: "/"
        });
      } else {
        navigateBack({
          from: "backbutton",
          success() {
          }
          // 传入空方法，避免返回Promise，因为onBackPress可能导致fail
        });
      }
    }
    function usePageHead(navigationBar2) {
      const clazz2 = computed(() => {
        const { type, titlePenetrate, shadowColorType } = navigationBar2;
        const clazz3 = {
          "uni-page-head": true,
          "uni-page-head-transparent": type === "transparent",
          "uni-page-head-titlePenetrate": titlePenetrate === "YES",
          "uni-page-head-shadow": !!shadowColorType
        };
        if (shadowColorType) {
          clazz3[`uni-page-head-shadow-${shadowColorType}`] = true;
        }
        return clazz3;
      });
      const style2 = computed(() => {
        const backgroundColor = navigationBar2.backgroundColor;
        return {
          backgroundColor,
          color: navigationBar2.titleColor,
          transitionDuration: navigationBar2.duration,
          transitionTimingFunction: navigationBar2.timingFunc
        };
      });
      return { clazz: clazz2, style: style2 };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("uni-page-head", {
        "uni-page-head-type": unref(navigationBar).type || "default"
      }, [
        createBaseVNode("div", {
          ref_key: "headRef",
          ref: headRef,
          class: normalizeClass(unref(clazz)),
          style: normalizeStyle(unref(style))
        }, [
          createBaseVNode("div", _hoisted_2$1, [
            unref(hasPages) && !unref(pageMeta).isQuit ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "uni-page-head-btn",
              onClick: onPageHeadBackButton
            }, [
              (openBlock(), createElementBlock("svg", _hoisted_3$1, [
                createBaseVNode("path", {
                  d: unref(ICON_PATH_BACK),
                  fill: unref(navigationBar).type === "transparent" ? "#fff" : unref(navigationBar).titleColor
                }, null, 8, _hoisted_4$1)
              ]))
            ])) : createCommentVNode("", true),
            unref(hasButtons) && unref(buttons) ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(buttons).left, (button, index2) => {
              return openBlock(), createElementBlock("div", {
                key: index2,
                class: normalizeClass(button.btnClass),
                style: normalizeStyle(button.btnStyle),
                "badge-text": button.badgeText,
                onClick: button.onClick
              }, [
                button.btnIconPath ? (openBlock(), createElementBlock("svg", {
                  key: 0,
                  width: getSvgSize(button.iconStyle.fontSize),
                  height: getSvgSize(button.iconStyle.fontSize),
                  viewBox: "0 0 32 32"
                }, [
                  createBaseVNode("path", {
                    d: button.btnIconPath,
                    fill: getSvgColor(button.iconStyle.color)
                  }, null, 8, _hoisted_7$1)
                ], 8, _hoisted_6$1)) : button.btnSelect ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  style: normalizeStyle(button.iconStyle)
                }, [
                  createBaseVNode("i", {
                    class: "uni-btn-icon",
                    innerHTML: button.btnText
                  }, null, 8, _hoisted_8),
                  (openBlock(), createElementBlock("svg", _hoisted_9, [
                    createBaseVNode("path", {
                      d: ICON_PATHS.select,
                      fill: "#000"
                    }, null, 8, _hoisted_10)
                  ]))
                ], 4)) : (openBlock(), createElementBlock("i", {
                  key: 2,
                  class: "uni-btn-icon",
                  style: normalizeStyle(button.iconStyle),
                  innerHTML: button.btnText
                }, null, 12, _hoisted_11))
              ], 14, _hoisted_5$1);
            }), 128)) : createCommentVNode("", true)
          ]),
          !unref(hasSearchInput) || !unref(navigationBar).searchInput ? (openBlock(), createElementBlock("div", _hoisted_12, [
            createBaseVNode("div", {
              class: "uni-page-head__title",
              style: normalizeStyle({
                fontSize: unref(navigationBar).titleSize,
                opacity: unref(navigationBar).type === "transparent" ? 0 : 1
              })
            }, [
              unref(navigationBar).loading ? (openBlock(), createElementBlock("i", _hoisted_13)) : unref(navigationBar).titleImage ? (openBlock(), createElementBlock("img", {
                key: 1,
                src: unref(navigationBar).titleImage,
                class: "uni-page-head__title_image"
              }, null, 8, _hoisted_14)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                createTextVNode(toDisplayString(unref(navigationBar).titleText), 1)
              ], 64))
            ], 4)
          ])) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: "uni-page-head-search",
            style: normalizeStyle({
              borderRadius: unref(navigationBar).searchInput.borderRadius,
              backgroundColor: unref(navigationBar).searchInput.backgroundColor
            })
          }, [
            createBaseVNode("div", {
              style: normalizeStyle({ color: unref(navigationBar).searchInput.placeholderColor }),
              class: normalizeClass([
                "uni-page-head-search-placeholder",
                `uni-page-head-search-placeholder-${unref(searchFocus) || unref(searchText) ? "left" : unref(navigationBar).searchInput.align}`
              ])
            }, [
              createBaseVNode("div", _hoisted_15, [
                (openBlock(), createElementBlock("svg", _hoisted_16, [
                  createBaseVNode("path", {
                    d: unref(ICON_PATH_SEARCH),
                    fill: unref(navigationBar).searchInput.placeholderColor
                  }, null, 8, _hoisted_17)
                ]))
              ]),
              !(unref(searchText) || unref(searchComposing)) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(unref(navigationBar).searchInput.placeholder), 1)
              ], 64)) : createCommentVNode("", true)
            ], 6),
            unref(navigationBar).searchInput.disabled ? (openBlock(), createBlock(unref(Input), {
              key: 0,
              disabled: true,
              style: normalizeStyle({ color: unref(navigationBar).searchInput.color }),
              "placeholder-style": "color: " + unref(navigationBar).searchInput.placeholderColor,
              class: "uni-page-head-search-input",
              "confirm-type": "search",
              onClick: _cache[0] || (_cache[0] = ($event) => unref(searchOnClick) && unref(searchOnClick)($event))
            }, null, 8, ["style", "placeholder-style"])) : (openBlock(), createBlock(unref(Input), {
              key: 1,
              focus: unref(navigationBar).searchInput.autoFocus,
              style: normalizeStyle({ color: unref(navigationBar).searchInput.color }),
              "placeholder-style": "color: " + unref(navigationBar).searchInput.placeholderColor,
              class: "uni-page-head-search-input",
              "confirm-type": "search",
              onFocus: _cache[1] || (_cache[1] = ($event) => unref(searchOnFocus) && unref(searchOnFocus)($event)),
              onBlur: _cache[2] || (_cache[2] = ($event) => unref(searchOnBlur) && unref(searchOnBlur)($event)),
              onInput: _cache[3] || (_cache[3] = ($event) => unref(searchOnInput) && unref(searchOnInput)($event)),
              onConfirm: _cache[4] || (_cache[4] = ($event) => unref(searchOnConfirm) && unref(searchOnConfirm)($event))
            }, null, 8, ["focus", "style", "placeholder-style"]))
          ], 4)),
          createBaseVNode("div", _hoisted_18, [
            unref(hasButtons) && unref(buttons) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(buttons).right, (button, index2) => {
              return openBlock(), createElementBlock("div", {
                key: index2,
                class: normalizeClass(button.btnClass),
                style: normalizeStyle(button.btnStyle),
                "badge-text": button.badgeText,
                onClick: button.onClick
              }, [
                button.btnIconPath ? (openBlock(), createElementBlock("svg", {
                  key: 0,
                  width: getSvgSize(button.iconStyle.fontSize),
                  height: getSvgSize(button.iconStyle.fontSize),
                  viewBox: "0 0 32 32"
                }, [
                  createBaseVNode("path", {
                    d: button.btnIconPath,
                    fill: getSvgColor(button.iconStyle.color)
                  }, null, 8, _hoisted_21)
                ], 8, _hoisted_20)) : button.btnSelect ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  style: normalizeStyle(button.iconStyle)
                }, [
                  createBaseVNode("i", {
                    class: "uni-btn-icon",
                    innerHTML: button.btnText
                  }, null, 8, _hoisted_22),
                  (openBlock(), createElementBlock("svg", _hoisted_23, [
                    createBaseVNode("path", {
                      d: ICON_PATHS.select,
                      fill: "#000"
                    }, null, 8, _hoisted_24)
                  ]))
                ], 4)) : (openBlock(), createElementBlock("i", {
                  key: 2,
                  class: "uni-btn-icon",
                  style: normalizeStyle(button.iconStyle),
                  innerHTML: button.btnText
                }, null, 12, _hoisted_25))
              ], 14, _hoisted_19);
            }), 128)) : createCommentVNode("", true)
          ])
        ], 6),
        unref(navigationBar).type !== "transparent" && unref(navigationBar).type !== "float" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass({
            "uni-placeholder": true,
            "uni-placeholder-titlePenetrate": unref(navigationBar).titlePenetrate
          })
        }, null, 2)) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const _hoisted_1 = { class: "uni-page-refresh-inner" };
const _hoisted_2 = ["fill"];
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" }, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];
const _hoisted_6 = {
  class: "uni-page-refresh__spinner",
  width: "24",
  height: "24",
  viewBox: "25 25 50 50"
};
const _hoisted_7 = ["stroke"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ name: "PageRefresh" },
  __name: "component",
  setup(__props) {
    const { pullToRefresh } = usePageMeta();
    const offset = pullToRefresh.offset;
    const color = pullToRefresh.color;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("uni-page-refresh", null, [
        createBaseVNode("div", {
          style: normalizeStyle({ "margin-top": unref(offset) + "px" }),
          class: "uni-page-refresh"
        }, [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(), createElementBlock("svg", {
              fill: unref(color),
              class: "uni-page-refresh__icon",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, _hoisted_5, 8, _hoisted_2)),
            (openBlock(), createElementBlock("svg", _hoisted_6, [
              createBaseVNode("circle", {
                stroke: unref(color),
                class: "uni-page-refresh__path",
                cx: "50",
                cy: "50",
                r: "20",
                fill: "none",
                "stroke-width": "4",
                "stroke-miterlimit": "10"
              }, null, 8, _hoisted_7)
            ]))
          ])
        ], 4)
      ]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    name: "PageBody",
    __reserved: true,
    compatConfig: { MODE: 3 }
  },
  __name: "pageBody",
  setup(__props) {
    const isX = false;
    const hasPullDownRefresh = false;
    const pageMeta = null;
    const refreshRef = ref(null);
    const wrapperRef = ref(null);
    const pageRefresh = ref(null);
    watch(
      () => void 0,
      () => {
        pageRefresh.value = null;
      },
      {
        immediate: true
      }
    );
    function resize() {
      {
        return;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        unref(hasPullDownRefresh) && !!unref(pageMeta) && (unref(isX) || !!unref(pageMeta).enablePullDownRefresh) ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          ref_key: "refreshRef",
          ref: refreshRef
        }, null, 512)) : createCommentVNode("", true),
        createBaseVNode("uni-page-wrapper", mergeProps({
          ref_key: "wrapperRef",
          ref: wrapperRef
        }, pageRefresh.value), [
          createBaseVNode("uni-page-body", null, [
            renderSlot(_ctx.$slots, "default")
          ]),
          unref(isX) ? (openBlock(), createBlock(unref(ResizeSensor), {
            key: 0,
            onResize: resize
          })) : createCommentVNode("", true)
        ], 16)
      ], 64);
    };
  }
});
const index = /* @__PURE__ */ defineSystemComponent({
  name: "Page",
  setup(_props, ctx) {
    let pageMeta = providePageMeta(getStateId());
    const navigationBar = pageMeta.navigationBar;
    const pageStyle = {};
    useDocumentTitle(pageMeta);
    return () => createVNode(
      "uni-page",
      {
        "data-page": pageMeta.route,
        style: pageStyle
      },
      navigationBar.style !== "custom" ? [
        createVNode(_sfc_main$2),
        createPageBodyVNode(ctx),
        null
      ] : [
        createPageBodyVNode(ctx),
        null
      ]
    );
  }
});
function createPageBodyVNode(ctx) {
  return openBlock(), createBlock(
    _sfc_main$3,
    { key: 0 },
    {
      default: withCtx(() => [renderSlot(ctx.slots, "page")]),
      _: 3
    }
  );
}
const appId = "__UNI__BANLAN_DEMO";
const appName = "班兰云店铺前端重建";
const appVersion = "0.1.0";
const appVersionCode = "100";
const debug = false;
const nvue = { "flex-direction": "column" };
const networkTimeout = { "request": 6e4, "connectSocket": 6e4, "uploadFile": 6e4, "downloadFile": 6e4 };
const router = { "mode": "hash", "base": "./", "assets": "assets", "routerBase": "/" };
const async = { "loading": "AsyncLoading", "error": "AsyncError", "delay": 200, "timeout": 6e4, "suspensible": true };
const qqMapKey = void 0;
const bMapKey = void 0;
const googleMapKey = void 0;
const aMapKey = void 0;
const aMapSecurityJsCode = void 0;
const aMapServiceHost = void 0;
const sdkConfigs = {};
const locale = "";
const fallbackLocale = "";
const darkmode = false;
const themeConfig = {};
window.uni = {};
window.wx = {};
window.rpx2px = upx2px;
const locales = /* @__PURE__ */ Object.assign({});
const extend = Object.assign;
window.__uniConfig = extend({ "globalStyle": { "backgroundColor": "#f4f4f2", "navigationBar": { "backgroundColor": "#ffffff", "titleText": "班兰云店铺", "type": "default", "titleColor": "#000000" }, "isNVue": false }, "compilerVersion": "5.34" }, {
  appId,
  appName,
  appVersion,
  appVersionCode,
  async,
  debug,
  networkTimeout,
  sdkConfigs,
  qqMapKey,
  bMapKey,
  googleMapKey,
  aMapKey,
  aMapSecurityJsCode,
  aMapServiceHost,
  nvue,
  locale,
  fallbackLocale,
  locales: Object.keys(locales).reduce((res, name) => {
    const locale2 = name.replace(/\.\/locale\/(uni-app.)?(.*).json/, "$2");
    extend(res[locale2] || (res[locale2] = {}), locales[name].default);
    return res;
  }, {}),
  router,
  darkmode,
  themeConfig
});
window.__uniLayout = window.__uniLayout || {};
const AsyncComponentOptions = {
  delay: async.delay,
  timeout: async.timeout,
  suspensible: async.suspensible
};
if (async.loading) {
  AsyncComponentOptions.loadingComponent = {
    name: "SystemAsyncLoading",
    render() {
      return createVNode(resolveComponent(async.loading));
    }
  };
}
if (async.error) {
  AsyncComponentOptions.errorComponent = {
    name: "SystemAsyncError",
    props: ["error"],
    render() {
      return createVNode(resolveComponent(async.error), { error: this.error });
    }
  };
}
const PagesIndexIndexLoader = () => __vitePreload(() => import("./pages-index-index.DWLT9ySy.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesIndexIndex = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesIndexIndexLoader }, AsyncComponentOptions));
const PagesLogsLogsLoader = () => __vitePreload(() => import("./pages-logs-logs.UrAKNc4F.js"), true ? __vite__mapDeps([11,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesLogsLogs = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesLogsLogsLoader }, AsyncComponentOptions));
const PagesMineMineMineLoader = () => __vitePreload(() => import("./pages-mine-mine-mine.3kyGio7l.js"), true ? __vite__mapDeps([14,2,3,4,8,15]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesMineMineMine = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesMineMineMineLoader }, AsyncComponentOptions));
const PagesMineCardCardLoader = () => __vitePreload(() => import("./pages-mine-card-card.DCcgIfSh.js"), true ? __vite__mapDeps([16,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesMineCardCard = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesMineCardCardLoader }, AsyncComponentOptions));
const PagesFansFansFansLoader = () => __vitePreload(() => import("./pages-fans-fans-fans.BGPG2hPj.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,18,7,8,9,19]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesFansFansFans = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesFansFansFansLoader }, AsyncComponentOptions));
const PagesFansShowDetailShowDetailLoader = () => __vitePreload(() => import("./pages-fans-showDetail-showDetail.BqMopME3.js"), true ? __vite__mapDeps([20,21,1,18,9,3,22]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesFansShowDetailShowDetail = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesFansShowDetailShowDetailLoader }, AsyncComponentOptions));
const PagesFansFansDetailFansDetailLoader = () => __vitePreload(() => import("./pages-fans-fansDetail-fansDetail.BymcUGWe.js"), true ? __vite__mapDeps([23,21,1,18,9,3,22]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesFansFansDetailFansDetail = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesFansFansDetailFansDetailLoader }, AsyncComponentOptions));
const PagesFansDiaryDetailDiaryDetailLoader = () => __vitePreload(() => import("./pages-fans-diaryDetail-diaryDetail.DON0s1Ur.js"), true ? __vite__mapDeps([24,21,1,18,9,3,22]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesFansDiaryDetailDiaryDetail = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesFansDiaryDetailDiaryDetailLoader }, AsyncComponentOptions));
const PagesFansNewsDetailNewsDetailLoader = () => __vitePreload(() => import("./pages-fans-newsDetail-newsDetail.AFUZ31S4.js"), true ? __vite__mapDeps([25,21,1,18,9,3,22]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesFansNewsDetailNewsDetail = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesFansNewsDetailNewsDetailLoader }, AsyncComponentOptions));
const PagesIndexPreviewIndexPreviewLoader = () => __vitePreload(() => import("./pages-indexPreview-indexPreview.Bhakii4S.js"), true ? __vite__mapDeps([26,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesIndexPreviewIndexPreview = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesIndexPreviewIndexPreviewLoader }, AsyncComponentOptions));
const PagesCategoryCategoryLoader = () => __vitePreload(() => import("./pages-category-category.BrZi2Maz.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,28,8,9,29]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesCategoryCategory = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesCategoryCategoryLoader }, AsyncComponentOptions));
const PagesProductListListLoader = () => __vitePreload(() => import("./pages-product-list-list.zSO1PBQI.js"), true ? __vite__mapDeps([30,1,2,3,4,7,28,31,9,8,32]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesProductListList = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesProductListListLoader }, AsyncComponentOptions));
const PagesProductDetailDetailLoader = () => __vitePreload(() => import("./pages-product-detail-detail.CegNaizJ.js"), true ? __vite__mapDeps([33,1,7,31,9,34,3,35]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesProductDetailDetail = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesProductDetailDetailLoader }, AsyncComponentOptions));
const PagesProductCartCartLoader = () => __vitePreload(() => import("./pages-product-cart-cart.BCx_-qtd.js"), true ? __vite__mapDeps([36,1,7,34,3,37]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesProductCartCart = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesProductCartCartLoader }, AsyncComponentOptions));
const PagesOrderOrderConfirmOrderConfirmLoader = () => __vitePreload(() => import("./pages-order-orderConfirm-orderConfirm.DqcQ7PlN.js"), true ? __vite__mapDeps([38,1,39,3,40,34,41]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesOrderOrderConfirmOrderConfirm = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesOrderOrderConfirmOrderConfirmLoader }, AsyncComponentOptions));
const PagesLoginLoginLoader = () => __vitePreload(() => import("./pages-login-login.CAn4kFVy.js"), true ? __vite__mapDeps([42,3,43]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesLoginLogin = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesLoginLoginLoader }, AsyncComponentOptions));
const PagesMineMembershipSystemMembershipSystemLoader = () => __vitePreload(() => import("./pages-mine-membershipSystem-membershipSystem.B9ZAHowt.js"), true ? __vite__mapDeps([44,9,3,45]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesMineMembershipSystemMembershipSystem = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesMineMembershipSystemMembershipSystemLoader }, AsyncComponentOptions));
const PagesOrderDetailDetailLoader = () => __vitePreload(() => import("./pages-order-detail-detail.-rw8tRY8.js"), true ? __vite__mapDeps([46,1,39,3,40,47]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesOrderDetailDetail = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesOrderDetailDetailLoader }, AsyncComponentOptions));
const PagesOrderShowOrderShowOrderLoader = () => __vitePreload(() => import("./pages-order-showOrder-showOrder.DNny1m-r.js"), true ? __vite__mapDeps([48,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesOrderShowOrderShowOrder = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesOrderShowOrderShowOrderLoader }, AsyncComponentOptions));
const PagesOrderShowDetailShowDetaillLoader = () => __vitePreload(() => import("./pages-order-showDetail-showDetaill.DD6Ra3st.js"), true ? __vite__mapDeps([49,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesOrderShowDetailShowDetaill = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesOrderShowDetailShowDetaillLoader }, AsyncComponentOptions));
const PagesMineMessageMessageLoader = () => __vitePreload(() => import("./pages-mine-message-message.DeO0Y2-_.js"), true ? __vite__mapDeps([50,3,51]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesMineMessageMessage = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesMineMessageMessageLoader }, AsyncComponentOptions));
const PagesMineProfileProfileLoader = () => __vitePreload(() => import("./pages-mine-profile-profile.C3kshSYE.js"), true ? __vite__mapDeps([52,3,53]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesMineProfileProfile = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesMineProfileProfileLoader }, AsyncComponentOptions));
const PagesMineCollectionCollectionLoader = () => __vitePreload(() => import("./pages-mine-collection-collection.D950mFvS.js"), true ? __vite__mapDeps([54,3,55]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesMineCollectionCollection = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesMineCollectionCollectionLoader }, AsyncComponentOptions));
const PagesMineIntergralIntergralLoader = () => __vitePreload(() => import("./pages-mine-intergral-intergral.BPHds-TQ.js"), true ? __vite__mapDeps([56,1,3,57]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesMineIntergralIntergral = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesMineIntergralIntergralLoader }, AsyncComponentOptions));
const PagesMineCouponCouponLoader = () => __vitePreload(() => import("./pages-mine-coupon-coupon.EhZPOgOj.js"), true ? __vite__mapDeps([58,1,39,3,40,59]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesMineCouponCoupon = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesMineCouponCouponLoader }, AsyncComponentOptions));
const InviteInviteLoader = () => __vitePreload(() => import("./invite-invite.CeC4uKru.js"), true ? __vite__mapDeps([60,3,61]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const InviteInvite = /* @__PURE__ */ defineAsyncComponent(extend({ loader: InviteInviteLoader }, AsyncComponentOptions));
const PagesOrderMyOrderMyOrderLoader = () => __vitePreload(() => import("./pages-order-myOrder-myOrder.CMifZOhc.js"), true ? __vite__mapDeps([62,1,39,3,40,63]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesOrderMyOrderMyOrder = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesOrderMyOrderMyOrderLoader }, AsyncComponentOptions));
const PagesOrderMyShowMyShowLoader = () => __vitePreload(() => import("./pages-order-myShow-myShow.CU26D1oa.js"), true ? __vite__mapDeps([64,3,65]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesOrderMyShowMyShow = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesOrderMyShowMyShowLoader }, AsyncComponentOptions));
const PagesAntifakeIndexIndexLoader = () => __vitePreload(() => import("./pages-antifake-index-index.CES7dTF5.js"), true ? __vite__mapDeps([66,1,3,67]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesAntifakeIndexIndex = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesAntifakeIndexIndexLoader }, AsyncComponentOptions));
const PagesCustomPageCustomPageLoader = () => __vitePreload(() => import("./pages-customPage-customPage.Bxt5dJ4E.js"), true ? __vite__mapDeps([68,1,39,3,40,69,9,70]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesCustomPageCustomPage = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesCustomPageCustomPageLoader }, AsyncComponentOptions));
const PagesStoreDetailDetailLoader = () => __vitePreload(() => import("./pages-store-detail-detail.Bu5LAOuz.js"), true ? __vite__mapDeps([71,1,39,3,40,69,9,72]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesStoreDetailDetail = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesStoreDetailDetailLoader }, AsyncComponentOptions));
const PagesStoreListListLoader = () => __vitePreload(() => import("./pages-store-list-list.nQM2mTy2.js"), true ? __vite__mapDeps([73,39,3,40,2,4,7,69,9,74]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesStoreListList = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesStoreListListLoader }, AsyncComponentOptions));
const PagesStoreInitListInitListLoader = () => __vitePreload(() => import("./pages-store-initList-initList.BhIV7Nb4.js"), true ? __vite__mapDeps([75,39,3,40,69,9,76]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesStoreInitListInitList = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesStoreInitListInitListLoader }, AsyncComponentOptions));
const PagesImChatChatLoader = () => __vitePreload(() => import("./pages-im-chat-chat.C7de84op.js"), true ? __vite__mapDeps([77,3,78]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesImChatChat = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesImChatChatLoader }, AsyncComponentOptions));
const PagesImListListLoader = () => __vitePreload(() => import("./pages-im-list-list.DCotLTAM.js"), true ? __vite__mapDeps([79,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesImListList = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesImListListLoader }, AsyncComponentOptions));
const PagesImQrQrLoader = () => __vitePreload(() => import("./pages-im-qr-qr.CJbBB44C.js"), true ? __vite__mapDeps([80,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesImQrQr = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesImQrQrLoader }, AsyncComponentOptions));
const PagesMineMyShowMyShowLoader = () => __vitePreload(() => import("./pages-mine-myShow-myShow.CNshR2Zm.js"), true ? __vite__mapDeps([81,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesMineMyShowMyShow = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesMineMyShowMyShowLoader }, AsyncComponentOptions));
const PagesAvatarAvatarLoader = () => __vitePreload(() => import("./pages-avatar-avatar.D3cA9XC-.js"), true ? __vite__mapDeps([82,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesAvatarAvatar = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesAvatarAvatarLoader }, AsyncComponentOptions));
const PagesAntifakeResultResultLoader = () => __vitePreload(() => import("./pages-antifake-result-result.C_t87qXY.js"), true ? __vite__mapDeps([83,1,3,84]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesAntifakeResultResult = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesAntifakeResultResultLoader }, AsyncComponentOptions));
const PagesMineKocKocLoader = () => __vitePreload(() => import("./pages-mine-koc-koc.CPv7T6bP.js"), true ? __vite__mapDeps([85,3,86]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesMineKocKoc = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesMineKocKocLoader }, AsyncComponentOptions));
const PagesAddressListListLoader = () => __vitePreload(() => import("./pages-address-list-list.aByg--JA.js"), true ? __vite__mapDeps([87,1,39,3,40,88]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesAddressListList = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesAddressListListLoader }, AsyncComponentOptions));
const PagesAddressAddAddLoader = () => __vitePreload(() => import("./pages-address-add-add.DLeKKUI1.js"), true ? __vite__mapDeps([89,39,3,40,90]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const PagesAddressAddAdd = /* @__PURE__ */ defineAsyncComponent(extend({ loader: PagesAddressAddAddLoader }, AsyncComponentOptions));
const InviteDetailDetailLoader = () => __vitePreload(() => import("./invite-detail-detail.CpOoGb-I.js"), true ? __vite__mapDeps([91,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const InviteDetailDetail = /* @__PURE__ */ defineAsyncComponent(extend({ loader: InviteDetailDetailLoader }, AsyncComponentOptions));
const InviteVoucherVoucherLoader = () => __vitePreload(() => import("./invite-voucher-voucher.BM9JmiQa.js"), true ? __vite__mapDeps([92,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const InviteVoucherVoucher = /* @__PURE__ */ defineAsyncComponent(extend({ loader: InviteVoucherVoucherLoader }, AsyncComponentOptions));
const InviteReviewReviewLoader = () => __vitePreload(() => import("./invite-review-review.ghP4usVL.js"), true ? __vite__mapDeps([93,12,3,13]) : void 0, import.meta.url).then((com) => setupPage(com.default || com));
const InviteReviewReview = /* @__PURE__ */ defineAsyncComponent(extend({ loader: InviteReviewReviewLoader }, AsyncComponentOptions));
function renderPage(component, props) {
  return openBlock(), createBlock(index, null, {
    page: withCtx(() => [createVNode(
      component,
      extend({}, props, { ref: "page" }),
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  });
}
window.__uniRoutes = [{
  path: "/",
  alias: "/pages/index/index",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesIndexIndex, query);
  } },
  loader: PagesIndexIndexLoader,
  meta: { "isQuit": true, "isEntry": true, "enablePullDownRefresh": false, "backgroundColor": "#f4f4f2", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/logs/logs",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesLogsLogs, query);
  } },
  loader: PagesLogsLogsLoader,
  meta: { "navigationBar": { "titleText": "查看启动日志", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/mine/mine/mine",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesMineMineMine, query);
  } },
  loader: PagesMineMineMineLoader,
  meta: { "enablePullDownRefresh": false, "backgroundColor": "#f6f6f6", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/mine/card/card",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesMineCardCard, query);
  } },
  loader: PagesMineCardCardLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/fans/fans/fans",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesFansFansFans, query);
  } },
  loader: PagesFansFansFansLoader,
  meta: { "backgroundColor": "#ffffff", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/fans/showDetail/showDetail",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesFansShowDetailShowDetail, query);
  } },
  loader: PagesFansShowDetailShowDetailLoader,
  meta: { "backgroundColor": "#ffffff", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/fans/fansDetail/fansDetail",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesFansFansDetailFansDetail, query);
  } },
  loader: PagesFansFansDetailFansDetailLoader,
  meta: { "backgroundColor": "#ffffff", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/fans/diaryDetail/diaryDetail",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesFansDiaryDetailDiaryDetail, query);
  } },
  loader: PagesFansDiaryDetailDiaryDetailLoader,
  meta: { "backgroundColor": "#ffffff", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/fans/newsDetail/newsDetail",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesFansNewsDetailNewsDetail, query);
  } },
  loader: PagesFansNewsDetailNewsDetailLoader,
  meta: { "backgroundColor": "#ffffff", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/indexPreview/indexPreview",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesIndexPreviewIndexPreview, query);
  } },
  loader: PagesIndexPreviewIndexPreviewLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/category/category",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesCategoryCategory, query);
  } },
  loader: PagesCategoryCategoryLoader,
  meta: { "backgroundColor": "#f4f4f2", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/product/list/list",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesProductListList, query);
  } },
  loader: PagesProductListListLoader,
  meta: { "backgroundColor": "#ffffff", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/product/detail/detail",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesProductDetailDetail, query);
  } },
  loader: PagesProductDetailDetailLoader,
  meta: { "backgroundColor": "#f5f4f1", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/product/cart/cart",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesProductCartCart, query);
  } },
  loader: PagesProductCartCartLoader,
  meta: { "backgroundColor": "#f6f6f6", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/order/orderConfirm/orderConfirm",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesOrderOrderConfirmOrderConfirm, query);
  } },
  loader: PagesOrderOrderConfirmOrderConfirmLoader,
  meta: { "backgroundColor": "#f6f6f6", "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/login/login",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesLoginLogin, query);
  } },
  loader: PagesLoginLoginLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/mine/membershipSystem/membershipSystem",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesMineMembershipSystemMembershipSystem, query);
  } },
  loader: PagesMineMembershipSystemMembershipSystemLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/order/detail/detail",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesOrderDetailDetail, query);
  } },
  loader: PagesOrderDetailDetailLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/order/showOrder/showOrder",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesOrderShowOrderShowOrder, query);
  } },
  loader: PagesOrderShowOrderShowOrderLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/order/showDetail/showDetaill",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesOrderShowDetailShowDetaill, query);
  } },
  loader: PagesOrderShowDetailShowDetaillLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/mine/message/message",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesMineMessageMessage, query);
  } },
  loader: PagesMineMessageMessageLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/mine/profile/profile",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesMineProfileProfile, query);
  } },
  loader: PagesMineProfileProfileLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/mine/collection/collection",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesMineCollectionCollection, query);
  } },
  loader: PagesMineCollectionCollectionLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/mine/intergral/intergral",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesMineIntergralIntergral, query);
  } },
  loader: PagesMineIntergralIntergralLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/mine/coupon/coupon",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesMineCouponCoupon, query);
  } },
  loader: PagesMineCouponCouponLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/invite/invite",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(InviteInvite, query);
  } },
  loader: InviteInviteLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/order/myOrder/myOrder",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesOrderMyOrderMyOrder, query);
  } },
  loader: PagesOrderMyOrderMyOrderLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/order/myShow/myShow",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesOrderMyShowMyShow, query);
  } },
  loader: PagesOrderMyShowMyShowLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/antifake/index/index",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesAntifakeIndexIndex, query);
  } },
  loader: PagesAntifakeIndexIndexLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/customPage/customPage",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesCustomPageCustomPage, query);
  } },
  loader: PagesCustomPageCustomPageLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/store/detail/detail",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesStoreDetailDetail, query);
  } },
  loader: PagesStoreDetailDetailLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/store/list/list",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesStoreListList, query);
  } },
  loader: PagesStoreListListLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/store/initList/initList",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesStoreInitListInitList, query);
  } },
  loader: PagesStoreInitListInitListLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/im/chat/chat",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesImChatChat, query);
  } },
  loader: PagesImChatChatLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/im/list/list",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesImListList, query);
  } },
  loader: PagesImListListLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/im/qr/qr",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesImQrQr, query);
  } },
  loader: PagesImQrQrLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/mine/myShow/myShow",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesMineMyShowMyShow, query);
  } },
  loader: PagesMineMyShowMyShowLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/avatar/avatar",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesAvatarAvatar, query);
  } },
  loader: PagesAvatarAvatarLoader,
  meta: { "navigationBar": { "titleText": "授权", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/antifake/result/result",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesAntifakeResultResult, query);
  } },
  loader: PagesAntifakeResultResultLoader,
  meta: { "backgroundColor": "#ffffff", "navigationBar": { "titleText": "验证结果", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/mine/koc/koc",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesMineKocKoc, query);
  } },
  loader: PagesMineKocKocLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/address/list/list",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesAddressListList, query);
  } },
  loader: PagesAddressListListLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/pages/address/add/add",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(PagesAddressAddAdd, query);
  } },
  loader: PagesAddressAddAddLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/invite/detail/detail",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(InviteDetailDetail, query);
  } },
  loader: InviteDetailDetailLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/invite/voucher/voucher",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(InviteVoucherVoucher, query);
  } },
  loader: InviteVoucherVoucherLoader,
  meta: { "navigationBar": { "style": "custom", "type": "default" }, "isNVue": false }
}, {
  path: "/invite/review/review",
  component: { setup() {
    const app = getApp$1();
    const query = app && app.$route && app.$route.query || {};
    return () => renderPage(InviteReviewReview, query);
  } },
  loader: InviteReviewReviewLoader,
  meta: { "backgroundColor": "#fafaf8", "navigationBar": { "titleText": "往期回顾", "type": "default" }, "isNVue": false }
}].map((uniRoute) => (uniRoute.meta.route = (uniRoute.alias || uniRoute.path).slice(1), uniRoute));
const _sfc_main = {
  onLaunch() {
    console.info("Banlan homepage preview launched");
  }
};
setupApp(_sfc_main);
function createApp() {
  const app = createApp$1(_sfc_main);
  return { app };
}
createApp().app.use(index$e).mount("#app");
export {
  navigateBack as A,
  reactive as B,
  index$x as C,
  previewImage as D,
  index$d as E,
  Fragment as F,
  setStorageSync as G,
  makePhoneCall as H,
  Input as I,
  isInSSRComponentSetup as J,
  injectHook as K,
  getCurrentInstance as L,
  ON_LOAD as M,
  ON_UNLOAD as N,
  ON_SHOW as O,
  getCurrentPages$1 as P,
  chooseImage as Q,
  Swiper as S,
  createVNode as a,
  withModifiers as b,
  createBlock as c,
  index$g as d,
  createTextVNode as e,
  index$i as f,
  getStorageSync as g,
  createElementBlock as h,
  index$q as i,
  renderList as j,
  createBaseVNode as k,
  createCommentVNode as l,
  reLaunch as m,
  navigateTo as n,
  openBlock as o,
  pageScrollTo as p,
  ScrollView as q,
  ref as r,
  showToast as s,
  toDisplayString as t,
  unref as u,
  normalizeClass as v,
  withCtx as w,
  normalizeStyle as x,
  SwiperItem as y,
  computed as z
};
