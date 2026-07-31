Component({
  properties: {
    active: {
      type: String,
      value: 'home'
    }
  },
  data: {
    items: [
      { key: 'home', label: '主页', url: '/pages/index/index' },
      { key: 'gallery', label: '展厅', url: '/pages/gallery/gallery' },
      { key: 'record', label: '记录', url: '/pages/record/record' },
      { key: 'summary', label: '总结', url: '/pages/summary/summary' },
      { key: 'profile', label: '我的', url: '/pages/profile/profile' }
    ]
  }
})
