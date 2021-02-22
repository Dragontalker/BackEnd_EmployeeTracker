const connectDb = require('../connection');

const db = connectDb();

const getDepartmentId = async (departmentName) => {
    let sql = `SELECT id FROM departments WHERE name = '${departmentName}'`; 
    let result = await db.query(sql);
    await db.close();
    return result[0].id;
};

// Test:
const test = async(name) => {
    let result = await getDepartmentId(name);
    console.log(`The id is ${result}`);
}

test('Finance');

module.exports = getDepartmentId;