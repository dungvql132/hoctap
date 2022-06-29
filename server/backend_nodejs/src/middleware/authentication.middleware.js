const { body, validationResult } = require("express-validator")

async function validateUser(req, res, next) {
    Promise.all([
        body('email').isEmail().run(req),
        body('password').optional({ nullable: true }).run(req),
    ]).then(() => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            resErrors = errors.array().map((value) => {
                return `${value.msg} ${value.param}`
            });
            return res.status(400).json(
                {
                    error: resErrors,
                    message: resErrors[0]
                }
            );
        }
        next()
    })
}
module.exports = {
    validateUser
}