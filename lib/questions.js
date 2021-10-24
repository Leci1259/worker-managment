const db = require('../config/connection');



const starterQuestions = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add A Department",
          "Add A Role",
          "Add An Employee",
          "Update an Employee Role",
          "Exit"
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

  const updateEmployeeQuestion = [
    {
      type: "list",
      message: "Which employee do you want to update?",
      name: "employeeUpdate",
      choices: [],
    },
  ];

  module.exports = {starterQuestions, addDepartmentQuestion,updateEmployeeQuestion};