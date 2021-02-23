const inquirer = require("inquirer");

const inqUpdateDepartment = (roleArray, departmentArray) => {
    return inquirer.prompt([
        {
            name: "role",
            type: "list",
            message: "Which role;s department needs to be updated?",
            choices: roleArray
        },
        {
            name: "department",
            type: "list",
            message: "Which department should be assigned to this role?",
            choices: departmentArray
        }
    ]);
};

module.exports = inqUpdateDepartment;