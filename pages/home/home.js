// pages/home/home.js
Page({ // 对象的字面量

  /**
   * 页面的初始数据
   */
  data: {
      name: 'CoderVis'
  },
  hanldBtnClick() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  hanldDeClick() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
  // 编程范式
  // 1. 命令式编程: 原生DOM操作
  // 2. 声明式编程: Vue/React/Angular
})