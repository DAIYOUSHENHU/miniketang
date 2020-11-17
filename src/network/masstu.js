import {request} from "./request"

export function memFindAll() {
  return request({
    url: 'eduMember/findAll',
    method: 'get',
  })
}

export function memFindById(id) {
  return request({
    url: 'eduMember/find/' + id,
    method: 'get',
  })
}


export function deletestu(id) {
  return request({
    url: 'eduMember/remove/' + id,
    method: 'delete',
  })
}
export function memUpdate(form) {
  return request({
    url: 'eduMember/update',
    method: 'put',
    data: JSON.stringify(form)
  })
}