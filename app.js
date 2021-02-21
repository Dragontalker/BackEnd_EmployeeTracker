const viewDepartments = require('./src/viewDepartments')
const viewRoles = require('./src/viewRoles');
const viewEmployees = require('./src/viewEmployees');
const addDepartment = require('./src/addDepartment');
const addRole = require('./src/addRole');
const addEmployee = require('./src/addEmployee');
const updateRole = require('./src/updateRole');

const testApp = async () => {
    await addEmployee('Richard', 'Yang', 4);
    viewEmployees();
};

updateRole('Richard Yang', 'Sales Lead');

