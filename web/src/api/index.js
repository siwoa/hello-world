import axios from "../axios";
export const userInfo = (params)=>{
    return axios.service({
        url:'/users/login',
        method: 'get',
        params
    })
}
export const register = (params)=>{
    return axios.service({
        url:'/users/register',
        method: 'post',
        params
    })
}