import P1 from "./imgpack1.js";
import P2 from "./imgpack2.js";
import IX from "./imgindex.js";
import OV from "./storeimg.js";
const PK=P1.concat(P2);
const BANLAN_OSS_HOST = "mp-banlan-product.oss-cn-shenzhen.aliyuncs.com";
const LOCAL_HOSTS = /* @__PURE__ */ new Set(["127.0.0.1", "localhost"]);
function resolveRuntimeAsset(source, runtimeLocation = globalThis.location) {
  if (typeof source !== "string" || !source)
    return source;
  if (OV[source] !== void 0)
    return OV[source];
  if (IX[source] !== void 0)
    return PK[IX[source]];
  if (!LOCAL_HOSTS.has(String((runtimeLocation == null ? void 0 : runtimeLocation.hostname) || "")))
    return source;
  let url;
  try {
    url = new URL(source);
  } catch {
    return source;
  }
  if (url.hostname !== BANLAN_OSS_HOST)
    return source;
  const origin = (runtimeLocation == null ? void 0 : runtimeLocation.origin) || `http://${runtimeLocation.hostname}`;
  return `${origin}/__banlan_oss__${url.pathname}`;
}
function mapRuntimeAssets(value, runtimeLocation = globalThis.location) {
  if (typeof value === "string")
    return resolveRuntimeAsset(value, runtimeLocation);
  if (Array.isArray(value))
    return value.map((item) => mapRuntimeAssets(item, runtimeLocation));
  if (!value || typeof value !== "object")
    return value;
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, mapRuntimeAssets(item, runtimeLocation)]));
}
export {
  mapRuntimeAssets as m,
  resolveRuntimeAsset as r
};
