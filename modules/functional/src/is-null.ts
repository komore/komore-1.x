/**
 * Type guard that tests whether a value is null
 * @param value Value
 * @returns true if the value is null
 */
export function isNull(value: unknown): value is null {
  return value === null;
}
