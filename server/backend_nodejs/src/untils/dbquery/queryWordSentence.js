const { eliminate_NullObjectProperties, makeSetSql } = require("./makeQuery")
require("dotenv").config()

const MAKE_QUERY_FIND_WORDS_SENTENCE = ({ wordID }) => {
    const databaseTable = '`word-sentences`'
    const sql = `
    SELECT * FROM ${databaseTable}
    ${wordID?"Where wordID = ?":''};
    `
    return {
        sql,
        value: eliminate_NullObjectProperties({
            wordID
        })
    }
}

const MAKE_QUERY_CREATE_WORDS_SENTENCE = ({ englishmean, vietnammean, userID, word = '', type = '', status = 'private' }) => {
    return {
        sql: `INSERT INTO word (englishmean,vietnammean,userID,word,type,status)
        VALUES (?, ?, ?, ?,?,?);`,
        value: [englishmean, vietnammean, userID, word, type, status]
    }
}

const MAKE_QUERY_UPDATE_WORDS_SENTENCE = ({ word, type, status, wordID, userID }) => {
    console.log("userID: ", userID);
    const sql = `UPDATE word 
    ${makeSetSql({ word, type, status })}
    WHERE word.id = ? AND word.userID = ?;`;
    const value = eliminate_NullObjectProperties({ word, type, status, wordID, userID })
    return {
        sql,
        value
    }
}

const MAKE_QUERY_DELETE_WORDS_SENTENCE = ({ wordID, userID }) => {
    const sql = `DELETE FROM word WHERE word.id = ? AND word.userID = ?;`;
    const value = eliminate_NullObjectProperties({ wordID, userID })
    return {
        sql,
        value
    }
}

module.exports = {
    MAKE_QUERY_CREATE_WORDS_SENTENCE,
    MAKE_QUERY_UPDATE_WORDS_SENTENCE,
    MAKE_QUERY_DELETE_WORDS_SENTENCE,
    MAKE_QUERY_FIND_WORDS_SENTENCE
}