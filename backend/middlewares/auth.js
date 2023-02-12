import createHttpError from "http-errors";

import webtokens from "../utils/webtokens";

const auth = async (req, res, next) => {
  if (!req.headers.autorization) {
    return next(createHttpError.Unauthorized("Access token is required"));
  }
  const token = req.headers.autorization.split(" ")[1];
  if (!token) {
    return next(createHttpError.Unauthorized());
  }
  await webtokens
    .verifyAccessToken(token)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((e) => {
      next(createError.Unauthorized(e.message));
    });
};

module.exports = auth;
