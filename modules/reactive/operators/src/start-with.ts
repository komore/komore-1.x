import type { OperatorFunction } from '@komore/reactive';
import type { ValueFromArray } from 'rxjs';
import { startWith as rxjsStartWith } from 'rxjs/operators';

/**
 * Synchronously emits all values upon subscription, then subscribes to the source observable and mirrors all of its
 * emissions
 * @param values Values
 * @template T Value type
 * @template A Starting value types
 */
export function startWith<T, A extends unknown[] = T[]>(...values: A): OperatorFunction<T, T | ValueFromArray<A>> {
  return rxjsStartWith(...values);
}
