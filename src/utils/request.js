import axios from "axios";
import { getToken, removeToken } from "./token";
import {router} from '@/router/AppRouter'
import { message } from 'antd';

const request = axios.create(
  {
    // 根域名配置
    baseURL: "http://geek.itheima.net/v1_0",
    // 超时时间
    timeout: 5_000,
  }
)

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 1.获取token
    const token = getToken()
    // 2.判断token是否存在
    if (token) {
      // 3.存在，设置请求头
      config.headers.Authorization = `Bearer ${token}`;
    }
    // 4.返回配置对象
    return config;
  },
  (err) => {
    // 5.返回错误对象
    return Promise.reject(err);
  }
)

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    // 5.返回错误对象
    if(err.response.status === 401) {
      // 跳转到登录页
      removeToken()
      router.navigate('/login')
      message.error('登录状态无效，请重新登录')
      return Promise.resolve({data: {}})
    }
    return Promise.reject(err);
  }
)

export default request;