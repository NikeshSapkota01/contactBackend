import Boom from "@hapi/boom";
import jwt from "jsonwebtoken";
import User from "../models/user";

const secret = process.env.SECKRET_KEY;

export function getAllUsers() {
  return User.fetchAll({
    columns: ["id", "email", "created_at", "updated_at"],
  });
}

export async function checkUserExists(user) {
  try {
    let test = await User.where({ email: user }).fetch({
      require: true,
    });
    return Promise.reject();
  } catch (error) {
    return Promise.resolve();
  }
}

export async function createUser(user) {
  return new User(user).save().catch((error) => {
    if (error.code === "23505") {
      throw Boom.badRequest("User with the same email already exists");
    }
    throw Boom.notFound("Something went wrongish");
  });
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
