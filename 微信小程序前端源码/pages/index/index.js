//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
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
  // tiaozhuan: function (e) {
  //   wx.redirectTo({
  //     url: '../choose/choose',
  //   }),
  //     this.setData({
  //       areaIndex: e.detail.value
  //     })
  // },
  // tiaozhuan2: function (e) {
  //   wx.redirectTo({
  //     url: '../chaxun/chaxun',
  //   }),
  //     this.setData({
  //       areaIndex: e.detail.value
  //     })
  // },
  // bindPickerChange: function (e) {
  //   this.setData({
  //     areaIndex: e.detail.value
  //   })
  // },
  // bindPickerChange2: function (e2) {
  //   this.setData({
  //     areaIndex2: e2.detail.value
  //   })
  // },
  
  //事件处理函数
  
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
