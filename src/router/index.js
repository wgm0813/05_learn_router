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
    { path: "/user/:id", component: User },
    {
      // 匹配以上都找不到的任意一个都会显示notfound页面
      path: '/:pathMatch(.*)',
      component:() => import('@/views/NotFound.vue')
    }
  ]
});

// 模拟管理员登录
let isAdmin = true
if(isAdmin){
  router.addRoute({
    path: '/admin',
    component: () => import('@/views/Admin.vue')
  })
  // 获取所有路由
  console.log(router.getRoutes())
}
export default router