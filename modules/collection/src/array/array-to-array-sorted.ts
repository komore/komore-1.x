/**
 * TODO
 *
 * @param predicate
 * @returns
 */
export function arrayToArraySorted<T>(
  predicate: (lhs: T, rhs: T) => number
): (array: ReadonlyArray<T>) => ReadonlyArray<T> {
  // TODO: use toSorted() when available
  return array => [...array].sort(predicate);
}
