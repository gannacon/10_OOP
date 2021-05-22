const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
// const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateHTML = require("./src/generateHTML");

//Blank array to store the employee's.
const employee = [];

function getManager() {
  const managerQest = [
    {
      type: "input",
      message: "Input the managers name: ",
      name: "name",
    },
    {
      type: "input",
      message: "Input the managers ID: ",
      name: "id",
    },
    {
      type: "input",
      message: "Input the managers email: ",
      name: "email",
    },
    {
      type: "input",
      message: "Input managers office number: ",
      name: "officeNumber",
    },
  ];
  inquirer.prompt(managerQest).then((data) => {
    const manager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officeNumber
    );
    employee.push(manager);
    nextEmployee();
  });
}

function getIntern() {
  const internQuest = [
    {
      type: "input",
      message: "Input the intern' name: ",
      name: "name",
    },
    {
      type: "input",
      message: "Input the intern's ID: ",
      name: "id",
    },
    {
      type: "input",
      message: "Input the intern's email: ",
      name: "email",
    },
    {
      type: "input",
      message: "Input intern's school: ",
      name: "school",
    },
  ];
  inquirer.prompt(internQuest).then((data) => {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    employee.push(intern);
    nextEmployee();
  });
}

function nextEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add an employee? ",
        name: "newEmployee",
        choices: ["Engineer", "Intern", "No"],
      },
    ])
    .then((data) => {
      if (data.newEmployee === "Engineer") {
        getEngineer();
      } else if (data.newEmployee === "Intern") {
        getIntern();
      } else if (data.newEmployee === "No") {
        generateCards();
      }
    });
}

function generateCards() {
  writeToFile("./dist/index.html", generateHTML(employee));
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Commit logged!")
  );
}

// Function call to initialize app by getting the manager
getManager();
