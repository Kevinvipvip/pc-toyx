<template>
  <div class="product-detail page">
    <!--面包屑加tab-->
    <div class="crumb-tab">
      <div class="w-1200">
        <div class="crumb">
          <p>
            <router-link :to="{path:'/server',query:{nav:2,on:1}}"> 服务全球</router-link>
            >
            <router-link :to="{path:'server',query:{nav:2,on:internal}}">{{internal===1?'国内产品':'国外产品'}}</router-link>
            >{{detail.name}}
          </p>
        </div>
      </div>
    </div>

    <!--产品详情页的头部-->
    <div class="product">
      <div class="w-1200">
        <div class="return-back">
          <router-link :to="{path:'server',query:{nav:2,on:internal}}">返回列表</router-link>
        </div>
        <div class="product-box">
          <div class="detail-swiper">
            <!-- swiper1 -->
            <swiper :options="swiperOption" class="swiper product-swiper" ref="swiperTop">
              <swiper-slide class="swiper-item" v-for="(item,index) in detail.pics" :key="index">
                <div class="img-box" :style="'background-image: url('+item+')'"></div>
              </swiper-slide>
            </swiper>
            <!--swiper2 Thumbs-->
            <swiper :options="swiperOptionThumbs" class="swiper product-thumbs" ref="swiperThumbs">
              <swiper-slide class="swiper-item" v-for="(item,index) in detail.pics" :key="index">
                <div class="img-box" :style="'background-image: url('+item+')'"
                     :class="swiper_hove_on === index?'on':''"
                     @mouseenter="swiper_hover(index)"></div>
              </swiper-slide>
            </swiper>
          </div>

          <div class="parameter-cont">
            <h3 class="one-line-ellipsis">{{detail.name}}</h3>
            <p><span>货号：{{detail.number}}</span></p>
            <p><span>材质：{{detail.caizhi}}</span><span>毛绒分类：{{detail.cate_name}}</span></p>
            <p><span>大小：{{detail.size}}</span><span>颜色：{{detail.color}}</span></p>
            <div class="btn-1688-buy">
              <a href="https://tongyuanxingtoy.1688.com?spm=a2615.2177701.autotrace-shopSigns.2.134e1001sVuPec"
                 target="_blank">去商城购买</a></div>
            <div class="other-buy">
              <div class="other mp-buy">
                <el-tooltip placement="bottom">
                  <div slot="content" style="width: 100px;height: 100px;"><img src="../assets/mp-code.jpg"/></div>
                  <div class="icon">
                    <img src="../assets/icon-code.png"/>
                    <span>手机购买</span>
                  </div>
                </el-tooltip>
              </div>
              <div class="other tel"><span>{{tel}}</span><span>热线电话</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--产品详情页的产品详情-->
    <div class="detail">
      <div class="w-1200">
        <div class="detail-cont left">
          <h3>产品详情</h3>
          <div class="rich-box" v-html="detail.detail"></div>
        </div>
        <div class="detail-cont right">
          <!--留言中心-->
          <div class="message">
            <h3>留言中心</h3>
            <div class="form">
              <div class="ipt-tip" :style="btn_no_cilck?'color: #ff4c4c;':'color: #50a8ec;'">{{ipt_tip}}</div>
              <div class="input">
                <div class="ipt-box"><input type="text" v-model="name" placeholder="请输入联系人姓名"></div>
                <div class="ipt-box"><input type="text" v-model="phone" placeholder="请输入您的联系方式" maxlength="11"
                                            @blur="blur_reg_tel" oninput="value=value.replace(/[^\d]/g,'')"></div>
                <!--/([\u4E00-\u9FA5]|[A-Za-z])+/-->
              </div>
              <div class="input textarea"><textarea v-model="desc" placeholder="请输入您的需求留言"></textarea></div>
              <div class="btn-submit" @click="submit_message" v-if="btn_no_cilck">提交信息</div>
              <div class="btn-submit" style="opacity: 0.6;cursor: auto" v-else>提交信息</div>
            </div>
          </div>
          <!--其他推荐-->
          <div class="recommend">
            <h3>其他推荐</h3>
            <ul>
              <!--<router-link :to="{name:'productDetail',query:{nav:2,internal:internal,id:item.id}}" tag="li"-->
              <li v-for="item in recommend" :key="item.id" @click="to_center_back(item.id)">
                <div class="pic-box" :style="'background-image:url('+item.pic+')'"></div>
                <p class="one-line-ellipsis">{{item.name}}</p>
              </li>
            </ul>
          </div>
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
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        id: 0, //产品ID
        internal: 0, //1代表国内，2代表国外
        detail: { pics: [], name: '' },

        tel: 0,//热线电话

        // 留言中心
        name: '',
        phone: '',
        desc: '',
        ipt_tip: '',
        btn_no_cilck: true,

        recommend: [],//其他推荐

        swiper_hove_on: 0,//轮播图标记

        // 轮播图配置
        swiperOption: {
          loopedSlides: 5, // looped slides should be the same
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true
          },
          on: {
            slideChange() {
              _self.swiper_hove_on = this.activeIndex;
            }
          }
        },

        swiperOptionThumbs: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
          spaceBetween: 12,
          slidesPerView: 5,
          touchRatio: 0.2,
          slideToClickedSlide: true,
          // on: {
          //   tap() {
          //     const swiperTop = _self.$refs.swiperTop.swiper;
          //     swiperTop.slideTo(this.clickedIndex);
          //   }
          // }
        }
      };
    },
    mounted() {
      _self = this;
      this.id = parseInt(this.$route.query.id);
      this.internal = parseInt(this.$route.query.internal);
      this.utils.ajax(this, 'zh.index/aboutUs').then(res => {
        this.tel = res.tel;
      });
      this.getProductDetail(() => {
        // this.$nextTick(() => {
        // swiper1 = this.$refs.swiperTop;
        // swiper2 = this.$refs.swiperThumbs;
        // const swiperTop = this.$refs.swiperTop.swiper;
        // const swiperThumbs = this.$refs.swiperThumbs.swiper;
        // console.log(swiperTop);
        // console.log(swiperThumbs);
        // swiperTop.controller.control = swiperThumbs;
        // swiperThumbs.controller.control = swiperTop;
        // })
      });
      this.getGuessYouLikeList();
    },
    methods: {
      swiper_hover(index) {
        this.swiper_hove_on = index;
        this.$nextTick(() => {
          const top = _self.$refs.swiperTop.swiper;
          top.slideTo(index);
        });
      },

      // 点击推荐列表进详情页
      to_center_back(id) {
        let now_query = { nav: 2, internal: this.internal, id: id };
        this.$router.push({ name: 'center', query: now_query });
      },
      // 点击提交信息到后台
      submit_message() {
        if (!this.desc.trim()) {
          this.ipt_tip = '请输入内容后提交';
          // this.$message('请输入内容后提交');
        } else if (!this.name.trim()) {
          this.ipt_tip = '请输入你的姓名';
          // this.$message('请输入你的姓名');
        } else if (!this.phone.trim()) {
          this.ipt_tip = '请输入你的联系方式';
          // this.$message('请输入你的联系方式');
        } else if (!this.config.tel_reg.test(this.phone)) {
          this.ipt_tip = '请输入正确的手机号';
          // this.$message('请输入内容后提交');
        } else {
          let post = {
            name: this.name,
            tel: this.phone,
            message: this.desc
          };
          // console.log(post);
          this.utils.ajax(this, 'zh.index/leaveMessage', post).then(() => {
            this.$alert('您的留言信息已提交到后台，感谢您的留言。', '留言成功', {
              confirmButtonText: '确定',
              callback: () => {
                this.desc = '';
                this.name = '';
                this.phone = '';
                this.btn_no_cilck = false;
                this.ipt_tip = '您的留言信息已提交到后台，感谢您的留言。';
              }
            });
          })
        }
      },
      // 验证电话号码
      blur_reg_tel() {
        if (!this.phone.trim()) {
          this.ipt_tip = '';
        } else {
          if (!this.config.tel_reg.test(this.phone)) {
            this.ipt_tip = '请输入正确的手机号';
          } else {
            this.ipt_tip = '';
          }
        }
      },
      getProductDetail(complete) {
        this.utils.ajax(this, 'zh.index/productDetail', { id: this.id }).then(res => {
          this.utils.aliyun_format(res.pics);
          res.detail = res.detail.replace(/\/ueditor\/php\/upload\//g, this.config.url + 'ueditor/php/upload/');
          this.detail = res;
          if (complete) {
            complete();
          }
        })
      },
      getGuessYouLikeList() {
        this.utils.ajax(this, 'zh.index/guessYouLikeList').then(res => {
          this.utils.aliyun_format(res, 'pic');
          this.recommend = res;
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .product-detail {
    /*面包屑加tab样式*/
    .crumb-tab {
      background-color: #ffffff;
      border-top: 1px solid rgba(0, 0, 0, 0.03);

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

    }

    .product {
      background: rgb(242, 243, 245);
      overflow: hidden;

      .return-back {
        width: 94px;
        height: 40px;
        background-color: #ffffff;
        border-radius: 10px;
        border: solid 1px #50a8ec;
        margin-top: 30px;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          font-size: 16px;
          color: #50a8ec;
        }
      }

      .product-box {
        margin: 40px 0 100px 134px;
        display: flex;
        justify-content: space-between;
        /*轮播图样式*/
        .detail-swiper {
          flex-shrink: 0;
          width: 425px;

          .swiper {
            .swiper-item {
              .img-box {
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
              }
            }

            &.product-swiper {
              height: 425px;

            }

            &.product-thumbs {
              height: 76px;
              margin-top: 10px;

              .swiper-item {
                width: 20%;
                cursor: pointer;

                .img-box {
                  &.on {
                    border: 1px solid #50a8ec;
                    box-sizing: border-box;
                  }
                }
              }
            }
          }

        }

        /*参数布局样式*/
        .parameter-cont {
          width: 596px;

          h3 {
            font-size: 32px;
            color: #333333;
            font-weight: normal;
          }

          p {
            margin-top: 10px;
            padding: 24px 0;
            border-bottom: 2px solid #e3e4e6;
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            color: #666666;

            span {
              display: block;
              width: 50%;
            }
          }

          .btn-1688-buy {
            height: 60px;
            background-color: #50a8ec;
            margin-top: 80px;
            border-radius: 10px;

            a {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              width: 100%;
              font-size: 16px;
              color: #ffffff;
            }
          }

          .other-buy {
            display: flex;
            justify-content: center;
            height: 76px;
            margin-top: 10px;

            .other {
              width: 50%;
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;
              font-size: 16px;
              color: #666666;

              &.mp-buy {
                border-right: 2px solid #e3e4e6;

                .icon {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-flow: column;
                  cursor: pointer;

                  img {
                    width: 24px;
                    height: 24px;
                    margin-bottom: 8px;
                  }
                }
              }

              &.tel {
                span {
                  &:first-child {
                    margin-bottom: 8px;
                    color: #333333;
                    font-size: 18px;
                  }
                }
              }
            }


          }
        }
      }
    }

    /*详情*/
    .detail {
      .w-1200 {
        display: flex;
        justify-content: space-between;

        .detail-cont {
          h3 {
            font-size: 32px;
            color: #333333;
            font-weight: normal;
            padding: 34px 0;
            border-bottom: 2px solid #e3e4e6;
          }

          .rich-box {
            margin-top: 10px;

            /deep/ img {
              max-width: 100%;
            }
          }

          &.left {
            width: 640px;
            flex-shrink: 0;
          }

          &.right {
            width: 460px;
            flex-shrink: 0;
            /*留言中心*/
            .message {
              .form {
                position: relative;

                .ipt-tip {
                  position: absolute;
                  color: #ff4c4c;
                  font-size: 12px;
                  left: 0;
                  top: -25px;
                }

                .input {
                  margin: 30px 0 24px;
                  display: flex;
                  justify-content: space-between;

                  .ipt-box {
                    width: calc(50% - 16px);
                    height: 46px;
                    border-radius: 4px;
                    border: solid 1px #89ccff;
                    padding: 0 14px;
                    box-sizing: border-box;

                    input {
                      display: flex;
                      align-items: center;
                      height: 100%;
                      width: 100%;
                      border: none;
                      outline: none;
                      font-size: 14px;
                      color: #999999;
                      background: unset;

                      &::placeholder {
                        color: #999999;
                        opacity: 0.6;
                        font-size: 14px;
                      }
                    }
                  }

                  &.textarea {
                    margin: 0;
                    border: 1px solid #89ccff;
                    border-radius: 4px;
                    height: 140px;
                    padding: 16px 14px;

                    textarea {
                      display: block;
                      width: 100%;
                      height: 100%;
                      outline: none;
                      border: none;
                      background: unset;
                      font-size: 14px;
                      color: #999999;
                      resize: none;
                      overflow: hidden;
                      line-height: 20px;
                      text-align: justify;

                      &::placeholder {
                        color: #999999;
                        opacity: 0.6;
                        font-size: 14px;
                      }
                    }
                  }
                }

                .btn-submit {
                  cursor: pointer;
                  margin-top: 45px;
                  height: 60px;
                  background-color: #50a8ec;
                  border-radius: 10px;
                  font-size: 16px;
                  color: #ffffff;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
            }

            /*其他推荐*/
            .recommend {
              margin-top: 45px;

              ul {
                background-color: rgb(242, 243, 245);
                padding: 30px;

                li {
                  cursor: pointer;
                  width: 100%;
                  border-radius: 10px;
                  overflow: hidden;
                  background-color: #ffffff;
                  margin-top: 30px;

                  .pic-box {
                    width: 100%;
                    padding-bottom: 100%;
                    height: 0;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                  }

                  p {
                    margin: 50px 15px 27px;
                    text-align: center;
                    font-size: 14px;
                    color: #666666;
                  }

                  &:first-child {
                    margin-top: 0;
                  }

                }
              }
            }
          }
        }
      }
    }
  }

</style>
