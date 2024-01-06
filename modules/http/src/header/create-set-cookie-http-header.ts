import { type HttpCookie } from '../cookie/http-cookie';
import { type HttpHeader } from '../header/http-header';

/**
 * Returns a Set-Cookie HTTP header
 *
 * @param httpCookie HTTP cookie
 * @returns Set-Cookie HTTP header
 */
export function createSetCookieHttpHeader(
  httpCookie: Pick<HttpCookie, 'name' | 'value'> & Partial<Omit<HttpCookie, 'name' | 'value'>>
): HttpHeader {
  const nameValuePair = httpCookieToHttpHeaderNameValuePair(httpCookie);
  const { domain, expires, httpOnly, maxAge, partitioned, path, sameSite, secure } = httpCookie;
  const properties = [
    nameValuePair,
    ...(domain !== undefined ? [`Domain=${domain}`] : []),
    // TODO: convert expires to an HTTP date
    ...(expires !== undefined ? [`Expires=${expires}`] : []),
    ...(httpOnly ? [`HttpOnly`] : []),
    ...(maxAge !== undefined ? [`Max-Age=${maxAge}`] : []),
    ...(partitioned ? ['Partitioned'] : []),
    ...(path !== undefined ? [`Path=${path}`] : []),
    ...(sameSite !== undefined ? [`SameSite=${sameSite}`] : []),
    ...(secure ? [`Secure`] : []),
  ];
  const value = properties.join('; ');
  return ['set-cookie', value];
}

function httpCookieToHttpHeaderNameValuePair(httpCookie: Pick<HttpCookie, 'name' | 'value'>): string {
  const { name, value } = httpCookie;
  return `${name}=${value}`;
}
