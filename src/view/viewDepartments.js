const cTable = require('console.table');
const connectDb = require('../connection');

const db = connectDb();

const viewDepartments = async () => {
    let sql = 'SELECT * FROM departments';
    let result = await db.query(sql)
    console.table(result);
    await db.close();
};

module.exports = viewDepartments;