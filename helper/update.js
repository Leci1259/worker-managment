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
                    let msql = `UPDATE employees SET manager = ? WHERE name = ?`;
                    let mparams = [answers.managerName,answers.empName];
                    db.query(msql, mparams, (err, result) => {
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
                let rsql = `UPDATE employees SET role = ? WHERE name = ?`;
                let rparams = [answers.empRole,answers.empName];
                db.query(rsql, rparams, (err, result) => {
                    if (err) console.log(err);
                    console.log('Employee Role Updated!')
                });
            });
            break;
    }
};

module.exports = { update };