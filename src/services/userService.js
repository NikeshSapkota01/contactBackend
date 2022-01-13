import Boom from "@hapi/boom";
import jwt from "jsonwebtoken";
import User from "../models/user";

const secret = process.env.SECKRET_KEY;

export function getAllUsers() {
  return User.fetchAll();
}

export async function createUser(user) {
  // check query

  // try {
  //   await new User(user.email).fetch().then((res) => console.log(`res`, res));
  //   console.log("inside try");
  // } catch (error) {
  //   console.log(`error`, error);
  // }

  return new User(user).save();
}

const generateToken = ({ email, id }) => {
  return jwt.sign({ email, id }, secret);
};

export function userSignIn({ email, password }) {
  return new User({ email, password })
    .fetch()
    .then((user) => {
      console.log(`user`, user, user.id);
      const token = generateToken({ email, id: user.id });
      console.log(`token`, token);
      return { token: token, userid: user.id };
    })
    .catch(User.NotFoundError, () => {
      throw Boom.notFound("User not found");
    });
}

export async function show(id) {
  const user = await new User({ id }).fetch({
    withRelated: ["contacts"],
    require: true,
  });

  return user;
}
