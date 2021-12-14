const joi = require("joi");

const validator = (req, res, next) => {
  // se valida el register

  const schema = joi.object({
    userName: joi
      .string()
      .max(12)
      .min(3)
      .trim()
      .pattern(new RegExp("[a-zA-Z]"))
      .required()
      .messages({
        "string.empty": "you must complete the field",
        "string.min": "Username must contain more than 3 characters",
      }),
    password: joi.string().min(5).required().trim().messages({
      "string.empty": "you must complete the password field ",
      "string.min": "Password must contain more than 5 characters",
    }),
    lastName: joi.string().required().trim().messages({
      "string.empty": "you must complete the Last Name field",
    }),
    email: joi.string().required().email().trim().messages({
      "string.empty": "you must complete the Email field",
    }),
    imgUrl: joi.string().uri().required().trim().messages({
      "string.empty": "you must complete the URL link",
      "string.dataUri": "must be a valid URL",
    }),
    country: joi.string().required().trim().messages({
      "string.empty": "country is required",
    }),
    google: joi.boolean(),
  });

  const validation = schema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    return res.json({ success: false, validate: validation.error.details });
  }

  next();
};

module.exports = validator;
