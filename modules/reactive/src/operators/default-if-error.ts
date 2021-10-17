import { of } from '../creation/of';
import type { OperatorFunction } from '../operator/operator-function';
import { catchError } from './catch-error';

/**
 * Emits a value if the source observable errors
 * @param defaultValue Default value
 * @template T Value type
 * @template R Default value type
 */
export function defaultIfError<T, R>(defaultValue: R): OperatorFunction<T, T | R> {
  return catchError(() => of(defaultValue));
}
