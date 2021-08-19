/**
 * Creates a string from a list of character codes
 * @param codes List of character codes
 * @returns String
 */
export function fromCharCode(...codes: ReadonlyArray<number>): string {
  return String.fromCharCode(...codes);
}
