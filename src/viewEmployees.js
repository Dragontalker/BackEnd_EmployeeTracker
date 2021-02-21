const cTable = require('console.table');
const connectDb = require('./connection');

const viewEmployees = () => {
    let sql = 'SELECT * FROM employees';
    connectDb.query(sql, (error, rows, fields) => {
        if (error) throw error;
        console.table(rows);
    });
};

module.exports = viewEmployees;