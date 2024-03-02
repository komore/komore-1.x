import { type HttpHeader } from './http-header';

/**
 * Returns a Host HTTP header
 *
 * @param hostName Host name
 * @returns Host HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host Host}
 */
export function createHostHttpHeader(hostName: string): HttpHeader {
  return ['host', hostName];
}
