const inquirer = require("inquirer");

const inqRemoveRole = (roleArray) => {
    return inquirer.prompt([
        {
            name: "name",
            type: "list",
            message: "Which role do you want to remove?",
            choices: roleArray
        }
    ]);
};

module.exports = inqRemoveRole;