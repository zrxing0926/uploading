<!--  -->
<template>
    <div class="topnav">
        <span @click="back()">←</span>
        <h4>网易</h4>
        <span>主页</span>
    </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  methods:{
      back(){
        window.history.back()
      }
  }
}

</script>
<style lang='scss'>
    .topnav{
        width: 100%;
        height: 40px;
        background: red;
        line-height: 40px;
        display: flex;
        justify-content: space-around;
        color: #fff;
    }
</style>