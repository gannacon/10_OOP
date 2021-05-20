// const Manager = require("./Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

const inquirer = require("inquirer");

// CREATE EMPLOYEE CLASS
class Employee {
  // CONSTRUCTOR FOR NAME, ID, EMAIL
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //METHODS FOR NAME ID EMAIL.
  getName() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please input the employee name: ",
        },
      ])
      .then((name) => {
        this.getId();
        return this.name;
      });
  }

  getId() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "Please input the employee ID: ",
        },
      ])
      .then((id) => {
        this.getEmail();
        return this.id;
      });
  }

  getEmail() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "email",
          message: "Please input the employee email: ",
        },
      ])
      .then((email) => {
        console.log(email);

        return this.email;
      });
  }
  //RETURN EMPLOYEE
  getRole(name, id, email) {
    this.getName();
    // console.log(Employee);
    return "Employee";
  }
}

module.exports = Employee;
