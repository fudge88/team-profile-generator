const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const validator = require("email-validator");

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
