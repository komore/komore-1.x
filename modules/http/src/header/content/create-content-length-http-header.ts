import { type HttpHeader } from '../http-header';

/**
 * Returns a Content-Length HTTP header
 *
 * @param contentLength Content length
 * @returns Content-Length HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length Content-Length}
 */
export function createContentLengthHttpHeader(contentLength: number): HttpHeader;

/**
 * Returns a Content-Length HTTP header, given a body
 *
 * @param contentLength Content length
 * @returns Content-Length HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length Content-Length}
 */
export function createContentLengthHttpHeader(body: string): HttpHeader;

export function createContentLengthHttpHeader(contentLengthOrBody: number | string): HttpHeader {
  const length = typeof contentLengthOrBody === 'number' ? contentLengthOrBody : contentLengthOrBody.length;
  return ['content-length', `${length}`];
}
