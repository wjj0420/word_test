// pages/errorCheck/errorCheck.js
Page({
  data: {
    errorWords: [] // 存储从云数据库中获取到的错题列表数据
  },
  onLoad: function(options) {
    
    this.getWrongQuestions(getApp().globalData.openid); // 页面加载时调用获取错题列表的方法
  },
  getWrongQuestions: function(openid) {
    wx.cloud.callFunction({
      name: 'getErrorWords',
      data: {
        openid: openid
      },
      success: res => {
        console.log('获取错题列表成功', res);
        this.setData({
          errorWords: res.result // 将获取到的错题列表数据存储到页面数据中
        });
      },
      fail: err => {
        console.error('获取错题列表失败', err);
      }
    });
   
  },

  goBack() {
    wx.switchTab({
      url: '../errorWords/errorWords',
    }) 
  },
});