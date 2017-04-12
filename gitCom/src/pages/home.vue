<template>
  <div id="home">
    <h1>首页{{selected}}{{activeName}}</h1>
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
          <li v-for="item in hospital"><i-button type="success" v-text="item.name"></i-button></li>
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
</template>
<script>
  import Vue from 'vue'
  import Iview from 'iview'
  Vue.use(Iview)
  export default {
    data () {
      return {
        hospital: [
          {name: '安徽省立医院'},
          {name: '安徽省第一医院'},
          {name: '安徽省医科大学附属医院'},
          {name: '安徽省XXX医院'},
          {name: '安徽省XXX医院'},
          {name: '安徽省XXX医院'},
          {name: '安徽省XXX医院'},
          {name: '安徽省XXX医院'},
          {name: '安徽省XXX医院'},
          {name: '安徽省XXX医院'}
        ],
        listInfo: [
          {name: '医院列表'},
          {name: '价格对比总览'},
          {name: '上报数据巡查'},
          {name: '警示信息汇总'}
        ],
        activeName: '',
        selected: ''
      }
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
  home ul li{
    margin: 5px;
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
