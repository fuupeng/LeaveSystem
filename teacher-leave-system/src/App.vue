<template>
  <div id="container">
    <div id="head"><Head></Head></div>
    <div id="aside"><Aside></Aside></div>
    <div id="main"><router-view></router-view></div>
  </div>
</template>

<script>
import Aside from '@/components/Aside.vue'
import Head from '@/components/Head.vue'
import ToBeReviewed from '@/views/LeaveToday.vue'
export default {
  name: 'App',
  components: {
    // 侧边栏
    Aside,
    // 头部区域
    Head,
    // 审核中
    ToBeReviewed
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  body {
    background: url('@/assets/系统背景.jpg');
  }
}
</style>
