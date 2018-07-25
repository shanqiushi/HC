<template>
  <div class="content">
    <header class="h_header">
      <div class="h_wrap">
        <ul>
          <li v-for="(item,index) in navlist" v-html="item" :class="{'active':navnum==index}" @click="rollclick(index)"></li>
        </ul>
      </div>
    </header>
    <div class="img_box">
      <div class="banner" id="nav0">
        <img src="/static/image/Homepage.png">
        <div class="tomore" @click="more()"></div>
      </div>
      <img src="/static/image/HRC.png" id="nav1">
      <img src="/static/image/Scenes.png" id="nav2">
      <div class="whitepage" id="nav3">
        <img src="/static/image/Architecture.png">
        <a href="/static/whitepaper.pdf" download="whitepaper">
          <img src="/static/image/whitepaper.png" class="wp_img">
        </a>
      </div>
      <div class="news" id="nav4">
        <img src="/static/image/News.png">
        <a href="javascript:;" target="_blank">
          <div class="point point1"></div>
        </a>
        <a href="javascript:;">
          <div class="point point2"></div>
        </a>
        <a href="javascript:;">
          <div class="point point3"></div>
        </a>
      </div>
      <img src="/static/image/Broker.png" id="nav5">
    </div>
    <footer class="f_footer">
      <div class="f_wrap">
        <div>
          <a href="https://telegram.org/" target="_black">
            <img src="/static/image/telegram.png" alt="">
            <p>Telegram</p>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/UsechainFoundation" target="_black">
            <img src="/static/image/facebook.png" alt="">
            <p>Facebook</p>
          </a>
        </div>
        <div>
          <a href="https://twitter.com/usechain" target="_black">
            <img src="/static/image/twitter.png" alt="">
            <p>Twitter</p>
          </a>
        </div>
        <div>
          <a href="https://github.com/" target="_black">
            <img src="/static/image/git.png" alt="">
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      navlist:['Homepage','HRC','Scenes','Architecture','News','Broker'],
      navnum:0
    }
  },
  created() {
    let useragent=navigator.userAgent.toLowerCase()
    let ismobile = /(iphone|ipod|ipad|android)/.test(useragent)
    if(ismobile){
      this.$router.push({path: '/m'})
    }
  },
  methods:{
    more(){
      $("html,body").animate({
          scrollTop: $(`#nav1`)[0].offsetTop
      }, 500);
    },
    rollclick(index){
      this.navnum = index
      let mtop = $(`#nav` + index)[0].offsetTop
      $("html,body").animate({
          scrollTop: mtop
      }, 500);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .h_header{
    position: absolute;
    width: 100%;
    z-index: 2;
  }
  .h_header .h_wrap{
    width: 70%;
    height: 65px;
    line-height: 65px;
    margin: 0 auto;
    padding: 0 10%;
    box-sizing: border-box;
  }
  .h_header .h_wrap ul li{
    float: left;
    color: #fff;
    margin-left: 60px;
    cursor: pointer;
  }
  .h_header .h_wrap ul li.active{
    border-bottom:2px solid #fff;
  }
  .img_box img{
    width: 100%;
  }
  .img_box .banner{
    position: relative;
  }
  .img_box .banner .tomore{
    position: absolute;
    width: 6%;
    height: 7%;
    top: 88%;
    right: 47%;
    cursor: pointer;
  }
  .img_box .whitepage{
    position: relative;
  }
  .img_box img.wp_img{
    width:10%;
    position: absolute;
    top: 16%;
    left: 56%;
  }
  .img_box .news{
    position: relative;
  }
  .img_box .news .point{
    position:absolute;
    width: 18%;
    height: 66%;
    cursor: pointer;
  }
  .img_box .news .point1{
    top:18%;
    right: 61%;
  }
  .img_box .news .point2{
    top:18%;
    right: 41%;
  }
  .img_box .news .point3{
    top:18%;
    right: 21%;
  }
  .f_footer{
    height: 190px;
    width: 100%;
    background-color: #1E2736;
  }
  .f_footer .f_wrap{
    width: 1188px;
    height: 190px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .f_footer .f_wrap div{
    margin-right: 50px;
    text-align: center;
  }
  .f_footer .f_wrap p{
    color: #fff;
    margin-top: 5px;
  }
</style>
