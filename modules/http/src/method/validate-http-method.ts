import { httpError } from '../http.error';
import { type HttpMethod } from './http-method';
import { isHttpMethod } from './is-http-method';

/**
 * Validates that a string is a known HTTP method
 *
 * @param httpMethod HTTP method string
 */
export function validateHttpMethod(httpMethod: string): asserts httpMethod is HttpMethod {
  if (!isHttpMethod(httpMethod)) {
    throw httpError.invalidHttpMethod({ httpMethod });
  }
}
