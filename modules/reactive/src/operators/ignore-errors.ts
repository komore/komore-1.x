import { identity } from '@komore/functional';
import { empty } from '../creation/empty';
import { throwError } from '../creation/throw-error';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { catchError } from './catch-error';

/**
 * Ignores errors in a stream
 *
 * @param maxErrors Maximum number of errors to ignore
 * @param errorFactory Error factory
 */
export function ignoreErrors<T>(
  maxErrors?: number,
  errorFactory?: (lastError: unknown) => unknown
): MonoTypeOperatorFunction<T> {
  const factory = errorFactory ?? identity;
  let count = maxErrors ?? 0;

  return catchError(error => {
    if (count > 0) {
      --count;
      return empty;
    }

    return throwError(() => factory(error));
  });
}
