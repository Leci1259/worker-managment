const inquirer = require("inquirer");

const add = (type) => {
    switch (type) {
        case "department":
            inquirer
                .prompt(addDepartmentQuestion)
                .then((answer) => {
                    let sql = `INSERT INTO departments (name) VALUES (?)`;
                    let params = [answer.departmentName];
                    db.query(sql, params, (err, result) => {
                        if (err) console.log(err);
                        console.log('Department Inserted!')
                    });
                });
            break;
        case "role":
            inquirer
                .prompt(addRoleQuestions)
                .then((answers) => {
                    let sql = `INSERT INTO roles(title, salary, department_id) VALUES (?)`;
                    let params = [answers.roleName, answers.roleSalary, answers.roleDepartment];
                    db.query(sql, params, (err, result) => {
                        if (err) console.log(err);
                        console.log('Role Inserted!')
                    });
                });
            break;
        case "employee":
            inquirer
                .prompt(addEmployeeQuestions)
                .then((answers) => {
                    let sql=`INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES (?)`;
                    let params= [answers.employeeFName,answers.employeeLName,answers.employeeRole,answers.employeeManager];
                    db.query(sql, params, (err, result) => {
                        if (err) console.log(err);
                        console.log('Employee Inserted!')
                    });
                });
            break;
    }
};