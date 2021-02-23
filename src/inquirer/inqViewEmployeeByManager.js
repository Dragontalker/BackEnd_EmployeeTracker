const inquirer = require("inquirer");

const inqViewEmployeeByManager = (managerArray) => {
    return inquirer.prompt([
        {
            name: "name",
            type: "list",
            message: "Select a manager to show all employees assigned to him/her.",
            choices: managerArray
        }
    ]);
};

module.exports = inqViewEmployeeByManager;