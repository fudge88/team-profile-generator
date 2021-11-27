const Manager = require("../src/lib/Manager");

describe("Manager class", () => {
  const mockEmployee = new Manager({
    name: "Bob",
    id: 1011,
    email: "managerbob@email.com",
    officeNumber: 1234567,
    role: "MANAGER",
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
    const expected = 1011;
    expect(actual).toEqual(expected);
  });

  // verify email
  test("should return expected email", () => {
    const actual = mockEmployee.getEmail();
    const expected = "managerbob@email.com";
    expect(actual).toEqual(expected);
  });

  // verify officeNumber
  test("should return expected github", () => {
    const actual = mockEmployee.getOfficeNumber();
    const expected = 1234567;
    expect(actual).toEqual(expected);
  });

  // verify role
  test("should return expected role", () => {
    const actual = mockEmployee.getRole();
    const expected = "MANAGER";
    expect(actual).toEqual(expected);
  });
});
