const connectDb = require('../connection');

const db = connectDb();

const getNameArrays = async () => {
    let sql = 'SELECT first_name, last_name FROM employees';
    let result = await db.query(sql)
    let fullName = result.map(obj => `${obj.first_name} ${obj.last_name}`);
    await db.close();
    return fullName;
};


module.exports = getNameArrays;