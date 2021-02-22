const connectDb = require('../connection');

const db = connectDb();

const viewEmployees = async () => {
    let sql = 'SELECT * FROM employees';
    let result = await db.query(sql);
    await db.close();
    return result;
};

module.exports = viewEmployees;