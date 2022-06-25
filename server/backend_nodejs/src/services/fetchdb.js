require("module-alias/register")
const connection = require("@src/models/connection")

function fetchdb({sql,value}, callback) {
    connection.query(sql, value, function (err, result) {
        if (err) return callback(err,null)
        return callback(null,result);
    });
}

module.exports = {fetchdb}