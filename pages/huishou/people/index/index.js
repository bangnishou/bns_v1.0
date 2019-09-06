// pages/huishou/people/index/index.js

var util = require("../../../../utils/util.js");
var testData = require("../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dizhi: {},
    types: [],
    weight: {},
    times: {},
    ids: "",
    tips: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
      tips: []
    });
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
   * 选择地址
   */
  chooseAddress: function () {
    wx.navigateTo({
      url: "../../../common/dizhi/select/select"
    })
  },

  /**
  * 种类
  */
  goTypes: function () {
    wx.navigateTo({
      url: "../types/types",
    });
  },

  /**
   * 重量
   */
  goWeight: function () {
    wx.navigateTo({
      url: "../weight/weight",
    });
  },

  /**
   * 时间段
   */
  goTimes: function () {
    wx.navigateTo({
      url: "../times/times",
    });
  },

  /**
   * 提交订单
   */
  submitOrder: function () {
    let tips = [];    
    if (util.isEmpty(this.data.dizhi.id)) {
      tips.push("请选择回收地址！");
    }
    if (this.data.types.length == 0) {
      tips.push("请选择废品种类！");
    }
    if (util.isEmpty(this.data.weight.id)) {
      tips.push("请选择废品重量！");
    }
    if (util.isEmpty(this.data.times.id)) {
      tips.push("请选择回收时间段！");
    }
    this.setData({
      tips: tips
    });
  },

  /**
   * 订单
   */
  goOrders: function () {
    wx.navigateTo({
      url: "../orders/list/list",
    });
  },

  /**
   * 预支付选择
   */
  goPrepay: function () {
    wx.navigateTo({
      url: "../prepay/select/select",
    })
  },

  /**
   * 使用帮助
   */
  goHelp: function () {
    wx.navigateTo({
      url: "../help/help",
    });
  },

  /**
   * 我
   */
  goMy: function () {
    wx.navigateTo({
      url: "../my/view/view",
    });
  }
})