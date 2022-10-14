import axios from 'axios'
const request = axios.create({
  baseURL: 'http://124.221.220.142:8080/leaveSystem/stu/'
})

export default request
