<template>
  <div class="home">
    <main>
      <router-view></router-view>
    </main>
    <div class="foot_nav">
      <router-link to="/pages/homepage">首页</router-link>
      <router-link to="/pages/idea">想法</router-link>
      <router-link to="/pages/college">大学</router-link>
      <router-link to="/pages/message">消息</router-link>
      <router-link to="/pages/my">我的</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow: auto;
  }
}
.foot_nav {
    width: 100%;
    height: 35px;
    display: flex;

    a {
      flex: 1;
      text-align: center;
      line-height: 35px;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>



<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
  }
};
</script>
