const Employee = require("../src/lib/Employee");

describe("Employee class", () => {
  const mockEmployee = new Employee({
    name: "Bob",
    id: 123,
    email: "employeebob@email.com",
    role: "EMPLOYEE",
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
    const expected = 123;
    expect(actual).toEqual(expected);
  });

  // verify email
  test("should return expected email", () => {
    const actual = mockEmployee.getEmail();
    const expected = "employeebob@email.com";
    expect(actual).toEqual(expected);
  });

  // verify role
  test("should return expected role", () => {
    const actual = mockEmployee.getRole();
    const expected = "EMPLOYEE";
    expect(actual).toEqual(expected);
  });
});
