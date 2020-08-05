<template>
  <div class="news page">
    <div class="banner">
      <h3>新闻资讯</h3>
      <p>公司最新 行业最热 抓住行业新动态 驱动企业快速发展</p>
    </div>
    <!--tab-->
    <div class="tab-box">
      <div class="tab">
        <p :class="index === 1?'on':''" @click="tab(1)">公司动态</p>
        <p :class="index === 2?'on':''" @click="tab(2)">行业动态</p>
      </div>
    </div>

    <!--新闻列表-->
    <div class="news w-1200">
      <ul>
        <li v-for="(item,index) in news_list" :key="index">
          <div class="no-one" v-if="index>0">
            <div class="img-box"><img :src="item.pic"/></div>
            <div class="new-cont">
              <h3 class="one-line-ellipsis">{{item.title}}</h3>
              <p class="two-line-ellipsis">{{item.content}}</p>
              <router-link :to="{path:'/newDetail',query:{id:item.id}}">Read More+</router-link>
            </div>
            <div class="new-date">
              <span>{{parseInt(item.date.substr(8,2))}}</span>
              <p>{{item.date.substr(0,7)}}</p>
            </div>
          </div>
          <div class="list-one" v-else>
            <div class="one-cont">
              <h3 class="one-line-ellipsis">{{item.title+item.title}}</h3>
              <p class="two-line-ellipsis">{{item.content}}</p>
              <span>{{item.date}}</span>
              <router-link :to="{path:'/newDetail',query:{id:item.id}}">Read More+</router-link>
            </div>
            <div class="img-box"><img :src="item.pic"/></div>
          </div>
        </li>
      </ul>

      <!--<div class="page-box" v-if="news_list.length>10">-->
      <div class="page-box">
        <el-pagination
                background
                layout="prev, pager, next"
                :total="100">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        index: 1,

        // 新闻列表
        news_list: [
          {
            pic: 'http://static.wcip.net/images/img1.jpg',
            title: '西安邮电大学与安康汉滨区深度合作，研发适合毛绒玩具全产业链实用技术',
            content: '7月17日至18日，西安邮电大学研究生院院长巩红、西部数字经济研究院副院长张安带领相关人员，来\n' +
              '安康市汉滨区调研毛绒玩具产业数、字化发展情况。汉滨区政协副主席、区互联网产业发展领导小组副\n' +
              '组长马安武一同调研。',
            date: '2020-10-20'
          }, {
            pic: 'http://static.wcip.net/images/img2.jpg',
            title: '西安邮电大学与安康汉滨区深度合作，研发适合毛绒玩具全产业链实用技术',
            content: '7月17日至18日，西安邮电大学研究生院院长巩红、西部数字经济研究院副院长张安带领相关人员，来\n' +
              '安康市汉滨区调研毛绒玩具产业数、字化发展情况。汉滨区政协副主席、区互联网产业发展领导小组副\n' +
              '组长马安武一同调研。',
            date: '2020-09-16'
          }, {
            pic: 'http://static.wcip.net/images/img3.jpg',
            title: '西安邮电大学与安康汉滨区深度合作，研发适合毛绒玩具全产业链实用技术',
            content: '7月17日至18日，西安邮电大学研究生院院长巩红、西部数字经济研究院副院长张安带领相关人员，来\n' +
              '安康市汉滨区调研毛绒玩具产业数、字化发展情况。汉滨区政协副主席、区互联网产业发展领导小组副\n' +
              '组长马安武一同调研。',
            date: '2020-07-05'
          }
        ]
      };
    },
    // beforeRouteUpdate(to) {
    //   this.index = parseInt(to.query.on);
    //   // this.my_load(this.index);
    // },
    // mounted() {
    //   this.index = parseInt(this.$route.query.on);
    //   // this.my_load(this.index);
    // },
    methods: {
      tab(on) {
        this.index = on;
        // this.my_load(on);
      },
    }
  };
</script>

<style lang="scss" scoped>
  .news {
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

    .news {
      padding-bottom: 80px;

      ul {
        li {
          background-color: #ffffff;
          border-radius: 1px;
          margin-top: 24px;
          border: solid 1px #f7f7f7;
          overflow: hidden;
          cursor: pointer;

          &:first-child {
            border: none;
            margin-bottom: 40px;
          }

          &:hover {
            box-shadow: 0 1px 46px 0 rgba(196, 205, 215, 0.75);
          }

          .no-one {
            height: 180px;
            display: flex;
            justify-content: space-between;
            padding: 30px 0 30px 40px;
            box-sizing: border-box;

            .img-box {
              flex-shrink: 0;
              width: 180px;
              height: 120px;
              background-color: #eeeeee;
              border-radius: 1px;

              img {
                height: 100%;
              }
            }

            .new-cont {
              width: calc(100% - 350px);
              /*flex-grow: 1;*/
              display: flex;
              flex-flow: column;
              justify-content: space-between;

              h3 {
                color: #666666;
                font-size: 18px;
                font-weight: normal;
              }

              p {
                font-size: 14px;
                color: #999999;
                line-height: 21px;
                text-align: justify;
                margin-bottom: 10px;
              }

              a {
                color: #50a8ec;
                font-size: 16px;
              }
            }

            .new-date {
              width: 90px;
              padding-right: 19px;
              border-left: 1px solid #f7f7f7;
              flex-shrink: 0;
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;

              span {
                font-size: 30px;
                color: #666666;
              }

              p {
                margin-top: 10px;
                font-size: 14px;
                color: #999;
              }
            }
          }

          .list-one {
            height: 307px;
            display: flex;
            justify-content: space-between;

            .one-cont {
              width: calc(100% - 500px);
              display: flex;
              flex-flow: column;
              justify-content: center;
              padding-left: 20px;
              box-sizing: border-box;

              h3 {
                font-size: 20px;
                color: #666666;
                font-weight: normal;
              }

              p {
                margin: 25px 0 33px;
                font-size: 16px;
                color: #999999;
                line-height: 24px;
                text-align: justify;
              }

              span {
                font-size: 14px;
                color: #999999;
              }

              a {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 161px;
                height: 56px;
                background-color: #50a8ec;
                border-radius: 10px;
                margin-top: 40px;
                font-size: 16px;
                color: #f7f7f7;
              }
            }

            .img-box {
              flex-shrink: 0;
              width: 460px;
              height: 100%;

              img {
                height: 100%;
              }
            }
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
</style>
