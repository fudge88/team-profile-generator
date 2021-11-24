const inquirer = require("inquirer");

const roleQuestions = [
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
    name: "name",
    message: "What is the employees name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employees ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employees email?",
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "officeNumber",
    message: "What is the managers office telephone number?",
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "github",
    message: "What is the engineers gitHub profile?",
  },
];
const internQuestions = [
  {
    type: "input",
    name: "school",
    message: "What is the interns school name?",
  },
];

const start = async () => {
  const chosenRole = await inquirer.prompt(roleQuestions);

  console.log(chosenRole);
};

start();
