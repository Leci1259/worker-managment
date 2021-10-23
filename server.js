const inquirer = require("inquirer");
const { starterQuestions, addDepartmentQuestion, addEmployeeQuestions, addRoleQuestions, updateEmployeeQuestion } = require("./lib/questions");
const db = require('./config/connection');
const mysql = require('mysql2');
const cTable = require('console.table');
const add = require('./helper/add');
const view = require('./helper/view');
const update = require('./helper/update');

function init() {
    inquirer
        .prompt(starterQuestions)
        .then((answer) => {
            switch (answer.choice) {
                case "View All Departments":
                    db.query('SELECT * FROM departments', function (err, results) {
                        if (err) console.log(err);
                        console.table(results);
                    });
                    break;
                case "View All Roles":
                    db.query('SELECT * FROM roles', function (err, results) {
                        console.table(results);
                    });
                    break;
                case "View All Employees":
                    db.query('SELECT * FROM employees', function (err, results) {
                        console.table(results);
                    });
                    break;
                case "Add A Department":
                    add("department");
                    break;
                case "Add A Role":
                    add("role");
                    break;
                case "Add An Employee":
                    add('employee')
                    break;
                case "Update An Employee Manager":
                   
                    break;
                case "Update An Employee Role":
                    break;
                case "Exit":
                    process.exit();
            }
        })
}

init();