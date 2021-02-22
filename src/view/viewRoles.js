const connectDb = require('../connection');

const db = connectDb();

const viewRoles = async () => {
    let sql = 'SELECT * FROM roles';
    let result = await db.query(sql);
    return result;
};

module.exports = viewRoles;