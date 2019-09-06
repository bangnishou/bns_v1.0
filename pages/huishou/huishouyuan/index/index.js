// pages/huishou/huishouyuan/index/index.js

var utils = require("../../../../utils/util.js");
var testData = require("../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

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
   * 回收历史
   */
  goHistory: function () {
    wx.navigateTo({
      url: "../history/history",
    })
  },

  /**
   * 报价
   */
  goQuoted: function () {
    wx.navigateTo({
      url: "../quoted/edit/edit",
    })
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