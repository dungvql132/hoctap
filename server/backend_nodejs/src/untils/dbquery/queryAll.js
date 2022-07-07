const makequery_COUNT_ROWS = ({ dbName,group }) => {
    return {
        sql: `SELECT count(${dbName}.id) as totalElement FROM ${dbName}
        ${group ? `Group by ${group}` : "Group by id"};`,
        value: []
    }
}

const makequery_LIMIT = ({page, pagesize}) => {
    const size = (pagesize)? Number(pagesize):process.env.PAGE_SIZE;
    let start = 0;
    if(page) {
        start = (Number(page)-1 < 0) ? 0: (Number(page)-1)*size;
    }
    return `${page ? `limit ${start},${size}`:''}`
}   

module.exports = {
    makequery_COUNT_ROWS,
    makequery_LIMIT
}