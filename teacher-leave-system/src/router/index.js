import Vue from 'vue'
import VueRouter from 'vue-router'

import LeaveHistory from '@/views/LeaveHistory.vue'
import LeaveToday from '@/views/LeaveToday.vue'
Vue.use(VueRouter)
// 路由规则的数组
const routes = [
  { path: '/', redirect: '/leaveToday' },
  { path: '/leaveToday', component: LeaveToday },
  { path: '/leaveHistory', component: LeaveHistory }
]

const router = new VueRouter({
  routes
})

export default router
