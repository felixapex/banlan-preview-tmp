import { r as ref, B as reactive, z as computed, c as createBlock, w as withCtx, d as index$g, o as openBlock, a as createVNode, A as navigateBack, e as createTextVNode, m as reLaunch, v as normalizeClass, h as createElementBlock, j as renderList, F as Fragment, t as toDisplayString, l as createCommentVNode, b as withModifiers, u as unref, g as getStorageSync, p as pageScrollTo, s as showToast, n as navigateTo, f as index$i, i as index$q, S as Swiper, C as index$x, D as previewImage, y as SwiperItem, E as index$d, G as setStorageSync } from "./index-B4mhl56q.js";
import { o as onLoad } from "./uni-app.es.oAhR1D-z.js";
import { h as home } from "./home.D-6m3wa_.js";
import { c as createRuntimeProducts, s as sofaShowcase, p as productsData } from "./runtime-products.C3fIHjhg.js";
import { c as createProductIndex, f as findProduct, r as readStoredLines, C as CART_STORAGE_KEY, a as resolveCombination, b as createCartLine, d as addCartLine, w as writeStoredLines } from "./cart.BN6woblX.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import { mountConfig, defaultState, cartLine as cfgCartLine, validate as cfgValidate } from "./yh-config2.js";
import "./runtime-assets.CAI08V4T.js";
const meta = {
  kind: "miniapp-product-engagement",
  adapter: "banlan-wechat-miniapp",
  capturedAt: "2026-11-19T19:57:10.402Z",
  productCount: 5,
  firstPageSize: 3,
  complete: true,
  mediaStatus: "frozen-local",
  note: "Raw responses are preserved in artifacts/miniapp-engagement; runtime keeps the original first page, authoritative total, source media URLs, and frozen local media."
};
const records = [
  {
    productId: "c146e331cd91424c886840abd2b8be1b",
    recommendations: [
      {
        id: "1aeee7109f6a48d48ed005d59a1f307a",
        title: "简牍休闲椅",
        priceYuan: 10800,
        image: "/static/banlan/engagement/f64c6f6cbf4843fc7bd5dd82.jpg",
        action: {
          type: "product",
          target: "1aeee7109f6a48d48ed005d59a1f307a"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-休闲椅-简牍/1786777841850_$$_简牍休闲椅1.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-休闲椅-简牍/1786777841850_$$_简牍休闲椅1.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "bff80c656d744a5f9fe1e43348b15654",
        title: "简牍几",
        priceYuan: 4600,
        image: "/static/banlan/engagement/58d26680303200c298073e7e.jpg",
        action: {
          type: "product",
          target: "bff80c656d744a5f9fe1e43348b15654"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-几-简牍/1786777927048_$$_简牍几1.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-几-简牍/1786777927048_$$_简牍几1.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      }
    ],
    reviews: {
      total: 0,
      pageNumber: 1,
      pageSize: 3,
      captured: 0,
      complete: true,
      items: [],
      editable: true
    },
    source: {
      recommendations: {
        status: "captured",
        code: "0",
        endpoint: "https://mpapi.banlan.com.cn/xcx/custom/good/findRecommendList?gid=c146e331cd91424c886840abd2b8be1b"
      },
      reviews: {
        status: "captured",
        code: "0",
        endpoint: "https://mpapi.banlan.com.cn/xcx/custom/good/getDryingSheetList?gid=c146e331cd91424c886840abd2b8be1b&start=1&limit=3&total=3"
      }
    },
    editable: true,
    title: "简牍沙发"
  },
  {
    productId: "0957523e011148339bbe33b717f2679e",
    recommendations: [
      {
        id: "23698f4bdf3442c68d24c7ba1b25e96c",
        title: "琼楼电视柜",
        priceYuan: 64800,
        image: "/static/banlan/engagement/6510da8741d28f0c3c3d9cd5.jpg",
        action: {
          type: "product",
          target: "23698f4bdf3442c68d24c7ba1b25e96c"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-电视柜-琼楼/1603455326011_$$_小程序-主图-柜架-电视柜-琼楼2.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-电视柜-琼楼/1603455326011_$$_小程序-主图-柜架-电视柜-琼楼2.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "1142b341b21a494ca327d32d1957e274",
        title: "逍遥扶手椅",
        priceYuan: 12880,
        image: "/static/banlan/engagement/7b9fff6ba6a0f6f6e2eba284.jpg",
        action: {
          type: "product",
          target: "1142b341b21a494ca327d32d1957e274"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-扶手椅-逍遥/1773739047158_$$_小程序-主图-椅榻-扶手椅-逍遥1-260317.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-扶手椅-逍遥/1773739047158_$$_小程序-主图-椅榻-扶手椅-逍遥1-260317.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "1eac5a069c2241428d8894c3714ce0da",
        title: "达摩几",
        priceYuan: 3280,
        image: "/static/banlan/engagement/3f47c3ac966ef2f3ed38641b.jpg",
        action: {
          type: "product",
          target: "1eac5a069c2241428d8894c3714ce0da"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967479650_$$_小程序-主图-桌几-几-达摩1.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967479650_$$_小程序-主图-桌几-几-达摩1.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "81ba2c3984ff477a8ba348652fa59ffb",
        title: "丁香几",
        priceYuan: 4040,
        image: "/static/banlan/engagement/dcbbff765f03f2c28c65e368.jpg",
        action: {
          type: "product",
          target: "81ba2c3984ff477a8ba348652fa59ffb"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-几-丁香/1603454062004_$$_小程序-主图-桌几-几-丁香3.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-几-丁香/1603454062004_$$_小程序-主图-桌几-几-丁香3.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      }
    ],
    reviews: {
      total: 243,
      pageNumber: 1,
      pageSize: 3,
      captured: 3,
      complete: false,
      items: [
        {
          id: "a204efda6c324663814ffffa3f61d1ab",
          nickName: ".",
          avatar: "/static/banlan/engagement/9db0bb338c830f3c23ac2226.jpg",
          address: "陵水黎族自治县",
          createdAt: "2026-11-08 08:26:17",
          content: "每处细节都十分细腻，御虎的佳乐也非常细心有耐心的讲解。",
          images: [
            "/static/banlan/engagement/b7f6e48ae3ee57ef32f718c6.jpg"
          ],
          likes: 1,
          replies: [
            {
              id: "5bfec7ec1e054d68bfbd73cc9b6ec6d3",
              nickName: "佳乐",
              avatar: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/deb86a48-3341-4692-ac72-88a78411e4b1",
              createdAt: "2026-11-14 15:41:18",
              content: "谢谢骆姐姐的肯定，细心与耐心也是石家庄御虎服务的标准。产品落地效果能让您满意也很开心。石家庄到三亚2580公里，虽隔千里，依旧好好落地，稳妥交付。也愿您日子从容，岁岁舒心",
              likes: 0,
              replies: [],
              editable: true
            }
          ],
          editable: true,
          avatarSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/3f3250ed-3604-45ee-a7db-e7a18fc388f8",
          avatarRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/3f3250ed-3604-45ee-a7db-e7a18fc388f8?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/5d8d9ffa-b706-442a-aff4-f1d2c65c0332"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/5d8d9ffa-b706-442a-aff4-f1d2c65c0332?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        },
        {
          id: "df55dd2cdf9f4abc853f7c9c8750a55c",
          nickName: "pinky",
          avatar: "/static/banlan/engagement/f182e4f8911d552987637c01.jpg",
          address: "广州市",
          createdAt: "2026-10-30 09:44:46",
          content: "御虎家具很不错，质感很好，广州店小影推荐的很好，面料漂亮，师傅搬运安装也很专业细心。",
          images: [
            "/static/banlan/engagement/57379552d7008bbfc58d2011.jpg",
            "/static/banlan/engagement/8e8f06b4f82fa2d1192bcc29.jpg"
          ],
          likes: 5,
          replies: [
            {
              id: "32b296a63b0d4fe09cac6f87da290781",
              nickName: "广州御虎小英",
              avatar: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/212a00c5-43a1-4c1c-8daf-83e9eb44f523",
              createdAt: "2026-10-30 13:27:23",
              content: "好美啊",
              likes: 0,
              replies: [],
              editable: true
            },
            {
              id: "f211272cec684c01a68f2b0750813328",
              nickName: "广州御虎 小影",
              avatar: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/3f0211ba-91f8-4f3c-9d34-012d8e272756",
              createdAt: "2026-10-30 10:06:33",
              content: "谢谢黄小姐的认可，为您服务我们也很开心呀🥳",
              likes: 0,
              replies: [],
              editable: true
            },
            {
              id: "2f83855c6c954d8c978fec243cd580ef",
              nickName: "广州御虎-孟茹",
              avatar: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/470d2db0-4b4a-4476-9c30-90d3bbf780a8",
              createdAt: "2026-10-30 10:04:25",
              content: "跟您家很配耶🤩",
              likes: 0,
              replies: [],
              editable: true
            }
          ],
          editable: true,
          avatarSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/561de779-3c4b-406a-becd-31e69fd2bd0b",
          avatarRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/561de779-3c4b-406a-becd-31e69fd2bd0b?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/78284c0d-ea9e-47bc-aa35-30447b737c7f",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/3f57d9e0-f10b-4950-81bf-256e2af4be7b"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/78284c0d-ea9e-47bc-aa35-30447b737c7f?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/3f57d9e0-f10b-4950-81bf-256e2af4be7b?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        },
        {
          id: "fef279a1989c4aeea98d5b15f8e4552d",
          nickName: "皇宫伯纳乌",
          avatar: "/static/banlan/engagement/e9ad743013497637aca05ffb.jpg",
          address: "西安市",
          createdAt: "2026-10-24 14:16:09",
          content: "质感满满！",
          images: [
            "/static/banlan/engagement/228e451d1f2ba6a9ca6156a7.jpg",
            "/static/banlan/engagement/dd6030e8a6a88fd121a4f809.jpg"
          ],
          likes: 0,
          replies: [],
          editable: true,
          avatarSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/f408cdce-afcc-42ba-8c42-a673c160b7ef",
          avatarRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/f408cdce-afcc-42ba-8c42-a673c160b7ef?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/4d7a8752-6a8d-438d-b03c-27fb5ab4d823",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/a1a88b23-4c3c-4a1e-9eff-6e96f3f9eaf1"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/4d7a8752-6a8d-438d-b03c-27fb5ab4d823?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/a1a88b23-4c3c-4a1e-9eff-6e96f3f9eaf1?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        }
      ],
      editable: true
    },
    source: {
      recommendations: {
        status: "captured",
        code: "0",
        endpoint: "https://mpapi.banlan.com.cn/xcx/custom/good/findRecommendList?gid=0957523e011148339bbe33b717f2679e"
      },
      reviews: {
        status: "captured",
        code: "0",
        endpoint: "https://mpapi.banlan.com.cn/xcx/custom/good/getDryingSheetList?gid=0957523e011148339bbe33b717f2679e&start=1&limit=3&total=3"
      }
    },
    editable: true,
    title: "云杉沙发"
  },
  {
    productId: "9129047da7e2434abd5dad762ec05d95",
    recommendations: [
      {
        id: "73574d3f085244d783f99ddcc03ed2b8",
        title: "龙井扶手椅",
        priceYuan: 11680,
        image: "/static/banlan/engagement/1cb218cda6ad2f4dd43d67ec.jpg",
        action: {
          type: "product",
          target: "73574d3f085244d783f99ddcc03ed2b8"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-扶手椅-龙井/1603454605619_$$_小程序-主图-椅榻-扶手椅-龙井2.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-扶手椅-龙井/1603454605619_$$_小程序-主图-椅榻-扶手椅-龙井2.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "23698f4bdf3442c68d24c7ba1b25e96c",
        title: "琼楼电视柜",
        priceYuan: 64800,
        image: "/static/banlan/engagement/6510da8741d28f0c3c3d9cd5.jpg",
        action: {
          type: "product",
          target: "23698f4bdf3442c68d24c7ba1b25e96c"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-电视柜-琼楼/1603455326011_$$_小程序-主图-柜架-电视柜-琼楼2.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-电视柜-琼楼/1603455326011_$$_小程序-主图-柜架-电视柜-琼楼2.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "4112cc8fe9cc40b7a61f4232653b78eb",
        title: "香木几",
        priceYuan: 4260,
        image: "/static/banlan/engagement/e48228ae9fd0fc4d8ca03f1e.jpg",
        action: {
          type: "product",
          target: "4112cc8fe9cc40b7a61f4232653b78eb"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-几-香木/1603453985020_$$_小程序-主图-桌几-几-香木2.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-几-香木/1603453985020_$$_小程序-主图-桌几-几-香木2.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "221d9bf8bd55438082f6c4edb322244f",
        title: "悟空几",
        priceYuan: 7700,
        image: "/static/banlan/engagement/08cfe25eff3f07daae134563.jpg",
        action: {
          type: "product",
          target: "221d9bf8bd55438082f6c4edb322244f"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967479714_$$_小程序-主图-桌几-几-悟空1.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967479714_$$_小程序-主图-桌几-几-悟空1.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      }
    ],
    reviews: {
      total: 112,
      pageNumber: 1,
      pageSize: 3,
      captured: 3,
      complete: false,
      items: [
        {
          id: "13925163351",
          nickName: "卢成利",
          avatar: "/static/banlan/engagement/abf5d55ec203b97e0d2231de.jpg",
          address: "广东广州",
          createdAt: "2020-11-18 00:00:00",
          content: "我选择御虎是因为行业里的专业朋友推荐的，在选择御虎品牌的这件事上，我与设计师一拍即合，因为大气有质感的调性是我想要的，家对我意味着安全感，能让你静下心来发呆的地方，所以我非常注重家里的布置，从专业的朋友那里了解到：国内首选品牌就是御虎，确实，体验了一回之后觉得无论是产品品质、还是店面氛围和服务都是让我非常满意的！后来，御虎店里只要有上新产品，我就会过去转一转，忍不住的想要再淘一淘自己喜欢的，后来销售员都会阻拦我说：姐姐您家已经很漂亮了，其实不用再添置了……哈哈哈哈。沉香沙发我认为时尚大气、有质感是选择家具时一定要具备的条件，沉香在大气的同时也很时尚，而且销售人员帮我搭配的组合方式我非常喜欢，很独特，可以坐、可以躺卧、还可以在沙发上睡，真的非常好用",
          images: [
            "/static/banlan/engagement/f41799d7c45828f7c63c36ac.jpg",
            "/static/banlan/engagement/b03ff090367c527c54c2d2ac.jpg",
            "/static/banlan/engagement/3a8d28e2224bb069e347b581.jpg",
            "/static/banlan/engagement/701a09d6b0caf9d886df9ab0.jpg",
            "/static/banlan/engagement/4d498013fa1728dc9c60e75d.jpg"
          ],
          likes: 8,
          replies: [],
          editable: true,
          avatarSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%9A%8F%E6%9C%BA%E5%A4%B4%E5%83%8F/1624929286742_$$_36.jpg",
          avatarRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%9A%8F%E6%9C%BA%E5%A4%B4%E5%83%8F/1624929286742_$$_36.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/沉香沙发/13925163351沉香沙发101.jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/沉香沙发/13925163351沉香沙发102.jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/沉香沙发/13925163351沉香沙发103.jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/沉香沙发/13925163351沉香沙发104.jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/沉香沙发/13925163351沉香沙发105.jpg"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/沉香沙发/13925163351沉香沙发101.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/沉香沙发/13925163351沉香沙发102.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/沉香沙发/13925163351沉香沙发103.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/沉香沙发/13925163351沉香沙发104.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/沉香沙发/13925163351沉香沙发105.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        },
        {
          id: "15ae79d14c424778b6011c672613d3c7",
          nickName: "❤️Lucky❤️",
          avatar: "/static/banlan/engagement/dd449fca300f57ccf3b70694.jpg",
          address: "石家庄市",
          createdAt: "2026-08-16 12:49:31",
          content: "石家庄御虎的团队服务非常细致周到，欣悦小伙伴的服务温和到位，家具到家后大气有质感，很出片，五金的细节很极致，工艺细节做的很考究，处处为客户考虑的品牌，值得大家选择❤️",
          images: [
            "/static/banlan/engagement/b6cc7d2dbc40a2bef2ef37dc.jpg",
            "/static/banlan/engagement/b6c6b0b38e06319bc27d59cf.jpg",
            "/static/banlan/engagement/3f4dbd6eb51a8c79fbad831f.jpg",
            "/static/banlan/engagement/00f7157b041d1b9fefcd064f.jpg",
            "/static/banlan/engagement/c3eeea5d8f96001b6288898e.jpg"
          ],
          likes: 0,
          replies: [
            {
              id: "9fd3815cdfad4b4b817b3bb562ad88e2",
              nickName: "石家庄御虎欣悦",
              avatar: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/xinyue.jpg",
              createdAt: "2026-09-24 13:14:32",
              content: "感谢姐姐是御虎的喜爱，对石家庄御虎工作的认可☺️送货只是服务的开始，愿御虎的家具陪您们走过三餐四季，日日皆有温柔相伴☀️",
              likes: 0,
              replies: [],
              editable: true
            }
          ],
          editable: true,
          avatarSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/4ea2e5f8-696d-4f68-9084-254f1ac61e27",
          avatarRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/4ea2e5f8-696d-4f68-9084-254f1ac61e27?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/eb680f8f-b113-47a4-8efc-9d50a023a071",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/e051fd38-19de-4481-8665-065fb398a85c",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/863e89cc-7e80-4926-ae80-ed3e78b86ca9",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/1d066608-3eb1-4811-a36e-1fc2cddcbee6",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/2c4c308f-3316-4d4b-88b6-cd266cd42d4d"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/eb680f8f-b113-47a4-8efc-9d50a023a071?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/e051fd38-19de-4481-8665-065fb398a85c?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/863e89cc-7e80-4926-ae80-ed3e78b86ca9?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/1d066608-3eb1-4811-a36e-1fc2cddcbee6?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/2c4c308f-3316-4d4b-88b6-cd266cd42d4d?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        },
        {
          id: "06f3af8580ba4b7c8d70f9c44d0a2b94",
          nickName: "时光荏苒",
          avatar: "/static/banlan/engagement/c7069f3c7abef732230b1dd6.jpg",
          address: "石家庄市",
          createdAt: "2026-06-25 20:03:37",
          content: "跑遍各大家具卖场，最终选定了御虎家居，体验感特别好！\n家具本身做工无可挑剔，原木材质温润细腻，榫卯工艺精湛，设计简约雅致，没有繁杂花哨的装饰，款式经典耐看。家具几乎没有异味，环保品质让人住得安心，摆放在家中瞬间提升整体格调。\n \n更值得称赞的是对接的销售顾问，专业素养极高，深谙产品用料与设计理念。结合我家户型反复规划摆放方案，细心核对尺寸，站在客户角度合理搭配，全程没有强制推销，待人真诚实在。从挑选款式、敲定方案，再到跟进发货与安装，事事有回应，全程省心顺畅。\n \n好品质配上好服务，物有所值，真心推荐准备装修选家具的朋友来御虎看一看！",
          images: [
            "/static/banlan/engagement/10bfd582533eeee1e4dd5467.jpg",
            "/static/banlan/engagement/ce86020002c67a7525b8a856.jpg"
          ],
          likes: 3,
          replies: [
            {
              id: "cf48b2b26c4943fc94710ee3b17ad65a",
              nickName: "雅茹",
              avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/Wl01qBv8FqkoKC2EBlOZia8IibVYnQcQFtNJahMF9aaqccuicx9KDMtadbZ9914LxPRwzNDIFwMa0FWgu33Bpm9qA/132",
              createdAt: "2026-06-25 20:40:38",
              content: "谢谢欣姐姐这么细致走心的认可！能够让您满意省心是我最开心的事！❤️欢迎您常回御虎坐坐",
              likes: 0,
              replies: [],
              editable: true
            }
          ],
          editable: true,
          avatarSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/0c7c78f6-3936-4334-8173-5c810dda9ce4",
          avatarRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/0c7c78f6-3936-4334-8173-5c810dda9ce4?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/49f94d7c-1787-4804-9d90-e3e26052d9ff",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/0007b5d7-6d66-4b96-af9f-eb06725e976f"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/49f94d7c-1787-4804-9d90-e3e26052d9ff?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/0007b5d7-6d66-4b96-af9f-eb06725e976f?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        }
      ],
      editable: true
    },
    source: {
      recommendations: {
        status: "captured",
        code: "0",
        endpoint: "https://mpapi.banlan.com.cn/xcx/custom/good/findRecommendList?gid=9129047da7e2434abd5dad762ec05d95"
      },
      reviews: {
        status: "captured",
        code: "0",
        endpoint: "https://mpapi.banlan.com.cn/xcx/custom/good/getDryingSheetList?gid=9129047da7e2434abd5dad762ec05d95&start=1&limit=3&total=3"
      }
    },
    editable: true,
    title: "沉香沙发"
  },
  {
    productId: "8ac6ee63e7274896a84f5e424bbd3c05",
    recommendations: [
      {
        id: "ebdd5b2163204c56b05934fa5e0902a1",
        title: "祥云电视柜",
        priceYuan: 17760,
        image: "/static/banlan/engagement/ed45cedde31d29903f282329.jpg",
        action: {
          type: "product",
          target: "ebdd5b2163204c56b05934fa5e0902a1"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1620360761805_$$_小程序-主图-柜架-电视柜-祥云1.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1620360761805_$$_小程序-主图-柜架-电视柜-祥云1.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "e0ed37f138d447b7a4ef79cd1dede08b",
        title: "龙泉扶手椅",
        priceYuan: 6280,
        image: "/static/banlan/engagement/02880b0fbe8557e8f5a3edb7.jpg",
        action: {
          type: "product",
          target: "e0ed37f138d447b7a4ef79cd1dede08b"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967477367_$$_小程序-主图-椅榻-扶手椅-龙泉1.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967477367_$$_小程序-主图-椅榻-扶手椅-龙泉1.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "88249c3f6fd6473e8fa2031f820cace0",
        title: "海棠几",
        priceYuan: 4240,
        image: "/static/banlan/engagement/90d12306262d408c24603c71.jpg",
        action: {
          type: "product",
          target: "88249c3f6fd6473e8fa2031f820cace0"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-几-海棠/1603454159963_$$_小程序-主图-桌几-几-海棠2.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-几-海棠/1603454159963_$$_小程序-主图-桌几-几-海棠2.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "a9604e24566c4f08981ffb5dde2973e8",
        title: "天地几",
        priceYuan: 12780,
        image: "/static/banlan/engagement/5f5f2d726f95875dd4c26fbe.jpg",
        action: {
          type: "product",
          target: "a9604e24566c4f08981ffb5dde2973e8"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-几-天地/1603454169941_$$_小程序-主图-桌几-几-天地2.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-几-天地/1603454169941_$$_小程序-主图-桌几-几-天地2.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      }
    ],
    reviews: {
      total: 143,
      pageNumber: 1,
      pageSize: 3,
      captured: 3,
      complete: false,
      items: [
        {
          id: "7d00afeac8b24548ad51a72eb6a6baee",
          nickName: "庄锦耀",
          avatar: "/static/banlan/engagement/55f685e7d3c347a5d9e950e1.jpg",
          address: "厦门市",
          createdAt: "2023-12-03 15:33:06",
          content: "大气舒适",
          images: [
            "/static/banlan/engagement/5681eaf0b5bae9591d911517.jpg",
            "/static/banlan/engagement/552414f1eaf1595c9b59217e.jpg"
          ],
          likes: 9,
          replies: [],
          editable: true,
          avatarSourceUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ9FbDety7QsRPm4UBCjmdp5ibEJo2rTACnvy8GnXqQBe4DxzQIRnqRSonnjvJQdZlTdNP2zD2Is9A/132",
          avatarRemoteUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ9FbDety7QsRPm4UBCjmdp5ibEJo2rTACnvy8GnXqQBe4DxzQIRnqRSonnjvJQdZlTdNP2zD2Is9A/132?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/b218307b-76f3-4093-bd9a-0cdbad35a4e7",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/77f632c1-009b-466b-8747-047eeb64a87e"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/b218307b-76f3-4093-bd9a-0cdbad35a4e7?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/77f632c1-009b-466b-8747-047eeb64a87e?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        },
        {
          id: "fa1046320f36476295629dcaf98f1d27",
          nickName: "闫",
          avatar: "/static/banlan/engagement/0ad5693c314f3d5e303b20ff.jpg",
          address: "石家庄市",
          createdAt: "2026-10-02 08:57:44",
          content: "御虎如意沙发，笔墨入器，木骨绒柔",
          images: [
            "/static/banlan/engagement/37cce48e1ab3711c91b5082a.jpg"
          ],
          likes: 2,
          replies: [
            {
              id: "5e50e198cad84f5daf11c34f31dc732d",
              nickName: "石家庄御虎欣悦",
              avatar: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/xinyue.jpg",
              createdAt: "2026-10-03 12:56:16",
              content: "感谢闫总对御虎的喜爱和认可，送货只是服务的开始，愿御虎的家具陪您们走过三餐四季，日日皆有温柔相伴",
              likes: 0,
              replies: [],
              editable: true
            }
          ],
          editable: true,
          avatarSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/04fadb71-f515-4a9a-bebb-df76959a298b",
          avatarRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/04fadb71-f515-4a9a-bebb-df76959a298b?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/211c9b09-5ed4-4f87-8b67-d1a62cd973d7"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/211c9b09-5ed4-4f87-8b67-d1a62cd973d7?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        },
        {
          id: "64177dcaa77f4348ba13c05b852dc73b",
          nickName: "彩云朵朵",
          avatar: "/static/banlan/engagement/3c72b5f19ae9db1023f2a27c.jpg",
          address: "石家庄市",
          createdAt: "2026-09-26 15:34:22",
          content: "石家庄班雅茹特别优秀服务态度非常到位，我非常满意我是第三次选择御虎",
          images: [
            "/static/banlan/engagement/b4a3414294c860f597f15e2f.jpg",
            "/static/banlan/engagement/6e59ebb59b4d08964a58913f.jpg",
            "/static/banlan/engagement/f5783aa0fd7c7f18644159fe.jpg",
            "/static/banlan/engagement/007067f72baf8f6f208c1369.jpg",
            "/static/banlan/engagement/d719baaab3aa7bbd0d6d5a2c.jpg"
          ],
          likes: 1,
          replies: [
            {
              id: "eec9826928c441e1a1a0ef1a18f5cfc2",
              nickName: "🦄娓娓🦄💫",
              avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKTiaXJFHTQHreTkOZvMdiaD5PTsibCS8HU5LIkErJ8ib93kSvtibZ3s19Dia5Av3ngkicpVkkUvlnGNLgBA/132",
              createdAt: "2026-10-07 17:08:22",
              content: "感谢姐姐第三次选择御虎❤️！特别开心能再次为您新家落地，您的认可就是我们最大动力，门店小伙伴也会继续用心做好每一次服务，愿御虎家具长久陪伴您的美好生活✨",
              likes: 0,
              replies: [],
              editable: true
            }
          ],
          editable: true,
          avatarSourceUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIV9F17ypndtkicqUbNMoljCq5eVDDy7ibERsqiaSTJfiacjXoyuF9V5ibwpq8DTYkUIYiaVibU88RKxGPfw/132",
          avatarRemoteUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIV9F17ypndtkicqUbNMoljCq5eVDDy7ibERsqiaSTJfiacjXoyuF9V5ibwpq8DTYkUIYiaVibU88RKxGPfw/132?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/2dd6d274-2c6c-4432-890c-b25730d5faba",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/9b69e72f-e2fc-44f9-8ea6-933a24e9a84e",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/bdae496c-004d-4f5d-86ab-8ebd84e89a06",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/58e8ad95-7528-475b-8605-982cd991563f",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/488bb19a-0cd9-44c4-b594-90a4eca28472"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/2dd6d274-2c6c-4432-890c-b25730d5faba?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/9b69e72f-e2fc-44f9-8ea6-933a24e9a84e?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/bdae496c-004d-4f5d-86ab-8ebd84e89a06?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/58e8ad95-7528-475b-8605-982cd991563f?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/488bb19a-0cd9-44c4-b594-90a4eca28472?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        }
      ],
      editable: true
    },
    source: {
      recommendations: {
        status: "captured",
        code: "0",
        endpoint: "https://mpapi.banlan.com.cn/xcx/custom/good/findRecommendList?gid=8ac6ee63e7274896a84f5e424bbd3c05"
      },
      reviews: {
        status: "captured",
        code: "0",
        endpoint: "https://mpapi.banlan.com.cn/xcx/custom/good/getDryingSheetList?gid=8ac6ee63e7274896a84f5e424bbd3c05&start=1&limit=3&total=3"
      }
    },
    editable: true,
    title: "如意沙发"
  },
  {
    productId: "9872be167e2f40fca837eabdfdb1e6af",
    recommendations: [
      {
        id: "a4def8dec85d45ad98d0e666cf61d4f7",
        title: "芙蓉扶手椅",
        priceYuan: 13380,
        image: "/static/banlan/engagement/8d6aeba624b07c6136d96877.jpg",
        action: {
          type: "product",
          target: "a4def8dec85d45ad98d0e666cf61d4f7"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967477335_$$_小程序-主图-椅榻-扶手椅-芙蓉1.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967477335_$$_小程序-主图-椅榻-扶手椅-芙蓉1.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "3a4090fc3f85468eaef4a1f616fc1f8c",
        title: "双喜电视柜",
        priceYuan: 17780,
        image: "/static/banlan/engagement/b4fc7be138a93385bd815e55.jpg",
        action: {
          type: "product",
          target: "3a4090fc3f85468eaef4a1f616fc1f8c"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-电视柜-双喜/1603455310371_$$_小程序-主图-柜架-电视柜-双喜2.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/商品-电视柜-双喜/1603455310371_$$_小程序-主图-柜架-电视柜-双喜2.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "1eac5a069c2241428d8894c3714ce0da",
        title: "达摩几",
        priceYuan: 3280,
        image: "/static/banlan/engagement/3f47c3ac966ef2f3ed38641b.jpg",
        action: {
          type: "product",
          target: "1eac5a069c2241428d8894c3714ce0da"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967479650_$$_小程序-主图-桌几-几-达摩1.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967479650_$$_小程序-主图-桌几-几-达摩1.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      },
      {
        id: "edc9b3eb175348a7aad34ac5a6a87b3e",
        title: "无双几",
        priceYuan: 2610,
        image: "/static/banlan/engagement/559eb41d7c95f0ce6ce45c33.jpg",
        action: {
          type: "product",
          target: "edc9b3eb175348a7aad34ac5a6a87b3e"
        },
        editable: true,
        imageSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967479714_$$_小程序-主图-桌几-几-无双1.jpg",
        imageRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/产品主图/1605967479714_$$_小程序-主图-桌几-几-无双1.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
        imageStatus: "frozen"
      }
    ],
    reviews: {
      total: 117,
      pageNumber: 1,
      pageSize: 3,
      captured: 3,
      complete: false,
      items: [
        {
          id: "15317",
          nickName: "圆心",
          avatar: "/static/banlan/engagement/1b8214ac4449461450d94a80.png",
          address: "广东广州",
          createdAt: "2020-11-18 00:00:00",
          content: "这是餐厅的沙发，是我们家最吸睛的一件家具，朋友们也非常喜欢。很有型很舒服。选了跳跃的橙色，依然是有质感",
          images: [
            "/static/banlan/engagement/5d2cc4cb9402b107370a7568.jpg"
          ],
          likes: 17,
          replies: [
            {
              id: "2d9f1e4bea6a4dc39d81faafdd8d103a",
              nickName: "Y&L",
              avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/xQTH3OlibSiaprLwsIpFaXxIBlqaS9ic6elUHLKxCdeHrN3hxvQ8AZNEEKz4RtxqTtEjUDZbUEUFHIBmTaoM8nDuQ/132",
              createdAt: "2023-06-20 09:56:51",
              content: "这个颜色看起来还是高级",
              likes: 0,
              replies: [],
              editable: true
            }
          ],
          editable: true,
          avatarSourceUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/DD1fMrD3TSskbcYzQicFyAR2rf1D0MuOorZ4e56ibekXuibkf7R2OcYxCzqAGj0E2ttMteYt0YUCJoPd3RPeUibIMg/132",
          avatarRemoteUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/DD1fMrD3TSskbcYzQicFyAR2rf1D0MuOorZ4e56ibekXuibkf7R2OcYxCzqAGj0E2ttMteYt0YUCJoPd3RPeUibIMg/132?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/达摩沙发/15991685347达摩沙发216.jpg"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/drying/达摩沙发/15991685347达摩沙发216.jpg?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        },
        {
          id: "6df7b3c8e1624252b5a9452df08726ba",
          nickName: "lq",
          avatar: "/static/banlan/engagement/c8943b5cd44861c41e94d23f.jpg",
          address: "苏州市",
          createdAt: "2026-06-25 16:18:38",
          content: "御虎落地很完美，每一件产品都很出彩，我的顾问威尔也很专业细致，每个细节都很精准，沟通得非常愉快！",
          images: [
            "/static/banlan/engagement/e4861d4a50ec5b78a9aaf0c4.jpg"
          ],
          likes: 0,
          replies: [],
          editable: true,
          avatarSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/2b46eaeb-d36c-46bf-bec2-897e077394c5",
          avatarRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/2b46eaeb-d36c-46bf-bec2-897e077394c5?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/ad563b77-4da7-4e5b-81d2-5e033ecd522a"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/ad563b77-4da7-4e5b-81d2-5e033ecd522a?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        },
        {
          id: "a19a41a24c3b4236a5c17579c10d6dba",
          nickName: "yanyan",
          avatar: "/static/banlan/engagement/020f3928350bf48bdd32e626.jpg",
          address: "阳江市",
          createdAt: "2025-12-10 17:10:27",
          content: "好，非常好，小影和孟茹服务很到位，期待家具在家里摆好的效果👍",
          images: [
            "/static/banlan/engagement/19cdd2ffbaa4dc19dcddc334.jpg"
          ],
          likes: 0,
          replies: [],
          editable: true,
          avatarSourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/ddae7e8d-aa56-4d77-9492-968c0eaf7947",
          avatarRemoteUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/ddae7e8d-aa56-4d77-9492-968c0eaf7947?x-oss-process=image/resize,w_720/quality,q_72/format,jpg",
          avatarStatus: "frozen",
          imageSourceUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/6ba0038e-2eab-4e5a-91ae-7c48085a3e8b"
          ],
          imageRemoteUrls: [
            "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/user_evaluate/6ba0038e-2eab-4e5a-91ae-7c48085a3e8b?x-oss-process=image/resize,w_720/quality,q_72/format,jpg"
          ],
          imageStatus: "frozen"
        }
      ],
      editable: true
    },
    source: {
      recommendations: {
        status: "captured",
        code: "0",
        endpoint: "https://mpapi.banlan.com.cn/xcx/custom/good/findRecommendList?gid=9872be167e2f40fca837eabdfdb1e6af"
      },
      reviews: {
        status: "captured",
        code: "0",
        endpoint: "https://mpapi.banlan.com.cn/xcx/custom/good/getDryingSheetList?gid=9872be167e2f40fca837eabdfdb1e6af&start=1&limit=3&total=3"
      }
    },
    editable: true,
    title: "达摩沙发"
  }
];
const engagementData = {
  meta,
  records
};
function applyProductEngagement(products = [], engagementData2 = {}) {
  const byProduct = new Map((engagementData2.records || []).map((record) => [String(record.productId), record]));
  return products.map((product) => {
    const engagement = byProduct.get(String(product.id));
    return engagement ? { ...product, engagement } : product;
  });
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    var _a, _b;
    const runtimeProducts = applyProductEngagement(createRuntimeProducts(productsData.products, sofaShowcase), engagementData);
    const index = createProductIndex(runtimeProducts);
    const product = ref(null);
    const selected = reactive({});
    const activeImage = ref(0);
    const activeTab = ref("detail");
    const openSpecGroup = ref("");
    const openQuestions = reactive({});
    const preorderOpen = ref(false);
    const favorite = ref(false);
    const cartCount = ref(0);
    const cpPreview = ref(null);
    const serviceIcon = ((_a = home.floatingActions.find((item) => item.id === "service")) == null ? void 0 : _a.image) ?? "";
    const cartIcon = ((_b = home.floatingActions.find((item) => item.id === "cart")) == null ? void 0 : _b.image) ?? "";
    const getStorage = (key) => getStorageSync(key);
    const setStorage = (key, value) => setStorageSync(key, value);
    onLoad((options) => {
      var _a2;
      product.value = findProduct(index, options == null ? void 0 : options.id);
      try {
        const p = product.value;
        if (p) {
          const key = "yuhu:footprint";
          const list = JSON.parse(localStorage.getItem(key) || "[]").filter((x) => x.id !== String(p.id));
          list.unshift({ id: String(p.id), title: p.title, en: p.richTitle || "", price: p.priceYuan || 0, image: p.coverImage || "", at: Date.now() });
          localStorage.setItem(key, JSON.stringify(list.slice(0, 50)));
        }
      } catch (e) {}
      for (const group of ((_a2 = product.value) == null ? void 0 : _a2.specifications) ?? [])
        selected[group.id] = "";
      cartCount.value = readStoredLines(getStorage, CART_STORAGE_KEY).reduce((sum, item) => sum + Number(item.quantity), 0);
    });
    const selectedIds = computed(() => {
      var _a2;
      return ((_a2 = product.value) == null ? void 0 : _a2.specifications.map((group) => selected[group.id]).filter(Boolean)) ?? [];
    });
    const selectedCombination = computed(() => resolveCombination(product.value, selectedIds.value));
    const selectionReady = computed(() => {
      var _a2;
      return Boolean(product.value && selectedIds.value.length === product.value.specifications.length && ((_a2 = selectedCombination.value) == null ? void 0 : _a2.status) === "valid");
    });
    const displayPrice = computed(() => {
      var _a2, _b2;
      return ((_a2 = selectedCombination.value) == null ? void 0 : _a2.priceYuan) ?? ((_b2 = product.value) == null ? void 0 : _b2.priceYuan) ?? 0;
    });
    const engagement = computed(() => {
      const p = product.value;
      if (!p) return null;
      const recs = runtimeProducts.filter((x) => x.id !== p.id && String(x.id).startsWith("yuhu-")).slice(0, 6).map((x) => ({ id: x.id, title: x.title, image: x.coverImage, imageRemoteUrl: "", priceYuan: x.priceYuan }));
      return { source: { recommendations: { status: "captured" }, reviews: { status: "captured" } }, recommendations: recs, reviews: { total: 0, captured: 0, complete: true, items: [] } };
    });
    function price(yuan) {
      return yuan > 0 ? `¥${Number(yuan).toLocaleString("zh-CN")}` : "价格咨询";
    }
    function choose(group, choice) {
      if (choice.sub) return;
      if (group.multi) {
        let cur = String(selected[group.id] || "").split("|").filter(Boolean);
        const none = group.choices[0] && group.choices[0].exclusive ? group.choices[0].id : null;
        if (cur.includes(choice.id)) cur = cur.filter((x) => x !== choice.id);
        else if (choice.id === none) cur = [choice.id];
        else cur = cur.filter((x) => x !== none).concat(choice.id);
        if (cur.length) selected[group.id] = cur.join("|"); else delete selected[group.id];
        return;
      }
      selected[group.id] = choice.id;
      openSpecGroup.value = "";
      for (const g of product.value.specifications || []) {
        if (g.choices.some((c) => c.requires && c.requires.group === group.id)) {
          const cur = g.choices.find((c) => c.id === selected[g.id]);
          if (cur && cur.requires && selected[cur.requires.group] !== cur.requires.choice) delete selected[g.id];
          if (!selected[g.id]) openSpecGroup.value = g.embedIn || g.id;
        }
      }
      const combination = resolveCombination(product.value, selectedIds.value);
      if (combination == null ? void 0 : combination.image) {
        const found = product.value.images.findIndex((image) => image.sourceUrl === combination.image);
        if (found >= 0)
          activeImage.value = found;
      }
    }
    function embeddedFor(group) {
      return (product.value.specifications || []).find((g) => g.embedIn === group.id);
    }
    function choiceItems(group) {
      const items = group.choices.map((c) => ({ g: group, c }));
      const e = embeddedFor(group);
      if (e && selected[group.id]) items.push({ g: group, c: { id: "__sub_" + e.id, name: e.name, description: (choiceFor(e) || {}).name || "未选择", sub: true } });
      if (e && selected[group.id]) for (const c of e.choices) if (!c.requires || selected[c.requires.group] === c.requires.choice) items.push({ g: e, c });
      return items;
    }
    function choiceLabel(group) {
      const a = choiceFor(group); const e = embeddedFor(group); const b = e && choiceFor(e);
      return b ? `${a.name} · ${b.name}` : a.name;
    }
    function isSel(group, choice) {
      return group.multi ? String(selected[group.id] || "").split("|").includes(choice.id) : selected[group.id] === choice.id;
    }
    function choiceFor(group) {
      if (group.multi) {
        const ids = String(selected[group.id] || "").split("|").filter(Boolean);
        if (!ids.length) return void 0;
        const names = group.choices.filter((c) => ids.includes(c.id)).map((c) => c.name);
        return { name: names.length > 1 ? `已选${names.length}项` : names[0], fullName: names.join("、") };
      }
      return group.choices.find((choice) => String(choice.id) === String(selected[group.id]));
    }
    function toggleSpec(group) {
      openSpecGroup.value = openSpecGroup.value === group.id ? "" : group.id;
    }
    function selectTab(tab) {
      activeTab.value = tab;
      pageScrollTo({ scrollTop: 0, duration: 0 });
    }
    function toggleFavorite() {
      favorite.value = !favorite.value;
      showToast({ title: favorite.value ? "已收藏" : "已取消收藏", icon: "none" });
    }
    function shareFallback() {
      showToast({ title: "请使用浏览器分享功能", icon: "none" });
    }
    function benefit(kind) {
      showToast({ title: kind === "profile" ? "完善资料有礼" : "邀请有礼", icon: "none" });
    }
    function openRecommendation(item) {
      const target = findProduct(index, item.id);
      if (target) {
        navigateTo({ url: `/pages/product/detail/detail?id=${item.id}` });
        return;
      }
      cpPreview.value = item;
    }
    function previewReview(review, current, imageIndex) {
      if (!review.images.length)
        return;
      let urls = review.images;
      let currentSource = current;
      previewImage({ current: currentSource, urls });
    }
    function formatReviewDate(value) {
      return String(value || "").slice(0, 10);
    }
    function requireSelection() {
      var _a2;
      if (selectionReady.value)
        return true;
      showToast({ title: "请先完成商品选配", icon: "none" });
      const missing = (_a2 = product.value) == null ? void 0 : _a2.specifications.find((group) => !selected[group.id]);
      if (missing)
        openSpecGroup.value = missing.id;
      return false;
    }
    function addPreorder() {
      if (!requireSelection())
        return;
      preorderOpen.value = true;
      showToast({ title: "已加入预选清单", icon: "none" });
    }
    function openPreorder() {
      if (product.value && product.value.config) return addToCart();
      if (!requireSelection())
        return;
      preorderOpen.value = true;
    }
    function imageSource(source) {
      let resolved = source;
      if (resolved.startsWith("/"))
        resolved = `.${resolved}`;
      return resolved;
    }
    function engagementImage(localSource, remoteSource) {
      let resolved = localSource;
      return imageSource(resolved || "");
    }
    function goService() {
      navigateTo({ url: "/pages/store/detail/detail" });
    }
    function goCart() {
      navigateTo({ url: "/pages/product/cart/cart" });
    }
    let cfgState = null;
    function addToCart() {
      if (product.value && product.value.config) {
        const err = cfgValidate(product.value.config, cfgState);
        if (err) { showToast({ title: err, icon: "none" }); return; }
        const lines = addCartLine(readStoredLines(getStorage, CART_STORAGE_KEY), cfgCartLine(product.value, cfgState));
        writeStoredLines(setStorage, lines, CART_STORAGE_KEY);
        cartCount.value = lines.reduce((sum, item) => sum + Number(item.quantity), 0);
        navigateTo({ url: "/pages/product/cart/cart" });
        return;
      }
      if (!requireSelection())
        return;
      const line = createCartLine(product.value, selectedIds.value);
      if (!line) {
        showToast({ title: "当前选配组合无效", icon: "none" });
        return;
      }
      const lines = addCartLine(readStoredLines(getStorage, CART_STORAGE_KEY), line);
      writeStoredLines(setStorage, lines, CART_STORAGE_KEY);
      cartCount.value = lines.reduce((sum, item) => sum + Number(item.quantity), 0);
      preorderOpen.value = false;
      navigateTo({ url: "/pages/product/cart/cart" });
    }
    return (_ctx, _cache) => {
      const _component_v_uni_text = index$i;
      const _component_v_uni_view = index$g;
      const _component_v_uni_image = index$q;
      const _component_v_uni_swiper_item = SwiperItem;
      const _component_v_uni_swiper = Swiper;
      const _component_v_uni_button = index$x;
      const _component_v_uni_video = index$d;
      return product.value ? (openBlock(), createBlock(_component_v_uni_view, {
        key: 0,
        class: "detail-page",
        "data-product-id": product.value.id
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_view, { class: "detail-nav" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, { class: "nav-left" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, {
                    "data-action-id": "detail:back",
                    onClick: _cache[0] || (_cache[0] = ($event) => navigateBack())
                  }, {
                    default: withCtx(() => [
                      createTextVNode("‹")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view),
                  createVNode(_component_v_uni_text, {
                    "data-action-id": "detail:home",
                    onClick: _cache[1] || (_cache[1] = ($event) => reLaunch({ url: "/pages/index/index" }))
                  }, {
                    default: withCtx(() => [
                      createTextVNode("⌂")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_text, { class: "nav-title" }, {
                default: withCtx(() => [
                  createTextVNode("商品详情")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "wechat-capsule" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("•••")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("—")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("◉")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, { class: "detail-tabs" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: normalizeClass({ active: activeTab.value === "detail" }),
                "data-action-id": "detail:tab:detail",
                onClick: _cache[2] || (_cache[2] = ($event) => selectTab("detail"))
              }, {
                default: withCtx(() => [
                  createTextVNode("详情")
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(_component_v_uni_view, {
                class: normalizeClass({ active: activeTab.value === "cp" }),
                "data-action-id": "detail:tab:cp",
                onClick: _cache[3] || (_cache[3] = ($event) => selectTab("cp"))
              }, {
                default: withCtx(() => [
                  createTextVNode("推荐")
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(_component_v_uni_view, {
                class: normalizeClass({ active: activeTab.value === "reviews" }),
                "data-action-id": "detail:tab:reviews",
                onClick: _cache[4] || (_cache[4] = ($event) => selectTab("reviews"))
              }, {
                default: withCtx(() => [
                  createTextVNode("用户评价")
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          }),
          activeTab.value === "detail" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 0,
            class: "detail-panel"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_swiper, {
                class: "gallery",
                current: activeImage.value,
                circular: "",
                onChange: _cache[5] || (_cache[5] = ($event) => activeImage.value = $event.detail.current)
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(product.value.images, (image) => {
                    return openBlock(), createBlock(_component_v_uni_swiper_item, {
                      key: image.id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_image, {
                          class: "gallery-image",
                          src: imageSource(image.sourceUrl),
                          mode: "aspectFit"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }, 8, ["current"]),
              createVNode(_component_v_uni_view, { class: "gallery-count" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(activeImage.value + 1) + " / " + toDisplayString(product.value.images.length), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "product-intro" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "title-row" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_view, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_text, { class: "title" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(product.value.title), 1)
                            ]),
                            _: 1
                          }),
                          product.value.richTitle ? (openBlock(), createBlock(_component_v_uni_text, {
                            key: 0,
                            class: "rich-title"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(product.value.richTitle), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, { class: "title-actions" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_button, {
                            class: normalizeClass(["icon-button", { active: favorite.value }]),
                            "data-action-id": "detail:favorite",
                            onClick: toggleFavorite
                          }, {
                            default: withCtx(() => [
                              createTextVNode("♥")
                            ]),
                            _: 1
                          }, 8, ["class"]),
                          createVNode(_component_v_uni_button, {
                            class: "icon-button",
                            "open-type": "share",
                            "data-action-id": "detail:share",
                            onClick: shareFallback
                          }, {
                            default: withCtx(() => [
                              createTextVNode("↗")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "price-row" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, { class: "price" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(price(displayPrice.value)), 1),
                          !selectedCombination.value ? (openBlock(), createElementBlock("small", { key: 0 }, "起")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_view, {
                        class: normalizeClass(["preorder-pill", { disabled: !selectionReady.value }]),
                        "data-action-id": "detail:add-preorder",
                        onClick: addPreorder
                      }, {
                        default: withCtx(() => [
                          createTextVNode("加入预选")
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  }),
                  product.value.delivery ? (openBlock(), createBlock(_component_v_uni_view, {
                    key: 0,
                    class: "delivery"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(product.value.delivery), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_v_uni_view, { class: "benefits" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, null, {
                        default: withCtx(() => [
                          createTextVNode("会员权益")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_text, {
                        "data-action-id": "detail:benefit:profile",
                        onClick: _cache[6] || (_cache[6] = ($event) => benefit("profile"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode("完善资料有礼")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_text, {
                        "data-action-id": "detail:benefit:invite",
                        onClick: _cache[7] || (_cache[7] = ($event) => benefit("invite"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode("邀请有礼")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              product.value.config ? (openBlock(), createElementBlock("div", { key: "yc", class: "yc-wrap", style: "margin-top:0.5625rem;background:#fff", onVnodeMounted: (vn) => { if (!cfgState) cfgState = defaultState(product.value.config); mountConfig(vn.el, product.value, cfgState); } })) : createVNode(_component_v_uni_view, { class: "specs" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(product.value.specifications.filter((g) => !g.embedIn), (group) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: group.id,
                      class: "spec-section",
                      "data-spec-group-id": group.id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_view, {
                          class: "spec-summary",
                          "data-action-id": `detail:spec-group:${group.id}`,
                          onClick: ($event) => toggleSpec(group)
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "spec-icon", style: { backgroundImage: `url(./static/yuhu/spec-${/面料|颜色/.test(group.name) ? "fabric" : /配件|配置/.test(group.name) ? "gear" : "sofa"}.png)` } }),
                            createVNode(_component_v_uni_text, { class: "spec-name" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(group.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            choiceFor(group) ? (openBlock(), createBlock(_component_v_uni_text, {
                              key: 0,
                              class: "selected-label"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(choiceLabel(group)), 1)
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock(_component_v_uni_text, {
                              key: 1,
                              class: "selected-label missing"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("未选择")
                              ]),
                              _: 1
                            })),
                            createVNode("span", { class: normalizeClass(["chevron", { up: openSpecGroup.value === group.id }]) }, null, 2)
                          ]),
                          _: 2
                        }, 1032, ["data-action-id", "onClick"]),
                        openSpecGroup.value === group.id ? (openBlock(), createBlock(_component_v_uni_view, {
                          key: 0,
                          class: "choice-grid"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(choiceItems(group), ({ g: cg, c: choice }) => {
                              return openBlock(), createBlock(_component_v_uni_view, {
                                key: choice.id,
                                class: normalizeClass(["choice", { selected: isSel(cg, choice), "choice-grade": !!embeddedFor(group) && cg === group && !choice.sub, "choice-sub": !!choice.sub, "choice-color": cg !== group }]),
                                "data-spec-choice-id": choice.id,
                                "data-action-id": `spec:${cg.id}:${choice.id}`,
                                onClick: ($event) => choose(cg, choice)
                              }, {
                                default: withCtx(() => [
                                  choice.image ? (openBlock(), createBlock(_component_v_uni_image, {
                                    key: 0,
                                    class: "choice-image",
                                    src: imageSource(choice.image),
                                    mode: "aspectFill",
                                    "lazy-load": ""
                                  }, null, 8, ["src"])) : createCommentVNode("", true),
                                  createVNode(_component_v_uni_view, { class: "choice-copy" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_uni_text, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(choice.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      choice.description ? (openBlock(), createBlock(_component_v_uni_text, {
                                        key: 0,
                                        class: "choice-description"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(choice.description), 1)
                                        ]),
                                        _: 2
                                      }, 1024)) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["class", "data-spec-choice-id", "data-action-id", "onClick"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["data-spec-group-id"]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                id: "section-detail",
                class: "info-section"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, { class: "block-title" }, {
                    default: withCtx(() => [
                      createTextVNode("产品信息")
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(product.value.parameters, (item) => {
                    return openBlock(), createBlock(_component_v_uni_view, {
                      key: item.id,
                      class: "info-row"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, { class: "info-name" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, { class: "info-value" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.content), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, { class: "detail-images" }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, { class: "block-title" }, {
                    default: withCtx(() => [
                      createTextVNode("图文详情")
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(product.value.videos, (video) => {
                    return openBlock(), createBlock(_component_v_uni_video, {
                      key: video.id,
                      class: "detail-video",
                      src: imageSource(video.sourceUrl),
                      controls: "",
                      autoplay: false,
                      preload: "none",
                      "object-fit": "contain",
                      "data-video-id": video.id
                    }, null, 8, ["src", "data-video-id"]);
                  }), 128)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(product.value.images.slice(1), (image) => {
                    return openBlock(), createBlock(_component_v_uni_image, {
                      key: `detail-${image.id}`,
                      class: "detail-image",
                      src: imageSource(image.sourceUrl),
                      mode: "widthFix",
                      "lazy-load": ""
                    }, null, 8, ["src"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : activeTab.value === "cp" ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 1,
            id: "section-cp",
            class: "secondary-section cp-section"
          }, {
            default: withCtx(() => {
              var _a2, _b2, _c, _d, _e, _f;
              return [
                createVNode(_component_v_uni_view, { class: "engagement-heading" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_text, { class: "block-title" }, {
                      default: withCtx(() => [
                        createTextVNode("相关推荐")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, null, {
                      default: withCtx(() => {
                        var _a3, _b3;
                        return [
                          createTextVNode(toDisplayString(((_b3 = (_a3 = engagement.value) == null ? void 0 : _a3.recommendations) == null ? void 0 : _b3.length) || 0) + "件", 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                ((_c = (_b2 = (_a2 = engagement.value) == null ? void 0 : _a2.source) == null ? void 0 : _b2.recommendations) == null ? void 0 : _c.status) === "captured" && engagement.value.recommendations.length ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 0,
                  class: "cp-grid"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(engagement.value.recommendations, (item) => {
                      return openBlock(), createBlock(_component_v_uni_view, {
                        key: item.id,
                        class: "cp-card",
                        "data-cp-id": item.id,
                        "data-action-id": `detail:cp:${item.id}`,
                        onClick: ($event) => openRecommendation(item)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_image, {
                            src: engagementImage(item.image, item.imageRemoteUrl),
                            mode: "aspectFit"
                          }, null, 8, ["src"]),
                          createVNode(_component_v_uni_text, { class: "cp-title" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_uni_text, { class: "cp-price" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(price(item.priceYuan)) + "起", 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["data-cp-id", "data-action-id", "onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })) : ((_f = (_e = (_d = engagement.value) == null ? void 0 : _d.source) == null ? void 0 : _e.recommendations) == null ? void 0 : _f.status) === "captured" ? (openBlock(), createBlock(_component_v_uni_text, {
                  key: 1,
                  class: "engagement-empty",
                  "data-cp-state": "captured-empty"
                }, {
                  default: withCtx(() => [
                    createTextVNode("暂无搭配推荐")
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(_component_v_uni_text, {
                  key: 2,
                  class: "engagement-error",
                  "data-cp-state": "missing"
                }, {
                  default: withCtx(() => [
                    createTextVNode("CP推荐数据未采集")
                  ]),
                  _: 1
                }))
              ];
            }),
            _: 1
          })) : (openBlock(), createBlock(_component_v_uni_view, {
            key: 2,
            id: "section-reviews",
            class: "secondary-section review-section"
          }, {
            default: withCtx(() => {
              var _a2, _b2, _c, _d, _e, _f;
              return [
                createVNode(_component_v_uni_view, { class: "engagement-heading" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_text, { class: "block-title" }, {
                      default: withCtx(() => [
                        createTextVNode("用户评价")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_uni_text, { "data-review-total": "" }, {
                      default: withCtx(() => {
                        var _a3, _b3;
                        return [
                          createTextVNode("共 " + toDisplayString(((_b3 = (_a3 = engagement.value) == null ? void 0 : _a3.reviews) == null ? void 0 : _b3.total) || 0) + " 条", 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                ((_c = (_b2 = (_a2 = engagement.value) == null ? void 0 : _a2.source) == null ? void 0 : _b2.reviews) == null ? void 0 : _c.status) === "captured" && engagement.value.reviews.items.length ? (openBlock(), createBlock(_component_v_uni_view, {
                  key: 0,
                  class: "review-list",
                  "data-review-state": "captured-content"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(engagement.value.reviews.items, (review) => {
                      return openBlock(), createBlock(_component_v_uni_view, {
                        key: review.id,
                        class: "review-card",
                        "data-review-id": review.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_uni_view, { class: "review-author" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_image, {
                                src: engagementImage(review.avatar, review.avatarRemoteUrl),
                                mode: "aspectFill"
                              }, null, 8, ["src"]),
                              createVNode(_component_v_uni_view, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_uni_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(review.nickName || "微信用户"), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_uni_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(formatReviewDate(review.createdAt)) + toDisplayString(review.address ? ` · ${review.address}` : ""), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_uni_text, { class: "review-content" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(review.content), 1)
                            ]),
                            _: 2
                          }, 1024),
                          review.images.length ? (openBlock(), createBlock(_component_v_uni_view, {
                            key: 0,
                            class: "review-images"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(review.images, (image, imageIndex) => {
                                var _a3;
                                return openBlock(), createBlock(_component_v_uni_image, {
                                  key: image,
                                  src: engagementImage(image, (_a3 = review.imageRemoteUrls) == null ? void 0 : _a3[imageIndex]),
                                  mode: "aspectFill",
                                  "data-action-id": `detail:review-image:${review.id}:${imageIndex}`,
                                  onClick: ($event) => previewReview(review, image, imageIndex)
                                }, null, 8, ["src", "data-action-id", "onClick"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          createVNode(_component_v_uni_view, { class: "review-meta" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_uni_text, null, {
                                default: withCtx(() => [
                                  createTextVNode("♡ " + toDisplayString(review.likes), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_uni_text, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(review.replies.length) + " 条回复", 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          review.replies.length ? (openBlock(), createBlock(_component_v_uni_view, {
                            key: 1,
                            class: "review-replies"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(review.replies, (reply) => {
                                return openBlock(), createBlock(_component_v_uni_text, {
                                  key: reply.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_uni_text, { class: "reply-name" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(reply.nickName || "御虎") + "：", 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createTextVNode(toDisplayString(reply.content), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["data-review-id"]);
                    }), 128)),
                    !engagement.value.reviews.complete ? (openBlock(), createBlock(_component_v_uni_text, {
                      key: 0,
                      class: "review-more"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("首屏已采集 " + toDisplayString(engagement.value.reviews.captured) + " 条，共 " + toDisplayString(engagement.value.reviews.total) + " 条", 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                })) : ((_f = (_e = (_d = engagement.value) == null ? void 0 : _d.source) == null ? void 0 : _e.reviews) == null ? void 0 : _f.status) === "captured" ? (openBlock(), createBlock(_component_v_uni_text, {
                  key: 1,
                  class: "engagement-empty",
                  "data-review-state": "captured-empty"
                }, {
                  default: withCtx(() => [
                    createTextVNode("暂无用户评价")
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(_component_v_uni_text, {
                  key: 2,
                  class: "engagement-error",
                  "data-review-state": "missing"
                }, {
                  default: withCtx(() => [
                    createTextVNode("用户评价数据未采集")
                  ]),
                  _: 1
                }))
              ];
            }),
            _: 1
          })),
          cpPreview.value ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 3,
            class: "cp-preview-mask",
            "data-action-id": "detail:cp-preview-close",
            onClick: _cache[10] || (_cache[10] = ($event) => cpPreview.value = null)
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "cp-preview",
                "data-cp-preview-id": cpPreview.value.id,
                onClick: _cache[9] || (_cache[9] = withModifiers(() => {
                }, ["stop"]))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_text, {
                    class: "cp-preview-close",
                    "data-action-id": "detail:cp-preview-close-button",
                    onClick: _cache[8] || (_cache[8] = ($event) => cpPreview.value = null)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("×")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_image, {
                    src: engagementImage(cpPreview.value.image, cpPreview.value.imageRemoteUrl),
                    mode: "aspectFit"
                  }, null, 8, ["src"]),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(cpPreview.value.title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(price(cpPreview.value.priceYuan)) + "起", 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_text, { class: "cp-preview-note" }, {
                    default: withCtx(() => [
                      createTextVNode("当前已采集推荐卡片资料")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["data-cp-preview-id"])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          product.value.questions.length ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 4,
            class: "questions"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_text, { class: "block-title" }, {
                default: withCtx(() => [
                  createTextVNode("常见问题")
                ]),
                _: 1
              }),
              (openBlock(true), createElementBlock(Fragment, null, renderList(product.value.questions, (question) => {
                return openBlock(), createBlock(_component_v_uni_view, {
                  key: question.id,
                  class: "question",
                  "data-action-id": `question:${question.id}`,
                  onClick: ($event) => openQuestions[question.id] = !openQuestions[question.id]
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_uni_view, { class: "question-title" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(question.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_uni_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(openQuestions[question.id] ? "−" : "+"), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    openQuestions[question.id] ? (openBlock(), createBlock(_component_v_uni_text, {
                      key: 0,
                      class: "answer"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(question.content), 1)
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["data-action-id", "onClick"]);
              }), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true),
          preorderOpen.value ? (openBlock(), createBlock(_component_v_uni_view, {
            key: 5,
            class: "preorder-mask",
            "data-action-id": "detail:preorder-close",
            onClick: _cache[13] || (_cache[13] = ($event) => preorderOpen.value = false)
          }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "preorder-sheet",
                onClick: _cache[12] || (_cache[12] = withModifiers(() => {
                }, ["stop"]))
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_view, { class: "preorder-head" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_uni_text, null, {
                        default: withCtx(() => [
                          createTextVNode("预选清单")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_uni_text, {
                        "data-action-id": "detail:preorder-close-button",
                        onClick: _cache[11] || (_cache[11] = ($event) => preorderOpen.value = false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("×")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "preorder-product" }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createVNode(_component_v_uni_image, {
                          src: imageSource(((_a2 = selectedCombination.value) == null ? void 0 : _a2.image) || product.value.coverImage),
                          mode: "aspectFit"
                        }, null, 8, ["src"]),
                        createVNode(_component_v_uni_view, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_uni_text, { class: "preorder-title" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(product.value.title), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_uni_text, { class: "preorder-price" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(price(displayPrice.value)), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, { class: "preorder-specs" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(product.value.specifications, (group) => {
                        return openBlock(), createBlock(_component_v_uni_text, {
                          key: group.id
                        }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString(group.name) + "：" + toDisplayString((_a2 = choiceFor(group)) == null ? void 0 : (_a2.fullName || _a2.name)), 1)
                            ];
                          }),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_uni_view, {
                    class: "preorder-add",
                    "data-action-id": "detail:preorder-add-cart",
                    onClick: addToCart
                  }, {
                    default: withCtx(() => [
                      createTextVNode("加入购物车")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_v_uni_view, { class: "bottom-bar" }, {
            default: withCtx(() => [
              createVNode(_component_v_uni_view, {
                class: "bottom-icon",
                "data-action-id": "detail:service",
                onClick: goService
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_image, {
                    src: imageSource(unref(serviceIcon)),
                    mode: "aspectFit"
                  }, null, 8, ["src"]),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("咨询")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "bottom-icon",
                "data-action-id": "detail:cart",
                onClick: goCart
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_uni_image, {
                    src: imageSource(unref(cartIcon)),
                    mode: "aspectFit"
                  }, null, 8, ["src"]),
                  cartCount.value ? (openBlock(), createBlock(_component_v_uni_text, {
                    key: 0,
                    class: "cart-badge"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(cartCount.value), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_v_uni_text, null, {
                    default: withCtx(() => [
                      createTextVNode("购物车")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "preorder-button",
                "data-action-id": "detail:preorder",
                onClick: openPreorder
              }, {
                default: withCtx(() => [
                  createTextVNode("预选清单")
                ]),
                _: 1
              }),
              createVNode(_component_v_uni_view, {
                class: "add-cart-button",
                "data-action-id": "detail:add-cart",
                onClick: addToCart
              }, {
                default: withCtx(() => [
                  createTextVNode("加入购物车")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["data-product-id"])) : (openBlock(), createBlock(_component_v_uni_view, {
        key: 1,
        class: "not-found"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_uni_text, null, {
            default: withCtx(() => [
              createTextVNode("未找到该商品")
            ]),
            _: 1
          }),
          createVNode(_component_v_uni_view, {
            "data-action-id": "detail:not-found:return-products",
            onClick: _cache[14] || (_cache[14] = ($event) => reLaunch({ url: "/pages/category/category" }))
          }, {
            default: withCtx(() => [
              createTextVNode("返回产品列表")
            ]),
            _: 1
          })
        ]),
        _: 1
      }));
    };
  }
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8834f0d"]]);
export {
  detail as default
};
