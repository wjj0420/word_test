//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log(getCurrentPages())
    wx.cloud.init({
     
      traceUser: true,
      env:"cloud1-4gwgratj4ffb4d67",
  })
    wx.login({
      success:function(res){
        wx.getUserInfo({
          success:function(res){
            console.log(res)
          }
        })
      }
    })
  },
  

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    bookNum: 1,
    rightNum: 0,
    wrongNum: 0,
    bookUnit: [],
    nowBook:0//当前是哪本书
  },

  
  
})
