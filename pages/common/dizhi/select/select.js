// pages/common/dizhi/select/select.js

var util = require("../../../../utils/util.js");
var testData = require("../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultID: "",
    masterData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    this.setData({
      masterData: testData.jumin_dizhi
    });
    if (!util.isEmpty(prevPage.data.dizhi.id)) {
      this.setData({
        defaultID: prevPage.data.dizhi.id
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
    console.log("刷新页面！");
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
  select: function (e) {
    let pages = getCurrentPages();
    //上一个页面
    let prevPage = pages[pages.length - 2];
    let selectID = e.detail.value;
    if (selectID != prevPage.data.dizhi.id) {
      let masterData = this.data.masterData;
      for (let i = 0; i < masterData.length ; i++) {
        if (selectID == masterData[i].id) {
          //直接调用上一个页面对象的setData()方法，把数据存到上一个页面中去        
          prevPage.setData({
            "dizhi": masterData[i]
          });
          break;
        }
      }
    }
    wx.navigateBack({
      delta: 1
    });
  },

  /**
   * 直接返回
   */
  goBack: function () {
    wx.navigateBack({
      delta: 1
    });
  },

  /**
   * 管理地址
   */
  goList: function (e) {
    let url = "../list/list";
    wx.navigateTo({
      url: url
    });
  }
})