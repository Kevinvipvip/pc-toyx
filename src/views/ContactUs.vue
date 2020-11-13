<template>
  <div class="contact page" :style="'background-image: url('+bg_img+')'">
    <div class="bg-mask">
      <div class="banner" :style="'background-image: url('+banner+')'">
        <h3>联系我们</h3>
        <p>让信息互通 人际更简单 合作更便捷 联系零距离</p>
      </div>

      <!--tab-->
      <div class="tab-box">
        <div class="tab">
          <p :class="active === 1?'on':''" @click="tab(1)">联系方式</p>
          <p :class="active === 2?'on':''" @click="tab(2)">关注我们</p>
          <p :class="active === 3?'on':''" @click="tab(3)">人才招聘</p>
        </div>
      </div>

      <!--联系方式-->
      <div class="title w-1200" ref="scroll_one">
        <div class="enlish-title">CONTACT</div>
        <p><span>联系方式</span></p>
      </div>
      <div class="contact-one w-1200">
        <ul>
          <li>
            <div class="icon-box"><img src="../assets/icon-address.png"/></div>
            <p>地 址：{{us.address}}</p>
          </li>
          <li>
            <div class="icon-box"><img src="../assets/icon-tel.png"/></div>
            <p>联系电话：{{us.tel}}</p>
          </li>
          <li>
            <div class="icon-box"><img src="../assets/icon-cz.png"/></div>
            <p>传 真：{{us.fax}}</p>
          </li>
          <li>
            <div class="icon-box"><img src="../assets/icon-email.png"/></div>
            <p>邮 箱：{{us.email}}</p>
          </li>
        </ul>

        <!--百度地图-->
        <div class="map">
          <baidu-map class="baidu-map" :zoom="15" :scroll-wheel-zoom="true" :center="location"
                     @ready="map_init"></baidu-map>
        </div>
      </div>


      <!--关注我们-->
      <div class="title w-1200" ref="scroll_two">
        <div class="enlish-title"> FOLLOW</div>
        <p><span>关注我们</span></p>
      </div>
      <div class="contact-two w-1200">
        <div class="focus-us">
          <div class="focus-left">
            <ul>
              <li>
                <div class="img"><img src="../assets/wx-code.jpg"/></div>
                <p>微信公众号</p>
              </li>
              <li>
                <div class="img"><img src="../assets/mp-code.jpg"/></div>
                <p>小程序商城</p>
              </li>
              <li>
                <div class="img"><img src="../assets/1688-code.png"/></div>
                <p><a href="https://tongyuanxingtoy.1688.com?spm=a2615.2177701.autotrace-shopSigns.2.134e1001sVuPec"
                      target="_blank">1688商城</a></p>
              </li>
            </ul>
            <!--业务员-->
            <div class="salesman">
              <div class="salesman-item" v-for="item in us.salesman" :key="item.id">
                <div class="item-cont">
                  <h3>{{item.name}}</h3>
                  <p>手机：{{item.tel}}</p>
                  <p>QQ：{{item.qq}}</p>
                    <p class="one-line-ellipsis" :title="item.email">邮箱：{{item.email}}</p>
                  <!--<el-tooltip effect="dark" :content="item.email" placement="bottom">-->
                  <!--</el-tooltip>-->
                </div>
              </div>
              <!--<div class="salesman-item">-->
              <!--<div class="item-cont">-->
              <!--<h3>业务员二</h3>-->
              <!--<p>-->
              <!--<span>手机：18834406582</span><span>QQ：5858546263</span><span>邮箱：123@193.com</span>-->
              <!--</p>-->
              <!--</div>-->
              <!--</div>-->
              <!--<div class="salesman-item">-->
              <!--<div class="item-cont">-->
              <!--<h3>业务员三</h3>-->
              <!--<p>-->
              <!--<span>手机：18834406582</span><span>QQ：5858546263</span><span>邮箱：123@193.com</span>-->
              <!--</p>-->
              <!--</div>-->
              <!--</div>-->
            </div>
          </div>
          <div class="focus-right">
            <h3>
              <span>留言中心</span>
              <p>留言后客服将在24小时与您联系</p>
            </h3>
            <div class="form">
              <div class="ipt-tip" :style="btn_no_cilck?'color: #333;':'color: #ffffff;'">{{ipt_tip}}</div>
              <div class="ipt-box"><input type="text" v-model="name" placeholder="请输入您的姓名"></div>
              <div class="ipt-box"><input type="text" v-model="phone" placeholder="请输入您的联系方式" maxlength="11"
                                          @blur="blur_reg_tel" oninput="value=value.replace(/[^\d]/g,'')"></div>
              <div class="ipt-box textarea"><textarea v-model="desc" placeholder="请输入您的需求留言"></textarea></div>
              <div class="btn-submit" @click="submit_message" v-if="btn_no_cilck">提交</div>
              <div class="btn-submit" style="opacity: 0.6;cursor: auto" v-else>提交</div>
            </div>
          </div>
        </div>
      </div>


      <!--人才招聘-->
      <div class="title w-1200" ref="scroll_three">
        <div class="enlish-title">JOBS</div>
        <p><span>人才招聘</span></p>
      </div>
      <div class="contact-three w-1200">
        <div class="recruit">
          <ul>
            <li>
              <div class="item-recruit">
                <p>职位名称</p>
                <p>招聘人数</p>
                <p>工作地点</p>
                <p>发布时间</p>
              </div>
            </li>
            <li @mouseenter="hover(item.id)" @mouseleave="hover(item.id)" :class="hover_on === item.id?'on':''"
                v-for="(item,index) in recruit" :key="index">
              <div class="item-recruit">
                <p>{{item.position}}</p>
                <p>{{item.num}}人</p>
                <p>{{item.workplace}}</p>
                <p>{{item.create_time}}</p>
              </div>
              <div class="recruit-detail">
                <div class="detail">
                  <span>岗位需求：</span>
                  <p>{{item.demand}}</p>
                </div>
                <div class="btn-apply">
                  <a target="_blank" :href="'http://wpa.qq.com/msgrd?v=3&uin='+us.qq+'&site=qq&menu=yes'">申请岗位</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  // import BaiduMap from 'vue-baidu-map/components/map/Map'
  // import BmView from 'vue-baidu-map/components/map/MapView'
  // import BmLocalSearch from 'vue-baidu-map/components/search/LocalSearch'
  import icon_address from '../assets/icon-map.png'

  export default {
    // components: {
    //   BaiduMap,
    //   BmView,
    //   BmLocalSearch
    // },
    data() {
      return {
        banner: this.config.banner,//banner图
        bg_img: this.config.bg_img,
        active: 1,
        us: {},

        // 留言中心
        name: '',
        phone: '',
        desc: '',
        ipt_tip: '',
        btn_no_cilck: true,

        hover_on: 1,//人才招聘hover效果
        recruit: [],//人才招聘列表

        // 百度地图
        // ak: this.secret.baidu_map_ak,
        location: {
          lng: 117.416798,
          lat: 39.95455
        }
      }
    },
    beforeRouteUpdate(to) {
      this.active = parseInt(to.query.on) || 1;
      this.my_load(this.active);

    },
    mounted() {
      this.active = parseInt(this.$route.query.on) || 1;
      this.my_load(this.active);
      // this.map_init();
    },
    methods: {
      tab(on) {
        this.active = on;
        this.my_load(on);
      },

      my_load(index) {
        this.getUsData();
        this.getZhaopinList();
        this.$nextTick(() => {
          switch (index) {
            case 2:
              window.scrollTo({
                top: this.$refs.scroll_two.offsetTop,
                behavior: "smooth"
              });
              break;
            case 3:
              window.scrollTo({
                top: this.$refs.scroll_three.offsetTop,
                behavior: "smooth"
              });
              break;
          }
        });
      },

      hover(on) {
        this.hover_on = on;
      },

      // 点击提交信息到后台
      submit_message() {
        if (!this.name.trim()) {
          this.ipt_tip = '请输入你的姓名';
          // this.$message('请输入内容后提交');
        } else if (!this.phone.trim()) {
          this.ipt_tip = '请输入你的联系方式';
          // this.$message('请输入你的姓名');
        } else if (!this.desc.trim()) {
          this.ipt_tip = '请输入内容后提交';
          // this.$message('请输入你的联系方式');
        } else if (!this.config.tel_reg.test(this.phone)) {
          this.ipt_tip = '请输入正确的手机号';
          // this.$message('请输入内容后提交');
        } else {
          let post = {
            name: this.name,
            tel: this.phone,
            message: this.desc
          };
          // console.log(post);
          this.utils.ajax(this, 'zh.index/leaveMessage', post).then(() => {
            this.$alert('您的留言信息已提交到后台，感谢您的留言。', '留言成功', {
              confirmButtonText: '确定',
              callback: () => {
                this.desc = '';
                this.name = '';
                this.phone = '';
                this.btn_no_cilck = false;
                this.ipt_tip = '您的留言信息已提交到后台，感谢您的留言。';
              }
            });
          })
        }
      },
      // 验证电话号码
      blur_reg_tel() {
        if (!this.phone.trim()) {
          this.ipt_tip = '';
        } else {
          if (!this.config.tel_reg.test(this.phone)) {
            this.ipt_tip = '请输入正确的手机号';
          } else {
            this.ipt_tip = '';
          }
        }
      },

      // 人才招聘列表
      getZhaopinList() {
        this.utils.ajax(this, 'zh.index/zhaopinList').then(res => {
          this.hover_on = res[0].id;
          // console.log(res);
          for (let i = 0; i < res.length; i++) {
            res[i].create_time = this.utils.date_format(res[i].create_time, 'yyyy-MM-dd')
          }
          this.recruit = res;
        })
      },
      getUsData() {
        this.utils.ajax(this, 'zh.index/aboutUs').then(res => {
          this.us = res;
        })
      },

      map_init({ BMap, map }) {
        this.$nextTick(() => {
          // 初始化地图,设置中心点坐标
          var point = new BMap.Point(this.location.lng, this.location.lat);
          map.centerAndZoom(point, 15);

          // 添加鼠标滚动缩放
          map.enableScrollWheelZoom();
          // 添加缩略图控件
          // map.addControl(new BMap.OverviewMapControl({ isOpen: false, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));
          // 添加缩放平移控件
          // map.addControl(new BMap.NavigationControl());
          //添加比例尺控件
          // map.addControl(new BMap.ScaleControl());
          //添加地图类型控件
          //map.addControl(new BMap.MapTypeControl());

          //设置标注的图标
          var icon = new BMap.Icon(icon_address, new BMap.Size(32, 43), { anchor: new BMap.Size(16, 43) });
          //设置标注的经纬度
          var marker = new BMap.Marker(new BMap.Point(this.location.lng, this.location.lat), { icon: icon });
          //把标注添加到地图上
          map.addOverlay(marker);
          this.utils.ajax(this, 'zh.index/aboutUs').then(us => {
            var content = "<table>";
            // content = content + "<tr><td> 编号：001</td></tr>";
            content = content + "<tr><td style='text-align: center;line-height: 25px'>" + us.name + "</td></tr>";
            content = content + "<tr><td> 地址：" + us.address + "</td></tr>";
            content = content + "<tr><td style='text-align: center;font-size: 18px;line-height: 30px'><a style='background: #50a7ec;color: #ffffff;padding: 2px 10px' href='http://api.map.baidu.com/marker?location=" + this.location.lat + "," + this.location.lng + "&title=天津同缘兴科技股份有限公司&content=" + us.address + "&output=html&src=webapp.baidu.openAPIdemo' target='_blank'>到这去</a></td></tr>";
            content += "</table>";
            var infowindow = new BMap.InfoWindow(content);
            // 图标点击的时候显示标注
            marker.addEventListener("click", function () {
              this.openInfoWindow(infowindow);
            });
          });

          // 标注默认显示
          // var infoWindow = new BMap.InfoWindow(content) // 创建信息窗口对象
          // map.openInfoWindow(infoWindow, point)
        });
      }
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

    /*title样式*/
    .title {
      margin: 70px auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;

      .enlish-title {
        font-size: 32px;
        color: #333333;
        margin-bottom: 5px;
      }

      p {
        font-size: 32px;
        color: #333333;
        font-weight: bold;
        position: relative;
        z-index: 3;
        padding: 6px 24px;
        border-radius: 10px;
        border: solid 2px #ffffff;
        overflow: hidden;

        span {
          position: relative;
          z-index: 9;
        }

        &:before {
          content: '';
          width: 50%;
          height: 100%;
          background-color: #ffffff;
          left: 0;
          top: 0;
          position: absolute;
          z-index: 1;
        }

        &:after {
          content: '';
          width: 50%;
          height: 100%;
          background-color: transparent;
          right: 0;
          top: 0;
          position: absolute;
          z-index: 1;
        }
      }
    }

    .contact-one {
      margin-top: 90px;

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        /*@keyframes myfirst {*/
        /*from {*/
        /*transform: rotate(0deg);*/
        /*}*/
        /*to {*/
        /*transform: rotate(360deg);*/
        /*}*/
        /*}*/

        li {
          width: 270px;
          height: 120px;
          border: 3px solid #eeeeee;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background-color: #ffffff;
          border-radius: 6px;

          .icon-box {
            position: absolute;
            top: -30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
          }

          p {
            font-size: 16px;
            color: #666666;
            margin: 0 10px;
            text-align: center;
          }

          &:hover {
            .icon-box {
              transform: rotate(360deg);
              transition: 0.5s;
            }
          }
        }
      }

      /*百度地图*/
      .map {
        margin-top: 50px;
        height: 400px;
        background-color: #ffffff;

        .baidu-map {
          width: 100%;
          height: 100%;
        }
      }

    }

    .contact-two {

      .focus-us {
        margin-top: 64px;
        height: 516px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .focus-left {
          width: 800px;
          background: url("../assets/contact-us-bg.png") no-repeat;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;

          ul {
            width: calc(100% - 170px);
            display: flex;
            justify-content: space-between;

            li {
              .img {
                width: 183px;
                height: 183px;
                background-color: #ffffff;
                border-radius: 10px;
                overflow: hidden;
                padding: 10px;
                box-sizing: border-box;
              }

              p, a {
                font-size: 14px;
                color: #666666;
                margin-top: 18px;
                text-align: center;
              }

              a:hover {
                color: #50a8ec;
              }
            }
          }

          .salesman {
            margin-top: 45px;
            width: calc(100% - 170px);
            background-color: #ffffff;
            border-radius: 10px;
            border: solid 1px #eeeeee;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .salesman-item {
              position: relative;
              width: 33.3333%;
              margin: 30px 0;
              display: flex;
              align-items: center;
              justify-content: center;

              .item-cont {
                width: calc(100% - 40px);

                h3 {
                  font-size: 24px;
                  color: #333333;
                  font-weight: normal;
                  margin-bottom: 23px;
                }

                p {
                  font-size: 16px;
                  width: 100%;
                  margin: 0 auto;
                  color: #666666;
                  line-height: 24px;

                  &.one-line-ellipsis {
                    cursor: pointer;
                  }
                }
              }

              &:after {
                content: '';
                position: absolute;
                right: 0;
                height: 100%;
                width: 1px;
                background-color: #eeeeee;
              }

              &:last-child:after {
                display: none;
              }
            }
          }
        }

        .focus-right {
          flex-grow: 1;
          background: #50a8ec;
          height: 100%;

          h3 {
            font-weight: normal;
            color: #ffffff;
            font-size: 18px;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            height: 113px;
            border-bottom: 3px dashed #ffffff;

            p {
              margin-top: 16px;
              font-size: 14px;
              opacity: 0.6;
            }
          }

          .form {
            margin: 24px 22px;
            position: relative;

            .ipt-tip {
              position: absolute;
              color: #ff4c4c;
              font-size: 12px;
              left: 0;
              bottom: 50px;
              text-align: center;
              width: 100%;
            }

            .ipt-box {
              height: 40px;
              background-color: #6ab3ec;
              border-radius: 10px;
              overflow: hidden;
              margin-bottom: 20px;
              padding: 0 21px;
              box-sizing: border-box;

              input {
                display: flex;
                align-items: center;
                height: 100%;
                width: 100%;
                border: none;
                outline: none;
                font-size: 12px;
                color: #ffffff;
                background: unset;

                &::placeholder {
                  color: #eeeeee;
                  font-size: 12px;
                }
              }

              &.textarea {
                height: 153px;
                padding: 15px 21px;

                textarea {
                  display: block;
                  width: 100%;
                  height: 100%;
                  outline: none;
                  border: none;
                  background: unset;
                  font-size: 12px;
                  color: #ffffff;
                  resize: none;
                  overflow: hidden;
                  line-height: 20px;
                  text-align: justify;

                  &::placeholder {
                    color: #eeeeee;
                    font-size: 12px;
                  }
                }
              }
            }

            .btn-submit {
              font-size: 14px;
              color: #50a8ec;
              width: 143px;
              height: 40px;
              background-color: #ffffff;
              border-radius: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 36px auto 0;
              cursor: pointer;
            }
          }
        }
      }
    }

    .contact-three {
      margin-top: 60px;
      margin-bottom: 80px;

      /*h3 {*/
      /*text-align: center;*/
      /*font-size: 32px;*/
      /*color: #333333;*/
      /*font-weight: normal;*/
      /*}*/

      .recruit {
        width: 100%;
        background-color: #ffffff;
        margin-top: 30px;
        border: solid 1px #eeeeee;

        ul {
          padding-bottom: 50px;

          li {
            position: relative;
            overflow: hidden;

            &:first-child {
              .item-recruit {
                background: #fafafa;
                height: 40px;

                p {
                  font-weight: bold;
                  color: #50a8ec;
                }

                &:after {
                  display: none;
                }
              }
            }

            .item-recruit {
              cursor: pointer;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 60px;
              position: relative;
              color: #333333;

              p {
                width: 25%;
                text-align: center;
                font-size: 15px;
              }

              &:after {
                content: '';
                position: absolute;
                top: 59px;
                left: 50px;
                height: 0;
                border-bottom: 1px dashed #cccccc;
                width: calc(100% - 100px);
              }
            }

            .recruit-detail {
              background-color: #fafafa;
              overflow: hidden;
              width: calc(100% - 100px);
              margin: 0 auto;
              height: 0;
              display: flex;
              flex-flow: column;
              justify-content: space-around;
              transition: all 0.5s;
              box-sizing: border-box;

              .detail {
                margin-top: 30px;
                display: flex;
                justify-content: space-between;

                span {
                  display: block;
                  margin-left: 35px;
                  flex-shrink: 0;
                  color: #50a8ec;
                  font-size: 18px;
                }

                p {
                  flex-grow: 1;
                  white-space: pre-line;
                  font-size: 14px;
                  color: #666666;
                }
              }

              .btn-apply {
                cursor: pointer;
                width: 200px;
                height: 60px;
                background-color: #50a8ec;
                border-radius: 10px;
                margin: 50px auto 30px;

                a {
                  color: #ffffff;
                  font-size: 14px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                }
              }
            }

            &.on {
              .recruit-detail {
                height: 420px;
              }
            }
          }
        }
      }
    }
  }
</style>
