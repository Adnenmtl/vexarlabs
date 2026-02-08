import axios from "axios";

/**
 * Verify a reCAPTCHA token with Google's API
 * @param token - The reCAPTCHA token from the frontend
 * @returns Promise with verification result
 */
export async function verifyRecaptchaToken(token: string): Promise<{
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.warn("[reCAPTCHA] RECAPTCHA_SECRET_KEY not configured");
    return {
      success: false,
      'error-codes': ['missing-secret-key']
    };
  }

  try {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: secretKey,
          response: token
        },
        timeout: 5000
      }
    );

    return response.data;
  } catch (error) {
    console.error("[reCAPTCHA] Verification failed:", error);
    return {
      success: false,
      'error-codes': ['network-error']
    };
  }
}

/**
 * Check if a reCAPTCHA verification result meets the minimum score threshold
 * @param result - The verification result from verifyRecaptchaToken
 * @param minScore - Minimum score (0.0 to 1.0), default 0.5
 * @returns true if verification passed and score is acceptable
 */
export function isRecaptchaValid(
  result: { success: boolean; score?: number },
  minScore: number = 0.5
): boolean {
  if (!result.success) {
    return false;
  }

  // If score is not provided (reCAPTCHA v2), just check success
  if (result.score === undefined) {
    return true;
  }

  // For reCAPTCHA v3, check score threshold
  return result.score >= minScore;
}
