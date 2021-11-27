const Engineer = require("../src/lib/Engineer");

describe("Engineer class", () => {
  const mockEmployee = new Engineer({
    name: "Bob",
    id: 456,
    email: "engineerbob@email.com",
    github: "bobsGithub",
    role: "ENGINEER",
  });

  // verify name
  test("should return expected name", () => {
    const actual = mockEmployee.getName();
    const expected = "Bob";
    expect(actual).toEqual(expected);
  });

  // Verify id
  test("should return expected id", () => {
    const actual = mockEmployee.getId();
    const expected = 456;
    expect(actual).toEqual(expected);
  });

  // verify email
  test("should return expected email", () => {
    const actual = mockEmployee.getEmail();
    const expected = "engineerbob@email.com";
    expect(actual).toEqual(expected);
  });

  // verify github
  test("should return expected github", () => {
    const actual = mockEmployee.getGithub();
    const expected = "bobsGithub";
    expect(actual).toEqual(expected);
  });

  // verify role
  test("should return expected role", () => {
    const actual = mockEmployee.getRole();
    const expected = "ENGINEER";
    expect(actual).toEqual(expected);
  });
});
