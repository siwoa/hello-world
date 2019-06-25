import axios from "../axios";
export const userInfo = (params)=>{
    return axios.service({
        url:'/users/login',
        method: 'post',
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