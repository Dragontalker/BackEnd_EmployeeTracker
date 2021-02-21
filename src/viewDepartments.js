const cTable = require('console.table');
const connectDb = require('./connection');

const viewDepartments = () => {
    let sql = 'SELECT * FROM departments';
    connectDb.query(sql, (error, rows, fields) => {
        if (error) throw error;
        console.table(rows);
    });
};

module.exports = viewDepartments;