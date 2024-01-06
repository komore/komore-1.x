import { type HttpHeader } from './http-header';

/**
 * Returns a Server HTTP header
 *
 * @param serverName Server name
 * @returns Server HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server Server}
 */
export function createServerHttpHeader(serverName: string): HttpHeader {
  return ['server', serverName];
}
