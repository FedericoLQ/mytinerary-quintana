const joi = require('joi')
const passwordComplexity = require("joi-password-complexity");

const validator = (req, res, next) => {  // se valida el register


    const schema = joi.object({
        userName: joi.string().max(12).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'El usuario debe contener mas de 3 caracteres'
        }),
        password: joi.string().required().trim().messages({}),
        lastName: joi.string().required().trim().messages({}),
        email: joi.string().required().email().trim().messages({}),
        imgUrl: joi.string().required().trim().messages({}),
        country: joi.string().required().trim().messages({})
    })

    const validation = schema.validate(req.body, { abortEarly: false })

    if (validation.error) {
        return res.json({ success: false, response: validation.error.details })
    }

    next()


}

module.exports = validator