/**
 * Type guard that tests whether a value is defined
 *
 * @param value Value
 * @returns true if the value is defined
 * @template T Value type
 */
export function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}
