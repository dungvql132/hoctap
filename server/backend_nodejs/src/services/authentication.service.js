require("module-alias/register")
const randIdGenerator = require('rand-id-generator')
const { fetchdb } = require("@src/services/fetchdb")
const bcrypt = require("bcrypt")
const { CHECKUSER, INSERTUSER } = require("@src/untils/querydbadvan")
const {QUERY_ERROR,CANNOT_FOUND_ERROR} = require("@src/untils/constants")
const jwt = require("jsonwebtoken")
require('dotenv').config();

async function login({ email, password }, callback) {
    const hashPassword = bcrypt.hashSync(password, process.env.SALT);
    fetchdb(CHECKUSER({ email, password:hashPassword }), (err, result) => {
        if (err) return callback(err, null)
        if (result.length == 1) {
            const { email, type, refreshtoken} = result[0];
            accesstoken = jwt.sign({ email, type }, process.env.PRIVATE_KEY);
            return callback(null, {accesstoken,refreshtoken});
        }

        if(result.length == 0) return callback(new Error(CANNOT_FOUND_ERROR), null)
        return callback(new Error(QUERY_ERROR), null)
    })
}

async function register({ email, password, birthday, phone, address, name, type }, callback) {
    const hashPassword = bcrypt.hashSync(password, process.env.SALT);
    const refreshtoken = jwt.sign(randIdGenerator(30),process.env.RF_PRIVATE_KEY)
    fetchdb(INSERTUSER({ email, password:hashPassword, birthday, phone, address, name, type, refreshtoken}), (err, result) => {
        if (err) return callback(err, null)
        if(result.affectedRows === 1){
            accesstoken = jwt.sign({ email, type }, process.env.PRIVATE_KEY);
            return callback(null, {accesstoken,refreshtoken});
        }
        if(result.length == 0) return callback(new Error(CANNOT_FOUND_ERROR), null)
        return callback(new Error(QUERY_ERROR), null)
    })
}

module.exports = {
    login,
    register
}