import { skipWhile as rxjsSkipWhile } from 'rxjs';

import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type OperatorFunction } from '../operator-function';

/**
 * Returns an observable that skips all emitted values as long as a specific condition holds true
 *
 * @template T Value type
 */
export function skipWhile<T>(predicate: BooleanConstructor): OperatorFunction<T, never>;

/**
 * Returns an observable that skips all emitted values as long as a specific condition holds true
 *
 * @template T Value type
 */
export function skipWhile<T>(predicate: (value: T, index: number) => true): OperatorFunction<T, never>;

/**
 * Returns an observable that skips all emitted values as long as a specific condition holds true
 *
 * @template T Value type
 */
export function skipWhile<T>(predicate: (value: T, index: number) => boolean): MonoTypeOperatorFunction<T>;

export function skipWhile<T>(
  predicate: BooleanConstructor | ((value: T, index: number) => boolean)
): OperatorFunction<T, never> | MonoTypeOperatorFunction<T> {
  return rxjsSkipWhile(predicate);
}
