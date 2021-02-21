const cTable = require('console.table');
const connectDb = require('./connection');

const viewEmployees = () => {
    let sql = 'SELECT * FROM employees';
    connectDb.query(sql, (error, result) => {
        if (error) throw error;
        console.table(result);
    });
};

module.exports = viewEmployees;