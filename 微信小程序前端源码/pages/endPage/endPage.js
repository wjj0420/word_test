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
  addTestInfo:function(rightNum,wrongNum,time,openid){
  wx.cloud.callFunction({
    name: 'addTestInfo',
    data: {
      rightNum:rightNum,
      wrongNum: wrongNum,
      time:time,
      openid:openid
    },
    success: res => {
      console.log('调用addTestInfo成功',openid)
    },
    fail: err => {
      console.error('调用addTestInfo失败：', err)
    }
  })
 },
  daka:function(){
    var rightNum=this.data.rightNum;
    var wrongNum=this.data.wrongNum;
    var time=this.data.time;
    var openid=getApp().globalData.openid;
    this.addTestInfo(rightNum,wrongNum,time,openid);
    wx.switchTab({
      url: '../index/index',
    })
  },

  return: function () {

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

