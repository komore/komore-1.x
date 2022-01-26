/**
 * Returns the list of key/value pairs from an object
 * @param obj Object
 * @returns List of key/value pairs
 */
export function toObjectFromEntries<K extends string, T>(
  acc: Record<K, T>,
  entry: readonly [key: K, value: T]
): Record<K, T> {
  const [key, value] = entry;
  acc[key] = value;
  return acc;
}
