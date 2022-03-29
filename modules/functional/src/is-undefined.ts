/**
 * Tests whether a value is undefined
 * @param value Value
 * @returns true if the value is undefined
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}
