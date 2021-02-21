const connectDb = require('./connection');
const updateRoleById = require('./updateRoleById');

const updateRole = (name, newRole) => {
    let sql = `SELECT id FROM roles WHERE title = '${newRole}'`;
    connectDb.query(sql, (error, rows, fields) => {
        if (error) throw error;
        let id = rows[0].id;
        let [ firstName, lastName] = name.split(' ');
        updateRoleById(firstName, lastName, id);
    });
};

module.exports = updateRole;