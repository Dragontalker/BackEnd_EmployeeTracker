

getNameArrays() {
    let sql = `SELECT first_name, last_name FROM employees'`; 
    return new Promise((resolve, reject) => {
        this.connection.query(sql, (error, rows) => {
            if (rows === undefined) {
                reject(new Error('Error row is undefined'));
            } else {
                resolve(rows);
            };
        });
    });
}
};