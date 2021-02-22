const inquirer = require("inquirer");

const main = () => {
    return inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'View All Employees by Department',
            'View All Employee by Manager',
            'Addd Employee',
            'Remove Employee',
            'Update Employee Role',
            'Update Employee Manager',
            'View All Roles',
            'Add Role',
            'Remove Role',
            'Exit'
        ]
    })
}

// Test: 
const testApp = async () => {
    let result = await main();
    console.log(result.action);
}

testApp();