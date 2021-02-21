const cTable = require('console.table');
const connectDb = require('./connection');

const showRoles = () => {
    connectDb.query(
        'SELECT * FROM roles', 
        function(error, result) {
            if (error) throw error;
            console.table(result);
        }
    );
};

module.exports = showRules;