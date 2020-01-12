require('dotenv').config()

const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: 3306,
    user: 'narmtom',
    password: 'notty2543',
    database: 'narmtom' ,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
module.exports = pool;