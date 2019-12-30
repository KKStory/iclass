var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '',
    modelInnerHtml: '',
    modalHidden: true,
  },

  // 弹窗消失
  modalChange: function () {
    this.setData({
      modalHidden: true
    })
    wx.navigateBack({
      delta: 1
    })
  },

  bindMesInput: function (e) {
    this.setData({
      message: e.detail.value
    })
    console.log(this.data.message)
  },

  submit:function(){
    var that=this;
    wx.request({
      dataType: "json",
      method: "GET",
      url: app.globalData.url,
      data: {
        cause:that.data.message
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      success: function (res) {
        that.setData({
          modelInnerHtml: '提交成功！',
          modalHidden: false
        })
      },
      fail:function(res){
        that.setData({
          modelInnerHtml: '提交失败！',
          modalHidden: false
        })
      }
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