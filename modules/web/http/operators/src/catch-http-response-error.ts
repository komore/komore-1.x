import type { Observable, OperatorFunction } from '@komore/reactive';
import { of } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
import { HttpResponseError } from './http-response-error';

/**
 * Catches an HTTP error, returning a new observable or throwing a new error
 *
 * An HTTP error is any response where the `ok` property is set to `false`.
 * @param selector Selector function
 * @template T Value type emitted by the error selector function
 */
export function catchHttpResponseError<T>(
  selector: (error: HttpResponseError) => Observable<T>
): OperatorFunction<Response, Response | T> {
  return switchMap((response): Observable<Response | T> => {
    if (response.ok) {
      return of(response);
    }

    return selector(response);
  });
}

/**
 * Catches an HTTP error, returning a new observable or throwing a new error
 *
 * An HTTP error is any response where the `ok` property is set to `false` and the status code is equal or greater than
 * `minimumStatus` and, if present, equal or less than `maximumStatus`.
 * @param selector Selector function
 * @param minimumStatus Minimum status code used to determine that an HTTP response is an error
 * @param maximumStatus
 * @template T Value type emitted by the error selector function
 */
export function catchHttpError<T>(
  selector: (response: Response) => Observable<T>,
  minimumStatus: number,
  maximumStatus?: number
): OperatorFunction<Response, Response | T>;

/**
 * Catches an HTTP error, returning a new observable or throwing a new error
 *
 * An HTTP error is any response where the `ok` property is set to `false` and the status code is present in the
 * `statusCodes` array.
 * @param selector Selector function
 * @param statusCodes List of status codes considered to mean an error occured
 * @param maximumStatus
 * @template T Value type emitted by the error selector function
 */
 export function catchHttpError<T>(
    selector: (response: Response) => Observable<T>,
    statusCodes: ReadonlyArray<number>
  ): OperatorFunction<Response, Response | T>;
  
/**
 * Catches an HTTP error, returning a new observable or throwing a new error
 * @param selector Selector function
 * @template T Value type emitted by the error selector function
 */
export function catchHttpError<T>(
  selector: (response: Response) => Observable<T>,
  statusCodesOrMinimum?: number | ReadonlyArray<number>,
  maximumStatus?: number
): OperatorFunction<Response, Response | T> {
  if (statusCodesOrMinimum === undefined) {
    return switchMap((response): Observable<Response | T> => {
      if (!response.ok) {
        return selector(response);
      }

      return of(response);
    });
  } else if (typeof statusCodesOrMinimum === 'number') {
    const minimumStatus = statusCodesOrMinimum;

    return switchMap((response): Observable<Response | T> => {
      if (minimumStatus <= response.status && (maximumStatus === undefined || response.status <= maximumStatus)) {
        return selector(response);
      }

      return of(response);
    });
  } else {
    const statusCodes = statusCodesOrMinimum;

    return switchMap((response): Observable<Response | T> => {
      if (statusCodes.includes(response.status))
    });
      }
  return switchMap(
    (response): Observable<Response | T> => {
      if (response.ok) {
        return of(response);
      }

      return selector(response);
    }
  );
}

function catchHttpErrorWithStatusIn(statusCodes: ReadonlyArray<number>) {
  return 
}
