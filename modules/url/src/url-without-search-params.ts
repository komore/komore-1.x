/**
 * Returns a URL without any search parameters
 *
 * @param url URL
 * @returns URL without search parameters
 */
export function urlWithoutSearchParams(url: URL): URL {
  return new URL(url.origin + url.pathname);
}
