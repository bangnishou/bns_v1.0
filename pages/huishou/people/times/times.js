// pages/huishou/people/times/times.js

var util = require("../../../../utils/util.js");
var testData = require("../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ids: "",
    times: [
      {
        id: "1",
        desc: "白天有人"
      },
      {
        id: "2",
        desc: "上午有人"
      },
      {
        id: "3",
        desc: "下午有人"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    if (!util.isEmpty(prevPage.data.times.id)) {
      this.setData({
        id: prevPage.data.times.id
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
   * 选择时间
   */
  selectTimes: function (e) {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    let index = e.detail.value;
    let times = this.data.times[index];
    prevPage.setData({
      times: times
    });
  },

  /**
   * 选中返回
   */
  goBack: function () {
    wx.navigateBack({
      delta: 1
    });
  }
})