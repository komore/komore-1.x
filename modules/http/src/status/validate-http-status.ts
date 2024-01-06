import { httpError } from '../http.error';
import { type HttpStatus } from './http-status';
import { isHttpStatus } from './is-http-status';

/**
 * Validates that a string is a known HTTP status
 *
 * @param httpStatus HTTP status string
 */
export function validateHttpStatus(httpStatus: number): asserts httpStatus is HttpStatus {
  if (!isHttpStatus(httpStatus)) {
    throw httpError.invalidHttpStatus({ httpStatus });
  }
}
