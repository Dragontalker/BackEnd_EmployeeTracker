const cTable = require('console.table');
const connectDb = require('./connection');

const viewDepartments = () => {
    let sql = 'SELECT * FROM departments';
    connectDb.query(sql, (error, result) => {
        if (error) throw error;
        console.table(result);
    });
};

module.exports = viewDepartments;