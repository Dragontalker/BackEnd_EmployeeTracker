const inquirer = require("inquirer");

const inqViewEmployeeByDepartment = (departmentArray) => {
    return inquirer.prompt([
        {
            name: "department",
            type: "list",
            message: "Select a department to show all employees in it.",
            choices: departmentArray
        }
    ]);
};

module.exports = inqViewEmployeeByDepartment;