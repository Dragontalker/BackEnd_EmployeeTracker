const showDepartments = require('./src/showDepartments')
const showRoles = require('./src/showRoles');
const showEmployees = require('./src/showEmployees');
const addDepartment = require('./src/addDepartment');

const testApp = async () => {
    await addDepartment('Marketing');
    showDepartments();
};

testApp();

