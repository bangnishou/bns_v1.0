// pages/huishou/jumin/mine/mine.js

var testData = require("../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    masterData: [],
    orders: []
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
      masterData: testData.jumin_wode,
      orders: testData.jumin_dingdan
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
   * 去评价
   */
  goEval: function (e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../eval/eval?id=" + id,
    });
  },

  /**
   * 我的家庭
   */
  goFamily: function () {
    wx.navigateTo({
      url: "../family/family",
    });
  }
})