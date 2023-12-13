import { concat } from '../creation/concat';
import { fromArray } from '../creation/from-array';
import { type OperatorFunction } from '../operator-function';

/**
 * Mirrors all emissions from the source observable, then synchronously emits all values once the source completes
 *
 * @param values Values
 * @template T Value type
 * @template A Ending value types
 */
export function endWith<T, A extends ReadonlyArray<unknown> = ReadonlyArray<T>>(
  ...values: A
): OperatorFunction<T, T | A[number]> {
  return source => concat([source, fromArray(values)]);
}
