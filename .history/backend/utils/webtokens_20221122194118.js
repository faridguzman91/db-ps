import { HttpError } from "http-errors";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
module.exports = {
  signAccessToken(payload) {
    return new Promise((resolve, reject) => {
      const secret = accessTokenSecret;
      const options = {
        expiresIn: "1h",
        issuer: "localhost:5000",
        audience: payload.email,
      };
      jwt.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.log(err.message);
          reject(err);
        }
        resolve(token);
      });
    });
  },
  verifyAccessToken(req, res, next) {
    if (!req.headers["authorization"]) return next(createError.Unauthorized());
    const authHeader = req.headers["authorization"];
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];
    jwt.verify(token, accessTokenSecret, (err, payload) => {
      if (err) {
        const message =
          err.name === "JsonWebToken Error" ? "Unauthorized" : err.message;
        return next(createError.Unauthorized(message));
      }
      req.payload = payload;
      next();
    });
  },
};
