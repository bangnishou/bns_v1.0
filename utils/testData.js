var jumin_dizhi = [
  {
    id: "1",
    contact: "a先生",
    mobile: "13300000001",
    addressRegion: "xx省xx市xx区",
    addressDetail: "xx街x号，x-x-xxx",
    lift: 1,
    longitude: "x.x",
    latitude: "x.x",
    default: 0
  },
  {
    id: "2",
    contact: "a先生",
    mobile: "13300000002",
    addressRegion: "xx省xx市xx区",
    addressDetail: "xx街x号，x-x-xxx",
    lift: 0,
    longitude: "x.x",
    latitude: "x.x",
    default: 1
  },
  {
    id: "3",
    contact: "a先生",
    mobile: "13300000003",
    addressRegion: "xx省xx市xx区",
    addressDetail: "xx街x号，x-x-xxx",
    lift: 1,
    longitude: "x.x",
    latitude: "x.x",
    default: 0
  }
];

var jumin_wode = {
  balance: "199.00",
  totalIncome: "310.00",
  totalWeight: "500.50",
  rate: "2"
}

var jumin_dingdan = [
  {
    orderNo: "2",
    orderTime: "2019-10-10 10:00:00",
    contact: "a先生",
    mobile: "13300000003",
    addressRegion: "xx省xx市xx区",
    addressDetail: "xx街x号，x-x-xxx",
    lift: 1,
    longitude: "x.x",
    latitude: "x.x",
    weight: "5公斤",
    type: "一类：纸箱、饮料瓶、易拉罐（1元/公斤），二类：玻璃、塑料（0.5元/公斤）",
    say: "有大件、上午有人",
    status: "回收志愿者正飞奔而来！"
  },
  {
    orderNo: "1",
    orderTime: "2019-10-06 09:00:00",
    contact: "a先生",
    mobile: "13300000003",
    addressRegion: "xx省xx市xx区",
    addressDetail: "xx街x号，x-x-xxx",
    lift: 1,
    longitude: "x.x",
    latitude: "x.x",
    weight: "5公斤",
    type: "一类：纸箱、饮料瓶、易拉罐（1元/公斤），二类：玻璃、塑料（0.5元/公斤）",
    say: "有大件、上午有人",
    status: "已回收，待评价！"
  }
];

var recyclables_type = [
  {
    id: "6",
    image: "",
    name: "冰箱"
  },
  {
    id: "7",
    image: "",
    name: "电视"
  },
  {
    id: "8",
    image: "",
    name: "电脑"
  },
  {
    id: "1",
    image: "",
    name: "纸箱"
  },
  {
    id: "2",
    image: "",
    name: "饮料瓶"
  },
  {
    id: "3",
    image: "",
    name: "玻璃瓶/玻璃制品"
  },
  {
    id: "4",
    image: "",
    name: "旧衣服"
  },
  {
    id: "5",
    image: "",
    name: "鞋子"
  }
];

var recyclables_price = [
  {
    id: "1",
    typeId: "1",
    image: "",
    name: "纸箱",
    price: "0.00"
  },
  {
    id: "2",
    typeId: "2",
    image: "",
    name: "饮料瓶",
    price: "0.00"
  },
  {
    id: "3",
    typeId: "3",
    image: "",
    name: "玻璃瓶/玻璃制品",
    price: "0.00"
  },
  {
    id: "4",
    typeId: "4",
    image: "",
    name: "旧衣服",
    price: "0.00"
  },
  {
    id: "5",
    typeId: "5",
    image: "",
    name: "鞋子",
    price: "0.00"
  }
];

var huishouzhan_trash = [
  {
    id: "1",
    image: "",
    name: "纸箱",
    price: "0.00"
  },
  {
    id: "2",
    image: "",
    name: "饮料瓶",
    price: "0.00"
  },
  {
    id: "3",
    image: "",
    name: "玻璃瓶/玻璃制品",
    price: "0.00"
  },
  {
    id: "4",
    image: "",
    name: "旧衣服",
    price: "0.00"
  },
  {
    id: "5",
    image: "",
    name: "鞋子",
    price: "0.00"
  }
];

module.exports = {
  jumin_dizhi: jumin_dizhi,
  jumin_wode: jumin_wode,
  jumin_dingdan: jumin_dingdan,
  recyclables_type: recyclables_type,
  recyclables_price: recyclables_price,
  huishouzhan_trash: huishouzhan_trash
}