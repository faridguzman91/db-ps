import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import mysql from "mysql2";

dotenv.config();

const PORT = process.env.port || 5000;

const connectPscale = mysql.createConnection({});
console.log("Connected to Pscale!");

// make sure the .env has the current username and password to avoid isServer issue

const app = express();

app.listen(3001, () => {
  console.log("app listening");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
