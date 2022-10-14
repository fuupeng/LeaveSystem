<template>
  <div id="container">
    <div id="head"><Head></Head></div>
    <div class="body">
      <div id="aside"><Aside></Aside></div>
      <div id="main"><router-view v-if="isRouterAlive"></router-view></div>
    </div>
  </div>
</template>

<script>
import Aside from '@/components/Aside.vue'
import Head from '@/components/Head.vue'
import CurrToBeReviewed from '@/views/CurrToBeReviewed.vue'
import CourseLeaveLHistory from '@/views/CourseLeaveLHistory.vue'
import SchoolToBeReviewed from '@/views/SchoolToBeReviewed.vue'
import SchoolLeaveLHistory from '@/views/SchoolLeaveLHistory.vue'
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
    // 课程审核中
    CurrToBeReviewed,
    // 课程请假历史
    CourseLeaveLHistory,
    // 离校审核中
    SchoolToBeReviewed,
    // 离校历史
    SchoolLeaveLHistory
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  background: url('@/assets/系统背景.jpg');
}
</style>
