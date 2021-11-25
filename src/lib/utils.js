const validator = require("email-validator");
const Employee = require("./Employee");
const fs = require("fs");

// write to file
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
    console.log("SUCCESS");
  } catch (error) {
    console.log(error.message);
  }
};

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

module.exports = { validateInput, validateEmail, validateNumber, writeToFile };
