//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    hideScrollView: true ,
    userInfo: {},
    areaIndex: 0,
    area: ['Book 1', 'Book 2', 'Book 3', 'Book 4'],
    areaIndex2: 0,
    area2: ['全部', 'Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6', 'Unit 7', 'Unit 8'],
    nowBook:0,
    book:[{
      src:"../../img/book_1.jpg",
      content:"book1"
    }, {
      src: "../../img/book_2.jpg",
      content: "book2"
      }, {
        src: "../../img/book_3.jpg",
        content: "book3"
    }, {
      src: "../../img/book_4.jpg",
      content: "book4"
    }]
  }, 
  getOpenId() {
    wx.showLoading({
      title: '',
    });
    wx.cloud
      .callFunction({
        name: 'getOpenid',
        data: {
          type: 'getOpenId',
        },
      })
      .then((resp) => {
        this.setData({
          haveGetOpenId: true,
          openId: resp.result.openid,
        });
        wx.hideLoading();
        app.globalData.openid=resp.result.openid
      })
      .catch((e) => {
        this.setData({
          showUploadTip: true,
        });
        wx.hideLoading();
      });
     
      
  },
  handleLogin() {
    // 模拟登录操作，假设登录成功后延时2秒隐藏tabbar和scroll-view
    wx.showLoading({
      title: '正在登录...',
    });
    // 模拟登录操作，假设登录成功后延时2秒隐藏tabbar和scroll-view
    this.getOpenId()
    setTimeout(() => {
      wx.hideLoading();
      // 模拟登录成功
      this.setData({
        hideScrollView: false
      });
      // 登录成功后隐藏tabbar
      wx.showTabBar();
    }, 500);
  },
  
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        nowBook: app.globalData.nowBook,
      })
    })
    wx.hideTabBar();
  },

  //更改书的函数
  changeBook:function(e){
    if (e.detail.scrollLeft/180>this.data.nowBook){
      let newBook=this.data.nowBook+1
      this.setData({
        nowBook:newBook,
      })
    }
    else if (e.detail.scrollLeft/190<=this.data.nowBook-1){
      let newBook = this.data.nowBook - 1
      this.setData({
        nowBook: newBook,
      })
    }
  },

  selectBook:function(){
    app.globalData.nowBook = this.data.nowBook
    wx.switchTab({
      url:"../choose/choose"
    })
  }
})
