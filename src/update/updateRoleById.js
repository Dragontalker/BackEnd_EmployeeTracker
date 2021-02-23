const connectDb = require('../connection');

const db = connectDb();

const updateRoleById = async (firstName, lastName, roleId) => {
    let sql = `UPDATE employees SET role_id = ${roleId} WHERE first_name = '${firstName}' AND last_name = '${lastName}'`;
    await db.query(sql);
};

module.exports = updateRoleById;