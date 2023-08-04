/**
 * Tests whether a value is an error
 *
 * @param value Value
 * @returns true if the value is an error
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}
