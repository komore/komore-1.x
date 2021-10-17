import type { ArrayValueType } from '@komore/array';
import { concat } from '../creation/concat';
import { fromArray } from '../creation/from-array';
import type { OperatorFunction } from '../operator/operator-function';

/**
 * Mirrors all emissions from the source observable, then synchronously emits all values once the source completes
 * @param values Values
 * @template T Value type
 * @template A Ending value types
 */
export function endWith<T, A extends unknown[] = T[]>(...values: A): OperatorFunction<T, T | ArrayValueType<A>> {
  return source => concat([source, fromArray(values)]);
}
