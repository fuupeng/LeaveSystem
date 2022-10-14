<template>
  <!-- 请假申请 审核中 -->
  <div id="container">
    <template>
      <div id="college">
        <div>
          <span>学生姓名</span>
          <input type="text" v-model="stuName" disabled="true" />
          <span id="ri"> 辅 导 员 </span>
          <input type="text" v-model="inst" disabled="true" />
        </div>
        <div class="data">
          <span>请假时间</span>
          <input type="date" name="start_time" v-model="nowDate" disabled="true" />
          <span id="ri">课程时间</span>
          <input type="date" name="start_time" v-model="coursesDate" />
        </div>

        <div id="teacher" class="data">
          <span id="le">任课老师</span>
          <select v-model="teacherKey">
            <option v-for="item in coursesInfoList" :key="item.uid">{{ item.uname }}</option>
          </select>
          <span id="ri">课程名称</span>
          <select v-model="courseKey">
            <option v-for="(item, index) in courseList.courses" :key="index">{{ item }}</option>
          </select>
        </div>
        <div class="data">
          <span>手机号码</span>
          <input type="text" class="leju" v-model="phone" />
        </div>
        <div class="data">
          <span id="excuse">申请理由</span>
          <textarea class="leju" id="text" style="resize: none" v-model="reason"></textarea>
        </div>
        <!-- <button type="button" class="btn btn-success" @click="submit">提交</button> -->
        <el-button :plain="true" class="btn btn-success" @click="submit">提交</el-button>
        <el-button :plain="true" class="btn btn-info" @click="resetting" style="margin-left: 200px">重置</el-button>
      </div>
    </template>
  </div>
</template>

<script>
import { getStuInfoAPI } from '@/api/stuAPI.js'
import { getCoursesInfoAPI } from '@/api/stuAPI.js'
import { courseLeaveApplicationAPI } from '@/api/stuAPI.js'
export default {
  data() {
    return {
      // 学生姓名
      stuName: '',
      // 辅导员
      inst: '',
      // 请假当前时间
      nowDate: '',
      // 课程时间
      coursesDate: '',
      // 课程信息
      coursesInfoList: [],
      // 所选老师
      teacherKey: '',
      // 所选老师的课程
      ObjcourseList: '',
      // 所选课程
      courseKey: '',
      // 手机号码
      phone: '',
      // 原因
      reason: ''
    }
  },
  methods: {
    // 学生信息Ajax
    async getStuInfo() {
      const token = localStorage.getItem('token')
      const { data: res } = await getStuInfoAPI(token)

      if (res.status != 200) return alert('获取信息失败')
      this.stuName = res.data.uname
      this.inst = res.data.inst
    },
    // 课程信息Ajax
    async getCoursesInfo() {
      const token = localStorage.getItem('token')
      const { data: res } = await getCoursesInfoAPI(token)

      this.coursesInfoList = res.data
    },
    getData() {
      var char = '-'
      const nowDate = new Date()
      const day = nowDate.getDate()
      var month = nowDate.getMonth() + 1 //注意月份需要+1
      var year = nowDate.getFullYear()
      //补全0，并拼接
      return year + char + this.completeDate(month) + char + this.completeDate(day)
    },
    //补全0
    completeDate(value) {
      return value < 10 ? '0' + value : value
    },
    // 提交按钮
    async submit() {
      const token = localStorage.getItem('token')
      if (this.reason === '' || this.coursesDate === '' || this.teacherKey === '' || this.courseKey === '' || this.phone === '') {
        return this.$message({
          message: '请填写完整信息',
          type: 'warning'
        })
      }
      const { data: res } = await courseLeaveApplicationAPI(token, this.reason, this.coursesDate, this.teacherKey, this.courseKey, this.phone)

      if (res.status != 200) return this.$message.error('申请失败')
      this.$notify({
        title: '成功',
        message: '请假信息提交成功',
        type: 'success'
      })
      this.resetting()
    },
    // 重置按钮
    resetting() {
      this.coursesDate = ''
      this.teacherKey = ''
      this.phone = ''
      this.reason = ''
    }
  },
  computed: {
    // 返回所选老师的课程
    courseList() {
      // return this.coursesInfoList[0].course
      this.ObjcourseList = this.coursesInfoList.filter((item) => item.uname === this.teacherKey)[0]
      if (this.ObjcourseList === undefined) {
        return []
      } else {
        return JSON.parse(JSON.stringify(this.ObjcourseList))
      }
    }
  },
  created() {
    this.getStuInfo()
    this.getCoursesInfo()
    this.nowDate = this.getData()
  }
}
</script>
<style lang="less" scoped>
#container {
  background-color: rgba(255, 255, 255, 0.8);
  height: 700px;
  border-radius: 20px;
  left: 300px;
  position: relative;
  width: calc(100% - 350px);
  min-width: 1200px;
  // min-width: 1530px;
}
button {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  margin-left: 200px;
  margin-top: 50px;
}
.leju {
  text-align: left !important;
  padding-left: 15px;
}
#college {
  position: absolute;
  top: 10%;
  left: 20%;
  .data {
    margin-top: 25px;
    .time {
      margin-left: 146px;
    }
  }
  #le {
    margin-right: 25px;
    font-size: 20px;
  }
  span {
    font-size: 20px;
    margin-right: 25px;
  }
  #ri {
    margin-left: 40px;
    margin-right: 25px;
    font-size: 20px;
  }
  textarea,
  select,
  input {
    width: 300px;
    height: 50px;
    border-radius: 20px;
    font-size: 20px;
    text-align: center;
  }
  #text {
    width: 400px;
    height: 100px;
  }
  #excuse {
    position: relative;
    bottom: 40px;
  }
}
</style>
