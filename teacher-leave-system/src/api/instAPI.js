import request from '@/utils/request.js'

// 获取老师基本信息的API
export const getTeachertInfoAPI = (token) => {
  return request({
    url: '/info',
    method: 'GET',
    headers: {
      Authorization: token
    }
  })
}

// 获取今天请假
export const getLeaveTodayAPI = (token, uid, uname) => {
  return request({
    url: 'queryCurrentLeave',
    method: 'POST',
    headers: {
      Authorization: token
    },
    data: {
      uid,
      uname
    }
  })
}

// 获取请假历史
export const getLeaveHistoryAPI = (token, uid, uname) => {
  return request({
    url: 'queryAllLeave',
    method: 'POST',
    headers: {
      Authorization: token
    },
    data: {
      uid,
      uname
    }
  })
}
