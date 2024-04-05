import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a function that returns a URL with additional search parameters
 *
 * @param additionalSearchParams Additional search parameters
 * @returns Function that returns a URL with additional search parameters
 */
export function urlWithSearchParams(
  additionalSearchParams: URLSearchParams | ReadonlyRecord<string, string>
): (url: URL) => URL {
  return url => {
    const searchParams = new URLSearchParams({ ...url.searchParams, ...additionalSearchParams });
    return new URL(url.origin + url.pathname + '?' + searchParams.toString);
  };
}
