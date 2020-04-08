Page({
  data: {
    //搜索
    inputShowed: false,
    inputVal: "",
    
    tabs: [],
    activeTab: 0,
  },

  onLoad() {
    const titles = ['推荐', '热榜', '紧急']
    const tabs = titles.map(item => ({title: item}))
    // this.setData({tabs})

    this.setData({
      search: this.search.bind(this),
      tabs
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  }

})
