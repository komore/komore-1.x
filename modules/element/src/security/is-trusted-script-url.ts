/**
 * Returns true if the passed value is a trusted script URL
 *
 * @param value Value
 * @returns true if the passed value is a trusted script URL
 */
export function isTrustedScriptURL(value: unknown): value is TrustedScriptURL {
  return window.trustedTypes?.isScriptURL(value) ?? false;
}
