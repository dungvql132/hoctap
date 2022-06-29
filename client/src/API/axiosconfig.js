import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/api'
export const axiosConfig = axios.create({
    baseURL: process.env.BACKEND_HOST,
    headers: {
        'Content-Type': 'application/json'
    },
})

export default {axiosConfig};