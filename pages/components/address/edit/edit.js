// pages/components/address/edit/edit.js

var utils = require("../../../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    errMsg: [],
    address: {
      region: "",
      houseNo: "",
      theName: "",
      location: ""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;

    /*******************************
     *                             *
     *            查询数据          *
     *                             *
     *******************************/

    //获取地址
    if (options.region == undefined) {
      return;
    }
    let _address = putAddress(options);

    _this.setData({
      address: _address
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
   * 提交表单
   */
  submitAddress: function (e) {
    let _this = this;
    let _errMsg = checkForm(e);

    if (_errMsg.length > 0) {
      _this.setData({
        errMsg: _errMsg
      });
      return;
    }

    /*******************************
     *                             *
     *            保存表单          *
     *                             *
     *******************************/

    wx.navigateTo({
      url: "../list/list",
    })
  },

  /**
   * 选择地区
   */
  selectRegion: function () {
    let url = "../gaode/inputtips/inputtips?beParent=true";
    wx.navigateTo({
      url: url
    })
  }
});

/**
   * 填充地址信息
   */
function putAddress(options) {
  let address = {
    region: options.region,
    houseNo: options.houseNo,
    theName: options.theName,
    location: options.location
  };
  return address;
}

/**
 * 检查表单
 */
function checkForm(e) {
  let _errMsg = [];
  let contact = e.detail.value.contact;
  let mobile = e.detail.value.mobile;
  let region = e.detail.value.region;
  let detail = e.detail.value.detail;

  if (contact == undefined || contact == null || contact.trim() == "") {
    _errMsg.push("联系人姓名不能为空！");
  }
  if (mobile == undefined || mobile == null || mobile.trim() == "") {
    _errMsg.push("手机号码不能为空！");
  } else if (!utils.checkMobile(mobile.trim())) {
    _errMsg.push("手机号码错误！");
  }
  if (region == undefined || region == null || region.trim() == "") {
    _errMsg.push("地区信息不能为空！");
  }
  if (detail == undefined || detail == null || detail.trim() == "") {
    _errMsg.push("详细地址不能为空！");
  }

  return _errMsg;
}