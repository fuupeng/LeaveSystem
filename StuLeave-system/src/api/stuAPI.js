// 学生相关的API

import request from '@/utils/request.js'
// 按需导出

// 获取学生基本信息
export const getStuInfoAPI = (token) => {
  return request({
    url: '/info',
    method: 'GET',
    headers: {
      Authorization: token
    }
  })
}

// 课程请假申请
export const courseLeaveApplicationAPI = (token, reason, date, teacher, course, phone) => {
  return request({
    url: '/leave',
    method: 'POST',
    headers: {
      Authorization: token
    },
    data: {
      reason,
      date,
      teacher,
      course,
      phone
    }
  })
}

// 课程请假撤回
export const courseLeaveApplicationCallAPI = (token, id) => {
  return request({
    url: 'leavecancel',
    method: 'POST',
    headers: {
      Authorization: token
    },
    data: {
      id
    }
  })
}
// 获取课程请假审核中信息
export const getCourseLeaveReviewAPI = (token) => {
  return request({
    url: 'working',
    method: 'GET',
    headers: {
      Authorization: token
    }
  })
}
// 获取课程老师信息
export const getCoursesInfoAPI = (token) => {
  return request({
    url: '/selectcourse',
    method: 'GET',
    headers: {
      Authorization: token
    }
  })
}

// 出勤查询
export const getStuWorkHistoryAPI = (token) => {
  return request({
    url: '/attendance',
    method: 'GET',
    headers: {
      Authorization: token
    }
  })
}
// 课程请假历史
export const getCourseLeaveHistoryAPI = (token) => {
  return request({
    url: 'history',
    headers: {
      Authorization: token
    }
  })
}
// 出校申请提交
export const SubmitLeavingSchoolAPI = (token, outtime, cometime, destination, reason, inst, phone) => {
  return request({
    url: '/insert',
    method: 'POST',
    headers: {
      Authorization: token
    },
    data: {
      // 出去时间
      outtime,
      // 回来时间
      cometime,
      // 地点
      destination,
      // 理由
      reason,
      // 辅导员
      inst,
      // 手机号码
      phone
    }
  })
}

// 出校申请审核中
export const getLeaveSchoolReviewAPI = (token) => {
  return request({
    url: 'campusworking',
    method: 'GET',
    headers: {
      Authorization: token
    }
  })
}

// 出校申请撤回
export const leaveSchoolCallAPI = (token, id) => {
  return request({
    url: 'cancelworking',
    method: 'POST',
    headers: {
      Authorization: token
    },
    data: {
      id
    }
  })
}

// 出校申请记录查询
export const GetLeavingSchoolAPI = (token) => {
  return request({
    url: '/campushistory',
    method: 'GET',
    headers: {
      Authorization: token
    }
  })
}
