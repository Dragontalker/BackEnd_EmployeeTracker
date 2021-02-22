const connectDb = require('../connection');

const db = connectDb();

const addRole = async (title, salary, departmentId) => {
    let post = { 
        title: `${title}`,
        salary: `${salary}`,
        department_id: `${departmentId}`
    };
    let sql = `INSERT INTO roles SET ?`;
    await db.query(sql, post, );
    await db.close();
};

module.exports = addRole;