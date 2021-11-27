const Intern = require("../src/lib/Intern");

describe("Employee class", () => {
  const mockEmployee = new Intern({
    name: "Bob",
    id: 789,
    email: "internbob@email.com",
    school: "bobsSchool",
    role: "INTERN",
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
    const expected = 789;
    expect(actual).toEqual(expected);
  });

  // verify email
  test("should return expected email", () => {
    const actual = mockEmployee.getEmail();
    const expected = "internbob@email.com";
    expect(actual).toEqual(expected);
  });

  // verify school
  test("should return expected github", () => {
    const actual = mockEmployee.getSchool();
    const expected = "bobsSchool";
    expect(actual).toEqual(expected);
  });

  // verify role
  test("should return expected role", () => {
    const actual = mockEmployee.getRole();
    const expected = "INTERN";
    expect(actual).toEqual(expected);
  });
});
