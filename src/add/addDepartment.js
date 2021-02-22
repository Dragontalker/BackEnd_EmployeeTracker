const connectDb = require('../connection');

const db = connectDb();

const addDepartment = async (department) => {
    let post = { name: `${department}`};
    let sql = `INSERT INTO departments SET ?`;
    await db.query(sql, post);
    await db.close();
};

module.exports = addDepartment;