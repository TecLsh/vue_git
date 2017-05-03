<template>
  <div>
    <head-top></head-top>
    <h1 v-text="title"></h1>
    <ul class="study">
      <li v-for="item in studies">
        <h3 v-text="item.name"></h3>
        <router-link to="studyUp/studyDetail" v-text="item.description"></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import headTop from '../components/header/header'
  export default {
    data () {
      return {
        title: '学习进步',
        studies: []
      }
    },
    components: {
      headTop
    },
    mounted: function () {
      this.init();
    },
    methods: {
      init: function () {
        var that = this;
        that.loading = true;
        var params = {class: 'study'};
        that.$http.get('api/studies',{ params: params }).then(function (resp) {
          resp.json().then(function (result) {
            that.studies = result.studies;
          });
        }, function (resp) {
          console.log('get请求出错')
        });
      }
    }
  }
</script>
<style>
  .study{
    margin: 10px 100px;
  }
  .study>li{
    padding: 5px 10px;
  }
</style>
