require("module-alias/register")
const wordController = require("@src/controllers/words.controll")
const {verifyUser} = require('@src/middleware/verifyUser.middleware')
const express = require('express');
const app = express();

app.get("/words/",verifyUser,wordController.findWordController)
app.post("/words",verifyUser,wordController.createWordController)
app.put("/words/:wordID",verifyUser,wordController.updateWordController)
app.delete("/words/:wordID",verifyUser,wordController.deleteWordController)

module.exports = app