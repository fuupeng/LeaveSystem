<template>
  <!-- 审核中 -->
  <div id="container">
    <table class="table table-bordered table-hover table-striped" id="">
      <thead>
        <th>#</th>
        <th>申请日期</th>
        <th>课程</th>
        <th>课程时间</th>

        <th>教师</th>
        <th>辅导员</th>
        <th>原因</th>
        <th>申请情况</th>
        <th>撤回</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{ index }}</td>
          <td>{{ item.nowdate }}</td>
          <td>{{ item.course }}</td>
          <td>{{ item.date }}</td>

          <td>{{ item.teacher }}</td>
          <td>{{ item.inst }}</td>
          <td><el-button type="text" @click="open(item.reason)">点击查看</el-button></td>
          <td>申请中</td>
          <td><el-button type="text" @click="recall(item.id)">点击撤回</el-button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getCourseLeaveReviewAPI } from '@/api/stuAPI.js'
import { courseLeaveApplicationCallAPI } from '@/api/stuAPI.js'
export default {
  name: 'UnderReview',
  data() {
    return {
      courseLeaveReviewList: []
    }
  },
  inject: ['reload'],
  methods: {
    async getCourseLeaveReview() {
      const token = localStorage.getItem('token')
      const { data: res } = await getCourseLeaveReviewAPI(token)
      this.courseLeaveReviewList = res.data
    },
    // 撤回课程请假api
    async courseLeaveApplicationCall(id) {
      const token = localStorage.getItem('token')

      const { data: res } = await courseLeaveApplicationCallAPI(token, id)

      if (res.status != 200) {
        return this.$notify.error({
          title: '错误',
          message: '撤回失败，请稍后再试'
        })
      }
    },
    // 点击查询原因
    open(reason) {
      this.$alert(reason, '原因', {
        // center: true,
        confirmButtonText: '确定'
      })
    },
    // 撤回按钮
    recall(id) {
      this.$confirm('此操作将撤回请假信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.courseLeaveApplicationCall(id)
          this.$notify({
            title: '成功',
            message: '已撤回此申请',
            type: 'success'
          })
          // return this.getCourseLeaveReview()
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
    this.getCourseLeaveReview()
  },
  computed: {
    list() {
      return this.courseLeaveReviewList
    }
  }
}
</script>

<style lang="less" scoped>
#container {
  background-color: rgba(255, 255, 255, 0.8);
  height: 700px;
  border-radius: 20px;
  position: absolute;
  left: 300px;
  width: calc(100% - 320px);
  min-width: 1200px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  table {
    font-size: 25px;
    text-align: center;
    th {
      text-align: center;
      background-color: rgba(134, 138, 147, 0.6);
      height: 60px;
    }
  }
}
</style>
