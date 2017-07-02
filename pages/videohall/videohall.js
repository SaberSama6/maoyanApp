var app = getApp();
var index=0;
var name="";
var videohallIndex=0;
var timeIndex=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cinema:{},
    videohall:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    index = options.index;
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
        
        var hotdata = data.data[0].cinema[index];
        console.log(hotdata);
        var newArr=[];
        for (let i = 0; i < hotdata.auditoriumInfo.length;i++){
          if(hotdata.auditoriumInfo[i].time){
            for (let j = 0; j < hotdata.auditoriumInfo[i].time.length;j++){
              let obj = {};
              obj.money = hotdata.auditoriumInfo[i].time[j].money;
              obj.begin = hotdata.auditoriumInfo[i].time[j].time.split("-")[0];
              obj.end = hotdata.auditoriumInfo[i].time[j].time.split("-")[1];
              obj.videohallname = hotdata.auditoriumInfo[i].room;
              obj.panduan="jin";
              obj.name =options.name;
              obj.index=index;
              obj.videohallIndex=i;
              obj.timeIndex=j;
              newArr.push(obj);
            }
          }
        }
        // let img = hotdata.coverImg[0];
        // console.log(img);
        // let imgstr = img.split("\\")[1];
        // hotdata.coverImg[0] = imgstr
        this.setData({
          cinema: hotdata,
          videohall: newArr
        });
        console.log(this.videohall);
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