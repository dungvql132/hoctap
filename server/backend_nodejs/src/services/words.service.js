require("module-alias/register")
const { fetchdb } = require("@src/services/fetchdb")
const { CREATE_WORDS, UPDATE_WORDS, DELETE_WORDS, FIND_WORDS } = require("@src/untils/dbquery/querywords")
const { CANNOT_FOUND_ERROR } = require("@src/untils/constants")
const { lowercaseKeys, lowercaseKeysinArray } = require("@src/untils/handle/object.handle")

const findWord = ({ userID, word, group }, callback) => {
    fetchdb(FIND_WORDS({ userID, word, group }), (err, result) => {
        if (err) return callback(err, null)

        if (result.length === 0) return callback(new Error(CANNOT_FOUND_ERROR), null)

        if (result.length !== 0) {
            return callback(null, { data: lowercaseKeysinArray(result) });
        }
    })
}

const createWord = ({ translateID, userID, word, type, status }, callback) => {
    fetchdb(CREATE_WORDS({ translateID, userID, word, type, status }), (err, result) => {
        if (err) return callback(err, null)

        return callback(null, { data: result });
    })
}

const updateWord = ({ word, type, status, wordID, userID }, callback) => {
    fetchdb(UPDATE_WORDS({ word, type, status, wordID, userID }), (err, result) => {
        if (err) return callback(err, null)
        if (result['affectedRows'] >= 1) return callback(null, { data: result });
        if (result['affectedRows'] <= 0) return callback(new Error(CANNOT_FOUND_ERROR), null)
    })
}

const deleteWord = ({ wordID, userID }, callback) => {
    fetchdb(DELETE_WORDS({ wordID, userID }), (err, result) => {
        if (err) return callback(err, null)

        if (result['affectedRows'] >= 1) return callback(null, { data: result });
        if (result['affectedRows'] <= 0) return callback(new Error(CANNOT_FOUND_ERROR), null)
    })
}

module.exports = {
    createWord,
    updateWord,
    deleteWord,
    findWord
}