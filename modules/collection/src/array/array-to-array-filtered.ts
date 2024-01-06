/**
 * TODO
 *
 * @param predicate
 * @returns
 */
export function arrayToArrayFiltered<T, S extends T>(
  predicate: (value: T, index: number) => value is S
): (array: ReadonlyArray<T>) => Array<S>;

export function arrayToArrayFiltered<T>(
  predicate: (value: T, index: number) => boolean
): (array: ReadonlyArray<T>) => Array<T>;

export function arrayToArrayFiltered<T>(
  predicate: (value: T, index: number) => boolean
): (array: ReadonlyArray<T>) => Array<T> {
  return array => array.filter(predicate);
}
