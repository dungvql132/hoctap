require("module-alias/register")
const { fetchdb, fetchdbOneToMany } = require("@src/services/fetchdb")
const { MAKE_QUERY_CREATE_WORDS, MAKE_QUERY_DELETE_WORDS, MAKE_QUERY_FIND_WORDS, MAKE_QUERY_UPDATE_WORDS } = require("@src/untils/dbquery/querywords")
const { CANNOT_FOUND_ERROR } = require("@src/untils/constants")
const { countAll_InDB } = require("@src/services/dbServicesAdvance/countRows")
const { lowercaseKeysinArray } = require("@src/untils/handle/object.handle")
const { MAKE_QUERY_FIND_WORDS_SENTENCE } = require("@src/untils/dbquery/queryWordSentence")
require("dotenv").config();

const findWord_InDB = (dbInput = { userID, word, group, status, page, pagesize, sentences }, callback) => {
    if (dbInput.sentences != "true") {
        return fetchdb(MAKE_QUERY_FIND_WORDS, dbInput, (err, result) => {
            if (err) return callback(err, null)
            const { group, pagesize } = dbInput
            return countAll_InDB({ group, pagesize, data: lowercaseKeysinArray(result) }, 'word', (err, result) => {
                if (err) return callback(err, null)
                return callback(null, result)
            });
        })
    }
    const oneConfig = {
        dbQueryOne: MAKE_QUERY_FIND_WORDS,
        dbInputOne: { ...dbInput }
    }

    const manyConfig = {
        dbQueryMany: MAKE_QUERY_FIND_WORDS_SENTENCE,
        dbInputMany: {}
    }

    const attributeConfigs = [{ one: "ID", many: "wordID" }]

    fetchdbOneToMany(oneConfig, manyConfig, attributeConfigs, 'sentences', (err, result) => {
        if (err) return callback(err, null)
        const { group, pagesize } = dbInput
        return countAll_InDB({ group, pagesize, data: lowercaseKeysinArray(result) }, 'word', (err, result) => {
            if (err) return callback(err, null)
            return callback(null, result)
        });
    });
}
const createWord_InDB = ({ englishmean, vietnammean, userID, word, type, status }, callback) => {
    fetchdb(MAKE_QUERY_CREATE_WORDS, { englishmean, vietnammean, userID, word, type, status }, (err, result) => {
        if (err) return callback(err, null)

        return callback(null, { data: result });
    })
}

const updateWord_InDB = ({ word, type, status, wordID, userID }, callback) => {
    fetchdb(MAKE_QUERY_UPDATE_WORDS, { word, type, status, wordID, userID }, (err, result) => {
        if (err) return callback(err, null)
        if (result['affectedRows'] >= 1) return callback(null, { data: result });
        if (result['affectedRows'] <= 0) return callback(new Error(CANNOT_FOUND_ERROR), null)
    })
}

const deleteWord_InDB = ({ wordID, userID }, callback) => {
    fetchdb(MAKE_QUERY_DELETE_WORDS, { wordID, userID }, (err, result) => {
        if (err) return callback(err, null)

        if (result['affectedRows'] >= 1) return callback(null, { data: result });
        if (result['affectedRows'] <= 0) return callback(new Error(CANNOT_FOUND_ERROR), null)
    })
}

module.exports = {
    createWord_InDB,
    updateWord_InDB,
    deleteWord_InDB,
    findWord_InDB
}