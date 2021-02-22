const connectDb = require('../connection');

const db = connectDb();

const getDepartmentId = async (departmentName) => {
    let sql = `SELECT id FROM departments WHERE name = '${departmentName}'`; 
    let result = await db.query(sql);
    return result[0].id;
};

module.exports = getDepartmentId;