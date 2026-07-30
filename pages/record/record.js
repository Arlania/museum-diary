Page({
  data: {
    types: [
      { id: 'photo', name: '图片＋文字', icon: '▧' },
      { id: 'text', name: '纯文字', icon: '文' },
      { id: 'audio', name: '语音', icon: '◉' }
    ],
    type: 'photo',
    image: '',
    title: '',
    story: '',
    hall: '主馆',
    recording: false,
    toast: ''
  },
  chooseType(e) { this.setData({ type: e.currentTarget.dataset.type, recording: false }) },
  chooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      success: ({ tempFiles }) => this.setData({ image: tempFiles[0].tempFilePath })
    })
  },
  toggleRecord() {
    this.setData({ recording: !this.data.recording })
  },
  setTitle(e) { this.setData({ title: e.detail.value }) },
  setStory(e) { this.setData({ story: e.detail.value }) },
  chooseHall() {
    wx.showActionSheet({
      itemList: ['主馆', '夏日碎片', '与朋友们的时光', '旅行收藏夹'],
      success: ({ tapIndex }) => this.setData({ hall: ['主馆', '夏日碎片', '与朋友们的时光', '旅行收藏夹'][tapIndex] })
    })
  },
  save() {
    if (!this.data.title) {
      this.notice('请先为展品命名')
      return
    }
    wx.showToast({ title: '展品已入藏', icon: 'success' })
    setTimeout(() => wx.redirectTo({ url: `/pages/detail/detail?type=${this.data.type}` }), 700)
  },
  openHome() { wx.redirectTo({ url: '/pages/index/index' }) },
  notice(toast) {
    this.setData({ toast })
    setTimeout(() => this.setData({ toast: '' }), 1600)
  }
})
