const COUNT_ROWS = ({ databaseName,group }) => {
    return {
        sql: `SELECT count(${databaseName}.id) as totalElement FROM ${databaseName}
        ${group ? `Group by ${group}` : "Group by id"};`,
        value: []
    }
}

const LIMIT = ({page, pagesize}) => {
    const size = (pagesize)? Number(pagesize):process.env.PAGE_SIZE;
    let start = 0;
    if(page) {
        start = (Number(page)-1 < 0) ? 0: (Number(page)-1)*size;
    }
    return `${page ? `limit ${start},${size}`:''}`
}   

module.exports = {
    COUNT_ROWS,
    LIMIT
}