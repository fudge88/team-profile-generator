# Team Profile Generator ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=<COLOR>)

A command-line application that takes in information about employees on a software engineering team, then dynamically generates an HTML webpage that displays summaries for each person

![portfolio demo](./assets/img/readme.gif)

## Summary

This app allows the user to add details for employees in an engineering team using a command-line application.

The answers are collected and dynamically generates an HTML webpage that displays each employee in a structured website, clearly defining each employee according to their role.

The code was tested by writing `unit tests` for every part of the code.

#### A walk-though video for the app can be viewed [here.](https://drive.google.com/drive/folders/1Z3-xUghfRkOGizXHfOQO7X6_CAET0kaY?usp=sharing)

![portfolio demo](./assets/img/questions.gif)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation Instructions:

You are able to clone this repository, by clicking [here](https://github.com/fudge88/readme-generator) and then clicking on the `code` button. Select how you would like to clone the repository.

If you have your SSH keys set up, you are able to copy the link from the drop down and paste the following into your terminal application:

```
git clone git@github.com:fudge88/team-profile-generator.git
```

Then change your directory so you are now in your newly cloned project and then open the code in your chosen source-code editor.

You need to install all dependencies that are listed in the `package.json` file:

```
npm install --save
```

Check to see that the following code is in the `package.json`, this will ensure npm to 'start' the application from your entry file. and test the application from the **test** folder, coverage will show the percentage of test Vs code written.

```
"start": node src/index.js
"test": "jest --verbose --coverage",
"test:watch": "jest --verbose --watch"
```

## How to run the application:

To run the start script, use the following code in the terminal.

```
npm run start
```

This should start the application, and you will be prompted with questions in the terminal.

![portfolio demo](./assets/img/inquierer.png)

Once you have answered the questions, you will see a message of 'success' appear in the terminal and a dynamically generated 'generated_readme.md' file will appear in the root directory.

You can use the following code to save your changes:

```
git add .
```

```
git commit
```

```
git push
```

## How to run tests on the application:

To run the test script, use the following code in the terminal.

```
npm run test
```

This should run all tests in the **test** folder, the results will display in the terminal.

## Testing

With other aspects of the Team Profile Generator, such as the positioning of images required some manual  
testing. I also found that there was a need to add validation into the application, as the functions were allowing empty inputs. I added validation the `question` functions to ensure the fields would not be submitted empty, and that only numerical inputs were accepted for the relevant fields. The only validation i was left with was for emails. After some research i found that nmp has an [email validator](https://www.npmjs.com/package/email-validator) extension.

I installed this by keying the following command into teh terminal:

```
npm install email-validator
```

Entered the following code above my function where the extension was used:

```
var validator = require("email-validator");
```

Then called the function in my validation function:

```
const validateEmail = (email) => {
  if (!email) {
    return "This field cannot be empty";
  }
  if (!validator.validate(email)) {
    return "Please enter valid email";
  }
  return true;
};
```

### Browser Compatibility

<table>
<tbody><tr>
<th>Device</th>
<th>Images</th>
<th>Links</th>
<th>Formatting Error</th>
<th>Notes</th>
</tr>
<tr>
<th>Desktop</th>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>Laptop</th>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>IPad</th>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>IPhone X</th>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>IPhone 5</th>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>Samsung</th>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>Explorer</th>
<td>yes</td>
<td>yes</td>
<td>Minor positioning</td>
<td>Slight zoomed out appearance</td>
</tr>
<tr>
<th>Safari</th>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>Chrome</th>
<td>yes</td>
<td>yes</td>
<td>Minor positioning</td>
<td>Zoomed in appearance</td>
</tr>
</tbody></table>

## Tools Used:

- node.js
- inquirer - npm
- jest
- @types/jest

#### Languages:

- JavaScript
- JQuery
- CSS

#### NPM Inquirer

Inquirer is an NPM package that provides an easy way to capture user input in your Node. js command line interface applications. It provides several methods for asking questions and returning answers from the user that can be accessed by a . then promise function. In this project i have chosen to use async and await in various places to allow the smooth running of the app, but awaiting the completion of promises.

#### Jest

Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. Jest also generates code coverage by adding the flag --coverage. No additional setup needed. Jest can collect code coverage information from entire projects, including untested files.

### References

[Bootstrap](https://getbootstrap.com/)

[GoogleFonts](https://fonts.google.com/)

[Screencastify](https://www.screencastify.com/)

[Jest](https://jestjs.io/)

[Mozilla.org](https://developer.mozilla.org/en-US/docs/)

[StackOverflow](https://stackoverflow.com/questions/)

[NPM Inquirer](https://www.npmjs.com/package/inquirer)

[NPM Email Validator](https://www.npmjs.com/package/email-validator).

## License

![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=<COLOR>)

This project is licensed under the terms of the MIT license.

## Questions

If you:

- have any questions about this project
- would like further information
- would like to report and issue

please contact me through the links below:

[GitHub](https://github.com/fudge88) Profile

Email: akhlaq.fahra@gmail.com
