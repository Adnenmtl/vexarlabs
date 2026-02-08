import { describe, expect, it } from "vitest";
import { verifyRecaptchaToken, isRecaptchaValid } from "./recaptcha";

describe("reCAPTCHA verification", () => {
  it("should have RECAPTCHA_SECRET_KEY configured", () => {
    expect(process.env.RECAPTCHA_SECRET_KEY).toBeDefined();
    expect(process.env.RECAPTCHA_SECRET_KEY).not.toBe("");
  });

  it("should return error when token is invalid", async () => {
    const result = await verifyRecaptchaToken("invalid-token-for-testing");
    
    // Google will return success: false for invalid tokens
    expect(result.success).toBe(false);
  });

  it("isRecaptchaValid should return false for failed verification", () => {
    const result = { success: false };
    expect(isRecaptchaValid(result)).toBe(false);
  });

  it("isRecaptchaValid should return true for successful v2 verification", () => {
    const result = { success: true };
    expect(isRecaptchaValid(result)).toBe(true);
  });

  it("isRecaptchaValid should check score threshold for v3", () => {
    const highScore = { success: true, score: 0.9 };
    const lowScore = { success: true, score: 0.3 };
    
    expect(isRecaptchaValid(highScore, 0.5)).toBe(true);
    expect(isRecaptchaValid(lowScore, 0.5)).toBe(false);
  });
});
