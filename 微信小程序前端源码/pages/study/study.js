// pages/study/study.js
Page({
  data: {
    isPlaying: false,
    index:0,
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
    let index = this.data.index;
      this.setData({
        index:index-1
      });
    
  },
  next(){
    let index = this.data.index;
      this.setData({
        index:index+1
      });
    
  },

})