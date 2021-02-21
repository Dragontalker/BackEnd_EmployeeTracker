const viewDepartments = require('./src/viewDepartments')
const showRoles = require('./src/showRoles');
const showEmployees = require('./src/showEmployees');
const addDepartment = require('./src/addDepartment');
const addRole = require('./src/addRole');
const addEmployee = require('./src/addEmployee');

const testApp = async () => {
    await addEmployee('Richard', 'Yang', 4);
    showEmployees();
};

testApp();

