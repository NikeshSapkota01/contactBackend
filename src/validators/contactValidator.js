import Joi from "@hapi/joi";

import validate from "../utils/validate";
import * as contactService from "../services/contactService";

// Validation schema
const schema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().min(10).max(15).required(),
  photograph: Joi.string(),
  userId: Joi.number().required(),
});

function contactValidation(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

function findContact(req, res, next) {
  return contactService
    .getContact({ params: req.params.id, userId: req.body.userId })
    .then(() => next())
    .catch((err) => next(err));
}

export { contactValidation, findContact };
