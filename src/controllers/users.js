import HttpStatus from "http-status-codes";
import Boom from "@hapi/boom";
import * as userService from "../services/userService";

export function fetchAll(req, res, next) {
  userService
    .getAllUsers()
    .then((data) => {
      let test = { data };
      console.log(`test`, test);
      return res.json({ data });
    })
    .catch((err) => next(err));
}

export function create(req, res, next) {
  userService
    .checkUserExists(req.body.email)
    .then((result) => {
      console.log("result", result);
      addUser(req, res, next);
    })
    .catch(() => {
      return res.status(400).json({ error: "User already exists." });
    });
}

export function addUser(req, res, next) {
  userService
    .createUser(req.body)
    .then((data, err) => {
      // if (data.output.statusCode) {
      //   return res
      //     .status(data.output.statusCode)
      //     .json({ message: data.output.payload.message });
      // }
      console.log("res, err", res, err);
      return res
        .status(HttpStatus.CREATED)
        .json({ message: "user created successfully" });
    })
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
    .then((data) => {
      console.log(`data`, data);
      res.json({ accessToken: data.token, userId: data.userid });
    })
    .catch((err) => {
      next(err);
    });
}
