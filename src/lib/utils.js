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

// function validates input to avoid empty inputs
const validateInput = (input) => {
  if (!input) {
    return "This field cannot be empty";
  }
  return true;
};

// function validates email to avoid incorrect inputs
const validateEmail = (email) => {
  if (!email) {
    return "This field cannot be empty";
  }
  if (!validator.validate(email)) {
    return "Please enter valid email";
  }
  return true;
};

// function validates input to avoid letter being input
const validateNumber = (number) => {
  if (!number) {
    return "This field cannot be empty";
  }
  if (isNaN(number)) {
    return "Please enter a valid number";
  }
  return true;
};

module.exports = { validateInput, validateEmail, validateNumber, writeToFile };
