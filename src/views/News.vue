<template>
  <div class="news page" :style="'background-image: url('+bg_img+')'">
    <div class="bg-mask">
      <div class="banner" :style="'background-image: url('+banner+')'">
        <h3>新闻资讯</h3>
        <p>公司最新 行业最热 抓住行业新动态 驱动企业快速发展</p>
      </div>
      <!--tab-->
      <div class="tab-box">
        <div class="tab">
          <p :class="type === 1?'on':''" @click="tab(1)">公司动态</p>
          <p :class="type === 2?'on':''" @click="tab(2)">行业动态</p>
        </div>
      </div>

      <!--新闻列表-->
      <div class="news w-1200">
        <ul>
          <li v-for="(item,index) in news_list" :key="index" @click="to_new_detail(item.id)">
            <div class="no-one" v-if="index>0">
              <div class="img-box" :style="'background-image: url('+item.pic+')'">
                <!--<img :src="item.pic"/>-->
              </div>
              <div class="new-cont">
                <h3 class="one-line-ellipsis">{{item.title}}</h3>
                <p class="two-line-ellipsis">{{item.desc}}</p>
                <!--<router-link :to="{path:'/newDetail',query:{id:item.id,nav:4,type:type}}">Read More+</router-link>-->
                <div class="btn-to-detail">Read More+</div>
              </div>
              <div class="new-date">
                <span>{{parseInt(item.create_time.substr(8,2))}}</span>
                <p>{{item.create_time.substr(0,7)}}</p>
              </div>
            </div>
            <div class="list-one" v-else>
              <div class="one-cont">
                <h3 class="one-line-ellipsis">{{item.title}}</h3>
                <p class="two-line-ellipsis">{{item.desc}}</p>
                <span>{{item.create_time}}</span>
                <!--<router-link :to="{path:'/newDetail',query:{id:item.id,nav:4,type:type}}">Read More+</router-link>-->
                <div class="btn-to-detail">Read More+</div>
              </div>
              <div class="img-box" :style="'background-image: url('+item.pic+')'">
                <!--<img :src="item.pic"/>-->
              </div>
            </div>
          </li>
        </ul>

        <div class="page-box" v-if="total>5">
          <!--<div class="page-box">-->
          <el-pagination
                  background
                  layout="prev, pager, next"
                  :page-size="5"
                  @current-change="current_change"
                  :total="total">
          </el-pagination>
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
        type: 1,
        page: 1,

        total: 0,

        // 新闻列表
        news_list: []
      };
    },
    // beforeRouteUpdate(to) {
    //   this.index = parseInt(to.query.on);
    //   // this.my_load(this.index);
    // },
    mounted() {
      this.type = parseInt(this.$route.query.on) || 1;
      console.log(this.type);
      this.getNewsList();
    },
    methods: {
      // 点击去详情页
      to_new_detail(id) {
        this.$router.push({
          path: '/newDetail',
          query: {
            id: id, nav: 4, on: this.type
          }
        })
      },
      // 切换公司动态或者行业动态
      tab(on) {
        this.type = on;
        this.$router.push({
          path: '/center',
          query: {
            nav: 4, on: on
          }
        });
      },
      // 分页点击
      current_change(current) {
        this.page = current;
        this.getNewsList();
      },
      getNewsList() {
        let post = {
          page: this.page,
          perpage: 5,
          type: this.type
        };
        this.utils.ajax(this, 'zh.index/newsList', post).then(res => {
          this.utils.aliyun_format(res.list, 'pic');
          for (let i = 0; i < res.list.length; i++) {
            res.list[i].create_time = this.utils.date_format(res.list[i].create_time, 'yyyy-MM-dd');
          }
          console.log(res);
          this.news_list = res.list;
          this.total = res.count;
        })
      }
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

    .news {
      padding-bottom: 80px;

      ul {
        li {
          background-color: #f5f5f5;
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
            background-color: #ffffff;
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
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;

              /*img {*/
              /*height: 100%;*/
              /*}*/
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

              a, .btn-to-detail {
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

              a, .btn-to-detail {
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
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;

              /*img {*/
              /*width: auto;*/
              /*height: auto;*/
              /*}*/
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
