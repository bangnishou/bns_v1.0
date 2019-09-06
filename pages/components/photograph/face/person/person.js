// pages/components/photograph/face/person/person.js

var config = require("../../../../../libs/config.js");

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
    let imageURL = options.imageURL;
    let faceDetectURL = "https://api-cn.faceplusplus.com/facepp/v3/detect";
    wx.request({
      url: faceDetectURL,
      method: POST,
      data: {
        api_key: config.Config.face_key,
        api_secret: config.Config.face_secret,
        image_url: imageURL,
        return_landmark: 1
      },
      header: {
        "content-type": "application/json"
      },
      success: function(res) {
        console.log(res.data)
      }
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

  }
})