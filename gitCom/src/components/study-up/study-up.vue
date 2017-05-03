<template>
  <div id="study-up">
    <h3 class="title-group">学习向上</h3>
    <div class="studyUp">
      <img src="../../assets/liuxue.jpg">
      <ul>
        <li v-for="item in studies">
          <router-link to="studyUp/studyDetail" v-text="item.name"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        studies:[]
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
      }
    }
  }
</script>
<style>
  #study-up{
    padding: 5px 20px;
  }
  .studyUp>img{
    float: left;
  }
  .studyUp>ul{
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
