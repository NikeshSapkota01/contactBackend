import HttpStatus from "http-status-codes";
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

export function create(req, res, next) {
  console.log(`req.body inside contorller`, req.body);
  userService
    .createUser(req.body)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => {
      console.log(`err occured here in contoller`, err);
      next(err);
    });
}

export function userSignIn(req, res, next) {
  const { email, password } = req.body;
  console.log(`email, password`, email, password);
  userService
    .userSignIn({ email, password })
    .then((data) => res.json({ accessToken: data.token }))
    .catch((err) => {
      next(err);
    });
}
