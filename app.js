const viewDepartments = require('./src/viewDepartments')
const viewRoles = require('./src/viewRoles');
const viewEmployees = require('./src/viewEmployees');
const addDepartment = require('./src/addDepartment');
const addRole = require('./src/addRole');
const addEmployee = require('./src/addEmployee');
const getRoleId = require('./src/getRoleId');
const updateRoleById = require('./src/updateRoleById');

getRoleId('Lead Engineer')
    .then ((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(`Promise rejection error: ${error}`);
    });



