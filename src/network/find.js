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
export function getSearch(keywords,type,limit=30) {
  return request({
    url:'/search',
    params:{
      keywords,
      type,
      limit
    }
  })
}

//获取视频mv信息 
export function getMv(mvid) {
  return request({
    url:'mv/detail',
    params:{
      mvid
    }
  })
}
//获取mv地址
export function getMvAdress(id) {
  return request({
    url:'mv/url',
    params:{
      id
    }
  })
}

//获取mv评论
export function getComment(id,limit=20,offset) {
  return request({
    url:'/comment/mv',
    params: {
      id,
      limit,
      offset
    }
  })
}
//获取视频video信息 
export function getVideo(id) {
  return request({
    url:'video/detail',
    params:{
      id
    }
  })
}
//获取video地址
export function getVideoAdress(id) {
  return request({
    url:'video/url',
    params:{
      id
    }
  })
}

//获取video评论
export function getVideoComments(id,limit=20,offset) {
  return request({
    url:'comment/video',
    params:{
      id,
      limit,
      offset
    }
  })
}


//导出类
export class getItem {
  constructor(name,desc,playTime,creator) {
    this.name = name;
    this.desc = desc;
    this.playTime = playTime;
    this.creator = creator;
  }
}