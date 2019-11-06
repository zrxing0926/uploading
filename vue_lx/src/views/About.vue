<template>
    <div class="logbox">
        <div class="header">
            <p> <span @click="GoTo">返回</span>圈子注册</p>
        </div>
        <div class="main">
            <input type="text" placeholder="用户名" v-model="userName">
            <input type="password" placeholder="登录密码" v-model="userPwd">
            <button @click="register">注册</button>
        </div>
    </div>
</template>

<script>
import {register} from '@/service/index'
export default {
    data(){
        return {
            userName: '',
            userPwd: ''
        }
    },
    methods: {
        register(){
            let {userName, userPwd} = this;
            let result = register({userName, userPwd})
            console.log('result...', result);
            if (result && result.data.code === 0){
                alert(result.data.msg)
            }else{
                window.history.back();
            }
        },
        GoTo(){
            window.history.back();
        }
    }
}
</script>


<style lang="scss" scoped>
li {
  width: 100%;
  height: 50px;
  text-align: center;
  background: #eee;
  line-height: 50px;
  font-size: 18px;
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