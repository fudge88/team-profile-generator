const validator = require("email-validator");
// const validateInput = require("./utils");

// Questions
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
    validate: (name) => {
      if (!name) {
        return "This field cannot be empty";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's ID?",
    validate: (id) => {
      if (isNaN(id)) {
        return "ID should be a number";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?",
    validate: (email) => {
      if (!validator.validate(email)) {
        return "Please enter valid email";
      }
      return true;
    },
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
    validate: (officeNumber) => {
      if (isNaN(officeNumber)) {
        return "Please enter a valid telephone number";
      }
      return true;
    },
    when: ({ role }) => role === "MANAGER",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineers gitHub profile?",
    validate: (github) => {
      if (!github) {
        return "This field cannot be empty";
      }
      return true;
    },
    when: ({ role }) => role === "ENGINEER",
  },
  {
    type: "input",
    name: "school",
    message: "What is the interns school name?",
    validate: (school) => {
      if (!school) {
        return "This field cannot be empty";
      }
      return true;
    },
    when: ({ role }) => role === "INTERN",
  },
  {
    type: "confirm",
    name: "addAnother",
    message: "Do you wish to add another employee?",
  },
];

module.exports = questions;
