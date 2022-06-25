require("module-alias/register")
const authenController = require("@src/controllers/authentication.controll")
const {validateUser} = require("@src/middleware/authentication.middleware")
const express = require('express');
const app = express();

app.post("/login",validateUser,authenController.loginController)
app.post("/register",validateUser,authenController.registerController)

module.exports = app