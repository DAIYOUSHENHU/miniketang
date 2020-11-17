import {request} from './request'

export function getExaList() {
  return request({
    url: 'courses/examine'
  })
}