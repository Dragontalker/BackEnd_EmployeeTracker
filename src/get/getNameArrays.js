const connectDb = require('../connection');

const db = connectDb();

const getNameArrays = async() => {
    let sql = `SELECT first_name, last_name FROM employees'`; 
    let result = await db.query(sql);
    console.log(result);
    await db.close();
};

module.exports = getNameArrays;