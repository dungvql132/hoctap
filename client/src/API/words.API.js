import {axiosConfig} from "./axiosconfig"

export function getWords({word,group}){
    const link = `/words/?${word?`&word=${word}`:''}${group?`&group=${group}`:''}`
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