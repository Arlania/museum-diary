Page({
  data: { toast: '' },
  go(url) { wx.redirectTo({ url }) },
  openGallery() { this.go('/pages/gallery/gallery') },
  openRecord() { this.go('/pages/record/record') },
  openSummary() { this.go('/pages/summary/summary') },
  openProfile() { this.go('/pages/profile/profile') },
  showSettings() { this.notice('设置功能已加入演示流程') },
  createExhibit() { this.go('/pages/record/record?new=1') },
  notice(toast) {
    this.setData({ toast })
    setTimeout(() => this.setData({ toast: '' }), 1600)
  },
  onShareAppMessage() {
    return { title: '人生博物馆', path: '/pages/index/index' }
  }
})
