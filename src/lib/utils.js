const validator = require("email-validator");
const Employee = require("./Employee");

const validateInput = (input) => {
  if (!input) {
    return "This field cannot be empty";
  }
  return true;
};

const validateEmail = (email) => {
  if (!validator.validate(email)) {
    return "Please enter valid email";
  }
  return true;
};

const validateNumber = (number) => {
  if (isNaN(number)) {
    return "Please enter a valid number";
  }
  return true;
};

// module.exports = { validateInput };
// const generateHTML = (employees) => {

// };

module.exports = { validateInput, validateEmail, validateNumber };
