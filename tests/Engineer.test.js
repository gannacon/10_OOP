const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it('The Engineer class should return "Engineer" using getRole()', () => {
    const role = "Engineer";
    const test = new Engineer();
    expect(test.getRole()).toEqual(role);
  });
});
