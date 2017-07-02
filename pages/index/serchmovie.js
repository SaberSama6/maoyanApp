var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attr: {
      serchmovie: "chick"
    },
    hotMoviedata:[]
  },
  hotmovie: function () {
    wx.reLaunch({
      url: './index',
    })
  },
  waitmovie: function () {
    wx.reLaunch({
      url: './waitmovie',
    })
  },
  serch:function(e){
    console.log(e.detail.value);
    wx.request({
      url: app.globalData.url + '/filmInfo/find',
      data: {
        cName: e.detail.value
      },
      success: function (data) {
        var hotdata = data.data;
        for (let i = 0; i < hotdata.length; i++) {
          let img = hotdata[i].coverImg[0];
          let imgstr = img.split("\\")[1];
          hotdata[i].coverImg[0] = imgstr
        }
        this.setData({
          hotMoviedata: hotdata
        });
      }.bind(this)
    })
  },
  moviedetails: function (e) {
    let name = e.target.dataset.name
    wx.navigateTo({
      url: '../moviedetails/moviedetails?name=' + name,
    })
  },
  buyTickets: function (e) {
    let name = e.target.dataset.name
    wx.navigateTo({
      url: '../playMovieCinema/playMovieCinema?name=' + name,
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