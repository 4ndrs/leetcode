import { isAnagram } from "./solution";

describe("Valid Anagram", () => {
  test("Sample cases", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
    expect(isAnagram("rat", "car")).toBe(false);
    expect(isAnagram("ab", "a")).toBe(false);
    expect(isAnagram("a", "ab")).toBe(false);
  });
});
