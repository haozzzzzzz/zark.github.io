import axios from 'axios'
import qs from 'qs'
// 1.创建实例 [配置]
const serve = axios.create({
  baseURL: '', // baseURL api的前面相同的值 例 'http://127.0.0.1:8080'
  timeout: 6500, // request timeout 请求超时
})

// 2.拦截器    //请求头 响应头里面的参数详情
// https://blog.csdn.net/weixin_37861326/article/details/82216068
//  2.1  拦截请求
serve.interceptors.request.use((config) => {
  // ...
  if (localStorage.getItem('token')) {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = localStorage.getItem('token');
  }
  console.log(config, config.headers, config.postType);
  if (config.method === 'post') {
    config.headers = {
      'Content-Type': 'application/json'
    }
  } else {
     if (config.postType && config.postType === 'json') {
      config.headers = {
        'Content-Type': 'application/json'
      }
      // 本来在上面的  这个判断可以替换mtheod==post这里
    }
    if (config.method === 'post' || config.method === 'put') {
      // config.data = qs.stringify(JSON.flatten(config.data))
      config.data = qs.stringify(config.data)

      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }
  return config
}, (error) => {
  // ...
  return Promise.reject(error)
})

// 2.2 拦截响应
serve.interceptors.response.use((response) => {
  // ...
  const res = response.data

  return res
}, (error) => {
  // ...
  return Promise.reject(error)
})

export default serve
