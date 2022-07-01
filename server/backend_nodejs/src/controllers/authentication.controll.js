require("module-alias/register")
const asyncHandler = require("@src/controllers/asyncHandler")
const { login, register } = require("@src/services/authentication.service")
const { dberrorHandler } = require("./errorHandler")
const { LOGIN_SUCCESSFULL, REGISTER_SUCCESSFULL } = require("@src/untils/constants")
const {ResponseAuthentication} = require("@src/models/reponse.model")

const loginController = asyncHandler(async (req, res, next) => {
    login(req.body, (error, result) => {
        if (error) return dberrorHandler(error, res)
        const { accesstoken, refreshtoken} = result
        return res.status(200).json(
            new ResponseAuthentication({accesstoken,refreshtoken,message:LOGIN_SUCCESSFULL})
        )
    })
})

const registerController = asyncHandler(async (req, res, next) => {
    register(req.body, (error, result) => {
        if (error) return dberrorHandler(error, res)
        const { accesstoken,refreshtoken } = result
        return res.status(201).json(
            new ResponseAuthentication({accesstoken,refreshtoken,message:REGISTER_SUCCESSFULL})
        )
    })
})

module.exports = {
    loginController,
    registerController
}