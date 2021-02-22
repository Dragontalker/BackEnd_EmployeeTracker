const inquirer = require("inquirer");

const main = () => {
    return inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'View All Departments',
            'View All Roles',
            'View All Employees by Department',
            'View All Employee by Manager',
            'Addd Employee',
            'Remove Employee',
            'Update Employee Role',
            'Update Employee Manager',
            'Add Role',
            'Remove Role',
            'Add Department',
            'Remove Department',
            'Exit'
        ]
    })
}

module.exports = main;