const inquirer = require("inquirer");
const db = require('../config/connection');

const update = (type) => {
    switch (type) {
        case "manager":
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is the employee's name?",
                        name: "empName",
                    },
                    {
                        type: "input",
                        message: "What is the manager's name?",
                        name: "managerName",
                    }
                ])
                .then((answers) => {
                    let sql = `UPDATE employees SET manager = ? WHERE name = ?`;
                    let params = [answers.managerName,answers.empName];
                    db.query(sql, params, (err, result) => {
                        if (err) console.log(err);
                        console.log('Employee Manager Updated!')
                    });
                });
            break;
        case "role":
            inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the employee's name?",
                    name: "empName",
                },
                {
                    type: "input",
                    message: "What is their new role?",
                    name: "empRole",
                }
            ])
            .then((answers) => {
                let sql = `UPDATE employees SET role = ? WHERE name = ?`;
                let params = [answers.empRole,answers.empName];
                db.query(sql, params, (err, result) => {
                    if (err) console.log(err);
                    console.log('Employee Role Updated!')
                });
            });
            break;
    }
};

module.exports = { update };