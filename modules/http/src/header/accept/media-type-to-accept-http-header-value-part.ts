import { type MediaType } from '../../media/media-type';
import { type WeightedMediaType } from './weighted-media-type';

/**
 * Returns an Accept HTTP header value part, given a media type or a weighted media type
 *
 * @param mediaType Media type
 * @returns Accept HTTP header value part
 */
export function mediaTypeToAcceptHttpHeaderValuePart(mediaType: MediaType | WeightedMediaType): string {
  if (typeof mediaType === 'string') {
    return mediaType;
  }

  const { weight } = mediaType;
  if (weight === undefined) {
    return mediaType.mediaType;
  }

  return `${mediaType.mediaType};q=${weight}`;
}
