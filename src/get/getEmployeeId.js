const connectDb = require('../connection');

const db = connectDb();

const getEmployeeId = async (employeeName) => {
    let [ firstName, lastName ] = employeeName.split(' ');
    let sql = `SELECT id FROM employees WHERE first_name = '${firstName}' AND last_name = '${lastName}'`; 
    let result = await db.query(sql);
    await db.close();
    return result[0].id;
};

module.exports = getEmployeeId;