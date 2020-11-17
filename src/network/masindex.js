import {request} from "./request"

export function getMasterInfo() {
  return request({
    url: 'eduMember/findAll'
  })
}