
<template>
  <div>
    <head-top></head-top>
    <div id="systemManager">
      <h1>内容发布</h1>
      <Row>
        <i-col span="4">
          <ul class="infoList">
            <li v-for="(item,$index) in listInfo" v-on:click="chooseList(item.name,item.class,$index)" v-bind:class="{active: item.name === activeName}">
              <a v-text="item.name"></a>
            </li>
          </ul>
        </i-col>
        <i-col span="16">
          <i-form>
            <Form-item label="是否匿名" prop="show">
              <input class="check" type="checkbox" v-model="formData.isShow" >
            </Form-item>
            <Form-item label="标题" prop="name">
              <i-input v-model="formData.name" placeholder="请输入标题"></i-input>
            </Form-item>
            <Form-item label="介绍" prop="description">
              <i-input v-model="formData.description" type="textarea" placeholder="请输入..."></i-input>
            </Form-item>
            <up-file v-model="formData.img"></up-file>
            <Form-item>
              <i-button type="primary" @click="handleSubmit">提交</i-button>
              <i-button type="ghost" @click="handleReset" style="margin-left: 8px">重置</i-button>
            </Form-item>
          </i-form>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/header/header'
//  import uploadImg from '../components/uploadImg/uploadImg'
  import upFile from '../components/upFile/upFile'
//  import ueditor from '../components/ueditor/ueditor'
  export default {
    data () {
      return {
        listInfo: [
          {name: '美食生活', class: 'food'},
          {name: '运动健康', class: 'sport'},
          {name: '学习进步', class: 'study'},
          {name: '兴趣爱好', class: 'hobby'}
        ],
        activeName: '美食生活',
        selected: 0,
        userName: '',
        formData: {
          isShow: false,
          name: '',
          description: '',
          class: 'food'
        }
      }
    },
    components: {
      headTop,
      upFile
    },
    mounted: function () {

    },
    methods: {
      chooseList: function (name, nameclass, index) {
        this.activeName = name;
        this.formData.class = nameclass;
        this.selected = index;
        this.userName = sessionStorage.getItem('userName');
      },
      handleSubmit: function () {
        if(sessionStorage.getItem('userName')){
          var formData = JSON.stringify(this.formData);
          this.$http.post('api/todos',formData).then(function (res) {
            this.$router.push({path: 'systemManager/success'})
          })
        }else{
          this.$Notice.error({
            title: '请先登录',
            desc: '请先登录'
          });
        }
      },
      handleReset: function () {
        this.formData.name = '';
        this.formData.description = '';
      }
    }
  }
</script>
<style>
  #home ul li{
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
  textarea{
    min-height: 115px;
  }
  .check{
    display: inline-block;
    height: 14px;
    width: 14px;
    margin-top: 10px;
  }
</style>
