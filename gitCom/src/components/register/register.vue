<template>
  <div class="logo">
    <h1 @click="logo">！注册不允许！</h1>
  </div>
</template>
<script>
  export default{
    methods: {
      logo: function () {
        this.$router.push({path: 'home'})
      }
    }
  }
</script>
<style>
  .logo{
    height: 80px;
    line-height: 80px;
    background-color: #5CACEE;
  }
  .logo>h1{
    display: inline-block;
    color: #fff;
    margin-left: 50px;
    cursor: pointer;
  }
</style>
