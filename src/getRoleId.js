const connectDb = require('./connection');
const updateRoleById = require('./updateRoleById');

const getRoleId = (newRole) => {
    let sql = `SELECT id FROM roles WHERE title = '${newRole}'`;
    return new Promise((resolve, reject) => {
        connectDb.query(sql, async (error, rows) => {
            if (rows === undefined) {
                reject(new Error('Error row is undefined'));
            } else {
                resolve(rows);
            }
        });
    });
};

module.exports = getRoleId;