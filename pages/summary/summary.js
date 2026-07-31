const {
  getUser,
  getMonthKey,
  getItemsForMonth
} = require('../../services/user-service')

Page({
  data: {
    monthName: '',
    monthlyItemCount: 0
  },

  async onShow() {
    const user = await getUser()
    if (!user) {
      wx.reLaunch({ url: '/pages/onboarding/onboarding' })
      return
    }

    const monthKey = getMonthKey()
    this.setData({
      monthName: `${Number(monthKey.slice(5))} 月`,
      monthlyItemCount: getItemsForMonth(user, monthKey).length
    })
  }
})
