import {axiosConfig} from "./axiosconfig"

export function loginAPI({email,password}){
    return axiosConfig.post('/authentication/login',{email,password})
}

export function registerAPI({email,password,name}){
    return axiosConfig.post('/authentication/register',{email,password,name})
}

export default {
    loginAPI,
    registerAPI
}