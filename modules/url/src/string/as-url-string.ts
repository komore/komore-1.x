import { type UrlString } from './url-string';
import { validateUrlString } from './validate-url-string';

/**
 * Returns a URL string, given a string
 *
 * @param urlString URL string
 * @returns URL string
 */
export function asUrlString(urlString: string): UrlString {
  validateUrlString(urlString);
  return urlString;
}
