const mysql = require('mysql');

class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( process.env.JAWSDB_URL ? process.env.JAWSDB_URL : config );
    }

    query(sql, args=[]) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (error, rows) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end( error => {
                if (error) {
                    return reject(error);
                } else {
                    resolve();
                }
            } );
        } );
    }
};

const connectDb = (dbName, dbPassword) => {
    const db = new Database({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: dbPassword,
        database: dbName
    });
    return db;
}; 


// const connectDb = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'sql23248265YT',
//     database: 'employee_db'
// });

// connectDb.connect((error) => {
//     if (error) throw error;
//     console.log('MySQL database connected...');
// });

module.exports = connectDb;