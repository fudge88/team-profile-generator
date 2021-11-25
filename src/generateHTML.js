const generateManager = (managers) => {
  return managers
    .map((each) => {
      return each.generateCard();
    })
    .join("");
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
          <h1 class="display-1" href="#">About<em>Us</em></h1>
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
        <hr />
        <h1 class="text-center my-5"><b>THE</b>Managers</h1>
        <div class="row justify-content-around">

        ${generateManager(managers)}
        </div>
  
        <!-- engineers -->
        <hr />
        <h1 class="text-center my-5">The<b>ENGINEERS</b></h1>
        <div class="row justify-content-around">
          <div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem">
            <img
              class="card-img-top pt-3"
              src="./assets/engineer.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">
                meet
                <span class="name">Fahra</span>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Email</li>
                <li class="list-group-item">Github/Number/School</li>
              </ul>
            </div>
          </div>
          <div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem">
            <img
              class="card-img-top pt-3"
              src="./assets/engineer.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">
                meet
                <span class="name">Fahra</span>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Email</li>
                <li class="list-group-item">Github/Number/School</li>
              </ul>
            </div>
          </div>
          <div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem">
            <img
              class="card-img-top pt-3"
              src="./assets/engineer.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">
                meet
                <span class="name">Fahra</span>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Email</li>
                <li class="list-group-item">Github/Number/School</li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- interns -->
        <hr />
        <h1 class="text-center my-5"><b>THE</b>Interns</h1>
        <div class="row justify-content-around">
          <div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem">
            <img
              class="card-img-top pt-3"
              src="./assets/intern.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">
                meet
                <span class="name">Fahra</span>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Email</li>
                <li class="list-group-item">Github/Number/School</li>
              </ul>
            </div>
          </div>
          <div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem">
            <img
              class="card-img-top pt-3"
              src="./assets/intern.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">
                meet
                <span class="name">Fahra</span>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Email</li>
                <li class="list-group-item">Github/Number/School</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </body>
  </html>
  `;
};

module.exports = {
  generateHTML,
};
