<template>
  <div class="home">
    <li>圈子登录</li>
    <input type="text" placeholder="用户名" v-model="userName" />
    <input placeholder="登录密码" :type="this.pass" v-model="password" />
    <div @click="Change">letter</div>
    <button @click="Login">登录</button>
    <router-link to="/about">没有账号，快速注册</router-link>

    <div class="login"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      pass: 'password',
      userName: '',
      passWord: ''
    }
  },
  methods: {
    Change () {
      if (this.pass === 'password') {
        this.pass = 'text'
      } else {
        this.pass = 'password'
      }
    },
    Login () {
      let { userName, passWord } = this
      let result = Login({ userName, passWord })
      console.log('result...', result);
      if (result && result.data.code === 1){
          // 登陆完成，执行后续跳转逻辑
      }
      alert(result.data.msg);
    },
    checkUserName () {
      if (!/\w{3, 20}/.test(this.userName)){
          alert('请输入正确的用户名')
      }
    }
  }
}

</script>

<style lang="scss">
li {
  width: 100%;
  height: 50px;
  text-align: center;
  background: #eee;
  line-height: 50px;
  font-size: 18px;
  list-style: none;
}
input {
  width: 90%;
  height: 50px;
  border: 1px solid #ccc;
  margin: 15px 0 0px 5%;
  border: 0;
  background: #eee;
}
button {
  width: 90%;
  height: 50px;
  margin: 20px 5%;
  border: 0;
  color: #fff;
  background: rgb(243, 107, 107);
}
a {
  float: left;
  color: #000;
}
</style>
