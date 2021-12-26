/**
 * Returns the list of property keys from an object
 * @param obj Object
 * @returns List of property keys
 */
export function objectKeys<K extends string>(obj: Record<K, unknown>): ReadonlyArray<K> {
  return Object.keys(obj) as unknown as ReadonlyArray<K>;
}
