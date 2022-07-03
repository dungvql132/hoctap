import {axiosConfig} from "./axiosconfig"

export function getWords({word,group,page,pagesize}){
    const link = `/words/?${word?`&word=${word}`:''}${group?`&group=${group}`:''}${page?`&page=${page}`:''}${pagesize?`&pagesize=${pagesize}`:''}`
    const accesstoken = localStorage.getItem("accesstoken")
    return axiosConfig.get(link,{
        headers:{
            accesstoken
        }
    })
}

export default {
    getWords
}