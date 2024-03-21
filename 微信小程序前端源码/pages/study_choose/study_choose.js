//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '单词测试',
    userInfo: {},
    areaIndex: 0,
    lujing: '',
    area: ['Book 1', 'Book 2', 'Book 3', 'Book 4'],
    items: [
      { value: 1, text: 'Unit 1', type: 'circle' },
      { value: 2, text: 'Unit 2', type: 'circle' },
      { value: 3, text: 'Unit 3', type: 'circle' },
      { value: 4, text: 'Unit 4', type: 'circle' },
      { value: 5, text: 'Unit 5', type: 'circle' },
      { value: 6, text: 'Unit 6', type: 'circle' },
      { value: 7, text: 'Unit 7', type: 'circle' },
      { value: 8, text: 'Unit 8', type: 'circle' },
    ] 
  },


  bindCheckbox: function (e) {
    /*绑定点击事件，将checkbox样式改变为选中与非选中*/

    //拿到下标值，以在items作遍历指示用
    var index = parseInt(e.currentTarget.dataset.index);
    //原始的icon状态
    var type = this.data.items[index].type;
    var items = this.data.items;
    if (type == 'circle') {
      //未选中时
      items[index].type = 'success_circle';
    } else {
      items[index].type = 'circle';
    }
    // 写回经点击修改后的数组
    this.setData({
      items: items
    });
    // 遍历拿到已经勾选的值
    var checkedValues = [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].type == 'success_circle') {
        checkedValues.push(items[i].value);
      }
    }
    // 写回data，供提交到网络
    this.setData({
      checkedValues: checkedValues
    });
    app.globalData.bookUnit = checkedValues;
  },







  tiaozhuan: function () {
    wx.redirectTo({
      url: this.data.lujing,
    })
  },
  

  //事件处理函数
  bindViewTap: function () {
    //wx.navigateTo({
    //  url: '../logs/logs'
    //})
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      }) 
    })
  },

  onShow: function(){
    var lujing = ""
    console.log(app.globalData.nowBook)
    switch (app.globalData.nowBook) {
      case 0:
        lujing = '../study/study';
        break;
      case 1:
        lujing = '../book2/book2';
        break;
      case 2:
        lujing = '../book3/book3';
        break;
      case 3:
        lujing = '../book4/book4';
        break;
      default:
        lujing = '../book1/book1';
    }
    this.setData({
      lujing: lujing,
      areaIndex: app.globalData.nowBook,
    })
  }
})