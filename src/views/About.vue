<template>
  <div class="about page" :style="'background-image: url('+bg_img+')'">
    <div class="banner" :style="'background-image: url('+banner+')'">
      <h3>关于我们</h3>
      <p>27年毛绒玩具生产经验 朝气蓬勃的员工队伍 精准实现客户需求</p>
    </div>
    <!--面包屑加tab-->
    <div class="crumb-tab">
      <div class="w-1200">
        <div class="crumb">
          <p>关于我们>{{page}} </p>
        </div>
        <div class="tab">
          <p :class="index === 1?'on':''" @click="tab(1)">公司介绍</p>
          <p :class="index === 2?'on':''" @click="tab(2)">发展历程</p>
          <p :class="index === 3?'on':''" @click="tab(3)">企业团队</p>
          <p :class="index === 4?'on':''" @click="tab(4)">荣誉资质</p>
        </div>
      </div>
    </div>

    <!--公司介绍 Company profile-->
    <div class="company" :style="'background-image: url('+cp_image.bg+')'">
      <div class="title w-1200" ref="scroll_one">
        <div class="enlish-title">COMPANY</div>
        <p><span>公司介绍</span></p>
      </div>
      <div class="cp-box w-1200">
        <div class="introduce">
          <p>天津同缘兴科技股份有限公司成立于1993年</p>
          <p>专注于毛绒玩具创意设计与研发制造，服务北美、欧洲、澳洲客户20余年</p>
          <p>拥有强大的产品研发能力，完整的生产加工体系和严格的产品质量控制体系</p>
          <p>同缘兴拥有“独角兽”和“亲亲一家”两个自主品牌</p>
          <p>致力于打造全年龄段的服务产品，成为您追求美好生活路上的忠诚伴侣。</p>
          <p>我们的愿景：让美好融入生活，让生活更美好。</p>
        </div>
        <div class="cp-pics-box">
          <div class="cp-btn swiper-button-prev"><img src="../assets/customized/icon-left.png"/></div>
          <swiper v-if="cp_image.pics.length>0" :options="cp_option" class="swiper-cp" ref="mySwiper">
            <swiper-slide class="swiper-cp-item" v-for="(item,index) in cp_image.pics" :key="'cp-'+index">
              <div class="cp-img" :style="'background-image: url('+item+')'">
              </div>
            </swiper-slide>
          </swiper>
          <div class="cp-btn swiper-button-next"><img src="../assets/customized/icon-right.png"/></div>
        </div>
      </div>
    </div>


    <!--发展历程 development history-->
    <div class="development" ref="scroll_two">
      <div class="dh-box w-1200" :style="'background-image: url('+dh_image.date+')'">
        <div class="dh-bg dh-left" :style="'background-image: url('+dh_image.bg1+')'">
          <div class="dh-img"><img :src="dh_image.pic"/></div>
        </div>
        <div class="dh-bg dh-right" :style="'background-image: url('+dh_image.bg2+')'"></div>
        <div class="title w-1200">
          <div class="enlish-title">HISTORY</div>
          <p><span>发展历程</span></p>
        </div>
        <ul>
          <li class="dh-event">
            <div class="event-title">{{is_click?dh_title:dh_data[hover_on].year}}</div>
            <div class="event-cont">{{is_click?dh_ecent_cont:dh_data[hover_on].event}}</div>
          </li>
          <li v-for="(v,i) in dh_data" :key="i" :class="'position'+(i+1)" @mouseenter="hover_on_year(i)"
              @mouseleave="hover_on_year(click_on)" @click="dh_click_year(i)">
            <div class="flag-img" v-if="is_click" :class="click_on === i?'on':''"><img :src="dh_image.flag"/></div>
            <div class="flag-img" v-else :class="hover_on === i?'on':''"><img :src="dh_image.flag"/></div>
            <p>{{v.year}}</p>
          </li>
        </ul>
      </div>
    </div>

    <!--企业团队 Enterprise team-->
    <div class="corporate" :style="'background-image: url('+et_imgs.bg+')'">
      <div class="title w-1200" ref="scroll_three">
        <div class="enlish-title">CULTURE</div>
        <p><span>企业团队</span></p>
      </div>
      <div class="et-box w-1200">
        <div class="et-img">
          <img :src="et_imgs.img"/>
        </div>
        <div class="et-one">
          <div class="ys-box">
            <h3>我们的优势</h3>
            <p>27年毛绒玩具生产经验</p>
            <p> 朝气蓬勃的员工队伍</p>
            <p> 完善精干的管理体系</p>
            <div class="icon">
              <img :src="et_imgs.icon1"/>
            </div>
          </div>
          <div class="team" :style="'background-image: url('+et_imgs.img1+')'">
            <div class="team-cont">
              <h3>生产团队</h3>
              <p>一支朝气蓬勃、精益求精的员工队伍，</p>
              <p> 和一套完善精干、追求卓越的管理体系。</p>
            </div>
          </div>
        </div>

        <div class="et-two">
          <div class="two-left">
            <div class="left"><img :src="et_imgs.img2"/></div>
            <div class="right team" :style="'background-image: url('+et_imgs.img3+')'">
              <div class="team-cont">
                <h3>设计团队</h3>
                <p>一支经验丰富、专业专注、热情创新的团队。</p>
              </div>
            </div>
            <div class="left yz-box">
              <h3>我们的原则</h3>
              <p>质量精良</p>
              <p> 客户至上</p>
              <p> 诚实守信</p>
              <div class="icon">
                <img :src="et_imgs.icon2"/>
              </div>
            </div>
            <div class="right"><img :src="et_imgs.img4"/></div>
          </div>
          <div class="mb-box" :style="'background-image: url('+et_imgs.img5+')'">
            <div class="cont">
              <h3>我们的目标</h3>
              <p>对外成就客户</p>
              <p>对内成就员工</p>
              <p>真诚回馈社会</p>
              <p>共同实现梦想</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--荣誉资质 Honor and qualification-->
    <div class="honor" :style="'background-image: url('+hq_imgs.bg+')'">
      <div class="title w-1200" ref="scroll_four">
        <div class="enlish-title">HONOR</div>
        <p><span>荣誉资质</span></p>
      </div>
      <div class="hq-box w-1200">
        <div class="hq-img"><img :src="hq_imgs.img"/></div>
        <!--荣誉-->
        <div class="hq-swiper">
          <swiper v-if="hq_data.honor.length>0" :options="hq_option" class="swiper-hq" ref="hqSwiper">

            <swiper-slide :class="'swiper-hq-item '+ item.name" v-for="(item,index) in hq_data.honor" :key="index">
              <div class="honor-img" :style="'background-image: url('+hq_imgs.frame1+')'"><img :src="item.pic"/></div>
              <p class="one-line-ellipsis">{{item.title}}</p>
            </swiper-slide>
          </swiper>
        </div>

        <!--资质-->
        <div class="zizhi">
          <ul>
            <li v-for="(item,index) in hq_data.zizhi" :key="index">
              <div class="zizhi-img" :style="'background-image: url('+hq_imgs.frame2+')'"><img :src="item.pic"/></div>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import 'swiper/dist/css/swiper.css'// 这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import { swiper, swiperSlide } from 'vue-awesome-swiper' // 引入slider组件

  export default {
    name: 'About',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        banner: this.config.banner,// banner图
        bg_img: this.config.bg_img,
        cp_image: {
          bg: this.config.aliyun + 'static/cp-bg.png',
          pics: [
            this.config.aliyun + 'static/cp-image1.jpg',
            this.config.aliyun + 'static/cp-image2.jpg',
            this.config.aliyun + 'static/cp-image3.jpg',
            this.config.aliyun + 'static/cp-image4.jpg',
            this.config.aliyun + 'static/cp-image5.jpg']
        }, // 公司介绍在阿里云oss中的图片
        dh_image: {
          bg1: this.config.aliyun + 'static/dh-bg1.png',
          bg2: this.config.aliyun + 'static/dh-bg2.png',
          date: this.config.aliyun + 'static/dh-date.png',
          pic: this.config.aliyun + 'static/dh-img.png',
          flag: this.config.aliyun + 'static/dh-flag.png'
        },// 发展历程在阿里云oss中的图片
        et_imgs: {
          bg: this.config.aliyun + 'static/et-bg.png',
          img: this.config.aliyun + 'static/et-img.png',
          img1: this.config.aliyun + 'static/et-image1.jpg',
          img2: this.config.aliyun + 'static/et-image2.jpg',
          img3: this.config.aliyun + 'static/et-image3.jpg',
          img4: this.config.aliyun + 'static/et-image4.jpg',
          img5: this.config.aliyun + 'static/et-image5.jpg',
          icon1: this.config.aliyun + 'static/et-icon1.png',
          icon2: this.config.aliyun + 'static/et-icon2.png',
        },// 企业团队在阿里云oss中的图片
        hq_imgs: {
          bg: this.config.aliyun + 'static/hq-bg.png',
          frame1: this.config.aliyun + 'static/hq-frame1.png',
          frame2: this.config.aliyun + 'static/hq-frame2.png',
          img: this.config.aliyun + 'static/hq-img.png',
        },// 荣誉资质在阿里云oss中的图片
        hq_data: this.config.hq_data,

        index: 0,//tab的选择项
        page: '',//面包屑左后一项的文字内容

        dh_data: [],//发展历程
        dh_title: '',
        dh_ecent_cont: '',
        click_on: 10,
        hover_on: 10,
        is_click: true,

        // cc_top: 0,
        // scroll: 0,

        cp_option: {
          loop: true,
          slidesPerView: 4,
          spaceBetween: 18,
          navigation: {
            nextEl: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
            prevEl: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
          },
        },
        hq_option: {
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          slidesPerView: 5,
          centeredSlides: true,
          on: {
            slideChange() {
              let arr = this.slides;
              for (let i = 0; i < arr.length; i++) {
                this.slides[this.activeIndex - 3].setAttribute('class', 'swiper-hq-item swiper-slide next2');
                this.slides[this.activeIndex - 2].setAttribute('class', 'swiper-hq-item swiper-slide prev2');
                this.slides[this.activeIndex - 1].setAttribute('class', 'swiper-hq-item swiper-slide prev1');
                this.slides[this.activeIndex].setAttribute('class', 'swiper-hq-item swiper-slide on');
                this.slides[this.activeIndex + 1].setAttribute('class', 'swiper-hq-item swiper-slide next1');
                this.slides[this.activeIndex + 2].setAttribute('class', 'swiper-hq-item swiper-slide next2');
                this.slides[this.activeIndex + 3].setAttribute('class', 'swiper-hq-item swiper-slide prev2');
              }
            }
          }
        },//荣誉资质轮播图配置
      }
    },
    beforeRouteUpdate(to) {
      this.index = parseInt(to.query.on);
      this.my_load(this.index);
      // window.scrollTo(0, 0)
    },
    mounted() {
      // window.addEventListener("scroll", this.scroll_tap);
      this.index = parseInt(this.$route.query.on);
      this.my_load(this.index);
      this.dh_data = this.config.history;
      this.dh_title = this.config.history[10].year;
      this.dh_ecent_cont = this.config.history[10].event;
    },
    methods: {
      // 点击发展历程年份
      dh_click_year(index) {
        this.is_click = true;
        let dh_data = this.config.history;
        this.click_on = index;
        this.dh_title = dh_data[index].year;
        this.dh_ecent_cont = dh_data[index].event;
      },
      // 发展历程hover显示
      hover_on_year(index) {
        this.is_click = false;
        this.hover_on = index;
      },
      // scroll_tap() {
      //   this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      // },

      tab(on) {
        this.index = on;
        this.my_load(on);
      },
      my_load(index) {
        this.$nextTick(() => {
          // console.log(this.$refs)
          switch (index) {
            case 1:
              this.page = '公司介绍';
              break;
            case 2:
              this.page = '发展历程';
              window.scrollTo({
                top: this.$refs.scroll_two.offsetTop,
                behavior: "smooth"
              });
              break;
            case 3:
              // console.log(this.$refs.scroll_three.offsetTop, 'three');
              // this.cc_top = this.$refs.scroll_three.offsetTop - (window.screen.availHeight / 2);
              this.page = '企业团队';
              window.scrollTo({
                top: this.$refs.scroll_three.offsetTop,
                behavior: "smooth"
              });
              break;
            case 4:
              this.page = '荣誉资质';
              window.scrollTo({
                top: this.$refs.scroll_four.offsetTop,
                behavior: "smooth"
              });
              break;
          }
        });
      },

      // 将发展历程根据数组长度分别放在左右两个数组中
      // handle_dh_data() {
      //   let arr = this.config.history, left = [], right = [];
      //   for (let i = 0; i < arr.length; i++) {
      //     let num = arr.length % 2;
      //     if (num === 0) {
      //       if (i <= (arr.length / 2 - 1)) {
      //         left.push(arr[i]);
      //       } else {
      //         right.push(arr[i]);
      //       }
      //     } else {
      //       if (i <= (arr.length / 2)) {
      //         left.push(arr[i]);
      //       } else {
      //         right.push(arr[i]);
      //       }
      //     }
      //   }
      //   this.dh_data_left = left;
      //   this.dh_data_right = right;
      // }
    }
  };
</script>

<style lang="scss" scoped>
  .about {
    /*title样式*/
    .title {
      margin: 60px auto 0;
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

    /*公司介绍*/
    .company {
      overflow: hidden;
      background-repeat: no-repeat;
      background-position: center;
      background-color: rgba(75, 140, 213, 0.6);
      background-size: auto;

      .cp-box {
        margin: 60px auto 0;

        .introduce {
          p {
            font-size: 18px;
            color: #ffffff;
            text-align: center;
          }
        }

        .cp-pics-box {
          height: 200px;
          margin: 46px auto 60px;
          display: flex;
          justify-content: space-between;

          .cp-btn {
            position: relative;
            background: unset;
            margin-top: -17.5px;
            left: 0;
            right: 0;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
          }

          .swiper-cp {
            flex: 1;
            margin: 0 10px;
            height: 100%;

            .swiper-cp-item {

              .cp-img {
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
              }
            }
          }
        }
      }
    }

    /*发展历程*/
    .development {
      overflow: hidden;
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: 100%;
      background-color: rgba(75, 140, 213, 0.5);
      height: 734px;

      .dh-box {
        height: 100%;
        background-position: bottom;
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;

        .title {
          margin-top: 0;
          padding-top: 60px;
        }

        .dh-bg {
          background-repeat: no-repeat;
          background-size: auto 100%;
          position: absolute;
          height: 100%;
          bottom: 0;
          /*z-index: 2;*/
          width: calc((100vw - 1200px) / 2);

          &.dh-left {
            right: 1200px;
            background-position: bottom right;

            .dh-img {
              width: 262px;
              height: 340px;
              position: absolute;
              right: 33px;
              bottom: 25px;
            }
          }

          &.dh-right {
            background-position: bottom left;
            left: 1200px;
            background-color: rgb(224, 239, 255);
          }
        }

        ul {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;

          li {
            position: absolute;
            cursor: pointer;

            &.dh-event {
              cursor: auto;
              position: relative;
              width: 30%;
              height: 330px;

              .event-title {
                display: inline-block;
                font-size: 46px;
                color: #ffffff;
                position: relative;
                padding-bottom: 20px;
                margin-bottom: 20px;

                &:after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  width: calc(100% - 10px);
                  height: 4px;
                  background-color: #f19149;
                  border-radius: 2px;
                }
              }

              .event-cont {
                font-size: 16px;
                color: #333333;
                line-height: 24px;
              }
            }

            p {
              padding-top: 15px;
              font-size: 14px;
              color: #333333;
            }

            .flag-img {
              position: absolute;
              bottom: 100%;
              width: 45px;
              display: none;

              &.on {
                display: block;
              }
            }

            &:hover {
              .flag-img {
                display: block;
              }
            }

            &.position1 {
              top: 87.8%;
              left: 0;

              .flag-img {
                left: -55%;
              }
            }

            &.position2 {
              top: 86.8%;
              left: 7%;

              .flag-img {
                left: -30%;
              }
            }

            &.position3 {
              top: 85%;
              left: 14.5%;

              .flag-img {
                left: -28%;
              }
            }

            &.position4 {
              top: 82.7%;
              left: 22.6%;

              .flag-img {
                left: -33%;
              }
            }

            &.position5 {
              top: 79%;
              left: 30.8%;

              .flag-img {
                left: -52%;
              }
            }

            &.position6 {
              top: 70.5%;
              left: 39%;

              .flag-img {
                left: -38%;
              }
            }

            &.position7 {
              top: 58.2%;
              left: 47.5%;

              .flag-img {
                left: -50%;
              }
            }

            &.position8 {
              top: 52.5%;
              left: 55%;

              .flag-img {
                left: -38%;
              }
            }

            &.position9 {
              top: 50.3%;
              left: 63%;

              .flag-img {
                left: -38%;
              }
            }

            &.position10 {
              top: 48.4%;
              left: 70.8%;

              .flag-img {
                left: -32%;
              }
            }

            &.position11 {
              top: 43%;
              left: 79%;

              .flag-img {
                left: -38%;
              }
            }

            &.position12 {
              top: 30.5%;
              left: 87.5%;

              .flag-img {
                left: -50%;
              }
            }

            &.position13 {
              top: 20.5%;
              left: 92.7%;

              .flag-img {
                left: -47%;
              }
            }

            &.position14 {
              top: 12%;
              right: 0;

              .flag-img {
                right: -26%;
              }

              p {
                padding-top: 40px;
              }
            }
          }
        }
      }
    }

    /*企业团队*/
    .corporate {
      overflow: hidden;
      background-repeat: no-repeat;
      background-position: center;
      background-size: auto;
      background-color: rgba(75, 140, 213, 0.3);
      height: 1324px;

      .et-box {
        margin-top: 49px;
        position: relative;

        .et-img {
          width: 314px;
          height: 317px;
          position: absolute;
          right: 1200px;
          bottom: 0;
        }

        .team {
          flex-grow: 1;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          flex-flow: column;
          align-items: flex-end;
          justify-content: center;

          .team-cont {
            margin-right: 145px;

            h3 {
              font-size: 24px;
              color: #333333;
              margin-bottom: 40px;
            }

            p {
              font-size: 16px;
              line-height: 30px;
              color: #666666;
            }
          }
        }

        .icon {
          width: 115px;
          height: 99px;
          display: flex;
          justify-content: center;
          position: absolute;
          right: 13px;
          bottom: 12px;

          img {
            height: 100%;
            width: auto;
          }
        }

        .et-one {
          display: flex;
          justify-content: space-between;
          height: 360px;
          margin-bottom: 20px;


          .ys-box {
            width: 300px;
            height: 100%;
            position: relative;
            background-color: #ffffff;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            flex-flow: column;
            margin-right: 20px;

            h3 {
              font-size: 24px;
              color: #333333;
              margin-left: 56px;
              margin-bottom: 40px;
            }

            p {
              font-size: 16px;
              line-height: 30px;
              color: #666666;
              margin-left: 56px;
            }
          }
        }

        .et-two {
          height: 680px;
          display: flex;
          justify-content: flex-end;

          .two-left {
            flex-grow: 1;
            display: flex;
            flex-wrap: wrap;

            .left {
              width: 300px;
              height: 360px;
              flex-shrink: 0;
              margin-right: 20px;
              margin-top: 20px;

              &.yz-box {
                position: relative;
                background-color: #ffffff;
                display: flex;
                flex-flow: column;
                justify-content: center;

                h3 {
                  font-size: 24px;
                  color: #333333;
                  margin-left: 56px;
                  margin-bottom: 40px;
                }

                p {
                  font-size: 16px;
                  line-height: 30px;
                  color: #666666;
                  margin-left: 56px;
                }
              }
            }

            .right {
              flex-grow: 1;
              margin-top: 20px;
              height: 360px;

              &.team {
                align-items: center;

                .team-cont {
                  margin-right: 0;
                  text-align: center;
                }
              }
            }

            & > div:nth-child(-n+2) {
              margin-top: 0;
              height: 300px;
            }
          }

          .mb-box {
            flex-shrink: 0;
            width: 300px;
            margin-left: 20px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;

            .cont {
              margin-bottom: 93px;

              h3 {
                font-size: 24px;
                color: #333333;
                margin-bottom: 40px;
              }

              p {
                font-size: 16px;
                line-height: 30px;
                color: #666666;
              }
            }
          }
        }
      }
    }

    /*荣誉资质*/
    .honor {
      overflow: hidden;
      padding-bottom: 84px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: auto;
      background-color: rgba(75, 140, 213, 0.4);
      height: 1376px;

      .hq-box {
        margin-top: 70px;
        position: relative;

        .hq-img {
          position: absolute;
          width: 303px;
          height: 370px;
          left: 1200px;
          bottom: 0;
        }

        /*荣誉*/
        .hq-swiper {
          height: 280px;
          margin-bottom: 51px;

          .swiper-hq {
            height: 100%;
            margin: 0 65px;
            display: flex;
            justify-content: center;

            .swiper-hq-item {
              display: flex;
              flex-flow: column;

              p {
                width: 100%;
                font-size: 14px;
                color: #666666;
                margin-top: 7px;
              }

              &.on {
                width: 330px;
                z-index: 9;
                align-items: center;

                .honor-img {
                  width: 330px;
                  height: 237px;
                }

                p {
                  text-align: center;
                  width: 330px;
                }
              }

              &.prev1 {
                width: 191px;
                margin-top: 29px;
                z-index: 5;
                align-items: center;

                .honor-img {
                  width: 288px;
                  height: 186px;
                }

                p {
                  text-align: left;
                  width: 288px;
                }
              }

              &.prev2 {
                width: 179.5px;
                margin-top: 35px;

                .honor-img {
                  width: 249px;
                  height: 158px;
                }

                p {
                  width: 249px;
                  text-align: left;
                }
              }

              &.next1 {
                align-items: center;
                z-index: 5;
                margin-top: 29px;
                width: 191px;

                .honor-img {
                  width: 288px;
                  height: 186px;
                }

                p {
                  width: 288px;
                  text-align: right;
                }
              }

              &.next2 {
                align-items: flex-end;
                margin-top: 35px;
                width: 179.5px;

                .honor-img {
                  width: 249px;
                  height: 158px;
                }

                p {
                  width: 249px;
                  text-align: right;
                }
              }

              .honor-img {
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-position: center;
                background-size: 100% 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                  width: calc(100% - 36px);
                  height: calc(100% - 28px);
                }
              }
            }
          }
        }

        /*资质*/
        .zizhi {
          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            li {
              width: 25%;
              margin-top: 16px;

              .zizhi-img {
                margin: 0 auto;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                width: 201px;
                height: 339px;
                background-position: center;
                background-repeat: no-repeat;

                img {
                  width: calc(100% - 28px);
                  /*width: 173px;*/
                  /*height: 239px;*/
                  margin-bottom: 18px;
                }
              }

              p {
                font-size: 16px;
                color: #333333;
                text-align: center;
                margin-top: 25px;
              }
            }
          }
        }
      }
    }
  }
</style>
