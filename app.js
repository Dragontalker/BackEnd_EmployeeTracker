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
const getRoleNames = require('./src/get/getRoleNames');

const connectDb = require('./src/connection');
const getRoleId = require('./src/get/getRoleId');
const getManagerNames = require('./src/get/getManagerNames');
const getEmployeeId = require('./src/get/getEmployeeId');
const getDepartmentId = require('./src/get/getDepartmentId');

// require modules located under ./src/inquirer
const inqMain = require('./src/inquirer/inqMain');
const inqAddDepartment = require('./src/inquirer/inqAddDepartment');
const inqAddRole = require('./src/inquirer/inqAddRole');
const inqAddEmployee = require('./src/inquirer/inqAddEmployee');
const getDepartmentNames = require('./src/get/getDepartmentNames');

const db = connectDb();

const initApp = async () => {
    let input = await inqMain();
    
    switch(input.action) {

        // Option 1
        case 'View All Departments':
            console.table(await viewDepartments());
            initApp();
            break;

        // Option 2
        case 'View All Roles':
            console.table(await viewRoles());
            initApp();
            break;

        // Option 3
        case 'View All Employees':
            console.table(await viewEmployees());
            initApp();
            break;

        // Option 4
        case 'Add Department':
            let newDepartmentName = await inqAddDepartment();
            await addDepartment(newDepartmentName.name);
            console.log(await viewDepartments());
            initApp();
            break;

        // Opetion 5
        case 'Add Role':
            let departmentNames = await getDepartmentNames();
            let { title, salary, department } = await inqAddRole(departmentNames);
            let id = await getDepartmentId(department);
            await addRole(title, salary, id);
            console.table(await viewRoles());
            initApp();
            break;

        // Option 6
        case 'Add Employee':
            let roleArray = await getRoleNames();
            let managerArray = await getManagerNames();
            let { firstName, lastName, role, manager } = await inqAddEmployee(roleArray, managerArray);
            let roleId = await getRoleId(role);
            let managerId = await getEmployeeId(manager)
            await addEmployee(firstName, lastName, roleId, managerId);
            console.table(await viewEmployees());
            initApp();
            break;

        // Option 7
        case 'Update Employee Role':
            let employeeList = await getNameArrays();
            let roleList = await getRoleNames();
            console.log(employeeList);
            console.log(roleList);
            initApp();
            break;

        // Exit option
        default:
            break;
    }
};

initApp();

