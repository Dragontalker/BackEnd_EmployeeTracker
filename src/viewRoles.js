const connectDb = require('./connection');

const viewRoles = (title, salary, departmentId) => {
    let post = { 
        title: `${title}`,
        salary: `${salary}`,
        department_id: `${departmentId}`
    };
    let sql = `INSERT INTO roles SET ?`;
    connectDb.query(sql, post, (error, result) => {
        if (error) throw error;
        console.log(`New role: ${title} has been added to database.`);
        console.log(`The department ID is ${departmentId}.`);
        console.log(`With salary: ${salary}.`);
    });
};

module.exports = viewRoles;