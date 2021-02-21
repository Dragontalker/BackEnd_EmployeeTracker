const cTable = require('console.table');
const connectDb = require('./connection');

const viewRoles = () => {
    let sql = 'SELECT * FROM roles';
    connectDb.query(sql, (error, rows, fields) => {
        if (error) throw error;
        console.table(rows);
    });
};

module.exports = viewRoles;