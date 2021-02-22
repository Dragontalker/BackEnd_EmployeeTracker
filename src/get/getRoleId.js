const connectDb = require('../connection');

const db = connectDb();

const getRoleId = async (roleName) => {
    let sql = `SELECT id FROM roles WHERE title = '${roleName}'`; 
    let result = await db.query(sql);
    return result[0].id;
};

module.exports = getRoleId;