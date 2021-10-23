const db = require('../config/connection');

const view = function(type){
    switch (type) {
        case "departments":
            let dsql = `SELECT * FROM departments`;
            db.query(dsql, (err, result) => {
                if (err) console.log(err);
                console.table(result);
            });

            break;
        case "roles":
            let rsql = `SELECT id, title, salary, department_id AS department FROM roles INNER JOIN department ON role.department_id = department.id ORDER BY ID ASC"`;
            db.query(rsql, (err, result) => {
                if (err) console.log(err);
                console.table(result);

            });

            break;
        case "employees":
            let esql = "SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, concat(m.first_name, ' ' ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY ID ASC";
            db.query(esql, (err, result) => {
                if (err) console.log(err);
                console.table(result);

            });

            break;
    }

};

module.exports = { view };