const cTable = require('console.table');

// load modules located under ./src/view
const viewDepartments = require('./src/view/viewDepartments')
const viewRoles = require('./src/view/viewRoles');
const viewEmployees = require('./src/view/viewEmployees');

// load modules located under ./src/add
const addDepartment = require('./src/add/addDepartment');
const addRole = require('./src/add/addRole');
const addEmployee = require('./src/add/addEmployee');

// load modules located under ./src/get
const getNameArrays = require('./src/get/getNameArrays');
const getRoleNames = require('./src/get/getRoleNames');
const getRoleId = require('./src/get/getRoleId');
const getManagerNames = require('./src/get/getManagerNames');
const getEmployeeId = require('./src/get/getEmployeeId');
const getDepartmentId = require('./src/get/getDepartmentId');
const getDepartmentNames = require('./src/get/getDepartmentNames');

// load modules located under ./src/update
const updateRoleById = require('./src/update/updateRoleById');
const updateManager = require('./src/update/updateManager');
const updateDepartment = require('./src/update/updateDepartment');

// load modules located under ./src/inquirer
const inqMain = require('./src/inquirer/inqMain');
const inqAddDepartment = require('./src/inquirer/inqAddDepartment');
const inqAddRole = require('./src/inquirer/inqAddRole');
const inqAddEmployee = require('./src/inquirer/inqAddEmployee');
const inqUpdateRole = require('./src/inquirer/inqUpdateRole');
const inqUpdateManager = require('./src/inquirer/inqUpdateManager');
const inqUpdateDepartment = require('./src/inquirer/inqUpdateDepartment');
const inqViewEmployeeByDepartment = require('./src/inquirer/inqViewEmployeeByDepartment');
const inqViewEmployeeByManager = require('./src/inquirer/inqViewEmployeeByManager');
const inqRemoveDepartment = require('./src/inquirer/inqRemoveDepartment');
const inqRemoveRole = require('./src/inquirer/inqRemoveRole');
const inqRemoveEmployee = require('./src/inquirer/inqRemoveEmployee');

// load modules located under ./src/view
const viewEmployeeByDepartment = require('./src/view/viewEmployeeByDepartment');
const viewEmployeeByManager = require('./src/view/viewEmployeeByManager');

// load modules located under ./src/remove
const removeDepartment = require('./src/remove/removeDepartment');
const removeRole = require('./src/remove/removeRole');
const removeEmployee = require('./src/remove/removeEmployee');

// load modules located under ./src/calculate
const calculateDepartmentBudget = require('./src/calculate/calculateDepartmentBudget');


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
            let { firstName, lastName, role } = await inqAddEmployee(roleArray);
            let roleId = await getRoleId(role);
            await addEmployee(firstName, lastName, roleId);
            console.table(await viewEmployees());
            initApp();
            break;

        // Option 7
        case 'Update Employee Role':
            let employeeArray7 = await getNameArrays();
            let roleArray7 = await getRoleNames();
            let result7 = await inqUpdateRole(employeeArray7, roleArray7);
            let newRoleId7 = await getRoleId(result7.role);
            let [ firstName7, lastName7 ] = result7.fullName.split(' ');
            await updateRoleById(firstName7, lastName7, newRoleId7);
            console.table(await viewEmployees());
            initApp();
            break;

        // Option 8
        case 'Update Employee Manager':
            let employeeArray8 = await getNameArrays();
            let managerArray8 = await getManagerNames();
            let result8 = await inqUpdateManager(employeeArray8, managerArray8);
            let [ firstName8, lastName8 ] = result8.fullName.split(' ');
            let managerEmployeeId = await getEmployeeId(result8.manager);
            await updateManager(firstName8, lastName8, managerEmployeeId);
            console.table(await viewEmployees());
            initApp();
            break;
        
        // Option 9
        case 'Update Department of Role':
            let roleArray9 = await getRoleNames();
            let departmentArray9 = await getDepartmentNames();
            let result9 = await inqUpdateDepartment(roleArray9, departmentArray9);
            let departmentId9 = await getDepartmentId(result9.department);
            await updateDepartment(result9.role, departmentId9);
            console.table(await viewRoles());
            initApp();
            break;
        
        // Option 10
        case 'View All Employees by Department':
            let departmentArray10 = await getDepartmentNames();
            let result10 = await inqViewEmployeeByDepartment(departmentArray10);
            let departmentId10 = await getDepartmentId(result10.department);
            console.table(await viewEmployeeByDepartment(departmentId10));
            initApp();
            break;

        // Option 11
        case 'View All Employees by Manager':
            let managerArray11 = await getManagerNames();
            let result11 = await inqViewEmployeeByManager(managerArray11);
            let managerId11 = await getEmployeeId(result11.name);
            console.table(await viewEmployeeByManager(managerId11));
            initApp();
            break;

        // Option 12
        case 'Remove Department':
            let departmentArray12 = await getDepartmentNames();
            let result12 = await inqRemoveDepartment(departmentArray12);
            await removeDepartment(result12.name);
            console.table(await viewDepartments());
            initApp();
            break;
        
        // Option 13
        case 'Remove Role':
            let roleArray13 = await getRoleNames();
            let result13 = await inqRemoveRole(roleArray13);
            await removeRole(result13.name);
            console.table(await viewRoles());
            initApp();
            break;

        // Option 14
        case 'Remove Employee':
            let nameArray14 = await getNameArrays();
            let result14 = await inqRemoveEmployee(nameArray14);
            await removeEmployee(result14.name);
            console.table(await viewEmployees());
            initApp();
            break;

        // Option 15
        case 'View Department Budget':
            console.table(await calculateDepartmentBudget());
            initApp();
            break;

        // Exit option
        default:
            break;
    }
};

initApp();

