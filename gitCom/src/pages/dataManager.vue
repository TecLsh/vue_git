<template>
  <div>
    <head-top></head-top>
    <div id="dataManager">
      <h1>数据管理{{pageChange}}</h1>
      <i-table border :content="self" :columns="columns7" :data="data6"></i-table>
      <Page :total="100" show-elevator :on-change="pageChange"></Page>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/header/header'
  export default {
    data () {
      return {
        self: this,
        pageChange: '',
        dataList: [
          '数据查询', '数据导入', '在线编辑'
        ],
        columns7: [
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
              return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`
            }
          }
        ],
        data6: [
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
    components: {
      headTop
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '用户信息',
          content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].id}<br>地址：${this.data6[index].area}`
        })
      },
      remove (index) {
        this.data6.splice(index, 1)
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
