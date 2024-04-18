// pages/errorTest/errorTest.js
const db=wx.cloud.database()
const _ = db.command;            // 获取数据库命令对象的引用


Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataobj:[

    ],
    num: 441,
    index: 1,
    answer: 1,
    cnindex0: 1,
    cnindex1: 1,
    cnindex2: 1,
    cnindex3: 1,
    count:0,
    
  },
  getdata: function() {
    wx.cloud.callFunction({
      name: 'getErrorWords',
      success: res => {
        console.log('获取错题列表成功', res);
        this.setData({
          dataobj:res.result // 将获取到的错题列表数据存储到页面数据中
        });
      },
      fail: err => {
        console.error('获取错题列表失败', err);
      }
    });
  },
  
  // 在changeText函数之后定义checkyes函数
checkYES: function () {
  const that =this
  db.collection('words').where({
    word:that.data.dataobj[that.data.index].word
  }).get({
      success: function(res) {
        console.log('get 成功，该单词为',that.data.dataobj[that.data.index])
        if (res.data[0].errorCount == 0) {
          console.log('该单词wrong=0')
            db.collection('words').where({
              word:that.data.dataobj[that.data.index].word
          }).remove({
            success: function() {
              console.log('已删除')
              this.changeText();
            }
          });
          }else{}
        that.setData({
          now:res.data
          
        })
        //console.log("now",that.data.now[0])
      }
    })
  db.collection('words').where({
    word:that.data.dataobj[that.data.index].word
  }).update({
    data:{
      errorCount:_.inc(-1)
    },
    success:function(){
      console.log("答对，wrong-1");
    },
    fail:console.error
  });


  this.changeText();
},

changeText: function () {
  let that = this; // 将this保存在变量中以确保在回调函数中可以访问到
  
  const db = wx.cloud.database();
  db.collection('words').count({
    success: function(res) {
      console.log("错题本单词数", res.total);
      //当错题本单词数小于四时需要debug
      let count = res.total; // 保存 count 的值
      that.setData({
        count: count // 更新count的值
      });
      console.log("count数", that.data.count);

      // 随机生成索引值
      let index = (Math.ceil((Math.random() * 100)) % count);
      
      // 保存 answer 的值
      let answer = (Math.ceil((Math.random() * 100)) % 4);

      // 生成四个不同的随机数
      let randomIndexes = [];
      while (randomIndexes.length < 4) {
        let randomIndex = (that.data.index + Math.ceil(Math.random() * 100)) % count;
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }

      // 分别设置cnindex0到cnindex3
      that.setData({
        index: index,
        answer: answer,
        cnindex0: 0 == answer ? index : randomIndexes[0],
        cnindex1: 1 == answer ? index : randomIndexes[1],
        cnindex2: 2 == answer ? index : randomIndexes[2],
        cnindex3: 3 == answer ? index : randomIndexes[3]
      });

      console.log("index is", that.data.index);
      console.log("cnindex0 is", that.data);
    },
    fail: console.error
  });
    },
    



  
  checkNO: function () {
    const that =this
    console.log("nodata",that.data.dataobj[that.data.index].word)
    //尝试在update中添加if判断wrong是否大于0，解决inc（）未识别的bug，同时
    //解决第二次答错才执行update的问题(疑似已解决)
            db.collection('words').where({
              word:that.data.dataobj[that.data.index].word
            }).update({
              data:{
                errorCount:_.inc(1)
              },
              success:function(){
                console.log("单词已存在，wrong+1");
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
              url: '../index/index',
            })
        }
      }
    })
  },
  tiaozhuan: function () {

    wx.redirectTo({
      url: "../errorWords/errorWords",
    })
  },
  change: function () {

    this.changeText();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdata()
    this.changeText()
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

  
})