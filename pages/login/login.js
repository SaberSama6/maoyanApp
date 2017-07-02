var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:""
  },
  next: function () {
    wx.navigateTo({
      url: '../register/register',
    })
  },
  getname:function(e){
    this.setData({
      username: e.detail.value
    })
  },
  getpwd:function(e){
    this.setData({
      password: e.detail.value
    })
  },
  login:function(){
    wx.request({
      url: app.globalData.url + '/user/find',
      data: {
        username: this.data.username,
        userpwd: this.data.password
      },
      success: function () {
        wx.setStorage({
          key: 'username',
          data: 'this.data.username',
        });
        wx.reLaunch({
          url: '../index/index',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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
  
  }
})