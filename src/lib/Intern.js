const Employee = require("./Employee");

// intern class which also takes on the properties of employee class
class Intern extends Employee {
  constructor({ name, id, email, school }) {
    super({ name, id, email });
    this.school = school;
  }

  // function gets the input for interns school
  getSchool() {
    return this.school;
  }

  // function gets the input for job role
  getRole() {
    return "INTERN";
  }

  // function generates intern card to render in html dynamically
  generateCard() {
    return `<div class="card col-sm-12 col-md-6 col-lg-3 pb-5" style="width: 18rem">
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
