const inquirer = require("inquirer");
const db = require('../config/connection');
const {addDepartmentQuestion, addEmployeeQuestions, addRoleQuestions  = require('../lib/questions')}

const add = (type) => {
    switch (type) {
        case "department":
            inquirer
                .prompt(addDepartmentQuestion)
                .then((answer) => {
                    let dsql = `INSERT INTO departments (name) VALUES (?)`;
                    let dparams = [answer.departmentName];
                    db.query(dsql, dparams, (err, result) => {
                        if (err) console.log(err);
                        console.log('Department Inserted!')
                    });
                });
            break;
        case "role":
            inquirer
                .prompt(addRoleQuestions)
                .then((answers) => {
                    let rsql = `INSERT INTO roles(title, salary, department_id) VALUES (?)`;
                    let rparams = [answers.roleName, answers.roleSalary, answers.roleDepartment];
                    db.query(rsql, rparams, (err, result) => {
                        if (err) console.log(err);
                        console.log('Role Inserted!')
                    });
                });
            break;
        case "employee":
            inquirer
                .prompt(addEmployeeQuestions)
                .then((answers) => {
                    let esql=`INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES (?)`;
                    let eparams= [answers.employeeFName,answers.employeeLName,answers.employeeRole,answers.employeeManager];
                    db.query(esql, eparams, (err, result) => {
                        if (err) console.log(err);
                        console.log('Employee Inserted!')
                    });
                });
            break;
    }
};

module.exports={add};