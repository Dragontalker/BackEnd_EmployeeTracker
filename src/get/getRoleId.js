const connectDb = require('../connection');

const getRoleId = (roleName) => {
    let sql = `SELECT id FROM roles WHERE title = '${roleName}'`;
    return new Promise((resolve, reject) => {
        connectDb.query(sql, (error, rows) => {
            if (rows === undefined) {
                reject(new Error('Error row is undefined'));
            } else {
                resolve(rows[0].id);
            };
        });
    });
};

module.exports = getRoleId;