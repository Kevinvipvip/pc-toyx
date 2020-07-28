<template>
  <div class="footer">
    <div class="w-1200">
      <div class="logo-address">
        <div class="logo"><img src="../assets/logo-footer.png" alt=""></div>
        <div class="address">
          <p><i class="i-address"></i><span>地 址：天津市蓟州区礼明庄镇孟家楼村</span></p>
          <p><i class="i-email"></i><span>邮 箱：luckytoytj@vip.sina.com</span></p>
          <p><i class="i_tel"></i><span>联系电话：022-2989-7418</span></p>
          <p><i class="i-chuan"></i><span>传 真：022-2989-8486</span></p>
        </div>
      </div>
      <div class="q-nav">
        <ul>
          <li>关于我们</li>
          <li>公司介绍</li>
          <li>发展历程</li>
          <li>企业文化</li>
          <li>荣誉资质</li>
          <li>企业团队</li>
          <li>社会责任</li>
        </ul>
        <ul>
          <li>服务全球</li>
          <li>自主IP</li>
          <li>授权产品</li>
          <li>抓机系列</li>
          <li>母婴系列</li>
          <li>抱枕系列</li>
          <li>国际市场</li>
        </ul>
        <ul>
          <li>快捷入口</li>
          <li>联系我们</li>
          <li>新闻资讯</li>
          <li>人才招聘</li>
          <li>留言中心</li>
        </ul>
        <ul>
          <li>关注我们</li>
          <li>微信公众号</li>
          <li>小程序</li>
          <li>阿里商城</li>
          <li>微博平台号</li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <div class="w-1200">
        <p>
          <span><a href="https://www.wcip.net" target="_blank">山海文化有限公司</a>提供技术支持</span>
          <span>备案许可证号<a href="http://www.beian.miit.gov.cn/" target="_blank">豫ICP备19031536号-1</a></span>
        </p>
        <p>
          <router-link to="/1">免责声明</router-link>
          |
          <router-link to="/2">版权声明</router-link>
          |
          <router-link to="/3">网站地图</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .footer {
    height: 425px;
    background: #546c81;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .w-1200 {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      color: #cccccc;
      align-items: center;

      .logo-address {
        .logo {
          width: 378px;
        }

        .address {
          margin-top: 37px;
          display: flex;
          flex-flow: column;

          p {
            color: #cccccc;
            font-size: 16px;
            display: flex;
            align-items: center;
            line-height: 40px;
            margin-left: 50px;

            i {
              background: url("../assets/icons.png") 0 0 no-repeat;
              display: block;
              margin-right: 27px;
              width: 21px;
              height: 18px;

              &.i-address {
                background-position: -85px -84px;
              }

              &.i-email {
                background-position: -112px -84px;
              }

              &.i_tel {
                background-position: -148px -86px;
              }

              &.i-chuan {
                background-position: -178px -86px;
              }
            }
          }
        }
      }

      .q-nav {
        display: flex;

        ul {
          margin-left: 90px;

          li {
            color: #ccc;
            font-size: 14px;
            margin-bottom: 10px;
            cursor: pointer;

            &:first-child {
              cursor: auto;
              font-size: 18px;
              margin-bottom: 25px;
              color: #eeeeee;
            }
            &:hover{
              color: #50a8ec;
            }
          }
        }
      }
    }

    .copyright {
      flex-shrink: 0;
      height: 65px;
      border-top: 4px solid #64798c;

      .w-1200 {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          text-align: center;
          color: #999999;

          span {
            margin-right: 10px;
            font-size: 14px;
            color: #999;

            a {
              margin: 0 5px;
            }
          }

          a {
            color: #999;
          }
        }
      }
    }
  }
</style>
