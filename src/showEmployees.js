const cTable = require('console.table');
const connectDb = require('./connection');

const showEmployees = () => {
    connectDb.query(
        'SELECT * FROM employees', 
        function(error, result) {
            if (error) throw error;
            console.table(result);
        }
    );
};

module.exports = showEmployees;