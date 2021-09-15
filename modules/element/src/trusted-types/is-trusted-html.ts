/**
 * Returns true if the passed value is trusted HTML
 * @param value Value
 * @returns true if the passed value is trusted HTML
 */
export function isTrustedHTML(value: unknown): value is TrustedHTML {
  return window.trustedTypes?.isHTML(value) ?? false;
}
