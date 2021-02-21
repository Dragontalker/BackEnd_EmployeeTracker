const cTable = require('console.table');
const connectDb = require('./connection');

const addDepartment = (department) => {
    let post = { name: `${department}`};
    let sql = `INSERT INTO departments SET ?`;
    connectDb.query(sql, post, (error, result) => {
        if (error) throw error;
    });
};

module.exports = addDepartment;