const connectDb = require('../connection');

const db = connectDb();

const removeDepartment = async (department) => {
    let sql = `DELETE FROM departments WHERE name = '${department}'`;
    await db.query(sql);
};

module.exports = removeDepartment;