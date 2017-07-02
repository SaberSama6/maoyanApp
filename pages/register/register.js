var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      attr:{
        label:"手机号",
        placeHolder:"请输入你的手机号",
        btntext:"获取验证码",
        phone:"font-color",
        showError:false,
        errorText:"",
      },
      value: ""
  },
  next:function(){
    console.log(this.data.value);
    if(/^1[0-9]{10}$/.test(this.data.value)){
      wx.request({
        url: app.globalData.url+'/user/find', 
        data: {username:this.data.value},
        success: function (res) {
          if (res.data.length){
            var attr = this.data.attr;
            attr.showError = true;
            attr.errorText = "输入手机号已被注册";
            this.setData({
              attr: attr
            });
          }else{
              wx.navigateTo({
                url: './reg?phone=' + this.data.value,
              })
          }
        }.bind(this)
      })
     
    }else{
      var attr = this.data.attr;
      attr.showError=true;
      attr.errorText="输入手机号格式不正确";
      this.setData({
        attr: attr
      });
    }
    
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
  
  },
  getValue:function(e){
    this.setData({
      value:e.detail.value
    })
  }
})