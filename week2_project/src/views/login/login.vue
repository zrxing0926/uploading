<!--  -->
<template>
    <div>
        <p class="p">网易</p>
        <div class="logindiv">
            <input type="text" name="" id="" placeholder="网易邮箱账号" v-model="user"><br>
            <input type="text" name="" id="" placeholder="密码" v-model="pwd"><br>
            <p>使用 <span style="color:blue;">网易账号管家</span> ，全面保护您的账号！</p>
            <button @click="loginbtn()">登录</button>
            <p>忘记密码？未注册</p>
        </div>
       
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
        user:'',
        pwd:''
    };
  },
  methods: {
    // 点击请求登录信息 并判断账号和密码是否正确
   async loginbtn(){
        let logindata =await axios.get('/api/login')
        console.log(logindata)
        let data =logindata.data[0]
        if(data.user===this.user&&data.pwd===this.pwd){
            //正确  存入本地里 并跳到列表页面
            window.localStorage.setItem('logindata',JSON.stringify(data))
            this.$router.push('/')
        }
        else{//输入错误提示
            alert('账号或密码输入错误')
            this.user=''
            this.pwd=''
        }
    }   
  },
}

</script>
<style lang='scss' scoped>
    .p{
        width: 100%;
        height: 40px;
        background: red;
        text-align: center;
        line-height: 40px;
    }
    .logindiv{
        width: 200px;
        margin: 0 auto;
        input{
            width: 100%;
            height:40px;
            margin-top:20px;
        }
        button{
            width: 100%;
            height: 30px;
            background: red;
            text-align: center;
            line-height: 30px;
            border:0;
        }
        p{
            color: #666;
        }
    }
</style>