const { eliminate_NullObjectProperties, makeSetSql } = require("./makeQuery")
const { makequery_LIMIT } = require("@src/untils/dbquery/queryAll")
require("dotenv").config()

const MAKE_QUERY_FIND_WORDS = ({ userID = 0, word, group, status, page, pagesize }) => {
    const sql = `
    SELECT * FROM word
    Where ${(status === 'public') ? 'status = ?' : 'word.userID = ?'} ${word ? 'AND word = ?' : ""}
    ${group ? `Group by ${group}` : ""}
    order by createat
    ${page ? makequery_LIMIT({ page, pagesize }) : ''};
    `
    return {
        sql,
        value: eliminate_NullObjectProperties({
            userID: (status === 'public') ? null : userID,
            status: (status === 'public') ? status : null,
            word
        })
    }
}

const MAKE_QUERY_CREATE_WORDS = ({ englishmean = '', vietnammean = '', userID = 0, word = '', type = '', status = 'private' }) => {
    return {
        sql: `INSERT INTO word (englishmean,vietnammean,userID,word,type,status)
        VALUES (?, ?, ?, ?,?,?);`,
        value: [englishmean, vietnammean, userID, word, type, status]
    }
}

const MAKE_QUERY_UPDATE_WORDS = ({ word = 0, type, status, wordID, userID = 0 }) => {
    const sql = `UPDATE word 
    ${makeSetSql({ word, type, status })}
    WHERE word.id = ? AND word.userID = ?;`;
    const value = eliminate_NullObjectProperties({ word, type, status, wordID, userID })
    return {
        sql,
        value
    }
}

const MAKE_QUERY_DELETE_WORDS = ({ wordID = 0, userID = 0 }) => {
    const sql = `DELETE FROM word WHERE word.id = ? AND word.userID = ?;`;
    const value = eliminate_NullObjectProperties({ wordID, userID })
    return {
        sql,
        value
    }
}

module.exports = {
    MAKE_QUERY_CREATE_WORDS,
    MAKE_QUERY_UPDATE_WORDS,
    MAKE_QUERY_DELETE_WORDS,
    MAKE_QUERY_FIND_WORDS
}