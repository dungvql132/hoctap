const express = require('express');
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express();
const router = require("./src/routers")
const {errorHandlerController} = require("./src/controllers/errorHandler")
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use("/api",router)
app.use(errorHandlerController)

app.listen(process.env.PORT || 8080, function () {
    console.log('server is running at port 8080')
})