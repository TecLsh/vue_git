<template>
  <div>
    <head-top></head-top>
    <div id="sportHealth">
      <h1>运动健康</h1>
      <ul class="sports">
        <li v-for="item in sports">
          <h3 v-text="item.name"></h3>
          <router-link to="sportHealth/sportDetail" v-text="item.description"></router-link>
        </li>
      </ul>
      <!--<Page :total="100" show-elevator :on-change="pageChange"></Page>-->
    </div>
  </div>
</template>
<script>
  import headTop from '../components/header/header'
  export default {
    data () {
      return {
        pageChange: '',
        sports: []
      }
    },
    components: {
      headTop
    },
    mounted: function() {
      this.init()
    },
    methods: {
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
  .sports{
    margin: 10px 100px;
  }
  .sports>li{
    padding: 5px 10px;
  }
</style>
