import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  // 指定模式:vue3版本要加，否则控制台报错
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home }
  ]
});

export default router