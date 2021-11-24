const Employee = require("./Employee");

class Manager extends Employee {
  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email });
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {}

  getRole() {
    return "MANAGER";
  }
  generateCard() {}
}

module.exports = Manager;
