const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ name, id, email, github }) {
    super({ name, id, email });
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "ENGINEER";
  }

  generateCard() {
    return `<div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem">
    <img
      class="card-img-top img-size pt-3"
      src="./assets/engineer.png"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">
        meet
        <span class="name">${this.name}</span>
      </h5>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${this.id}</li>
      <li class="list-group-item">Email: <span class="detail">${this.email}</span</li>
      <li class="list-group-item">Github: ${this.github}</li>
      </ul>
    </div>
  </div>`;
  }
}

module.exports = Engineer;
