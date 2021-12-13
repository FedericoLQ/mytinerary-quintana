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
      "string.empty": "you must complete the field password",
      "string.min": "Password must contain more than 5 characters",
    }),
    lastName: joi.string().required().trim().messages({}),
    email: joi.string().required().email().trim().messages({}),
    imgUrl: joi.string().required().trim().messages({}),
    country: joi.string().required().trim().messages({}),
    google: joi.boolean().required(),
  });

  const validation = schema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    return res.json({ success: false, response: validation.error.details });
  }

  next();
};

module.exports = validator;
