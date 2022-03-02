const Employee = require("./Employee");

// engineer class which also takes on the properties of employee class
class Engineer extends Employee {
  constructor({ name, id, email, github }) {
    super({ name, id, email });
    this.github = github;
  }

  // function gets the input for github username
  getGithub() {
    return this.github;
  }

  // function gets the input for job role
  getRole() {
    return "ENGINEER";
  }

  // function generates engineer card to render in html dynamically
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
      <li class="list-group-item">Email: <a href="mailto:${this.email}"><span class="detail">${this.email}</span></a></li>
      <li class="list-group-item">Github Username: <a href="https://github.com/${this.github}" target="__blank" 
      class="github">${this.github}</a></li>
      </ul>
    </div>
  </div>`;
  }
}

module.exports = Engineer;
