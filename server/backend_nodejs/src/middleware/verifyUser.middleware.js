require("module-alias/register")
const asyncHandler = require("@src/controllers/asyncHandler")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const verifyUser = asyncHandler(async (req, res, next) => {
    const accesstoken = req.headers['accesstoken'];
    let user = jwt.verify(accesstoken,process.env.PRIVATE_KEY)
    req.body.userID = user["ID"]
    next();
})

module.exports = {
    verifyUser
}