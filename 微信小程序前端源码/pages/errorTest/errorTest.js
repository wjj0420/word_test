
const db=wx.cloud.database()
const _ = db.command;            // 获取数据库命令对象的引用
Page({
  data:{
    index:0,    //单词列表索引
    error_num:0   ,//错题数
    dataobj:[],   //错误单词列表
    cnindex0:0,
    cnindex1:0,
    cnindex2:0,
    cnindex3:0,
  },

  onLoad: function () {
    this.getWrongQuestions(getApp().globalData.openid);
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
          error_num:res.result.length,
          dataobj: res.result, //获取的列表
        });

        if (res.result.length < 5) {
          wx.showModal({
            title: '错词数量少于5，无法使用该功能',
            content: '无敌是多么寂寞',
            showCancel: false, // 是否显示取消按钮，设为 false 表示不显示
            success(res) {
              if (res.confirm) {
                
                wx.switchTab({
                  url: '../errorWords/errorWords',
                })
              }
            }
          })
        }


        this.changeText();
      },
      fail: err => {
        console.error('获取错题列表失败', err);
      }
    });
   
  },

  //页面更新
  changeText: function () {  
    var wordArray = new Array(this.data.error_num)
      .fill(0)
      .map((v, i) => i )
      .sort(() => 0.5 - Math.random())
      .filter((v, i) => i < 5);
      console.log(this.data.error_num)
    this.setData({
      index: wordArray[0]
    }),
      this.setData({
        answer: ((Math.ceil((Math.random() * 100) * 100)) % 4),
      })
      this.setData({
        cnindex0: 0 == this.data.answer ? this.data.index : wordArray[1]
      })
      this.setData({
        cnindex1: 1 == this.data.answer ? this.data.index : wordArray[2]
      })
      this.setData({
        cnindex2: 2 == this.data.answer ? this.data.index : wordArray[3]
      })
      this.setData({
        cnindex3: 3 == this.data.answer ? this.data.index : wordArray[4]
      })
  },
  removeWord:function(id){
    wx.cloud.callFunction({
      name: 'removeWord',
      data: {
        id: id
      },
      success: res => {
        console.log('调用removeWord成功', res);
      },
      fail: err => {
        console.error('调用removeWord失败', err);
      }
    })
  },

  //选择正确
  checkYES: function () { 
    var word_info=this.data.dataobj[this.data.index]
    if(word_info.errorCount>1){
      db.collection('words').where({
        word:this.data.dataobj[this.data.index].english,
        openid:getApp().globalData.openid
      }).update({
        data:{
          data: {
            errorCount: word_info.errorCount - 1
          }
        },
        success:function(){
          console.log("单词错误次数-1");
        },
        fail:console.error
      });
    }
    else{
        
        this.removeWord(word_info._id)
        console.log(word_info._id)

    }
       
    this.changeText();
   
  },
    //选择错误
  checkNO: function () {
    db.collection('words').where({
      word:this.data.dataobj[this.data.index].english,
      openid:getApp().globalData.openid
    }).update({
      data:{
        errorCount:_.inc(1)
      },
      success:function(){
        console.log("单词错误次数+1");
      },
      fail:console.error
    });
    wx.showModal({
      cancelText: '我玩够了',
      confirmText: '好的',
      title: '回答错误',
      content: '要不要再想想？',
      success: function (res) {
        if (res.cancel) {
          wx.redirectTo({
            url: '../endPage/endPage',
          })
        }
      }
    })
  },
  select1() {
    if (0 == this.data.answer) {
      this.checkYES();
    }
    else {
      this.checkNO();
    }
  },
  select2() {
    if (1 == this.data.answer) {
      this.checkYES();
    }
    else {
      this.checkNO();
    }
  },
  select3() {
    if (2 == this.data.answer) {
      this.checkYES();
    }
    else {
      this.checkNO();
    }
  },
  select4() {
    if (3 == this.data.answer) {
      this.checkYES();
    }
    else {
      this.checkNO();
    }
  },
  return() {
    wx.switchTab({
      url: '../errorWords/errorWords',
    }) 
  },




})