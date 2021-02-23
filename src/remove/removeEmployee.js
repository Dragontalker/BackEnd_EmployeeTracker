const connectDb = require('../connection');

const db = connectDb();

const removeEmployee = async (fullName) => {
    let [ firstName, lastName ] = fullName.split(' ');
    let sql = `DELETE FROM employees WHERE first_name = '${firstName}' AND last_name = '${lastName}'`;
    await db.query(sql);
};

module.exports = removeEmployee;