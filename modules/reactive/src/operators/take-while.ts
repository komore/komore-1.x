import { takeWhile as rxjsTakeWhile } from 'rxjs';

import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type OperatorFunction } from '../operator-function';

/**
 * Emits the values emitted by the source observable while the value satisfies a predicate
 *
 * @param predicate Predicate
 */
export function takeWhile<T, S extends T>(predicate: (value: T, index: number) => value is S): OperatorFunction<T, S>;

/**
 * Emits the values emitted by the source observable while the value satisfies a predicate
 *
 * @param predicate Predicate
 * @param inclusive Whether to include the value that caused the predicate to return `false`
 * @template T Value type
 * @template S Type inferred by the predicate
 */
export function takeWhile<T, S extends T>(
  predicate: (value: T, index: number) => value is S,
  inclusive: false
): OperatorFunction<T, S>;

/**
 * Emits the values emitted by the source observable while the value satisfies a predicate
 *
 * @param predicate Predicate
 * @param inclusive Whether to include the value that caused the predicate to return `false`
 * @template T Value type
 * @template S Type inferred by the predicate
 */
export function takeWhile<T, S extends T>(
  predicate: (value: T, index: number) => value is S,
  inclusive: boolean
): OperatorFunction<T, T | S>;

/**
 * Emits the values emitted by the source observable while the value satisfies a predicate
 *
 * @param predicate Predicate
 * @param inclusive Whether to include the value that caused the predicate to return `false`
 * @template T Value type
 */
export function takeWhile<T>(
  predicate: (value: T, index: number) => boolean,
  inclusive?: boolean
): MonoTypeOperatorFunction<T>;

export function takeWhile<T>(
  predicate: (value: T, index: number) => boolean,
  inclusive = false
): MonoTypeOperatorFunction<T> {
  return rxjsTakeWhile<T>(predicate, inclusive);
}
