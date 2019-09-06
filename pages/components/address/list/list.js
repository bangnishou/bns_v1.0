// pages/components/address/list/list.js

var utils = require("../../../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addresses: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    _this.setData({
      addresses: [
        {
          id: "1",
          contact: "阿先生",
          mobile: "13300000000",
          address: "吉林省吉林市龙潭区庆安街3号，1-2-301",
          location: "1.1,2.2",
          first: 0
        },
        {
          id: "2",
          contact: "拨先生",
          mobile: "13400000000",
          address: "吉林省吉林市丰满区吉林大街100号，11-2-301",
          location: "10.10,20.20",
          first: 1
        },
        {
          id: "3",
          contact: "此女士",
          mobile: "13500000000",
          address: "北京市海淀区二里庄100号，11-2-301",
          location: "14.10,25.20",
          first: 0
        }
      ]
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
   * 设置默认地址
   */
  modiDefaultAddress: function (e) {
    let _this = this;
    let id = e.detail.value;
    if (utils.isEmpty(id)) {
      let content = "无法设置此地址，请联系系统管理员！";
      utils.showModal(content, false);
      return;
    };
    console.log(">>>>>>>>>>" + id);
    /*************************************
     * 修改逻辑
     *************************************/
  },

  /**
   * 增加地址
   */
  addAddress: function (e) {
    wx.navigateTo({
      url: "../edit/edit",
    })
  },

  /**
   * 删除地址
   */
  delAddress: function (e) {
    let _this = this;
    let id = e.currentTarget.dataset.id;
    if(utils.isEmpty(id)) {
      let content = "无法删除此地址，请联系系统管理员！";
      utils.showModal(content, false);
      return;
    };
    wx.showModal({
      title: "",
      content: "确认删除？",
      confirmText: "确认",
      cancelText: "取消",
      success: function (res) {
        if (res.confirm) {
          /*************************************
           * 删除逻辑
           *************************************/
        }
      }
    });
  },

  /**
   * 修改地址
   */
  editAddress: function (e) {
    let _this = this;
    let id = e.currentTarget.dataset.id;
    if (utils.isEmpty(id)) {
      let content = "无法编辑此地址，请联系系统管理员！";
      utils.showModal(content, false);
      return;
    };

    let url = "../edit/edit?id=" + id;
    wx.navigateTo({
      url: url
    })
    /*************************************
     * 编辑逻辑
     *************************************/
  }
})