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
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  //RETURN EMPLOYEE
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
