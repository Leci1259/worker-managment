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
          "Update An Employee Role",
          "Update An Employee Manager",
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


  module.exports = {starterQuestions, addDepartmentQuestion};