const db = require('../config/connection');

const view = (type) => {
    switch (type) {
        case "departments":
            let sql = `SELECT * FROM departments`;
            db.query(sql, (err, result) => {
                if (err) console.log(err);
            });

            break;
        case "roles":
            let sql = `SELECT * FROM roles`;
            db.query(sql, (err, result) => {
                if (err) console.log(err);
            });

            break;
        case "employees":
            let sql = `SELECT * FROM employees`;
            db.query(sql, (err, result) => {
                if (err) console.log(err);
            });

            break;
    }
};

module.exports = { view };