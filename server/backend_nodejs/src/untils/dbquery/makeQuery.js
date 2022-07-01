function makeSetSql(set){
    let result = 'SET ';
    Object.keys(set).forEach(key => {
        result += set[key] ? `${key} = ?,`:"";
    });
    // xoa dau phay o cuoi cung
    result = result.slice(0, -1);
    return result;
}

function eliminate_NullObjectProperties(obj){
    const result = [];
    Object.keys(obj).forEach(key => {
        if(!!obj[key]) result.push(obj[key])
    });
    return result;
}

module.exports = {
    makeSetSql,
    eliminate_NullObjectProperties
}