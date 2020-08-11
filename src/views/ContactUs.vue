<template>
  <div class="contact page">
    <div class="banner" :style="'background-image: url('+banner+')'">
      <h3>联系我们</h3>
      <p>让信息互通 人际更简单 合作更便捷 联系零距离</p>
    </div>

    <!--tab-->
    <div class="tab-box">
      <div class="tab">
        <p :class="index === 1?'on':''" @click="tab(1)">联系方式</p>
        <p :class="index === 2?'on':''" @click="tab(2)">人才招聘</p>
      </div>
    </div>

    <div class="contact-one w-1200">
      <ul>
        <li>
          <div class="icon-box"><img src="../assets/icon-address.png"/></div>
          <p>地 址：天津市蓟州区礼明庄镇孟家楼村</p>
        </li>
        <li>
          <div class="icon-box"><img src="../assets/icon-tel.png"/></div>
          <p>联系电话：022-2989-7418</p>
        </li>
        <li>
          <div class="icon-box"><img src="../assets/icon-cz.png"/></div>
          <p>传 真：022-2989-8486</p>
        </li>
        <li>
          <div class="icon-box"><img src="../assets/icon-email.png"/></div>
          <p>邮 箱：luckytoytj@vip.sina.com</p>
        </li>
      </ul>
      <div class="focus-us">
        <div class="focus-left">
          <h3>关注我们</h3>
          <ul>
            <li>
              <div class="img"><img src="../assets/wx-code.jpg"/></div>
              <p>微信公众号</p>
            </li>
            <li>
              <div class="img"><img src="../assets/mp-code.jpg"/></div>
              <p>小程序商城</p>
            </li>
            <li>
              <div class="img"><img src="../assets/1688-code.png"/></div>
              <p><a href="https://tongyuanxingtoy.1688.com?spm=a2615.2177701.autotrace-shopSigns.2.134e1001sVuPec"
                    target="_blank">1688商城</a></p>
            </li>
          </ul>
        </div>
        <div class="focus-right">
          <h3>
            <span>留言中心</span>
            <p>留言后客服将在24小时与您联系</p>
          </h3>
          <div class="form">
            <div class="ipt-box"><input type="text" placeholder="请输入您的姓名"></div>
            <div class="ipt-box"><input type="text" placeholder="请输入您的联系方式" maxlength="11"
                                        oninput="value=value.replace(/[^\d]/g,'')"></div>
            <div class="ipt-box textarea"><textarea placeholder="请输入您的需求留言"></textarea></div>
            <div class="btn-submit">提交</div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-two w-1200">
      <h3>人才招聘</h3>
      <div class="recruit">
        <ul>
          <li>
            <div class="item-recruit">
              <p>职位名称</p>
              <p>招聘人数</p>
              <p>工作地点</p>
              <p>发布时间</p>
            </div>
          </li>
          <li @mouseenter="hover(1)" @mouseleave="hover(1)" :class="hover_on === 1?'on':''">
            <div class="item-recruit">
              <p>UI设计师</p>
              <p>8人</p>
              <p>天津市西青区</p>
              <p>2020-05-20</p>
            </div>
            <div class="recruit-detail">
              <div class="detail">
                <span>岗位需求：</span>
                <p>1、主动利用多渠道寻找区域内淘宝天猫电商企业，制定营销方案销售Ai软件产品；
                  2、分析客户需求与痛点，总结市场、行业特征及规律，为客户提供专业的电子商务营销方案；
                  3、希望你勤奋、激情，渴望不断突破自己，不在乎吃苦，抗的住压力；
                  4、计算机软件、市场营销、电子商务、信息管理等相关专业优先；
                  5、OPEN的企业文化，阿里创业团队，云锋基金、阿米巴资本投资，国内领先的AI人工智能公司，如果你有梦想，那这里是实现梦想的地方；
                  6、弹性工作制，需完成每周拜访量考核；</p>
              </div>
              <div class="btn-apply">申请岗位</div>
            </div>
          </li>
          <li @mouseenter="hover(2)" @mouseleave="hover(2)" :class="hover_on === 2?'on':''">
            <div class="item-recruit">
              <p>前端开发工程师</p>
              <p>28人</p>
              <p>天津市西青区</p>
              <p>2020-06-15</p>
            </div>
            <div class="recruit-detail">
              <div class="detail">
                <span>岗位需求：</span>
                <p>1、主动利用多渠道寻找区域内淘宝天猫电商企业，制定营销方案销售Ai软件产品；
                  2、分析客户需求与痛点，总结市场、行业特征及规律，为客户提供专业的电子商务营销方案；
                  3、希望你勤奋、激情，渴望不断突破自己，不在乎吃苦，抗的住压力；
                  4、计算机软件、市场营销、电子商务、信息管理等相关专业优先；
                  5、OPEN的企业文化，阿里创业团队，云锋基金、阿米巴资本投资，国内领先的AI人工智能公司，如果你有梦想，那这里是实现梦想的地方；
                  6、弹性工作制，需完成每周拜访量考核；</p>
              </div>
              <div class="btn-apply">申请岗位</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        banner: this.config.banner,//banner图
        index: 1,

        hover_on: 1,//人才招聘hover效果
      }
    },
    // beforeRouteUpdate(to) {
    //   // console.log(to);
    //   this.index = parseInt(to.query.index);
    // },
    mounted() {
      // this.index = parseInt(this.$route.query.index);
    },
    methods: {
      tab(on) {
        this.index = on;
        // this.my_load(on);
      },
      hover(on) {
        this.hover_on = on;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .contact {
    padding-bottom: 80px;

    .tab-box {
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.03);

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

          &.on:after {
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

    .contact-one {
      margin-top: 90px;

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
          width: 261px;
          height: 120px;
          border: 3px solid #eeeeee;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          .icon-box {
            position: absolute;
            top: -30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
          }

          p {
            font-size: 14px;
            color: #666666;
          }
        }
      }

      .focus-us {
        margin-top: 64px;
        height: 516px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .focus-left {
          width: 800px;
          background: url("../assets/contact-us-bg.png") no-repeat;
          position: relative;

          h3 {
            position: absolute;
            top: 0;
            left: 0;
            padding: 30px 26px;
            font-weight: normal;
            font-size: 32px;
            color: #333333;
            line-height: 28px;
          }

          ul {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;

            li {
              flex-flow: column;
              height: auto;
              width: auto;
              border: none;

              .img {
                width: 183px;
                height: 183px;
                background-color: #ffffff;
                border-radius: 10px;
                overflow: hidden;
                padding: 10px;
                box-sizing: border-box;
              }

              p, a {
                font-size: 14px;
                color: #666666;
                margin-top: 18px;
              }
            }
          }
        }

        .focus-right {
          flex-grow: 1;
          background: #50a8ec;
          height: 100%;

          h3 {
            font-weight: normal;
            color: #ffffff;
            font-size: 18px;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            height: 113px;
            border-bottom: 3px dashed #ffffff;

            p {
              margin-top: 16px;
              font-size: 14px;
              opacity: 0.6;
            }
          }

          .form {
            margin: 24px 22px;

            .ipt-box {
              height: 40px;
              background-color: #6ab3ec;
              border-radius: 10px;
              overflow: hidden;
              margin-bottom: 20px;
              padding: 0 21px;
              box-sizing: border-box;

              input {
                display: flex;
                align-items: center;
                height: 100%;
                width: 100%;
                border: none;
                outline: none;
                font-size: 12px;
                color: #ffffff;
                background: unset;

                &::placeholder {
                  color: #eeeeee;
                  font-size: 12px;
                }
              }

              &.textarea {
                height: 153px;
                padding: 15px 21px;

                textarea {
                  display: block;
                  width: 100%;
                  height: 100%;
                  outline: none;
                  border: none;
                  background: unset;
                  font-size: 12px;
                  color: #ffffff;
                  resize: none;
                  overflow: hidden;
                  line-height: 20px;
                  text-align: justify;

                  &::placeholder {
                    color: #eeeeee;
                    font-size: 12px;
                  }
                }
              }
            }

            .btn-submit {
              font-size: 14px;
              color: #50a8ec;
              width: 143px;
              height: 40px;
              background-color: #ffffff;
              border-radius: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 36px auto 0;
              cursor: pointer;
            }
          }
        }
      }
    }

    .contact-two {
      margin-top: 80px;

      h3 {
        text-align: center;
        font-size: 32px;
        color: #333333;
        font-weight: normal;
      }

      .recruit {
        width: 100%;
        background-color: #ffffff;
        margin-top: 30px;
        border: solid 1px #eeeeee;

        ul {
          padding-bottom: 50px;

          li {
            position: relative;
            overflow: hidden;
            /*transform-origin: center top;*/
            height: 60px;
            /*transform: scaleY(0);*/
            /*transition: 0.5s;*/

            &:first-child {
              .item-recruit {
                background: #fafafa;
                height: 40px;

                p {
                  font-weight: bold;
                  color: #50a8ec;
                }

                &:after {
                  display: none;
                }
              }
            }

            .item-recruit {
              cursor: pointer;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 60px;
              position: relative;
              color: #333333;

              p {
                width: 25%;
                text-align: center;
                font-size: 15px;
              }

              &:after {
                content: '';
                position: absolute;
                top: 59px;
                left: 50px;
                height: 0;
                border-bottom: 1px dashed #cccccc;
                width: calc(100% - 100px);
              }
            }

            .recruit-detail {
              padding: 30px 50px;
              width: 100%;
              transform-origin: center top;
              transform: scaleY(0);
              transition: 200ms;
              box-sizing: border-box;

              .detail {
                /*margin-top: 30px;*/
                display: flex;
                justify-content: space-between;

                span {
                  flex-shrink: 0;
                  color: #50a8ec;
                  font-size: 18px;
                }

                p {
                  flex-grow: 1;
                  white-space: pre-line;
                  font-size: 14px;
                  color: #666666;
                }
              }

              .btn-apply {
                cursor: pointer;
                width: 200px;
                height: 60px;
                background-color: #50a8ec;
                border-radius: 10px;
                color: #ffffff;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 50px auto 0;
              }
            }

            &.on {
              height: auto;

              .recruit-detail {
                transform: scaleY(1);
              }
            }
          }
        }
      }
    }
  }
</style>
