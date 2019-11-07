import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Pages from '../views/home/index.vue'

import Timeline from '../views/home/timeline'
import My from '../views/home/my'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',  // 首页重定向到圈子
    redirect: '/index/timeline'
  },
  {
    // 登录
    path: '/',
    name: 'home',
    component: Home
  },
  {
    // 注册
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/index',  // 首页
    component: Pages,
    children: [{
      path: '/index/timeline', // 圈子
      component: Timeline
    },{
      path: '/index/my', // 我的
      component: My
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
