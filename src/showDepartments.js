const cTable = require('console.table');
const connectDb = require('./connection');

const showDepartments = () => {
    connectDb.query(
        'SELECT * FROM departments', 
        function(error, result) {
            if (error) throw error;
            console.table(result);
        }
    );
};

module.exports = showDepartments;