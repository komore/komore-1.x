/**
 * Returns an array with the same `value` repeated `count` times
 * @param value Value
 * @param count Count
 * @returns Array with `count` times the `value`
 */
export function arrayFromRepeatedValue<T>(value: T, count: number): Array<T> {
  return Array(count).fill(value);
}
