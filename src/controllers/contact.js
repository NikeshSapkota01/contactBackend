import * as contactService from "../services/contactService";

export function fetchAll(req, res, next) {
  contactService
    .getAllContacts()
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}
