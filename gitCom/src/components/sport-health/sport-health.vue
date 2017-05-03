<template>
  <div id="sport-health">
    <h3 class="title-group">运动健康</h3>
    <div class="sport">
      <img src="../../assets/lv.jpg">
      <ul>
        <li v-for="item in sports">
          <router-link to="sportHealth/sportDetail" v-text="item.name"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        sports: []
      }
    },
    mounted: function () {
      this.init()
    },
    methods:{
      init: function () {
        var that = this;
        that.$http.get('api/sports').then(function (res) {
          res.json().then(function (result) {
            that.sports = result.sports;
          })
        })
      }
    }
  }
</script>
<style>
  #sport-health{
    padding: 5px 20px;
  }
  .sport>img{
    float: left;
  }
  .sport>ul{
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
