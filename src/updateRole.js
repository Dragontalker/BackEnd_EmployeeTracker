const connectDb = require('./connection');

const updateRole = (name, newRole) => {
    let sql = `SELECT id FROM roles WHERE title = '${newRole}'`;
    connectDb.query(sql, (error, rows, fields) => {
        if (error) throw error;
        let id = rows[0].id;
        let [ firstName, lastName] = name.split(' ');
        let sql = `UPDATE employees SET role_id = ${id} WHERE first_name = ${firstName} AND last_name = ${lastName}`;
        
    });
};

module.exports = updateRole;