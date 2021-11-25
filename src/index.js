const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
  {
    type: "confirm",
    name: "addAnother",
    message: "Do you wish to add another employee?",
  },
];

const start = async () => {
  let inProgress = true;
  const managers = [];
  const engineers = [];
  const interns = [];

  while (inProgress) {
    const answers = await inquirer.prompt(questions);

    if (answers.role === "MANAGER") {
      const manager = new Manager({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        officeNumber: answers.officeNumber,
      });
      managers.push(manager);
    }

    if (answers.role === "ENGINEER") {
      const engineer = new Engineer({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        github: answers.github,
      });
      engineers.push(engineer);
    }

    if (answers.role === "INTERN") {
      const intern = new Intern({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        school: answers.school,
      });
      interns.push(intern);
    }

    if (!answers.addAnother) {
      inProgress = false;
    }
  }
  const employees = { managers, engineers, interns };
  console.log(employees);

  const html = generateHTML(employees);
  writeToFile("../dist/sampleIndex.html", html);
};

start();
