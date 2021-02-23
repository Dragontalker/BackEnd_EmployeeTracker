const inquirer = require("inquirer");

const inqUpdateRole = (employeeArray, roleArray) => {
    return inquirer.prompt([
        {
            name: "fullName",
            type: "list",
            message: "Which employee's role needs to be updated?",
            choices: employeeArray
        },
        {
            name: "role",
            type: "list",
            message: "Which new role should be assigned to this employee?",
            choices: roleArray
        }
    ]);
};

module.exports = inqUpdateRole;

// Test
const test = async () => {
    let result = await inqUpdateRole(['Richard Yang', 'Cora Zhang'], ['RA', 'TA']);
    console.log(result);
}

test();