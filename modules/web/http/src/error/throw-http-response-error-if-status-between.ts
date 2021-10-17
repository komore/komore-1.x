import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { throwIf } from '@komore/reactive';
import { HttpResponseError } from './http-response-error';

/**
 * Throws an HTTP response error when an emitted response indicates a failure
 *
 * A response is considered to have failed if its status code is between status codes `minimumStatusCode` and
 * `maximumStatusCode`.
 *
 * @returns Operator function that throws an `HttpResponseError` if the emitted response's status code is a failure
 */
export function throwHttpResponseErrorIfStatusBetween(
  minimumStatusCode: number,
  maximumStatusCode?: number
): MonoTypeOperatorFunction<Response> {
  return throwIf(
    ({ status }) => minimumStatusCode <= status && status <= (maximumStatusCode ?? Number.MAX_SAFE_INTEGER),
    response => new HttpResponseError(response)
  );
}
