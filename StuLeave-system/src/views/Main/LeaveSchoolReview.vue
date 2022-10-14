<template>
  <!-- 离校审核中 -->
  <div id="container">
    <table class="table table-bordered table-hover table-striped" style="word-break:break-all;word-wrap;break-all" id="">
      <thead>
        <th>#</th>
        <th>申请日期</th>
        <th>出校时间</th>
        <th>回校时间</th>
        <th>辅导员</th>
        <th>目的地</th>
        <th>原因</th>
        <th>申请情况</th>
        <th>撤回</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
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
          <td><el-button type="text" @click="recall(item.id)">点击撤回</el-button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getLeaveSchoolReviewAPI } from '@/api/stuAPI.js'
import { leaveSchoolCallAPI } from '@/api/stuAPI.js'
export default {
  name: 'LeaveSchoolReview',
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
      LeavingSchoolList: []
    }
  },
  inject: ['reload'],
  methods: {
    // 获取离校申请中的数组
    async getLeavingSchool() {
      const token = localStorage.getItem('token')
      const { data: res } = await getLeaveSchoolReviewAPI(token)

      this.LeavingSchoolList = res.data
    },
    // 撤回api
    async leaveSchoolCall(id) {
      const token = localStorage.getItem('token')
      const { data: res } = await leaveSchoolCallAPI(token, id)
      if (res.status != 200) {
        return this.$notify.error({
          title: '错误',
          message: '撤回失败，请稍后再试'
        })
      }
      // location.reload()
      return this.reload()
    },
    // 撤回按钮
    recall(id) {
      this.$confirm('此操作将撤回请假信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.leaveSchoolCall(id)
          this.$notify({
            title: '成功',
            message: '已撤回此申请',
            type: 'success'
          })
          return this.reload()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消撤回'
          })
        })
    }
  },
  created() {
    this.getLeavingSchool()
  },
  computed: {
    list() {
      return this.LeavingSchoolList
    }
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
      height: 70px;
    }
    td {
      button {
        border: none;
        background-color: transparent;
        font-size: 15px;
      }
    }
  }
}
</style>
