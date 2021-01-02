import { EMPTY, MonoTypeOperatorFunction, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Ignores errors in a stream
 * @param maxErrors Maximum number of errors to ignore
 * @param errorFactory Error factory
 */
export function ignoreErrors<T>(
  maxErrors?: number,
  errorFactory?: (lastError: unknown) => unknown
): MonoTypeOperatorFunction<T> {
  return catchError(error => {
    if (maxErrors === undefined || maxErrors > 0) {
      if (maxErrors !== undefined) {
        --maxErrors;
      }

      return EMPTY;
    }

    return throwError(() => (errorFactory !== undefined ? errorFactory(error) : error));
  });
}
