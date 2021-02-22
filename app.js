const cTable = require('console.table');

const viewDepartments = require('./src/view/viewDepartments')
const viewRoles = require('./src/view/viewRoles');
const viewEmployees = require('./src/view/viewEmployees');
const addDepartment = require('./src/add/addDepartment');
const addRole = require('./src/add/addRole');
const addEmployee = require('./src/add/addEmployee');
const updateRoleById = require('./src/updateRoleById');
const getNameArrays = require('./src/get/getNameArrays');

const connectDb = require('./src/connection');
const getRoleId = require('./src/get/getRoleId');
const getManagerNames = require('./src/get/getManagerNames');
const getEmployeeId = require('./src/get/getEmployeeId');

const inqMain = require('./src/inquirer/inqMain');

const initApp = async () => {
    let input = await inqMain();
    
    switch(input.action) {
        case 'View All Employees':
            console.table(await viewEmployees());
            initApp();
            break;
        case 'View All Departments':
            console.table(await viewDepartments());
            initApp();
            break;
        case 'View All Roles':
            console.table(await viewRoles());
            initApp();
            break;
        default:
            break;
    }
};

initApp();

