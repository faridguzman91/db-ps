import { PrismaClient } from "@prisma/client";
import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import mysql from "mysql2";

import bodyParser from "body-parser";
import multer from "multer";
import routes from "./routes";

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/", routes);
const prisma = new PrismaClient();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

dotenv.config();

const PORT = process.env.port || 5000;

const connectPscale = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to Pscale!");

// make sure the .env has the current username and password to avoid isServer issue

const app = express();

app.listen(3001, () => {
  console.log("app listening");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
