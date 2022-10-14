<template>
  <!-- 请假完成 -->
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
      </thead>
      <tbody>
        <tr v-for="(item, index) in courseLeaveHistoryList" :key="item.id">
          <td>{{ index }}</td>
          <td>{{ item.nowdate }}</td>
          <td>{{ item.course }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.teacher }}</td>
          <td>{{ item.inst }}</td>

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
import { getCourseLeaveHistoryAPI } from '@/api/stuAPI.js'
export default {
  name: 'LeaveSuccess',
  data() {
    return {
      courseLeaveHistoryList: []
    }
  },
  methods: {
    async getCourseLeaveHistory() {
      const token = localStorage.getItem('token')
      const { data: res } = await getCourseLeaveHistoryAPI(token)
      if (res.status != 200) {
        return this.$notify.error({
          title: '查询失败',
          message: '撤回失败，请稍后再试'
        })
      }
      this.courseLeaveHistoryList = res.data
    }
    // 原因查询
    // open(reason) {
    //   this.$alert(reason, '原因', {
    //     // center: true,
    //     confirmButtonText: '确定'
    //   })
    // }
  },
  created() {
    this.getCourseLeaveHistory()
  }
}
</script>

<style lang="less" scoped>
#container {
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  left: 300px;
  background-color: rgba(255, 255, 255, 0.8);
  height: 700px;
  border-radius: 20px;
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
  }
}
</style>
