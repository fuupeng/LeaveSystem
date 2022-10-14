import Vue from 'vue'
import VueRouter from 'vue-router'
import ReqLeave from '@/views/Main/Request-for-leave.vue'
import UnderReview from '@/views/Main/underReview.vue'
import LeaveSuccess from '@/views/Main/LeaveSuccess.vue'
import WorkHistory from '@/views/Main/WorkHistory.vue'
import LeaveSchool from '@/views/Main/LeaveSchool.vue'
import LeaveSchoolReview from '@/views/Main/LeaveSchoolReview.vue'
import LeaveSchoolHistory from '@/views/Main/LeaveSchoolHistory.vue'
// 把VueRouter 安装为Vue的插件
Vue.use(VueRouter)
// 路由规则的数组
const routes = [
  // 定义首页的路由规则
  // { path: '/', component: Home },
  // { path: '/user', component: User }
  { path: '/', redirect: '/reqLeave' },
  { path: '/reqLeave', component: ReqLeave },
  { path: '/underReview', component: UnderReview },
  { path: '/leaveSuccess', component: LeaveSuccess },
  { path: '/workHistory', component: WorkHistory },
  { path: '/leaveSchool', component: LeaveSchool },
  { path: '/leaveSchoolReview', component: LeaveSchoolReview },
  { path: '/leaveSchoolHistory', component: LeaveSchoolHistory }
]
// 创建路由实例对象
const router = new VueRouter({
  routes
})

export default router
