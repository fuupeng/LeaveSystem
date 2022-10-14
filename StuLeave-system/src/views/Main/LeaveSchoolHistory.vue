<template>
  <!-- 离校审核中 -->
  <div id="container">
    <table class="table table-bordered table-hover table-striped" id="">
      <thead>
        <th>#</th>
        <th>申请日期</th>

        <th>出校时间</th>
        <th>回校时间</th>
        <th>辅导员</th>
        <th>目的地</th>
        <th>原因</th>
        <th>申请情况</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in LeavingSchoolList" :key="index">
          <td>{{ index }}</td>
          <td>{{ item.date }}</td>

          <td>{{ item.outtime }}</td>
          <td>{{ item.cometime }}</td>
          <td>{{ item.inst }}</td>
          <td>
            <el-popover placement="bottom" title="详情" width="200" trigger="click" :content="item.destination">
              <el-button slot="reference">点击查看详情</el-button>
            </el-popover>
          </td>
          <td>
            <el-popover placement="bottom" title="详情" width="200" trigger="click" :content="item.reason">
              <el-button slot="reference">点击查看详情</el-button>
            </el-popover>
          </td>
          <td>{{ item.result }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { GetLeavingSchoolAPI } from '@/api/stuAPI.js'
export default {
  name: 'LeaveSchoolHistory',
  data() {
    return {
      // 离校时间
      outTime: '',
      // 返校时间
      comeTime: '',
      // 目的地
      destination: '',
      // 理由
      reason: '',
      // 辅导员
      inst: '',
      // 请假日期
      nowDate: '',
      // 申请状态
      applyStatus: '',
      LeavingSchoolList: [],
    }
  },
  methods: {
    async GetLeavingSchool() {
      const token = localStorage.getItem('token')
      const { data: res } = await GetLeavingSchoolAPI(token)
      // this.outTime = res.data.outtime
      // this.comeTime = res.data.cometime
      // this.inst = res.data.inst
      // this.reason = res.data.reason
      // this.applyStatus = res.data.reason
      // this.destination = res.data.destination
      // this.nowDate = res.data.date
      this.LeavingSchoolList = res.data
    },
  },
  created() {
    this.GetLeavingSchool()
  },
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
      height: 70px;
    }
    // td {
    //   button {
    //     border: none;
    //     background-color: transparent;
    //   }
    // }
  }
}
</style>
