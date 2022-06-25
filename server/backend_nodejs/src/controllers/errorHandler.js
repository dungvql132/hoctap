require("module-alias/register")
const dbErrorRegex = require("@src/untils/dbErrorRegex")

function dberrorHandler(error,res){
    if(dbErrorRegex.Duplicate_entry.test(error.message)){
        const errorObject = /'([^']*)'/.exec(error.message)
        return res.status(500).json({error:`Duplicate entry at: ${errorObject[0]}`});
    }

    if(dbErrorRegex.Cannot_found.test(error.message)){
        return res.status(404).json({error:error.message});
    }
    return res.status(500).json({errorDB:error.message});
}

function errorHandlerController(error,req,res,next){
    return res.status(500).json({error:error.message,controller:"yes"});
}

module.exports = {
    dberrorHandler,
    errorHandlerController
}