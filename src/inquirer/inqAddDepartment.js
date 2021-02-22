const inquirer = require("inquirer");

const inqAddDepartment = () => {
    return inquirer.prompt({
            name: "name",
            type: "input",
            message: "What is the name of the new department?"
    });
};

module.exports = inqAddDepartment;