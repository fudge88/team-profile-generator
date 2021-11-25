const { validateInput, validateEmail, validateNumber } = require("./utils");

// Questions
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
    validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's ID?",
    validate: validateNumber,
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?",
    validate: validateEmail,
  },
  {
    type: "list",
    name: "role",
    message: "Select job title:",
    choices: [
      {
        name: "Manager",
        value: "MANAGER",
      },
      {
        name: "Engineer",
        value: "ENGINEER",
      },
      {
        name: "Intern",
        value: "INTERN",
      },
    ],
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office telephone number?",
    validate: validateNumber,
    when: ({ role }) => role === "MANAGER",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineers gitHub profile?",
    validate: validateInput,
    when: ({ role }) => role === "ENGINEER",
  },
  {
    type: "input",
    name: "school",
    message: "What is the interns school name?",
    validate: validateInput,
    when: ({ role }) => role === "INTERN",
  },
  {
    type: "confirm",
    name: "addAnother",
    message: "Do you wish to add another employee?",
  },
];

module.exports = questions;
