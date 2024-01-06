import { httpError } from '../../http.error';
import { type HttpHeaderName } from './http-header-name';
import { isHttpHeaderName } from './is-http-header-name';

/**
 * Validates an HTTP header name is a recognized HTTP header name
 *
 * @param httpHeaderName HTTP header name
 */
export function validateHttpHeaderName(httpHeaderName: string): asserts httpHeaderName is HttpHeaderName {
  if (!isHttpHeaderName(httpHeaderName)) {
    throw httpError.invalidHttpHeaderName({ httpHeaderName });
  }
}
