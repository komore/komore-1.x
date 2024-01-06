/**
 * Tests whether a value is a string
 *
 * @param value Value
 * @returns true if the value is a string
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
