require("module-alias/register")
const randIdGenerator = require('rand-id-generator')
const { fetchdb } = require("@src/services/fetchdb")
const bcrypt = require("bcrypt")
const { MAKE_QUERY_CHECKUSER, MAKE_QUERY_INSERTUSER } = require("@src/untils/dbquery/queryUser")
const { QUERY_ERROR, CANNOT_FOUND_ERROR } = require("@src/untils/constants")
const jwt = require("jsonwebtoken")
require('dotenv').config();

function login(dbInput = { email, password }, callback) {
    const hashPassword = bcrypt.hashSync(password, process.env.SALT);
    fetchdb(MAKE_QUERY_CHECKUSER, { ...dbInput, password: hashPassword }, (err, result) => {
        if (err) return callback(err, null)
        if (result.length == 1) {
            const { ID, email, type, refreshtoken } = result[0];
            accesstoken = jwt.sign({ type, ID, email }, process.env.PRIVATE_KEY);

            return callback(null, { accesstoken, refreshtoken });
        }

        if (result.length == 0) return callback(new Error(CANNOT_FOUND_ERROR), null)
        return callback(new Error(QUERY_ERROR), null)
    })
}

function register(dbInput = { email, password, birthday, phone, address, name, type }, callback) {
    const hashPassword = bcrypt.hashSync(dbInput.password, process.env.SALT);
    const refreshtoken = jwt.sign(randIdGenerator(30), process.env.RF_PRIVATE_KEY)
    fetchdb(MAKE_QUERY_INSERTUSER, { ...dbInput, refreshtoken }, (err, result) => {
        if (err) return callback(err, null)
        if (result.affectedRows === 1) {
            const { email, type } = dbInput
            accesstoken = jwt.sign({ email, type, ID: result.insertId }, process.env.PRIVATE_KEY);
            return callback(null, { accesstoken, refreshtoken });
        }
        if (result.length == 0) return callback(new Error(CANNOT_FOUND_ERROR), null)
        return callback(new Error(QUERY_ERROR), null)
    })
}

module.exports = {
    login,
    register
}