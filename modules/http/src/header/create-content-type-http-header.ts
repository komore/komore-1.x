import { type MediaType } from '../media/media-type';
import { type HttpHeader } from './http-header';

/**
 * Returns a Content-Type HTTP header
 *
 * @param mediaType Media type
 * @param options Options
 * @returns Content-Type HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type Content-Type}
 */
export function createContentTypeHttpHeader(
  mediaType: MediaType,
  // TODO: typed character set
  options?: { readonly charset?: string, readonly boundary?: string }
): HttpHeader {
  const charset = options?.charset;
  const boundary = options?.boundary;
  const value = [
    mediaType,
    ...(charset !== undefined ? [`charset=${charset}`] : []),
    ...(boundary !== undefined ? [`boundary=${boundary}`] : []),
  ].join('; ');
  return ['content-type', value];
}
