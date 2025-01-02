import { describe, expect, it, test } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if its greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if its greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if args are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return 'FizzBuzz' if arg is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return 'Fizz' if arg is divisible by 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  it("should return 'Buzz' if arg is divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return the argument if arg is divisible by any other number", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
});
