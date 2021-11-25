const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ name, id, email, github }) {
    super({ name, id, email });
    this.github = github;
  }

  getGithub() {}

  getRole() {
    return "ENGINEER";
  }

  generateCard() {}
}

module.exports = Engineer;
