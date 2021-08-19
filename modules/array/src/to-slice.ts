/**
 * Creates a function that returns a section of an array
 * @param from Beginning index of the array
 * @param to End index of the array (exclusive)
 * @returns Function that returns a section of the array
 * @template T Element type
 */
export function toSlice<T>(from?: number, to?: number): (array: ReadonlyArray<T>) => Array<T> {
  return array => array.slice(from, to);
}
