<template>
  <div id="container">
    <div id="headImg">
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc9%2F63%2F77%2Fc963777ebd9c8ebf5583b39565cfa1d7.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652788725&t=3e6f7ad7c8e59a55c9ab68b564ef87eb" alt="" />
    </div>
    <p id="name">辅导员</p>
    <div id="option">
      <p>课程请假</p>
      <ul>
        <router-link to="/currToBeReviewed"><li>待审核</li></router-link>
        <router-link to="/courseLeaveLHistory"><li>审核完成</li></router-link>
      </ul>
    </div>
    <div id="option">
      <p style="margin-top: 30px">离校请假</p>
      <ul>
        <router-link to="/schoolToBeReviewed"><li>待审核</li></router-link>
        <router-link to="/schoolLeaveLHistory"><li>审核完成</li></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aside'
}
</script>

<style lang="less" scoped>
#container {
  height: 800px;
  width: 200px;
  background-color: rgba(50, 58, 79, 0.8);
  float: left;
  text-align: center;
  p {
    cursor: default;
  }
  .router-link-active {
    text-decoration: none;
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  #headImg {
    width: 110px;
    height: 110px;
    border: 1px #fff solid;
    margin: 35px auto;
    border-radius: 200px;
    overflow: hidden;
    border: none;
    img {
      width: 110px;
    }
  }
  #name {
    color: #fff;
    font-size: 25px;
    margin-top: -10px;
  }
  #option {
    p {
      height: 65px;
      width: 100%;
      border: none;
      color: #fff;
      font-size: 30px;
      background-color: rgb(79, 107, 191);
      line-height: 65px;
    }
    ul {
      font-size: 25px;
      background-color: rgba(255, 255, 255, 0.5);
      margin: auto;
      margin-top: 20px;

      padding: 10px 0 20px 0px;
      list-style-type: none;
      width: 170px;
      border-radius: 15px;
      li {
        margin-top: 20px;
        // color: #fff;
      }
    }
  }
}
</style>
