import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("../utils/webtokens");

class AuthService {
  static async registerUser(req, res) {
    const { email, password } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (user) {
        return res.status(409).json({
          status: false,
          message: "User already exists",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          email: email,
          password: hashedPassword,
        },
      });
      const accessToken = await jwt.signAccessToken({
        email: newUser.email,
      });
      const refreshToken = await jwt.signRefreshToken({
        email: newUser.email,
      });
      res.status(201).json({
        status: true,
        message: "User created successfully",
        data: {
          accessToken,
          refreshToken,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AuthService;
