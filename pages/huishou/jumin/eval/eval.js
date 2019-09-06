// pages/huishou/jumin/eval/eval.js

var util = require("../../../../utils/util.js");
var testData = require("../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    recycler: "x师傅",
    stars: [0, 1, 2, 3, 4],
    starsDesc: ["很差", "差", "一般", "满意", "超赞"],
    serviceSelect: [0, 0, 0, 0, 0],
    serviceDesc: "",
    weightSelect: [0, 0, 0, 0, 0],
    weightDesc: "",
    paySelect: [0, 0, 0, 0, 0],
    payDesc: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!util.isEmpty(options.id)) {
      this.setData({
        id: options.id
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
    console.log(">>>>>>>>>>>" + this.data.id);
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
   * 评价
   */
  goStars: function (e) {
    let type = e.currentTarget.dataset.type;
    let value = e.currentTarget.dataset.value;
    if(type == "service") {
      let serviceSelect = [0, 0, 0, 0, 0];
      for(let i = 0 ; i <= value ; i++) {
        serviceSelect[i] = 1;
      }
      this.setData({
        serviceSelect: serviceSelect,
        serviceDesc: this.data.starsDesc[value]
      });
    }
    if (type == "weight") {
      let weightSelect = [0, 0, 0, 0, 0];
      for (let i = 0; i <= value; i++) {
        weightSelect[i] = 1;
      }
      this.setData({
        weightSelect: weightSelect,
        weightDesc: this.data.starsDesc[value]
      });
    }
    if (type == "pay") {
      let paySelect = [0, 0, 0, 0, 0];
      for (let i = 0; i <= value; i++) {
        paySelect[i] = 1;
      }
      this.setData({
        paySelect: paySelect,
        payDesc: this.data.starsDesc[value]
      });
    }
  }
})