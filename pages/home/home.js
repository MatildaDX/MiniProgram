// pages/home/home.js
// 编程范式
// 1. 命令式编程: 原生DOM操作
// 2. 声明式编程: Vue/React/Angular
const app = new getApp() // getApp() 获取App产生的实例对象

const name = app.globelUserData.name
const age = app.globelUserData.age
// 创建一个page页面
Page({ // 对象的字面量

  // 2. 页面的初始数据
  data: {
    list: []
  },
  // 1. 监听页面的生命周期函数
  onLoad() {
    wx.request({
      url: 'http://152.136.185.210:8000/api/h8/recommend',
      success: (res) => {
        this.setData({
          list: res.data.data.list
        })
      }
    })
  },
  // 3. 监听wxml事件
  hanldGetUserInfo (event) {
    console.log(event)
  },
  // 4. 监听其他事件
  onPageScroll(obj) { // 页面滚动事件
    // console.log(obj)
  },
  onReachBottom() { // 滚动到底部
    console.log("页面滚动到底部")
  },
  onPullDownRefresh() { // 下拉事件
    console.log("页面下拉加载更多")
  },
  // 如果当前是 tabbar页面, 点击tab触发
  onTabItemTap() {
    console.log("切换tabBar")
  }
})