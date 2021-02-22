getRoleId(roleName) {
    let sql = `SELECT id FROM roles WHERE title = '${roleName}'`; 
    return new Promise((resolve, reject) => {
        this.connection.query(sql, (error, rows) => {
            if (rows === undefined) {
                reject(new Error('Error row is undefined'));
            } else {
                resolve(rows[0].id);
            };
        });
    });
}