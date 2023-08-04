import { InvalidUrlStringError } from '../error/invalid-url-string-error';
import { isUrlString } from './is-url-string';
import { type UrlString } from './url-string';

/**
 * Validates that a URL string is a valid URL string
 *
 * @param urlString String
 */
export function validateUrlString(urlString: string): asserts urlString is UrlString {
  if (!isUrlString(urlString)) {
    throw new InvalidUrlStringError(`invalid URL string "${urlString}"`, urlString);
  }
}
