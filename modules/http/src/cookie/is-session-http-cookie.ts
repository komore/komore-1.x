import { type HttpCookie } from './http-cookie';

/**
 * Tests whether an HTTP cookie is a session cookie
 *
 * An HTTP cookie is a session cookie when it does not have any expiration information
 *
 * @param httpCookie HTTP cookie
 * @returns true if the HTTP cookie is a session cookie
 */
export function isSessionHttpCookie(httpCookie: HttpCookie): boolean {
  const { expires, maxAge } = httpCookie;
  return expires === undefined && maxAge === undefined;
}
