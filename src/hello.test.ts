import { hello } from "./hello";

describe("testing", () => {
  test("the world", () => {
    expect(hello()).toBe("hello world");
  });
});
