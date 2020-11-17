import {request} from './request'

export function getClaList() {
  return request({
    url: 'eduSubject/getSubject/list'
  })
}