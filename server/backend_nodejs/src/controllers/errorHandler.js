require("module-alias/register")
const dbErrorRegex = require("@src/untils/dbErrorRegex")

function dberrorHandler(error, res) {
    if (dbErrorRegex.Duplicate_entry.test(error.message)) {
        const errorObject = /'([^']*)'/.exec(error.message)
        return res.status(304).json(
            {
                error: dbErrorRegex.Duplicate_entry,
                message: `Duplicate entry at: ${errorObject[0]}`
            });
    }

    if (dbErrorRegex.Cannot_found.test(error.message)) {
        return res.status(404).json(
            {
                error: dbErrorRegex.Cannot_found,
                message: error.message
            }
        );
    }
    return res.status(500).json({ error: "unknow error", message: error.message });
}

function errorHandlerController(error, req, res, next) {
    return res.status(500).json({ error: "unknow error", message: error.message, controller: "yes" });
}

module.exports = {
    dberrorHandler,
    errorHandlerController
}