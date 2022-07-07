import { axiosConfig } from "./axiosconfig"
import { makeQueryForAPI } from "src/untils/APIhandle"

export function getWords({ word, group, page, pagesize, sentences }) {
    const query = makeQueryForAPI({ word, group, page, pagesize, sentences })
    const link = `/words/?${query}`
    const accesstoken = localStorage.getItem("accesstoken")
    return axiosConfig.get(link, {
        headers: {
            accesstoken
        }
    })
}

export function createWord({ englishmean, status, type, vietnammean, word }) {
    const link = `/words`
    const accesstoken = localStorage.getItem("accesstoken")
    return axiosConfig.post(link,
        {
            englishmean,
            status,
            type,
            vietnammean,
            word
        },
        {
            headers: {
                accesstoken
            }
        })
}

export default {
    getWords,
    createWord
}