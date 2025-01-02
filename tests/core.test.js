import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  calculateDiscount,
  canDrive,
  fetchData,
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
  const minPrice = 0,
    maxPrice = 100;

  it.each([
    { price: -10, result: false },
    { price: 200, result: false },
    { price: 0, result: true },
    { price: 100, result: true },
    { price: 15, result: true },
  ])(
    `should return $result with $price price with min(${minPrice}) and max(${maxPrice})`,
    ({ price, result }) => {
      expect(isPriceInRange(price, minPrice, maxPrice)).toBe(result);
    }
  );
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
describe("canDrive", () => {
  it.each([
    { age: 15, country: "US", result: false },
    { age: 16, country: "UK", result: false },
    { age: 16, country: "US", result: true },
    { age: 17, country: "UK", result: true },
    { age: 18, country: "US", result: true },
    { age: 18, country: "UK", result: true },
  ])("should return $result for $age, $country", ({ age, country, result }) => {
    expect(canDrive(age, country)).toBe(result);
  });
  it("should return invalid countryCode", () => {
    expect(canDrive(16, "ES")).toMatch(/invalid/i);
  });
});

describe("fetchData", () => {
  it("should return a promise that will resolve to an array of numbers", async () => {
    try {
      const result = await fetchData();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    } catch (error) {
      expect(error).toHaveProperty("reason");
      expect(error.reason).toMatch(/fail/i);
    }
  });
});

describe("test suite", () => {
  beforeEach(() => {
    console.log("beforeEachCalled");
  });

  it("test case 1", () => {});
  it("test case 2", () => {});
});
