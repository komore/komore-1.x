import { concat } from '../creation/concat';
import { fromArray } from '../creation/from-array';
import { type OperatorFunction } from '../operator-function';

/**
 * Synchronously emits all values upon subscription, then subscribes to the source observable and mirrors all of its
 * emissions
 *
 * @param values Values
 * @template T Value type
 * @template A Starting value types
 */
export function startWith<T, A extends ReadonlyArray<unknown> = ReadonlyArray<T>>(
  ...values: A
): OperatorFunction<T, T | A[number]> {
  return source => concat([fromArray(values), source]);
}
