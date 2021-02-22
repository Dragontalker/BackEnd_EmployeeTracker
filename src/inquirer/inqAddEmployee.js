const inquirer = require("inquirer");

const inqAddRole = (roleArray, managerArray) => {
    return inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the first name of new employee?"
        },
        {
            name: "lastName",
            type: "input",
            message: "What is the last name of new employee?"
        },
        {
            name: "role",
            type: "list",
            message: "What is the new employee's role?",
            choices: roleArray
        },
        {
            name: "manager",
            type: "list",
            message: "Who is the manager of this new employee?",
            choices: managerArray
        }
    ])
};

module.exports = inqAddRole;