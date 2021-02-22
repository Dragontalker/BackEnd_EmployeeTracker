const connectDb = require('../connection');

const db = connectDb();

const getRoleNames = async () => {
    let sql = 'SELECT title FROM roles';
    let result = await db.query(sql);
    await db.close();
    return result.map(obj => obj.title);
};

module.exports = getRoleNames;