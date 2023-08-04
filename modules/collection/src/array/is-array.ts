/***
 * Tests whether an object is an array
 *
 * @param object Object
 * @returns true if the object is an array
 * @template T Element type
 */
export function isArray<T>(object: unknown | ReadonlyArray<T>): object is ReadonlyArray<T> {
  return Array.isArray(object);
}
