<template>
  <div class="home">
    <HelloWorld/>
    <div class="topdiv">
      <h5>话题：习近平举行仪式欢迎法国总统访华并同其会谈</h5>
      <span style="color:blue;">查看原文</span>
      <!-- 没有登录显示此效果 -->
      <textarea v-if="flage" name="" id="" cols="30" rows="10" placeholder="登录后发表态度" ></textarea>
      <!-- 登录后显示此效果 -->
     <div v-else>
        <textarea  name="" id="" cols="30" rows="10"></textarea>
        <p>yihang-i@13.com <span style="color:blue;">退出</span>  <button style="border:0;">发布</button></p>
      </div>
      
   </div>
    <div class="conent">
      <span>热门跟帖</span>
      <div class="list" v-for="(item) in list" :key="item.commentId">
        <ul class="ul">
          <div class="div1">
            <p style="color:blue;">{{item.user.location}}</p>
            <h5>{{item.content}}</h5>
          </div>
          <div class="div2">
            <p>116赞</p>
            <p>回复</p>
          </div>
        </ul>
      </div>
      <span>展开跟帖</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import mock from '../mock/mock'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      list:[],
      flage:true,
    }
  },
  components: {
     HelloWorld
  },
  async created(){
    //请求数据
    let data = await axios.get('/api/data')
      console.log(data.data)
     data.data.commentIds.forEach(item=>{
       this.list.push(data.data.comments[item])
     })
      console.log(this.list)
      // console.log(window.localStorage.getItem('logindata'))
      //获取本地存储内容 登录成功后
      if(window.localStorage.getItem('logindata')){
        this.flage=false
      }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
   .topdiv{
     width: 90%;
     height: 130px;
     padding: 10px;
     textarea{
       width: 89%;
       height: 60px;
       background: #eee;
     }
   }
   .conent{
     span{
       background: red;
        text-align: center;
        color: #fff;
     }
   }
   .list{
     padding: 10px;
   }
   .ul{
     width: 90%;
     height: 70px;
     line-height: 35px;
     border-bottom: 1px solid #ccc;
      display: flex;
   }
   .div1{
     flex: 8;
   }
   .div2{
     flex: 2;
   }
</style>
