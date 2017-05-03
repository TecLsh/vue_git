<template>
  <div>
    <div class="logo">
      <h1 @click="logo">lsh-vue进阶之路</h1>
    </div>
    <div id="login">
      <form class="login_area" v-on:submit.prevent="submit">
        <div class="form-group">
          <label>用户名</label>
          <input type="text" v-model="data.name">
        </div>
        <div class="form-group">
          <label>密码</label>
          <input type="password" v-model="data.password">
        </div>
        <div>
          <span style="color: red" v-if="infoName.isShow" v-text="infoName.message"></span>
        </div>
        <input class="submit" type="submit">
        <i-button type="primary" @click="register">注册</i-button>
      </form>
    </div>
  </div>
</template>
<script>
  export default{
    data (){
      return {
        data:{
          name: '',
          password: ''
        },
        infoName: {
          isShow: false,
          message: ''
        }
        }
    },
    methods:{
      submit: function () {
        var formData = JSON.stringify(this.data);
        this.$http.post('api/login',formData).then(function (res) {
          if(res.status == 200){
            this.infoName.message = res.name;
            this.infoName.isShow = false;
            sessionStorage.setItem('userName', res.body.data.name);
            this.$router.push({path: 'systemManager'})
          }else{
            this.infoName.message = res.message;
            this.infoName.isShow = true;``
          }
        })
      },
      register: function () {
        this.$router.push({path: 'register'})
      },
      logo: function () {
        this.$router.push({path: 'home'})
      }
    }
  }
</script>
<style>
  .logo{
    height: 80px;
    line-height: 80px;
    background-color: #5CACEE;
  }
  .logo>h1{
    display: inline-block;
    color: #fff;
    margin-left: 50px;
    cursor: pointer;
  }
  .login_area{
    width: 450px;
    height: 300px;
    border: 10px solid #dddddd;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -150px;
    border-radius: 10px;
    text-align: center;
    background-color: #2c3e50;
  }
  .form-group{
    margin: 40px 10px;
  }
  .form-group label{
    display: inline-block;
    padding: 4px 12px;
    font-size: 14px;
    width: 20%;
    border: 1px solid #5cacee;
    background-color: #5cacee;
    color: #ffffff;
    border-radius: 6px;
    text-align: center;
  }
  .form-group input{
    width: 40%;
    margin-right: 40px;
    border: 1px solid #2c3e50;
    line-height: 28px;
    border-radius: 6px;
    font-size: 14px;
  }
  .login_area button{
    margin: 0px 10px;
  }
  input[class=submit]{
    padding: 6px 14px;
    background-color: #39f;
    color: #ffffff;
    border-radius: 4px;
    border: 1px solid #39f;
    cursor: pointer;
  }
</style>
