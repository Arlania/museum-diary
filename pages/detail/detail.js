const { getUser } = require('../../services/user-service')

Page({
  data: {
    type: 'photo',
    record: null,
    displayDate: '2024.07.21',
    playing: false,
    toast: ''
  },
  async onLoad(options) {
    const type = ['photo', 'text', 'audio'].includes(options.type) ? options.type : 'photo'
    const user = await getUser()
    const record = options.id && user
      ? user.items.find((item) => item.id === options.id)
      : null
    const displayDate = record ? record.date.replace(/-/g, '.') : '2024.07.21'

    this.setData({ type, record, displayDate })

    if (record && record.audio && wx.createInnerAudioContext) {
      this.audioContext = wx.createInnerAudioContext()
      this.audioContext.src = record.audio
      this.audioContext.onEnded(() => this.setData({ playing: false }))
      this.audioContext.onError(() => {
        this.setData({ playing: false })
        this.notice('这段语音暂时无法播放')
      })
    }
  },
  goBack() { wx.navigateBack() },
  toggleAudio() {
    const playing = !this.data.playing
    this.setData({ playing })

    if (this.audioContext) {
      if (playing) this.audioContext.play()
      else this.audioContext.pause()
      return
    }

    this.notice(playing ? '演示语音正在播放' : '语音已暂停')
  },
  onUnload() {
    if (this.audioContext) this.audioContext.destroy()
  },
  comment() {
    wx.showModal({
      title: '写下留言',
      editable: true,
      placeholderText: '记录此刻的感受',
      confirmText: '发布',
      success: ({ confirm, content }) => {
        if (confirm && content) this.notice('留言已发布')
      }
    })
  },
  showActions() {
    wx.showActionSheet({
      itemList: ['编辑展品', '移动到其他展厅', '保存图片', '删除展品'],
      success: ({ tapIndex }) => this.notice(['进入编辑模式', '请选择目标展厅', '已保存到相册', '演示版未执行删除'][tapIndex])
    })
  },
  notice(toast) {
    this.setData({ toast })
    setTimeout(() => this.setData({ toast: '' }), 1600)
  },
  onShareAppMessage() {
    return { title: '人生博物馆 · 展品详情', path: `/pages/detail/detail?type=${this.data.type}` }
  }
})
