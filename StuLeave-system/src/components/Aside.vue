<template>
  <div id="container">
    <div class="module">
      <img src="@/assets/办事图标.png" alt="" id="abc" />
      <p>请假申请</p>
      <div class="subdirectory">
        <ul>
          <router-link to="/reqLeave"> <li>请假申请</li></router-link>
          <router-link to="/underReview"><li>审核中</li></router-link>
          <router-link to="/leaveSuccess"><li>请假记录</li></router-link>
        </ul>
      </div>
    </div>
    <div class="module">
      <img src="@/assets/出勤图标.png" alt="" id="abc" />
      <p>出勤情况</p>
      <div class="subdirectory">
        <ul>
          <router-link to="/workHistory"><li>出勤记录</li></router-link>
        </ul>
      </div>
    </div>
    <div class="module">
      <img src="@/assets/申请图标.png" alt="" id="abc" />
      <p>出校申请</p>
      <div class="subdirectory">
        <ul>
          <router-link to="/leaveSchool">出校申请</router-link>
          <router-link to="/leaveSchoolReview"><li>审核中</li></router-link>
          <router-link to="/leaveSchoolHistory"><li>出校记录</li></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
#container {
  height: 700px;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.4);

  margin: auto;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  float: left;
  .router-link-active {
    text-decoration: none;
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  .module {
    text-align: center;
    margin-left: 20%;
    margin-top: 50px;
    display: inline-block;
    img {
      width: 16%;
      float: left;
    }
    p {
      float: left;
      margin-left: 5px;
      font-family: '华文琥珀';
      font-size: 25px;
      color: #fff;
      letter-spacing: 5px;
    }
    .subdirectory {
      clear: both;
      margin-top: 50px;
      background-color: rgba(200, 200, 200, 0.4);
      width: 120px;
      margin-left: 10%;
      padding: 20px;
      border-radius: 20px;

      ul {
        list-style-type: none;
        color: #000;
        font-size: 20px;
        margin-top: 5px;
      }
    }
  }
}
</style>
