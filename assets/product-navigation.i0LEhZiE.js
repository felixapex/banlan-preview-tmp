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
    activeColor: "#9E815D",
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
    priceColor: "#9E815D",
    imageObjectFit: "contain",
    responsive: {
      strategy: "fluid-rpx",
      maxWidthRpx: 750
    }
  }
};
const categories = [
  {
    "id": "yh1",
    "name": "影院沙发",
    "children": [
      {
        "id": "yh1c",
        "name": "影院沙发",
        "action": {
          "type": "product-list",
          "target": "yh1c"
        },
        "image": {
          "localPath": "/static/yuhu/category/yh1-card.jpg",
          "sourcePath": "mp-banlan-product/产品分类列表页/1605854217858_$$_沙发.jpg",
          "sourceUrl": "",
          "sha256": "33a4a8aa8095b639067dccca8892f27c953cc3c658f087799dcf1a4e23eb41b5",
          "bytes": 143613,
          "resourceStatus": "frozen",
          "intrinsicWidth": 492,
          "intrinsicHeight": 275,
          "intrinsicAspectRatio": 1.789090909090909,
          "displayedWidthRpx": 490,
          "displayedHeightRpx": 275,
          "containerWidthRpx": 490,
          "containerHeightRpx": 275,
          "objectFit": "cover",
          "objectPosition": "50% 50%"
        },
        "heroImage": {
          "localPath": "/static/yuhu/category/yh1-hero.jpg",
          "sourcePath": "mp-banlan-product/产品二级类别BANNER图/1605853880870_$$_沙发.jpg",
          "sourceUrl": "",
          "sha256": "0db0ec647a3c4097480adfd3b8a5d67fb076c82526d06f6a2e0e997c70167843",
          "bytes": 226860,
          "resourceStatus": "frozen",
          "intrinsicWidth": 750,
          "intrinsicHeight": 320,
          "intrinsicAspectRatio": 2.34375,
          "displayedWidthRpx": 750,
          "displayedHeightRpx": null,
          "containerWidthRpx": 750,
          "containerHeightRpx": null,
          "objectFit": "widthFix",
          "objectPosition": "50% 50%"
        },
        "editableFields": [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    "editableFields": [
      "name",
      "children"
    ]
  },
  {
    "id": "yh2",
    "name": "影K沙发",
    "children": [
      {
        "id": "yh2c",
        "name": "影K沙发",
        "action": {
          "type": "product-list",
          "target": "yh2c"
        },
        "image": {
          "localPath": "/static/yuhu/category/yh2-card.jpg",
          "sourcePath": "mp-banlan-product/产品分类列表页/1605854217858_$$_沙发.jpg",
          "sourceUrl": "",
          "sha256": "33a4a8aa8095b639067dccca8892f27c953cc3c658f087799dcf1a4e23eb41b5",
          "bytes": 143613,
          "resourceStatus": "frozen",
          "intrinsicWidth": 492,
          "intrinsicHeight": 275,
          "intrinsicAspectRatio": 1.789090909090909,
          "displayedWidthRpx": 490,
          "displayedHeightRpx": 275,
          "containerWidthRpx": 490,
          "containerHeightRpx": 275,
          "objectFit": "cover",
          "objectPosition": "50% 50%"
        },
        "heroImage": {
          "localPath": "/static/yuhu/category/yh2-hero.jpg",
          "sourcePath": "mp-banlan-product/产品二级类别BANNER图/1605853880870_$$_沙发.jpg",
          "sourceUrl": "",
          "sha256": "0db0ec647a3c4097480adfd3b8a5d67fb076c82526d06f6a2e0e997c70167843",
          "bytes": 226860,
          "resourceStatus": "frozen",
          "intrinsicWidth": 750,
          "intrinsicHeight": 320,
          "intrinsicAspectRatio": 2.34375,
          "displayedWidthRpx": 750,
          "displayedHeightRpx": null,
          "containerWidthRpx": 750,
          "containerHeightRpx": null,
          "objectFit": "widthFix",
          "objectPosition": "50% 50%"
        },
        "editableFields": [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    "editableFields": [
      "name",
      "children"
    ]
  },
  {
    "id": "yh3",
    "name": "功能沙发",
    "children": [
      {
        "id": "yh3c",
        "name": "功能沙发",
        "action": {
          "type": "product-list",
          "target": "yh3c"
        },
        "image": {
          "localPath": "/static/yuhu/category/yh3-card.jpg",
          "sourcePath": "mp-banlan-product/产品分类列表页/1605854217858_$$_沙发.jpg",
          "sourceUrl": "",
          "sha256": "33a4a8aa8095b639067dccca8892f27c953cc3c658f087799dcf1a4e23eb41b5",
          "bytes": 143613,
          "resourceStatus": "frozen",
          "intrinsicWidth": 492,
          "intrinsicHeight": 275,
          "intrinsicAspectRatio": 1.789090909090909,
          "displayedWidthRpx": 490,
          "displayedHeightRpx": 275,
          "containerWidthRpx": 490,
          "containerHeightRpx": 275,
          "objectFit": "cover",
          "objectPosition": "50% 50%"
        },
        "heroImage": {
          "localPath": "/static/yuhu/category/yh3-hero.jpg",
          "sourcePath": "mp-banlan-product/产品二级类别BANNER图/1605853880870_$$_沙发.jpg",
          "sourceUrl": "",
          "sha256": "0db0ec647a3c4097480adfd3b8a5d67fb076c82526d06f6a2e0e997c70167843",
          "bytes": 226860,
          "resourceStatus": "frozen",
          "intrinsicWidth": 750,
          "intrinsicHeight": 320,
          "intrinsicAspectRatio": 2.34375,
          "displayedWidthRpx": 750,
          "displayedHeightRpx": null,
          "containerWidthRpx": 750,
          "containerHeightRpx": null,
          "objectFit": "widthFix",
          "objectPosition": "50% 50%"
        },
        "editableFields": [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    "editableFields": [
      "name",
      "children"
    ]
  },
  {
    "id": "yh4",
    "name": "功能椅",
    "children": [
      {
        "id": "yh4c",
        "name": "功能椅",
        "action": {
          "type": "product-list",
          "target": "yh4c"
        },
        "image": {
          "localPath": "/static/yuhu/category/yh4-card.jpg",
          "sourcePath": "mp-banlan-product/产品分类列表页/1605854217672_$$_扶手椅.jpg",
          "sourceUrl": "",
          "sha256": "0e64f27e478701688270b04e1a6589304a595be99c93ab11dc334588aaed62b3",
          "bytes": 141614,
          "resourceStatus": "frozen",
          "intrinsicWidth": 492,
          "intrinsicHeight": 275,
          "intrinsicAspectRatio": 1.789090909090909,
          "displayedWidthRpx": 490,
          "displayedHeightRpx": 275,
          "containerWidthRpx": 490,
          "containerHeightRpx": 275,
          "objectFit": "cover",
          "objectPosition": "50% 50%"
        },
        "heroImage": {
          "localPath": "/static/yuhu/category/yh4-hero.jpg",
          "sourcePath": "mp-banlan-product/产品二级类别BANNER图/1605853880685_$$_扶手椅.jpg",
          "sourceUrl": "",
          "sha256": "cd6de5b729dcb5bc3dd1e9a2fa5e2603dd725d2db04eedf3d015945fe72f1e0c",
          "bytes": 219664,
          "resourceStatus": "frozen",
          "intrinsicWidth": 750,
          "intrinsicHeight": 320,
          "intrinsicAspectRatio": 2.34375,
          "displayedWidthRpx": 750,
          "displayedHeightRpx": null,
          "containerWidthRpx": 750,
          "containerHeightRpx": null,
          "objectFit": "widthFix",
          "objectPosition": "50% 50%"
        },
        "editableFields": [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    "editableFields": [
      "name",
      "children"
    ]
  },
  {
    "id": "yh5",
    "name": "沙发床",
    "children": [
      {
        "id": "yh5c",
        "name": "沙发床",
        "action": {
          "type": "product-list",
          "target": "yh5c"
        },
        "image": {
          "localPath": "/static/yuhu/category/yh5-card.jpg",
          "sourcePath": "mp-banlan-product/产品分类列表页/1705385608421_$$_04.床20240116.jpg",
          "sourceUrl": "",
          "sha256": "8114f350f405c623d5666a75b5d5b3c4831b57593bda41088fe318d66b3cbb0b",
          "bytes": 108330,
          "resourceStatus": "frozen",
          "intrinsicWidth": 492,
          "intrinsicHeight": 275,
          "intrinsicAspectRatio": 1.789090909090909,
          "displayedWidthRpx": 490,
          "displayedHeightRpx": 275,
          "containerWidthRpx": 490,
          "containerHeightRpx": 275,
          "objectFit": "cover",
          "objectPosition": "50% 50%"
        },
        "heroImage": {
          "localPath": "/static/yuhu/category/yh5-hero.jpg",
          "sourcePath": "mp-banlan-product/产品二级类别置顶图/1705385635829_$$_04.床202401.jpg",
          "sourceUrl": "",
          "sha256": "df493df2bf8ac3935d08ecbac2b77b219be0cd1f9842b83e99ed6b1b0ebf92f8",
          "bytes": 145015,
          "resourceStatus": "frozen",
          "intrinsicWidth": 750,
          "intrinsicHeight": 320,
          "intrinsicAspectRatio": 2.34375,
          "displayedWidthRpx": 750,
          "displayedHeightRpx": null,
          "containerWidthRpx": 750,
          "containerHeightRpx": null,
          "objectFit": "widthFix",
          "objectPosition": "50% 50%"
        },
        "editableFields": [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    "editableFields": [
      "name",
      "children"
    ]
  },
  {
    "id": "yh6",
    "name": "按摩椅",
    "children": [
      {
        "id": "yh6c",
        "name": "按摩椅",
        "action": {
          "type": "product-list",
          "target": "yh6c"
        },
        "image": {
          "localPath": "/static/yuhu/category/yh6-card.jpg",
          "sourcePath": "mp-banlan-product/产品分类列表页/1605854217672_$$_扶手椅.jpg",
          "sourceUrl": "",
          "sha256": "0e64f27e478701688270b04e1a6589304a595be99c93ab11dc334588aaed62b3",
          "bytes": 141614,
          "resourceStatus": "frozen",
          "intrinsicWidth": 492,
          "intrinsicHeight": 275,
          "intrinsicAspectRatio": 1.789090909090909,
          "displayedWidthRpx": 490,
          "displayedHeightRpx": 275,
          "containerWidthRpx": 490,
          "containerHeightRpx": 275,
          "objectFit": "cover",
          "objectPosition": "50% 50%"
        },
        "heroImage": {
          "localPath": "/static/yuhu/category/yh6-hero.jpg",
          "sourcePath": "mp-banlan-product/产品二级类别BANNER图/1605853880685_$$_扶手椅.jpg",
          "sourceUrl": "",
          "sha256": "cd6de5b729dcb5bc3dd1e9a2fa5e2603dd725d2db04eedf3d015945fe72f1e0c",
          "bytes": 219664,
          "resourceStatus": "frozen",
          "intrinsicWidth": 750,
          "intrinsicHeight": 320,
          "intrinsicAspectRatio": 2.34375,
          "displayedWidthRpx": 750,
          "displayedHeightRpx": null,
          "containerWidthRpx": 750,
          "containerHeightRpx": null,
          "objectFit": "widthFix",
          "objectPosition": "50% 50%"
        },
        "editableFields": [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    "editableFields": [
      "name",
      "children"
    ]
  },
  {
    "id": "yh7",
    "name": "KTV沙发",
    "children": [
      {
        "id": "yh7c",
        "name": "KTV沙发",
        "action": {
          "type": "product-list",
          "target": "yh7c"
        },
        "image": {
          "localPath": "/static/yuhu/category/yh7-card.jpg",
          "sourcePath": "mp-banlan-product/产品分类列表页/1605854217858_$$_沙发.jpg",
          "sourceUrl": "",
          "sha256": "33a4a8aa8095b639067dccca8892f27c953cc3c658f087799dcf1a4e23eb41b5",
          "bytes": 143613,
          "resourceStatus": "frozen",
          "intrinsicWidth": 492,
          "intrinsicHeight": 275,
          "intrinsicAspectRatio": 1.789090909090909,
          "displayedWidthRpx": 490,
          "displayedHeightRpx": 275,
          "containerWidthRpx": 490,
          "containerHeightRpx": 275,
          "objectFit": "cover",
          "objectPosition": "50% 50%"
        },
        "heroImage": {
          "localPath": "/static/yuhu/category/yh7-hero.jpg",
          "sourcePath": "mp-banlan-product/产品二级类别BANNER图/1605853880870_$$_沙发.jpg",
          "sourceUrl": "",
          "sha256": "0db0ec647a3c4097480adfd3b8a5d67fb076c82526d06f6a2e0e997c70167843",
          "bytes": 226860,
          "resourceStatus": "frozen",
          "intrinsicWidth": 750,
          "intrinsicHeight": 320,
          "intrinsicAspectRatio": 2.34375,
          "displayedWidthRpx": 750,
          "displayedHeightRpx": null,
          "containerWidthRpx": 750,
          "containerHeightRpx": null,
          "objectFit": "widthFix",
          "objectPosition": "50% 50%"
        },
        "editableFields": [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    "editableFields": [
      "name",
      "children"
    ]
  },
  {
    "id": "yh8",
    "name": "KTV茶几",
    "children": [
      {
        "id": "yh8c",
        "name": "KTV茶几",
        "action": {
          "type": "product-list",
          "target": "yh8c"
        },
        "image": {
          "localPath": "/static/yuhu/category/yh8-card.jpg",
          "sourcePath": "mp-banlan-product/产品分类列表页/1704788314108_$$_06.桌几.几202401.jpg",
          "sourceUrl": "",
          "sha256": "6afa9f2e1f4b852aeafcc202801327f39b679a5209a977edb09c474243497a28",
          "bytes": 102043,
          "resourceStatus": "frozen",
          "intrinsicWidth": 492,
          "intrinsicHeight": 275,
          "intrinsicAspectRatio": 1.789090909090909,
          "displayedWidthRpx": 490,
          "displayedHeightRpx": 275,
          "containerWidthRpx": 490,
          "containerHeightRpx": 275,
          "objectFit": "cover",
          "objectPosition": "50% 50%"
        },
        "heroImage": {
          "localPath": "/static/yuhu/category/yh8-hero.jpg",
          "sourcePath": "mp-banlan-product/产品二级类别置顶图/1704791981991_$$_二级-桌几.几202401.jpg",
          "sourceUrl": "",
          "sha256": "4694f802a221c779d3f7ec9e77f44c8b8a627bd5d7dc399cd241df40def27152",
          "bytes": 161807,
          "resourceStatus": "frozen",
          "intrinsicWidth": 750,
          "intrinsicHeight": 320,
          "intrinsicAspectRatio": 2.34375,
          "displayedWidthRpx": 750,
          "displayedHeightRpx": null,
          "containerWidthRpx": 750,
          "containerHeightRpx": null,
          "objectFit": "widthFix",
          "objectPosition": "50% 50%"
        },
        "editableFields": [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    "editableFields": [
      "name",
      "children"
    ]
  },
  {
    "id": "yh9",
    "name": "设计师定制",
    "children": [
      {
        "id": "yh9c",
        "name": "设计师定制",
        "action": {
          "type": "product-list",
          "target": "yh9c"
        },
        "image": {
          "localPath": "/static/yuhu/category/yh9-card.jpg",
          "sourcePath": "mp-banlan-product/产品分类列表页/1787275690888_$$_一级类别-20260821新品.jpg",
          "sourceUrl": "",
          "sha256": "293725369cd39c2d86852badc65cdc8cce7ba398677d942e9f8c6810fa918fa0",
          "bytes": 241118,
          "resourceStatus": "frozen",
          "intrinsicWidth": 492,
          "intrinsicHeight": 275,
          "intrinsicAspectRatio": 1.789090909090909,
          "displayedWidthRpx": 490,
          "displayedHeightRpx": 275,
          "containerWidthRpx": 490,
          "containerHeightRpx": 275,
          "objectFit": "cover",
          "objectPosition": "50% 50%"
        },
        "heroImage": {
          "localPath": "/static/yuhu/category/yh9-hero.jpg",
          "sourcePath": "mp-banlan-product/产品二级类别置顶图/1788924811683_$$_二级类别置顶图-2026新品.jpg",
          "sourceUrl": "",
          "sha256": "39e346702718f33e1107ee8339858e602e7ef1081cc3a034b359c0d6e6f2ecac",
          "bytes": 409562,
          "resourceStatus": "frozen",
          "intrinsicWidth": 750,
          "intrinsicHeight": 320,
          "intrinsicAspectRatio": 2.34375,
          "displayedWidthRpx": 750,
          "displayedHeightRpx": null,
          "containerWidthRpx": 750,
          "containerHeightRpx": null,
          "objectFit": "widthFix",
          "objectPosition": "50% 50%"
        },
        "editableFields": [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    "editableFields": [
      "name",
      "children"
    ]
  },
  {
    "id": "yh10",
    "name": "功能选配",
    "children": [
      {
        "id": "yh10c",
        "name": "功能选配",
        "action": {
          "type": "product-list",
          "target": "yh10c"
        },
        "image": {
          "localPath": "/static/yuhu/category/yh10-card.jpg",
          "sourcePath": "mp-banlan-product/产品分类列表页/1787275690888_$$_一级类别-20260821新品.jpg",
          "sourceUrl": "",
          "sha256": "293725369cd39c2d86852badc65cdc8cce7ba398677d942e9f8c6810fa918fa0",
          "bytes": 241118,
          "resourceStatus": "frozen",
          "intrinsicWidth": 492,
          "intrinsicHeight": 275,
          "intrinsicAspectRatio": 1.789090909090909,
          "displayedWidthRpx": 490,
          "displayedHeightRpx": 275,
          "containerWidthRpx": 490,
          "containerHeightRpx": 275,
          "objectFit": "cover",
          "objectPosition": "50% 50%"
        },
        "heroImage": {
          "localPath": "/static/yuhu/category/yh10-hero.jpg",
          "sourcePath": "mp-banlan-product/产品二级类别置顶图/1788924811683_$$_二级类别置顶图-2026新品.jpg",
          "sourceUrl": "",
          "sha256": "39e346702718f33e1107ee8339858e602e7ef1081cc3a034b359c0d6e6f2ecac",
          "bytes": 409562,
          "resourceStatus": "frozen",
          "intrinsicWidth": 750,
          "intrinsicHeight": 320,
          "intrinsicAspectRatio": 2.34375,
          "displayedWidthRpx": 750,
          "displayedHeightRpx": null,
          "containerWidthRpx": 750,
          "containerHeightRpx": null,
          "objectFit": "widthFix",
          "objectPosition": "50% 50%"
        },
        "editableFields": [
          "name",
          "image",
          "heroImage",
          "action"
        ]
      }
    ],
    "editableFields": [
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
