<template>
  <div id="container">
    <div id="search"><span>学号</span><input type="text" v-model="stuId" autocomplete="off" /><span id="or">或者</span> <span>姓名</span><input type="text" id="name" v-model="stuName" autocomplete="off" /><button @click="search">搜索</button></div>
    <table class="table table-bordered table-hover table-striped" style="word-break:break-all;word-wrap;break-all" id="">
      <thead>
        <th>#</th>
        <th>班级</th>
        <th>姓名</th>
        <th>学号</th>
        <th>联系电话</th>
        <th>申请日期</th>
        <th>课程日期</th>
        <th>原因</th>
        <th>结果</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{ index }}</td>
          <td>{{ item.cla }}</td>
          <td>{{ item.uname }}</td>
          <td>{{ item.uid }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.nowdate }}</td>
          <td>{{ item.date }}</td>
          <td>
            <el-popover placement="bottom" title="详情" width="200" trigger="click" :content="item.reason">
              <el-button slot="reference">点击查看原因</el-button>
            </el-popover>
          </td>
          <td>
            <el-button type="text" id="examine" v-if="item.result === '通过'">同意</el-button>
            <el-button type="danger" id="examine" v-if="item.result === '不通过'" style="background-color: rgb(245, 108, 108)">拒绝</el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination layout="prev, pager, next" :total="500" @prev-click="prevClick"> </el-pagination>
    </div> -->
  </div>
</template>

<script>
import { courseHistoryAPI } from '@/api/instAPI.js'
export default {
  name: 'CourseLeaveLHistory',
  data() {
    return {
      courseHistoryList: [],
      stuId: '',
      stuName: ''
    }
  },
  methods: {
    // 发起Ajax
    async courseHistory(uid, uname) {
      const token = localStorage.getItem('token')
      const { data: res } = await courseHistoryAPI(token, uid, uname)
      this.courseHistoryList = res.data
    },
    // 搜索按钮
    search() {
      this.courseHistory(this.stuId, this.stuName)
    },
    prevClick() {
      console.log(1111)
    }
  },
  created() {
    this.courseHistory()
  },
  computed: {
    list() {
      return JSON.parse(JSON.stringify(this.courseHistoryList))
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
      cursor: default;
    }
  }
  .block {
    position: absolute;
    bottom: 0px;
  }
}
</style>
