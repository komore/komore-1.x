/**
 * Tests whether an array is empty
 *
 * @param array Array
 * @returns true if the array is empty
 */
export function isArrayEmpty<T>(array: ReadonlyArray<T>): array is readonly T[] {
  return array.length === 0;
}
