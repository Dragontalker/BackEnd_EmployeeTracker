const connectDb = require('../connection');

const addDepartment = (department) => {
    let post = { name: `${department}`};
    let sql = `INSERT INTO departments SET ?`;
    connectDb.query(sql, post, (error, rows, fields) => {
        if (error) throw error;
        console.log(`New department: ${department} has been added to database.`);
    });
};

module.exports = addDepartment;