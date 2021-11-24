const Manager = require("..src/lib/Manager");

describe("Manager class", () => {
  const mockManager = {
    name: "Bob",
    id: 123,
    email: "managerbob@email.com",
    officeNumber: "0121123123",
  };

  test("should be an instance of manager", () => {
    const actual = new Manager(mockManager);
    const expected = {
      name: "Bob",
      id: "123",
      email: "managerbob@email.com",
      officeNumber: "0121123123",
    };
  });

  test("should return expected name", () => {});

  test("should return expected id", () => {});

  test("should return expected email", () => {});

  test("should return expected office number", () => {});

  test("should return expected role", () => {});
});
