import {request} from './request'

export function getRankToplist() {
  return request({
    url:'/toplist'
  })
}

export class Toplist {
  constructor(id,name,coverImgUrl,updateFrequency) {
    this.id = id
    this.name = name
    this.coverImgUrl = coverImgUrl
    this.updateFrequency = updateFrequency
  }
}

export function getTopId(id) {
  return request({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}

export function getMusicUrl(id) {
  return request({
    url:'/song/url',
    params:{
      id
    }
  })
}