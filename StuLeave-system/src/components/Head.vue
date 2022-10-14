<template>
  <div id="container">
    <img src="@/assets/logo1.png" alt="" id="name" />
    <div id="info">
      <span>姓名：</span>
      <span class="name">{{ stuName }}</span>
      <span class="num">学号：</span>
      <span class="num">{{ stuID }}</span>
      <button type="button" class="btn btn-link" @click="out">退出</button>
    </div>
  </div>
</template>

<script>
import { getStuInfoAPI } from '@/api/stuAPI.js'
export default {
  name: 'Head',
  data() {
    return {
      stuName: '',
      stuID: '',
      college: '',
      token: ''
    }
  },
  methods: {
    async getStuInfo() {
      this.token = localStorage.getItem('token')
      const { data: res } = await getStuInfoAPI(this.token)
      if (res.status != 200) {
        return (window.location.href = '../login')
      }

      this.stuName = res.data.uname
      this.stuID = res.data.uid
      this.college = res.data.college
    },
    out() {
      localStorage.removeItem('token')
      location.href = '../login'
    }
  },
  created() {
    this.getStuInfo()
  }
}
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.4);
  display: block;

  #info {
    font-size: 25px;
    margin-right: 60px;
    float: right;
    margin-top: 2%;
  }
  .name {
    margin-right: 50px;
  }
  #name {
    width: 700px;
    margin-left: 20px;
    margin-top: -60px;
  }
}
</style>
