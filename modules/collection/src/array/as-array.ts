import { type ArrayOrValue } from './array-or-value';
import { isArray } from './is-array';

/**
 * Returns a single value or an array of values as an array of values
 *
 * @param value Value or values
 * @returns Array of values
 */
export function asArray<T>(value: ArrayOrValue<T>): ReadonlyArray<T> {
  return isArray(value) ? value : [value];
}
