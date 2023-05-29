<template>
  <div>
    <h2>user页面</h2>
    <!-- 在模板中获取到id -->
    <div>User:{{ $route.params.id }}</div>
  </div>
</template>

<script setup>
  import { useRoute, onBeforeRouteUpdate } from 'vue-router';

  // 获取route跳转id
  const route = useRoute()
  console.log('route.params.id',route.params.id)

  // 相同路由之间参数改变打印
  onBeforeRouteUpdate((to, from) => {
    console.log('to:',to.params.id, 'from:',from.params.id)
  })
</script>

<style>

</style>