// pages/huishou/people/weight/weight.js

var util = require("../../../../utils/util.js");
var testData = require("../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    weight: [
      {
        id: "1",
        desc: "少于5斤"
      },
      {
        id: "2",
        desc: "5-10斤"
      },
      {
        id: "3",
        desc: "10斤以上"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    if (!util.isEmpty(prevPage.data.weight.id)) {
      this.setData({
        id: prevPage.data.weight.id
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
   * 选择重量
   */
  selectWeight: function (e) {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    let index = e.detail.value;
    let weight = this.data.weight[index];
    prevPage.setData({
      weight: weight
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