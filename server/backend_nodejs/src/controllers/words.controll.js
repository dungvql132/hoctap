require("module-alias/register")
const asyncHandler = require("@src/controllers/asyncHandler")
const { createWord_InDB, deleteWord_InDB, findWord_InDB, updateWord_InDB } = require("@src/services/words.service")
const { dberrorHandler } = require("./errorHandler")
const { GETALL_SUCCESSFULL, CREATE_SUCCESSFULL, UPDATE_SUCCESSFULL, DETELE_SUCCESSFULL } = require("@src/untils/constants")
const { ResponseDefault, ResponsePaging } = require("@src/models/reponse.model")

const createWordController = asyncHandler(async (req, res, next) => {
    createWord_InDB(req.body, (error, result) => {
        if (error) return dberrorHandler(error, res)
        return res.status(200).json(
            new ResponseDefault({ ...result, message: CREATE_SUCCESSFULL })
        )
    })
})

const findWordController = asyncHandler(async (req, res, next) => {
    const { userID } = req.body
    const query = JSON.parse(JSON.stringify(req.query))
    findWord_InDB({ userID, ...query }, (error, result) => {
        if (error) return dberrorHandler(error, res)
        return res.status(200).json(
            new ResponsePaging({ ...result, message: GETALL_SUCCESSFULL })
        )
    })
})

const updateWordController = asyncHandler(async (req, res, next) => {
    req.body.wordID = Number(req.params.wordID);
    updateWord_InDB(req.body, (error, result) => {
        if (error) return dberrorHandler(error, res)
        return res.status(200).json(
            new ResponseDefault({ ...result, message: UPDATE_SUCCESSFULL })
        )
    })
})

const deleteWordController = asyncHandler(async (req, res, next) => {
    req.body.wordID = Number(req.params.wordID);
    deleteWord_InDB(req.body, (error, result) => {
        if (error) return dberrorHandler(error, res)
        const { data } = result
        return res.status(200).json(
            new ResponseDefault({ data, message: DETELE_SUCCESSFULL })
        )
    })
})

module.exports = {
    createWordController,
    findWordController,
    updateWordController,
    deleteWordController
}