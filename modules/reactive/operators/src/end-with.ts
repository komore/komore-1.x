import type { OperatorFunction } from '@komore/reactive';
import type { ValueFromArray } from 'rxjs';
import { endWith as rxjsEndWith } from 'rxjs/operators';

/**
 * Mirrors all emissions from the source observable, then synchronously emits all values once the source completes
 * @param values Values
 * @template T Value type
 * @template A Ending value types
 */
export function endWith<T, A extends unknown[] = T[]>(...values: A): OperatorFunction<T, T | ValueFromArray<A>> {
  return rxjsEndWith(...values);
}
