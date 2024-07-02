const mysql = require("mysql2");


module.exports.SQL = mysql.createConnection({
    host:"localhost",
    user: process.env.USERDATABASE,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})