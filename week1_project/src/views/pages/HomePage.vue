<template>
  <div class="homepage">
    <header>
      <router-link to="/pages/list/attention">关注</router-link>
      <router-link to="/pages/list/recommend">推荐</router-link>
      <router-link to="/pages/list/hot">热榜</router-link>
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.homepage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > div {
    flex: 1;
    overflow: auto;
  }
}
header {
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #666;
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
