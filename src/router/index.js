// import {createRouter, createWebHistory} from 'vue-router'
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import User from "@/views/User.vue";

const router = createRouter({
  // 指定模式:vue3版本要加，否则控制台报错
  history: createWebHashHistory(), //hash
  // history: createWebHistory(), //history
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/user/:id", component: User }
  ]
});

export default router