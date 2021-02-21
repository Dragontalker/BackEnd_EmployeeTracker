const cTable = require('console.table');
const connectDb = require('./connection');

const showRoles = () => {
    let sql = 'SELECT * FROM roles';
    connectDb.query(sql, (error, result) => {
        if (error) throw error;
        console.table(result);
    });
};

module.exports = showRoles;