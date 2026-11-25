const schemaVersion = 1;
const source = {
  kind: "saved-wechat-api-response",
  responseFile: "00031-549002b720fb51b5.json",
  responsePath: "artifacts/brands/班兰/runs/20261117T202617Z-af6ba06d/responses/00031-549002b720fb51b5.json",
  assetsManifestPath: "artifacts/brands/班兰/runs/20261117T202617Z-af6ba06d/referenced-assets/manifest.json",
  originalRoute: "/pages/category/category",
  childRoute: "/pages/product/list/list"
};
const design = {
  viewportWidthRpx: 750,
  category: {
    layout: "fixed-sidebar-with-scrollable-content",
    sidebarWidthRpx: 220,
    contentWidthRpx: 530,
    contentPaddingRpx: 20,
    cardGapRpx: 20,
    cardHeightRpx: 275,
    activeColor: "#9e815d",
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif",
    responsive: {
      strategy: "fluid-rpx",
      maxWidthRpx: 750
    }
  },
  productList: {
    layout: "two-column-flex-grid",
    columns: 2,
    columnGapPercent: 2,
    cardWidthPercent: 49,
    titleFontSizeRpx: 30,
    priceFontSizeRpx: 30,
    priceColor: "#9e815d",
    imageObjectFit: "contain",
    responsive: {
      strategy: "fluid-rpx",
      maxWidthRpx: 750
    }
  }
};
const categories = [
  {
    id: "120",
    name: "2026新品",
    children: [
      {
        id: "121",
        name: "2026新品",
        action: {
          type: "product-list",
          target: "121"
        },
        image: {
          localPath: "/static/banlan/category/category-120-121-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1787275690888_$$_一级类别-20260821新品.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1787275690888_%24%24_%E4%B8%80%E7%BA%A7%E7%B1%BB%E5%88%AB-20260821%E6%96%B0%E5%93%81.jpg",
          sha256: "293725369cd39c2d86852badc65cdc8cce7ba398677d942e9f8c6810fa918fa0",
          bytes: 241118,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-120-121-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1788924811683_$$_二级类别置顶图-2026新品.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1788924811683_%24%24_%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE-2026%E6%96%B0%E5%93%81.jpg",
          sha256: "39e346702718f33e1107ee8339858e602e7ef1081cc3a034b359c0d6e6f2ecac",
          bytes: 409562,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    editableFields: [
      "name",
      "children"
    ]
  },
  {
    id: "37",
    name: "沙发",
    children: [
      {
        id: "77",
        name: "沙发",
        action: {
          type: "product-list",
          target: "77"
        },
        image: {
          localPath: "/static/banlan/category/category-37-77-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1605854217858_$$_沙发.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1605854217858_%24%24_%E6%B2%99%E5%8F%91.jpg",
          sha256: "33a4a8aa8095b639067dccca8892f27c953cc3c658f087799dcf1a4e23eb41b5",
          bytes: 143613,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-37-77-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别BANNER图/1605853880870_$$_沙发.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%ABBANNER%E5%9B%BE/1605853880870_%24%24_%E6%B2%99%E5%8F%91.jpg",
          sha256: "0db0ec647a3c4097480adfd3b8a5d67fb076c82526d06f6a2e0e997c70167843",
          bytes: 226860,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    editableFields: [
      "name",
      "children"
    ]
  },
  {
    id: "51",
    name: "床",
    children: [
      {
        id: "76",
        name: "床",
        action: {
          type: "product-list",
          target: "76"
        },
        image: {
          localPath: "/static/banlan/category/category-51-76-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1705385608421_$$_04.床20240116.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1705385608421_%24%24_04.%E5%BA%8A20240116.jpg",
          sha256: "8114f350f405c623d5666a75b5d5b3c4831b57593bda41088fe318d66b3cbb0b",
          bytes: 108330,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-51-76-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1705385635829_$$_04.床202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1705385635829_%24%24_04.%E5%BA%8A202401.jpg",
          sha256: "df493df2bf8ac3935d08ecbac2b77b219be0cd1f9842b83e99ed6b1b0ebf92f8",
          bytes: 145015,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    editableFields: [
      "name",
      "children"
    ]
  },
  {
    id: "38",
    name: "椅榻",
    children: [
      {
        id: "48",
        name: "扶手椅",
        action: {
          type: "product-list",
          target: "48"
        },
        image: {
          localPath: "/static/banlan/category/category-38-48-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1605854217672_$$_扶手椅.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1605854217672_%24%24_%E6%89%B6%E6%89%8B%E6%A4%85.jpg",
          sha256: "0e64f27e478701688270b04e1a6589304a595be99c93ab11dc334588aaed62b3",
          bytes: 141614,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-38-48-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别BANNER图/1605853880685_$$_扶手椅.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%ABBANNER%E5%9B%BE/1605853880685_%24%24_%E6%89%B6%E6%89%8B%E6%A4%85.jpg",
          sha256: "cd6de5b729dcb5bc3dd1e9a2fa5e2603dd725d2db04eedf3d015945fe72f1e0c",
          bytes: 219664,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "49",
        name: "椅",
        action: {
          type: "product-list",
          target: "49"
        },
        image: {
          localPath: "/static/banlan/category/category-38-49-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1704788314089_$$_05.椅榻.椅202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1704788314089_%24%24_05.%E6%A4%85%E6%A6%BB.%E6%A4%85202401.jpg",
          sha256: "3e494468fbbcaa5a215f66f8dfd8a9ac11ac877037f87b33d10b9b3ac29f0df9",
          bytes: 106288,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-38-49-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1704791981950_$$_二级-椅榻.椅202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1704791981950_%24%24_%E4%BA%8C%E7%BA%A7-%E6%A4%85%E6%A6%BB.%E6%A4%85202401.jpg",
          sha256: "42bb4c858650d250236b3229e63bc7302dde8b5de93fb1d329fe044d14f301b1",
          bytes: 174219,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "50",
        name: "榻凳",
        action: {
          type: "product-list",
          target: "50"
        },
        image: {
          localPath: "/static/banlan/category/category-38-50-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1704788314067_$$_05.椅榻.榻凳202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1704788314067_%24%24_05.%E6%A4%85%E6%A6%BB.%E6%A6%BB%E5%87%B3202401.jpg",
          sha256: "04aaa906ef84de413f275d96a972ea744aa71f9021a151f464e0762b4563342d",
          bytes: 107417,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-38-50-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1704791981954_$$_二级-椅榻.榻凳202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1704791981954_%24%24_%E4%BA%8C%E7%BA%A7-%E6%A4%85%E6%A6%BB.%E6%A6%BB%E5%87%B3202401.jpg",
          sha256: "cafb3f6862be2bb69c355cec2a20a75c9c56466410c5a8cb4a360abca4986c48",
          bytes: 177538,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    editableFields: [
      "name",
      "children"
    ]
  },
  {
    id: "53",
    name: "桌几",
    children: [
      {
        id: "55",
        name: "餐桌",
        action: {
          type: "product-list",
          target: "55"
        },
        image: {
          localPath: "/static/banlan/category/category-53-55-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1704790214226_$$_06.桌几.餐桌202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1704790214226_%24%24_06.%E6%A1%8C%E5%87%A0.%E9%A4%90%E6%A1%8C202401.jpg",
          sha256: "6e05246ac247ff3c6c4fa6bcf68a0f3fe48accdcd78ef09f117f5d8bf7ca0704",
          bytes: 108598,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-53-55-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1704791981917_$$_二级-桌几.餐桌202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1704791981917_%24%24_%E4%BA%8C%E7%BA%A7-%E6%A1%8C%E5%87%A0.%E9%A4%90%E6%A1%8C202401.jpg",
          sha256: "9e92b3316a6dd957fa76ebf4dceb7d5678eeb89a874b0e4e647175d8274a7f5d",
          bytes: 172591,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "81",
        name: "书桌",
        action: {
          type: "product-list",
          target: "81"
        },
        image: {
          localPath: "/static/banlan/category/category-53-81-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1605854217861_$$_书桌.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1605854217861_%24%24_%E4%B9%A6%E6%A1%8C.jpg",
          sha256: "e6fb377620a00d41e2c31a2724a101ee10e8b5dc7721526a0ab0536f98c9d989",
          bytes: 107871,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-53-81-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别BANNER图/1605853880877_$$_书桌.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%ABBANNER%E5%9B%BE/1605853880877_%24%24_%E4%B9%A6%E6%A1%8C.jpg",
          sha256: "76f4c1afae5b71f76021c386bf4d90a31fe51f2563aa87936a4cbac6322880c6",
          bytes: 152131,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "56",
        name: "几",
        action: {
          type: "product-list",
          target: "56"
        },
        image: {
          localPath: "/static/banlan/category/category-53-56-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1704788314108_$$_06.桌几.几202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1704788314108_%24%24_06.%E6%A1%8C%E5%87%A0.%E5%87%A0202401.jpg",
          sha256: "6afa9f2e1f4b852aeafcc202801327f39b679a5209a977edb09c474243497a28",
          bytes: 102043,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-53-56-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1704791981991_$$_二级-桌几.几202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1704791981991_%24%24_%E4%BA%8C%E7%BA%A7-%E6%A1%8C%E5%87%A0.%E5%87%A0202401.jpg",
          sha256: "4694f802a221c779d3f7ec9e77f44c8b8a627bd5d7dc399cd241df40def27152",
          bytes: 161807,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    editableFields: [
      "name",
      "children"
    ]
  },
  {
    id: "57",
    name: "柜架",
    children: [
      {
        id: "63",
        name: "电视柜",
        action: {
          type: "product-list",
          target: "63"
        },
        image: {
          localPath: "/static/banlan/category/category-57-63-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1605854217643_$$_电视柜.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1605854217643_%24%24_%E7%94%B5%E8%A7%86%E6%9F%9C.jpg",
          sha256: "d4218fde06334af7e13daa26432d4724a395b00edcfd8a8942949ef3ec0dfd02",
          bytes: 56880,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-57-63-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别BANNER图/1605853880656_$$_电视柜.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%ABBANNER%E5%9B%BE/1605853880656_%24%24_%E7%94%B5%E8%A7%86%E6%9F%9C.jpg",
          sha256: "161934210c085291e60e069d61ce07b4eb8fda511a69161a8dfca14d47501fc1",
          bytes: 132239,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "62",
        name: "功能柜",
        action: {
          type: "product-list",
          target: "62"
        },
        image: {
          localPath: "/static/banlan/category/category-57-62-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1605854217654_$$_多功能柜.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1605854217654_%24%24_%E5%A4%9A%E5%8A%9F%E8%83%BD%E6%9F%9C.jpg",
          sha256: "888f699f179019116d50b30d0a2ac04747e23ae4b8e290f318f0ee10eb173f9d",
          bytes: 49978,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-57-62-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别BANNER图/1605853880669_$$_多功能柜.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%ABBANNER%E5%9B%BE/1605853880669_%24%24_%E5%A4%9A%E5%8A%9F%E8%83%BD%E6%9F%9C.jpg",
          sha256: "ec8fcd4648205a0cbb447d420ade9be8585db67986507a0d99b522bb1cd852aa",
          bytes: 75125,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "65",
        name: "抽屉柜",
        action: {
          type: "product-list",
          target: "65"
        },
        image: {
          localPath: "/static/banlan/category/category-57-65-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1704790214242_$$_07.柜架.抽屉柜2024.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1704790214242_%24%24_07.%E6%9F%9C%E6%9E%B6.%E6%8A%BD%E5%B1%89%E6%9F%9C2024.jpg",
          sha256: "09f5ceb1f8f2989eb0dedca3fe975c37fb6986d0a48ad18b1a248dcc24a74e0e",
          bytes: 71784,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-57-65-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1704791981933_$$_二级-柜架.抽屉柜202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1704791981933_%24%24_%E4%BA%8C%E7%BA%A7-%E6%9F%9C%E6%9E%B6.%E6%8A%BD%E5%B1%89%E6%9F%9C202401.jpg",
          sha256: "d3f5acf605569c8bbf547c315cb84a8411d5c5a3711221f44e08a2bd048250a0",
          bytes: 185053,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "60",
        name: "书柜",
        action: {
          type: "product-list",
          target: "60"
        },
        image: {
          localPath: "/static/banlan/category/category-57-60-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1605854217859_$$_书柜.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1605854217859_%24%24_%E4%B9%A6%E6%9F%9C.jpg",
          sha256: "fa50402f9d57f92008d181364b494600d528a1f9d2726f6ded3715a079190d18",
          bytes: 81779,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-57-60-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别BANNER图/1605853880873_$$_书柜.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%ABBANNER%E5%9B%BE/1605853880873_%24%24_%E4%B9%A6%E6%9F%9C.jpg",
          sha256: "705157dc9d2f60e03ce011037f76a32fc3b058c92adba9afa7a59c57ae9a94f8",
          bytes: 195973,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "59",
        name: "书架",
        action: {
          type: "product-list",
          target: "59"
        },
        image: {
          localPath: "/static/banlan/category/category-57-59-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1605854217860_$$_书架.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1605854217860_%24%24_%E4%B9%A6%E6%9E%B6.jpg",
          sha256: "57e2b1b21817370f8b132e6b2c84070be07c3d5d265648185e83cb7c4810a9fc",
          bytes: 91139,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-57-59-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别BANNER图/1605853880875_$$_书架.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%ABBANNER%E5%9B%BE/1605853880875_%24%24_%E4%B9%A6%E6%9E%B6.jpg",
          sha256: "224d1746ab9d7a214ef9bb5f405e3eeb83baa6ae5172f66041b64ba0e8e55616",
          bytes: 225020,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "61",
        name: "挂柜",
        action: {
          type: "product-list",
          target: "61"
        },
        image: {
          localPath: "/static/banlan/category/category-57-61-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1605854217682_$$_挂柜.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1605854217682_%24%24_%E6%8C%82%E6%9F%9C.jpg",
          sha256: "40a749768fb3c61d948fb14718f8849b47ff014cbb65574a84dbc836afbab981",
          bytes: 50554,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-57-61-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别BANNER图/1605853880700_$$_挂柜.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%ABBANNER%E5%9B%BE/1605853880700_%24%24_%E6%8C%82%E6%9F%9C.jpg",
          sha256: "af3a9d6455bc134f333cc1fe49326d6f9bce96ee4a473205cc27e29a697e134e",
          bytes: 128070,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "64",
        name: "床边柜",
        action: {
          type: "product-list",
          target: "64"
        },
        image: {
          localPath: "/static/banlan/category/category-57-64-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1704788314149_$$_07.柜架.床边柜202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1704788314149_%24%24_07.%E6%9F%9C%E6%9E%B6.%E5%BA%8A%E8%BE%B9%E6%9F%9C202401.jpg",
          sha256: "c8fd513041383025e79588a271e012e68660e418730782a7459993106b24a3ab",
          bytes: 54154,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-57-64-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1704792327583_$$_二级-柜架.床边柜202401.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1704792327583_%24%24_%E4%BA%8C%E7%BA%A7-%E6%9F%9C%E6%9E%B6.%E5%BA%8A%E8%BE%B9%E6%9F%9C202401.jpg",
          sha256: "d20afa429276176f97b07a88c45051a77ec87a48922ef05139cbbc1a94bc3561",
          bytes: 127737,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    editableFields: [
      "name",
      "children"
    ]
  },
  {
    id: "66",
    name: "小居品",
    children: [
      {
        id: "117",
        name: "屏风",
        action: {
          type: "product-list",
          target: "117"
        },
        image: {
          localPath: "/static/banlan/category/category-66-117-card.jpg",
          sourcePath: "mp-banlan-product/测试商品-主图/1726124755912_$$_08.小居品.屏风202409.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%B5%8B%E8%AF%95%E5%95%86%E5%93%81-%E4%B8%BB%E5%9B%BE/1726124755912_%24%24_08.%E5%B0%8F%E5%B1%85%E5%93%81.%E5%B1%8F%E9%A3%8E202409.jpg",
          sha256: "82b332befe91ee3587d2eda4b7bcf9b0ce7b1953edf22a9b3ac65f0d7c7fed6a",
          bytes: 68575,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-66-117-hero.jpg",
          sourcePath: "mp-banlan-product/测试商品-主图/1726124771627_$$_08.小居品.屏风.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E6%B5%8B%E8%AF%95%E5%95%86%E5%93%81-%E4%B8%BB%E5%9B%BE/1726124771627_%24%24_08.%E5%B0%8F%E5%B1%85%E5%93%81.%E5%B1%8F%E9%A3%8E.jpg",
          sha256: "a74f1480789e8653bd24742335d0f47697149afd6353e1203d464c3ba48c4b68",
          bytes: 176935,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "68",
        name: "衣架",
        action: {
          type: "product-list",
          target: "68"
        },
        image: {
          localPath: "/static/banlan/category/category-66-68-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1605854217867_$$_衣架.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1605854217867_%24%24_%E8%A1%A3%E6%9E%B6.jpg",
          sha256: "d2da6235a333967c6620f568956bc5bc9dd01fb2b691b869d860b7129375bab9",
          bytes: 46411,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-66-68-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别BANNER图/1605853880891_$$_衣架.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%ABBANNER%E5%9B%BE/1605853880891_%24%24_%E8%A1%A3%E6%9E%B6.jpg",
          sha256: "02526fabecafa393043094df8299545f73b72b13638b6b8b08adb194a8fe0b40",
          bytes: 110861,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "70",
        name: "镜",
        action: {
          type: "product-list",
          target: "70"
        },
        image: {
          localPath: "/static/banlan/category/category-66-70-card.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1732872865144_$$_08.小居品.镜子.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1732872865144_%24%24_08.%E5%B0%8F%E5%B1%85%E5%93%81.%E9%95%9C%E5%AD%90.jpg",
          sha256: "138cce30d1bff7f7af1ad05e2872e7686c73d3522df2f52a8a702c26b9bddb72",
          bytes: 59635,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-66-70-hero.jpg",
          sourcePath: "mp-banlan-product/用户分享获取兰通宝/1732873495902_$$_08.小居品.镜.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%94%A8%E6%88%B7%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96%E5%85%B0%E9%80%9A%E5%AE%9D/1732873495902_%24%24_08.%E5%B0%8F%E5%B1%85%E5%93%81.%E9%95%9C.jpg",
          sha256: "b92df11b1c22c634b2191c89b8fb5bae1dffe5eb3198166ea41cf4c4a584ea2f",
          bytes: 148496,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "69",
        name: "托盘",
        action: {
          type: "product-list",
          target: "69"
        },
        image: {
          localPath: "/static/banlan/category/category-66-69-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1605854217863_$$_托盘.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1605854217863_%24%24_%E6%89%98%E7%9B%98.jpg",
          sha256: "ef8398671affe8a4e1085f4ad918edf6208d16a215d772f6cf11fadb374963d5",
          bytes: 56451,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-66-69-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别BANNER图/1605853880884_$$_托盘.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%ABBANNER%E5%9B%BE/1605853880884_%24%24_%E6%89%98%E7%9B%98.jpg",
          sha256: "80438144ec02adbc28365a32d0299f2c09f149fde66ba84ba6bb4b35f1368f05",
          bytes: 141498,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "67",
        name: "置物格",
        action: {
          type: "product-list",
          target: "67"
        },
        image: {
          localPath: "/static/banlan/category/category-66-67-card.jpg",
          sourcePath: "mp-banlan-product/产品分类列表页/1605854217875_$$_置物格.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%E9%A1%B5/1605854217875_%24%24_%E7%BD%AE%E7%89%A9%E6%A0%BC.jpg",
          sha256: "69e62983e82ab495db221bb80f5aad3e20582fd77a9f5673e1a6f3d536924435",
          bytes: 52618,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-66-67-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别BANNER图/1605853880899_$$_置物格.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%ABBANNER%E5%9B%BE/1605853880899_%24%24_%E7%BD%AE%E7%89%A9%E6%A0%BC.jpg",
          sha256: "ff0de8fcdc6b3224439eab31cfde47b6a237637db9056624032d3c86ee7fdbea",
          bytes: 86992,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "71",
        name: "靠包",
        action: {
          type: "product-list",
          target: "71"
        },
        image: {
          localPath: "/static/banlan/category/category-66-71-card.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1732872865155_$$_08.小居品.靠包.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1732872865155_%24%24_08.%E5%B0%8F%E5%B1%85%E5%93%81.%E9%9D%A0%E5%8C%85.jpg",
          sha256: "c409515b2b4493d6ce6ba48096e0a55a6cd2aa653bf14c7510f4dc61e8aeb236",
          bytes: 76592,
          resourceStatus: "frozen",
          intrinsicWidth: 235,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 0.734375,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-66-71-hero.jpg",
          sourcePath: "mp-banlan-product/用户分享获取兰通宝/1732873161585_$$_08.小居品.靠包.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%94%A8%E6%88%B7%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96%E5%85%B0%E9%80%9A%E5%AE%9D/1732873161585_%24%24_08.%E5%B0%8F%E5%B1%85%E5%93%81.%E9%9D%A0%E5%8C%85.jpg",
          sha256: "02e323d33e7ee2b47e9526a61bda0425fd2c6495f9c8868c7a1c02d3f1906fbc",
          bytes: 115099,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    editableFields: [
      "name",
      "children"
    ]
  },
  {
    id: "122",
    name: "户外",
    children: [
      {
        id: "123",
        name: "户外",
        action: {
          type: "product-list",
          target: "123"
        },
        image: {
          localPath: "/static/banlan/category/category-122-123-card.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1787384228020_$$_2026新品类别图-户外.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1787384228020_%24%24_2026%E6%96%B0%E5%93%81%E7%B1%BB%E5%88%AB%E5%9B%BE-%E6%88%B7%E5%A4%96.jpg",
          sha256: "9f6fad6a05531256e2452263758a0c9586903086daa6312200cb4b2c22a6462d",
          bytes: 182050,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-122-123-hero.jpg",
          sourcePath: "mp-banlan-product/产品二级类别置顶图/1787384228031_$$_二级类别置顶图-户外(1).jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E4%BA%A7%E5%93%81%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE/1787384228031_%24%24_%E4%BA%8C%E7%BA%A7%E7%B1%BB%E5%88%AB%E7%BD%AE%E9%A1%B6%E5%9B%BE-%E6%88%B7%E5%A4%96%281%29.jpg",
          sha256: "4d3b01884b811078c1e19f894370abbc35d2eb9c99f3c887f03be20c28c7e0bd",
          bytes: 426744,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    editableFields: [
      "name",
      "children"
    ]
  },
  {
    id: "89",
    name: "御虎画廊",
    children: [
      {
        id: "90",
        name: "",
        action: {
          type: "product-list",
          target: "90"
        },
        image: {
          localPath: "/static/banlan/category/category-89-90-card.jpg",
          sourcePath: "mp-banlan-product/班兰画廊-麻爱周作品/1605932081309_$$_班兰画廊一级分类图- 麻爱周作品.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A-%E9%BA%BB%E7%88%B1%E5%91%A8%E4%BD%9C%E5%93%81/1605932081309_%24%24_%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A%E4%B8%80%E7%BA%A7%E5%88%86%E7%B1%BB%E5%9B%BE-%20%E9%BA%BB%E7%88%B1%E5%91%A8%E4%BD%9C%E5%93%81.jpg",
          sha256: "25caea124681d9c169ad64b5a7e9f5f888cc69db249d5e9c8541428743d304f8",
          bytes: 123451,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-89-90-hero.jpg",
          sourcePath: "mp-banlan-product/班兰画廊-麻爱周作品/1605932081284_$$_班兰画廊二级BANNER图- 麻爱周作品.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A-%E9%BA%BB%E7%88%B1%E5%91%A8%E4%BD%9C%E5%93%81/1605932081284_%24%24_%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A%E4%BA%8C%E7%BA%A7BANNER%E5%9B%BE-%20%E9%BA%BB%E7%88%B1%E5%91%A8%E4%BD%9C%E5%93%81.jpg",
          sha256: "c2505bd9a1e2c9a5bc94cd922dac9dbe3c6aed45e5e3dcec7b172d53443e9422",
          bytes: 199534,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "94",
        name: "",
        action: {
          type: "product-list",
          target: "94"
        },
        image: {
          localPath: "/static/banlan/category/category-89-94-card.jpg",
          sourcePath: "mp-banlan-product/班兰画廊-韩轶作品/1605932101262_$$_班兰画廊一级分类图- 韩轶作品.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A-%E9%9F%A9%E8%BD%B6%E4%BD%9C%E5%93%81/1605932101262_%24%24_%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A%E4%B8%80%E7%BA%A7%E5%88%86%E7%B1%BB%E5%9B%BE-%20%E9%9F%A9%E8%BD%B6%E4%BD%9C%E5%93%81.jpg",
          sha256: "8703edadc0a82e2fdcdd403dadc7bdb358659bf5cee29446c7b6eace6b285ad9",
          bytes: 57243,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-89-94-hero.jpg",
          sourcePath: "mp-banlan-product/班兰画廊-韩轶作品/1605932101251_$$_班兰画廊二级BANNER图- 韩轶作品.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A-%E9%9F%A9%E8%BD%B6%E4%BD%9C%E5%93%81/1605932101251_%24%24_%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A%E4%BA%8C%E7%BA%A7BANNER%E5%9B%BE-%20%E9%9F%A9%E8%BD%B6%E4%BD%9C%E5%93%81.jpg",
          sha256: "c60bdc49b4f4786b1af9906fb01b45cfe84dc6a304dccf1d9e18d6386dcfd978",
          bytes: 67559,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "112",
        name: "",
        action: {
          type: "product-list",
          target: "112"
        },
        image: {
          localPath: "/static/banlan/category/category-89-112-card.jpg",
          sourcePath: "mp-banlan-product/班兰画廊-WOODNOTES地毯/1666864627158_$$_班兰画廊-地毯-一级类别图.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A-WOODNOTES%E5%9C%B0%E6%AF%AF/1666864627158_%24%24_%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A-%E5%9C%B0%E6%AF%AF-%E4%B8%80%E7%BA%A7%E7%B1%BB%E5%88%AB%E5%9B%BE.jpg",
          sha256: "732b5f8e12b629d9abf1cb37d14c7e70a64b0dd3c4f8ce090c14cdcae1b7cb94",
          bytes: 97240,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-89-112-hero.jpg",
          sourcePath: "mp-banlan-product/班兰画廊-WOODNOTES地毯/1666864627174_$$_班兰画廊-地毯-二级置顶图.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A-WOODNOTES%E5%9C%B0%E6%AF%AF/1666864627174_%24%24_%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A-%E5%9C%B0%E6%AF%AF-%E4%BA%8C%E7%BA%A7%E7%BD%AE%E9%A1%B6%E5%9B%BE.jpg",
          sha256: "32cc420a4f96055c2708289d5af5e627a7b18559a7d0cf603ada052ccdee3b51",
          bytes: 134591,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "103",
        name: "",
        action: {
          type: "product-list",
          target: "103"
        },
        image: {
          localPath: "/static/banlan/category/category-89-103-card.jpg",
          sourcePath: "mp-banlan-product/周边商品-类别图/1620378473857_$$_班兰画廊类别-周边商品-1.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%91%A8%E8%BE%B9%E5%95%86%E5%93%81-%E7%B1%BB%E5%88%AB%E5%9B%BE/1620378473857_%24%24_%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A%E7%B1%BB%E5%88%AB-%E5%91%A8%E8%BE%B9%E5%95%86%E5%93%81-1.jpg",
          sha256: "8750e282658e97f850c58561d515adc78d1b0345d92484ba2c4dbf51421f7672",
          bytes: 41233,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-89-103-hero.jpg",
          sourcePath: "mp-banlan-product/周边商品-类别图/1620378473872_$$_班兰画廊类别-周边商品-2.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%91%A8%E8%BE%B9%E5%95%86%E5%93%81-%E7%B1%BB%E5%88%AB%E5%9B%BE/1620378473872_%24%24_%E7%8F%AD%E5%85%B0%E7%94%BB%E5%BB%8A%E7%B1%BB%E5%88%AB-%E5%91%A8%E8%BE%B9%E5%95%86%E5%93%81-2.jpg",
          sha256: "d80de73997a27499136bcc742259ba7ccd493538783fc7cc2406b4879c34a14c",
          bytes: 38006,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    editableFields: [
      "name",
      "children"
    ]
  },
  {
    id: "93",
    name: "增值服务",
    children: [
      {
        id: "96",
        name: "石材养护包",
        action: {
          type: "product-list",
          target: "96"
        },
        image: {
          localPath: "/static/banlan/category/category-93-96-card.jpg",
          sourcePath: "mp-banlan-product/增值服务/1605871273906_$$_增值服务-石材护理包-即将上线.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1/1605871273906_%24%24_%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1-%E7%9F%B3%E6%9D%90%E6%8A%A4%E7%90%86%E5%8C%85-%E5%8D%B3%E5%B0%86%E4%B8%8A%E7%BA%BF.jpg",
          sha256: "e754ae6021b0828d7b4e82fea034ad766fb90066c82c09ad219064f38817a81a",
          bytes: 81867,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-93-96-hero.jpg",
          sourcePath: "mp-banlan-product/增值服务/1605531258349_$$_750x320--石材护理包.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1/1605531258349_%24%24_750x320--%E7%9F%B3%E6%9D%90%E6%8A%A4%E7%90%86%E5%8C%85.jpg",
          sha256: "0ee722d9b38f31b63e5f7a76a2fd144b279c4953239d4dcff1d3ff121a983fdf",
          bytes: 118623,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "97",
        name: "皮革护理包",
        action: {
          type: "product-list",
          target: "97"
        },
        image: {
          localPath: "/static/banlan/category/category-93-97-card.jpg",
          sourcePath: "mp-banlan-product/增值服务/1605873076400_$$_增值服务-皮革保养包-即将上线.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1/1605873076400_%24%24_%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1-%E7%9A%AE%E9%9D%A9%E4%BF%9D%E5%85%BB%E5%8C%85-%E5%8D%B3%E5%B0%86%E4%B8%8A%E7%BA%BF.jpg",
          sha256: "41fadf4e4d6979998cb40fbbcf351a3a9263c760904227cf046e063538706405",
          bytes: 147135,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-93-97-hero.jpg",
          sourcePath: "mp-banlan-product/增值服务/1605531258338_$$_750x320--皮革护理包.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1/1605531258338_%24%24_750x320--%E7%9A%AE%E9%9D%A9%E6%8A%A4%E7%90%86%E5%8C%85.jpg",
          sha256: "3ade01587362247c9587e41ae6673b2bdd4f511e32afc93ad621a6d001c83125",
          bytes: 218852,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "98",
        name: "面料护理包",
        action: {
          type: "product-list",
          target: "98"
        },
        image: {
          localPath: "/static/banlan/category/category-93-98-card.jpg",
          sourcePath: "mp-banlan-product/增值服务/1605871273890_$$_增值服务--面料护理包-即将上线.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1/1605871273890_%24%24_%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1--%E9%9D%A2%E6%96%99%E6%8A%A4%E7%90%86%E5%8C%85-%E5%8D%B3%E5%B0%86%E4%B8%8A%E7%BA%BF.jpg",
          sha256: "0367c1f266585b54dee5533367e6f4d53e5a5730f1a6a3fe6b512e3d5556b8c4",
          bytes: 193136,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-93-98-hero.jpg",
          sourcePath: "mp-banlan-product/增值服务/1605531258336_$$_750x320--面料护理包.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1/1605531258336_%24%24_750x320--%E9%9D%A2%E6%96%99%E6%8A%A4%E7%90%86%E5%8C%85.jpg",
          sha256: "2087eed0ecb2069900b1f933e99b415e78bc1515bac73f8cd252971dd9e68d26",
          bytes: 303355,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      },
      {
        id: "99",
        name: "家具维护保养包",
        action: {
          type: "product-list",
          target: "99"
        },
        image: {
          localPath: "/static/banlan/category/category-93-99-card.jpg",
          sourcePath: "mp-banlan-product/增值服务/1605871273864_$$_增值服务-家具维护保养包-即将上线.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1/1605871273864_%24%24_%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1-%E5%AE%B6%E5%85%B7%E7%BB%B4%E6%8A%A4%E4%BF%9D%E5%85%BB%E5%8C%85-%E5%8D%B3%E5%B0%86%E4%B8%8A%E7%BA%BF.jpg",
          sha256: "ac10341c801423bd20069974bceaba33d43039b331e15bc500221fcac19dd813",
          bytes: 74448,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-93-99-hero.jpg",
          sourcePath: "mp-banlan-product/增值服务/1605873139016_$$_750x320--家具维护保养包-.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1/1605873139016_%24%24_750x320--%E5%AE%B6%E5%85%B7%E7%BB%B4%E6%8A%A4%E4%BF%9D%E5%85%BB%E5%8C%85-.jpg",
          sha256: "a61b68580b0cc34bd6e04611feac3489f60a8b38c7e5f711ef139f323c17ccce",
          bytes: 91354,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    editableFields: [
      "name",
      "children"
    ]
  },
  {
    id: "100",
    name: "奥特莱斯",
    children: [
      {
        id: "101",
        name: "逛逛御虎奥特莱斯",
        action: {
          type: "product-list",
          target: "101"
        },
        image: {
          localPath: "/static/banlan/category/category-100-101-card.jpg",
          sourcePath: "mp-banlan-product/奥特莱斯/1606033947109_$$_奥特莱斯.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%A5%A5%E7%89%B9%E8%8E%B1%E6%96%AF/1606033947109_%24%24_%E5%A5%A5%E7%89%B9%E8%8E%B1%E6%96%AF.jpg",
          sha256: "cf2d6561cc9a915117b5c1fdcad981a37b3fd9822727ac0070a36518e0eb8ad6",
          bytes: 69010,
          resourceStatus: "frozen",
          intrinsicWidth: 492,
          intrinsicHeight: 275,
          intrinsicAspectRatio: 1.789090909090909,
          displayedWidthRpx: 490,
          displayedHeightRpx: 275,
          containerWidthRpx: 490,
          containerHeightRpx: 275,
          objectFit: "cover",
          objectPosition: "50% 50%"
        },
        heroImage: {
          localPath: "/static/banlan/category/category-100-101-hero.jpg",
          sourcePath: "mp-banlan-product/奥特莱斯/1606034357054_$$_奥特莱斯二级BANNER图.jpg",
          sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E5%A5%A5%E7%89%B9%E8%8E%B1%E6%96%AF/1606034357054_%24%24_%E5%A5%A5%E7%89%B9%E8%8E%B1%E6%96%AF%E4%BA%8C%E7%BA%A7BANNER%E5%9B%BE.jpg",
          sha256: "01002c893ec3fd85e8639abfa41d6717d63ff67aecd810c0f3f21219d3b7aa1a",
          bytes: 88397,
          resourceStatus: "frozen",
          intrinsicWidth: 750,
          intrinsicHeight: 320,
          intrinsicAspectRatio: 2.34375,
          displayedWidthRpx: 750,
          displayedHeightRpx: null,
          containerWidthRpx: 750,
          containerHeightRpx: null,
          objectFit: "widthFix",
          objectPosition: "50% 50%"
        },
        editableFields: [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    editableFields: [
      "name",
      "children"
    ]
  }
];
const navigation = {
  schemaVersion,
  source,
  design,
  categories
};
export {
  navigation as n
};
