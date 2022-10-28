// axios
import request from "@/utils/request";

//################### #使用mock时不设置baseURL ####################//
import axios from "axios";
// create an axios instance
const service = axios.create({
  //baseURL: baseApi, // url = base api url + request url  如果使用 mock 去掉此项
  withCredentials: false, // send cookies when cross-domain requests
  crossDomain: true,
  timeout: 10000, // request timeout
});
export function getCaptchaMock(params) {
  return service({
    url: "/user/captcha/getCaptcha",
    withCredentials: false,
    method: "get",
    params,
  });
}
//################### #使用mock时不设置baseURL ####################//

export function getCaptcha(params) {
  return request({
    url: "/user/captcha/getCaptcha",
    withCredentials: false,
    method: "get",
    params,
  });
}
