const showDepartments = require('./src/showDepartments')
const showRoles = require('./src/showRoles');
const showEmployees = require('./src/showEmployees');
const addDepartment = require('./src/addDepartment');
const addRole = require('./src/addRole')

const testApp = async () => {
    await addRole('Junior Software Engineer', 105000, 2);
    showRoles();
};

testApp();

