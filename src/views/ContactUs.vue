<template>
  <div class="contact page">
    <div class="banner">
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

    <div :style="index ===0?'display:block':'display:none'">0000</div>
    <div :style="index ===1?'display:block':'display:none'">1111</div>
    <div :style="index ===2?'display:block':'display:none'">2222</div>
    <div :style="index ===3?'display:block':'display:none'">3333</div>
  </div>
</template>

<script>
  export default {
    data() {
      return { index: 1 }
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
    }
  };
</script>

<style lang="scss" scoped>
  .contact {
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
  }
</style>
