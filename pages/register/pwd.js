// pages/register/pwd.js
var app = getApp();
var phone="";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attr: {
      label: "密码",
      placeHolder: "请输入您的密码",
      btntext: "确认注册",
      phone: "font-color",
      reg: "font-color",
      pwd:"font-color",
      showError: false,
      errorText: "",
    },
    value:""
  },
  getValue: function (e) {
    this.setData({
      value: e.detail.value
    })
  },
  next: function () {
    if(/^\w{6,}$/.test(this.data.value)){
      wx.request({
        url: app.globalData.url + '/user/add',
        data: {
          username: phone,
          userpwd:this.data.value
        },
        success:function(){
          wx.reLaunch({
            url: '../login/login',
          })
        }
      })
    }else{
      var attr = this.data.attr;
      attr.showError = true;
      attr.errorText = "请输入最小6位的密码";
      this.setData({
        attr: attr
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    phone=options.phone;
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