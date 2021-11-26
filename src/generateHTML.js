const generateIntern = (interns) => {
  return `<hr />
  <h1 class="pt-5 text-center my-5"><b>THE</b>Interns</h1>
  <div class="row justify-content-around">${interns
    .map((each) => {
      return each.generateCard();
    })
    .join("")}
    </div>`;
};

const generateEngineer = (engineers) => {
  return `<hr />
  <h1 class="pt-5 text-center my-5"><b>THE</b>Engineers</h1>
  <div class="row justify-content-around">${engineers
    .map((each) => {
      return each.generateCard();
    })
    .join("")}
    </div>`;
};

const generateManager = (managers) => {
  return `<h1 class="pt-5 text-center my-5"><b>THE</b>Managers</h1>
  <div class="row justify-content-around">${managers
    .map((each) => {
      return each.generateCard();
    })
    .join("")}
    </div>`;
};

const generateHTML = ({ engineers, managers, interns }) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Open+Sans:wght@300&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./styles.css" />
      <title>Document</title>
    </head>
    <body>
      <header>
        <nav>
          <h1 class="heading" href="#">About<em>Us</em></h1>
        </nav>
        <img class="hanging-img" src="./assets/hang.png" alt="hanging lego-man" />
      </header>
      <section class="container py-5">
        <h1 class="sub-heading display-2">Us</h1>
        <p class="lead">
          Meet our <span class="super">super</span> professional Engineering team.
        </p>
      </section>
      <main class="container back-ground">

        <!-- managers -->
        ${managers.length ? generateManager(managers) : ""}

        <!-- engineers -->
        ${engineers.length ? generateEngineer(engineers) : ""}
  
        <!-- interns -->
        ${interns.length ? generateIntern(interns) : ""}

      </main>
      <footer class="font-small py-4">
        <div class="text-center py-3">Object-Oriented Programming (OOP)
          <p class="mt-2">Team Profile Generator 2021</p>
        </div>
      </footer>
    </body>
  </html>
  `;
};

module.exports = {
  generateHTML,
};
