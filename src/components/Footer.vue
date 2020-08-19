<template>
  <div class="footer" ref="footer">
    <div class="w-1200">
      <div class="logo-address">
        <div class="logo">
          <router-link to="/"><img src="../assets/logo-footer.png" alt=""></router-link>
        </div>
        <div class="address">
          <p><i class="i-address"></i><span>地 址：{{footer.address}}</span></p>
          <p><i class="i-email"></i><span>邮 箱：{{footer.email}}</span></p>
          <p><i class="i_tel"></i><span>联系电话：{{footer.tel}}</span></p>
          <p><i class="i-chuan"></i><span>传 真：{{footer.fax}}</span></p>
        </div>
      </div>
      <div class="q-nav">
        <ul>
          <li>关于我们</li>
          <router-link :to="{path:'/about',query:{nav:3,on:1}}" tag="li">公司介绍</router-link>
          <router-link :to="{path:'/about',query:{nav:3,on:2}}" tag="li">发展历程</router-link>
          <router-link :to="{path:'/about',query:{nav:3,on:3}}" tag="li">企业文化</router-link>
          <router-link :to="{path:'/about',query:{nav:3,on:4}}" tag="li">荣誉资质</router-link>
          <router-link :to="{path:'/about',query:{nav:3,on:5}}" tag="li">企业团队</router-link>
          <router-link :to="{path:'/about',query:{nav:3,on:6}}" tag="li">社会责任</router-link>
        </ul>
        <ul>
          <li>服务全球</li>
          <router-link :to="{path:'/server',query:{nav:2,on:1,cate:item.id}}" tag="li" v-for="(item,index) in cate_list"
                       :key="index">{{item.cate_name}}
          </router-link>
          <!--<router-link :to="{path:'/server',query:{nav:2,on:1,cate:1}}" tag="li">授权产品</router-link>-->
          <!--<router-link :to="{path:'/server',query:{nav:2,on:1,cate:1}}" tag="li">抓机系列</router-link>-->
          <!--<router-link :to="{path:'/server',query:{nav:2,on:1,cate:1}}" tag="li">母婴系列</router-link>-->
          <!--<router-link :to="{path:'/server',query:{nav:2,on:1,cate:1}}" tag="li">抱枕系列</router-link>-->
          <!--<router-link :to="{path:'/server',query:{nav:2,on:1,cate:1}}" tag="li">国际市场</router-link>-->
        </ul>
        <ul>
          <li>快捷入口</li>
          <router-link :to="{path:'contact',query:{nav:5}}" tag="li">联系我们</router-link>
          <router-link :to="{path:'news',query:{nav:4}}" tag="li">新闻资讯</router-link>
          <router-link :to="{path:'contact',query:{nav:5,on:2}}" tag="li">人才招聘</router-link>
          <router-link :to="{path:'contact',query:{nav:5,on:1}}" tag="li">留言中心</router-link>
        </ul>
        <ul>
          <li>关注我们</li>
          <li class="have-code">
            <el-tooltip placement="right">
              <div slot="content" style="width: 100px;height: 100px;"><img src="../assets/wx-code.jpg"/></div>
              <span>微信公众号</span>
            </el-tooltip>
          </li>
          <li class="have-code">
            <el-tooltip placement="right">
              <div slot="content" style="width: 100px;height: 100px;"><img src="../assets/mp-code.jpg"/></div>
              <span>小程序</span>
            </el-tooltip>
          </li>
          <li>
            <el-tooltip placement="right">
              <div slot="content" style="width: 100px;height: 100px;"><img src="../assets/1688-code.png"/></div>
              <a href="https://tongyuanxingtoy.1688.com?spm=a2615.2177701.autotrace-shopSigns.2.134e1001sVuPec"
                 target="_blank">阿里商城</a>
            </el-tooltip>
          </li>
          <!--<li>微博平台号</li>-->
        </ul>
      </div>
    </div>
    <div class="copyright">
      <div class="w-1200">
        <p>
          <span><a href="https://www.wcip.net" target="_blank">山海文化有限公司</a>提供技术支持</span>
          <span>备案许可证号<a href="http://www.beian.miit.gov.cn/" target="_blank">津ICP备20006105号-1</a></span>
        </p>
        <p>
          <router-link to="/">免责声明</router-link>
          |
          <router-link to="/">版权声明</router-link>
          <!--|-->
          <!--<router-link to="/">网站地图</router-link>-->
        </p>
      </div>
    </div>

    <!--全局悬浮框-->
    <div class="fixed-windown">
      <div class="icon-box"><img src="../assets/icon-mp.png" alt="微信小程序">
        <p>小程序</p>
        <div class="QR-code"><img src="../assets/mp-code.jpg"></div>
      </div>
      <div class="icon-box"><img src="../assets/icon-wx.png" alt="微信公众号">
        <p>公众号</p>
        <div class="QR-code"><img src='../assets/wx-code.jpg'></div>
      </div>
      <div class="icon-box can-click">
        <a target="_blank" :href="'http://wpa.qq.com/msgrd?v=3&uin='+footer.qq+'&site=qq&menu=yes'">
          <img src="../assets/icon-qq.png" alt="在线咨询">
          <p>在线咨询</p>
        </a>
      </div>
      <div class="icon-box can-click" @click="return_top"><img src="../assets/top-icon.png" alt="返回顶部"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        footer: {},
        cate_list: [],
        scrollTop: null
      };
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
      this.utils.ajax(this, 'zh.index/aboutUs').then(res => {
        this.footer = res;
      });
      this.utils.ajax(this, 'zh.index/cateList').then(res => {
        let cate = [];
        for (let i = 0; i < res.length; i++) {
          if (i <= 3) {
            cate.push(res[i]);
          }
        }
        this.cate_list = cate;
      })
    },

    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      return_top() {
        console.log(1111)
        let timer = null, that = this;
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
          if (that.scrollTop > 0) {
            that.scrollTop -= 200;
            document.body.scrollTop = document.documentElement.scrollTop = that.scrollTop;
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer);
            that.visiable = false;
          }
        })
      },

      handleScroll() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .footer {
    min-width: 1200px;
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

            a {
              color: #cccccc;
              font-size: 14px;
            }

            &.have-code {
              cursor: auto;
            }

            &:first-child {
              cursor: auto;
              font-size: 18px;
              margin-bottom: 25px;
              color: #eeeeee;
            }

            &.have-code:hover {
              color: #cccccc;
            }

            &:hover {
              color: #50a8ec;

              a {
                color: #50a8ec;
              }
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

            &:hover {
              color: #cccccc;
            }
          }
        }
      }
    }

    .fixed-windown {
      width: 80px;
      padding-left: 20px;
      background-color: #50a8ec;
      position: fixed;
      z-index: 9999;
      right: 0;
      top: 50%;
      transform: translate(80%, -50%);
      display: flex;
      flex-flow: column;
      align-items: center;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      &:hover {
        transform: translate(0, -50%);
        /*transform: translateX(0);*/
        transition: 0.5s;
        padding: 0;
      }

      .icon-box {
        position: relative;
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        border-bottom: 1px solid #ffffff;
        display: flex;
        justify-content: center;
        flex-flow: column;
        align-items: center;

        .QR-code {
          position: absolute;
          display: none;
          top: -15px;
          left: -140px;
          width: 115px;
          height: 109px;
          background-color: #50a8ec;
          justify-content: center;
          align-items: center;

          img {
            width: 85%;
            height: 85%;
            display: block;
          }
        }

        .QR-code:after {
          content: '';
          position: absolute;
          border-left: 7.5px solid #50a8ec;
          border-top: 7.5px solid transparent;
          border-bottom: 7.5px solid transparent;
          right: -7.5px;
          top: 47px;
        }

        img {
          display: block;
          width: 38px;
          height: 38px;
        }

        p {
          font-size: 16px;
          color: #ffffff;
          margin-top: 5px;
        }
      }

      .icon-box:last-child {
        border: none;
      }

      .icon-box:hover .QR-code {
        display: flex;
      }

      .can-click {
        cursor: pointer;

        a {
          display: flex;
          justify-content: center;
          flex-flow: column;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
