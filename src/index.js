const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const { generateHTML } = require("./generateHTML");
const { writeToFile } = require("./lib/utils");

// start function - where the app begins
const start = async () => {
  let inProgress = true;
  const managers = [];
  const engineers = [];
  const interns = [];

  // whilst questions are being prompted continue to allow user
  // to enter more instances, unless user answers no

  while (inProgress) {
    const answers = await inquirer.prompt(questions);

    // if user selects manager as role, push new instance of manager to array
    if (answers.role === "MANAGER") {
      const manager = new Manager({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        officeNumber: answers.officeNumber,
      });
      managers.push(manager);
    }

    // if user selects engineer as role, push new instance of engineer to array
    if (answers.role === "ENGINEER") {
      const engineer = new Engineer({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        github: answers.github,
      });
      engineers.push(engineer);
    }

    // if user selects intern as role, push new instance of intern to array
    if (answers.role === "INTERN") {
      const intern = new Intern({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        school: answers.school,
      });
      interns.push(intern);
    }

    // wish to add another? able to answer no here to break out of questions and generate html
    if (!answers.addAnother) {
      inProgress = false;
    }
  }
  const employees = { managers, engineers, interns };

  // dynamically create html
  const html = generateHTML(employees);
  writeToFile("./dist/sampleIndex.html", html);
};

start();
