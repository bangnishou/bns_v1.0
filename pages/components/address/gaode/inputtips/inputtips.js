// pages/components/address/gaode/inputtips/inputtips.js

var config = require("../../../../../libs/config.js");
var utils = require("../../../../../utils/util.js");
var amapFile = require("../../../../../libs/amap-wx.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    beParent: false,
    tips: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    //获取地址
    if (options.beParent != undefined) {
      _this.setData({
        beParent: true
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
   * 输入查询地区
   */
  bindInput: function (e) {
    let that = this;
    let keywords = e.detail.value;
    let key = config.Config.key;
    let myAmapFun = new amapFile.AMapWX({ key: key });
    myAmapFun.getInputtips({
      keywords: keywords,
      success: function (data) {
        if (data && data.tips) {
          that.setData({
            tips: data.tips
          });
        }
      }
    })
  },

  /**
   * 选中地区
   */
  selectedRegion: function (e) {
    let theValue = e.detail.value;
    let address;
    let content= "您选择的地址无效，请重新选择！";
    if (theValue == undefined || theValue == null) {      
      utils.showModal(content, false);
    } else {
      address = theValue.split("&");
      let region = address[0];
      let houseNo = address[1];
      let theName = address[2];
      let location = address[3];
      if (location == undefined || location == null || location == "") {
        utils.showModal(content, false);
      } else {
        let url = "../../edit/edit?region=" + region + "&houseNo=" + houseNo + "&theName=" + theName + "&location=" + location;
        wx.navigateTo({
          url: url
        })
      }
    }
  }
})