// pages/huishou/huishouyuan/quoted/publish/publish.js

var util = require("../../../../../utils/util.js");
var testData = require("../../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    parent: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!util.isEmpty(options.parent)) {
      this.setData({
        parent: true
      });
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
   * 发布价格
   */
  goPublish: function () {    
    /**
     * 保存数据
     */
    wx.navigateTo({
      url: "../../index/index",
    });
  },

  /**
   * 直接返回
   */
  goBack: function () {
    wx.navigateBack({
      delta: 1
    });
  }
})