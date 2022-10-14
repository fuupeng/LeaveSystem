// 辅导员相关的API

import request from '@/utils/request.js'

// 按需导出

// 获取辅导员基本信息
export const getInstInfoAPI = (token) => {
  return request({
    url: '/info',
    method: 'GET',
    headers: {
      Authorization: token
    }
  })
}

// 获取课程待审核信息

export const getCourseLeavePendingApprovalAPI = (token, uid, uname) => {
  return request({
    url: '/queryleave',
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
// 课程请假审批
export const courseExamineAPI = (token, id, result) => {
  return request({
    url: '/examine',
    method: 'POST',
    headers: {
      Authorization: token
    },
    data: {
      id,
      result
    }
  })
}

// 课程请假历史
export const courseHistoryAPI = (token, uid, uname) => {
  return request({
    url: '/queryhistory',
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

// 离校申请数据数组
export const getLeaveSchoolAPI = (token, uid, uname) => {
  return request({
    url: '/querycampus',
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

// 离校申请审核
export const leaveSchoolApplyReviewAPI = (token, id, result) => {
  return request({
    url: '/examinecampus',
    method: 'POST',
    headers: {
      Authorization: token
    },
    data: {
      id,
      result
    }
  })
}

// 离校历史
export const leaveSchoolHistoryAPI = (token, uid, uname) => {
  return request({
    url: '/querycampushistory',
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
