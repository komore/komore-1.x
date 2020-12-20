import { HttpRequest } from '@aws-sdk/types';
import { formatUrl } from '@aws-sdk/util-format-url';

/**
 * Gets a URL from an HTTP request
 * @param httpRequest HTTP request
 * @returns URL
 */
export function getRequestUrl(httpRequest: HttpRequest): string {
  return formatUrl(httpRequest);
}
