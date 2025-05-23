import axios from "axios";
import { getToken } from "./token";

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
    // 1.获取响应数据
    const data = res.data;
    // 2.判断响应数据是否存在
    if (data) {
      // 3.存在，返回响应数据
      return data;
    } else {
      // 4.不存在，返回错误对象
      return Promise.reject(new Error("响应数据不存在"));
    }
  },
  (err) => {
    // 5.返回错误对象
    return Promise.reject(err);
  }
)

export default request;