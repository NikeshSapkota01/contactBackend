import Joi from "@hapi/joi";

import validate from "../utils/validate";
// import * as userService from "../services/userService";

// Validation schema
const schema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string()
    // .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .min(7)
    .max(15)
    .required(),
  // password_confirmation: Joi.any()
  //   .valid(Joi.ref("password"))
  //   .required()
  //   .options({ language: { any: { allowOnly: "must match password" } } }),
});

function userValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

export { userValidator };
