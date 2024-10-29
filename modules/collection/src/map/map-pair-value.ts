/**
 * Creates a function that maps a value from a key value pair to another value, while keeping the same key
 *
 * @param project Projection function
 * @returns New map
 */
export function mapPairValue<K, V, U>(
  project: (pair: readonly [value: V, key: K]) => U,
): (keyValuePair: readonly [key: K, value: V]) => readonly [key: K, value: U] {
  return ([key, value]) => [key, project(value, key)];
}
