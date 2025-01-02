import { describe, expect, it, test } from "vitest";
import {
  calculateAverage,
  calculateFactorial,
  fizzBuzz,
  max,
} from "../src/intro";

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

describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should calculate the average of an array with single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should calculate the average of an array with two elements", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it("should calculate the average of an array with three elements", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe("calculateFactorial", () => {
  it("should return undefined if given -1", () => {
    expect(calculateFactorial(-1)).toBe(undefined);
  });
  it("should return 1 if given 0", () => {
    expect(calculateFactorial(0)).toBe(1);
  });
  it("should return 1 if given 1", () => {
    expect(calculateFactorial(0)).toBe(1);
  });
  it("should return 2 if given 2", () => {
    expect(calculateFactorial(2)).toBe(2);
  });
  it("should return 6 if given 3", () => {
    expect(calculateFactorial(3)).toBe(6);
  });
});
