// pages/chaxun/chaxun.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {   
  },
  errorCheck(){
    wx.redirectTo({
      url: '../errorCheck/errorCheck',
    })    
  },
  errorTest(){
    wx.redirectTo({
      url: '../errorTest/errorTest',
    })    
  }

})