
const starterQuestions = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "choose",
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
      },
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
        message: "Who is the employee's manager?",
        name: "employeeManager",
      },
  ];

  const updateEmployeeQuestion = [
    {
      type: "input",
      message: "Which employee do you want to update?",
      name: "employeeUpdate",
    },
  ];

  module.exports = {starterQuestions, addDepartmentQuestion,addEmployeeQuestions,addRoleQuestions,updateEmployeeQuestion};