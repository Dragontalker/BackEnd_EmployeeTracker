const connectDb = require('../connection');

const db = connectDb();

const getDepartmentNames = async () => {
    let sql = 'SELECT DISTINCT name FROM departments';
    let result = await db.query(sql);
    await db.close();
    return result;
};


module.exports = getDepartmentNames;