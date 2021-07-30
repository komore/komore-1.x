
export function objectKeys<K extends string>(obj: Record<K, unknown>): ReadonlyArray<K> {
  return Object.keys(obj) as unknown as ReadonlyArray<K>;
}
