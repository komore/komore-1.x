import { not } from '@komore/functional';
import { type MonoTypeOperatorFunction, throwIf } from '@komore/reactive';
import { isResponseOk } from '../is-response-ok';
import { responseToHttpResponseError } from './response-to-http-response-error';

/**
 * Throws an HTTP response error when an emitted response indicates a failure
 *
 * A response is considered to have failed if `response.ok` is `false`.
 *
 * @returns Operator function that throws an `HttpResponseError` if the emitted response indicates a failure
 */
export function throwHttpErrorResponseIfFailed(): MonoTypeOperatorFunction<Response> {
  return throwIf(not(isResponseOk), responseToHttpResponseError);
}
