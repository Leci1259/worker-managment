const inquirer = require("inquirer");
const { starterQuestions} = require("./lib/questions");
const db = require('./config/connection');
const mysql = require('mysql2');
const cTable = require('console.table');
const add = require('./helper/add');
const view = require('./helper/view');
const update = require('./helper/update');
require('dotenv').config();


// Establishing Connection to database
db.connect((err) => {
    if (err) throw err;

    // Start main menu function

    console.log("\n WELCOME TO EMPLOYEE TRACKER \n");
    init();
});


function init() {
    inquirer
        .prompt(starterQuestions)
        .then((answer) => {
            switch (answer.choice) {
                case "View All Departments":
                    let dsql = `SELECT * FROM departments`;
                    console.log("inside departments")
                    db.query(dsql, (err, result) => {
                        if (err) console.log(err);
                        console.log("ii");
                        console.table(result);
                    });
                    break;
                case "View All Roles":
                    view("roles")
                    //init();
                    break;
                case "View All Employees":
                    view("employees")
                    //init();
                    break;
                case "Add A Department":
                    add("department");
                    //init();
                    break;
                case "Add A Role":
                    add("role");
                    //init();
                    break;
                case "Add An Employee":
                    add('employee');
                    //init();
                    break;
                case "Update An Employee Manager":
                   update("manager");
                   //init();
                    break;
                case "Update An Employee Role":
                    update("role");
                    //init();
                    break;
                case "Exit":
                    process.exit();
            }
        })
}

