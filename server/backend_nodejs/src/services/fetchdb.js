require("module-alias/register")
const connection = require("@src/models/connection")
const { CANNOT_FOUND_ERROR } = require("@src/untils/constants")

function fetchdb(dbQuery, dbInput, callback) {
    const { sql, value } = dbQuery(dbInput);
    connection.query(sql, value, function (err, result) {
        if (err) return callback(err, null)
        return callback(null, result);
    });
}

function fetchdbRecursion(defaultData, dbInputArray, dbQuery, resultAttribute, start, end, callback) {
    return fetchdb(dbQuery, dbInputArray[start], (err, result) => {
        if (err) return callback(err, null)
        defaultData[start][resultAttribute] = result

        if (start === end - 1) return callback(null, defaultData);

        if (start !== end - 1) return fetchdbRecursion(defaultData, dbInputArray, dbQuery, resultAttribute, start + 1, end, callback)
    })
}

function fetchdbOneToMany(
    oneConfig = {
        dbQueryOne,
        dbInputOne
    },
    manyConfig = {
        dbQueryMany,
        dbInputMany
    },
    attributeConfigs = [],
    resultAttribute,
    callback) {
    const { dbQueryOne, dbInputOne } = oneConfig;
    fetchdb(dbQueryOne, dbInputOne, (err, result) => {
    if (err) return callback(err, null)
    if (result.length === 0) return callback(new Error(CANNOT_FOUND_ERROR), null)
    const dbInputManyArray = []
    result.forEach(element => {
        let dbInputMany = { ...manyConfig.dbInputMany };
        attributeConfigs.forEach(attributeConfig => {
            dbInputMany[attributeConfig["many"]] = element[attributeConfig["one"]] 
        })
        dbInputManyArray.push(dbInputMany);
    });
    return fetchdbRecursion(result, dbInputManyArray, manyConfig.dbQueryMany, resultAttribute, 0, result.length, callback);
    })
}


module.exports = { fetchdb, fetchdbRecursion, fetchdbOneToMany }