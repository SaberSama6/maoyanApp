//index.js
//获取应用实例
var app = getApp();
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
      hotmovie:"chick",
    },
    hotMoviedata:[],
    hotMovieName:"",
  },
  onLoad: function (options) {
      wx.request({
        url: app.globalData.url+'/hotMovie/find',
        data: {},
        success: function (data) {
          console.log(data.data);
          var hotdata = data.data;
          for (let i = 0; i < hotdata.length;i++){
            let img = hotdata[i].coverImg[0];
            let imgstr=img.split("\\")[1];
            hotdata[i].coverImg[0] = imgstr
          }
          this.setData({
            hotMoviedata: hotdata
          }); 
        }.bind(this)
      })
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
  },
  moviedetails: function (e) {
    let name = e.target.dataset.name
    wx.navigateTo({
      url: '../moviedetails/moviedetails?name=' +name,
    })
  },
  buyTickets:function(e){
    let name = e.target.dataset.name
    wx.navigateTo({
      url: '../playMovieCinema/playMovieCinema?name=' + name,
    })
  }
})
