/**
 * Tests whether an array is empty
 *
 * @param array Array
 * @returns true if the array is empty
 * @template T Element type
 */
export function isArrayEmpty<T>(array: ReadonlyArray<T>): array is readonly [] {
  // TODO: empty tuple type assert?
  return array.length === 0;
}
