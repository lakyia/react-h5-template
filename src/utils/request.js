import axios from "axios";
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url  如果使用 mock 去掉此项
  withCredentials: false,
  crossDomain: true,
  timeout: 10000, // request timeout
});
// request拦截器 request interceptor
service.interceptors.request.use(
  (config) => {
    // 设置用户token
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    console.log("response-->", res);
    if (res.status && res.status !== 200) {
    } else {
      if (res.code === 200 || res.message === "SUCCESS") {
        return Promise.resolve(res);
      } else if (res.code === 305 || res.code === 306) {
        Promise.reject(res || "error");
        return;
      } else {
        return Promise.reject(res || "error");
      }
    }
  },
  (error) => {
    console.log("request error" + error, typeof error); // for debug
    return Promise.reject(error);
  }
);

export default service;
