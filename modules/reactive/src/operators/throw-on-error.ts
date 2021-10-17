import { throwError } from '../creation/throw-error';
import type { MonoTypeOperatorFunction } from '../operator/mono-type-operator-function';
import { catchError } from './catch-error';

/**
 * Throws an error when an error occurs
 * @param errorFactory Error factory
 * @template T Value type
 */
export function throwOnError<T>(errorFactory: (error: unknown) => unknown): MonoTypeOperatorFunction<T> {
  return catchError(error => throwError(() => errorFactory(error)));
}
