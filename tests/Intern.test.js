const Intern = require("../lib/Intern");

describe("Intern", () => {
  it('The Intern class should return "Intern" using getRole()', () => {
    const role = "Intern";
    const test = new Intern();
    expect(test.getRole()).toEqual(role);
  });
});
