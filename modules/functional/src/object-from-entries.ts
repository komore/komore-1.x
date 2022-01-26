/**
 * Returns the list of key/value pairs from an object
 * @param obj Object
 * @returns List of key/value pairs
 */
export function objectFromEntries<K extends string, T>(
  entries: ReadonlyArray<readonly [key: K, value: T]>
): Record<K, T> {
  return Object.fromEntries(entries) as Record<K, T>;
}
