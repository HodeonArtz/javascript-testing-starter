import { describe, expect, it } from "vitest";
import { getCoupons } from "../src/core";

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
