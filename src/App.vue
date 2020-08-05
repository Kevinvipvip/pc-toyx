<template>
  <div id="app">
    <!--<div id="nav">-->
    <!--<router-link to="/">Home</router-link>-->
    <!--|-->
    <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <Header/>
    <router-view/>
    <Footer/>
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
    min-height: calc(100vh - 100px - 425px);
    position: relative;
    z-index: 1;
  }

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
    height: 225px;
    background: url("assets/banner.png") bottom no-repeat;
    background-size: 100%;
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
      color: #c5c5c5;
      letter-spacing: 1px;
    }
  }
</style>
