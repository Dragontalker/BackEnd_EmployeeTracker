const inquirer = require("inquirer");

const inqAddRole = (array) => {
    return inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the title of the new role?"
        },
        {
            name: "salary",
            type: "number",
            message: "What is the salary of the new role?"
        },
        {
            name: "department",
            type: "list",
            message: "Which department does this new role belong to?",
            choices: array
        }
    ])
};

const test = async () => {
    let arr = ['IT', 'Marketing']
    let result = await inqAddRole(arr);
    console.log(result);
}

test();

module.exports = inqAddRole;