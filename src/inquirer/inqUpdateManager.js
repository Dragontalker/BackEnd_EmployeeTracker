const inquirer = require("inquirer");

const inqUpdateManager = (employeeArray, managerArray) => {
    return inquirer.prompt([
        {
            name: "fullName",
            type: "list",
            message: "Which employee's role needs to be updated?",
            choices: employeeArray
        },
        {
            name: "manager",
            type: "list",
            message: "Who should be the new manager for this employee?",
            choices: managerArray
        }
    ]);
};

module.exports = inqUpdateManager;