import {request} from './request'

//获取歌单列表
export function getCartList() {
  return request({
    url:'/playlist/catlist'
  })
}


//获取歌曲详情
export function getSongDetails(ids) {
  return request({
    url:'/song/detail',
    params:{
      ids
    }
  })
}

//获取歌曲详情所需参数类
export class SongDetails {
  constructor(id,name,picUrl,alName,atName) {
    this.id = id;
    this.name = name;
    this.picUrl = picUrl;
    this.alName = alName;
    this.atName = atName;
  }
}

//获取歌词
export function getLyric(id) {
  return request({
    url:'/lyric',
    params:{
      id
    }
  })
}

//获取歌曲评论
export function getComment(id,limit=20) {
  return request({
    url:'/comment/music',
    params:{
      id,
      limit
    }
  })
}

