import { type ArrayRange } from './array-range';

/**
 * Creates a function that returns a section from an array
 *
 * @param range Range
 * @returns Function that returns the section from an array
 */
export function arrayToSlice(range?: Partial<ArrayRange>): <T>(array: ReadonlyArray<T>) => Array<T> {
  const from = range?.from;
  const to = range?.to;
  return array => array.slice(from, to);
}
