// pages/user/user.js
const defaultAvatarUrl = "../../img/1.jpg"
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
  },
  //数据列表
 check:function(){
  wx.redirectTo({
    url: '../history/history',
  })
 },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
    wx.setStorageSync('avatarUrl', avatarUrl);
  }
})