const connectDb = require('../connection');

const db = connectDb();

const getDepartmentNames = async () => {
    let sql = 'SELECT name FROM departments';
    let result = await db.query(sql);
    return result.map(obj => obj.name);
};

module.exports = getDepartmentNames;