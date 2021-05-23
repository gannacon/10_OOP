const Manager = require("../lib/Manager");

describe("Manager", () => {
  it('The Manager class should return "Manager" using getRole()', () => {
    const role = "Manager";
    const test = new Manager();
    expect(test.getRole()).toEqual(role);
  });
});
