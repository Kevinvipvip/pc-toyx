<template>
  <div class="header">
    <div class="header-box">
      <div class="logo">
        <router-link to="/"><img src="../assets/logo.png" alt="天津同缘兴科技股份有限公司"></router-link>
      </div>
      <div class="nav">
        <ul>
          <li v-for="item in nav_data" :key="item.id">
            <p :class="active === item.id?'active':''" v-if="item.s_nav">{{item.name}}</p>
            <p :class="active === item.id?'active':''" v-else @click="nav_click(item.id,item.url)">{{item.name}}</p>
            <i v-if="item.s_nav" class="icon-nav"></i>
            <ul class="second-nav" v-if="item.s_nav">
              <li v-for="(v,i) in item.s_nav" @click="nav_click(item.id,v.url,v.index)" :key="i">
                <p> {{v.name}}</p></li>
            </ul>
          </li>
        </ul>
        <div class="language" @click="click_flag = !click_flag">
          <p><span class="text-language">{{language}}</span><span><i :class="click_flag?'active':''"></i></span></p>
          <div class="lang-box" :class="click_flag?'active':''">
            <span @click="change_language('中文')">中文</span>
            <span @click="change_language('EN')">EN</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        language: '中文',
        active: -1,
        nav_data: this.config.nav,

        click_flag: false
      }
    },
    watch: {
      $route(to) {
        this.active = parseInt(to.query.nav) || 1;
      }
    },
    methods: {
      nav_click(id, url, index) {
        this.active = id;
        let query = {};
        if (url !== this.$route.path || index !== parseInt(this.$route.query.on)) {
          if (index) {
            query.nav = id;
            query.on = index;
          } else {
            query.nav = id;
          }
          this.$router.push({ path: url, query: query });
        } else {
          this.$router.push({ name: 'center', query: this.$route.query });
        }
      },
      change_language(language) {
        this.language = language;
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    height: 100px;
    position: relative;
    z-index: 999;

    .header-box {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        width: 396px;
        height: 46px;
        flex-shrink: 0;
      }

      .nav {
        flex-grow: 1;
        display: flex;

        .language {
          width: 86px;
          height: 31px;
          flex-shrink: 0;
          margin-left: 50px;
          cursor: pointer;
          position: relative;

          .lang-box {
            position: absolute;
            top: 31px;
            left: 0;
            display: none;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
            width: 100%;

            &.active {
              display: flex;
            }

            span {
              width: 100%;
              display: flex;
              padding: 0 15px;
              flex-flow: column;
              line-height: 40px;
              font-size: 16px;
              color: #50a8ec;
              box-sizing: border-box;

              &:hover {
                background-color: #89ccff;
                color: #ffffff;
              }
            }

          }

          p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 8px;
            overflow: hidden;

            span {
              flex-shrink: 0;
              display: flex;
              width: 31px;
              height: 31px;
              background-color: #ededed;
              justify-content: center;
              align-items: center;

              i {
                display: block;
                width: 12px;
                height: 7px;
                background-image: url("../assets/icons.png");
                background-repeat: no-repeat;
                background-position: -132px -62px;

                &.active {
                  background-position: -156px -62px;
                }
              }

              &.text-language {
                font-size: 16px;
                color: #333;
                background: #f7f7f7;
                flex-grow: 1;
              }
            }
          }
        }

        ul {
          flex-grow: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;

          li {
            position: relative;
            cursor: pointer;
            display: flex;
            align-items: center;
            padding: 0 25px;

            p {
              color: #666666;
              font-size: 16px;

              &.active, &:hover {
                color: #50a8ec;
              }
            }

            .icon-nav {
              display: block;
              width: 8px;
              height: 8px;
              margin-left: 5px;
              background: url("../assets/icons.png") 0 0 no-repeat;
              background-position: -92px -60px;
            }

            .second-nav {
              padding-top: 40px;
              position: absolute;
              top: 20px;
              left: 0;
              display: none;
              flex-flow: column;
              align-items: center;
              justify-content: center;

              li {
                background-color: #ebf6ff;

                p {
                  line-height: 40px;
                  font-size: 16px;
                  color: #50a8ec;
                }

                &:hover {
                  background-color: #89ccff;

                  p {
                    color: #ffffff;
                  }
                }
              }
            }

            &:hover {
              .second-nav {
                display: flex;
              }

              .icon-nav {
                background-position: -112px -60px;
              }
            }
          }
        }
      }
    }
  }
</style>
