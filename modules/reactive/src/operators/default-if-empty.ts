import { defaultIfEmpty as rxjsDefaultIfEmpty } from 'rxjs';

import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type OperatorFunction } from '../operator-function';

/**
 * Emits an empty array if the source array observable completes without emitting any value
 *
 * @param defaultValue Default value
 * @template T Value type
 */
export function defaultIfEmpty<T extends Array<unknown>>(defaultValue: readonly []): MonoTypeOperatorFunction<T>;

/**
 * Emits a value if the source observable completes without emitting any value
 *
 * @param defaultValue Default value
 * @template T Value type
 * @template R Default value type
 */
export function defaultIfEmpty<T, R>(defaultValue: R): OperatorFunction<T, T | R>;

export function defaultIfEmpty<T, R>(defaultValue: R): OperatorFunction<T, T | R> {
  return rxjsDefaultIfEmpty<T, R>(defaultValue);
}
