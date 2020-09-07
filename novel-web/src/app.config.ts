export default {
  pages: [
    'pages/index/index',
    'pages/me/index'
  ],
  tabBar: {
    list: [{
      pagePath: 'pages/index/index',
      text: '书架'
    }, {
      pagePath: 'pages/me/index',
      text: '个人中心'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  h5: {
    esnextModules: ['taro-ui']
  }
}
