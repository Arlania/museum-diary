const {
  getUser,
  getCollectionCount,
  formatStat
} = require('../../services/user-service')

Page({
  data: {
    mainHallCount: '000',
    mainHallUrl: '/pages/hall/hall',
    toast: '',
    subHalls: [
      { name: '夏日碎片', count: 12, type: 'text', image: '/assets/art/hall-summer.jpg' },
      { name: '与朋友们的时光', count: 8, type: 'audio', image: '/assets/art/hall-friends.jpg' },
      { name: '旅行收藏夹', count: 6, type: 'photo', image: '/assets/art/hall-travel.jpg' }
    ],
    recommendHalls: [
      { name: '温柔的黄昏', description: '晚霞与回家的路', count: 5, type: 'photo', image: '/assets/art/today-city.jpg' },
      { name: '想说的话', description: '留给未来的声音', count: 4, type: 'audio', image: '/assets/art/gramophone.jpg' },
      { name: '日常微光', description: '被忽略的小小幸福', count: 7, type: 'text', image: '/assets/art/home-hero.jpg' },
      { name: '远方来信', description: '旅途中珍藏的片刻', count: 6, type: 'photo', image: '/assets/art/hall-travel.jpg' }
    ]
  },
  async onShow() {
    const user = await getUser()
    if (!user) {
      wx.reLaunch({ url: '/pages/onboarding/onboarding' })
      return
    }

    this.setData({
      mainHallCount: formatStat(getCollectionCount(user)),
      mainHallUrl: '/pages/hall/hall'
    })
  },
  viewAll() {
    this.setData({ toast: '已展示全部副馆' })
    setTimeout(() => this.setData({ toast: '' }), 1600)
  }
})
