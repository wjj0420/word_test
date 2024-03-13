// pages/endPage/endPage.js
var inputContent = {}
var util = require('../../utils/util.js');
//var hotapp = require('../utils/hotapp.js');
Page({
  data: {
    inputContent: {},
    zql: 1.0,
    time: "",
    rightNum: 0,
    wrongNum: 0,
    ID: ""
  },

  IDInput: function (e) {
    this.setData({
      ID: e.detail.value
    })
  },

  tiaozhuan: function () {

    var rightNum = getApp().globalData.rightNum;
    
    var wrongNum = getApp().globalData.wrongNum;
    var ceshi = this.data.ID;
    if(ceshi==""){
      wx.showModal({
        cancelText: '不好',
        confirmText: '好的',
        title: '信息不完整',
        content: '请输入您的学号',
        success: function (res) {
          if (res.cancel) {
            wx.redirectTo({
              url: '../index/index',
            })
          }
        }
      })
    }
    else{
        wx.request({
        url: 'https://www.sunyinan.top',
        data: {
          name: this.data.ID,
          addr: rightNum,
          addr2: wrongNum
        },
        method:'POST',
        header: {
          'content-Type': 'application/x-www-form-urlencoded'
        },

        success: function (res) {
          console.log(res)
        }
      })
        wx.switchTab({
          url: '../index/index',
        })
      rightNum = 0;
      getApp().globalData.rightNum = rightNum;
      wrongNum = 0;
      getApp().globalData.wrongNum = wrongNum;
    }
    
  },
  luguofun: function () {

    wx.switchTab({
      url: '../index/index',
    })
    var rightNum = getApp().globalData.rightNum;
    rightNum = 0;
    getApp().globalData.rightNum = rightNum;
    var wrongNum = getApp().globalData.wrongNum;
    wrongNum = 0;
    getApp().globalData.wrongNum = wrongNum;
  },
  onLoad: function () {
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      time: time
    });
      this.setData({
        rightNum: getApp().globalData.rightNum
      })
      this.setData({
        wrongNum: getApp().globalData.wrongNum
      })
      var hehe = this.data.rightNum / (this.data.rightNum + this.data.wrongNum)*100;
      this.setData({
        zql: hehe.toFixed(2)
      })
  }




 })

