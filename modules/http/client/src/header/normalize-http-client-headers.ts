import { isArray } from '@komore/collection';
import { isDefined, objectToEntries } from '@komore/functional';

/**
 * Normalizes client HTTP headers, turning various shapes of headers into a proper Headers instance
 *
 * @param headersToCombine Set of headers to combine
 * @returns Normalized headers
 * @private
 */
export function normalizeHttpClientHeaders(...headersToCombine: ReadonlyArray<HeadersInit | undefined>): Headers {
  return headersToCombine
    .filter(isDefined)
    .map(headersInitToHeaderEntries)
    .flat()
    .reduce(headerEntriesToHeaders, new Headers());
}

function headersInitToHeaderEntries(headers: HeadersInit): ReadonlyArray<readonly [name: string, value: string]> {
  return headers instanceof Headers ? [...headers.entries()] : isArray(headers) ? headers : objectToEntries(headers);
}

function headerEntriesToHeaders(headers: Headers, entry: readonly [name: string, value: string]): Headers {
  const [headerName, headerValue] = entry;
  headers.append(headerName, headerValue);
  return headers;
}
