<template>
  <div id="header">
    <h1>安徽省医疗服务价格监管系统</h1>
    <div>
      <a class="btn btn-success" href="user/ylLogin.html">登录</a>
      <a href="user/ylRegister.html">注册</a>
    </div>
    <div>
      <i-menu mode="horizontal" active-name="1">
        <a>
          <Menu-item name="1">
            <Icon type="ios-paper"></Icon>
            首页
        </Menu-item>
        </a>
        <a href="html/price-change.html">
          <Menu-item name="2">
            <Icon type="ios-people"></Icon>
            价格变动
        </Menu-item>
        </a>
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
        <Menu-item name="4">
          <Icon type="settings"></Icon>
          商品分类
      </Menu-item>
        <Menu-item name="5">
          <Icon type="settings"></Icon>
          政策通告
      </Menu-item>
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
