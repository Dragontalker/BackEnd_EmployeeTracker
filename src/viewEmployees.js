const cTable = require('console.table');
const connectDb = require('./connection');

const db = connectDb();

const viewEmployees = async () => {
    let sql = 'SELECT * FROM employees';
    let result = await db.query(sql)
    console.table(result);
    await db.close();
};

module.exports = viewEmployees;