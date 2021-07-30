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
  return throwIf(
    ({ ok }) => !ok,
    response => new HttpResponseError(response)
  );
}
