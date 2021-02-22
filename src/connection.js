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

    getRoleId(roleName) {
        let sql = `SELECT id FROM roles WHERE title = '${roleName}'`; 
        return new Promise((resolve, reject) => {
            this.connection.query(sql, (error, rows) => {
                if (rows === undefined) {
                    reject(new Error('Error row is undefined'));
                } else {
                    resolve(rows[0].id);
                };
            });
        });
    }

    getNameArrays() {
        let sql = `SELECT first_name, last_name FROM employees'`; 
        return new Promise((resolve, reject) => {
            this.connection.query(sql, (error, rows) => {
                if (rows === undefined) {
                    reject(new Error('Error row is undefined'));
                } else {
                    resolve(rows);
                };
            });
        });
    }
};

const connectDb = () => {
    const db = new Database({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'sql23248265YT',
        database: 'employee_db'
    });
    return db;
}; 

module.exports = connectDb;