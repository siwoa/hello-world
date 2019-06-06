import axios from "axios";
import { Toast } from "mint-ui";
axios.defaults.withCredentials = true;
var service = axios.create({
    // baseURL: 'https://some-domain.com/api/',
    // timeout: 10000,
});
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 请求拦截器
service.interceptors.request.use(function(config) {
    
    return config;
   
  }, function(error) {
    return Promise.reject(error);
  });
  // 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if(response.status === 200){
      if(res.status == 201) {
        Toast(res.msg);
      }
      return res;
    }
  },
  error => {
    console.log(error); // for debug
  
    return Promise.reject(error);
  }
);
export default {
    service
}
