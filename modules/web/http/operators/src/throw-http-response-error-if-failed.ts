import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { throwIf } from '@komore/reactive/operators';
import { HttpResponseError } from './http-response-error';

/**
 * Throws an HTTP response error when an emitted response indicates a failure
 *
 * A response is considered to have failed if `response.ok` is `false`.
 *
 * @returns Operator function that throws an `HttpResponseError` if the emitted response indicates a failure
 */
export function throwHttpResponseErrorIfFailed(): MonoTypeOperatorFunction<Response> {
  return throwIf(({ ok }) => !ok, response => new HttpResponseError(response));
}

/**
 * Throws an HTTP response error when an emitted response indicates a failure
 *
 * A response is considered to have failed if `response.ok` is `false`.
 *
 * @returns Operator function that throws an `HttpResponseError` if the emitted response's status code is  a failure
 */
export function throwIfHttpError(
  minimumStatusCode: number,
  maximumStatusCode?: number
): MonoTypeOperatorFunction<Response>;

/**
 * Throws an HTTP response error when an emitted response's status code is one of a 
 * @param statusCodes 
 */
export function throwIfHttpError(statusCodes: ReadonlyArray<number>): MonoTypeOperatorFunction<Response>;

export function throwIfHttpError(
  statusesOrMinStatus?: ReadonlyArray<number> | number,
  maxStatus?: number
): MonoTypeOperatorFunction<Response> {
  function buildHttpResponseError(response: Response): HttpResponseError {
    return new HttpResponseError(response);
  }

  if (statusesOrMinStatus === undefined) {
    return throwIf(response => !response.ok, buildHttpResponseError);
  } else if (typeof statusesOrMinStatus === 'number') {
    const minStatus = statusesOrMinStatus;
    return throwIf(
      ({ status }) => minStatus <= status && (maxStatus === undefined || status <= maxStatus),
      buildHttpResponseError
    );
  } else {
    const statuses = new Set<number>(statusesOrMinStatus);
    return throwIf(({ status }) => statuses.has(status), buildHttpResponseError);
  }
}
