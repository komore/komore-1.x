import type { OperatorFunction } from '@komore/reactive';
import { concat, fromArray } from '@komore/reactive';
import type { ArrayValueType } from '@komore/typescript';

/**
 * Mirrors all emissions from the source observable, then synchronously emits all values once the source completes
 * @param values Values
 * @template T Value type
 * @template A Ending value types
 */
export function endWith<T, A extends unknown[] = T[]>(...values: A): OperatorFunction<T, T | ArrayValueType<A>> {
  return source => concat([source, fromArray(values)]);
}
