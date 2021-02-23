const inquirer = require("inquirer");

const inqRemoveDepartment = (departmentArray) => {
    return inquirer.prompt([
        {
            name: "name",
            type: "list",
            message: "Which department do you want to remove?",
            choices: departmentArray
        }
    ]);
};

module.exports = inqRemoveDepartment;