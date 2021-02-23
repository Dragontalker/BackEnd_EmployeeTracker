const connectDb = require('../connection');

const db = connectDb();

const removeRole = async (role) => {
    let sql = `DELETE FROM roles WHERE title = '${role}'`;
    await db.query(sql);
};

module.exports = removeRole;