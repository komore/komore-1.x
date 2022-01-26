
export function isArray<T>(obj: unknown): obj is ReadonlyArray<T> {
  return Array.isArray(obj);
}