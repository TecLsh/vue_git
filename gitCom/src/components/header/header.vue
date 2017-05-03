<template>
  <div id="header-top">
    <div class="logo">
      <h1 @click="logo">lsh-vue进阶之路</h1>
      <router-link v-if="!userName" class="changeIcon changeIconA" to="/register">注册</router-link>
      <router-link v-if="!userName" class="changeIconA" to="/login">登录</router-link>
      <a v-if="userName" class="changeIcon changeIconA" @click="logout">退出</a>
      <a v-if="userName" class="changeIconA" v-text="userName"></a>
    </div>
    <ul class="nav">
      <li v-for="(item,$index) in hospital" v-on:click="selected($index)"
          v-bind:class="($index === activeNumber) ? 'active' : ''">
        <router-link :to="{path: item.address}" v-text="item.title"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        userName: '',
        activeNumber: 0,
        hospital: [
          {title: '首页', address: '/home'},
          {title: '美食生活', address: '/foodLife'},
          {title: '运动健康', address: '/sportHealth'},
          {title: '学习进步', address: '/studyUp'},
          {title: '兴趣爱好', address: '/hobbyInterest'},
          {title: '网站管理', address: '/systemManager'}
        ]
      }
    },
    mounted: function () {
      this.userName = sessionStorage.getItem('userName');
      for (let i = 0; i < this.hospital.length; i++) {
        if (this.$route.path.indexOf(this.hospital[i].address) >= 0) {
          this.selected(i)
        }
      }
    },
    methods: {
      selected: function (index) {
        this.activeNumber = index
      },
      logout: function () {
        sessionStorage.removeItem('userName');
        this.$router.push({path: 'login'})
      },
      logo: function () {
        this.$router.push({path: 'home'})
      }
    }
  }
</script>

<style>
  #header-top>.nav{
    overflow: hidden;
    border-bottom: 1px solid #ddd;
  }
  #header-top>.nav>.active>a{
    color: #5cacee;
    border-bottom: 2px solid #5cacee;
  }
  #header-top>.nav>li{
    float: left;
    height: 60px;
    line-height: 60px;
  }
  #header-top>.nav>li>a{
    display: inline-block;
    font-size: 14px;
    line-height: 60px;
    height: 60px;
    padding: 0px 20px;
    color: #2c3e50;
  }
  /*#header-top>.nav>li>a:link{*/
    /*color: #5cacee;*/
    /*border-bottom: 2px solid #5cacee;*/
  /*}*/
  /*#header-top>.nav>li>a:visited{*/
    /*color: #5cacee;*/
    /*border-bottom: 2px solid #5cacee;*/
  /*}*/
  #header-top>.nav>li>a:hover{
    color: #5cacee;
    border-bottom: 2px solid #5cacee;
  }
  /*#header-top>.nav>li>a:active{*/
    /*color: #5cacee;*/
    /*border-bottom: 2px solid #5cacee;*/
  /*}*/
  #header-top>.logo{
    background-color: #5CACEE;
    height: 80px;
    line-height: 80px;
  }
  #header-top>.logo>h1{
    display: inline-block;
    color: #fff;
    margin-left: 50px;
    cursor: pointer;
  }
  #header-top>.logo>.changeIconA{
    display: inline-block;
    float: right;
    color: #fff;
    margin: 0px 5px;
  }
  #header-top>.logo>.changeIcon{
    margin-right: 50px;
  }
</style>
