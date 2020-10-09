<template>
  <div class="server-world page" :style="'background-image: url('+bg_img+')'">
    <div class="bg-mask">

      <div class="banner" :style="'background-image: url('+banner+')'">
        <h3>服务全球</h3>
        <p>27年毛绒玩具生产经验 朝气蓬勃的员工队伍 精准实现客户需求</p>
      </div>

      <!--面包屑加tab-->
      <div class="crumb-tab">
        <div class="w-1200">
          <div class="crumb">
            <p>
              <router-link to="/"> 首页</router-link>
              >服务全球>{{now_page_text}}
            </p>
          </div>
          <div class="tab">
            <p :class="internal === 1?'on':''" @click="tab(1)">国内产品</p>
            <p :class="internal === 2?'on':''" @click="tab(2)">国外产品</p>
            <p :class="internal === 3?'on':''" @click="tab(3)">玩具定制</p>
          </div>
        </div>
      </div>
      <!--国内外产品展示-->
      <div class="internal" v-if="internal !== 3">

        <!--分类-->
        <div class="cate-box w-1200">
          <ul>
            <li :class="cate_id===0?'on':''" @click="change_cate()">全部产品</li>
            <li :class="cate_id===item.id?'on':''" v-for="(item,index) in cate_list" :key="'server_date' + index"
                @click="change_cate(item.id)">
              {{item.cate_name}}
            </li>
          </ul>
        </div>

        <!--产品列表-->
        <div class="product-list w-1200" v-loading="loading">
          <ul v-if="product_list.length">
            <router-link :to="{name:'productDetail',query:{nav:2,internal:internal,id:item.id}}" tag="li"
                         v-for="item in product_list"
                         :key="item.id">

              <div class="pic-box" :style="'background-image:url('+item.pic+')'"></div>
              <p class="one-line-ellipsis">{{item.name}}</p>
            </router-link>
          </ul>
          <div class="nodata" v-else>{{nodata}}</div>

          <div class="page-box" v-if="total>16">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="current_change"
                    :total="total">
            </el-pagination>
          </div>
        </div>
      </div>

      <!--玩具定制-->
      <div class="customized" v-else>
        <div class="customized-banner w-1200">
          <img :src="customized_imgs.banner"/>
        </div>
        <!--定制产品-->
        <div class="title w-1200" ref="scroll_three">
          <div class="enlish-title">PRODUCT</div>
          <p><span>定制产品</span></p>
        </div>
        <div class="customized-one">
          <ul>
            <li v-for="item in customized" :key="item.id">
              <div class="p-box">
                <p>{{item.title}}</p>
              </div>
            </li>
          </ul>
        </div>

        <!--定制展示-->
        <div class="title w-1200" ref="scroll_three">
          <div class="enlish-title">PRODUCT</div>
          <p><span>定制展示</span></p>
        </div>
        <div class="customized-two w-1200">
          <!--<div class="img-center"><img src="../assets/customized/icon-dingzhizhanshi.png"/></div>-->
          <div class="two-item">
            <div class="img"><img :src="customized_imgs.img1"/></div>
            <!--<p>设计图</p>-->
          </div>
          <div class="two-item">
            <div class="img"><img :src="customized_imgs.img2"/></div>
            <!--<p>成品图</p>-->
          </div>
          <div class="two-item">
            <div class="img"><img :src="customized_imgs.img3"/></div>
            <!--<p>成品图</p>-->
          </div>
          <div class="two-item">
            <div class="img"><img :src="customized_imgs.img4"/></div>
            <!--<p>成品图</p>-->
          </div>
        </div>

        <!--定制流程-->
        <div class="title w-1200" ref="scroll_three">
          <div class="enlish-title">PRODUCT</div>
          <p><span>定制流程</span></p>
        </div>
        <div class="customized-three w-1200">
          <ul>
            <li v-for="item in customized_liucheng" :key="item.id">
              <div class="liucheng-img"><img :src="item.pic"/></div>
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        banner: this.config.banner,
        bg_img: this.config.bg_img,
        customized_imgs: {
          banner: this.config.aliyun + 'static/customized-banner.png',//玩具定制banner图
          img1: this.config.aliyun + 'static/customized-img1.png',//玩具定制..定制展示图
          img2: this.config.aliyun + 'static/customized-img2.png',
          img3: this.config.aliyun + 'static/customized-img3.png',
          img4: this.config.aliyun + 'static/customized-img4.png'
        },//玩具定制在阿里云上的图片

        internal: 0,
        now_page_text: '',
        page: 1,
        total: 0,

        cate_id: 0,//选择分类的活动项
        cate_list: [],// 分类

        product_list: [],//产品列表数据

        loading: true,
        nodata: '',

        customized: this.config.customized,
        customized_liucheng: this.config.customized_liucheng
      };
    },
    beforeRouteUpdate(to) {
      this.internal = parseInt(to.query.on);
      this.cate_id = parseInt(to.query.cate) || 0;
      this.my_load(this.internal, this.cate_id);
    },
    mounted() {
      this.internal = parseInt(this.$route.query.on);
      this.cate_id = parseInt(this.$route.query.cate) || 0;
      this.my_load(this.internal, this.cate_id);

      // this.my_onload();
    },
    methods: {
      tab(on) {
        this.internal = on;
        // this.my_load(on, this.cate_id);
        this.$router.replace({ name: 'center', query: { nav: 2, on: on } });
      },

      change_cate(cate_id) {
        this.cate_id = cate_id || 0;
        this.page = 1;
        this.getProductList();
      },

      current_change(current) {
        this.page = current;
        this.getProductList();
      },

      my_load(index, cate_id) {
        switch (index) {
          case 1:
            this.now_page_text = '国内产品';
            this.page = 1;
            this.cate_list = [];
            this.cate_id = cate_id;
            this.getCateList();
            this.getProductList();
            break;
          case 2:
            this.now_page_text = '国外产品';
            this.page = 1;
            this.cate_list = [];
            this.cate_id = 0;
            this.getProductList();
            break;
          case 3:
            this.now_page_text = '玩具定制';
            // this.page = 1;
            // this.cate_list = [];
            // this.cate_id = 0;
            // this.getProductList();
            break;
        }
      },
      getCateList() {
        this.utils.ajax(this, 'zh.index/cateList').then(res => {
          this.cate_list = res;
        })
      },
      getProductList() {
        let post = {
          page: this.page,
          perpage: 16,
          cate_id: this.cate_id,
          internal: this.internal
        };
        this.loading = true;
        this.utils.ajax(this, 'zh.index/productList', post).then(res => {
          if (!res.list.length) {
            this.nodata = '暂无数据'
          }
          this.utils.aliyun_format(res.list, 'pic');
          this.product_list = res.list;
          this.total = res.count;
          this.loading = false;
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  .server-world {
    /*background: #F2F3F5;*/
    /*面包屑加tab样式*/
    .crumb-tab {
      background-color: #ffffff;

      .w-1200 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
      }

      .crumb {
        display: flex;
        align-items: center;
        color: #666666;
        font-size: 16px;

        a {
          color: #666666;
          font-size: 16px;

          &:hover {
            color: #50a8ec;
          }
        }
      }

      .tab {
        display: flex;
        height: 100%;

        p {
          height: 100%;
          font-size: 16px;
          color: #333;
          margin-left: 50px;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;

          &.on:after, &:hover:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%);
            width: 55%;
            height: 4px;
            background-color: #50a8ec;
          }
        }
      }
    }

    /*国内外产品展示样式*/
    .internal {
      /*分类样式*/
      .cate-box {
        padding: 24px 0 16px;
        box-sizing: border-box;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            width: 94px;
            height: 40px;
            border-radius: 10px;
            background-color: #f7f7f7;
            color: #999999;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 24px;
            margin-bottom: 24px;
            cursor: pointer;

            &.on, &:hover {
              background-color: #50a8ec;
              color: #ffffff;
            }
          }
        }
      }

      /*产品列表样式*/
      .product-list {
        padding-bottom: 80px;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            cursor: pointer;
            width: 260px;
            margin-right: 53px;
            margin-top: 30px;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;

            .pic-box {
              width: 100%;
              padding-bottom: 100%;
              height: 0;
              overflow: hidden;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
            }

            &:hover {
              .pic-box {
                transform: scale(1.1);
                transition: 0.5s;
              }
            }

            p {
              margin: 50px 15px 27px;
              text-align: center;
              font-size: 14px;
              color: #666666;
            }

            &:nth-child(4n) {
              margin-right: 0;
            }

            &:nth-child(-n+4) {
              margin-top: 0;
            }
          }
        }

        .page-box {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
        }
      }
    }

    /*玩具定制样式*/
    .customized {
      margin-bottom: 100px;

      .customized-banner {
        margin-top: 24px;
      }

      /*title样式*/
      .title {
        margin: 80px auto 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;

        .enlish-title {
          font-size: 32px;
          color: #333333;
          margin-bottom: 5px;
        }

        p {
          font-size: 32px;
          color: #333333;
          font-weight: bold;
          position: relative;
          z-index: 3;
          padding: 6px 26px;
          border-radius: 10px;
          border: solid 2px #ffffff;
          overflow: hidden;

          span {
            position: relative;
            z-index: 9;
          }

          &:before {
            content: '';
            width: 50%;
            height: 100%;
            background-color: #ffffff;
            left: 0;
            top: 0;
            position: absolute;
            z-index: 1;
          }

          &:after {
            content: '';
            width: 50%;
            height: 100%;
            background-color: transparent;
            right: 0;
            top: 0;
            position: absolute;
            z-index: 1;
          }
        }
      }

      /*定制产品样式*/
      .customized-one {
        padding-bottom: 80px;

        ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0 50px;


          li {
            background: url("../assets/customized/customized-bg.png") no-repeat;
            background-position: bottom;
            background-size: 100% 100%;
            margin: 0 10px;
            width: calc(9.09% - 40px);
            padding-bottom: calc(9.09% - 40px);
            height: 0;
            border-radius: 50%;
            position: relative;

            .p-box {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 2;
              overflow: hidden;
              display: flex;
              justify-content: center;
              border-radius: 50%;
              align-items: center;

              p {
                margin: 0 20px 20px;
                text-align: center;
                color: #50a8ec;
                font-size: 18px;

              }
            }

            &:nth-child(odd) {
              transform: translateY(80px);
            }

            &:hover {
              .p-box {
                transition: 1s;
                background-color: rgb(30, 130, 255);

                p {
                  transition: 1s;
                  color: #ffffff;
                  margin: 0 20px;
                }
              }
            }
          }
        }
      }

      /*定制展示样式*/
      .customized-two {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        position: relative;

        .img-center {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 3;
          transform: translate(-50%, -50%);
        }

        .two-item {
          width: calc(50% - 20px);
          height: 364px;
          /*background-color: #ffffff;*/
          /*border-radius: 10px;*/
          /*border: solid 1px #ededed;*/
          display: flex;
          /*flex-flow: column;*/
          justify-content: center;
          align-items: center;
          margin-bottom: 40px;

          /*.img {*/
            /*!*margin-bottom: 23px;*!*/
            /*width: 100%;*/
          /*}*/

          /*p {*/
          /*font-size: 18px;*/
          /*color: #666666;*/
          /*border: solid 1px #bfbfbf;*/
          /*padding: 8px 23px;*/
          /*}*/
        }
      }

      /*定制流程样式*/
      .customized-three {
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;

          li {
            /*width: 12.5%;*/
            position: relative;

            &:after {
              content: '';
              position: absolute;
              left: 100%;
              top: 49.5px;
              height: 3px;
              width: 100%;
              background-color: #39a8ff;
            }

            &:last-child:after {
              display: none;
            }

            .liucheng-img {
              width: 99px;
              height: 99px;
            }

            p {
              text-align: center;
              font-size: 20px;
              color: #333333;
              margin-top: 30px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1700px) {
    .server-world {
      .customized {
        .customized-one {
          ul {
            li {
              width: calc(9.09% - 20px);
              padding-bottom: calc(9.09% - 20px);

              .p-box {
                p {
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
