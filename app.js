const cTable = require('console.table');

// require modules located under ./src/view
const viewDepartments = require('./src/view/viewDepartments')
const viewRoles = require('./src/view/viewRoles');
const viewEmployees = require('./src/view/viewEmployees');

// require modules located under ./src/add
const addDepartment = require('./src/add/addDepartment');
const addRole = require('./src/add/addRole');
const addEmployee = require('./src/add/addEmployee');


const updateRoleById = require('./src/updateRoleById');
const getNameArrays = require('./src/get/getNameArrays');

const connectDb = require('./src/connection');
const getRoleId = require('./src/get/getRoleId');
const getManagerNames = require('./src/get/getManagerNames');
const getEmployeeId = require('./src/get/getEmployeeId');

// require modules located under ./src/inquirer
const inqMain = require('./src/inquirer/inqMain');
const inqAddDepartment = require('./src/inquirer/inqAddDepartment');

const initApp = async () => {
    let input = await inqMain();
    
    switch(input.action) {
        case 'View All Departments':
            console.table(await viewDepartments());
            initApp();
            break;
        case 'View All Roles':
            console.table(await viewRoles());
            initApp();
            break;
        case 'View All Employees':
            console.table(await viewEmployees());
            initApp();
            break;
        case 'Add Department':
            let newDepartmentName = await inqAddDepartment();
            await addDepartment(newDepartmentName.name);
            console.log(await viewDepartments());
            initApp();
            break;
        default:
            break;
    }
};

initApp();

