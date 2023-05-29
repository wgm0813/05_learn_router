<template>
  <div>
    APP
    <!-- 路由链接 -->
    <router-link to="/home">展示home</router-link>
    <router-link to="/user/123">展示user123</router-link>
    <router-link to="/user/321">展示user321</router-link>

    <button @click="toUser">去user路由</button>

    <button @click="goBack">返回</button>
    <!-- 需要有router-view才会知道根据路径显示路由的对应页面 -->
    <!-- 占位 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter()
  function toUser() {
    // 跳转到user
    // router.push('/user')
    router.push({
      path: '/user/666',
      query: {
        id : 666
      }
    })
  }

  function goBack() {
    // 向前移动一条记录，与router.forward()相同
    router.go(-1)

    // 返回一条记录，与router.back()相同
    // router.go(-1)

    // 前进3条记录
    // router.go(3)

    // 如果没有那么多记录，静默失败
    // router.go(-100)
    // router.go(100)
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
