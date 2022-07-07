export const makeQueryForAPI = (obj) => {
    let result = ''
    Object.keys(obj).forEach(key => {
        if (obj[key] != null) result += `&${key}=${obj[key]}`
    })
    return result;
}

export default {
    makeQueryForAPI
}