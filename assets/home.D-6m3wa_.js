const schemaVersion = 1;
const source = {
  capturedAt: "2026-11-17T20:52:46+08:00",
  response: "responses/00525-1b5088e6644df153.json"
};
const title = "班兰云店铺";
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
      image: "/static/banlan/home/hero-02.jpg",
      action: {
        type: "content",
        target: "50511af85d754294a5b38350c0613781"
      }
    },
    {
      id: "hero-3",
      image: "/static/banlan/home/hero-03.jpg",
      action: {
        type: "content",
        target: "48e6ec34c5284801833cff353a0209b5"
      }
    },
    {
      id: "hero-4",
      image: "/static/banlan/home/hero-04.jpg",
      action: {
        type: "content",
        target: "affe4ffa063246f29e2a67f5e80e950c"
      }
    },
    {
      id: "hero-5",
      image: "/static/banlan/home/hero-05.png",
      action: {
        type: "content",
        target: "1ff2b94d40de4f21a33690f60ea71fc6"
      }
    },
    {
      id: "hero-6",
      image: "/static/banlan/home/hero-06.jpg",
      action: {
        type: "none"
      }
    },
    {
      id: "hero-7",
      image: "/static/banlan/home/hero-07.jpg",
      action: {
        type: "content",
        target: "59d4c00694184bf7a8fa0c3e4d636393"
      }
    }
  ]
};
const services = [
  {
    id: "service-1",
    label: "长期价值",
    image: "/static/banlan/home/service-01.jpg",
    action: {
      type: "content",
      target: "48e6ec34c5284801833cff353a0209b5"
    }
  },
  {
    id: "service-2",
    label: "中国制造",
    image: "/static/banlan/home/service-02.jpg",
    action: {
      type: "content",
      target: "f3da1be24a984384a0c181f4b4c72927"
    }
  },
  {
    id: "service-3",
    label: "十年质保",
    image: "/static/banlan/home/service-03.jpg",
    action: {
      type: "content",
      target: "affe4ffa063246f29e2a67f5e80e950c"
    }
  },
  {
    id: "service-4",
    label: "5星服务",
    image: "/static/banlan/home/service-04.jpg",
    action: {
      type: "route",
      target: "/pages/store/list/list"
    }
  }
];
const store = {
  city: "广州班兰",
  label: "切换门店",
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
  title: "最受欢迎的班兰作品",
  subtitle: "BEST SELLERS",
  items: [
    {
      id: "c146e331cd91424c886840abd2b8be1b",
      title: "简牍沙发",
      englishTitle: "JIANDU SOFA",
      priceCents: 289e4,
      categoryNames: [
        "户外",
        "沙发",
        "2026新品"
      ],
      image: "/static/banlan/home/best-seller-01.jpg",
      action: {
        type: "product",
        target: "c146e331cd91424c886840abd2b8be1b"
      }
    },
    {
      id: "c9e3557d48bb457dba5f1759cf8690ff",
      title: "四喜餐桌",
      englishTitle: "SIXI DINING TABLE",
      priceCents: 215e4,
      categoryNames: [
        "2024新品",
        "餐桌"
      ],
      image: "/static/banlan/home/best-seller-02.jpg",
      action: {
        type: "product",
        target: "c9e3557d48bb457dba5f1759cf8690ff"
      }
    },
    {
      id: "dd551b3f54aa4d4aad7ce1866221d632",
      title: "长宁床",
      englishTitle: "CHANG NING BED",
      priceCents: 1914e3,
      categoryNames: [
        "床"
      ],
      image: "/static/banlan/home/best-seller-03.jpg",
      action: {
        type: "product",
        target: "dd551b3f54aa4d4aad7ce1866221d632"
      }
    },
    {
      id: "52869af37d0c4baea598a3c58c5abaf4",
      title: "约翰·波森系列 长凳",
      englishTitle: "John Pawson Series Bench",
      priceCents: 204e4,
      categoryNames: [
        "2024新品",
        "榻凳"
      ],
      image: "/static/banlan/home/best-seller-04.jpg",
      action: {
        type: "product",
        target: "52869af37d0c4baea598a3c58c5abaf4"
      }
    },
    {
      id: "5b179c27792b44abaa63c18822ef6139",
      title: "诺塔床边柜",
      englishTitle: "NOTA NIGHTSTAND",
      priceCents: 932e3,
      categoryNames: [
        "床边柜",
        "2024新品"
      ],
      image: "/static/banlan/home/best-seller-05.jpg",
      action: {
        type: "product",
        target: "5b179c27792b44abaa63c18822ef6139"
      }
    }
  ]
};
const categories = [
  {
    id: "37",
    label: "沙发",
    englishLabel: "SOFA",
    image: "/static/banlan/home/category-01.jpg",
    action: {
      type: "category",
      target: "37"
    }
  },
  {
    id: "51",
    label: "床",
    englishLabel: "BED",
    image: "/static/banlan/home/category-02.jpg",
    action: {
      type: "category",
      target: "51"
    }
  },
  {
    id: "38",
    label: "椅榻",
    englishLabel: "CHAIR",
    image: "/static/banlan/home/category-03.jpg",
    action: {
      type: "category",
      target: "38"
    }
  },
  {
    id: "53",
    label: "桌几",
    englishLabel: "TABLE",
    image: "/static/banlan/home/category-04.jpg",
    action: {
      type: "category",
      target: "53"
    }
  },
  {
    id: "57",
    label: "柜架",
    englishLabel: "CABINET &\nSHELVING",
    image: "/static/banlan/home/category-05.jpg",
    action: {
      type: "category",
      target: "57"
    }
  },
  {
    id: "122",
    label: "户外",
    englishLabel: "OUTDOOR",
    image: "/static/banlan/home/category-06.jpg",
    action: {
      type: "category",
      target: "122"
    }
  }
];
const categoryTitle = "班兰产品";
const diaries = {
  title: "新居日记",
  subtitle: "THEY AND THEIR BANLAN",
  viewAllLabel: "查看全部",
  logoImage: "/static/banlan/home/diary-logo.png",
  avatarImage: "/static/banlan/home/diary-avatar.png",
  previousIcon: "/static/banlan/home/diary-previous.png",
  nextIcon: "/static/banlan/home/diary-next.png",
  items: [
    {
      id: "3317ab224d484fdea768c8ce9d2a38db",
      title: "庭院雅境，心栖四时之外",
      byline: "石家庄 | 唐忠汉",
      image: "/static/banlan/home/diary-01.png",
      action: {
        type: "diary",
        target: "3317ab224d484fdea768c8ce9d2a38db"
      }
    },
    {
      id: "d3adab2172594dd68254f2aa082ce4c4",
      title: "把家变成流动的艺术博物馆",
      byline: "台州丨荷马设计·陈乐天",
      image: "/static/banlan/home/diary-02.png",
      action: {
        type: "diary",
        target: "d3adab2172594dd68254f2aa082ce4c4"
      }
    },
    {
      id: "1212577bd809498eb9b8d49cba272527",
      title: "自然之息，500㎡极简别墅的松弛哲学",
      byline: "台州丨倾城国际设计",
      image: "/static/banlan/home/diary-03.png",
      action: {
        type: "diary",
        target: "1212577bd809498eb9b8d49cba272527"
      }
    }
  ],
  moreAction: {
    type: "route",
    target: "/pages/fans/fans/fans?tab=diary"
  }
};
const show = {
  title: "兰影展",
  subtitle: "PHOTO GALLERY",
  viewAllLabel: "查看全部",
  items: [
    {
      id: "1694f03e35044f94b04a9869b049d125",
      nickname: "鱼儿",
      address: "西安市",
      image: "/static/banlan/home/show-01.jpg",
      avatar: "/static/banlan/home/show-01-avatar.jpg"
    },
    {
      id: "49e5017c3a0043e9998dfce917e26db7",
      nickname: "美媛儿",
      address: "石家庄市",
      image: "/static/banlan/home/show-02.jpg",
      avatar: "/static/banlan/home/show-02-avatar.jpg"
    },
    {
      id: "89bd1bf642044823b79fbf55305a0033",
      nickname: "糖",
      address: "广州市",
      image: "/static/banlan/home/show-03.jpg",
      avatar: "/static/banlan/home/show-03-avatar.jpg"
    },
    {
      id: "7f0af35252c44f138476240c5a575a8f",
      nickname: "美媛儿",
      address: "石家庄市",
      image: "/static/banlan/home/show-04.jpg",
      avatar: "/static/banlan/home/show-04-avatar.jpg"
    },
    {
      id: "18292",
      nickname: "Cathy朱",
      address: "",
      image: "/static/banlan/home/show-05.jpg",
      avatar: "/static/banlan/home/show-05-avatar.jpg"
    }
  ],
  action: {
    type: "route",
    target: "/pages/fans/fans/fans?tab=show"
  }
};
const about = {
  title: "关于班兰",
  subtitle: "ABOUT BANLAN",
  displayTitle: "中和之美",
  viewAllLabel: "查看全部",
  image: "/static/banlan/home/about.jpg",
  text: "比例、材料、结构与空间，各\n得其所、彼此成全，在差异之\n间形成恰当的关系。\n\n有差异，但不过度；有力量，但不失衡；有表达，但有分寸。",
  action: {
    type: "route",
    target: "/pages/fans/fans/fans?tab=about"
  }
};
const yours = {
  title: "您的店铺",
  subtitle: "YOUR BANLAN STORE",
  image: "/static/banlan/home/your-store.jpg",
  action: {
    type: "route",
    target: "/pages/store/list/list"
  }
};
const news = {
  title: "新鲜事",
  subtitle: "BANLAN NEWS",
  items: [
    {
      id: "46d84fc067c84c9bbd5c5af3adf38248",
      title: "“简牍”：这个世界还少一把椅子么？",
      summary: "在竹子的文化记忆与当代生活之间，寻找一种新的生命力",
      buttonLabel: "查看全文",
      image: "/static/banlan/home/news-01.png",
      action: {
        type: "news",
        target: "46d84fc067c84c9bbd5c5af3adf38248"
      }
    },
    {
      id: "11a44da45f11458ea1cb1ff64b43ff02",
      title: "John Pawson 专访 | 时间会恰当地改变万物",
      summary: "风雨留下的痕迹不是损耗，而是为家具注入了生命",
      buttonLabel: "查看全文",
      image: "/static/banlan/home/news-02.png",
      action: {
        type: "news",
        target: "11a44da45f11458ea1cb1ff64b43ff02"
      }
    },
    {
      id: "b826f3bb1281439fbed1064494260b84",
      title: "从一片竹，到一整套秩序",
      summary: "一把椅子通常从“坐”开始，一张桌子从“承托”开始",
      buttonLabel: "查看全文",
      image: "/static/banlan/home/news-03.png",
      action: {
        type: "news",
        target: "b826f3bb1281439fbed1064494260b84"
      }
    },
    {
      id: "03ea0c51a57e44fea539666b3e083044",
      title: "解决问题的人｜一个不说假话的中国家具品牌如何生存？",
      summary: "Banlan班兰所践行的“表里如一”",
      buttonLabel: "查看全文",
      image: "/static/banlan/home/news-04.png",
      action: {
        type: "news",
        target: "03ea0c51a57e44fea539666b3e083044"
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
    id: "banlan",
    label: "Banlan",
    iconNormal: "/static/banlan/icons/tab-2-normal.png",
    iconActive: "/static/banlan/icons/tab-2-active.png",
    action: {
      type: "tab",
      target: "/pages/fans/fans/fans"
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
    id: "stores",
    label: "店铺",
    iconNormal: "/static/banlan/icons/tab-4-normal.png",
    iconActive: "/static/banlan/icons/tab-4-active.png",
    action: {
      type: "tab",
      target: "/pages/store/list/list"
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
