const cTable = require('console.table');
const connectDb = require('../connection');

const db = connectDb();

const viewEmployeeByDepartment = async (departmentId) => {
    let sql = `SELECT first_name, last_name, title, name AS department, salary FROM roles INNER JOIN employees ON roles.id = employees.role.id INNER JOIN departments ON roles.department_id = departments.id WHERE departments.id = ${departmentId}`;
    let result = await db.query(sql);
    console.table(result);
};

module.exports = viewEmployeeByDepartment;

