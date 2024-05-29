// pages/errorCheck/errorCheck.js
Page({
  data: {
    history: [] // 存储从云数据库中获取到的错题列表数据
  },
  onLoad: function(options) {
    
    this.getHistory(getApp().globalData.openid); // 页面加载时调用获取错题列表的方法
  },
  getHistory: function(openid) {
    wx.cloud.callFunction({
      name: 'getTestInfo',
      data: {
        openid: openid
      },
      success: res => {
        console.log('getTestInfo成功', res);
        this.setData({
          history: res.result 
        });
      },
      fail: err => {
        console.error('getTestInfo失败', err);
      }
    });
   
  },

  goBack() {
    wx.switchTab({
      url: '../user/user',
    }) 
  },
});