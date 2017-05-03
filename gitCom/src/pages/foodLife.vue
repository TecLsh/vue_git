<template>
  <div>
    <head-top></head-top>
    <div class="foodlife">
      <h1>生活美食</h1>
      <ul class="foods">
        <li v-for="item in foods">
          <h3 v-text="item.name"></h3>
          <router-link :to="{path: 'foodLife/foodDetail', query: {id: item.id}}" v-text="item.description"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/header/header'
  export default {
    data () {
      return {
        foods: []
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
        this.$http.get('api/foods').then(function (res) {
          res.json().then(function (result) {
            that.foods = result.foods;
          })
        })
      }
    }
  }
</script>
<style>
  .foods{
    margin: 10px 100px;
  }
  .foods>li{
    padding: 5px 10px;
  }
</style>
