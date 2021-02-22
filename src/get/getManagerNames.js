const connectDb = require('../connection');

const db = connectDb();

const getManagerNames = async () => {
    let sql = 'SELECT first_name, last_name FROM employees WHERE manager_id IS NULL';
    let result = await db.query(sql);
    let fullName = result.map(obj => `${obj.first_name} ${obj.last_name}`);
    await db.close();
    return fullName;
};


module.exports = getManagerNames;