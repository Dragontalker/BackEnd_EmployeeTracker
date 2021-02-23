const connectDb = require('../connection');

const db = connectDb();

const addEmployee = async (firstName, lastName, roleId) => {
    let post = { 
        first_name: `${firstName}`,
        last_name: `${lastName}`,
        role_id: roleId
    };
    let sql = `INSERT INTO employees SET ?`;
    await db.query(sql, post);
};

module.exports = addEmployee;