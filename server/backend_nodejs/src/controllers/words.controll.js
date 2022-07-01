require("module-alias/register")
const asyncHandler = require("@src/controllers/asyncHandler")
const { createWord, updateWord, deleteWord, findWord } = require("@src/services/words.service")
const { dberrorHandler } = require("./errorHandler")
const { GETALL_SUCCESSFULL, CREATE_SUCCESSFULL, UPDATE_SUCCESSFULL, DETELE_SUCCESSFULL } = require("@src/untils/constants")
const {ResponseDefault} = require("@src/models/reponse.model")

const createWordController = asyncHandler(async (req, res, next) => {
    createWord(req.body,(error, result) => {
        if (error) return dberrorHandler(error, res)
        const { data } = result
        return res.status(200).json(
            new ResponseDefault({data,message:CREATE_SUCCESSFULL})
        )
    })
})

const findWordController = asyncHandler(async (req, res, next) => {
    const {userID} = req.body
    const query = JSON.parse(JSON.stringify(req.query))
    findWord({userID, ...query},(error, result) => {
        if (error) return dberrorHandler(error, res)
        const { data } = result
        return res.status(200).json(
            new ResponseDefault({data,message:GETALL_SUCCESSFULL})
        )
    })
})

const updateWordController = asyncHandler(async (req, res, next) => {
    req.body.wordID = Number(req.params.wordID);
    updateWord(req.body,(error, result) => {
        if (error) return dberrorHandler(error, res)
        const { data } = result
        return res.status(200).json(
            new ResponseDefault({data,message:UPDATE_SUCCESSFULL})
        )
    })
})

const deleteWordController = asyncHandler(async (req, res, next) => {
    req.body.wordID = Number(req.params.wordID);
    deleteWord(req.body,(error, result) => {
        if (error) return dberrorHandler(error, res)
        const { data } = result
        return res.status(200).json(
            new ResponseDefault({data,message:DETELE_SUCCESSFULL})
        )
    })
})

module.exports = {
    createWordController,
    findWordController,
    updateWordController,
    deleteWordController
}