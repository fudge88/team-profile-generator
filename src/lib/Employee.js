class Employee {
  constructor({ name, id, email, role }) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  // function gets the input for name
  getName() {
    return this.name;
  }

  // function gets the input for id
  getId() {
    return this.id;
  }

  // function gets the input for email
  getEmail() {
    return this.email;
  }

  // function gets the input for job role
  getRole() {
    return "EMPLOYEE";
  }
}

module.exports = Employee;
