/**
 * @private
 * @deprecated Remove/rename
 */
export function byName<T extends { readonly name: string }>(lhs: T, rhs: T): number {
  return lhs.name.localeCompare(rhs.name);
}
