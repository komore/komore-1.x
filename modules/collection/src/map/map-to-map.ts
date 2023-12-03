/**
 * Returns a map where each key-value pair has been mapped to a new key-value pair
 *
 * @param map Map
 * @param mapper Mapping function
 * @returns New map
 */
export function mapToMap<KS, VS, K, V>(
  map: ReadonlyMap<KS, VS>,
  mapper: (entry: readonly [key: KS, value: VS]) => readonly [key: K, value: V]
): Map<K, V> {
  const originalEntries = [...map.entries()];
  const newEntries = originalEntries.map(mapper);
  return new Map(newEntries);
}
