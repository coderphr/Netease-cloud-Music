import {request} from './request'

//获取轮播图信息
export function getFindSwiper() {
  return request({
    url:'banner',
  })
}
//获取热门推荐title
export function getFindHot() {
  return request({
    url:'/playlist/hot'
  })
}
//获取推荐列表
export function getRecomend() {
  return request({
    url:'/personalized',
    params:{
      limit:8
    }
  })
}

//获取新碟列表
export function getRecomendNew() {
  return request({
    url:'/top/album',
    params:{
      limit:30,
      offset:5
    }
  })
}


//获取搜索数据
export function getSearch(keywords,type=1) {
  return request({
    url:'/search',
    params:{
      keywords,
      type
    }
  })
}