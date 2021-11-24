const inquirer = require("inquirer");

// Questions
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?",
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
    when: ({ role }) => role === "MANAGER",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineers gitHub profile?",
    when: ({ role }) => role === "ENGINEER",
  },
  {
    type: "input",
    name: "school",
    message: "What is the interns school name?",
    when: ({ role }) => role === "INTERN",
  },
];

const start = async () => {
  // prompt user questions
  const answers = await inquirer.prompt(questions);

  //   render specific question accordingly
  console.log(answers);
};

start();
