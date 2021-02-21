const connectDb = require('./connection');

const addEmployee = (firstName, lastName, roleId) => {
    let post = { 
        first_name: `${firstName}`,
        last_name: `${lastName}`,
        role_id: `${roleId}`
    };
    let sql = `INSERT INTO employees SET ?`;
    connectDb.query(sql, post, (error, result) => {
        if (error) throw error;
        console.log(`New employee: ${firstName} ${lastName} has been added to database.`);
        console.log(`The role ID is ${roleId}.`);
    });
};

module.exports = addEmployee;