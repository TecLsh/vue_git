<template>
  <div id="food-life">
    <h3 class="title-group">美食生活</h3>
    <div class="food">
      <img src="../../assets/logo.png">
      <ul>
        <li v-for="item in foods">
          <router-link :to="{path: 'foodLife/foodDetail', query: {id: item.id}}" v-text="item.name"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        foods: []
      }
    },
    mounted: function () {
      this.init()
    },
    methods:{
      init: function () {
        var that = this;
        that.$http.get('api/foods').then(function (res) {
          res.json().then(function (result) {
            that.foods = result.foods;
          })
        })
      }
    }
  }
</script>
<style>
  #food-life{
    padding: 5px 20px;
  }
  .food img{
    float: left;
  }
  .food ul{
    float: left;
    margin-left: 20px;
  }
  .title-group{
    display: inline-block;
    padding: 5px 10px;
    background-color: #5cacee;
    color: #ffffff;
    margin: 5px 0px;
  }
</style>
