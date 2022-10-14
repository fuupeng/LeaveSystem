<template>
  <div id="container">
    <div id="essInfo">
      <h1>基本信息</h1>
      <div id="date"><span>申请日期：</span><input type="date" v-model="nowDate" /></div>
      <div id="name"><span>姓名：</span><input type="text" v-model="stuName" readonly="readonly" /></div>
      <div id="num"><span>学号：</span><input type="text" v-model="stuId" readonly="readonly" /></div>
      <div id="college"><span>所在学院：</span><input type="text" v-model="college" readonly="readonly" /></div>
      <div id="phone"><span>手机号码：</span><input type="text" v-model="phone" /></div>
    </div>
    <div id="appInfo">
      <h1>基本信息</h1>
      <div id="inst"><span>辅导员：</span><input type="text" v-model="inst" readonly="readonly" /></div>
      <div id="termini"><span>目的地：</span><input type="text" v-model="destination" /></div>
      <div id="time"><span>出校时间:</span><input type="date" v-model="outTime" /><span>----</span><input type="date" v-model="comeTime" /></div>
      <div id="reason"><span>申请理由：</span><textarea v-model="reason"></textarea></div>
    </div>
    <div id="promise-box">
      <input type="radio" id="customSwitch" v-model="flag" />
      <label for="customSwitch">本人承诺</label>
      <p>出校期间，本人遵守学校的各项规章制度，准时向辅导员和老师汇报</p>
      <p>如违背以上规定，本人原意接受学校有关规定处理或处分</p>
      <!-- <button @click="Submit">提交申请</button> -->
      <el-button plain @click="Submit"> 提交申请 </el-button>
      <el-button plain @click="resetting"> 重置 </el-button>
    </div>
  </div>
</template>

<script>
import { SubmitLeavingSchoolAPI } from '@/api/stuAPI.js'
import { getStuInfoAPI } from '@/api/stuAPI.js'
export default {
  name: 'LeaveSchool',
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
      // 学生姓名
      stuName: '',
      // 学生学号
      stuId: '',
      // 所在学院
      college: '',
      // 当前日期
      nowDate: '',
      // 手机号码
      phone: '',
      // 单选框
      flag: false
    }
  },
  methods: {
    // 提交申请
    async Submit() {
      if (this.flag === false) return this.$message.error('请勾选单选框')
      if (this.outTime === '' || this.comeTime === '' || this.destination === '' || this.reason === '' || this.inst === '' || this.phone === '') return this.$message.error('请讲信息填写完整')
      const token = localStorage.getItem('token')
      const { data: res } = await SubmitLeavingSchoolAPI(token, this.outTime, this.comeTime, this.destination, this.reason, this.inst, this.phone)
      if (res.status != 200) return alert('申请失败，请稍后再试')
      this.$notify({
        title: '成功',
        message: '出校申请已成功提交',
        type: 'success'
      })
      this.resetting()
    },
    // 获取学生基本信息
    async getStuInfo() {
      const token = localStorage.getItem('token')
      const { data: res } = await getStuInfoAPI(token)

      this.college = res.data.college
      this.stuName = res.data.uname
      this.stuId = res.data.uid
      this.inst = res.data.inst
    },
    // 获取当日日期
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
    resetting() {
      this.phone = ''
      this.destination = ''
      this.outTime = ''
      this.comeTime = ''
      this.reason = ''
    }
  },
  created() {
    this.nowDate = this.getData()
    this.getStuInfo()
  }
}
</script>

<style lang="less" scoped>
#container {
  // overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.8);
  height: 700px;

  border-radius: 20px;
  width: 1700px;
  position: absolute;
  left: 300px;
  width: 1350px;
  min-width: calc(100% - 350px);
  #essInfo {
    h1 {
      margin-left: 37%;
    }
    width: 550px;
    height: 500px;
    background-color: #fff;
    border-radius: 20px;
    float: left;
    margin-left: 100px;
    margin-top: 10px;

    div {
      font-size: 25px;
      margin-top: 20px;
      border: 2px solid black;
      width: 450px;
      border-radius: 20px;
      height: 60px;
      margin-left: 10%;
      overflow: hidden;

      span,
      input {
        line-height: 56px;
        margin-left: 4px;
      }
      span {
        margin-left: 15px;
      }
      input {
        border: none;
        outline: none;
      }
    }
    #college {
      input {
        width: 300px;
      }
    }
    #phone,
    #date {
      input {
        width: 270px;
      }
    }
  }
  #appInfo {
    width: 550px;
    height: 500px;
    background-color: #fff;
    border-radius: 20px;
    position: absolute;
    left: 55%;
    top: 10px;
    h1 {
      margin-left: 37%;
    }
    div {
      font-size: 25px;
      margin-top: 20px;
      border: 2px solid black;
      width: 450px;
      border-radius: 20px;
      height: 60px;
      margin-left: 10%;
      overflow: hidden;
      span,
      input {
        line-height: 56px;
        margin-left: 4px;
      }
      span {
        margin-left: 15px;
      }
      input {
        border: none;
        outline: none;
      }
    }
    #time {
      input {
        width: 130px;
        font-size: 20px;
      }
    }
    #phone,
    #date {
      input {
        width: 270px;
      }
    }
    #reason {
      height: 150px;
      span {
        float: left;
        margin-bottom: 50px;
      }
      textarea {
        border: none;
        height: 100%;
        outline: none;
        width: 300px;
        resize: none;
        margin-top: 10px;
      }
    }
  }
  #promise-box {
    background-color: pink;
    width: 1000px;
    height: 100px;
    float: left;
    border-radius: 20px;
    margin: 10px 260px;
    text-align: center;
    label {
      font-size: 25px;
      margin-left: 10px;
    }
    p {
      font-size: 20px;
      margin-top: -5px;
    }
    button {
      font-size: 25px;
      height: 50px;
      width: 150px;
      border: none;
      border-radius: 20px;
    }
  }
}
</style>
