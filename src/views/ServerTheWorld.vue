<template>
  <div class="server-world page">
    <div class="banner">
      <h3>服务全球</h3>
      <p>27年毛绒玩具生产经验 朝气蓬勃的员工队伍 精准实现客户需求</p>
    </div>

    <!--面包屑加tab-->
    <div class="crumb-tab">
      <div class="w-1200">
        <div class="crumb">
          <p>首页>服务全球>{{page}}</p>
        </div>
        <div class="tab">
          <p :class="index === 1?'on':''" @click="tab(1)">国内产品</p>
          <p :class="index === 2?'on':''" @click="tab(2)">国外产品</p>
        </div>
      </div>
    </div>

    <!--分类-->
    <div class="cate-box w-1200">
      <ul>
        <li :class="cate_on===-1?'on':''" @click="change_cate(-1)">全部产品</li>
        <li :class="cate_on===item.id?'on':''" v-for="item in cate_list" :key="item.id" @click="change_cate(item.id)">
          {{item.title}}
        </li>
      </ul>
    </div>

    <!--产品列表-->
    <div class="product-list w-1200">
      <ul>
        <li v-for="item in product_list" :key="item.id">
          <div class="pic-box" :style="'background-image:url('+item.pic+')'"></div>
          <p class="one-line-ellipsis">{{item.title}}</p>
        </li>

      </ul>

      <div class="page-box" v-if="product_list.length === 16">
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
        index: 0,
        page: '',

        cate_on: -1,//选择分类的活动项
        cate_list: [{ id: 1, title: '自主IP' }, { id: 2, title: '授权产品' }, { id: 3, title: '抓机系列' }],// 分类

        product_list: [{
          id: 1,
          title: '哈属性词UN比偶农村你把撒大声地',
          pic: 'http://static.wcip.net/images/img1.jpg'
        }, {
          id: 2,
          title: '哈属性词UN比偶农村你把',
          pic: 'http://static.wcip.net/images/img2.jpg'
        }],//产品列表数据
      };
    },
    beforeRouteUpdate(to) {
      this.index = parseInt(to.query.on);
      this.my_load(this.index);
    },
    mounted() {
      this.index = parseInt(this.$route.query.on);
      this.my_load(this.index);
    },
    methods: {
      tab(on) {
        this.index = on;
        this.my_load(on);
      },

      change_cate(cate_id) {
        this.cate_on = cate_id;
      },
      my_load(index) {
        switch (index) {
          case 1:
            this.page = '国内产品';
            break;
          case 2:
            this.page = '国外产品';
            break;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .server-world {
    background: #F2F3F5;
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

    /*分类样式*/
    .cate-box {
      margin: 24px auto 16px;

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

          &.on {
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
</style>
