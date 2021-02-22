const cTable = require('console.table');
const connectDb = require('../connection');

const db = connectDb();

const getNameArrays = async () => {
    let sql = 'SELECT first_name, last_name FROM employees';
    let result = await db.query(sql)
    let fullName = result.map(obj => `${obj.first_name} ${obj.last_name}`);
    console.log(fullName);
    await db.close();
};


module.exports = getNameArrays;