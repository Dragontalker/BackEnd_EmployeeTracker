const cTable = require('console.table');
const connectDb = require('./connection');

const showEmployees = () => {
    let sql = 'SELECT * FROM employees';
    connectDb.query(sql, (error, result) => {
            if (error) throw error;
            console.table(result);
        });
};

module.exports = showEmployees;