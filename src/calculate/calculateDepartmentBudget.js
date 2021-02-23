const connectDb = require('../connection');

const db = connectDb();

const calculateDepartmentBudget = async () => {
    let sql = `SELECT name AS department, sum(salary) AS budget FROM roles INNER JOIN employees ON roles.id = employees.role_id INNER JOIN departments ON roles.department_id = departments.id GROUP BY department_id`;
    let result = await db.query(sql);
    return result;
};

module.exports = calculateDepartmentBudget;