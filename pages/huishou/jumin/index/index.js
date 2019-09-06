// pages/huishou/jumin/index/index.js

var utils = require("../../../../utils/util.js");
var testData = require("../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dizhi: {},
    address: {
      contact: "",
      mobile: "",
      detail: ""
    },
    order: {
      address: {
        contact: "",
        mobile: "",
        detail: ""
      },
      weight: "",
      category: "",
      say: ""
    },
    leftMenuOpen: false,


    weights: [
      { code: "1", name: "少于2公斤" },
      { code: "2", name: "2-5公斤" },
      { code: "3", name: "5-10公斤" },
      { code: "4", name: "10公斤以上" }
    ],
    categorys: [
      { code: "ZHIXIANG", name: "纸箱" },
      { code: "SHUJI", name: "书籍" },
      { code: "YINLIAOPING", name: "饮料瓶" },
      { code: "YILAGUAN", name: "易拉罐" },
      { code: "YIFU", name: "旧衣服" },
      { code: "SHOUJI", name: "旧手机" }
    ],
    says: [
      { code: "DAJIAN", name: "有大件" },
      { code: "WUDIANTI", name: "无电梯" },
      { code: "SHANGWU", name: "上午有人" },
      { code: "XIAWU", name: "下午有人" }
    ],

    addressId: "",
    weightId: "",
    categoryId: [],
    sayId: [],
    errMsg: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for(let i = 0 ; i < testData.jumin_dizhi.length ; i++) {
      if (testData.jumin_dizhi[i].default == 1) {
        this.setData({
          dizhi: testData.jumin_dizhi[i]
        });
        break;
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 左侧导航菜单开关
   */
  leftMenu: function () {
    this.data.leftMenuOpen ? this.setData({ leftMenuOpen: false }) : this.setData({ leftMenuOpen: true });
  },

  /**
   * 查看地址列表
   */
  goDizhi: function () {
    wx.navigateTo({
      url: "../../../common/dizhi/list/list"
    });
  },

  /**
   * 查看礼品
   */
  goLipin: function () {
    wx.navigateTo({
      url: "../../../common/lipin/lipin"
    });
  },

  /**
   * 选择地址
   */
  chooseAddress: function () {
    wx.navigateTo({
      url: "../../../common/dizhi/select/select"
    })
  },

  /**
   * 选择废品重量
   */
  chooseWeight: function (e) {
    let items = this.data.weights;
    let code = e.detail.value;
    for (var i = 0; i < items.length; ++i) {
      items[i].checked = items[i].code == code;
    }
    this.setData({
      weightId: code,
      weights: items
    });
  },

  /**
   * 选择废品种类
   */
  chooseCategory: function (e) {
    let items = this.data.categorys;
    let code = e.detail.value;
    for (var i = 0; i < items.length; i++) {
      if (code.indexOf(items[i].code) != -1) {
        items[i].checked = true;
      } else {
        items[i].checked = false;
      }
    }
    this.setData({
      categoryId: code,
      categorys: items
    });
  },

  /**
   * 选择回收要求
   */
  chooseSay: function (e) {
    var items = this.data.says;
    var codes = e.detail.value;
    for (var i = 0; i < items.length; i++) {
      if (codes.indexOf(items[i].code) != -1) {
        items[i].checked = true;
      } else {
        items[i].checked = false;
      }
    }
    this.setData({
      says: items
    });
  },

  /**
   * 发送回收订单
   */
  submitOrder: function (e) {
    let _this = this;
    let _errMsg = checkForm(this.data);

    _this.setData({
      errMsg: _errMsg
    });
    if (_errMsg.length > 0) {
     return;
    }

    putForm(this.data);
    // 保存
    wx.navigateTo({
      url: "../orders/orders",
    })
  },

  /**
   * 我的环保
   */
  goMine: function (e) {
    wx.navigateTo({
      url: "../mine/mine",
    });
  },

  /**
   * 扫一扫
   */
  goScan: function () {
    // 从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res.result)
      }
    });
  },

  /**
   * 付款
   */
  goPayment: function () {
    wx.navigateTo({
      url: "../../../common/qrcode/qrcode",
    });
  },

  /**
   * 收款
   */
  goIncome: function () {
    wx.navigateTo({
      url: "../../../common/qrcode/qrcode",
    });
  }
});

/**
 * 检查表单
 */
function checkForm(data) {
  let _errMsg = [];
  if (utils.isEmpty(data.addressId)) {
    _errMsg.push("请选择回收地址！");
  }
  if (utils.isEmpty(data.weightId)) {
    _errMsg.push("请选择废品重量！");
  }
  if (data.categoryId.length == 0) {
    _errMsg.push("请选择废品种类！");
  }

  return _errMsg;
}

/**
 * 填充表单
 */
function putForm(data) {

}