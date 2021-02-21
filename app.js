const viewDepartments = require('./src/viewDepartments')
const viewRoles = require('./src/viewRoles');
const showEmployees = require('./src/showEmployees');
const addDepartment = require('./src/addDepartment');
const addRole = require('./src/viewRole');
const addEmployee = require('./src/addEmployee');

const testApp = async () => {
    await addEmployee('Richard', 'Yang', 4);
    showEmployees();
};

testApp();

