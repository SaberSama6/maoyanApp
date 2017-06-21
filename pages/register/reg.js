// pages/register/reg.js
var phone="";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attr: {
      label: "验证码",
      placeHolder: "请输入获取到的验证码",
      btntext: "确定",
      phone: "font-color",
      reg:"font-color",
      showError: false,
      errorText: "",
    },
    randomNum:0,
    value:"",
  },
  getValue: function (e) {
    this.setData({
      value: e.detail.value
    })
  },
  next: function () {
    if (Number(this.data.value) == this.data.randomNum){
      wx.navigateTo({
        url: './pwd?phone=' + phone,
      })
    }else{
      var attr = this.data.attr;
      attr.showError = true;
      attr.errorText = "验证码不正确";
      this.setData({
        attr: attr
      })
    }
    }
   ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var number =parseInt(Math.random()*9000+1000);
    console.log(number);
    this.setData({
      randomNum: number
    });
    this.data.randomNum = number;
    phone = options.phone
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.randomNum);
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