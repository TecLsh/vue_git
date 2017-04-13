<template>
  <div id="header-top">
    <div class="logo">
      <h1>安徽省医疗服务价格监管系统</h1>
      <router-link class="changeIcon changeIconA" to="/register">注册</router-link>
      <router-link class="changeIconA" to="/login">登录</router-link>
    </div>
    <ul class="nav">
      <li v-for="(item,$index) in hospital" v-on:click="selected($index)"
          v-bind:class="($index === activeNumber) ? 'active' : ''">
        <router-link :to="{path: item.address}">{{item.title}}{{activeNumber}}{{$index}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        activeNumber: 0,
        hospital: [
          {title: '首页', address: '/home'},
          {title: '数据管理', address: '/dataManager'},
          {title: '统计分析', address: '/analysis'},
          {title: '新增项目公示', address: '/addProject'},
          {title: '政策通告', address: '/policyNotice'},
          {title: '系统管理', address: '/systemManager'}
        ]
      }
    },
    methods: {
      selected: function (index) {
        this.activeNumber = index
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
