const db = require('../config/connection');
const cTable = require('console.table');

const view = function(type) {
    console.log("inside function")
    switch (type) {
        case "departments":
            let dsql = `SELECT * FROM departments`;
            console.log("inside departments")
            db.query(dsql, (err, result) => {
                if (err) console.log(err);
                console.log("ii");
                console.table(result);
            });

            break;
        case "roles":
            let rsql = `SELECT * FROM roles`;
            db.query(rsql, (err, result) => {
                if (err) console.log(err);
                console.table(result);

            });

            break;
        case "employees":
            let esql = "SELECT * FROM employees";
            db.query(esql, (err, result) => {
                if (err) console.log(err);
                console.table(result);

            });

            break;
    }

};

module.exports = view;