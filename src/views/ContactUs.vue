<template>
  <div class="contact page">
    <div class="banner">
      <h3>联系我们</h3>
      <p>让信息互通 人际更简单 合作更便捷 联系零距离</p>
    </div>
    <div :style="index ===0?'display:block':'display:none'">0000</div>
    <div :style="index ===1?'display:block':'display:none'">1111</div>
    <div :style="index ===2?'display:block':'display:none'">2222</div>
    <div :style="index ===3?'display:block':'display:none'">3333</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return { index: 0 }
    },
    beforeRouteUpdate(to) {
      // console.log(to);
      this.index = parseInt(to.query.index);
    },
    mounted() {
      this.index = parseInt(this.$route.query.index);
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
