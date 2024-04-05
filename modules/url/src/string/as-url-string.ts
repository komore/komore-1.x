import { type UrlString } from './url-string';
import { validateUrlString } from './validate-url-string';

/**
 * Returns a URL string, given a string
 *
 * @param urlString URL string
 * @returns URL string
 */
export function asUrlString(urlString: string | URL): UrlString {
  if (urlString instanceof URL) {
    return urlString.toString() as UrlString;
  }

  validateUrlString(urlString);
  return urlString;
}
