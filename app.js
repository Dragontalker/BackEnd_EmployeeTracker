const viewDepartments = require('./src/viewDepartments')
const viewRoles = require('./src/viewRoles');
const viewEmployees = require('./src/viewEmployees');
const addDepartment = require('./src/addDepartment');
const addRole = require('./src/addRole');
const addEmployee = require('./src/addEmployee');
const updateRole = require('./src/updateRole');

const testApp = async () => {
    await updateRole('Tom Allen', 'Sales Lead');
    viewEmployees();
};

testApp();



