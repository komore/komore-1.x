/**
 * Returns the passed parameter without making any change
 * @param value Value
 * @returns Value
 */
export function identity<T>(value: T): T {
  return value;
}
