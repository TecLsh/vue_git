<template>
  <div id="dataManager">
    <h1>数据管理</h1>
    <Row>
      <i-col span="4">
        <ul class="dataList">
          <li v-for="item in dataList">
            <i-button type="primary" v-text="item"></i-button>
          </li>
        </ul>
      </i-col>
      <i-col span="16">
        <div>
          <i-table border :content="self" :columns="dataHead" :data="dataInfo"></i-table>
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
        self: this,
        dataList: [
          '数据查询', '数据导入', '在线编辑'
        ],
        dataHead: [
          {title: '编码', key: 'id'},
          {title: '名称', key: 'name'},
          {title: '类别', key: 'class'},
          {title: '地区', key: 'area'},
          {title: '医院', key: 'hospital'},
          {title: '原价格', key: 'oldPrice'},
          {title: '调整价格', key: 'newPrice'},
          {title: '涨幅', key: 'increase'},
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render (row, column, index) {
              return '<i-button type="primary" size="small" @click="show(index)">查看</i-button><i-button type="error" size="small" @click="remove(index)">删除</i-button>'
            }
          }
        ],
        dataInfo: [
          {id: '001', name: '福尔马林', class: '破伤类', area: '中国', hospital: '安徽省立医院', oldPrice: '100', newPrice: '120', increase: '120%'},
          {id: '001', name: '福尔马林', class: '破伤类', area: '中国', hospital: '安徽省立医院', oldPrice: '100', newPrice: '120', increase: '120%'},
          {id: '001', name: '福尔马林', class: '破伤类', area: '中国', hospital: '安徽省立医院', oldPrice: '100', newPrice: '120', increase: '120%'},
          {id: '001', name: '福尔马林', class: '破伤类', area: '中国', hospital: '安徽省立医院', oldPrice: '100', newPrice: '120', increase: '120%'},
          {id: '001', name: '福尔马林', class: '破伤类', area: '中国', hospital: '安徽省立医院', oldPrice: '100', newPrice: '120', increase: '120%'},
          {id: '001', name: '福尔马林', class: '破伤类', area: '中国', hospital: '安徽省立医院', oldPrice: '100', newPrice: '120', increase: '120%'},
          {id: '001', name: '福尔马林', class: '破伤类', area: '中国', hospital: '安徽省立医院', oldPrice: '100', newPrice: '120', increase: '120%'},
          {id: '001', name: '福尔马林', class: '破伤类', area: '中国', hospital: '安徽省立医院', oldPrice: '100', newPrice: '120', increase: '120%'},
          {id: '001', name: '福尔马林', class: '破伤类', area: '中国', hospital: '安徽省立医院', oldPrice: '100', newPrice: '120', increase: '120%'},
          {id: '001', name: '福尔马林', class: '破伤类', area: '中国', hospital: '安徽省立医院', oldPrice: '100', newPrice: '120', increase: '120%'}
        ]
      }
    },
    methods: {
      show (index) {
//        this.$Modal.info ({
//          title: '用户信息',
//        })
      },
      remove (index) {
        this.dataInfo.splice(index, 1)
      }
    }
  }
</script>
<style>
  #dataManager ul li{
    margin: 5px;
    text-align: center;
  }
</style>
