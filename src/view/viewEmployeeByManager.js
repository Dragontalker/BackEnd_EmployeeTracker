const connectDb = require('../connection');

const db = connectDb();

const viewEmployeeByManager = async (managerId) => {
    let sql = `SELECT first_name, last_name, title, name AS department, salary FROM roles INNER JOIN employees ON roles.id = employees.role_id INNER JOIN departments ON roles.department_id = departments.id WHERE manager.id = ${managerId}`;
    let result = await db.query(sql);
    return result;
};

module.exports = viewEmployeeByManager;