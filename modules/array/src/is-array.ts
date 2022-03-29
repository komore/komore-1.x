/***
 * Tests whether an object is an array
 * @param obj Object
 * @returns true if the object is an array
 */
export function isArray<T>(obj: unknown): obj is ReadonlyArray<T> {
  return Array.isArray(obj);
}
