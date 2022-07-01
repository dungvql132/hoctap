require("module-alias/register");
const authenRouter = require("./authentication.router");
const wordsRouter = require("./words.router");
const express = require('express');
const app = express();

app.use("/authentication",authenRouter)
app.use("",wordsRouter)

module.exports = app