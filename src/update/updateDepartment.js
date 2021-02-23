const connectDb = require('../connection');

const db = connectDb();

const updateDepartment = async (title, departmentId) => {
    let sql = `UPDATE roles SET department_id = ${departmentId} WHERE title = '${title}'`;
    await db.query(sql);
};

module.exports = updateDepartment;