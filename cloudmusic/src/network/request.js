import axios from 'axios'

export function request(config) {
  //创建axios示例
  const instance = axios.create({
    baseURL:'http://musicapi.leanapp.cn',
    timeout:5000
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {
    return Promise.reject(err)
  })
  //相应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err=> {
    return Promise.reject(err)
  })
  return instance(config)
}