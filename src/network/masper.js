import {request} from './request'

export function getPerList() {
  return request({
    url: 'permission'
  })
}