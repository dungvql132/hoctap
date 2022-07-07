const { makequery_COUNT_ROWS } = require("@src/untils/dbquery/queryAll")
const { fetchdb } = require("@src/services/fetchdb")

const countAll_InDB = ({ group, pagesize, data }, dbName, callback) => {
    return fetchdb(makequery_COUNT_ROWS, { dbName, group }, (err, result) => {
        if (err) return callback(err, null)
        if (result.length === 0) return callback(new Error(CANNOT_FOUND_ERROR), null)

        if (result.length !== 0) {
            const totalElement = result.length;
            const mypagesize = (pagesize) ? Number(pagesize) : process.env.PAGE_SIZE;
            const totalPage = Math.ceil(totalElement / mypagesize);
            return callback(null, { data, totalPage, totalElement });
        }
    })
}

module.exports = { countAll_InDB }