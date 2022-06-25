const { body, validationResult, check } = require("express-validator")

async function validateUser(req, res, next) {
    Promise.all([
        body('email').isEmail().run(req),
        body('password').optional({nullable:true}).run(req),
    ]).then(() => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    })
}
module.exports = {
    validateUser
}