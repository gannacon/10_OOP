const Employee = require("./Employee");
// MANAGER CLASS EXTENDS EMPLOYEE
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "officeNumber",
          message: "Please input the employee office Number: ",
        },
      ])
      .then((officeNumber) => {
        return this.officeNumber;
      });
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
