const viewDepartments = require('./src/viewDepartments')
const viewRoles = require('./src/viewRoles');
const viewEmployees = require('./src/viewEmployees');
const addDepartment = require('./src/addDepartment');
const addRole = require('./src/addRole');
const addEmployee = require('./src/addEmployee');

const testApp = async () => {
    await addEmployee('Richard', 'Yang', 4);
    viewEmployees();
};

testApp();

