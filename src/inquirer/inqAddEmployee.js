const inquirer = require("inquirer");

const inqAddEmployee = (roleArray) => {
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
        }
    ]);
};

module.exports = inqAddEmployee;