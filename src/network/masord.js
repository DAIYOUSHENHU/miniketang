import {request} from './request'

export function getOrdList() {
  return request({
    url: 'orders'
  })
}