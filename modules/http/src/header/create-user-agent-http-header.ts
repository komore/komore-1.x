import { type HttpHeader } from './http-header';

/**
 * Returns a User-Agent HTTP header
 *
 * @param userAgent User agent
 * @returns User-Agent HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent User-Agent}
 */
export function createUserAgentHttpHeader(userAgent: string): HttpHeader {
  return ['user-agent', userAgent];
}
