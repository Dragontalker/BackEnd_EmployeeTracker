const inquirer = require("inquirer");

const inqAddEmployee = (roleArray, managerArray) => {
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
        },
        {
            name: "manager",
            type: "list",
            message: "Who is the manager of this new employee?",
            choices: managerArray
        }
    ]);
};

// Test
let test1 = ['Data Scientist', 'Scrum Master'];
let test2 = ['Richard Yang', 'Cora Zhang'];

const test = async () => {
    let result = await inqAddEmployee(test1, test2);
    console.log(result);
};

test();

module.exports = inqAddEmployee;