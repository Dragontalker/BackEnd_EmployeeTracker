const viewDepartments = require('./src/viewDepartments')
const viewRoles = require('./src/viewRoles');
const viewEmployees = require('./src/viewEmployees');
const addDepartment = require('./src/addDepartment');
const addRole = require('./src/addRole');
const addEmployee = require('./src/addEmployee');
const updateRole = require('./src/updateRole');
const updateRoleById = require('./src/updateRoleById');

const testApp = async () => {
    await updateRoleById('Tom',  'Allen', 4);
    viewEmployees();
};

testApp();




