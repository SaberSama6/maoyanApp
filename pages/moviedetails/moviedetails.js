var app = getApp();
var name="";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:"body_character",
    btn:"∨",
    moviedetailsData:{}
  },
  more:function(){
    if (this.data.hidden =="body_character"){
      this.setData({
        hidden: "body_character2",
        btn:"∧"
      });
    }else{ 
      this.setData({
        hidden: "body_character",
        btn: "∨"
      });
    }
  },
  buyTickets: function () {
    wx.navigateTo({
      url: '../playMovieCinema/playMovieCinema?name=' + name,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    name=options.name
    wx.request({
      url: app.globalData.url + '/filmInfo/find',
      data: {
        cName:options.name,
        findType:"exact"
      },
      success: function (data) {
        console.log(data.data);
        var hotdata = data.data[0];
           let img = hotdata.coverImg[0];
           if (hotdata.directorImg[0]){
             let actor = hotdata.directorImg[0];
             hotdata.directorImg[0] = actor.split("\\")[1];
             for (let i = 0; i < hotdata.actorsImg.length; i++) {
               let directorimg = hotdata.actorsImg[i];
               hotdata.actorsImg[i] = directorimg.split("\\")[1];
             }
           }
          
           let imgstr = img.split("\\")[1];
           hotdata.coverImg[0] = imgstr; 
        this.setData({
          moviedetailsData: hotdata
        });
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