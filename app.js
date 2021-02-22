const viewDepartments = require('./src/view/viewDepartments')
const viewRoles = require('./src/view/viewRoles');
const viewEmployees = require('./src/view/viewEmployees');
const addDepartment = require('./src/add/addDepartment');
const addRole = require('./src/add/addRole');
const addEmployee = require('./src/add/addEmployee');
const updateRoleById = require('./src/updateRoleById');
const getNameArrays = require('./src/get/getNameArrays');

const connectDb = require('./src/connection');

db = connectDb();

const testApp = async () => {
    let result = await getNameArrays();
    console.log(result);
};

testApp();


