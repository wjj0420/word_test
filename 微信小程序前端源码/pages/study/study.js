// pages/study/study.js

Page({
  data: {
    isPlaying: false,
    imageIndex: 0, // 当前显示图片的索引
    imageUrl: '' ,// 当前显示图片的链接
    AudioUrl: '' ,// 当前单词对应音频的链接
    innerAudioContext:null,
    WordList: [   // 图片和音频文件 ID 列表
    {
      fileID :"cloud://cloud1-9g3cfsud0e4d1f22.636c-cloud1-9g3cfsud0e4d1f22-1315257829/image/associate.jpg",   //云存储ID
      audioID :"cloud://cloud1-9g3cfsud0e4d1f22.636c-cloud1-9g3cfsud0e4d1f22-1315257829/audio/geqian.flac",
      english: "associate",
      chinese: "使联系起来，使联想"
    },
    {
      fileID :"cloud://cloud1-9g3cfsud0e4d1f22.636c-cloud1-9g3cfsud0e4d1f22-1315257829/image/off and on.jpg",
      audioID :"cloud://cloud1-9g3cfsud0e4d1f22.636c-cloud1-9g3cfsud0e4d1f22-1315257829/audio/yiluxiangbei.flac",
      english: "off and on",
      chinese: "断断续续地，有时"
    },
    {
      fileID :"cloud://cloud1-9g3cfsud0e4d1f22.636c-cloud1-9g3cfsud0e4d1f22-1315257829/image/style.jpg",
      audioID :"cloud://cloud1-9g3cfsud0e4d1f22.636c-cloud1-9g3cfsud0e4d1f22-1315257829/audio/geqian.flac",
      english: "style",
      chinese: " n.行为方式,风格 ",
    } ,
  ]
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
    this.setData({
      innerAudioContext : wx.createInnerAudioContext({
        useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
      })
    })
    wx.cloud.getTempFileURL({
      fileList: [WordList[imageIndex].fileID], // 文件唯一标识符 cloudID, 可通过上传文件接口获取
      success: res => {
        this.setData({
          imageUrl: res.fileList[0].tempFileURL
        });
        console.log(res.fileList[0].tempFileURL)
      },
      fail: console.error
    }),
    wx.cloud.getTempFileURL({
      fileList: [WordList[imageIndex].audioID], // 文件唯一标识符 cloudID, 可通过上传文件接口获取
      success: res => {
        this.setData({
          AudioUrl: res.fileList[0].tempFileURL
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

  getTempAudioURL: function(fileID){  //获取音频临时链接
    wx.cloud.getTempFileURL({
      fileList: [fileID], // 文件唯一标识符 cloudID, 可通过上传文件接口获取
      success: res => {
        this.setData({
          AudioUrl: res.fileList[0].tempFileURL
        });
        console.log(res.fileList[0].tempFileURL)
      },
      fail: console.error
    })
  },


  playAudio:function(){
    let innerAudioContext=this.data.innerAudioContext;
    innerAudioContext.src=this.data.AudioUrl;
    if(!this.data.isPlaying){
      
      this.data.innerAudioContext.play() // 播放
      console.log(this.data.AudioUrl)
      this.data.innerAudioContext.onPlay(() => {
      console.log('音频播放开始')
    })
  }
    else{
      this.data.innerAudioContext.pause() // 暂停
      console.log('暂停成功');
    }
  
    // 更新播放状态
    this.setData({
      isPlaying: !this.data.isPlaying
    });
  
  },


  previous(){
    let newIndex = this.data.imageIndex - 1;
    if (newIndex < 0) {
      newIndex = 0; 
    }
    this.setData({
      imageIndex: newIndex,
      isPlaying: false
    });
    this.getTempFileURL(this.data.WordList[newIndex].fileID);
    this.getTempAudioURL(this.data.WordList[newIndex].audioID)
    this.data.innerAudioContext.stop() // 音频停止
      console.log("当前的索引值：",this.data.imageIndex,this.data.WordList.length)
  },
  next(){
    let newIndex = this.data.imageIndex + 1;
    if (newIndex >= this.data.WordList.length) {
      newIndex = 0; // 如果超出数组长度，则从第一张图片重新开始
    }
    this.setData({
      imageIndex: newIndex,
      isPlaying: false
    });
    this.getTempFileURL(this.data.WordList[newIndex]); // 获取并显示下一张图片
    this.getTempAudioURL(this.data.WordList[newIndex].audioID)//获取下一个音频
    this.data.innerAudioContext.stop() // 音频停止
      console.log("当前的索引值：",this.data.imageIndex,this.data.WordList.length)
  },

  
  onUnload: function(){
    this.data.innerAudioContext.destroy() // 释放音频资源
  }
})