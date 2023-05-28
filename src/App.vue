<template>
  <div>
    APP
    <!-- 路由链接 -->
    <router-link to="/home">展示home</router-link>
    <!-- 不需要有router-view才会知道根据路径显示路由的对应页面 -->
    <!-- 占位 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
