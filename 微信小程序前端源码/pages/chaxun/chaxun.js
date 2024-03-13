// pages/chaxun/chaxun.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputContent: {},
    zql: 1.0,
    time: "",
    rightNum: 0,
    wrongNum: 0,
    ID: "",
    textdata: "",
    time: "",
    result:[],
  },
  IDInput: function (e) {
    this.setData({
      ID: e.detail.value
    })
  },

  request: function () {
    var that = this;
    wx.request({
      url: 'https://www.sunyinan.top',
      data: {
        name: this.data.ID
      },
      method: 'POST',
      header: {
        'content-Type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        
        var result ="<table class='result-table'><tr><th>答对</th><th>答错</th><th>正确率</th><th>使用时间</th></tr>"
        //将获得的结果全部拆开
        res.data.split(";").forEach(function(item){
          result+="<tr>"
          item.split(",").forEach(function(item){
            result+="<td>"
            result+=item;
            result+="</td>"
          })
          result+="</tr>"
        }) 
        result += "</table>"

        console.log(result)
        this.setData({
          result: result
        })
        
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
  }, 
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      time: time
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
  
  }
})