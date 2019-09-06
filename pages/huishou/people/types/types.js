// pages/huishou/people/types/types.js

var util = require("../../../../utils/util.js");
var testData = require("../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ids: "",
    types: [
      {
        id: "1",
        name: "纸壳"
      },
      {
        id: "2",
        name: "书籍"
      },
      {
        id: "3",
        name: "饮料瓶"
      },
      {
        id: "4",
        name: "易拉罐"
      },
      {
        id: "5",
        name: "旧电脑"
      },
      {
        id: "6",
        name: "其它"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    if (!util.isEmpty(prevPage.data.ids)) {
      let items = this.data.types;
      let ids = prevPage.data.ids;
      for (let i = 0; i < items.length; i++) {
        if (ids.indexOf(items[i].id) != -1) {
          items[i].checked = true;
        }
      }
      this.setData({
        ids: ids,
        types: items
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
   * 选择废品种类
   */
  selectTypes: function (e) {
    let ids = e.detail.value;
    this.setData({
      ids: ids
    });
  },

  /**
   * 选中返回
   */
  goBack: function () {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    let items = this.data.types;
    let ids = this.data.ids;
    let types = [];
    for (let i = 0; i < items.length; i++) {
      if (this.data.ids.indexOf(items[i].id) != -1) {
        types.push(items[i]);
      }
    }
    prevPage.setData({
      types: types,
      ids: ids
    });
    wx.navigateBack({
      delta: 1
    });
  }
})