/**
 * Returns a request that performs a `GET` request towards the specified URL
 * @param url URL
 * @returns Request
 */
export function urlToRequest(url: string | URL): Request {
  const input = url instanceof URL ? url.href : url;
  return new Request(input);
}
