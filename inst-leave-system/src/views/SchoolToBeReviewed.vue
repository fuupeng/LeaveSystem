<template>
  <div id="container">
    <div id="search"><span>学号</span><input type="text" autocomplete="off" /><span id="or">或者</span> <span>姓名</span><input type="text" id="name" v-model="stuName" autocomplete="off" /><button @click="search">搜索</button></div>
    <table class="table table-bordered table-hover table-striped" style="word-break:break-all;word-wrap;break-all" id="">
      <thead>
        <th>#</th>
        <th>班级</th>
        <th>姓名</th>
        <th>学号</th>
        <th>联系电话</th>
        <th>申请日期</th>
        <th>出校时间</th>
        <th>回校时间</th>
        <th>目的地</th>
        <th>原因</th>
        <th>审批</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{ index }}</td>
          <td>{{ item.cla }}</td>
          <td>{{ item.uname }}</td>
          <td>{{ item.uid }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.outtime }}</td>
          <td>{{ item.cometime }}</td>
          <td>
            <el-popover placement="bottom" title="目的地" width="200" trigger="click" :content="item.destination">
              <el-button slot="reference">点击查看原因</el-button>
            </el-popover>
          </td>
          <td>
            <el-popover placement="bottom" title="原因" width="200" trigger="click" :content="item.reason">
              <el-button slot="reference">点击查看原因</el-button>
            </el-popover>
          </td>
          <td>
            <el-button type="text" id="examine" @click="agree(item.id)">同意</el-button>
            <el-button type="danger" id="examine" @click="refuse(item.id)" style="background-color: rgb(245, 108, 108)">拒绝</el-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getLeaveSchoolAPI } from '@/api/instAPI.js'
import { leaveSchoolApplyReviewAPI } from '@/api/instAPI.js'
export default {
  name: 'SchoolToBeReviewed',
  data() {
    return {
      LeaveSchoolList: [],
      stuId: '',
      stuName: ''
    }
  },
  inject: ['reload'],
  methods: {
    // 获取待审核数据数组
    async getLeaveSchool(stuId, stuName) {
      const token = localStorage.getItem('token')
      const { data: res } = await getLeaveSchoolAPI(token, stuId, stuName)
      this.LeaveSchoolList = res.data
    },
    // 审批API
    async LeaveSchoolApplyRevie(id, result) {
      const token = localStorage.getItem('token')
      const { data: res } = await leaveSchoolApplyReviewAPI(token, id, result)
      if (res.status != 200) return false
      return true
    },
    // 搜索按钮
    search() {
      this.getLeaveSchool(this.stuId, this.stuName)
    },
    // 同意按钮
    agree(id) {
      this.$confirm('此操作将同意此申请, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        // 确定
        .then(() => {
          if (this.LeaveSchoolApplyRevie(id, '通过')) {
            this.$notify({
              title: '成功',
              message: '已同意此申请',
              type: 'success'
            })
            // return this.getLeaveSchool()
            return this.reload()
          } else {
            this.$message.error('提交失败，请稍后再试')
          }
        })
        // 取消
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消同意'
          })
        })
    },
    // 拒绝
    refuse(id) {
      this.$confirm('此操作将拒绝此申请, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        // 确定
        .then(() => {
          if (this.LeaveSchoolApplyRevie(id, '不通过')) {
            this.$notify.info({
              title: '成功',
              message: '已拒绝此申请'
            })

            // return this.getLeaveSchool()
            return this.reload()
          } else {
            this.$message.error('提交失败，请稍后再试')
          }
        })
        // 取消
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消拒绝'
          })
        })
    }
  },
  created() {
    this.getLeaveSchool()
  },
  computed: {
    list() {
      return JSON.parse(JSON.stringify(this.LeaveSchoolList))
    }
  }
}
</script>

<style lang="less" scoped>
#container {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0 20px;
  position: absolute;
  left: 200px;
  height: 800px;
  width: calc(100% - 200px);
  min-width: 1200px;
  float: left;
  overflow: auto;
  #search {
    height: 100px;
    background-color: #fff;
    margin-top: 30px;
    margin-left: 17px;
    margin-right: 20px;
    border-radius: 20px;
    font-size: 25px;
    padding: 30px;
    input {
      border-radius: 10px;
      padding-left: 5px;
      margin-left: 20px;
    }
    #or {
      margin-left: 50px;
      margin-right: 50px;
    }
    #name {
      width: 150px;
    }
    button {
      background-color: rgb(74, 153, 254);
      color: #fff;
      border: none;
      width: 100px;
      border-radius: 10px;
      float: right;
      margin-right: 50px;
    }
  }
  table {
    th {
      text-align: center;
      background-color: rgb(210, 210, 210);
      height: 55px;
    }
    font-size: 25px;
    margin-top: 30px;
    text-align: center;
    #examine {
      background-color: rgb(74, 153, 254);
      color: #fff;
      border: none;
      width: 100px;
      border-radius: 10px;
    }
  }
}
</style>
