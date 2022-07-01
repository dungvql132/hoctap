const { eliminate_NullObjectProperties, makeSetSql } = require("./makeQuery")

const FIND_WORDS = ({ userID, word, group }) => {
    const sql = `
    SELECT word.Word,word.Type,translate.Englishmean,translate.Vietnammean,word.createat,word.lastupdated
    FROM word
    INNER JOIN translate
    ON word.translateID = translate.ID
    Where word.userID = ? ${word ? 'AND word = ?':""}
    ${group ? `Group by ${group}`:""};
    `
    return {
        sql,
        value: eliminate_NullObjectProperties({ userID,word })
    }
}

const CREATE_WORDS = ({ translateID, userID, word = '', type = '', status = 'private' }) => {
    return {
        sql: `INSERT INTO word (translateID,userID,Word,Type,status)
        VALUES (?, ?, ?, ?,?);`,
        value: [translateID, userID, word, type, status]
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