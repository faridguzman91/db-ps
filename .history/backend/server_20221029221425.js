import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2';
const {
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'faridguzman91',
    password: 'faridgu
})

dotenv.config();

const PORT = process.env.port || 5000

const connectPscale = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to Pscale!')

// make sure the .env has the current username and password to avoid isServer issue

const app = express();

app.listen(3001, () => {
    console.log('app listening')
})