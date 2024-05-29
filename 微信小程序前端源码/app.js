//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.cloud.init({
      env: 'cloud1-9g3cfsud0e4d1f22' // 你的云开发环境ID
    });
    //console.log(getCurrentPages())
    wx.login({
      success:function(res){
        wx.getUserInfo({
          success:function(res){
            //console.log(res)
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
    nowBook:0,//当前是哪本书
    openid:0
  },

  
  
})
