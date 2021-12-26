import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { throwIf } from '@komore/reactive';
import { HttpResponseError } from './http-response-error';

/**
 * Throws an HTTP response error when an emitted response's status code is within a specific set of status codes
 * @param statusCodes List of status codes that cause an HTTP response error to be thrown
 */
export function throwHttpResponseErrorIfStatusIn(
  ...statusCodes: ReadonlyArray<number>
): MonoTypeOperatorFunction<Response> {
  const statuses = new Set<number>(statusCodes);
  return throwIf(
    ({ status }) => statuses.has(status),
    response => new HttpResponseError(response)
  );
}
