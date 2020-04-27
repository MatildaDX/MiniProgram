// 注册一个小程序实例
App({
  // 小程序生命周期函数: 会在后台存活两个小时
  // 当小程序初始化完成时
  onLaunch: function () {
    // 获取用户信息 -> 异步
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    // 发送Error
    // setTimeout(() => {
    //   const err = new Error()
    //   throw err
    // }, 1000)
  },
  // 当界面加载完时
  onShow: function (options) {
    console.log(options)
    // 1. 判断小程序进入场景
    switch (options.scene) {
      case 1001:
        break;
      case 1005: 
        break;
      default:
        break;
    }
    // 获取用户信息 --> 即将废弃
    // wx.getUserInfo({
    //   complete: (res) => {console.log(res)},
    // })
  },
  // 当小程序隐藏时
  onHide: function () {
    console.log("小程序隐藏了")
  },
  // 当小程序发生错误时
  onError: function () {
    console.log("小程序发生了错误")
  },
  // 定义全局属性
  globelUserData: {
    name: 'CoderVis',
    age: 18
  }
})
