require("module-alias/register");
const authenRouter = require("./authentication.router");
const express = require('express');
const app = express();

app.use("/authentication",authenRouter)

module.exports = app