const { eliminate_NullObjectProperties, makeSetSql } = require("./makeQuery")
const {LIMIT} = require("@src/untils/dbquery/queryAll")
require("dotenv").config()

const FIND_WORDS = ({ userID, word, group, page, pagesize }) => {
    const sql = `
    SELECT *   FROM word
    Where word.userID = ? ${word ? 'AND word = ?' : ""}
    ${group ? `Group by ${group}` : ""}
    order by createat
    ${LIMIT({page, pagesize})};
    `
    return {
        sql,
        value: eliminate_NullObjectProperties({ userID, word })
    }
}

const CREATE_WORDS = ({ englishmean, vietnammean, userID, word = '', type = '', status = 'private' }) => {
    return {
        sql: `INSERT INTO word (englishmean,vietnammean,userID,Word,Type,status)
        VALUES (?, ?, ?, ?,?,?);`,
        value: [englishmean, vietnammean, userID, word, type, status]
    }
}

const UPDATE_WORDS = ({ word, type, status, wordID, userID }) => {
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

const DELETE_WORDS = ({ wordID, userID }) => {
    const sql = `DELETE FROM word WHERE word.id = ? AND word.userID = ?;`;
    const value = eliminate_NullObjectProperties({ wordID, userID })
    return {
        sql,
        value
    }
}

module.exports = {
    CREATE_WORDS,
    UPDATE_WORDS,
    DELETE_WORDS,
    FIND_WORDS
}