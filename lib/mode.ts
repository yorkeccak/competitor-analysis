/**
 * App mode detection utilities
 *
 * Two modes are supported:
 * - self-hosted: Uses VALYU_API_KEY directly, no authentication required
 * - valyu: Uses OAuth proxy through Valyu platform, requires user sign-in
 */

/**
 * Check if the app is running in self-hosted mode.
 * Self-hosted mode is the default - it uses VALYU_API_KEY directly.
 *
 * @returns true if self-hosted mode (default), false if valyu platform mode
 */
export function isSelfHostedMode(): boolean {
  return process.env.NEXT_PUBLIC_APP_MODE !== "valyu";
}

/**
 * Check if the app is running in Valyu platform mode.
 * Valyu mode uses OAuth proxy and requires user sign-in.
 *
 * @returns true if valyu platform mode, false if self-hosted mode
 */
export function isValyuMode(): boolean {
  return process.env.NEXT_PUBLIC_APP_MODE === "valyu";
}
