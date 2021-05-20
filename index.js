const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
// const Engineer = require("./lib/Engineer.js");
// const Intern = require("./lib/Intern.js");
const Mangager = require("./lib/Manager.js");

//Initialize the new Employee Object
const employee = new Employee();

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "start",
        message: "Would you like to log a new employee? ",
        choices: ["Yes", "No"],
      },
    ])
    .then((Start) => {
      if (Start.start === "Yes") {
        console.log("Great!");
        employee.getRole();
      } else {
        return;
      }
    });
}

// Function call to initialize app
init();
