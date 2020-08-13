<template>
  <div class="about page">
    <div class="banner" :style="'background-image: url('+banner+')'">
      <h3>关于我们</h3>
      <p>27年毛绒玩具生产经验 朝气蓬勃的员工队伍 精准实现客户需求</p>
    </div>
    <!--面包屑加tab-->
    <div class="crumb-tab">
      <div class="w-1200">
        <div class="crumb">
          <p>
            <router-link to="/"> 首页</router-link>
            >关于我们>{{page}}
          </p>
        </div>
        <div class="tab">
          <p :class="index === 1?'on':''" @click="tab(1)">公司介绍</p>
          <p :class="index === 2?'on':''" @click="tab(2)">发展历程</p>
          <p :class="index === 3?'on':''" @click="tab(3)">企业文化</p>
          <p :class="index === 4?'on':''" @click="tab(4)">荣誉资质</p>
          <p :class="index === 5?'on':''" @click="tab(5)">企业团队</p>
          <p :class="index === 6?'on':''" @click="tab(6)">社会责任</p>
        </div>
      </div>
    </div>

    <!--公司介绍 Company profile-->
    <div class="cp-box w-1200">
      <div class="cp-item cp-left">
        <h3>天津同缘兴科技股份有限公司</h3>
        <div class="subtitle">
          <span>专注于毛绒玩具设计生产27年的优质企业</span>
          <span>在时代长河中不断推陈出新  均计年出口量高达8000万只</span>
        </div>
        <div class="introduce">
          <p>
            天津同缘兴科技股份有限公司成立于1993年，注册资本1500万人民币。专注于毛绒玩具设计生产27年，不断推陈出新，年出口量高达8000万只。厂房占地10000㎡。年产值700万美金，拥有11名富有想象力、创造力的年轻设计师，具备丰富的工作经验和一流的设计开发能力。我司主要从事填充玩具的设计、开发、制作和销售。通过全球一体化网络布局，与多个国家建立了完善的物流体系。</p>
          <p>
            自2015年以来，连续三年获颁国际玩具工业理事会ICTI认证A级证书，具备出口国外大客户的资质。自有国家专利荣获《安全生产工作先进单位》、《自主创业标兵》等荣誉称号。于2018年应邀加入中国玩具协会成为5星级供应商。公司采用先进的激光切割技术进行裁剪，拥有电脑刺绣机15台。此外，工厂从裁剪到包装均有严格的质量检测体系，完全确保了产品质量的稳定性。我们将继续秉承“质量第一，用户至上”的发展宗旨，为海内外顾客提供更多优质的产品和服务。目前主要出口到美国、加拿大、墨西哥、澳大利亚、韩国、英国、德国、阿联酋、香港等国家和地区出售。

          </p>
        </div>
      </div>
      <div class="cp-item cp-right">
        <div class="cp-img"><img :src="cp_image"/></div>
      </div>
    </div>

    <!--发展历程 development history-->
    <div class="title w-1200" ref="scroll_two"><h3><span>发展历程</span></h3></div>
    <div class="dh-box w-1200">
      <ul>
        <li v-for="(v,i) in dh_data_left" :key="i" ref="dh_left">
          <!--<div class="item">-->
          <h3>{{v.year}}</h3>
          <p>{{v.event}}</p>
          <!--</div>-->
        </li>
      </ul>
      <ul>
        <li v-for="(v,i) in dh_data_right" :key="i" ref="dh_right">
          <!--<div class="item">-->
          <h3>{{v.year}}</h3>
          <p>{{v.event}}</p>
          <!--</div>-->
        </li>
      </ul>
    </div>

    <!--企业文化 corporate culture-->
    <div class="title w-1200" ref="scroll_three"><h3><span>企业文化</span></h3></div>
    <div class="cc-box w-1200">
      <div class="item">
        <div class="img-box"><img :src="cc_data.youshi_img"/></div>
        <p><span>{{cc_data.youshi_title}}</span><span>{{cc_data.youshi_cont}}</span></p>
      </div>
      <div class="item">
        <p><span>{{cc_data.yuanze_title}}</span><span>{{cc_data.yuanze_cont}}</span></p>
        <div class="img-box"><img :src="cc_data.yuanze_img"/></div>
      </div>
      <div class="item">
        <div class="img-box"><img :src="cc_data.mubiao_img"/></div>
        <p><span>{{cc_data.mubiao_title}}</span><span>{{cc_data.mubiao_cont}}</span></p></div>
    </div>

    <!--荣誉资质 Honor and qualification-->
    <div class="title w-1200" ref="scroll_four"><h3><span>荣誉资质</span></h3></div>
    <div class="hq-box w-1200">
      <p>宝剑锋从磨砺出，经过数十年的精心锤炼和打造，同缘兴取得了傲人的业绩，获得了种种殊荣。</p>
      <p>荣誉不仅是代表企业的名片，而且是企业实力的象征，更是激励和鼓舞全体员工不断进取的动力。</p>
      <div class="hq-img"><img :src="hq_img"/></div>
    </div>

    <!--企业团队 Enterprise team-->
    <div class="title w-1200" ref="scroll_five"><h3><span>企业团队</span></h3></div>
    <div class="et_box w-1200">
      <ul>
        <li><img :src="et_img1"/>
          <div class="mask"><h3>生产团队</h3>
            <p>一支朝气蓬勃、精益求精的员工队伍，和一套完善精干、追求卓越的管理体系。</p></div>
        </li>
        <li><img :src="et_img2"/>
          <div class="mask change"><h3>设计团队</h3>
            <p>一支经验丰富、专业专注、热情创新的团队。</p></div>
        </li>
      </ul>
    </div>

    <!--社会责任 social responsibility-->
    <div class="title w-1200" ref="scroll_six"><h3><span>社会责任</span></h3></div>
    <div class="sr-box w-1200">
      <img :src="sr_img"/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        banner: this.config.banner,// banner图
        cp_image: this.config.aliyun + 'static/image-cp.jpg',// 公司介绍在阿里云oss中的图片
        hq_img: this.config.aliyun + 'static/image-honor.jpg',// 荣誉资质在阿里云oss中的图片
        et_img1: this.config.aliyun + 'static/image-et1.jpg',// 企业团队在阿里云oss中的图片
        et_img2: this.config.aliyun + 'static/image-et2.jpg',// 企业团队在阿里云oss中的图片
        sr_img: this.config.aliyun + 'static/image-sr.jpg',// 社会责任在阿里云oss中的图片

        index: 0,//tab的选择项
        page: '',//面包屑左后一项的文字内容

        dh_data_left: [],//左侧发展历程
        dh_data_right: [],//右侧发展历程
        cc_data: this.config.cc_data,//企业文化数据
      }
    },
    beforeRouteUpdate(to) {
      this.index = parseInt(to.query.on);
      this.my_load(this.index);
      window.scrollTo(0, 0)
    },
    mounted() {
      // console.log(this.cc_data)
      this.index = parseInt(this.$route.query.on);
      this.my_load(this.index);
      this.handle_dh_data();
    },
    methods: {
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
              // console.log(this.$refs.scroll_three.offsetTop)
              this.page = '企业文化';
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
            case 5:
              this.page = '企业团队';
              window.scrollTo({
                top: this.$refs.scroll_five.offsetTop,
                behavior: "smooth"
              });
              break;
            case 6:
              this.page = '社会责任';
              window.scrollTo({
                top: this.$refs.scroll_six.offsetTop,
                behavior: "smooth"
              });
              break;
          }
        });
      },

      // 将发展历程根据数组长度分别放在左右两个数组中
      handle_dh_data() {
        let arr = this.config.history, left = [], right = [];
        for (let i = 0; i < arr.length; i++) {
          let num = arr.length % 2;
          if (num === 0) {
            if (i <= (arr.length / 2 - 1)) {
              left.push(arr[i]);
            } else {
              right.push(arr[i]);
            }
          } else {
            if (i <= (arr.length / 2)) {
              left.push(arr[i]);
            } else {
              right.push(arr[i]);
            }
          }
        }
        this.dh_data_left = left;
        this.dh_data_right = right;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .about {
    padding-bottom: 80px;
    /*title样式*/
    .title {
      display: flex;
      align-items: center;
      margin: 100px auto 40px;

      h3 {
        font-size: 32px;
        color: #333333;
        position: relative;
        font-weight: normal;

        span {
          z-index: 9;
          position: relative;
        }

        &:after {
          content: '';
          z-index: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background-color: #50a8ec;
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

    /*公司介绍*/
    .cp-box {
      margin: 60px auto 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .cp-item {
        width: calc(50% - 30px);
        flex-shrink: 0;

        &.cp-left {
          h3 {
            font-weight: normal;
            font-size: 32px;
            color: #333333;
          }

          .subtitle {
            margin: 40px 0 33px;

            span {
              display: block;
              font-size: 18px;
              color: #50a8ec;
            }
          }

          .introduce {
            p {
              font-size: 14px;
              color: #666666;
              text-indent: 2em;
              text-align: justify;
            }
          }
        }

        &.cp-right {
          .cp-img {
            width: 100%;
            height: 428px;

            img {
              height: 100%;
            }
          }
        }
      }
    }

    /*发展历程*/
    .dh-box {
      display: flex;
      justify-content: space-between;

      ul {
        width: calc(50% - 100px);
        display: flex;
        flex-flow: column;

        li {
          display: flex;
          flex-grow: 1;

          h3 {
            width: 110px;
            flex-shrink: 0;
            font-size: 14px;
            color: #666666;
            font-weight: normal;
            border-right: 3px solid #dcdcdc;
            position: relative;

            &:after {
              content: '';
              position: absolute;
              width: 10px;
              height: 10px;
              background-color: #dcdcdc;
              border-radius: 50%;
              overflow: hidden;
              right: -6px;
              top: 5px;
            }
          }

          p {
            padding-bottom: 50px;
            flex-grow: 1;
            margin-left: 60px;
            font-size: 14px;
            color: #333333;
            line-height: 20px;

          }

          &:last-child {
            p {
              padding-bottom: 0;
            }
          }
        }
      }
    }

    /*企业文化*/
    .cc-box {
      .item {
        display: flex;

        .img-box {
          width: 400px;
          height: 267px;
          flex-shrink: 0;
        }

        p {
          flex-grow: 1;
          display: flex;
          flex-flow: column;
          justify-content: center;
          padding-left: 150px;
          font-size: 14px;
          color: #666666;
          background-color: #fafafa;

          span:first-child {
            display: flex;
            margin-bottom: 20px;
            font-size: 18px;
            color: #333333;
          }
        }

        &:nth-child(2) {
          p {
            align-items: flex-end;
            padding-left: 0;
            padding-right: 150px;
            background-color: #ffffff;
          }
        }
      }
    }

    /*荣誉资质*/
    .hq-box {
      p {
        font-size: 14px;
        color: #666666;
        line-height: 24px;
      }

      .hq-img {
        margin-top: 46px;
      }
    }

    /*企业团队*/
    .et_box {
      ul {
        display: flex;

        li {
          width: 50%;
          height: 400px;
          overflow: hidden;
          position: relative;

          .mask {
            position: absolute;
            width: 100%;
            height: 80px;
            left: 0;
            bottom: 0;
            z-index: 9;
            font-size: 14px;
            transition: height 800ms;
            color: #ffffff;
            background-color: rgba(9, 73, 170, 0.8);
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;

            h3 {
              font-weight: normal;
              margin-bottom: 10px;
              font-size: 18px;
            }

            &.change {
              background-color: rgba(251, 101, 17, 0.8);
            }
          }

          &:hover {

            .mask {
              height: 100%;
            }
          }
        }
      }
    }

    /*社会责任*/
    .sr-box {
    }
  }
</style>
