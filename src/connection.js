const mysql = require('mysql');

const connectDb = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sql23248265YT',
    database: 'employee_db'
});

connectDb.connect((error) => {
    if (error) throw error;
    console.log('MySQL database connected...');
});

module.exports = connectDb;