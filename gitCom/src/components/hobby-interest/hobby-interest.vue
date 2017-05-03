<template>
  <div id="hobby-interest">
    <h3 class="title-group">爱好兴趣</h3>
    <div class="hobbies">
      <ul class="hobby-title">
        <li v-for="item in title" v-on:click="selected(item.name)" v-bind:class="{active:activeName === item.name}">
          <a v-text="item.name"></a>
        </li>
      </ul>
      <ul class="hobby-info">
        <li v-for="item in studies">
          <router-link to="hobbyInterest" v-text="item.name"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        studies: [],
        title: [
          {name: '游戏'},
          {name: '小说'},
          {name: '军事'},
          {name: '时尚'}
        ],
        activeName: '游戏'
      }
    },
    mounted: function () {
      this.init()
    },
    methods:{
      init: function () {
        var that = this;
        that.$http.get('api/studies').then(function (res) {
          res.json().then(function (result) {
            that.studies = result.studies;
          })
        })
      },
      selected: function (name) {
        this.activeName = name;
      }
    }
  }
</script>
<style>
  #hobby-interest{
    padding: 5px 20px;
  }
  .hobbies ul{
    height: 30px;
  }
  .hobby-title{
    background-color: #5cacee;
  }
  .hobby-title>li{
    float: right;
    line-height: 20px;
    height: 20px;
    font-size: 16px;
    cursor: pointer;
  }
  .hobby-title>li>a{
    color: #fff;
  }
  .hobby-title>li>a:hover{
    color: #e4393c;
  }
  .hobby-title>li[class='active']>a{
    color: #e4393c;
  }
  .hobby-info{
    float: right;
  }
  .hobby-info>li{
    text-align: left;
  }
</style>
