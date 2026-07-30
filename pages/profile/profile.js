Page({
  data: {
    items: [
      { icon: '▣', name: '我的月度报告' },
      { icon: '⌁', name: '馆藏数据' },
      { icon: '♙', name: '隐私与安全' },
      { icon: '⚙', name: '设置' }
    ],
    toast: ''
  },
  openHome() { wx.redirectTo({ url: '/pages/index/index' }) },
  tapMenu(e) {
    if (e.currentTarget.dataset.name === '我的月度报告') {
      wx.navigateTo({ url: '/pages/report/report' })
      return
    }
    this.setData({ toast: `${e.currentTarget.dataset.name}已加入演示` })
    setTimeout(() => this.setData({ toast: '' }), 1600)
  }
})
