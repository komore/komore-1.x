/**
 * Returns true if the passed value is a trusted script
 * @param value Value
 * @returns true if the passed value is a trusted script
 */
export function isTrustedScript(value: unknown): value is TrustedScript {
  return window.trustedTypes?.isScript(value) ?? false;
}
