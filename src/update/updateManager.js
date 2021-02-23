const connectDb = require('../connection');

const db = connectDb();

const updateManager = async (firstName, lastName, managerId) => {
    let sql = `UPDATE employees SET manager_id = ${managerId} WHERE first_name = '${firstName}' AND last_name = '${lastName}'`;
    await db.query(sql);
};

module.exports = updateManager;