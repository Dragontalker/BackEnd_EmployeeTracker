const cTable = require('console.table');
const connectDb = require('./src/connection');

const showDepartment = () => {
    connectDb.query(
        'SELECT * FROM department', 
        function(error, result) {
            if (error) throw error;
            console.table(result);
        }
    );
};

showDepartment();


