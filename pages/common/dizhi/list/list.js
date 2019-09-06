// pages/common/dizhi/list/list.js

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
    this.setData({
      masterData: testData.jumin_dizhi
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
    if (this.data.defaultID != ""){
      console.log(">>>>>>>>>>>>>>>>" + this.data.defaultID);
    }    
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
   * 修改默认地址
   */
  changeDefault: function (e) {
    this.setData({
      defaultID: e.detail.value
    });
    console.log(">>>>>>>>>>>>>>>>" + e.detail.value);
  },

  /**
   * 新建地址
   */
  goCreate: function (e) {
    let url = "../edit/edit";
    wx.navigateTo({
      url: url
    });
  },

  /**
   * 编辑地址
   */
  goEdit: function (e) {
    let id = e.currentTarget.dataset.id;
    let url = "../edit/edit?id=" + id;
    wx.navigateTo({
      url: url
    });
  },

  /**
   * 删除地址
   */
  goDelete: function (e) {
    let id = e.currentTarget.dataset.id;
    console.log(">>>>>>>>>>>" + id)
    this.onShow();
  }
})