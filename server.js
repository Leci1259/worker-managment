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
                    view("departments")
                    break;
                case "View All Roles":
                    view("roles")
                    break;
                case "View All Employees":
                    view("employees")
                    break;
                case "Add A Department":
                    add("department");
                    break;
                case "Add A Role":
                    add("role");
                    break;
                case "Add An Employee":
                    add('employee');
                    break;
                case "Update An Employee Manager":
                   update("manager");
                    break;
                case "Update An Employee Role":
                    update("role");
                    break;
                case "Exit":
                    process.exit();
            }
        })
}

init();