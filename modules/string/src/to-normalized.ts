/**
 * Returns a string normalized to the NFC form
 * @param str String
 * @returns String normalized to the NFC form
 */
export function toNormalized(str: string): string {
  return str.normalize();
}
