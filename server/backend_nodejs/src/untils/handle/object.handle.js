const lowercaseKeys = obj =>
    Object.keys(obj).reduce((acc, key) => {
        acc[key.toLowerCase()] = obj[key];
        return acc;
    }, {});

const lowercaseKeysinArray = array => {
    return array.map((value)=>{
        return lowercaseKeys(value)
    })
}

module.exports = {
    lowercaseKeys,
    lowercaseKeysinArray
}