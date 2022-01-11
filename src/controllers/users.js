import * as userService from "../services/userService";

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  userService
    .getAllUsers()
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}
