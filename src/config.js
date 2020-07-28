let base = '';
let nav = [
  {
    id: 2,
    name: '服务全球',
    url: '/server',
    s_nav: [{
      name: '国内产品',
      url: '/server',
      index: 1
    }, {
      name: '国外产品',
      url: '/server',
      index: 2
    }]
  }, {
    id: 3,
    name: '关于我们',
    url: '/about',
    s_nav: [{
      name: '公司介绍',
      url: '/about',
      index: 1
    }, {
      name: '发展历程',
      url: '/about',
      index: 2
    }, {
      name: '企业文化',
      url: '/about',
      index: 3
    }, {
      name: '荣誉资质',
      url: '/about',
      index: 4
    }, {
      name: '企业团队',
      url: '/about',
      index: 5
    }, {
      name: '社会责任',
      url: '/about',
      index: 6
    }]
  }, {
    id: 4,
    name: '新闻资讯',
    url: '/news',
  }, {
    id: 5,
    name: '联系我们',
    url: '/contact',
  }
];

let config = {
  url: base + '/',
  api: base + '/api/',
  nav: nav
};

export default config;
