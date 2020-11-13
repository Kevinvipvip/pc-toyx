let base = 'https://mp.tjluckytoy.com';
let aliyun_base = 'https://shanhaitest.oss-cn-beijing.aliyuncs.com';
let nav = [
  {
    id: 1,
    name: '首页',
    url: '/',
  }, {
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
    }, {
      name: '玩具定制',
      url: '/server',
      index: 3
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
      name: '企业团队',
      url: '/about',
      index: 3
    }, {
      name: '荣誉资质',
      url: '/about',
      index: 4
    }]
  }, {
    id: 4,
    name: '新闻资讯',
    url: '/news',
    s_nav: [{
      name: '公司动态',
      url: '/news',
      index: 1
    }, {
      name: '行业动态',
      url: '/news',
      index: 2
    }]
  }, {
    id: 5,
    name: '联系我们',
    url: '/contact',
    s_nav: [{
      name: '联系方式',
      url: '/contact',
      index: 1
    }, {
      name: '关注我们',
      url: '/contact',
      index: 2
    }, {
      name: '人才招聘',
      url: '/contact',
      index: 3
    }]
  }
];
let history = [
  {
    year: '1993年',
    event: '12月28日 五位骨干联手创立同缘兴，进军玩具行业。'
  }, {
    year: '1994年',
    event: '10月1日 工厂迁址上仓河西镇，逐步扩大生产力。'
  }, {
    year: '1996年',
    event: '公司达到百人规模，生产力稳步上升，与韩国独资企业合作，业务逐渐转向北京。质量领先其他企业，获得业界的肯定。与PLAY BY PLAY中国供应商（北京世元玩具有限公司）建立长期合作关系。'
  }, {
    year: '2000年',
    event: '在国际市场不稳定的冲击下，同缘兴凭借超高水准的产品质量与北京佳艺、顺天玩具公司合作，从众多制造加工企业中脱颖而出。'
  }, {
    year: '2001年',
    event: '与北京顺祥玩具有限公司建立长期合作关系，跻身同行业前列。'
  }, {
    year: '2005年',
    event: '公司获颁《安全生产工作先进单位》。'
  }, {
    year: '2008年',
    event: '5月公司获颁《自主创业标兵》证书。'
  }, {
    year: '2010年',
    event: '公司开始承接直营出口业务。'
  }, {
    year: '2011年',
    event: '正式成立同缘兴玩具有限公司 引进激光机、填充机等多台先进设备，首年年产值高达200万美金。'
  }, {
    year: '2012年',
    event: '研发卡通玩具鞋底套装机，并获得国家专利证书。'
  }, {
    year: '2015年',
    event: '快速发展的一年：扩建工厂，规模进一步扩大，由大部分外发加工转为自主研发生产；开拓外销出口业务；同年九月通过玩具界最高ICTI A级认证，具备出口国外大客户的资质。成立大客户部，明晰职责，提升服务质量，产品出口至欧盟、北美等地，领行业先河。'
  }, {
    year: '2016年',
    event: '9月公司股改上市，更名为同缘兴科技股份有限公司。10月13日举行敲锣仪式，在对外出口领域更上一个新阶。'
  }, {
    year: '2017年',
    event: '大手笔投入产品研发能力，聘请国内知名设计师、开版师壮大研发团队。'
  }, {
    year: '2018年',
    event: '引进大型智能裁床设备，应邀加入中国玩具协会成为5星级供应商；筹备蓟州开发区分厂建设，目前厂房面积10000㎡、仓储面积15000㎡，企业年产值700万美金。活跃在国内多个知名展会，与欧洲影响力最大的PMS、SIX FLAGS、IDEAL TOYS DIRECT、FIESTA CONCESSION CORP、SUPREMER等多家公司达成合作。'
  }
];
let hq_data = {
  honor: [{
    pic: aliyun_base + '/static/hq-honor1.png',
    title: '国际玩具工业理事会资质（ICTI）',
    name: 'on'
  }, {
    title: '工业美术学院技能实训基地',
    pic: aliyun_base + '/static/hq-honor2.png',
    name: 'next1'
  }, {
    title: '先进单位',
    pic: aliyun_base + '/static/hq-honor3.png',
    name: 'next2'
  }, {
    title: '中国玩具协会会员单位',
    pic: aliyun_base + '/static/hq-honor4.png',
    name: 'prev2'
  }, {
    title: '天津市文化产业示范基地',
    pic: aliyun_base + '/static/hq-honor5.png',
    name: 'prev1'
  }],

  zizhi: [{
    title: '营业执照',
    pic: aliyun_base + '/static/hq-zizhi2.png'
  }, {
    title: '同缘兴商标注册证',
    pic: aliyun_base + '/static/hq-zizhi5.png'
  }, {
    title: '独角兽商标注册证',
    pic: aliyun_base + '/static/hq-zizhi4.png'
  }, {
    title: '实用新型专利证书',
    pic: aliyun_base + '/static/hq-zizhi3.png'
  }, {
    pic: aliyun_base + '/static/hq-zizhi1.png',
    title: 'GSV反恐'
  }, {
    title: '充棉机PLC控制系统',
    pic: aliyun_base + '/static/hq-zizhi6.png'
  }, {
    title: '丝网印刷制版系统',
    pic: aliyun_base + '/static/hq-zizhi7.png'
  }, {
    title: '激光裁剪定位控制系统',
    pic: aliyun_base + '/static/hq-zizhi8.png'
  }]
};
let customized = [
  {
    id: 1,
    title: '企业吉祥物'
  }, {
    id: 2,
    title: '毛绒玩偶'
  }, {
    id: 3,
    title: '赛事活动吉祥物'
  }, {
    id: 4,
    title: '毛绒衍生品'
  }, {
    id: 5,
    title: '特许纪念品'
  }, {
    id: 6,
    title: '人偶'
  }, {
    id: 7,
    title: '抱枕颈枕'
  }, {
    id: 8,
    title: '钥匙链'
  }, {
    id: 9,
    title: '毛绒背包'
  }, {
    id: 10,
    title: '毛绒挂饰'
  }, {
    id: 11,
    title: '其他'
  }
];
let customized_liucheng = [
  {
    id: 1,
    name: '选品',
    pic: aliyun_base + '/static/icon-xuanpin.png'
  }, {
    id: 2,
    name: '设计',
    pic: aliyun_base + '/static/icon-sheji.png'
  }, {
    id: 3,
    name: '打样',
    pic: aliyun_base + '/static/icon-dayang.png'
  }, {
    id: 4,
    name: '合同',
    pic: aliyun_base + '/static/icon-hetong.png'
  }, {
    id: 5,
    name: '生产',
    pic: aliyun_base + '/static/icon-shengchan.png'
  }, {
    id: 6,
    name: '配送',
    pic: aliyun_base + '/static/icon-peisong.png'
  }, {
    id: 7,
    name: '签收',
    pic: aliyun_base + '/static/icon-qianshou.png'
  }, {
    id: 8,
    name: '售后',
    pic: aliyun_base + '/static/icon-shouhou.png'
  }
];

let config = {
  url: base + '/',
  api: base + '/api/',
  aliyun: aliyun_base + '/',//阿里云oss链接域名
  tel_reg: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
  phone_reg: /0\d{2,3}-\d{7,8}/,

  banner: aliyun_base + '/static/banner.png',//多个页面共用的banner图
  bg_img: aliyun_base + '/static/index-bg.jpg',//多个页面共用的冰山背景图

  // 数据内容
  nav: nav,//导航栏数据
  history: history,//发展历程数据
  hq_data,//荣誉资质数据
  customized,//服务全球定制产品数据
  customized_liucheng,//服务全球定制流程数据
};

export default config;
