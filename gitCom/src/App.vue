<template>
  <div id="app">
    <div>
      <router-view name="Header"></router-view>
      <!--<router-link to="/">Index</router-link>-->
      <!--<router-link to="/first">页面一</router-link>-->
      <!--<router-link to="/second">页面二</router-link>-->
      <!--<router-link to="/three">页面三</router-link>-->
      <!--<router-link to="/four">子页面</router-link>-->
      <router-view name="Hello"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
