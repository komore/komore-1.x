import { HttpResponseError } from './http-response-error';

/**
 * Returns an HTTP response error holding the response
 * @param response Response
 * @returns HTTP response error
 */
export function responseToHttpResponseError(response: Response): HttpResponseError {
  return new HttpResponseError(response);
}
