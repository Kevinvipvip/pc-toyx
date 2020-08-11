<template>
  <div class="news-detail page">

    <div class="news-detail-content">
      <div class="web-nav">
        <p>
          <router-link to="/" tag="span">首页</router-link>
          /
          <router-link to="/news" tag="span">新闻资讯</router-link>
          / <span class="change-color">{{detail.type === 1?'公司动态':'行业动态'}}</span>
        </p>
      </div>

      <div class="news-cont">
        <div class="detail-cont">
          <div class="detail-title">
            <h3>{{detail.title}}</h3>
            <p><span>同缘兴</span>&nbsp;&nbsp;&nbsp;{{detail.create_time}}</p>
          </div>
          <div class="rich-text" v-html="detail.content"></div>

          <div class="btn-box" v-if="new_list.length>0">

            <p v-if="prev_i === new_list.length-1" @click="prev_pages(new_list[prev_i].id)">
              上一篇：没有上一篇了</p>
            <p v-else @click="prev_pages(new_list[prev_i].id)">上一篇：{{new_list[prev_i].title}}</p>

            <p v-if="next_i===0" @click="next_pages(new_list[next_i].id)">下一篇：没有下一篇了</p>
            <p v-else @click="next_pages(new_list[next_i].id)">下一篇：{{new_list[next_i].title}}</p>
          </div>
          <div class="extended-reading" v-if="read_arr.length>0">
            <div class="title">
              <p>延展阅读</p>
              <span>YAN ZHAN YUE DU</span>
            </div>
            <div class="reading-list">
              <p v-for="(v,index) in read_arr" @click="look_detail(v.id)" :key="index">
                <span>{{v.title}}</span>
                <span>{{v.create_time}}</span>
              </p>
            </div>
          </div>
          <!--<div class="share">-->
          <!--<p><span>可分享到</span><span>FEN XIANG DAO</span></p>-->
          <!--<p @click="share_wb" class="img"><img :src="weibo"/></p>-->
          <!--<p class="img share-wx">-->
          <!--<img :src="weCate"/>-->
          <!--<span><img :src="'https://tieta.h5.wcip.net/api/api/qrcode?nav=37&type=1&id='+id"/></span>-->
          <!--</p>-->
          <!--</div>-->
        </div>
        <div class="news-list">
          <ul>
            <li class="news-list-title">
              <p>{{detail.type===1?'公司动态':'行业动态'}}</p>
              <span>{{detail.type===1?'COMPANY NEWS':'INDUSTRY TRENDS'}}</span>
            </li>
            <li
                    v-for="(v,index) in new_list"
                    :key="index"
                    :class="id === v.id?'on':''"
                    ref="clickItem"
                    @click="look_detail(v.id)">
              {{v.title}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import weCate from '../assets/wx-icon.png'
  // import weibo from '../assets/wb-icon.png'

  export default {
    name: "NewsDetail",
    data() {
      return {
        return_text: '',
        return_url: '',

        banner: '',
        id: 0,
        detail: {
          type:1,
          create_time:'2020-02-05',
          title:'大暑，就来千年铁塔赏荷纳凉',
          content:'<p>　　大暑，六月中。暑，热也，就热之中分为大小，月初为小，月中为大，今则热气犹大也。斗指丙为大暑，斯时天气甚烈于小暑，故名曰大暑。</p><p><br/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595468669355845.jpg" alt="20200723_093236_010.jpg"/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595468679585851.jpg" alt="20200723_093236_011.jpg"/></p><p>　　</p><p>　　大暑节气的由来</p><p>　　</p><p>　　大暑是24节气中的第12个节气，也是干支历未月的下半月；到达时间在公历每年的7月22日至24日之间，太阳到达黄经120°时，一般为我国气候最热的时候。最早记载大暑的是《逸周书·周月解》。该书中明确指出，“夏三月中气，小满、夏至、大暑”。汉代刘安编撰的《淮南子》有二十四节气的完整记载，大暑就在其中。”</p><p><br/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595468707737745.jpg" alt="20200723_093236_012.jpg"/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595468715437667.jpg" alt="20200723_093236_013.jpg"/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595468724723301.jpg" alt="20200723_093236_014.jpg"/></p><p>　　</p><p>　　大暑季节闷热潮湿</p><p>　　</p><p>　　《山海经·大荒西经》：“ 寿麻 正立无景，疾呼无响。爰有大暑，不可以往。” 郭璞 注：“言热炙杀人也。” 宋 文莹 《玉壶清话》卷六：“时暑中，公执一叶素扇，偶写‘大暑去酷吏，清风来故人。’”大暑节气正值“三伏天”里的“中伏”前后，是一年中最热的时期，气温最高，同时，很多地区的旱、涝、风灾等各种气象灾害也最为频繁。天气开始变得闷热，土地也很潮湿；第三候是说时常有大的雷雨会出现，这大雨使暑湿减弱，天气开始向立秋过渡。</p><p><br/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595468750955757.jpg" alt="20200723_093236_015.jpg"/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595468759949336.jpg" alt="20200723_093236_016.jpg"/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595468769133760.jpg" alt="20200723_093236_017.jpg"/></p><p>　　</p><p>　　大暑三伏天，日常防护要注意</p><p>　　</p><p>　　“小暑不算热，大暑三伏天”。值此时节，大家要注意防暑降温。三伏天天气闷热，空气湿度大。目前处于疫情常态化阶段，大家日常居家开空调是必要的，但如果长期处于空调环境里，身体调节能力会失调，久而久之会导致免疫功能下降，甚至出现“空调病”。</p><p><br/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595468968704875.jpg" alt="20200723_093236_018.jpg"/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595468976397844.jpg" alt="20200723_093236_019.jpg"/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595468986558836.jpg" alt="20200723_093236_020.jpg"/></p><p><br/></p><p>　　三伏天人体脾胃最容易受伤，尤其是体弱人群，容易出现消化不良、食欲不振、大便不利等问题。湿气过盛，就可使人致病，容易出现发热、感冒、咳嗽等疾病。为了减少因湿热造成的感冒，伏天饮食上要以清淡为主，建议大家日常可以多食用一些药食同源的食材，如绿豆、薏米、赤豆、山药、白扁豆、冬瓜等食材，同时食用应季蔬菜水果为宜。</p><p>　　</p><p>　　三伏天虽然天气热，但也不要躲在空调屋内。可早晚适量进行活动筋骨、调畅气血、养护阳气、增强体质的运动，如散步、慢跑、打太极拳、游泳等。避免大汗淋漓过度消耗，以免阳气损伤，免疫力下降。</p><p><br/></p><p style="text-align: center;"><img src="http://static.wcip.net/images/img2.jpg" title="1595469235641480.jpg" alt="20200723_093236_021.jpg"/></p><p>　　</p><p>　　本期福利，</p><p>　　</p><p>　　即日起至暑期结束，</p><p>　　</p><p>　　本市中小学生登塔半价，</p><p>　　</p><p>　　家长监护陪同享受半价优惠政策</p><p>　　</p><p>　　（入园时出示准考证和学生证哦）。</p>'
        },
        new_list: [],
        prev_i: 0,
        next_i: 2,

        // 延展阅读
        read_arr: [],

        // // 分享图标
        // weibo: weibo,
        // weCate: weCate
      }
    },
    // 跳转本页是参数变化后重新调取商品详情数据
    beforeRouteUpdate(to, from, next) {
      this.getData(to.query.id);
      next()
    },
    created() {
      this.return_text = this.$route.query.name;
      this.return_url = this.$route.query.url;
      this.id = parseInt(this.$route.query.id);
      // this.utils.getBanner(this, 4, (res) => {
      //   // console.log(res, res.title);
      //   this.banner = res.pic
      // }, () => {
      //   this.getData(this.id);
      // });
    },
    methods: {
      // 上一篇新闻
      prev_pages(id) {
        this.id = id;
        if (this.prev_i !== this.new_list.length - 1) {
          this.$router.replace({
            name: 'newdetail',
            query: {
              // nav: 4,
              id: id,
              url: this.return_url,
              name: this.return_text
            }
          });
        } else {
          this.$alert('没有上一篇了')
        }
      },
      // 下一篇新闻
      next_pages(id) {
        this.id = id;
        if (this.next_i !== 0) {
          this.$router.replace({
            name: 'newdetail',
            query: {
              // nav: 4,
              id: id,
              url: this.return_url,
              name: this.return_text
            }
          });
        } else {
          this.$alert('没有下一篇了')
        }
      },

      // 点击分享到微博
      // share_wb() {
      //   // console.log('进来了');
      //   var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + this.detail.title + '&url=' + window.location.href + '&content=utf-8&sourceUrl=' + this.detail.desc + '&pic=' + this.detail.pic;
      //   window.open(sharesinastring);
      // },

      look_detail(id) {
        this.id = id;
        this.$router.replace({
          name: 'newdetail',
          query: {
            // nav: 4,
            id: id,
            url: this.return_url,
            name: this.return_text
          }
        })
      },

      // // 获取延展阅读数据
      // getNewsExtendList() {
      //   this.utils.ajax(this, 'api/getNewsExtendList', { id: this.id }).then((res) => {
      //     // console.log(res);
      //     this.read_arr = res.list;
      //   });
      // },

      // 获取新闻或者公告最新15条数据列表；perpage可以改变请求多少条数据
      // getNewsList(url) {
      //   this.utils.ajax(this, url, { page: 1, perpage: 15 }).then((res) => {
      //     console.log(res);
      //     this.utils.fixed_img_path(res.list, 'pic', 2);
      //     this.new_list = res.list;
      //   }).then(() => {
      //     let obj = this.$refs.clickItem;
      //     // console.log(obj);
      //     for (let i = 0; i < obj.length; i++) {
      //       if (obj[i].className === 'on') {
      //         if ((i + 1) === obj.length) {
      //           this.prev_i = i - 1;
      //           this.next_i = 0;
      //         } else if (i === 0) {
      //           this.prev_i = obj.length - 1;
      //           this.next_i = i + 1;
      //         } else {
      //           this.prev_i = i - 1;
      //           this.next_i = i + 1;
      //         }
      //       }
      //     }
      //     console.log(this.prev_i, 'prev_i');
      //     console.log(this.next_i, 'next_i');
      //     // if (complete) {
      //     //   complete();
      //     // }
      //   })
      // },
      // getData(id) {
      //   this.utils.ajax(this, 'api/getDetail', { id: id }).then((res) => {
      //     // console.log(res);
      //     this.utils.fixed_img_path(res, 'pic');
      //     res.content = res.content.replace(/\/ueditor\/php\/upload\//g, this.config.url + '/ueditor/php/upload/');
      //     this.detail = res;
      //   }).then(() => {
      //     this.getNewsExtendList();
      //     switch (this.detail.type) {
      //       case 1:
      //         this.getNewsList('api/getNewsList');
      //         break;
      //       case 2:
      //         this.getNewsList('api/getNoticeList');
      //         break;
      //       case 3:
      //         this.getNewsList('api/getSpiritList');
      //         break;
      //     }
      //   });
      // }
    }
  }
</script>

<style scoped lang="scss">
  .news-detail {
    background-color: rgba(75, 140, 213, 0.1);

    .banner {
      width: 100%;
      height: 629px;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    .news-detail-content {
      width: 1200px;
      overflow: hidden;
      margin: 0 auto;

      .web-nav {
        margin-top: 67px;

        p {
          font-size: 20px;
          line-height: 24px;
          color: #000000;

          span {
            cursor: pointer;

            &.change-color {
              color: #000000;
              opacity: 0.5;
              cursor: auto;
            }
          }

        }
      }

      .news-cont {
        margin-bottom: 70px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;

        .detail-cont {
          margin-top: 60px;
          flex-grow: 1;
          overflow: hidden;

          .detail-title {
            width: 70%;
            margin: 0 auto 40px;

            h3 {
              font-size: 24px;
              font-weight: normal;
              color: #000000;
              opacity: 0.7;
            }

            p {
              margin-top: 10px;
              font-size: 14px;
              color: #000000;
              opacity: 0.5;

              span {
                font-size: 16px;
              }
            }
          }

          .rich-text {
            width: 70%;
            margin: 0 auto;
            line-height: 27px;
            font-size: 18px;
            text-align: justify;

            /deep/ img {
              max-width: 100%;
            }
          }

          .btn-box {
            width: 70%;
            margin: 15px auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 45px;

            p {
              font-weight: bold;
              color: #999;
              text-align: right;
              cursor: pointer;
              font-size: 16px;
              width: 40%;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }

            p:first-child {
              text-align: left;
            }

            p:hover {
              color: #ff4c4c;
            }
          }

          .extended-reading {
            margin: 44px auto 53px;
            width: 70%;

            .title {
              p {
                font-size: 18px;
                color: #000000;
                opacity: 0.9;
              }

              span {
                font-size: 12px;
                color: #000000;
                opacity: 0.4;
              }
            }

            .reading-list {

              p {
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 17px 0;

                span {
                  font-size: 14px;
                  color: #999;
                }

                span:first-child {
                  display: block;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  width: 40%;
                }
              }
            }
          }

          .share {
            width: 70%;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            p {
              font-size: 12px;
              color: #000000;
              opacity: 0.4;
              display: flex;
              justify-content: center;
              flex-flow: column;
              margin-right: 30px;

              span:first-child {
                font-size: 18px;
                color: #000000;
                opacity: 0.9;
              }
            }

            .img {
              cursor: pointer;
              width: 41px;
              height: 41px;
              opacity: 1;
              margin-right: 20px;

              img {
                width: 100%;
                height: 100%;
                display: block;
              }
            }

            .share-wx {
              position: relative;

              span {
                display: none;
                position: absolute;
                bottom: 41px;
                left: 0;
                transition: 2s;
                width: 200px;
                height: 200px;
              }
            }

            .share-wx:hover span {
              display: block;
            }
          }
        }

        .news-list {
          width: 356px;
          flex-shrink: 0;

          ul {
            .news-list-title {
              height: 90px;
              background-color: #546c81;
              padding-top: 20px;
              padding-left: 17px;
              line-height: unset;

              p {
                font-size: 20px;
                color: #fffefe;
                opacity: 0.8;
              }

              span {
                font-size: 18px;
                display: block;
                color: #fffefe;
                opacity: 0.4;
              }
            }

            li {
              height: 60px;
              padding: 0 30px;
              line-height: 60px;
              border: solid 1px rgba(0, 0, 0, 0.1);
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              cursor: pointer;
            }

            li:hover, .on {
              color: #af311a;
            }
          }
        }
      }
    }
  }
</style>
