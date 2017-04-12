<template>
  <div id="header">
    <div class="logo">
      <h1>安徽省医疗服务价格监管系统</h1>
      <router-link class="changeIcon changeIconA" to="/register">注册</router-link>
      <router-link class="changeIconA" to="/login">登录</router-link>
    </div>
    <div>
      <i-menu mode="horizontal" active-name="1">
        <router-link to="/home">
          <Menu-item name="1">
            <Icon type="ios-paper"></Icon>
            首页
        </Menu-item>
        </router-link>
        <router-link to="/dataManager">
          <Menu-item name="2">
            <Icon type="ios-people"></Icon>
            数据管理
        </Menu-item>
        </router-link>
        <router-link to="/analysis">
          <Submenu name="3">
            <template slot="title">
              <Icon type="stats-bars"></Icon>
              统计分析
          </template>
            <Menu-group title="使用">
              <Menu-item name="3-1">新增和启动</Menu-item>
              <Menu-item name="3-2">活跃分析</Menu-item>
              <Menu-item name="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
              <Menu-item name="3-4">用户留存</Menu-item>
              <Menu-item name="3-5">流失用户</Menu-item>
            </Menu-group>
          </Submenu>
        </router-link>
        <router-link to="/addProject">
          <Menu-item name="4">
            <Icon type="settings"></Icon>
            新增项目公示
          </Menu-item>
        </router-link>
        <router-link to="/policyNotice">
          <Menu-item name="5">
            <Icon type="settings"></Icon>
            政策通告
          </Menu-item>
        </router-link>
        <router-link to="systemManager">
          <Menu-item name="6">
            <Icon type="settings"></Icon>
            系统管理
          </Menu-item>
        </router-link>
      </i-menu>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Iview from 'iview'
  Vue.use(Iview)
  export default{
    data () {
      return {
        hospital: [
          {title: '首页', index: 0},
          {title: '价格变动', index: 1},
          {title: '商品分类', index: 2},
          {title: '政策通告', index: 3},
          {title: '信息分类', index: 4},
          {title: '关于我们', index: 5}
        ]
      }
    }
  }
</script>

<style>
  #header{
    background-color: #5CACEE;
  }
  #header>.logo{
    height: 80px;
    line-height: 80px;
  }
  #header>.logo>h1{
    display: inline-block;
    color: #fff;
    margin-left: 50px;
  }
  #header>.logo>.changeIconA{
    display: inline-block;
    float: right;
    color: #fff;
    margin: 0px 5px;
  }
  #header>.logo>.changeIcon{
    margin-right: 50px;
  }
</style>
