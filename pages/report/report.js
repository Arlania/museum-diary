Page({
  goBack() {
    wx.navigateBack({
      fail: () => wx.redirectTo({ url: '/pages/summary/summary' })
    })
  },
  onShareAppMessage() {
    return {
      title: '我的 7 月人生博物馆报告',
      path: '/pages/report/report'
    }
  }
})
