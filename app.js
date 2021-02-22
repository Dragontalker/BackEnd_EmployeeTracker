const viewDepartments = require('./src/view/viewDepartments')
const viewRoles = require('./src/view/viewRoles');
const viewEmployees = require('./src/view/viewEmployees');
const addDepartment = require('./src/add/addDepartment');
const addRole = require('./src/add/addRole');
const addEmployee = require('./src/add/addEmployee');
const getRoleId = require('./src/getRoleId');
const updateRoleById = require('./src/updateRoleById');

addRole('Data Scientiest', 200000, 2)
viewRoles();


