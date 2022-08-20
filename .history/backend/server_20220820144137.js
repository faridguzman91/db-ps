import dotenv from 'dotenv'
import express from 'express'
import mysql from 'mysql2'



const PORT = process.env.PORT || 3000


const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('connected to pscale db!')

connection.end()

dotenv.config()

const app = express()

app.listen(3001, () => {
    console.log('Server is listening on port 3001')
})