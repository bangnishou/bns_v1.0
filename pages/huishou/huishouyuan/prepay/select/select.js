// pages/huishou/huishouyuan/prepay/select/select.js

var utils = require("../../../../../utils/util.js");
var testData = require("../../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    amount: 0,
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
   * 提交
   */
  submitDay: function (e) {
    let amount = e.detail.value.amount;
    this.setData({
      type: "",
      amount: 0
    });
    if(isNaN(amount) || amount < 1) {
      this.setData({
        tips: ["请输入正确天数！"]
      });
    } else {
      this.setData({
        type: "DAY",
        amount: amount,
        tips: []
      });
    }
    wx.navigateTo({
      url: "../confirm/confirm",
    });
  },

  /**
   * 提交
   */
  submitMonth: function (e) {
    let amount = e.detail.value.amount;
    this.setData({
      type: "",
      amount: 0
    });
    if (isNaN(amount) || amount < 1) {
      this.setData({
        tips: ["请输入正确月数！"]
      });
    } else {
      this.setData({
        type: "MONTH",
        amount: amount,
        tips: []
      });
      wx.navigateTo({
        url: "../confirm/confirm",
      });
    }    
  },

  /**
   * 提交
   */
  submitYear: function (e) {
    let amount = e.detail.value.amount;
    this.setData({
      type: "",
      amount: 0
    });
    if (isNaN(amount) || amount < 1) {
      this.setData({
        tips: ["请输入正确年数！"]
      });
    } else {
      this.setData({
        type: "YEAR",
        amount: amount,
        tips: []
      });
      wx.navigateTo({
        url: "../confirm/confirm",
      });
    }    
  }
})