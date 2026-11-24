var define_import_meta_env_default = { VITE_CJS_IGNORE_WARNING: "true", VITE_USER_NODE_ENV: "production", VITE_ROOT_DIR: "/home/claude/banlan-miniapp-latest", BASE_URL: "./", MODE: "production", DEV: false, PROD: true, SSR: false };
const BANLAN_OSS_HOST = "mp-banlan-product.oss-cn-shenzhen.aliyuncs.com";
const RUNTIME_ASSET_BASE = String((define_import_meta_env_default == null ? void 0 : define_import_meta_env_default.VITE_BANLAN_ASSET_BASE_URL) || "/runtime-assets/oss-originals").replace(/\/$/, "");
function runtimeAssetPath(relativePath) {
  const normalized = String(relativePath || "").replace(/^\/+/, "");
  return normalized ? `${RUNTIME_ASSET_BASE}/${normalized}` : RUNTIME_ASSET_BASE;
}
function resolveRuntimeAsset(source, _runtimeLocation = globalThis.location) {
  if (typeof source !== "string" || !source)
    return source;
  let url;
  try {
    url = new URL(source);
  } catch {
    return source;
  }
  if (url.hostname !== BANLAN_OSS_HOST)
    return source;
  return runtimeAssetPath(url.pathname);
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
  runtimeAssetPath as a,
  mapRuntimeAssets as m,
  resolveRuntimeAsset as r
};
