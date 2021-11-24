const Intern = require("../src/lib/Intern");

describe("intern class", () => {
  const mockIntern = {
    name: "Bob",
    id: 123,
    email: "internbob@email.com",
    school: "school",
  };

  test("should be an instance of intern", () => {
    const actual = new Intern(mockIntern);
    const expected = {
      name: "Bob",
      id: "123",
      email: "internbob@email.com",
      school: "school",
    };
  });

  test("should return expected name", () => {});

  test("should return expected id", () => {});

  test("should return expected email", () => {});

  test("should return expected school", () => {});

  test("should return expected role", () => {});
});
