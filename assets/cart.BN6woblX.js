function createProductIndex(products = []) {
  return new Map(products.map((product) => [String(product.id), product]));
}
function findProduct(index, productId) {
  return index.get(String(productId ?? "")) ?? null;
}
function resolveCombination(product, selectedIds) {
  var _a;
  const wanted = [...selectedIds].map(String).sort().join(",");
  if (product && product.openCombination) {
    const n = (product.specifications || []).length;
    return [...selectedIds].length === n ? { ids: [...selectedIds], status: "valid", priceYuan: product.priceYuan, rebate: 100, image: product.coverImage } : null;
  }
  return ((_a = product == null ? void 0 : product.combinations) == null ? void 0 : _a.find((item) => [...item.ids].map(String).sort().join(",") === wanted)) ?? null;
}
const checkoutImageFallbacks = {
  "0957523e011148339bbe33b717f2679e": "/static/banlan/journey/yunshan-sofa.png"
};
const CART_STORAGE_KEY = "banlan:cart:v1";
const CHECKOUT_STORAGE_KEY = "banlan:checkout:v1";
const canonicalIds = (ids = []) => ids.map(String).sort();
function createCartLine(product, selectedIds = []) {
  if (!product)
    return null;
  const ids = selectedIds.map(String);
  if (ids.length !== product.specifications.length)
    return null;
  const combination = resolveCombination(product, ids);
  if (!combination || combination.status !== "valid" || Number(combination.priceYuan) <= 0)
    return null;
  const specifications = [];
  for (const group of product.specifications) {
    if (group.multi) {
      const entry = ids.find((id) => id.split("|").some((x) => group.choices.some((c) => String(c.id) === x)));
      if (!entry) return null;
      const picks = group.choices.filter((c) => entry.split("|").includes(String(c.id)));
      specifications.push({ groupId: String(group.id), groupName: group.name, choiceId: entry, name: picks.map((c) => c.name).join("、"), description: "" });
      continue;
    }
    const choice = group.choices.find((item) => ids.includes(String(item.id)));
    if (!choice)
      return null;
    specifications.push({
      groupId: String(group.id),
      groupName: group.name,
      choiceId: String(choice.id),
      name: choice.name,
      description: choice.description ?? ""
    });
  }
  const sortedIds = canonicalIds(ids);
  return {
    key: `${product.id}:${sortedIds.join(",")}`,
    productId: String(product.id),
    title: product.title,
    image: combination.image || product.coverImage,
    ...checkoutImageFallbacks[String(product.id)] ? { fallbackImage: checkoutImageFallbacks[String(product.id)] } : {},
    unitPriceYuan: Number(combination.priceYuan),
    quantity: 1,
    checked: true,
    selectedIds: ids,
    specifications
  };
}
function addCartLine(lines = [], line) {
  if (!line)
    return lines.map((item) => ({ ...item }));
  const existing = lines.find((item) => item.key === line.key);
  if (!existing)
    return [...lines.map((item) => ({ ...item })), { ...line }];
  return lines.map((item) => item.key === line.key ? { ...item, quantity: Math.max(1, Number(item.quantity) || 1) + Math.max(1, Number(line.quantity) || 1), checked: true } : { ...item });
}
function setCartQuantity(lines = [], key, quantity) {
  const next = Math.max(1, Math.trunc(Number(quantity) || 1));
  return lines.map((item) => item.key === key ? { ...item, quantity: next } : { ...item });
}
function toggleCartLine(lines = [], key, checked) {
  return lines.map((item) => item.key === key ? { ...item, checked: Boolean(checked) } : { ...item });
}
function toggleAllCartLines(lines = [], checked) {
  return lines.map((item) => ({ ...item, checked: Boolean(checked) }));
}
function removeCartLine(lines = [], key) {
  return lines.filter((item) => item.key !== key).map((item) => ({ ...item }));
}
function selectedCartLines(lines = []) {
  return lines.filter((item) => item.checked).map((item) => ({ ...item }));
}
function cartTotal(lines = []) {
  return selectedCartLines(lines).reduce((total, item) => total + Number(item.unitPriceYuan) * Number(item.quantity), 0);
}
function readStoredLines(getStorageSync, key = CART_STORAGE_KEY) {
  try {
    const value = getStorageSync(key);
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}
function writeStoredLines(setStorageSync, lines, key = CART_STORAGE_KEY) {
  const safeLines = Array.isArray(lines) ? lines : [];
  setStorageSync(key, safeLines);
  return safeLines;
}
export {
  CART_STORAGE_KEY as C,
  resolveCombination as a,
  createCartLine as b,
  createProductIndex as c,
  addCartLine as d,
  cartTotal as e,
  findProduct as f,
  toggleCartLine as g,
  setCartQuantity as h,
  removeCartLine as i,
  CHECKOUT_STORAGE_KEY as j,
  readStoredLines as r,
  selectedCartLines as s,
  toggleAllCartLines as t,
  writeStoredLines as w
};
