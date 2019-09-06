// pages/huishou/huishouyuan/my/cert/cert.js

var util = require("../../../../../utils/util.js");
var testData = require("../../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    headURL: "",
    idfrontURL: "",
    idbackURL: "",
    agree: false,
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
   * 认证
   */
  goCert: function (e) {
    let type = e.currentTarget.dataset.type;
    this.setData({
      type: type
    });
  },

  /**
   * 拍照
   */
  takePhoto: function (e) {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        let imageURL = encodeURI(res.tempImagePath);
        switch (this.data.type) {
          case "HEAD" :
            this.setData({
              headURL: imageURL
            });
            break;
          case "IDFRONT":
            this.setData({
              idfrontURL: imageURL
            });
            break;
          case "IDBACK":
            this.setData({
              idbackURL: imageURL
            });
            break;
          default :
            return;
        }
      }
    })
  },

  /**
   * 提交
   */
  formSubmit: function (e) {
    let headURL = this.data.headURL;
    let idfrontURL = this.data.idfrontURL;
    let idbackURL = this.data.idbackURL;
    let name = e.detail.value.name;
    let mobile = e.detail.value.mobile;
    let tips = [];
    if (util.isEmpty(headURL)) {
      tips.push("请完成头像拍照！");
    }
    if (util.isEmpty(idfrontURL)) {
      tips.push("请完成身份证正面拍照！");
    }
    if (util.isEmpty(idbackURL)) {
      tips.push("请完成身份证背面拍照！");
    }
    if(util.isEmpty(name)) {
      tips.push("姓名不能为空！");
    }
    if (util.isEmpty(mobile)) {
      tips.push("手机号码不能为空！");
    } else if (!util.checkMobile(mobile)) {
      tips.push("手机号码格式错误！");
    }
    this.setData({
      name: name,
      mobile: mobile,
      tips: tips
    });
    if(tips.length == 0) {
      wx.navigateBack({
        delta: 1
      });
    }
  }
})