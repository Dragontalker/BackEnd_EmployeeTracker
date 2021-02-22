const inquirer = require("inquirer");

const inqMain = () => {
    return inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role',
            'Update Employee Manager',
            'View All Employee by Department',
            'View All Employee by Manager',
            'Remove Department',
            'Remove Role',
            'Remove Employee',
            'View Department Budget',
        ]
    });
}

module.exports = inqMain;