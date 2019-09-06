// pages/huishou/huishouyuan/quoted/list/list.js

var util = require("../../../../../utils/util.js");
var testData = require("../../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    masterData: [],
    parent: false,
    params: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!util.isEmpty(options.params)) {
      this.setData({
        parent: true,
        params: options.params.split(",")
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
    let params = this.data.params;
    let tempData = testData.recyclables_type;
    let result = [];
    for (let i = 0; i < tempData.length; i++) {
      if(params.indexOf(tempData[i].id) == -1) {
        result.push(tempData[i]);
      }
    }
    this.setData({
      masterData: result
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
   * 提交
   */
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    if(!this.data.parent) {
      return;
    }
    let select = e.detail.value;
    // 当前页面
    let pages = getCurrentPages();
    //上一个页面
    let prevPage = pages[pages.length - 2];
    // 如果没有选择任何分类，直接返回
    if (select.recyclables.length > 0) {
      // 如果选择了分类，封装数据
      for (let i = 0; i < select.recyclables.length; i++) {
        let index = select.recyclables[i];        
        let item = null;
        let target = null;
        if(isNaN(index)) {
          // if(!isNaN(select.other)) {
          //   target = {
          //     id: "",
          //     typeId: "other",
          //     image: item.image,
          //     name: item.name,
          //     price: ""
          //   };
          // }
        } else {
          item = this.data.masterData[index];
          target = {
            id: "",
            typeId: item.id,
            image: item.image,
            name: item.name,
            price: ""
          };
        }
        prevPage.data.masterData.push(target);
      }
    }
    prevPage.setData({
      masterData: prevPage.data.masterData
    });
    wx.navigateBack({
      delta: 1
    });
  }
})