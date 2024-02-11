/**
 * TODO
 *
 * @returns
 */
export function arrayToArrayReversed<T>(array: ReadonlyArray<T>): ReadonlyArray<T> {
  // TODO: use toReversed() when available
  return [...array].reverse();
}
