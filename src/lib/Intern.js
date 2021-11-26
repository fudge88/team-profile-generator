const Employee = require("./Employee");

class Intern extends Employee {
  constructor({ name, id, email, school }) {
    super({ name, id, email });
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "INTERN";
  }

  generateCard() {
    return `<div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem">
    <img
      class="card-img-top img-size pt-3"
      src="./assets/intern.png"
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
      <li class="list-group-item">School: ${this.school}</li>
      </ul>
    </div>
  </div>`;
  }
}

module.exports = Intern;
