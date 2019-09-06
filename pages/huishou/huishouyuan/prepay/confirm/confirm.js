// pages/huishou/huishouyuan/prepay/confirm/confirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unit: "",
    endDate: "",
    payment: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    let type = prevPage.data.type;
    let amount = prevPage.data.amount;    
    let unit = "";
    switch (type) {
      case "DAY" :
        unit = "天";
        break;
      case "MONTH" :
        unit = "月";
        break;
      case "YEAR" :
        unit = "年";
        break;
      default :
        return;
    }
    this.setData({
      unit: unit,
      endDate: "xxxx年xx月xx日",
      payment: "0.00"
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
   * 提交
   */
  goPaymet: function (e) {
    
  }
})