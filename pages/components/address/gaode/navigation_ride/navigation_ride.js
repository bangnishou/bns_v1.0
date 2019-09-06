// pages/components/address/gaode/navigation_ride/navigation_ride.js

var config = require("../../../../../libs/config.js");
var utils = require("../../../../../utils/util.js");
var amapFile = require("../../../../../libs/amap-wx.js");

Page({
  data: {
    markers: [{
      iconPath: "../img/mapicon_navi_s.png",
      id: 0,
      latitude: 39.989643,
      longitude: 116.481028,
      width: 23,
      height: 33
    }, {
      iconPath: "../img/mapicon_navi_e.png",
      id: 0,
      latitude: 39.90816,
      longitude: 116.434446,
      width: 24,
      height: 34
    }],
    distance: '',
    polyline: []
  },
  onLoad: function () {
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({ key: key });
    myAmapFun.getRidingRoute({
      origin: '116.481028,39.989643',
      destination: '116.434446,39.90816',
      success: function (data) {
        var points = [];
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          var steps = data.paths[0].steps;
          for (var i = 0; i < steps.length; i++) {
            var poLen = steps[i].polyline.split(';');
            for (var j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            }
          }
        }
        that.setData({
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }]
        });
        if (data.paths[0] && data.paths[0].distance) {
          let distance = "[" + (data.paths[0].distance / 1000).toFixed(2) + "公里]";
          that.setData({
            distance: distance
          });
        }
      },
      fail: function (info) {

      }
    })
  },
  goToRide: function (e) {
    wx.redirectTo({
      url: '../navigation_ride/navigation_ride'
    })
  },
  goDetail: function () {
    wx.navigateTo({
      url: '../navigation_ride_detail/navigation_ride_detail'
    })
  },
  goToCar: function (e) {
    wx.redirectTo({
      url: '../navigation_car/navigation_car'
    })
  }
})