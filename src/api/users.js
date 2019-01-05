import request from '@/utils/request'

export function selectById (workflowVo) {
  return request({
    url: '/users/getById',
    method: 'post',
    data: workflowVo
    // params: workflowVo
  })
}

export function usersLogin (workflowVo) {
  return request({
    url: '/users/login',
    method: 'post',
    data: workflowVo
    // params: workflowVo
  })
}

export function usersRegister (workflowVo) {
  return request({
    url: '/users/register',
    method: 'post',
    data: workflowVo
    // params: workflowVo
  })
}

export function saveSession (workflowVo) {
  return request({
    url: '/users/saveSession',
    method: 'post',
    params: workflowVo
    // params: workflowVo
  })
}

export function getSession (workflowVo) {
  return request({
    url: '/users/getSession',
    method: 'post',
    params: workflowVo
    // params: workflowVo
  })
}
