<template>
  <div id="container">
    <img src="@/assets/logo1.png" alt="" />
    <div id="info">
      <span>姓名：</span>
      <p>{{ name }}</p>
      <el-button @click="out">退出</el-button>
    </div>
  </div>
</template>

<script>
import { getTeachertInfoAPI } from '@/api/instAPI.js'
export default {
  name: 'Head',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    out() {
      localStorage.removeItem('token')
      location.href = '../login'
    },
    // 获取老师基本信息
    async getTeachertInfo() {
      const token = localStorage.getItem('token')
      const { data: res } = await getTeachertInfoAPI(token)
      if (res.status != 200) return (window.location.href = '../login')

      this.name = res.data.uname
    }
  },
  created() {
    this.getTeachertInfo()
  }
}
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 120px;
  background-color: rgba(74, 153, 254, 0.6);
  display: block;
  img {
    height: 270px;
    margin-top: -70px;
    margin-left: 20px;
  }
  #info {
    float: right;
    font-size: 25px;
    color: #fff;
    display: flex;
    padding: 40px 100px 30px 90px;
    p {
      margin-right: 40px;
    }
    button {
      background: none;
      color: #fff;
      height: 30px;
      padding: 0 5px;
    }
  }
}
</style>
