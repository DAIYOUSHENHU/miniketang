import {request} from './request'

export function getLecList() {
  return request({
    url: 'eduTeacher/findAll',
    method: 'get',
  })
}

export function getLecListById(id) {
  return request({
    url: 'eduTeacher/getTeacherById/' + id,
    method: 'get',
  })
}

export function deletelec(id) {
  return request({
    url: 'eduTeacher/remove/' + id,
    method: 'delete',
  })
}


export function updatelec(data) {
  return request({
    url: 'eduTeacher/update',
    method: 'post',
    data: JSON.stringify(data),
  })
}