const cTable = require('console.table');
const connectDb = require('../connection');

const db = connectDb();

const viewRoles = async () => {
    let sql = 'SELECT * FROM roles';
    let result = await db.query(sql)
    console.table(result);
    await db.close();
};

module.exports = viewRoles;