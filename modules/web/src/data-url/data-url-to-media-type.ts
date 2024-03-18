import { type MediaType } from '@komore/http';
import { stringToMatchesWith } from '@komore/string';

import { webError } from '../web.error';

/**
 * Creates a function that returns a media type, given a data URL
 *
 * @returns Function that returns a media type, given a data URL
 */
export function dataUrlToMediaType(): (dataUrl: URL | string) => MediaType {
  type Matches = readonly [matched: string, mediaType: string];
  const toMatches = stringToMatchesWith<Matches>(/^data:([^,]*),.+$/);
  return dataUrl => {
    const url = typeof dataUrl === 'string' ? dataUrl : dataUrl.toString();
    const matches = toMatches(url);
    if (matches === undefined) {
      throw webError.invalidDataUrl({ url });
    }

    const [, mediaType] = matches;
    return mediaType;
  };
}
