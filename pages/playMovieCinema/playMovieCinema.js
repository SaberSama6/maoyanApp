var app = getApp();
var name;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../index/img/baomihua_02.png',
      '../index/img/bigtu_02.png'
    ],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    playMovieCinema:[],
  },
  top:function(e){
    console.log(e.currentTarget.dataset);
    wx.navigateTo({
      url: '../videohall/videohall?name='+name+'&index='+e.currentTarget.dataset.index,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    name = options.name
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: app.globalData.url + '/theatres/find',
      data: {
        cName: options.name,
        findType: "exact"
      },
      success: function (data) {
         var hotdata = data.data[0].cinema;
         for (let i = 0; i < hotdata.length;i++){
           hotdata[i]["index"]=i;
         }
        // let img = hotdata.coverImg[0];
        // console.log(img);
        // let imgstr = img.split("\\")[1];
        // hotdata.coverImg[0] = imgstr
         this.setData({
           playMovieCinema: hotdata
         });
        wx.hideLoading();
      }.bind(this)
    })
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