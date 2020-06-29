import {request} from './request'

export function getFindSwiper() {
  return request({
    url:'/banner'
  })
}

export function getFindHot() {
  return request({
    url:'/playlist/hot'
  })
}

export function getRecomend() {
  return request({
    url:'/personalized',
    params:{
      limit:8
    }
  })
}