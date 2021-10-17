import { HttpErrorResponse } from './error/http-error-response';

/**
 * Returns an HTTP error response holding the response
 * @param response Response
 * @returns HTTP error response
 */
export function toHttpErrorResponse(response: Response): HttpErrorResponse {
  return new HttpErrorResponse(response);
}
