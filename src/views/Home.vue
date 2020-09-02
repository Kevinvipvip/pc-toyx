<template>
  <div class="home page">
    <div class="swiper">
      <swiper v-if="slide_list.length>0" :options="swiperOption" class="swiper-wrap" ref="mySwiper">
        <swiper-slide class="swiper-item" v-for="(v,index) in slide_list" :key="'home'+index">
          <div class="swiper-img" :style="'background-image: url('+v.pic+')'">
            <div class="swiper-title"
                 :style="'background-image: url('+swiper_mask+');'">
              <div class="t-title animated" :class="{fadeInDownBig:index == isActive}">
                <h4>{{v.en_title}}</h4>
                <h3>{{v.title}}</h3>
                <p @click="to_slide_detail(v.url)">了解详情>></p></div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="content" :style="'background-image: url('+index_bg+')'">
      <!--关于我们-->
      <div class="home-mask">
        <div class="rank">
          <div class="ice-cake" :style="'background-image: url('+ice_cake_left+')'"></div>
          <div class="img-box"><img :src="about_flag?about_img[0]:about_img[1]"/></div>
        </div>
        <div class="rank2 w-1200">
          <h4>LUCKY TOY</h4>
          <h4>关于同缘兴</h4>
          <p>
            天津同缘兴科技股份有限公司成立于1993年，专注于毛绒玩具创意设计与研发制造，服务北美、欧洲、澳洲客户20余年，拥有强大的产品研发能力，完整的生产加工体系和严格的产品质量控制体系。同缘兴拥有“独角兽”和“亲亲一家”两个自主品牌，致力于打造全年龄段的服务产品，成为您追求美好生活路上的忠诚伴侣。我们的愿景：让美好融入生活，让生活更美好。</p>
          <router-link class="btn-more" :to="{path:'/about',query:{nav:3,on:1}}">Read More</router-link>
        </div>
      </div>

      <!--分类-->
      <div class="home-mask m1">
        <div class="classify">
          <swiper v-if="cate_list.length>0" :options="classify" class="swiper-classify" ref="classify">
            <swiper-slide class="classify-item" v-if="cate_list.length%2 !== 0" :key="'home_cate'+9999999" style="cursor: auto">
              <div class="item-img-bg" :style="'background-image: url('+ice_cake_small+')'">
              </div>
            </swiper-slide>
            <swiper-slide class="classify-item" v-for="(item,index) in cate_list" :key="'home_cate'+index" :id="item.id">

              <div class="item-img-bg" :style="'background-image: url('+ice_cake_small+')'">
                <div class="item-img"><img :src="item.icon2"/></div>
              </div>
              <h3>{{item.cate_name}}</h3>
            </swiper-slide>
          </swiper>
          <div class="home-cate-box"><img :src="home_cate"/></div>
        </div>

      </div>
      <!--研发中心-->
      <div class="home-mask m2">
        <div class="rank">
          <div class="img-box"><img :src="R_D_flag?R_D_img[0]:R_D_img[1]"/></div>
          <div class="ice-cake" :style="'background-image: url('+ice_cake_right+')'"></div>
        </div>
        <div class="rank2 w-1200">
          <h4>R&D</h4>
          <h4>研发中心</h4>
          <p>
            同缘兴不断追寻新的发展之路，在未来不仅是毛绒玩具，而是毛绒玩具加智能，毛绒玩具加工业等。向时代靠拢，与新技术融合，朝极致进发。目前的研发中心拥有多名丰富经验的研发人员，通过新创意、新技术提升现有产品的质量、属性以及传播性。</p>
          <router-link class="btn-more" :to="{path:'/contact',query:{on:1}}">Jion Us</router-link>
        </div>
      </div>
      <!--孵化中心-->
      <div class="home-mask m3">
        <div class="rank">
          <div class="ice-cake" :style="'background-image: url('+ice_cake_left+')'"></div>
          <div class="img-box"><img :src="incubation_flag?incubation_img[0]:incubation_img[1]"/></div>
        </div>
        <div class="rank2 w-1200">
          <h4>INCUBATION</h4>
          <h4>孵化中心</h4>
          <p>为不同的元素重构，把握市场需求以及产品定位，孵化有属性有内涵的毛绒玩具，将玩具多样化、品牌化且具有传播性的事业。目前我们的孵化基地已成功产出上百种毛绒玩具并推动销售额的大幅度提升。</p>
          <router-link class="btn-more" :to="{path:'/contact',query:{on:1}}">Jion Us</router-link>
        </div>
      </div>
      <!--定制服务-->
      <div class="home-mask m4">
        <div class="rank">
          <div class="img-box"><img :src="service_flag?service_img[0]:service_img[1]"/></div>
          <div class="ice-cake" :style="'background-image: url('+ice_cake_right+')'"></div>
        </div>
        <div class="rank2 w-1200">
          <h4>SERVICE</h4>
          <h4>定制服务</h4>
          <p>
            同缘兴玩具成立27年，励志开发新型、创新，符合用户需求的毛绒产品。目前毛绒玩具产品种类达千余种，完全能够为用户提供个性化设计、专属服务的定制服务。为了满足新老顾客对产品的体验，公司将提供免费打样服务以保障用户买的放心，用的舒心，如有需要来图即可。</p>
          <router-link class="btn-more" :to="{path:'/contact',query:{on:1}}">来图免费打样</router-link>
        </div>
      </div>
      <!--合作伙伴-->
      <div class="home-mask m5">
        <div class="rank">
          <div class="ice-cake" :style="'background-image: url('+ice_cake_left+')'"></div>
          <div class="img-box"><img :src="partner_flag?partner_img[0]:partner_img[1]"/></div>
        </div>
        <div class="rank2 w-1200">
          <h4>PARTNER</h4>
          <h4>合作伙伴</h4>
          <div class="partner">
            <div class="partner-img"><img src="../assets/partner1.png"/></div>
            <div class="partner-img"><img src="../assets/partner2.png"/></div>
          </div>
          <router-link class="btn-more" :to="{path:'/contact',query:{on:1}}">Jion Us</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'// 这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import { swiper, swiperSlide } from 'vue-awesome-swiper' // 引入slider组件

  var _self;

  export default {
    name: 'Home',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiper_mask: this.config.aliyun + 'static/swiper-mask.png',// 轮播图遮罩图片
        index_bg: this.config.bg_img,// 整个页面背景图
        ice_cake_left: this.config.aliyun + 'static/ice-cake-left.png',// 左边大冰块
        ice_cake_right: this.config.aliyun + 'static/ice-cake-right.png',// 右边大冰块
        ice_cake_small: this.config.aliyun + 'static/ice-cake-small.png',// 分类小冰块
        home_cate: this.config.aliyun + 'static/home-cate.png',// 分类小冰块

        // 插画图片 start
        about_flag: true,
        about_img: [this.config.aliyun + 'static/home-about1.png', this.config.aliyun + 'static/home-about2.png'],
        R_D_flag: true,
        R_D_img: [this.config.aliyun + 'static/home-R&D1.png', this.config.aliyun + 'static/home-R&D2.png'],
        incubation_flag: true,
        incubation_img: [this.config.aliyun + 'static/home-incubation1.png', this.config.aliyun + 'static/home-incubation2.png'],
        service_flag: true,
        service_img: [this.config.aliyun + 'static/home-service1.png', this.config.aliyun + 'static/home-service2.png'],
        partner_flag: true,
        partner_img: [this.config.aliyun + 'static/home-partner1.png', this.config.aliyun + 'static/home-partner2.png'],
        // 插画图片 end

        cate_list: [],//分类列表
        // 轮播图
        isActive: 0,
        slide_list: [],
        swiperOption: {
          // loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          speed: 800,
          direction: 'horizontal',
          on: {
            slideChange() {
              _self.isActive = this.activeIndex;
            }
          }
        },
        classify: {
          slidesPerView: 'auto',
          initialSlide: 0,
          // loop: true,
          // autoplay: {
          //   delay: 3000,
          //   stopOnLastSlide: false,
          //   disableOnInteraction: false
          // },
          on: {
            tap() {
              if (this.clickedSlide) {
                let cate_id = this.clickedSlide.getAttribute('id');
                if (cate_id) {
                  _self.$router.push({
                    path: '/server',
                    query: { nav: 2, on: 1, cate: cate_id }
                  })
                  ;
                }
              }
            }
          }
        }
      }
    },
    created() {
      _self = this;
      setInterval(() => {
        this.about_flag = !this.about_flag;
        this.R_D_flag = !this.R_D_flag;
        this.incubation_flag = !this.incubation_flag;
        this.service_flag = !this.service_flag;
        this.partner_flag = !this.partner_flag;
      }, 800);
      let promise1 = new Promise(resolve => {
        this.getSlideList(() => {
          resolve();
        });
      });
      let promise2 = new Promise(resolve => {
        this.getCateList(() => {
          this.classify.initialSlide = this.cate_list.length;
          resolve();
        });
      });
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      Promise.all([promise1, promise2]).then(() => {
        loading.close();
      });

    },
    mounted() {
      this.$nextTick(() => {
        console.log(this.$refs);
      });
    },
    methods: {
      // 点击轮播图进详情
      to_slide_detail(url) {
        if (url) {
          if (url.indexOf('http') === 0) {
            window.open(url, "_blank");
          } else {
            let page = url.split('?');
            let query = page[1].split('=');
            switch (page[0]) {
              case 'newDetail':
                this.$router.push({
                  path: page[0],
                  query: {
                    nav: 4,
                    id: query[1]
                  }
                });
                break;
              case 'productDetail':
                this.$router.push({
                  path: page[0],
                  query: {
                    nav: 2,
                    id: query[1]
                  }
                })
                ;
                break;
            }
          }
        }
      },
      // 获取分类列表
      getCateList(complete) {
        this.utils.ajax(this, 'zh.index/cateList').then(res => {
          this.utils.aliyun_format(res, 'icon2');
          this.cate_list = res.reverse();
          if (complete) {
            complete();
          }
        })
      },
      // 获取轮播图列表
      getSlideList(complete) {
        this.utils.ajax(this, 'zh.index/slideList').then(res => {
          this.utils.aliyun_format(res, 'pic');
          this.slide_list = res;
          if (complete) {
            complete();
          }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .home {
    min-width: 1400px;

    .swiper {
      height: 980px;

      .swiper-wrap {
        height: 100%;

        .swiper-img {
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;

          .swiper-title {
            background-repeat: no-repeat;
            height: 100%;
            width: 73%;
            background-position: center;
            background-size: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .t-title {
              display: flex;
              justify-content: center;
              color: #ffffff;
              flex-flow: column;
              font-size: 32px;

              h4 {
                font-weight: normal;
              }

              h3 {
                font-weight: normal;
                font-size: 48px;
              }

              p {
                cursor: pointer;
                margin-top: 53px;
              }
            }
          }
        }
      }
    ;
    }

    .content {
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: 100%;

      .home-mask {
        background-color: rgba(75, 140, 213, 0.6);
        height: 680px;
        position: relative;
        z-index: 1;

        .rank {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;

          .ice-cake {
            position: relative;
            left: 100px;
            width: 1041px;
            height: 551px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100%;
            z-index: 1;
          }

          .img-box {
            z-index: 2;
            position: relative;
            right: 90px;
            width: 680px;
          }
        }


        .rank2 {
          position: relative;
          z-index: 999;
          display: flex;
          height: 100%;
          flex-flow: column;
          justify-content: center;
          color: #333333;

          h4 {
            font-weight: normal;
            font-size: 32px;
          }

          p {
            max-width: 550px;
            margin: 40px 0;
            font-size: 16px;
            line-height: 24px;
            text-align: justify;
          }

          .btn-more {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 125px;
            height: 40px;
            border: solid 1px #4c89b5;
            font-size: 16px;
          }
        }

        &.m1 {
          background-color: rgba(75, 140, 213, 0.5);

          .classify {
            overflow: hidden;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;

            .home-cate-box {
              z-index: 2;
              margin-right: 59px;
              position: relative;
              margin-bottom: 34px;
              width: 331px;
              height: 356px;
              flex-shrink: 0;
            }

            .swiper-classify {
              z-index: 1;
              flex-grow: 1;
              position: relative;
              right: -30px;
              height: 100%;

              /deep/ .swiper-wrapper {
                display: flex;
                justify-content: flex-end;

                .classify-item {
                  margin-left: 40px;
                  width: 216px;
                  cursor: pointer;

                  transform: translateY(289px);
                  transition: 500ms;
                  height: 286px !important;

                  .item-img-bg {
                    width: 216px;
                    height: 253px;
                    background-repeat: no-repeat;
                    background-position: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .item-img {
                      width: 115px;
                      /*height: 151px;*/

                      /*img {*/
                      /*width: 100%;*/
                      /*!*height: 100%;*!*/
                      /*display: block;*/
                      /*}*/
                    }
                  }

                  h3 {
                    margin-top: 12px;
                    font-size: 16px;
                    color: #ffffff;
                    font-weight: normal;
                    text-align: center;
                  }


                  &:nth-child(even) {
                    transform: translateY(149px);
                  }

                  &:hover {
                    .item-img-bg {
                      .item-img {
                        transform: scale(1.2);
                        transition: 0.5s;
                      }
                    }
                  }
                }
              }
            }
          }

        }

        &.m2 {
          background-color: rgba(75, 140, 213, 0.4);

          .rank {
            .ice-cake {
              left: unset;
              right: 100px;
            }

            .img-box {
              right: unset;
              left: 90px;
            }
          }

          .rank2 {
            align-items: flex-end;
          }
        }

        &.m3 {
          background-color: rgba(75, 140, 213, 0.3);
        }

        &.m4 {
          background-color: rgba(75, 140, 213, 0.2);

          .rank {
            .ice-cake {
              left: unset;
              right: 100px;
            }

            .img-box {
              right: unset;
              left: 90px;
            }
          }

          .rank2 {
            align-items: flex-end;
          }
        }

        &.m5 {
          background-color: rgba(75, 140, 213, 0.1);

          .rank2 {
            .partner {
              display: flex;
              margin: 40px 0;

              .partner-img {
                margin-right: 56px;
              }
            }
          }
        }

        @media screen and (max-width: 1650px) {

          .rank2 {
            width: auto;
            margin-left: 200px;
          }

          &.m2, &.m4 {
            .rank2 {
              margin-left: 0;
              margin-right: 200px;
            }
          }
          &.m1 {
            .classify {
              .swiper-classify {
                /deep/ .swiper-wrapper {
                  justify-content: initial;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
