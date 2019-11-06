import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'

// 二级路由
import HomePage from '@/views/pages/HomePage.vue'
import Idea from '@/views/pages/Idea.vue'
import College from '@/views/pages/College.vue'
import Message from '@/views/pages/Message.vue'
import My from '@/views/pages/My.vue'

// 三级路由
import Type from '@/views/pages/list/type.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/pages/list/attention'
  },
  {
    path: '/detail/:id?',
    name: 'detail',
    component: Detail
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/pages/homepage',
        redirect: '/pages/list/attention',
        component: HomePage,
        children: [{
          path: '/pages/list/:type',
          component: Type
        }]
      }, {
        path: '/pages/idea',
        component: Idea
      }, {
        path: '/pages/college',
        component: College
      }, {
        path: '/pages/message',
        component: Message
      }, {
        path: '/pages/my',
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
