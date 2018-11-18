// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: 1,
        content: '这是一条数据1'
      },
      {
        id: 2,
        content: '这是一条数据2'
      },
      {
        id: 3,
        content: '这是一条数据3'
      },
      {
        id: 4,
        content: '这是一条数据4'
      },
      {
        id: 5,
        content: '这是一条数据5'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('页面已经加载完毕')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})