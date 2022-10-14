<template>
  <div id="container">
    <table class="table table-bordered table-hover table-striped" id="">
      <thead>
        <th>#</th>
        <th>课程名称</th>
        <th>课程时间</th>
        <th>教师</th>
        <th>出勤</th>
        <th>缺勤</th>
        <th>详细情况</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in WorkHistoryList" :key="item.courseId">
          <td>{{ index }}</td>
          <td>{{ item.cname }}</td>
          <td>{{ item.course }}</td>
          <td>{{ item.teacher }}</td>
          <td>{{ item.attendance }}</td>
          <td>{{ item.absence }}</td>
          <td><el-button type="primary" style="margin-left: 16px" @click="detailed(item.courseId)"> 详情 </el-button></td>
        </tr>
      </tbody>
    </table>
    <el-drawer title="出勤记录" :visible.sync="drawer" :with-header="true">
      <el-timeline :reverse="reverse">
        <el-timeline-item v-for="(activity, index) in time" :key="index" :timestamp="activity.timestamp">
          {{ activity.date }}
        </el-timeline-item>
      </el-timeline>
    </el-drawer>
  </div>
</template>

<script>
import { getStuWorkHistoryAPI } from '@/api/stuAPI.js'
export default {
  name: 'WorkHistory',
  data() {
    return {
      // 考勤总体情况数组
      WorkHistoryList: [],
      token: '',
      // 侧边栏开关
      drawer: false,
      //---------

      reverse: true,
      // 考勤具体时间数组
      time: []
    }
  },
  methods: {
    async getStuWorkHistory() {
      this.token = localStorage.getItem('token')
      const { data: res } = await getStuWorkHistoryAPI(this.token)
      if (res.status != 200) return alert('获取信息失败')
      this.WorkHistoryList = res.data
    },
    detailed(e) {
      this.drawer = true

      this.WorkHistoryList.forEach((item) => {
        if (item.courseId == e) {
          this.time = item.dateTotal
        }
      })
    }
  },
  created() {
    this.getStuWorkHistory()
  }
}
</script>

<style lang="less" scoped>
#container {
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.8);
  height: 700px;
  border-radius: 20px;
  position: absolute;
  left: 300px;
  width: calc(100% - 320px);
  min-width: 1200px;
  table {
    font-size: 25px;
    text-align: center;

    th {
      text-align: center;
      background-color: rgba(134, 138, 147, 0.6);
      height: 60px;
    }
    button {
      font-size: 20px;
    }
  }
  .el-timeline {
    margin-top: 100px;
    margin-left: 25px;
    font-size: 25px;
  }
}
</style>
