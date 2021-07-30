/**
 * Type guard that tests whether a value is not null
 * @param value Value
 * @returns true if the value is not null
 */
export function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}
