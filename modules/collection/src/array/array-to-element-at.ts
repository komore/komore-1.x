/**
 * Creates a function that returns an array's element at a specific index
 *
 * @param index Element index
 * @returns Function that returns an array's element at the specified index
 */
export function arrayToElementAt(index: number): <T>(array: ReadonlyArray<T>) => T | undefined {
  return array => array[index];
}
