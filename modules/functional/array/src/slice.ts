/**
 * Returns a section of an array
 * @param start Beginning index of the array
 * @param end End index of the array (exclusive)
 * @returns Section of the array
 * @template T Element type
 */
export function slice<T>(start?: number, end?: number): (array: ReadonlyArray<T>) => Array<T> {
  return array => array.slice(start, end);
}
