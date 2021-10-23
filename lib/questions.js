const db = require('../config/connection');

const departmentArray= db.query('SELECT names FROM departments', function (err, results) {
  return(results);
});
const employeeArray=db.query('SELECT first_names FROM departments', function (err, results) {
  return(results);
});


const starterQuestions = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "View All Department",
          "View All Roles",
          "View All Employees",
          "Add A Department",
          "Add A Role",
          "Add An Employee",
          "Update an Employee Role",
          "Quit"
        ],
      },
];

const addDepartmentQuestion = [
    {
      type: "input",
      message: "What is the department name?",
      name: "departmentName",
    },
  ];

  const addRoleQuestions = [
    {
      type: "input",
      message: "What is the role's title?",
      name: "roleName",
    },
    {
        type: "input",
        message: "What is the role's salary?",
        name: "roleSalary",
      },
      {
        type: "list",
        message: "Which department does the role belong to?",
        name: "roleDepartment",
        choices:departmentArray,
      }
  ];

  const addEmployeeQuestions = [
    {
      type: "input",
      message: "What is the employee's first name?",
      name: "employeeFName",
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "employeeLName",
      },
      {
        type: "input",
        message: "What is the employee's role?",
        name: "employeeRole",
      },
      {
        type: "input",
        message: "What is the employee's managers id?",
        name: "employeeManager",
      },
  ];

  const updateEmployeeQuestion = [
    {
      type: "list",
      message: "Which employee do you want to update?",
      name: "employeeUpdate",
      choices: employeeArray,
    },
  ];

  module.exports = {starterQuestions, addDepartmentQuestion,addEmployeeQuestions,addRoleQuestions,updateEmployeeQuestion};