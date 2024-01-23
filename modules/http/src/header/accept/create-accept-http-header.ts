import { isArray } from '@komore/collection';

import { type MediaType } from '../../media/media-type';
import { type HttpHeader } from '../http-header';
import { type WeightedMediaType } from './weighted-media-type';
import { mediaTypeToAcceptHttpHeaderValuePart } from './media-type-to-accept-http-header-value-part';

/**
 * Returns an Accept HTTP header
 *
 * @param mediaType Media type
 * @returns Accept HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept Accept}
 */
export function createAcceptHttpHeader(mediaType: MediaType): HttpHeader;

/**
 * Returns an Accept HTTP header with a list of media types
 *
 * @param mediaType Media type
 * @returns Accept HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept Accept}
 */
export function createAcceptHttpHeader(mediaTypes: ReadonlyArray<MediaType | WeightedMediaType>): HttpHeader;

export function createAcceptHttpHeader(
  mediaTypeOrTypes: MediaType | ReadonlyArray<MediaType | WeightedMediaType>
): HttpHeader {
  const value = isArray(mediaTypeOrTypes)
    ? mediaTypeOrTypes.map(mediaTypeToAcceptHttpHeaderValuePart).join(', ')
    : mediaTypeOrTypes;
  return ['accept', value];
}
