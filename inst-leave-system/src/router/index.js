import Vue from 'vue'
import VueRouter from 'vue-router'

import CurrToBeReviewed from '@/views/CurrToBeReviewed.vue'
import CourseLeaveLHistory from '@/views/CourseLeaveLHistory.vue'
import SchoolToBeReviewed from '@/views/SchoolToBeReviewed.vue'
import SchoolLeaveLHistory from '@/views/SchoolLeaveLHistory.vue'

Vue.use(VueRouter)
// 路由规则的数组
const routes = [
  { path: '/', redirect: '/currToBeReviewed' },
  { path: '/currToBeReviewed', component: CurrToBeReviewed },
  { path: '/courseLeaveLHistory', component: CourseLeaveLHistory },
  { path: '/schoolToBeReviewed', component: SchoolToBeReviewed },
  { path: '/schoolLeaveLHistory', component: SchoolLeaveLHistory }
]

const router = new VueRouter({
  routes
})

export default router
