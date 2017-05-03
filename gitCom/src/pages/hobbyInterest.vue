
<template>
  <div>
    <head-top></head-top>
    <div id="systemManager">
      <h1>{{activeName}}</h1>
      <Row>
        <i-col span="4">
          <ul class="infoList">
            <li v-for="(item,$index) in listInfo" v-on:click="chooseList(item.name,$index)" v-bind:class="{active: item.name === activeName}">
              <a v-text="item.name"></a>
            </li>
          </ul>
        </i-col>
        <i-col span="16">
          <ul class="info" v-if="selected === 0">
            <li v-for="item in hospital">
              <a v-text="item.name"></a>
            </li>
          </ul>
          <div v-if="selected === 1">
            我是第二个
          </div>
          <div v-if="selected === 2">
            我是第三个
          </div>
          <div v-if="selected === 3">
            我是第四个
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/header/header'
  export default {
    data () {
      return {
        listInfo: [
          {name: '游戏'},
          {name: '小说'},
          {name: '军事'},
          {name: '时尚'}
        ],
        activeName: '游戏',
        selected: 0
      }
    },
    components: {
      headTop
    },
    methods: {
      chooseList: function (name, index) {
        this.activeName = name
        this.selected = index
      }
    }
  }
</script>
<style>
  #home ul li{
    margin: 5px;
    text-align: center;
  }
  .infoList{
    text-align: center;
  }
  .infoList a{
    display: inline-block;
    font-size: 14px;
    color: #848484;
    padding: 10px;
  }
  .infoList a:hover{
    color: #5CACEE;
  }

  .info>li{
    float: left;
  }
  .active a{
    color: #5CACEE;
  }
</style>
