require("module-alias/register")
const dbErrorRegex = require("@src/untils/errorRegex/dbErrorRegex")
const controllErrorRegex = require("@src/untils/errorRegex/controllErrorRegex")

function dberrorHandler(error, res) {
    if (dbErrorRegex.Duplicate_entry.test(error.message)) {
        const errorObject = /'([^']*)'/.exec(error.message)
        return res.status(406).json(
            {
                error: `Duplicate entry at: ${errorObject[0]}`,
                message: `${errorObject[0]} already exist`
            }
        );
    }

    if (dbErrorRegex.Cannot_found.test(error.message)) {
        return res.status(404).json(
            {
                error: error.message,
                message: error.message
            }
        );
    }

    if (dbErrorRegex.Missing_coloum.test(error.message)) {
        const errorObject = /'([^']*)'/.exec(error.message)
        return res.status(404).json(
            {
                error: `Missing value at: ${errorObject[0]}`,
                message: `${errorObject[0]} must be required`
            }
        );
    }
    return res.status(500).json({ error: "unknow error", message: error.message });
}

function errorHandlerController(error, req, res, next) {
    if (controllErrorRegex.Invalid_token.test(error.message)) {
        return res.status(403).json(
            {
                error: error.message,
                message: error.message
            }
        );
    }
    return res.status(500).json({ error: "unknow error", message: error.message, controller: "yes" });
}

module.exports = {
    dberrorHandler,
    errorHandlerController
}