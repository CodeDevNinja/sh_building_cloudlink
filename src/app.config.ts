export default defineAppConfig({
  pages: [
    'pages/profile/index',
    'pages/index/index',
    'pages/work_flow/business_acceptance/index',
    'pages/expert/expert_list/index',
    'pages/expert/expert_detail/index',
    'pages/work_flow/pre_solution_review/index',
    'pages/work_flow/solution_acceptance/index',
  ],
  tabBar: {
    // custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      { 
        pagePath: 'pages/profile/index',
        selectedIconPath: 'static/images/home_on.png',
        iconPath: 'static/images/home.png',
        text: '首页1'
      },
      { 
        pagePath: 'pages/index/index',
        selectedIconPath: 'static/images/home_on.png',
        iconPath: 'static/images/home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/expert/expert_list/index',
        selectedIconPath: 'static/images/tabbar_cate_on.png',
        iconPath: 'static/images/tabbar_cate.png',
        text: '专家'
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
