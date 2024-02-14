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
  return catchError(error => {
    if ((maxErrors ?? 0) > 0) {
      if (maxErrors !== undefined) {
        // eslint-disable-next-line no-param-reassign
        --maxErrors;
      }

      return empty;
    }

    return throwError(() => (errorFactory !== undefined ? errorFactory(error) : error));
  });
}
