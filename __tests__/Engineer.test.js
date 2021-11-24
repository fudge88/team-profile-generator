const Engineer = require("..src/lib/Engineer");

describe("Engineer class", () => {
  const mockEngineer = {
    name: "Bob",
    id: 123,
    email: "engineerbob@email.com",
    github: "myGithub",
  };

  test("should be an instance of engineer", () => {
    const actual = new Engineer(mockEngineer);
    const expected = {
      name: "Bob",
      id: "123",
      email: "engineerbob@email.com",
      github: "myGithub",
    };
  });

  test("should return expected name", () => {});

  test("should return expected id", () => {});

  test("should return expected email", () => {});

  test("should return expected github", () => {});

  test("should return expected role", () => {});
});
