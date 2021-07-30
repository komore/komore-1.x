import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { distinctUntilChanged as rxjsDistinctUntilChanged } from 'rxjs';

/**
 * Emits values from the source observable that are distinct when compared to the previous emitted value
 *
 * Values are compared using the strict equal operator `===`.
 *
 * @template T Value type
 */
export function distinctUntilChanged<T>(): MonoTypeOperatorFunction<T>;

/**
 * Emits values from the source observable that are distinct when compared to the previous emitted value
 *
 * @param compare Comparison function
 * @template T Value type
 */
export function distinctUntilChanged<T>(compare: (lhs: T, rhs: T) => boolean): MonoTypeOperatorFunction<T>;

export function distinctUntilChanged<T>(compare?: (lhs: T, rhs: T) => boolean): MonoTypeOperatorFunction<T> {
  return rxjsDistinctUntilChanged<T>(compare);
}
