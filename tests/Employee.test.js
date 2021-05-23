const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("The employee class should receive text form the user input", () => {
      // Arrange
      const name = "Name of employee";

      // Act
      const obj = new Employee(name);

      // Assert
      expect(obj.name).toEqual(name);
    });
  });
});
