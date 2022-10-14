const id = document.querySelector('#id')
const pwd = document.querySelector('#pwd')
const submit = document.querySelector('#submit')
const err = document.querySelector('#err')
const rem = document.querySelector('#rem')
// 获取登录人员类型
const type = () => {
  var radio = document.getElementsByName('a')
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      return radio[i].value
    }
  }
}
// 发起Ajax请求
submit.addEventListener('click', async () => {
  if (id.value == '' || pwd.value == '') {
    err.style.display = 'block'
  } else {
    const { data: res } = await axios({
      method: 'post',
      url: 'http://124.221.220.142:8080/leaveSystem/api/login',
      data: {
        uid: id.value,
        psw: pwd.value,
        type: type()
      }
    })
    console.log(res)
    if (res.status != 200) {
      err.style.display = 'block'
    } else {
      // 记住密码
      if (rem.checked) {
        localStorage.setItem('id', id.value)
        localStorage.setItem('pwd', pwd.value)
      } else {
        localStorage.removeItem('id')
        localStorage.removeItem('pwd')
        console.log(111)
      }
      localStorage.setItem('token', res.token)
      if (type() === 'stu') {
        window.location.href = '../stu/index.html'
      } else if (type() === 'inst') {
        window.location.href = '../inst/index.html'
      } else {
        window.location.href = '../teacher/index.html'
      }
    }
  }
})

// 自动获取账号密码
if (localStorage.getItem('id') && localStorage.getItem('pwd')) {
  id.value = localStorage.getItem('id')
  pwd.value = localStorage.getItem('pwd')
}
