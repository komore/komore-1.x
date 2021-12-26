import { throwError } from '../creation/throw-error';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { catchError } from './catch-error';

/**
 * Throws an error if a specific error has been thrown
 * @param condition Condition
 * @param errorFactory Error factory
 * @template T Value type
 */
export function throwIfError<T>(
  condition: (error: unknown) => boolean,
  errorFactory: (error: unknown) => unknown
): MonoTypeOperatorFunction<T> {
  return catchError(error => throwError(() => (condition(error) ? errorFactory(error) : error)));
}
