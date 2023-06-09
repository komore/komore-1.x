/**
 * Creates an object from a list of key/value pairs
 *
 * @param entries Entries
 * @returns Object
 */
export function entriesToObject<K extends string, T>(
  entries: ReadonlyArray<readonly [key: K, value: T]>
): Record<K, T> {
  return Object.fromEntries(entries) as Record<K, T>;
}
