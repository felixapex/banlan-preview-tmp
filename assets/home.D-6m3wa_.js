const schemaVersion = 1;
const source = {
  capturedAt: "2026-11-17T20:52:46+08:00",
  response: "responses/00525-1b5088e6644df153.json"
};
const title = "御虎欢迎您";
const navigation = {
  homeIcon: "/static/banlan/icons/nav-home.png",
  homeLabel: "首页"
};
const sections = [
  "banner",
  "icon",
  "store",
  "activity",
  "category",
  "diary",
  "show",
  "about",
  "yours",
  "news",
  "image"
];
const hero = {
  durationMs: 6e3,
  items: [
    {
      id: "hero-1",
      image: "/static/banlan/home/hero-01.jpg",
      action: {
        type: "route",
        target: "/pages/category/category"
      }
    },
    {
      id: "hero-2",
      image: "./static/yuhu/home/hero-2.jpg",
      action: {
        type: "content",
        target: "yuhu-store-custom"
      }
    },
    {
      id: "hero-3",
      image: "./static/yuhu/home/hero-3.jpg",
      action: {
        type: "content",
        target: "48e6ec34c5284801833cff353a0209b5"
      }
    },
    {
      id: "hero-4",
      image: "./static/yuhu/home/hero-4.jpg",
      action: {
        type: "content",
        target: "affe4ffa063246f29e2a67f5e80e950c"
      }
    },
    {
      id: "hero-5",
      image: "./static/yuhu/home/hero-5.jpg",
      action: {
        type: "content",
        target: "yuhu-store-factory"
      }
    },
    {
      id: "hero-6",
      image: "./static/yuhu/home/hero-6.jpg",
      action: {
        type: "route",
        target: "/pages/category/category?category=yh4"
      }
    },
    {
      id: "hero-7",
      image: "./static/yuhu/home/hero-7.jpg",
      action: {
        type: "content",
        target: "yuhu-store-cases"
      }
    }
  ]
};
const services = [
  {
    id: "service-1",
    label: "品牌溯源",
    image: "/static/banlan/home/service-01.jpg",
    action: {
      type: "content",
      target: "48e6ec34c5284801833cff353a0209b5"
    }
  },
  {
    id: "service-2",
    label: "风向纪事",
    image: "/static/banlan/home/service-02.jpg",
    action: {
      type: "content",
      target: "f3da1be24a984384a0c181f4b4c72927"
    }
  },
  {
    id: "service-3",
    label: "尊享服务",
    image: "/static/banlan/home/service-03.jpg",
    action: {
      type: "content",
      target: "affe4ffa063246f29e2a67f5e80e950c"
    }
  },
  {
    id: "service-4",
    label: "臻护指南",
    image: "/static/banlan/home/service-04.jpg",
    action: {
      type: "content",
      target: "yuhu-care"
    }
  }
];
const store = {
  city: "佛山御虎",
  label: "总部展厅",
  arrowLabel: "〉",
  icon: "/static/banlan/icons/location.png",
  detailAction: {
    type: "route",
    target: "/pages/store/detail/detail"
  },
  action: {
    type: "route",
    target: "/pages/store/initList/initList"
  }
};
const bestSellers = {
  "title": "最受欢迎的御虎作品",
  "subtitle": "BEST SELLERS",
  "items": [
    {
      "id": "yuhu-g325",
      "title": "G325 飞翼",
      "englishTitle": "FLYING WINGS",
      "priceCents": 1945500,
      "categoryNames": [
        "影院沙发"
      ],
      "image": "./static/yuhu/home/bs-g325.jpg",
      "action": {
        "type": "product",
        "target": "yuhu-g325"
      }
    },
    {
      "id": "yuhu-g397",
      "title": "G397 安德鲁",
      "englishTitle": "ANDREW",
      "priceCents": 2560000,
      "categoryNames": [
        "影院沙发"
      ],
      "image": "./static/yuhu/models/g397.jpg",
      "action": {
        "type": "product",
        "target": "yuhu-g397"
      }
    },
    {
      "id": "yuhu-g396",
      "title": "G396 阿罗纳",
      "englishTitle": "ARONA",
      "priceCents": 2724500,
      "categoryNames": [
        "影院沙发"
      ],
      "image": "./static/yuhu/models/g396.jpg",
      "action": {
        "type": "product",
        "target": "yuhu-g396"
      }
    },
    {
      "id": "yuhu-g807",
      "title": "G807",
      "englishTitle": "HOME CINEMA",
      "priceCents": 3020000,
      "categoryNames": [
        "影院沙发"
      ],
      "image": "./static/yuhu/home/bs-g807.jpg",
      "action": {
        "type": "product",
        "target": "yuhu-g807"
      }
    },
    {
      "id": "yuhu-g806",
      "title": "G806",
      "englishTitle": "HOME CINEMA",
      "priceCents": 1932000,
      "categoryNames": [
        "影院沙发"
      ],
      "image": "./static/yuhu/models/g806.jpg",
      "action": {
        "type": "product",
        "target": "yuhu-g806"
      }
    },
    {
      "id": "yuhu-gr1532",
      "title": "GR1532",
      "englishTitle": "HOME CINEMA",
      "priceCents": 2837500,
      "categoryNames": [
        "影院沙发"
      ],
      "image": "./static/yuhu/models/gr1532.jpg",
      "action": {
        "type": "product",
        "target": "yuhu-gr1532"
      }
    }
  ]
};
const categories = [
  {
    "id": "yh1",
    "label": "影院沙发",
    "englishLabel": "CINEMA SOFA",
    "image": "/static/banlan/home/category-01.jpg",
    "action": {
      "type": "category",
      "target": "yh1"
    }
  },
  {
    "id": "yh2",
    "label": "影K沙发",
    "englishLabel": "CINEMA & KTV SOFA",
    "image": "/static/banlan/home/category-02.jpg",
    "action": {
      "type": "category",
      "target": "yh2"
    }
  },
  {
    "id": "yh3",
    "label": "功能沙发",
    "englishLabel": "FUNCTIONAL SOFA",
    "image": "/static/banlan/home/category-03.jpg",
    "action": {
      "type": "category",
      "target": "yh3"
    }
  },
  {
    "id": "yh4",
    "label": "功能椅",
    "englishLabel": "FUNCTIONAL CHAIR",
    "image": "/static/banlan/home/category-04.jpg",
    "action": {
      "type": "category",
      "target": "yh4"
    }
  },
  {
    "id": "yh5",
    "label": "沙发床",
    "englishLabel": "SOFA BED",
    "image": "/static/banlan/home/category-05.jpg",
    "action": {
      "type": "category",
      "target": "yh5"
    }
  },
  {
    "id": "yh6",
    "label": "按摩椅",
    "englishLabel": "MASSAGE CHAIR",
    "image": "/static/banlan/home/category-06.jpg",
    "action": {
      "type": "category",
      "target": "yh6"
    }
  },
  {
    "id": "yh7",
    "label": "KTV沙发",
    "englishLabel": "KTV SOFA",
    "image": "/static/banlan/home/category-07.jpg",
    "action": {
      "type": "category",
      "target": "yh7"
    }
  },
  {
    "id": "yh8",
    "label": "KTV茶几",
    "englishLabel": "KTV TABLE",
    "image": "/static/banlan/home/category-08.jpg",
    "action": {
      "type": "category",
      "target": "yh8"
    }
  },
  {
    "id": "yh9",
    "label": "设计师定制",
    "englishLabel": "DESIGNER CUSTOM",
    "image": "/static/banlan/home/category-09.jpg",
    "action": {
      "type": "category",
      "target": "yh9"
    }
  },
  {
    "id": "yh10",
    "label": "功能选配",
    "englishLabel": "OPTIONAL FEATURES",
    "image": "/static/banlan/home/category-10.jpg",
    "action": {
      "type": "category",
      "target": "yh10"
    }
  }
];
const categoryTitle = "御虎产品";
const diaries = {
  title: "新居日记",
  subtitle: "THEY AND THEIR ROYAL TIGER",
  viewAllLabel: "查看全部",
  logoImage: "/static/banlan/home/diary-logo.png",
  avatarImage: "/static/banlan/home/diary-avatar.png",
  previousIcon: "/static/banlan/home/diary-previous.png",
  nextIcon: "/static/banlan/home/diary-next.png",
  items: [
  {
    "id": "yh-diary-1",
    "title": "别墅私人影院",
    "byline": "别墅 | 私人影院定制",
    "image": "/static/yuhu/fans/diary-01-0.jpg",
    "action": {
      "type": "route",
      "target": "/pages/fans/diaryDetail/diaryDetail?id=yh-diary-1"
    }
  },
  {
    "id": "yh-diary-2",
    "title": "美国杜比影音中国示范厅",
    "byline": "示范厅 | 影院座椅系统",
    "image": "/static/yuhu/fans/diary-02-0.jpg",
    "action": {
      "type": "route",
      "target": "/pages/fans/diaryDetail/diaryDetail?id=yh-diary-2"
    }
  },
  {
    "id": "yh-diary-3",
    "title": "佛山居然之家星空影院",
    "byline": "佛山 | 星空影院项目",
    "image": "/static/yuhu/fans/diary-03-0.jpg",
    "action": {
      "type": "route",
      "target": "/pages/fans/diaryDetail/diaryDetail?id=yh-diary-3"
    }
  }
],
  moreAction: {
    type: "route",
    target: "/pages/fans/fans/fans?tab=diary"
  }
};
const show = {
  title: "御虎影像",
  subtitle: "PHOTO GALLERY",
  viewAllLabel: "查看全部",
  items: [
  {
    "id": "yh-show-1",
    "nickname": "影院沙发 · 大型影厅组合",
    "address": "佛山",
    "image": "/static/yuhu/fans/show-01.jpg",
    "avatar": "/static/banlan/icons/tab-2-active.png"
  },
  {
    "id": "yh-show-2",
    "nickname": "影院沙发 · 双排组合",
    "address": "佛山",
    "image": "/static/yuhu/fans/show-02.jpg",
    "avatar": "/static/banlan/icons/tab-2-active.png"
  },
  {
    "id": "yh-show-3",
    "nickname": "功能沙发 · 白色系",
    "address": "佛山",
    "image": "/static/yuhu/fans/show-03.jpg",
    "avatar": "/static/banlan/icons/tab-2-active.png"
  },
  {
    "id": "yh-show-4",
    "nickname": "私人影院座椅",
    "address": "佛山",
    "image": "/static/yuhu/fans/show-04.jpg",
    "avatar": "/static/banlan/icons/tab-2-active.png"
  },
  {
    "id": "yh-show-5",
    "nickname": "影院沙发 · 展厅实景",
    "address": "佛山",
    "image": "/static/yuhu/fans/show-05.jpg",
    "avatar": "/static/banlan/icons/tab-2-active.png"
  }
],
  action: {
    type: "route",
    target: "/pages/fans/fans/fans?tab=show"
  }
};
const about = {
  title: "关于御虎",
  subtitle: "ABOUT ROYAL TIGER",
  displayTitle: "让科技与艺术共生",
  viewAllLabel: "查看全部",
  image: "./static/yuhu/home-sketch.jpg",
  text: "将科技、智能与功能融入家居\n内核，专注墅级私人影院沙发\n与典藏级功能沙发。\n\n追寻舒适、机能与视觉之美，更是一种臻于理想的生活态度。",
  action: {
    type: "route",
    target: "/pages/fans/fans/fans?tab=about"
  }
};
const yours = {
  title: "您的店铺",
  subtitle: "YOUR ROYAL TIGER STORE",
  image: "/static/banlan/home/your-store.jpg",
  action: {
    type: "route",
    target: "/pages/store/list/list"
  }
};
const news = {
  title: "风物志",
  subtitle: "ROYAL TIGER NEWS",
  items: [
  {
    "id": "yh-news-1",
    "title": "影K沙发系列上市",
    "summary": "影音与KTV娱乐空间一体化座椅方案",
    "buttonLabel": "查看全文",
    "image": "/static/yuhu/fans/news-01.jpg",
    "action": {
      "type": "route",
      "target": "/pages/fans/newsDetail/newsDetail?id=yh-news-1"
    }
  },
  {
    "id": "yh-news-2",
    "title": "御虎亮相第55届中国家博会",
    "summary": "新品影院沙发与功能沙发集中展出",
    "buttonLabel": "查看全文",
    "image": "/static/yuhu/fans/news-02.jpg",
    "action": {
      "type": "route",
      "target": "/pages/fans/newsDetail/newsDetail?id=yh-news-2"
    }
  },
  {
    "id": "yh-news-3",
    "title": "全新功能椅系列上市",
    "summary": "休闲功能椅与康养功能椅两大系列",
    "buttonLabel": "查看全文",
    "image": "/static/yuhu/fans/news-03.jpg",
    "action": {
      "type": "route",
      "target": "/pages/fans/newsDetail/newsDetail?id=yh-news-3"
    }
  },
  {
    "id": "yh-news-4",
    "title": "荣获中国红棉设计奖",
    "summary": "2024年度产品设计奖",
    "buttonLabel": "查看全文",
    "image": "/static/yuhu/fans/news-04.jpg",
    "action": {
      "type": "route",
      "target": "/pages/fans/newsDetail/newsDetail?id=yh-news-4"
    }
  }
]
};
const footerImage = {
  image: "/static/banlan/home/footer.jpg",
  action: {
    type: "none"
  }
};
const floatingActions = [
  {
    id: "service",
    label: "产品顾问",
    image: "/static/banlan/icons/product-advisor.png",
    position: {
      rightRpx: -2,
      bottomRpx: 464
    },
    action: {
      type: "route",
      target: "/pages/store/detail/detail"
    }
  },
  {
    id: "cart",
    label: "购物车",
    image: "/static/banlan/icons/cart.png",
    badge: 0,
    position: {
      rightRpx: -2,
      bottomRpx: 104
    },
    action: {
      type: "route",
      target: "/pages/product/cart/cart"
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
const memberOffer = {
  id: "a48283616183468b909c193076167201",
  name: "首页海报",
  closeLabel: "关闭",
  image: "/static/banlan/home/member-offer.jpg",
  sourceUrl: "https://mp-banlan-product.oss-cn-shenzhen.aliyuncs.com/mp-banlan-product/%E9%A6%96%E9%A1%B5%E6%B5%B7%E6%8A%A5/1745281805641_$$_%E4%BA%91%E5%BA%97%E9%93%BA%E6%BB%A1%E5%87%8F%E4%BC%9A%E5%91%98%E6%B5%B7%E6%8A%A52.22(1)%20%E6%8B%B7%E8%B4%9D(1).jpg",
  claimAction: {
    type: "route",
    target: "/pages/mine/profile/profile"
  }
};
const interactionMessages = {
  memberOffer: "首页演示：会员福利领取动作已记录，正式登录与领券接口待后端接入。",
  service: "首页演示：客服入口已响应，正式客服通道待后端接入。",
  pendingPage: "首页已完成；这个按钮对应的下一页面将在后续阶段接入。"
};
const home = {
  schemaVersion,
  source,
  title,
  navigation,
  sections,
  hero,
  services,
  store,
  bestSellers,
  categories,
  categoryTitle,
  diaries,
  show,
  about,
  yours,
  news,
  footerImage,
  floatingActions,
  tabs,
  memberOffer,
  interactionMessages
};
export {
  home as h
};
