const connectDb = require('./connection');

const updateRoleById = async (firstName, lastName, roleId) => {
    let sql = `UPDATE employees SET role_id = ${roleId} WHERE first_name = '${firstName}' AND last_name = '${lastName}'`;
    await connectDb.query(sql, (error, rows, fields) => {
        if (error) throw error;
    });
};

module.exports = updateRoleById;