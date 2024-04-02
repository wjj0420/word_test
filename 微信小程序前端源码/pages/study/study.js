// pages/study/study.js

Page({
  data: {
    isPlaying: false,
    imageIndex: 0, // 当前显示图片的索引
    WordList: [   // 图片和音频文件 ID 列表
    {
      fileID :"cloud://cloud1-9g3cfsud0e4d1f22.636c-cloud1-9g3cfsud0e4d1f22-1315257829/image/associate.jpg",   //云存储ID
      audioID :"",
      english: "associate",
      chinese: "使联系起来，使联想"
    },
    {
      fileID :"cloud://cloud1-9g3cfsud0e4d1f22.636c-cloud1-9g3cfsud0e4d1f22-1315257829/image/off and on.jpg",
      audioID :"",
      english: "off and on",
      chinese: "断断续续地，有时"
    },
    {
      fileID :"cloud://cloud1-9g3cfsud0e4d1f22.636c-cloud1-9g3cfsud0e4d1f22-1315257829/image/style.jpg",
      audioID :"",
      english: "style",
      chinese: " n.行为方式,风格 ",
    },
    
    ], 
    imageUrl: '' ,// 当前显示图片的链接
    text: [
      {
        english: "style",
        chinese: " n.行为方式,风格 ",
        image:"/img/style.jpg"
      },
     {
        english: "off and on",
        chinese: "断断续续地，有时",
        image:"/img/off and on.jpg"
      },
      {
        english: "take hold",
        chinese: "生根，确立",
        image:"/img/take hold.jpg"
      },
      {
        english: "associate",
        chinese: "使联系起来，使联想",
        image:"/img/associate.jpg"
      }]
  },  

  onLoad: function(){
      // 初始化云开发环境
    wx.cloud.init({
      env: 'cloud1-9g3cfsud0e4d1f22', // 替换为你的云环境 ID
      traceUser: true, // 是否记录用户访问记录
    });
    const app = getApp(); // 获取小程序实例
    const db = wx.cloud.database(); // 获取数据库引用
    const _ = db.command; //数据库指令构造器
    const cloud = wx.cloud; // 获取云开发模块
    let imageIndex = this.data.imageIndex;
    let WordList=this.data.WordList;
    wx.cloud.getTempFileURL({
      fileList: [WordList[imageIndex].fileID], // 文件唯一标识符 cloudID, 可通过上传文件接口获取
      success: res => {
        this.setData({
          imageUrl: res.fileList[0].tempFileURL
        });
        console.log(res.fileList[0].tempFileURL)
      },
      fail: console.error
    })
  },

  getTempFileURL: function(fileID){
    wx.cloud.getTempFileURL({
      fileList: [fileID], // 文件唯一标识符 cloudID, 可通过上传文件接口获取
      success: res => {
        this.setData({
          imageUrl: res.fileList[0].tempFileURL
        });
        console.log(res.fileList[0].tempFileURL)
      },
      fail: console.error
    })
  },

  playAudio: function() {
    if (!this.data.isPlaying) {
      // 播放语音逻辑
      console.log('开始播放语音');
      // 更新按钮状态
      this.setData({
        isPlaying: true
      });
    } else {
      // 暂停语音逻辑
      console.log('暂停播放语音');
      // 更新按钮状态
      this.setData({
        isPlaying: false
      });
    }
  },

  previous(){
    let newIndex = this.data.imageIndex - 1;
    if (newIndex < 0) {
      newIndex = 0; 
    }
    this.setData({
      imageIndex: newIndex
    });
    this.getTempFileURL(this.data.WordList[newIndex]); 
  
      console.log("当前的索引值：",this.data.imageIndex,this.data.WordList.length)
  },
  next(){
    let newIndex = this.data.imageIndex + 1;
    if (newIndex >= this.data.WordList.length) {
      newIndex = 0; // 如果超出数组长度，则从第一张图片重新开始
    }
    this.setData({
      imageIndex: newIndex
    });
    this.getTempFileURL(this.data.WordList[newIndex]); // 获取并显示下一张图片
  
      console.log("当前的索引值：",this.data.imageIndex,this.data.WordList.length)
  },

})