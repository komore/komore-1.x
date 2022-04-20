/***
 * Tests whether an object is an array
 *
 * @param obj Object
 * @returns true if the object is an array
 * @template T Element type
 */
export function isArray<T>(obj: unknown | ReadonlyArray<T>): obj is ReadonlyArray<T> {
  return Array.isArray(obj);
}
