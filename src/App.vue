<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer :style="$route.meta.isHome?'min-width: 1400px':''"/>
  </div>
</template>
<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }

  a {
    color: #333333;
    font-size: 14px;
    text-decoration: none;

  }

  ul, li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
  }

  .page {
    min-width: 1200px;
    min-height: calc(100vh - 60px - 425px);
    position: relative;
    z-index: 1;
  }

  body {
    overflow-y: scroll;
  }

  /*body::-webkit-scrollbar, #app::-webkit-scrollbar, .page::-webkit-scrollbar {*/
  /*display: none;*/
  /*}*/

  .w-1200 {
    width: 1200px;
    margin: 0 auto;
  }

  .w-1500 {
    width: 1500px;
    margin: 0 auto;
  }

  /* 超出省略 start */
  .one-line-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: nowrap;
  }

  .two-line-ellipsis {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  /* 超出省略 end */

  /*banner样式*/
  .banner {
    height: 120px;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #ffffff;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 30px;
      font-weight: normal;
      margin-bottom: 21px;
      color: #ffffff;
    }

    p {
      font-size: 14px;
      color: #ffffff;
      opacity: 0.6;
      letter-spacing: 1px;
    }
  }

  .nodata {
    font-size: 16px;
    color: #999;
    text-align: center;
  }
</style>
