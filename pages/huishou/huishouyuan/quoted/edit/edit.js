// pages/huishou/huishouyuan/quoted/edit/edit.js

var utils = require("../../../../../utils/util.js");
var testData = require("../../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    masterData: [],
    tempData: [],
    otherIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      masterData: testData.recyclables_price
    });
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
   * 废品列表
   */
  goList: function () {
    let masterData = this.data.masterData;
    let params = "";
    for (let i = 0; i < masterData.length; i++) {
      if(i > 0 ) {
        params += ",";
      }
      params += masterData[i].typeId;
    }
    wx.navigateTo({
      url: "../list/list?params=" + params
    })
  },

  /**
   * 删除
   */
  goDelete: function (e) {
    let index = e.currentTarget.dataset.index;
    this.data.masterData.splice(index, 1);
    this.setData({
      masterData: this.data.masterData
    });
  },

  /**
   * 提交
   */
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.navigateTo({
      url: "../publish/publish?parent=1"
    })
  }
})