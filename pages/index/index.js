//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'img/bigtu_02.png',
      'img/baomihua_02.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    attr:{
      hotmovie:"chick"
    }
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  waitmovie:function(){
    wx.navigateTo({
      url: './waitmovie',
    })
  },
  serchmovie: function () {
    wx.navigateTo({
      url: './serchmovie',
    })
  }
})
