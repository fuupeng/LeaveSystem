<template>
  <div id="container">
    <div id="head"><Head></Head></div>
    <div id="body">
      <div id="aside"><Aside></Aside></div>
      <div id="main"><router-view v-if="isRouterAlive"></router-view></div>
    </div>
    <div id="foot" style="height: 100px; clear: both"></div>
  </div>
</template>

<script>
import Aside from '@/components/Aside.vue'
import Head from '@/components/Head.vue'
import ReqLeave from '@/views/Main/Request-for-leave.vue'
// import UnderReview from '@/components/Main/underReview.vue'
import UnderReview from '@/views/Main/underReview.vue'
import LeaveSuccess from '@/views/Main/LeaveSuccess.vue'
import WorkHistory from '@/views/Main/WorkHistory.vue'
import LeaveSchool from '@/views/Main/LeaveSchool.vue'
import LeaveSchoolReview from '@/views/Main/LeaveSchoolReview.vue'
import LeaveSchoolHistory from '@/views/Main/LeaveSchoolHistory.vue'
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {
        // this.isRouterAlive = true
        setTimeout(() => {
          this.isRouterAlive = true
        }, 10)
      })
    }
  },
  components: {
    // 侧边栏
    Aside,
    // 头部区域
    Head,
    // 请假申请
    ReqLeave,
    // 请假记录审核中
    UnderReview,
    // 请假记录
    LeaveSuccess,
    // 出勤情况
    WorkHistory,
    // 出校申请
    LeaveSchool,
    // 出校申请审核中
    LeaveSchoolReview,
    // 出校历史
    LeaveSchoolHistory
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  background: url('../src/assets/系统背景.jpg');
}
#container {
  #body {
    margin: auto;
    margin-top: 30px;
  }
}
</style>
