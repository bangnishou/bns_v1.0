// pages/common/dizhi/edit/edit.js

var util = require("../../../../utils/util.js");
var testData = require("../../../../utils/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips: [],
    masterData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!util.isEmpty(options.id)) {
      let id = options.id;
      for(let i = 0 ; i < testData.jumin_dizhi.length ; i++) {
        if (id == testData.jumin_dizhi[i].id) {
          this.setData({
            masterData: testData.jumin_dizhi[i]
          });
          break;
        }
      }
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
   * 选择地区
   */
  selectRegion: function () {
    let url = "../../gaode/inputtips/inputtips?beParent=true";
    wx.navigateTo({
      url: url
    })
  },

  submit: function (e) {
    let _tips = checkForm(e);
    if (_tips.length > 0) {
      this.setData({
        tips: _tips
      });
      return;
    } else {
      this.setData({
        tips: []
      });
    }

    /*******************************
     *                             *
     *            保存表单          *
     *                             *
     *******************************/
    let contact = e.detail.value.contact;
    let mobile = e.detail.value.mobile;
    let addressRegion = e.detail.value.addressRegion;
    let addressDetail = e.detail.value.addressDetail;
    let latitude = this.data.masterData.latitude;
    let longitude = this.data.masterData.longitude;
    
    console.log(">>>>>>>>>>>>保存表单！");
    console.log("contact：" + contact);
    console.log("mobile：" + mobile);
    console.log("addressRegion：" + addressRegion);
    console.log("addressDetail：" + addressDetail);
    console.log("latitude：" + latitude);
    console.log("longitude：" + longitude);

    wx.navigateBack({
      delta: 1
    });
  }
});

/**
   * 填充表单
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
  let addressRegion = e.detail.value.addressRegion;
  let addressDetail = e.detail.value.addressDetail;

  if (util.isEmpty(contact)) {
    _errMsg.push("联系人姓名不能为空！");
  }
  if (util.isEmpty(mobile)) {
    _errMsg.push("手机号码不能为空！");
  } else if (!util.checkMobile(mobile)) {
    _errMsg.push("手机号码错误！");
  }
  if (util.isEmpty(addressRegion)) {
    _errMsg.push("地区信息不能为空！");
  }
  if (util.isEmpty(addressDetail)) {
    _errMsg.push("详细地址不能为空！");
  }

  return _errMsg;
}