import { user } from "./controllers/auth.controller.js";
import { auth } from "./middlewares/auth.js";

import express from "express";

const router = express.Router;

// register
router.post("/", user.register);

//login
router.post("/login", user.login);

//all users
router.get("/", auth, user.all);

module.exports = router;
