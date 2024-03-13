// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grade:[],
    animation1 :"",
    animation2: "",
    animation3: "",
    animation4: "",
    animation5: "",
    animation6: "",
    animation7: "",
    animation8: "",
    animation9: "",
    animation10: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.sunyinan.top',
      data: {
        paihang: 1
      },
      method: 'POST',
      header: {
        'content-Type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        var grade=[]
        res.data.split(";").forEach(function(e){
          let esplit=e.split(",")
          let tempClass={
            id: esplit[0],
            grade:esplit[1],
            tpre:esplit[2],
            time:esplit[3]
          }
          grade.push(tempClass)
        })
        this.setData({
          grade:grade
        })
        //console.log(this.data.grade)

        //动画列表
        
        this.animation1 = wx.createAnimation({
          duration: 1000,
          timingFunction: "ease",
          delay: 0
        })
        this.animation2 = wx.createAnimation({
          duration: 1000,
          timingFunction: "ease",
          delay: 500
        })
        this.animation3 = wx.createAnimation({
          duration: 1000,
          timingFunction: "ease",
          delay: 1000
        })
        this.animation4 = wx.createAnimation({
          duration: 1000,
          timingFunction: "ease",
          delay: 1500
        })
        this.animation5 = wx.createAnimation({
          duration: 1000,
          timingFunction: "ease",
          delay: 2000
        })
        this.animation6 = wx.createAnimation({
          duration: 1000,
          timingFunction: "ease",
          delay: 2500
        })
        this.animation7 = wx.createAnimation({
          duration: 1000,
          timingFunction: "ease",
          delay: 3000
        })
        this.animation8 = wx.createAnimation({
          duration: 1000,
          timingFunction: "ease",
          delay: 3500
        })
        this.animation9 = wx.createAnimation({
          duration: 1000,
          timingFunction: "ease",
          delay: 4000
        })
        this.animation10 = wx.createAnimation({
          duration: 1000,
          timingFunction: "ease",
          delay: 4500
        })

        
        this.show()
        

      },
      fail: () => {
        // fail  
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
   
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

  show:function(){
    this.animation1.opacity(1).step()
    this.animation2.opacity(1).step()
    this.animation3.opacity(1).step()
    this.animation4.opacity(1).step()
    this.animation5.opacity(1).step()
    this.animation6.opacity(1).step()
    this.animation7.opacity(1).step()
    this.animation8.opacity(1).step()
    this.animation9.opacity(1).step()
    this.animation10.opacity(1).step()
    this.setData({
      animation1: this.animation1.export(),
      animation2: this.animation2.export(),
      animation3: this.animation3.export(),
      animation4: this.animation4.export(),
      animation5: this.animation5.export(),
      animation6: this.animation6.export(),
      animation7: this.animation7.export(),
      animation8: this.animation8.export(),
      animation9: this.animation9.export(),
      animation10: this.animation10.export()
    })
  }
})