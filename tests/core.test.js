import { describe, expect, it } from "vitest";
import {
  calculateDiscount,
  getCoupons,
  isPriceInRange,
  isValidUsername,
  validateUserInput,
} from "../src/core";

describe("getCoupons", () => {
  const coupons = getCoupons();
  it("should return a not empty array", () => {
    expect(coupons.length).toBeGreaterThan(0);
  });

  it("should return an array of valid discounts", () => {
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount");
      expect(typeof coupon.discount).toBe("number");
      expect(coupon.discount).toBeGreaterThan(0);
      expect(coupon.discount).toBeLessThan(1);
    });
  });

  it("should return an array of valid coupon codes", () => {
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code");
      expect(typeof coupon.code).toBe("string");
      expect(coupon.code).toBeTruthy();
    });
  });
});

describe("calculateDiscount", () => {
  it("should return discounted price if given valid code", () => {
    expect(calculateDiscount(10, "SAVE10")).toBe(9);
    expect(calculateDiscount(10, "SAVE20")).toBe(8);
  });

  it("should handle non-numeric price", () => {
    expect(calculateDiscount("10", "SAVE10")).toMatch(/invalid/i);
  });
  it("should handle negative price", () => {
    expect(calculateDiscount(-10, "SAVE10")).toMatch(/invalid/i);
  });
  it("should handle non-string discount code", () => {
    expect(calculateDiscount(10, 10)).toMatch(/invalid/i);
  });
  it("should handle invalid discount code", () => {
    expect(calculateDiscount(10, "INVALID")).toBe(10);
  });
});

describe("validateUserInput", () => {
  it("should return valid if given valid username and age", () => {
    expect(validateUserInput("JohnSmith1234", 18)).toMatch(/successful/i);
  });

  it("should return invalid username", () => {
    expect(validateUserInput(-33, 18)).toMatch(/invalid/i);
    expect(validateUserInput("33", 18)).toMatch(/invalid/i);
  });

  it("should return invalid age", () => {
    expect(validateUserInput("username", 17)).toMatch(/invalid/i);
    expect(validateUserInput("username", "17")).toMatch(/invalid/i);
  });
});

describe("isPriceInRange", () => {
  it("should return false when the price is outside the range", () => {
    expect(isPriceInRange(-10, 0, 100)).toBe(false);
    expect(isPriceInRange(200, 0, 100)).toBe(false);
  });
  it("should return true when the price is equal to min or max", () => {
    expect(isPriceInRange(0, 0, 100)).toBe(true);
    expect(isPriceInRange(100, 0, 100)).toBe(true);
  });
  it("should return true when the price is within the range", () => {
    expect(isPriceInRange(15, 0, 100)).toBe(true);
  });
});
describe("isValidUsername", () => {
  it("should return false when username is out of range characters", () => {
    expect(isValidUsername("a".repeat(4))).toBe(false);
    expect(isValidUsername("a".repeat(16))).toBe(false);
  });
  it("should return true when username is within the range of chars", () => {
    expect(isValidUsername("a".repeat(5))).toBe(true);
    expect(isValidUsername("a".repeat(15))).toBe(true);
  });
  it("should return true when username is valid", () => {
    expect(isValidUsername("hodeonartz")).toBe(true);
  });
});
