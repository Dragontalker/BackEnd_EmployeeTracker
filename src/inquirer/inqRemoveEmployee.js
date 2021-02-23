const inquirer = require("inquirer");

const inqRemoveEmployee = (employeeArray) => {
    return inquirer.prompt([
        {
            name: "name",
            type: "list",
            message: "Which employee do you want to remove?",
            choices: employeeArray
        }
    ]);
};

module.exports = inqRemoveEmployee;