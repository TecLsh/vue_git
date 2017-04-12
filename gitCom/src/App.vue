<template>
  <div id="app">
    <div>
      <router-view name="header"></router-view>
      <router-view name="home"></router-view>
      <router-view name="dataManager"></router-view>
      <router-view name="analysis"></router-view>
      <router-view name="addProject"></router-view>
      <router-view name="policyNotice"></router-view>
      <router-view name="systemManager"></router-view>
      <router-view></router-view>
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
  color: #2c3e50;
}
</style>
