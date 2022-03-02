const Employee = require("./Employee");

// manager class which also takes on the properties of employee class
class Manager extends Employee {
  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email });
    this.officeNumber = officeNumber;
  }

  // function gets the input for office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // function gets the input for job role
  getRole() {
    return "MANAGER";
  }

  // function generates intern card to render in html dynamically
  generateCard() {
    return `<div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem">
    <img
      class="card-img-top pt-3"
      src="./assets/manager.png"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">
        meet
        <span class="name">${this.name}</span>
      </h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${this.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.email}"><span class="detail">${this.email}</span></a></li>
        <li class="list-group-item">Phone No.: ${this.officeNumber}</li>
      </ul>
    </div>
  </div>`;
  }
}

module.exports = Manager;
