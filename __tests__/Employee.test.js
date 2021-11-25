const Employee = require("../src/lib/Employee");

describe("Employee class", () => {
  const mockEmployee = {
    name: "Bob",
    id: 123,
    email: "employeebob@email.com",
  };
  test("should return expected name", () => {
    const actual = new Employee(mockEmployee);
    const expected = {
      name: "Bob",
      id: "123",
      email: "employeebob@email.com",
    };
  });

  test("should return expected id", () => {});

  test("should return expected email", () => {});

  test("should return expected role", () => {});
});
