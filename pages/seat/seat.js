var app = getApp();
var id="";
var check=0;
var affirmArr=[];
var cinemaIndex = 0, videohallindex = 0, allSeat="", movie, timeindex=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seats:[],
    check_1:"",
    check_2:"",
    check_3:"",
    check_4:"",
    check_5:"",
    buy_check:"no_check",
    buy_checktext:"请先选座",
    affirm:"",
    cinemaname:"",
    videohallname:"",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    check = 0;
    cinemaIndex = options.index;
    videohallindex = options.videohallindex;
    timeindex = options.timeindex;
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: app.globalData.url+'/theatres/find',
      data: {
        cName:options.name,
        findType: "exact"
      },
      success:function(data){
        movie = data.data[0];
        id=movie._id;
        this.setData({
          cinemaname: movie.cinema[options.index].cinema,
          videohallname: movie.cinema[options.index].auditoriumInfo[options.videohallindex].room
        });
        if (movie.cinema[options.index].auditoriumInfo[options.videohallindex].time[options.timeindex].seat){
          allSeat = movie.cinema[options.index].auditoriumInfo[options.videohallindex].time[timeindex].seat;
        }else{
          allSeat = movie.cinema[options.index].auditoriumInfo[options.videohallindex].seat;
          allSeat = JSON.parse(allSeat);
        }
        console.log(allSeat);      
        this.setData({
          seats: allSeat
        });
        wx.hideLoading();
      }.bind(this)
    })
  },
  change: function (e) {
      console.log(e.target.dataset.id);
      var newArr = affirmArr= this.data.seats;
      let begin = e.target.dataset.id.split("_")[1];
      let end = e.target.dataset.id.split("_")[2];
      for (let i = 0; i < newArr.length; i++) {
        if (i == begin) {
          for (let j = 0; j < newArr[i].length; j++) {
            if (j == end) {
              if (newArr[i][j] != 2) {
                if (check < 5) {
                  newArr[i][j] = 2;
                  check++;
                } else {
                  wx.showToast({
                    title: '只能选择最多5个座位',
                    icon: "warning",
                    duration: 1000
                  });
              }
              }else {
                newArr[i][j] = 0;
                check--;
                }
              break;
            }
          }
        }
      }
      this.setData({
        seats: newArr,
      });
      switch(check){
        case 0: this.setData({
          check_1: "",
          check_2: "",
          check_3: "",
          check_4: "",
          check_5: "",
          buy_check: "no_check",
          buy_checktext: "请先选座",
          affirm: ""
        }); break;
        case 1: this.setData({
          check_1: "border",
          check_2: "",
          check_3: "",
          check_4: "",
          check_5: "",
          buy_check: "buy_check",
          buy_checktext: "确认购买",
          affirm: "affirm"
        });break;
        case 2: this.setData({
          check_1: "border",
          check_2: "border",
          check_3: "",
          check_4: "",
          check_5: "",
        }); break;
        case 3: this.setData({
          check_1: "border",
          check_2: "border",
          check_3: "border",
          check_4: "",
          check_5: "",
        }); break;
        case 4: this.setData({
          check_1: "border",
          check_2: "border",
          check_3: "border",
          check_4: "border",
          check_5: "",
        }); break;
        case 5: this.setData({
          check_1: "border",
          check_2: "border",
          check_3: "border",
          check_4: "border",
          check_5: "border",
        }); break;
      }
    },
  affirm:function(){
    console.log("123");
    for (let i = 0; i < affirmArr.length; i++) {
      for (let j = 0; j < affirmArr[i].length; j++) {
        if (affirmArr[i][j] == 2) {
          affirmArr[i][j] = 3;
        }
      }
    }
    let newcinema = movie.cinema;
    console.log(cinemaIndex, videohallindex, timeindex);
    newcinema[cinemaIndex].auditoriumInfo[videohallindex].time[timeindex].seat = affirmArr;
     
    console.log(newcinema);
    wx.request({
      url: app.globalData.url + '/theatres/update',
      data: {
        _id: id,
        cinema: JSON.stringify(newcinema)
      },
      success: function (data) {
        wx.showToast({
          title: '购票成功',
          icon: "success",
          duration: 1000
        });
        wx.reLaunch({
          url: '../index/index',
        })
      }
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